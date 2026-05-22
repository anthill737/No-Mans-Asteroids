import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  createAsteroids,
  createBlackHole,
  createEnemyShips,
  createPlanets,
  generateSector,
  mulberry32,
  SECTOR_RADIUS,
  SPAWN_CLEAR_RADIUS,
  ASTEROID_COUNT,
  ENEMY_MIN,
  ENEMY_MAX,
  PLANET_MIN,
  PLANET_MAX,
} from './sector';

function makeRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe('mulberry32', () => {
  it('same seed produces same sequence', () => {
    const r1 = mulberry32(42);
    const r2 = mulberry32(42);
    for (let i = 0; i < 10; i++) {
      expect(r1()).toBe(r2());
    }
  });

  it('different seeds produce different sequences', () => {
    const r1 = mulberry32(1);
    const r2 = mulberry32(2);
    const vals1 = Array.from({ length: 5 }, () => r1());
    const vals2 = Array.from({ length: 5 }, () => r2());
    expect(vals1).not.toEqual(vals2);
  });
});

describe('createAsteroids', () => {
  it('returns at least 20 asteroids', () => {
    expect(createAsteroids(makeRng(1)).length).toBeGreaterThanOrEqual(20);
  });

  it(`returns exactly ${ASTEROID_COUNT} asteroids`, () => {
    expect(createAsteroids(makeRng(7)).length).toBe(ASTEROID_COUNT);
  });

  it('all asteroids are within sector bounds', () => {
    const asteroids = createAsteroids(makeRng(42));
    for (const a of asteroids) {
      expect(a.position.length()).toBeLessThanOrEqual(SECTOR_RADIUS + 1e-6);
    }
  });

  it('no asteroid overlaps the spawn clear zone', () => {
    const asteroids = createAsteroids(makeRng(42));
    for (const a of asteroids) {
      expect(a.position.length()).toBeGreaterThanOrEqual(SPAWN_CLEAR_RADIUS - 1e-6);
    }
  });

  it('produces consistent results with the same seed', () => {
    const a1 = createAsteroids(makeRng(99));
    const a2 = createAsteroids(makeRng(99));
    expect(a1[0].position.x).toBeCloseTo(a2[0].position.x, 5);
    expect(a1[0].position.z).toBeCloseTo(a2[0].position.z, 5);
  });
});

describe('createBlackHole', () => {
  it('returns a THREE.Group', () => {
    expect(createBlackHole(makeRng(1))).toBeInstanceOf(THREE.Group);
  });

  it('has child meshes (core + accretion disk)', () => {
    const bh = createBlackHole(makeRng(1));
    expect(bh.children.length).toBeGreaterThanOrEqual(2);
  });

  it('is within sector bounds', () => {
    for (let seed = 0; seed < 10; seed++) {
      const bh = createBlackHole(makeRng(seed));
      expect(bh.position.length()).toBeLessThanOrEqual(SECTOR_RADIUS + 1e-6);
    }
  });

  it('is outside the spawn clear zone', () => {
    for (let seed = 0; seed < 10; seed++) {
      const bh = createBlackHole(makeRng(seed));
      expect(bh.position.length()).toBeGreaterThanOrEqual(SPAWN_CLEAR_RADIUS - 1e-6);
    }
  });
});

describe('createEnemyShips', () => {
  it('always returns between 3 and 5 ships', () => {
    for (let seed = 0; seed < 50; seed++) {
      const ships = createEnemyShips(makeRng(seed));
      expect(ships.length).toBeGreaterThanOrEqual(ENEMY_MIN);
      expect(ships.length).toBeLessThanOrEqual(ENEMY_MAX);
    }
  });

  it('all ships are within sector bounds', () => {
    const ships = createEnemyShips(makeRng(42));
    for (const s of ships) {
      expect(s.position.length()).toBeLessThanOrEqual(SECTOR_RADIUS + 1e-6);
    }
  });

  it('no ship overlaps the spawn clear zone', () => {
    const ships = createEnemyShips(makeRng(42));
    for (const s of ships) {
      expect(s.position.length()).toBeGreaterThanOrEqual(SPAWN_CLEAR_RADIUS - 1e-6);
    }
  });
});

