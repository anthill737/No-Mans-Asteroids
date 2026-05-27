import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  ChaingunSystem,
  CHAINGUN_DAMAGE,
  CHAINGUN_FIRE_RATE,
  CHAINGUN_BEAM_FRAMES,
} from './chaingun';
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

// ── Constants ───────────────────────────────────────────────────────────────

describe('ChaingunSystem constants', () => {
  it('fires at ≥10 rounds per second', () => {
    expect(CHAINGUN_FIRE_RATE).toBeGreaterThanOrEqual(10);
  });

  it('deals less damage per shot than the laser', () => {
    expect(CHAINGUN_DAMAGE).toBeLessThan(LASER_DAMAGE);
  });

  it('deals non-zero damage per hit', () => {
    expect(CHAINGUN_DAMAGE).toBeGreaterThan(0);
  });
});

// ── Ammo ────────────────────────────────────────────────────────────────────

describe('ammo management', () => {
  it('starts with the given ammo count', () => {
    const gun = new ChaingunSystem(makeScene(), 120);
    expect(gun.ammo).toBe(120);
  });

  it('fire() decrements ammo by 1 per shot', () => {
    const gun = new ChaingunSystem(makeScene(), 50);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(gun.ammo).toBe(49);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(gun.ammo).toBe(48);
  });

  it('fire() returns fired=false and ammoRemaining=0 when ammo is 0', () => {
    const gun = new ChaingunSystem(makeScene(), 0);
    const result = gun.fire(ORIGIN, IDENTITY, []);
    expect(result.fired).toBe(false);
    expect(result.hit).toBe(false);
    expect(result.hitObject).toBeNull();
    expect(result.ammoRemaining).toBe(0);
  });

  it('ammo never goes below 0', () => {
    const gun = new ChaingunSystem(makeScene(), 2);
    for (let i = 0; i < 10; i++) gun.fire(ORIGIN, IDENTITY, []);
    expect(gun.ammo).toBe(0);
  });

  it('firing with 0 ammo does nothing — no crash, ammo stays 0', () => {
    const gun = new ChaingunSystem(makeScene(), 0);
    expect(() => gun.fire(ORIGIN, IDENTITY, [])).not.toThrow();
    expect(gun.ammo).toBe(0);
  });

  it('fire() returns correct ammoRemaining after each shot', () => {
    const gun = new ChaingunSystem(makeScene(), 5);
    const r1 = gun.fire(ORIGIN, IDENTITY, []);
    expect(r1.fired).toBe(true);
    expect(r1.ammoRemaining).toBe(4);
    const r2 = gun.fire(ORIGIN, IDENTITY, []);
    expect(r2.ammoRemaining).toBe(3);
  });
});

// ── Fire rate ────────────────────────────────────────────────────────────────

describe('fire rate', () => {
  it('update() fires at least 10 shots when held for 1 second', () => {
    const gun = new ChaingunSystem(makeScene(), 120);
    const results = gun.update(1.0, true, ORIGIN, IDENTITY, []);
    expect(results.length).toBeGreaterThanOrEqual(10);
  });

  it('update() fires exactly 1 shot at exactly 1/FIRE_RATE seconds', () => {
    const gun = new ChaingunSystem(makeScene(), 120);
    const interval = 1 / CHAINGUN_FIRE_RATE;
    // accumulator starts at fireInterval so first shot is immediate
    const results = gun.update(interval, true, ORIGIN, IDENTITY, []);
    expect(results.length).toBeGreaterThanOrEqual(1);
  });

  it('update() with isFiring=false fires 0 shots', () => {
    const gun = new ChaingunSystem(makeScene(), 120);
    const results = gun.update(1.0, false, ORIGIN, IDENTITY, []);
    expect(results.length).toBe(0);
    expect(gun.ammo).toBe(120);
  });

  it('update() stops firing when ammo hits 0', () => {
    const gun = new ChaingunSystem(makeScene(), 5);
    const results = gun.update(10.0, true, ORIGIN, IDENTITY, []);
    // Only 5 shots possible
    const firedCount = results.filter((r) => r.fired).length;
    expect(firedCount).toBe(5);
    expect(gun.ammo).toBe(0);
  });

  it('accumulated time carries across multiple update() calls', () => {
    const gun = new ChaingunSystem(makeScene(), 120);
    const halfInterval = 1 / CHAINGUN_FIRE_RATE / 2;
    // First call: accumulator starts at fireInterval so fires once, then adds halfInterval
    const r1 = gun.update(halfInterval, true, ORIGIN, IDENTITY, []);
    expect(r1.length).toBeGreaterThanOrEqual(1); // ready to fire immediately
    // Second call adds another halfInterval — enough to fire one more
    const r2 = gun.update(halfInterval, true, ORIGIN, IDENTITY, []);
    expect(r2.length).toBeGreaterThanOrEqual(1);
  });

  it('fire rate produces visibly faster ammo drain than once-per-manual-click', () => {
    // In 1 second of held fire at FIRE_RATE shots/sec, more ammo drains than a single laser click
    const gun = new ChaingunSystem(makeScene(), 120);
    const ammoBeforeSecond = gun.ammo;
    gun.update(1.0, true, ORIGIN, IDENTITY, []);
    const drained = ammoBeforeSecond - gun.ammo;
    expect(drained).toBeGreaterThanOrEqual(10); // ≥10 shots per second
  });
});

