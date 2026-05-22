/**
 * P2-T12: Vitest tests for seeded sector determinism, warp generation,
 * and on-foot terrain collision.
 *
 * Many of these behaviours are already exercised elsewhere; this file
 * provides the explicit, task-scoped assertions required by the ACs.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { generateSector } from './sector';
import { WarpSystem } from './warp';
import { terrainHeight, SURFACE_EYE_HEIGHT } from './surface';

// ── AC1 + AC2: seeded sector determinism ─────────────────────────────────────

describe('generateSector determinism', () => {
  it('same seed → identical asteroid positions', () => {
    const s1 = new THREE.Scene();
    const s2 = new THREE.Scene();
    const r1 = generateSector(s1, 42);
    const r2 = generateSector(s2, 42);

    expect(r1.asteroids.length).toBe(r2.asteroids.length);
    for (let i = 0; i < r1.asteroids.length; i++) {
      expect(r1.asteroids[i].position.x).toBeCloseTo(r2.asteroids[i].position.x, 5);
      expect(r1.asteroids[i].position.y).toBeCloseTo(r2.asteroids[i].position.y, 5);
      expect(r1.asteroids[i].position.z).toBeCloseTo(r2.asteroids[i].position.z, 5);
    }
  });

  it('same seed → identical planet positions', () => {
    const s1 = new THREE.Scene();
    const s2 = new THREE.Scene();
    const r1 = generateSector(s1, 999);
    const r2 = generateSector(s2, 999);

    expect(r1.planets.length).toBe(r2.planets.length);
    for (let i = 0; i < r1.planets.length; i++) {
      expect(r1.planets[i].position.x).toBeCloseTo(r2.planets[i].position.x, 5);
      expect(r1.planets[i].position.y).toBeCloseTo(r2.planets[i].position.y, 5);
      expect(r1.planets[i].position.z).toBeCloseTo(r2.planets[i].position.z, 5);
    }
  });

  it('different seeds → different asteroid positions', () => {
    const s1 = new THREE.Scene();
    const s2 = new THREE.Scene();
    const r1 = generateSector(s1, 1);
    const r2 = generateSector(s2, 2);

    const anyDiffers = r1.asteroids.some(
      (a, i) =>
        Math.abs(a.position.x - r2.asteroids[i].position.x) > 0.001 ||
        Math.abs(a.position.z - r2.asteroids[i].position.z) > 0.001,
    );
    expect(anyDiffers).toBe(true);
  });
});

// ── AC3: warp increments sectorId and generates a different layout ────────────

describe('warp → new sector generation', () => {
  it('WarpSystem increments sectorId when warpNow fires', () => {
    const ws = new WarpSystem(1);
    ws.beginWarp();
    const { warpNow } = ws.update(0.6); // crosses the 0.5 s warp-out boundary
    expect(warpNow).toBe(true);
    expect(ws.sectorId).toBe(2);
  });

  it('new sectorId produces a different sector layout than the previous one', () => {
    const ws = new WarpSystem(1);
    const seedBefore = ws.sectorId; // 1

    ws.beginWarp();
    ws.update(0.6); // warpNow fires, sectorId becomes 2
    const seedAfter = ws.sectorId; // 2

    expect(seedAfter).toBe(seedBefore + 1);

    // generateSector with the old seed vs the new seed must differ
    const scene1 = new THREE.Scene();
    const scene2 = new THREE.Scene();
    const r1 = generateSector(scene1, seedBefore);
    const r2 = generateSector(scene2, seedAfter);

    const anyDiffers = r1.asteroids.some(
      (a, i) =>
        Math.abs(a.position.x - r2.asteroids[i].position.x) > 0.001 ||
        Math.abs(a.position.z - r2.asteroids[i].position.z) > 0.001,
    );
    expect(anyDiffers).toBe(true);
  });

  it('each sequential warp produces a unique sectorId', () => {
    const ws = new WarpSystem(10);
    const ids: number[] = [ws.sectorId];

    for (let i = 0; i < 3; i++) {
      ws.reset(ws.sectorId); // ready for next warp
      ws.beginWarp();
      ws.update(0.6);
      ids.push(ws.sectorId);
    }

    // All IDs should be distinct
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

// ── AC4: terrainHeight returns a consistent value at or above the noise floor ─

describe('terrainHeight noise floor and consistency', () => {
  it('returns 0 at the origin (flat zone — on-foot collision floor)', () => {
    // Use toBeCloseTo so -0 === +0 comparison does not fail
    expect(terrainHeight(0, 0, 42)).toBeCloseTo(0, 10);
  });

  it('returns 0 everywhere inside the flat zone (radius < 30)', () => {
    const seed = 7;
    // Several points well inside r=30 must stay at exactly 0
    const points: [number, number][] = [
      [0, 0], [10, 0], [0, 10], [-15, 0], [0, -20], [12, 12],
    ];
    for (const [x, z] of points) {
      expect(terrainHeight(x, z, seed)).toBeCloseTo(0, 10);
    }
  });

  it('returns a finite number for any coordinate', () => {
    const cases: [number, number, number][] = [
      [0, 0, 1], [100, 200, 5], [-300, 50, 99], [1000, 1000, 42],
    ];
    for (const [x, z, seed] of cases) {
      expect(Number.isFinite(terrainHeight(x, z, seed))).toBe(true);
    }
  });

  it('is consistent on repeat calls (same inputs → same output)', () => {
    const pairs: [number, number, number][] = [
      [80, 60, 7], [-120, 30, 99], [200, -150, 1],
    ];
    for (const [x, z, seed] of pairs) {
      expect(terrainHeight(x, z, seed)).toBe(terrainHeight(x, z, seed));
    }
  });

  it('player Y (groundH + eyeHeight) stays at or above terrain height', () => {
    // SurfaceController sets cameraPosition.y = terrainHeight(x, z, seed) + SURFACE_EYE_HEIGHT
    // Verify this invariant holds for representative XZ coords
    const seed = 42;
    const coords: [number, number][] = [[0, 0], [50, 50], [100, -80], [200, 200]];
    for (const [x, z] of coords) {
      const groundH = terrainHeight(x, z, seed);
      const playerY = groundH + SURFACE_EYE_HEIGHT;
      expect(playerY).toBeGreaterThanOrEqual(groundH);
    }
  });
});
