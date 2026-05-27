import * as THREE from 'three';
import {
  ControlBindings,
  getDefaultControlBindings,
  isActionActive,
  normalizeInputId,
} from './controlBindings';

export const THRUST = 20;      // units/s²
export const MAX_SPEED = 30;   // units/s
export const DRAG = 2.5;       // 1/s drag coefficient — velocity decays to ~5% in 2 s
export const ROLL_SPEED = 1.8; // rad/s
export const STRONG_BOOST_SPEED_MULTIPLIER = 1.6;
export const STRONG_BOOST_KEY_CODES = ['ShiftLeft', 'ShiftRight'] as const;

export interface FlightUpdateOptions {
  /** False while landed or in warp; defaults to true for existing callers/tests. */
  boostAllowed?: boolean;
}

export function isStrongBoostKey(keyOrCode: string): boolean {
  const normalized = keyOrCode.toLowerCase();
  return normalized === 'shift' || normalized === 'shiftleft' || normalized === 'shiftright';
}

export function getNormalMaxForwardSpeed(speedBonus = 0): number {
  return MAX_SPEED + speedBonus;
}

export function getStrongBoostMaxForwardSpeed(speedBonus = 0): number {
  return getNormalMaxForwardSpeed(speedBonus) * STRONG_BOOST_SPEED_MULTIPLIER;
}

export function getStrongBoostThrust(thrustBonus = 0): number {
  return (THRUST + thrustBonus) * STRONG_BOOST_SPEED_MULTIPLIER;
}

function normalizeKeyId(keyOrCode: string): string {
  return normalizeInputId(keyOrCode);
}

/**
 * Apply frame-rate-independent drag in-place.
 * Multiply velocity by (1 - drag * dt) each frame → exponential decay toward zero.
 */
export function applyDrag(
  velocity: THREE.Vector3,
  drag: number,
  dt: number,
): void {
  velocity.multiplyScalar(Math.max(0, 1 - drag * dt));
}

/**
 * Apply thrust from a local-space input vector, rotated into world space.
 * localInput: x = strafe (pos=right), z = longitudinal (neg=forward in Three.js).
 * Zero-length input is a no-op.
 */
export function applyThrust(
  velocity: THREE.Vector3,
  localInput: THREE.Vector3,
  quaternion: THREE.Quaternion,
  thrust: number,
  maxSpeed: number,
  dt: number,
): void {
  if (localInput.lengthSq() === 0) return;

  const speedBefore = velocity.length();
  const worldForce = localInput
    .clone()
    .normalize()
    .multiplyScalar(thrust * dt)
    .applyQuaternion(quaternion);

  velocity.add(worldForce);

  const speed = velocity.length();
  if (speed > maxSpeed) {
    const allowedSpeed = speedBefore > maxSpeed ? speedBefore : maxSpeed;
    if (speed > allowedSpeed) {
      velocity.multiplyScalar(allowedSpeed / speed);
    }
  }
}

export class FlightController {
  readonly velocity = new THREE.Vector3();

  /** Added by engine upgrades — stacks on top of the base THRUST constant. */
  thrustBonus = 0;
  /** Added by engine upgrades — stacks on top of the base MAX_SPEED constant. */
  speedBonus = 0;

  private readonly keys: Record<string, boolean> = {};
  private readonly _onKeyDown: (e: KeyboardEvent) => void;
  private readonly _onKeyUp: (e: KeyboardEvent) => void;
  private bindings: ControlBindings;

  constructor(bindings: ControlBindings = getDefaultControlBindings()) {
    this.bindings = { ...bindings };
    this._onKeyDown = (e) => {
      this.keys[normalizeKeyId(e.key)] = true;
      if (e.code) this.keys[normalizeKeyId(e.code)] = true;
    };
    this._onKeyUp = (e) => {
      this.keys[normalizeKeyId(e.key)] = false;
      if (e.code) this.keys[normalizeKeyId(e.code)] = false;
    };
  }

  attach(): void {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  detach(): void {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
  }

  setBindings(bindings: ControlBindings): void {
    this.bindings = { ...bindings };
  }

  /** Directly set a key state — used by tests without DOM events. */
  setKey(key: string, down: boolean): void {
    this.keys[normalizeKeyId(key)] = down;
  }

  /** Clear all latched key state when UI overlays interrupt live flight input. */
  clearInput(): void {
    for (const key of Object.keys(this.keys)) {
      this.keys[key] = false;
    }
  }

  isStrongBoostActive(boostAllowed = true): boolean {
    return boostAllowed && isActionActive(this.keys, this.bindings, 'strongBoost');
  }

  getThrustInputMagnitude(): number {
    const x =
      (isActionActive(this.keys, this.bindings, 'strafeRight') ? 1 : 0) -
      (isActionActive(this.keys, this.bindings, 'strafeLeft') ? 1 : 0);
    const z =
      (isActionActive(this.keys, this.bindings, 'thrustBackward') ? 1 : 0) -
      (isActionActive(this.keys, this.bindings, 'thrustForward') ? 1 : 0);
    return Math.min(1, Math.sqrt(x * x + z * z));
  }

  isStrongBoostEngaged(boostAllowed = true): boolean {
    return (
      boostAllowed &&
      isActionActive(this.keys, this.bindings, 'thrustForward') &&
      this.isStrongBoostActive(true)
    );
  }

  /** Reset velocity to zero — call on game restart to prevent post-death drift. */
  reset(): void {
    this.velocity.set(0, 0, 0);
  }

  /**
   * Call once per frame.
   * Mutates euler.z for roll, advances velocity via thrust + drag, moves position.
   * Engine upgrade bonuses (thrustBonus, speedBonus) are applied on top of base constants.
   */
  update(
    dt: number,
    euler: THREE.Euler,
    position: THREE.Vector3,
    options: FlightUpdateOptions = {},
  ): void {
    const cdt = Math.min(dt, 0.1); // clamp to avoid spiral on tab-resume

    // Roll
    if (isActionActive(this.keys, this.bindings, 'rollLeft')) euler.z += ROLL_SPEED * cdt;
    if (isActionActive(this.keys, this.bindings, 'rollRight')) euler.z -= ROLL_SPEED * cdt;

    // Local-space thrust input: x = strafe, z = forward/back (-z = forward)
    const localInput = new THREE.Vector3(
      (isActionActive(this.keys, this.bindings, 'strafeRight') ? 1 : 0) -
        (isActionActive(this.keys, this.bindings, 'strafeLeft') ? 1 : 0),
      0,
      (isActionActive(this.keys, this.bindings, 'thrustBackward') ? 1 : 0) -
        (isActionActive(this.keys, this.bindings, 'thrustForward') ? 1 : 0),
    );

    const q = new THREE.Quaternion().setFromEuler(euler);
    const baseMaxSpeed = getNormalMaxForwardSpeed(this.speedBonus);
    const strongBoostActive = this.isStrongBoostEngaged(options.boostAllowed ?? true);
    const maxSpeed = strongBoostActive
      ? getStrongBoostMaxForwardSpeed(this.speedBonus)
      : baseMaxSpeed;

    const thrust = strongBoostActive
      ? getStrongBoostThrust(this.thrustBonus)
      : THRUST + this.thrustBonus;

    applyThrust(this.velocity, localInput, q, thrust, maxSpeed, cdt);
    applyDrag(this.velocity, DRAG, cdt);

    position.addScaledVector(this.velocity, cdt);
  }
}
