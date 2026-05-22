import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  MIN_SPLIT_SIZE,
  HEALTH_PER_SIZE,
  getAsteroidHealth,
  initAsteroidMeta,
  spawnDebris,
  disposeAsteroid,
  handleAsteroidDestroyed,
} from './asteroid';
import { LASER_DAMAGE } from './laser';

function makeScene(): THREE.Scene {
  return new THREE.Scene();
}

function makeAsteroid(size: number, pos = new THREE.Vector3()): THREE.Mesh {
  const geo = new THREE.IcosahedronGeometry(size, 0);
  const mat = new THREE.MeshLambertMaterial();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(pos);
  initAsteroidMeta(mesh, size);
  return mesh;
}

// Deterministic rng — cycles through a fixed sequence
function makeRng(...values: number[]): () => number {
  let i = 0;
  return () => values[i++ % values.length];
}

describe('getAsteroidHealth', () => {
  it('equals HEALTH_PER_SIZE * round(size)', () => {
    expect(getAsteroidHealth(1)).toBe(HEALTH_PER_SIZE * 1);
    expect(getAsteroidHealth(2)).toBe(HEALTH_PER_SIZE * 2);
    expect(getAsteroidHealth(5)).toBe(HEALTH_PER_SIZE * 5);
  });

  it('matches LASER_DAMAGE so each size unit requires one additional shot', () => {
    expect(HEALTH_PER_SIZE).toBe(LASER_DAMAGE);
  });

  it('large asteroid requires multiple shots to destroy', () => {
    // size-5 asteroid needs 5 shots; a single LASER_DAMAGE hit leaves health > 0
    const health = getAsteroidHealth(5);
    expect(health - LASER_DAMAGE).toBeGreaterThan(0);
  });

  it('returns at least HEALTH_PER_SIZE for very small sizes', () => {
    expect(getAsteroidHealth(0.1)).toBe(HEALTH_PER_SIZE);
  });
});

describe('initAsteroidMeta', () => {
  it('sets userData.size to the given size', () => {
    const mesh = makeAsteroid(3);
    expect(mesh.userData.size).toBe(3);
  });

  it('sets userData.health based on size', () => {
    const mesh = makeAsteroid(4);
    expect(mesh.userData.health).toBe(getAsteroidHealth(4));
  });
});

describe('spawnDebris', () => {
  it('spawns either 2 or 3 pieces depending on rng', () => {
    const scene = makeScene();
    const pos = new THREE.Vector3(10, 0, -20);

    // rng returning 0 → floor(0 * 2) = 0 → count = 2
    const pieces2 = spawnDebris(scene, pos, 5, makeRng(0, 0.5));
    expect(pieces2.length).toBe(2);

    const scene2 = makeScene();
    // rng returning 0.99 → floor(0.99 * 2) = 1 → count = 3
    const pieces3 = spawnDebris(scene2, pos, 5, makeRng(0.99, 0.5));
    expect(pieces3.length).toBe(3);
  });

  it('adds all pieces to the scene', () => {
    const scene = makeScene();
    const pieces = spawnDebris(scene, new THREE.Vector3(), 5, makeRng(0, 0.5));
    expect(scene.children.length).toBe(pieces.length);
  });

  it('debris pieces have size and health set', () => {
    const scene = makeScene();
    const pieces = spawnDebris(scene, new THREE.Vector3(), 5, makeRng(0, 0.5));
    for (const p of pieces) {
      expect(p.userData.size).toBeDefined();
      expect(p.userData.health).toBeGreaterThan(0);
    }
  });

  it('debris size is smaller than parent size', () => {
    const scene = makeScene();
    const parentSize = 5;
    const pieces = spawnDebris(scene, new THREE.Vector3(), parentSize, makeRng(0, 0.5));
    for (const p of pieces) {
      expect(p.userData.size).toBeLessThan(parentSize);
    }
  });

  it('debris pieces are positioned near the parent position', () => {
    const scene = makeScene();
    const pos = new THREE.Vector3(100, 50, -200);
    const pieces = spawnDebris(scene, pos, 5, makeRng(0.5));
    for (const p of pieces) {
      // Within 1 parent-size spread in each axis = max ~sqrt(3)*5 ≈ 8.66 away
      expect(p.position.distanceTo(pos)).toBeLessThan(20);
    }
  });
});

