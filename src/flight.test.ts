import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  applyDrag,
  applyThrust,
  DRAG,
  THRUST,
  MAX_SPEED,
  FlightController,
} from './flight';

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
});
