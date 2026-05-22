import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { ChaingunSystem, CHAINGUN_DAMAGE, CHAINGUN_FIRE_RATE } from './chaingun';
import { LASER_DAMAGE } from '../laser';

function makeScene(): THREE.Scene {
  return new THREE.Scene();
}

function makeTarget(x: number, y: number, z: number, size = 2): THREE.Mesh {
  const geo = new THREE.SphereGeometry(size, 8, 8);
  const mat = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.updateMatrixWorld(true);
  return mesh;
}

const ORIGIN = new THREE.Vector3(0, 0, 0);
const IDENTITY = new THREE.Quaternion();

// ── Integration: weapon-switch + fire-while-active behaviour ─────────────────

describe('chaingun integration — weapon active + hold to fire', () => {
  it('holding left-click (isFiring=true) for 1 second fires ≥10 shots', () => {
    const gun = new ChaingunSystem(makeScene(), 200);
    const results = gun.update(1.0, true, ORIGIN, IDENTITY, []);
    const fired = results.filter((r) => r.fired).length;
    expect(fired).toBeGreaterThanOrEqual(10);
  });

  it('chaingun fires at CHAINGUN_FIRE_RATE rounds per second', () => {
    const gun = new ChaingunSystem(makeScene(), 200);
    const results = gun.update(1.0, true, ORIGIN, IDENTITY, []);
    // Should fire exactly CHAINGUN_FIRE_RATE shots (or close, depending on accumulator)
    expect(results.filter((r) => r.fired).length).toBeGreaterThanOrEqual(CHAINGUN_FIRE_RATE);
  });

  it('each chaingun shot applies CHAINGUN_DAMAGE, not LASER_DAMAGE', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 200);
    const target = makeTarget(0, 0, -10);
    target.userData.health = 1000;
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.update(1.0, true, ORIGIN, IDENTITY, [target]);
    const totalDamage = 1000 - target.userData.health;
    const shotsFired = Math.round(totalDamage / CHAINGUN_DAMAGE);

    // Each shot must have used CHAINGUN_DAMAGE (total damage divisible by it)
    expect(totalDamage % CHAINGUN_DAMAGE).toBe(0);
    // And CHAINGUN_DAMAGE is strictly less than LASER_DAMAGE
    expect(CHAINGUN_DAMAGE).toBeLessThan(LASER_DAMAGE);
    // Confirm we fired multiple shots
    expect(shotsFired).toBeGreaterThanOrEqual(10);
  });

  it('isFiring=false produces no shots even after a long dt', () => {
    const gun = new ChaingunSystem(makeScene(), 200);
    const results = gun.update(1.0, false, ORIGIN, IDENTITY, []);
    expect(results.filter((r) => r.fired).length).toBe(0);
  });

  it('chaingun drains ammo faster than one laser shot per click', () => {
    // After 1 second of held fire, chaingun has drained ≥10 ammo
    // A laser manual click drains exactly 1 ammo
    const gun = new ChaingunSystem(makeScene(), 200);
    const before = gun.ammo;
    gun.update(1.0, true, ORIGIN, IDENTITY, []);
    const drained = before - gun.ammo;
    expect(drained).toBeGreaterThan(1); // visibly faster than laser
    expect(drained).toBeGreaterThanOrEqual(10);
  });

  it('firing with 0 ammo while isFiring=true does nothing — no crash', () => {
    const gun = new ChaingunSystem(makeScene(), 0);
    expect(() => gun.update(1.0, true, ORIGIN, IDENTITY, [])).not.toThrow();
    expect(gun.ammo).toBe(0);
  });

  it('weapon switch simulation: no shots when isFiring=true but weapon is not active (isFiring=false)', () => {
    // Simulates: activeWeapon === 'laser', so chaingun gets isFiring=false
    const gun = new ChaingunSystem(makeScene(), 200);
    const ammoBeforeSwitch = gun.ammo;
    gun.update(1.0, false, ORIGIN, IDENTITY, []);
    expect(gun.ammo).toBe(ammoBeforeSwitch);
  });

  it('switching to chaingun then back to laser stops chaingun fire', () => {
    const gun = new ChaingunSystem(makeScene(), 200);

    // Chaingun active: fires
    const r1 = gun.update(0.5, true, ORIGIN, IDENTITY, []);
    expect(r1.filter((r) => r.fired).length).toBeGreaterThanOrEqual(5);

    // Switched away: no more fire
    const r2 = gun.update(0.5, false, ORIGIN, IDENTITY, []);
    expect(r2.filter((r) => r.fired).length).toBe(0);
  });

  it('accumulator resets so no burst fires when weapon is re-selected after idle', () => {
    const gun = new ChaingunSystem(makeScene(), 200);

    // Idle for a long time with weapon inactive
    gun.update(10.0, false, ORIGIN, IDENTITY, []);

    // Now activate — should fire at normal rate, not a huge burst
    const results = gun.update(1 / CHAINGUN_FIRE_RATE, true, ORIGIN, IDENTITY, []);
    // Should fire at most a couple of shots, not 10+ from accumulated time
    expect(results.filter((r) => r.fired).length).toBeLessThanOrEqual(3);
  });
});