describe('createPlanets', () => {
  it(`returns between ${PLANET_MIN} and ${PLANET_MAX} planets`, () => {
    for (let seed = 0; seed < 50; seed++) {
      const planets = createPlanets(makeRng(seed));
      expect(planets.length).toBeGreaterThanOrEqual(PLANET_MIN);
      expect(planets.length).toBeLessThanOrEqual(PLANET_MAX);
    }
  });

  it('all planets are within sector bounds', () => {
    const planets = createPlanets(makeRng(42));
    for (const p of planets) {
      expect(p.position.length()).toBeLessThanOrEqual(SECTOR_RADIUS + 1e-6);
    }
  });

  it('planets are THREE.Mesh instances', () => {
    const planets = createPlanets(makeRng(7));
    for (const p of planets) {
      expect(p).toBeInstanceOf(THREE.Mesh);
    }
  });

  it('produces consistent results with the same seed', () => {
    const p1 = createPlanets(makeRng(55));
    const p2 = createPlanets(makeRng(55));
    expect(p1.length).toBe(p2.length);
    expect(p1[0].position.x).toBeCloseTo(p2[0].position.x, 5);
    expect(p1[0].position.z).toBeCloseTo(p2[0].position.z, 5);
  });
});

describe('generateSector', () => {
  it('adds all objects to the scene', () => {
    const scene = new THREE.Scene();
    const { asteroids, blackHole, enemies, planets } = generateSector(scene, 7);

    expect(scene.children).toContain(blackHole);
    for (const a of asteroids) expect(scene.children).toContain(a);
    for (const e of enemies) expect(scene.children).toContain(e);
    for (const p of planets) expect(scene.children).toContain(p);
  });

  it('scene has correct counts', () => {
    const scene = new THREE.Scene();
    const { asteroids, blackHole, enemies, planets } = generateSector(scene, 7);

    expect(asteroids.length).toBeGreaterThanOrEqual(20);
    expect(blackHole).toBeDefined();
    expect(enemies.length).toBeGreaterThanOrEqual(ENEMY_MIN);
    expect(enemies.length).toBeLessThanOrEqual(ENEMY_MAX);
    expect(planets.length).toBeGreaterThanOrEqual(PLANET_MIN);
    expect(planets.length).toBeLessThanOrEqual(PLANET_MAX);
  });

  it('same seed produces identical positions', () => {
    const scene1 = new THREE.Scene();
    const scene2 = new THREE.Scene();
    const r1 = generateSector(scene1, 12345);
    const r2 = generateSector(scene2, 12345);

    // Asteroids
    expect(r1.asteroids.length).toBe(r2.asteroids.length);
    for (let i = 0; i < r1.asteroids.length; i++) {
      expect(r1.asteroids[i].position.x).toBeCloseTo(r2.asteroids[i].position.x, 5);
      expect(r1.asteroids[i].position.y).toBeCloseTo(r2.asteroids[i].position.y, 5);
      expect(r1.asteroids[i].position.z).toBeCloseTo(r2.asteroids[i].position.z, 5);
    }

    // Black hole
    expect(r1.blackHole.position.x).toBeCloseTo(r2.blackHole.position.x, 5);
    expect(r1.blackHole.position.y).toBeCloseTo(r2.blackHole.position.y, 5);
    expect(r1.blackHole.position.z).toBeCloseTo(r2.blackHole.position.z, 5);

    // Enemies
    expect(r1.enemies.length).toBe(r2.enemies.length);
    for (let i = 0; i < r1.enemies.length; i++) {
      expect(r1.enemies[i].position.x).toBeCloseTo(r2.enemies[i].position.x, 5);
      expect(r1.enemies[i].position.y).toBeCloseTo(r2.enemies[i].position.y, 5);
      expect(r1.enemies[i].position.z).toBeCloseTo(r2.enemies[i].position.z, 5);
    }

    // Planets
    expect(r1.planets.length).toBe(r2.planets.length);
    for (let i = 0; i < r1.planets.length; i++) {
      expect(r1.planets[i].position.x).toBeCloseTo(r2.planets[i].position.x, 5);
      expect(r1.planets[i].position.y).toBeCloseTo(r2.planets[i].position.y, 5);
      expect(r1.planets[i].position.z).toBeCloseTo(r2.planets[i].position.z, 5);
    }
  });

  it('different seeds produce different layouts', () => {
    const scene1 = new THREE.Scene();
    const scene2 = new THREE.Scene();
    const r1 = generateSector(scene1, 111);
    const r2 = generateSector(scene2, 999);

    // At least one asteroid position must differ
    const anyDiffers = r1.asteroids.some(
      (a, i) =>
        Math.abs(a.position.x - r2.asteroids[i].position.x) > 0.001 ||
        Math.abs(a.position.z - r2.asteroids[i].position.z) > 0.001,
    );
    expect(anyDiffers).toBe(true);
  });
});
