import * as THREE from 'three';

export const THRUST = 20;      // units/s²
export const MAX_SPEED = 30;   // units/s
export const DRAG = 2.5;       // 1/s drag coefficient — velocity decays to ~5% in 2 s
export const ROLL_SPEED = 1.8; // rad/s

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

  const worldForce = localInput
    .clone()
    .normalize()
    .multiplyScalar(thrust * dt)
    .applyQuaternion(quaternion);

  velocity.add(worldForce);

  const speed = velocity.length();
  if (speed > maxSpeed) {
    velocity.multiplyScalar(maxSpeed / speed);
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

  constructor() {
    this._onKeyDown = (e) => {
      this.keys[e.key.toLowerCase()] = true;
    };
    this._onKeyUp = (e) => {
      this.keys[e.key.toLowerCase()] = false;
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

  /** Directly set a key state — used by tests without DOM events. */
  setKey(key: string, down: boolean): void {
    this.keys[key] = down;
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
  update(dt: number, euler: THREE.Euler, position: THREE.Vector3): void {
    const cdt = Math.min(dt, 0.1); // clamp to avoid spiral on tab-resume

    // Roll
    if (this.keys['q']) euler.z += ROLL_SPEED * cdt;
    if (this.keys['e']) euler.z -= ROLL_SPEED * cdt;

    // Local-space thrust input: x = strafe, z = forward/back (-z = forward)
    const localInput = new THREE.Vector3(
      (this.keys['d'] ? 1 : 0) - (this.keys['a'] ? 1 : 0),
      0,
      (this.keys['s'] ? 1 : 0) - (this.keys['w'] ? 1 : 0),
    );

    const q = new THREE.Quaternion().setFromEuler(euler);
    applyThrust(this.velocity, localInput, q, THRUST + this.thrustBonus, MAX_SPEED + this.speedBonus, cdt);
    applyDrag(this.velocity, DRAG, cdt);

    position.addScaledVector(this.velocity, cdt);
  }
}