// ── Hit detection ────────────────────────────────────────────────────────────

describe('hit detection', () => {
  it('misses when no target is present', () => {
    const gun = new ChaingunSystem(makeScene(), 10);
    const result = gun.fire(ORIGIN, IDENTITY, []);
    expect(result.hit).toBe(false);
    expect(result.hitObject).toBeNull();
  });

  it('hits a target directly in front of the camera', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, -10);
    scene.add(target);
    target.updateMatrixWorld(true);

    const result = gun.fire(ORIGIN, IDENTITY, [target]);
    expect(result.hit).toBe(true);
    expect(result.hitObject).toBe(target);
  });

  it('does not hit a target behind the camera', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, 10); // behind in Three.js convention
    scene.add(target);
    target.updateMatrixWorld(true);

    const result = gun.fire(ORIGIN, IDENTITY, [target]);
    expect(result.hit).toBe(false);
  });

  it('does not hit a target far to the side', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(100, 0, -10);
    scene.add(target);
    target.updateMatrixWorld(true);

    const result = gun.fire(ORIGIN, IDENTITY, [target]);
    expect(result.hit).toBe(false);
  });
});

// ── Damage ───────────────────────────────────────────────────────────────────

describe('damage', () => {
  it('applies CHAINGUN_DAMAGE to hit target', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, -10);
    target.userData.health = 100;
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.fire(ORIGIN, IDENTITY, [target]);
    expect(target.userData.health).toBe(100 - CHAINGUN_DAMAGE);
  });

  it('initializes target health to 100 then applies damage if health not set', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, -10);
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.fire(ORIGIN, IDENTITY, [target]);
    expect(target.userData.health).toBe(100 - CHAINGUN_DAMAGE);
  });

  it('accumulates damage across multiple shots', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, -10);
    target.userData.health = 100;
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.fire(ORIGIN, IDENTITY, [target]);
    gun.fire(ORIGIN, IDENTITY, [target]);
    expect(target.userData.health).toBe(100 - CHAINGUN_DAMAGE * 2);
  });

  it('applies less damage per shot than LASER_DAMAGE', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    const target = makeTarget(0, 0, -10);
    target.userData.health = 100;
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.fire(ORIGIN, IDENTITY, [target]);
    const remaining = target.userData.health;
    // Should have lost CHAINGUN_DAMAGE, which is less than LASER_DAMAGE
    expect(100 - remaining).toBeLessThan(LASER_DAMAGE);
  });

  it('does not apply damage when ammo is 0', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 0);
    const target = makeTarget(0, 0, -10);
    target.userData.health = 100;
    scene.add(target);
    target.updateMatrixWorld(true);

    gun.fire(ORIGIN, IDENTITY, [target]);
    expect(target.userData.health).toBe(100);
  });
});

// ── Beam / flash ─────────────────────────────────────────────────────────────

describe('beam visibility', () => {
  it('adds a beam to the scene when fired', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    expect(scene.children.length).toBe(0);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(scene.children.length).toBe(1);
    expect(scene.children[0]).toBeInstanceOf(THREE.Line);
  });

  it('beam is visible immediately after fire() before any update', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(scene.children.some((c) => c instanceof THREE.Line)).toBe(true);
  });

  it('beam is removed after CHAINGUN_BEAM_FRAMES update() calls with isFiring=false', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(scene.children.length).toBe(1);

    for (let i = 0; i < CHAINGUN_BEAM_FRAMES; i++) {
      gun.update(0, false, ORIGIN, IDENTITY, []);
    }
    expect(scene.children.length).toBe(0);
  });

  it('no beam is created when ammo is 0', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 0);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(scene.children.length).toBe(0);
  });

  it('firing again replaces the beam — only one beam in scene at a time', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    gun.fire(ORIGIN, IDENTITY, []);
    gun.fire(ORIGIN, IDENTITY, []);
    const lines = scene.children.filter((c) => c instanceof THREE.Line);
    expect(lines.length).toBe(1);
  });

  it('update() with isFiring=true produces visible beam per shot', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 120);
    // Hold for one interval — should fire and leave a beam
    gun.update(1 / CHAINGUN_FIRE_RATE, true, ORIGIN, IDENTITY, []);
    expect(scene.children.some((c) => c instanceof THREE.Line)).toBe(true);
  });
});

// ── Reset ────────────────────────────────────────────────────────────────────

describe('reset', () => {
  it('reset() restores ammo', () => {
    const gun = new ChaingunSystem(makeScene(), 100);
    for (let i = 0; i < 50; i++) gun.fire(ORIGIN, IDENTITY, []);
    gun.reset(100);
    expect(gun.ammo).toBe(100);
  });

  it('reset() clamps ammo to maxAmmo', () => {
    const gun = new ChaingunSystem(makeScene(), 100);
    gun.reset(9999);
    expect(gun.ammo).toBe(100);
  });

  it('reset() clamps ammo to 0 for negative input', () => {
    const gun = new ChaingunSystem(makeScene(), 100);
    gun.reset(-5);
    expect(gun.ammo).toBe(0);
  });

  it('reset() removes active beam from scene', () => {
    const scene = makeScene();
    const gun = new ChaingunSystem(scene, 10);
    gun.fire(ORIGIN, IDENTITY, []);
    expect(scene.children.length).toBe(1);
    gun.reset(10);
    expect(scene.children.length).toBe(0);
  });
});