describe('disposeAsteroid', () => {
  it('removes the asteroid from the scene', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(3);
    scene.add(asteroid);
    expect(scene.children).toContain(asteroid);

    disposeAsteroid(scene, asteroid);
    expect(scene.children).not.toContain(asteroid);
  });
});

describe('handleAsteroidDestroyed', () => {
  it('removes the destroyed asteroid from scene', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(5);
    scene.add(asteroid);

    handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    expect(scene.children).not.toContain(asteroid);
  });

  it('removes the asteroid from the returned array', () => {
    const scene = makeScene();
    const a1 = makeAsteroid(5);
    const a2 = makeAsteroid(3);
    scene.add(a1);
    scene.add(a2);

    const updated = handleAsteroidDestroyed(scene, a1, [a1, a2]);
    expect(updated).not.toContain(a1);
    expect(updated).toContain(a2);
  });

  it('large asteroid (above MIN_SPLIT_SIZE) spawns 2–3 debris pieces', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(5);
    scene.add(asteroid);

    const updated = handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    expect(updated.length).toBeGreaterThanOrEqual(2);
    expect(updated.length).toBeLessThanOrEqual(3);
  });

  it('debris pieces are present in the scene after split', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(5);
    scene.add(asteroid);

    const updated = handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    for (const debris of updated) {
      expect(scene.children).toContain(debris);
    }
  });

  it('small asteroid (at MIN_SPLIT_SIZE) does not split — removed with no debris', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(MIN_SPLIT_SIZE);
    scene.add(asteroid);

    const updated = handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    expect(updated.length).toBe(0);
    expect(scene.children.length).toBe(0);
  });

  it('small asteroid (below MIN_SPLIT_SIZE) does not split — removed with no debris', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(1);
    scene.add(asteroid);

    const updated = handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    expect(updated.length).toBe(0);
    expect(scene.children.length).toBe(0);
  });

  it('does not affect other asteroids in the array', () => {
    const scene = makeScene();
    const target = makeAsteroid(5);
    const bystander = makeAsteroid(3);
    scene.add(target);
    scene.add(bystander);

    const updated = handleAsteroidDestroyed(scene, target, [target, bystander]);
    expect(updated).toContain(bystander);
    expect(scene.children).toContain(bystander);
  });

  it('works when asteroid is not in the provided array', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(5);
    scene.add(asteroid);

    // Empty array — should still remove from scene and spawn debris
    const updated = handleAsteroidDestroyed(scene, asteroid, []);
    expect(scene.children).not.toContain(asteroid);
    expect(updated.length).toBeGreaterThanOrEqual(2);
  });

  it('full damage loop: large asteroid requires multiple shots then splits', () => {
    const scene = makeScene();
    const asteroid = makeAsteroid(5);
    scene.add(asteroid);

    // Each shot deals LASER_DAMAGE; size-5 asteroid has health = 5 * LASER_DAMAGE
    const shotsNeeded = getAsteroidHealth(5) / LASER_DAMAGE;
    expect(shotsNeeded).toBeGreaterThan(1);

    // Simulate shots
    for (let i = 0; i < shotsNeeded - 1; i++) {
      asteroid.userData.health -= LASER_DAMAGE;
      expect(asteroid.userData.health).toBeGreaterThan(0);
    }
    // Final shot
    asteroid.userData.health -= LASER_DAMAGE;
    expect(asteroid.userData.health).toBeLessThanOrEqual(0);

    const updated = handleAsteroidDestroyed(scene, asteroid, [asteroid]);
    expect(updated.length).toBeGreaterThanOrEqual(2);
    expect(scene.children).not.toContain(asteroid);
  });
});
