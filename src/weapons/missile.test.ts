import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  MissileSystem,
  MISSILE_DAMAGE,
  MISSILE_SPEED,
  MISSILE_MAX_RANGE,
  MISSILE_MAX_AMMO,
} from './missile';
import { LASER_DAMAGE } from '../laser';

function makeScene(): THREE.Scene {
  return new THREE.Scene();
}

function makeTarget(x: number, y: number, z: number, radius = 5): THREE.Mesh {
  const geo = new THREE.SphereGeometry(radius, 8, 8);
  const mat = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.updateMatrixWorld(true);
  geo.computeBoundingSphere();
  return mesh;
}

const ORIGIN = new THREE.Vector3(0, 0, 0);
const IDENTITY = new THREE.Quaternion();
const DT = 1 / 60; // one frame at 60 fps

// Run update() many times to simulate multiple frames; return all hits collected.
function simulateFrames(
  sys: MissileSystem,
  targets: THREE.Mesh[],
  frames: number,
  dt = DT,
): Array<{ hitObject: THREE.Mesh }> {
  const all: Array<{ hitObject: THREE.Mesh }> = [];
  for (let i = 0; i < frames; i++) {
    all.push(...sys.update(dt, targets));
  }
  return all;
}

// ── Constants ───────────────────────────────────────────────────────────────

describe('MissileSystem constants', () => {
  it('MISSILE_MAX_AMMO is ≤10', () => {
    expect(MISSILE_MAX_AMMO).toBeLessThanOrEqual(10);
  });

  it('MISSILE_DAMAGE is significantly greater than LASER_DAMAGE', () => {
    expect(MISSILE_DAMAGE).toBeGreaterThan(LASER_DAMAGE);
  });

  it('MISSILE_SPEED is defined and positive', () => {
    expect(MISSILE_SPEED).toBeGreaterThan(0);
  });

  it('MISSILE_MAX_RANGE is defined and positive', () => {
    expect(MISSILE_MAX_RANGE).toBeGreaterThan(0);
  });
});

// ── Ammo management ─────────────────────────────────────────────────────────

describe('ammo management', () => {
  it('starts with the given ammo count', () => {
    const sys = new MissileSystem(makeScene(), 8);
    expect(sys.ammo).toBe(8);
  });

  it('fire() decrements ammo by 1', () => {
    const sys = new MissileSystem(makeScene(), 8);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.ammo).toBe(7);
  });

  it('fire() returns fired=false when ammo is 0', () => {
    const sys = new MissileSystem(makeScene(), 0);
    const result = sys.fire(ORIGIN, IDENTITY);
    expect(result.fired).toBe(false);
    expect(result.ammoRemaining).toBe(0);
  });

  it('ammo never goes below 0', () => {
    const sys = new MissileSystem(makeScene(), 2);
    for (let i = 0; i < 10; i++) sys.fire(ORIGIN, IDENTITY);
    expect(sys.ammo).toBe(0);
  });

  it('fire() with 0 ammo does not crash', () => {
    const sys = new MissileSystem(makeScene(), 0);
    expect(() => sys.fire(ORIGIN, IDENTITY)).not.toThrow();
    expect(sys.ammo).toBe(0);
  });

  it('fire() returns correct ammoRemaining', () => {
    const sys = new MissileSystem(makeScene(), 5);
    const r1 = sys.fire(ORIGIN, IDENTITY);
    expect(r1.fired).toBe(true);
    expect(r1.ammoRemaining).toBe(4);
    const r2 = sys.fire(ORIGIN, IDENTITY);
    expect(r2.ammoRemaining).toBe(3);
  });
});

// ── Projectile spawning ─────────────────────────────────────────────────────

describe('projectile mesh', () => {
  it('adds a mesh to the scene when fired', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    expect(scene.children.length).toBe(1);
    expect(scene.children[0]).toBeInstanceOf(THREE.Mesh);
  });

  it('does not add a mesh when ammo is 0', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 0);
    sys.fire(ORIGIN, IDENTITY);
    expect(scene.children.length).toBe(0);
  });

  it('multiple fired missiles all appear in scene', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(3);
    expect(scene.children.length).toBe(3);
  });

  it('missileCount tracks active in-flight missiles', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    expect(sys.missileCount).toBe(0);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(1);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(2);
  });
});

// ── Movement ────────────────────────────────────────────────────────────────

describe('projectile movement', () => {
  it('missile moves forward (in -Z) each update', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);

    const mesh = scene.children[0] as THREE.Mesh;
    const zBefore = mesh.position.z;
    sys.update(DT, []);
    expect(mesh.position.z).toBeLessThan(zBefore);
  });

  it('missile travels MISSILE_SPEED units per second', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    const mesh = scene.children[0] as THREE.Mesh;
    const startZ = mesh.position.z;

    // Use 100 small steps to simulate 1 second
    simulateFrames(sys, [], 60, DT);
    const moved = Math.abs(mesh.position.z - startZ);
    expect(moved).toBeCloseTo(MISSILE_SPEED, 0);
  });
});

// ── Hit detection & damage ──────────────────────────────────────────────────

