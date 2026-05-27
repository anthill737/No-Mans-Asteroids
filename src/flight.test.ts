import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  applyDrag,
  applyThrust,
  DRAG,
  THRUST,
  MAX_SPEED,
  FlightController,
  STRONG_BOOST_SPEED_MULTIPLIER,
  getNormalMaxForwardSpeed,
  getStrongBoostMaxForwardSpeed,
  isStrongBoostKey,
} from './flight';

function runForward(controller: FlightController, frames = 900): number {
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const pos = new THREE.Vector3();
  for (let i = 0; i < frames; i++) controller.update(1 / 60, euler, pos);
  return controller.velocity.length();
}

describe('applyDrag', () => {
  it('reduces velocity magnitude each frame', () => {
    const v = new THREE.Vector3(10, 0, 0);
    applyDrag(v, DRAG, 1 / 60);
    expect(v.x).toBeLessThan(10);
    expect(v.x).toBeGreaterThan(0);
  });

  it('decays to under 15% of original within 1 second at 60 fps', () => {
    const v = new THREE.Vector3(MAX_SPEED, 0, 0);
    for (let i = 0; i < 60; i++) applyDrag(v, DRAG, 1 / 60);
    expect(v.length()).toBeLessThan(MAX_SPEED * 0.15);
  });

  it('decays to near-zero (< 5%) within 2 seconds at 60 fps', () => {
    const v = new THREE.Vector3(MAX_SPEED, 0, 0);
    for (let i = 0; i < 120; i++) applyDrag(v, DRAG, 1 / 60);
    expect(v.length()).toBeLessThan(MAX_SPEED * 0.05);
  });

  it('never produces negative components via overshoot', () => {
    const v = new THREE.Vector3(0.001, 0, 0);
    applyDrag(v, DRAG, 1 / 60);
    expect(v.x).toBeGreaterThanOrEqual(0);
  });
});

describe('applyThrust', () => {
  it('accelerates forward with local -z input (identity quaternion → world -z)', () => {
    const v = new THREE.Vector3(0, 0, 0);
    const localInput = new THREE.Vector3(0, 0, -1);
    const q = new THREE.Quaternion(); // identity
    applyThrust(v, localInput, q, THRUST, MAX_SPEED, 1 / 60);
    expect(v.z).toBeCloseTo(-(THRUST / 60), 5);
  });

  it('accelerates rightward with local +x input', () => {
    const v = new THREE.Vector3(0, 0, 0);
    const localInput = new THREE.Vector3(1, 0, 0);
    const q = new THREE.Quaternion();
    applyThrust(v, localInput, q, THRUST, MAX_SPEED, 1 / 60);
    expect(v.x).toBeCloseTo(THRUST / 60, 5);
  });

  it('is a no-op with zero input', () => {
    const v = new THREE.Vector3(5, 0, 0);
    applyThrust(v, new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), THRUST, MAX_SPEED, 1 / 60);
    expect(v.x).toBe(5);
  });

  it('never exceeds MAX_SPEED regardless of sustained input', () => {
    const v = new THREE.Vector3(0, 0, 0);
    const localInput = new THREE.Vector3(0, 0, -1);
    const q = new THREE.Quaternion();
    for (let i = 0; i < 600; i++) {
      applyThrust(v, localInput, q, THRUST, MAX_SPEED, 1 / 60);
    }
    expect(v.length()).toBeLessThanOrEqual(MAX_SPEED + 1e-6);
  });

  it('rotates thrust direction by quaternion (90° yaw maps local -z to world -x)', () => {
    const v = new THREE.Vector3(0, 0, 0);
    const localInput = new THREE.Vector3(0, 0, -1);
    const euler = new THREE.Euler(0, Math.PI / 2, 0, 'YXZ');
    const q = new THREE.Quaternion().setFromEuler(euler);
    applyThrust(v, localInput, q, THRUST, MAX_SPEED, 1 / 60);
    expect(v.x).toBeCloseTo(-(THRUST / 60), 4);
    expect(v.z).toBeCloseTo(0, 4);
  });
});

describe('FlightController', () => {
  it('starts with zero velocity', () => {
    const fc = new FlightController();
    expect(fc.velocity.length()).toBe(0);
  });

  it('W key accelerates ship forward (velocity.z decreases from neutral orientation)', () => {
    const fc = new FlightController();
    fc.setKey('w', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    fc.update(1 / 60, euler, pos);
    expect(fc.velocity.z).toBeLessThan(0);
  });

  it('S key accelerates ship backward (velocity.z increases)', () => {
    const fc = new FlightController();
    fc.setKey('s', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    fc.update(1 / 60, euler, pos);
    expect(fc.velocity.z).toBeGreaterThan(0);
  });

  it('A key strafes ship left (velocity.x decreases)', () => {
    const fc = new FlightController();
    fc.setKey('a', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    fc.update(1 / 60, euler, pos);
    expect(fc.velocity.x).toBeLessThan(0);
  });

  it('D key strafes ship right (velocity.x increases)', () => {
    const fc = new FlightController();
    fc.setKey('d', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    fc.update(1 / 60, euler, pos);
    expect(fc.velocity.x).toBeGreaterThan(0);
  });

  it('Q key increases euler.z (roll clockwise)', () => {
    const fc = new FlightController();
    fc.setKey('q', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    fc.update(1 / 60, euler, new THREE.Vector3());
    expect(euler.z).toBeGreaterThan(0);
  });

  it('E key decreases euler.z (roll counterclockwise)', () => {
    const fc = new FlightController();
    fc.setKey('e', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    fc.update(1 / 60, euler, new THREE.Vector3());
    expect(euler.z).toBeLessThan(0);
  });

  it('velocity decays to near-zero within 2 seconds when no keys held', () => {
    const fc = new FlightController();
    fc.velocity.set(MAX_SPEED, 0, 0);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    for (let i = 0; i < 120; i++) fc.update(1 / 60, euler, pos);
    expect(fc.velocity.length()).toBeLessThan(MAX_SPEED * 0.05);
  });

  it('position advances in velocity direction each frame', () => {
    const fc = new FlightController();
    fc.velocity.set(10, 0, 0);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3(0, 0, 0);
    fc.update(1 / 60, euler, pos);
    expect(pos.x).toBeGreaterThan(0);
  });

  it('reset() zeroes velocity regardless of prior state', () => {
    const fc = new FlightController();
    fc.velocity.set(MAX_SPEED, MAX_SPEED, MAX_SPEED);
    fc.reset();
    expect(fc.velocity.x).toBe(0);
    expect(fc.velocity.y).toBe(0);
    expect(fc.velocity.z).toBe(0);
    expect(fc.velocity.length()).toBe(0);
  });

  it('reset() prevents post-death drift: no position change after reset with no input', () => {
    const fc = new FlightController();
    fc.velocity.set(MAX_SPEED, 0, -MAX_SPEED);
    fc.reset();
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3(0, 0, 0);
    fc.update(1 / 60, euler, pos);
    // With zeroed velocity and no key input, position should remain at origin (within drag epsilon)
    expect(pos.length()).toBe(0);
  });

  it('clearInput() releases held thrust and boost keys for menu pauses', () => {
    const fc = new FlightController();
    fc.setKey('w', true);
    fc.setKey('ShiftLeft', true);

    expect(fc.getThrustInputMagnitude()).toBeGreaterThan(0);
    expect(fc.isStrongBoostActive()).toBe(true);

    fc.clearInput();

    expect(fc.getThrustInputMagnitude()).toBe(0);
    expect(fc.isStrongBoostActive()).toBe(false);
  });

  it('exports a SHIFT boost speed cap at least 1.5x normal forward top speed', () => {
    expect(STRONG_BOOST_SPEED_MULTIPLIER).toBeGreaterThanOrEqual(1.5);
    expect(getStrongBoostMaxForwardSpeed()).toBeGreaterThanOrEqual(
      getNormalMaxForwardSpeed() * 1.5,
    );
  });

  it('holding SHIFT while flying forward reaches at least 1.5x normal sustained forward speed', () => {
    const normal = new FlightController();
    normal.setKey('w', true);
    const normalSpeed = runForward(normal);

    const boosted = new FlightController();
    boosted.setKey('w', true);
    boosted.setKey('ShiftLeft', true);
    const boostedSpeed = runForward(boosted);

    expect(boostedSpeed).toBeGreaterThanOrEqual(normalSpeed * 1.5);
  });

  it('both left SHIFT and right SHIFT key codes map to strong boost activation', () => {
    expect(isStrongBoostKey('ShiftLeft')).toBe(true);
    expect(isStrongBoostKey('ShiftRight')).toBe(true);

    const left = new FlightController();
    left.setKey('ShiftLeft', true);
    expect(left.isStrongBoostActive()).toBe(true);

    const right = new FlightController();
    right.setKey('ShiftRight', true);
    expect(right.isStrongBoostActive()).toBe(true);
  });

  it('reports strong boost engaged only when forward thrust and SHIFT are both active', () => {
    const fc = new FlightController();
    fc.setKey('ShiftLeft', true);
    expect(fc.isStrongBoostEngaged()).toBe(false);

    fc.setKey('w', true);
    expect(fc.isStrongBoostEngaged()).toBe(true);

    fc.setKey('ShiftLeft', false);
    expect(fc.isStrongBoostEngaged()).toBe(false);
  });

  it('releasing SHIFT decelerates through drag instead of instantly cutting to normal cruise speed', () => {
    const normal = new FlightController();
    normal.setKey('w', true);
    const normalCruiseSpeed = runForward(normal);

    const boosted = new FlightController();
    boosted.setKey('w', true);
    boosted.setKey('ShiftLeft', true);
    runForward(boosted);
    const boostedSpeed = boosted.velocity.length();

    boosted.setKey('ShiftLeft', false);
    boosted.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());

    expect(boosted.velocity.length()).toBeLessThan(boostedSpeed);
    expect(boosted.velocity.length()).toBeGreaterThan(normalCruiseSpeed);
  });

  it('does not apply SHIFT boost when boostAllowed is false for surface or warp states', () => {
    const normal = new FlightController();
    normal.setKey('w', true);
    const normalSpeed = runForward(normal);

    const gated = new FlightController();
    gated.setKey('w', true);
    gated.setKey('ShiftRight', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();
    for (let i = 0; i < 900; i++) {
      gated.update(1 / 60, euler, pos, { boostAllowed: false });
    }

    expect(gated.velocity.length()).toBeCloseTo(normalSpeed, 5);
  });

  it('leaves non-forward flight controls unchanged while SHIFT is held', () => {
    const strafe = new FlightController();
    strafe.setKey('d', true);
    strafe.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());

    const strafeWithShift = new FlightController();
    strafeWithShift.setKey('d', true);
    strafeWithShift.setKey('ShiftLeft', true);
    strafeWithShift.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());

    expect(strafeWithShift.velocity.x).toBeCloseTo(strafe.velocity.x, 6);
    expect(strafeWithShift.velocity.z).toBeCloseTo(strafe.velocity.z, 6);

    const roll = new FlightController();
    roll.setKey('q', true);
    const rollEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    roll.update(1 / 60, rollEuler, new THREE.Vector3());

    const rollWithShift = new FlightController();
    rollWithShift.setKey('q', true);
    rollWithShift.setKey('ShiftRight', true);
    const shiftedRollEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    rollWithShift.update(1 / 60, shiftedRollEuler, new THREE.Vector3());

    expect(shiftedRollEuler.z).toBeCloseTo(rollEuler.z, 6);
  });
});