describe('hit detection', () => {
  it('returns empty hits when no targets present', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    const hits = sys.update(DT, []);
    expect(hits).toHaveLength(0);
  });

  it('detects a hit when missile reaches a target', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    // Large target directly ahead; missile spawns 2 units forward and will enter sphere
    const target = makeTarget(0, 0, -10, 5);
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    // Simulate up to 60 frames (1 second) — missile travels 30 units, easily reaching target
    const hits = simulateFrames(sys, [target], 60);
    expect(hits.length).toBeGreaterThanOrEqual(1);
    expect(hits[0].hitObject).toBe(target);
  });

  it('applies MISSILE_DAMAGE to the hit target', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    const target = makeTarget(0, 0, -10, 5);
    target.userData.health = 100;
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    simulateFrames(sys, [target], 60);
    expect(target.userData.health).toBe(100 - MISSILE_DAMAGE);
  });

  it('initializes health to 100 and applies damage when health not preset', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    const target = makeTarget(0, 0, -10, 5);
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    simulateFrames(sys, [target], 60);
    expect(target.userData.health).toBe(100 - MISSILE_DAMAGE);
  });

  it('missile is removed from scene after hitting a target', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    const target = makeTarget(0, 0, -10, 5);
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(1);

    simulateFrames(sys, [target], 60);
    expect(sys.missileCount).toBe(0);
    expect(scene.children.filter((c) => c !== target)).toHaveLength(0);
  });

  it('does not hit a target far to the side', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    // Target 100 units to the side — missile travels straight forward
    const target = makeTarget(100, 0, -10, 2);
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    const hits = simulateFrames(sys, [target], 60);
    expect(hits).toHaveLength(0);
  });

  it('a miss does not crash the game', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    expect(() => simulateFrames(sys, [], 200)).not.toThrow();
  });
});

// ── Max range removal ───────────────────────────────────────────────────────

describe('max range removal', () => {
  it('missile is removed from scene after traveling MISSILE_MAX_RANGE', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(1);

    // Advance time far enough to exceed max range
    const framesNeeded = Math.ceil((MISSILE_MAX_RANGE / MISSILE_SPEED) / DT) + 5;
    simulateFrames(sys, [], framesNeeded);

    expect(sys.missileCount).toBe(0);
    expect(scene.children.length).toBe(0);
  });

  it('multiple missiles are each individually removed at max range', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(2);

    const framesNeeded = Math.ceil((MISSILE_MAX_RANGE / MISSILE_SPEED) / DT) + 5;
    simulateFrames(sys, [], framesNeeded);

    expect(sys.missileCount).toBe(0);
    expect(scene.children.length).toBe(0);
  });

  it('missile does not linger as invisible object after max range', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);

    const framesNeeded = Math.ceil((MISSILE_MAX_RANGE / MISSILE_SPEED) / DT) + 60;
    simulateFrames(sys, [], framesNeeded);

    expect(sys.missileCount).toBe(0);
    expect(scene.children.length).toBe(0);
    // Continued updates after removal do not crash
    expect(() => simulateFrames(sys, [], 10)).not.toThrow();
  });
});

// ── Damage comparison ───────────────────────────────────────────────────────

describe('damage comparison', () => {
  it('one missile destroys a full-health enemy (100 hp) in 1 hit', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    const target = makeTarget(0, 0, -10, 5);
    target.userData.health = 100;
    scene.add(target);

    sys.fire(ORIGIN, IDENTITY);
    simulateFrames(sys, [target], 60);

    expect(target.userData.health).toBeLessThanOrEqual(0);
  });

  it('two missiles destroy a target with 2× enemy health', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    const target = makeTarget(0, 0, -10, 5);
    target.userData.health = 200;
    scene.add(target);

    // First missile
    sys.fire(ORIGIN, IDENTITY);
    simulateFrames(sys, [target], 60);
    expect(target.userData.health).toBeLessThanOrEqual(200 - MISSILE_DAMAGE);

    // Second missile
    sys.fire(ORIGIN, IDENTITY);
    simulateFrames(sys, [target], 60);
    expect(target.userData.health).toBeLessThanOrEqual(200 - MISSILE_DAMAGE * 2);
  });

  it('MISSILE_DAMAGE is at least 4× LASER_DAMAGE', () => {
    expect(MISSILE_DAMAGE).toBeGreaterThanOrEqual(LASER_DAMAGE * 4);
  });
});

// ── Reset ────────────────────────────────────────────────────────────────────

describe('reset', () => {
  it('reset() restores ammo', () => {
    const sys = new MissileSystem(makeScene(), 8);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    sys.reset(8);
    expect(sys.ammo).toBe(8);
  });

  it('reset() clamps ammo to maxAmmo', () => {
    const sys = new MissileSystem(makeScene(), 8);
    sys.reset(9999);
    expect(sys.ammo).toBe(8);
  });

  it('reset() clamps ammo to 0 for negative input', () => {
    const sys = new MissileSystem(makeScene(), 8);
    sys.reset(-5);
    expect(sys.ammo).toBe(0);
  });

  it('reset() removes all in-flight missiles from scene', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    expect(scene.children.length).toBe(3);

    sys.reset(8);
    expect(scene.children.length).toBe(0);
    expect(sys.missileCount).toBe(0);
  });

  it('reset() clears missileCount to 0', () => {
    const scene = makeScene();
    const sys = new MissileSystem(scene, 8);
    sys.fire(ORIGIN, IDENTITY);
    sys.fire(ORIGIN, IDENTITY);
    expect(sys.missileCount).toBe(2);
    sys.reset(8);
    expect(sys.missileCount).toBe(0);
  });
});
