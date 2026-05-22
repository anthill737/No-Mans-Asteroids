import { describe, it, expect, beforeEach } from 'vitest';
import * as THREE from 'three';
import {
  checkPlanetProximity,
  snapshotSector,
  restoreSectorSnapshot,
  LandingSystem,
  LANDING_THRESHOLD,
  FADE_DURATION,
} from './landing';
import type { SectorObjects } from './sector';

// ── helpers ───────────────────────────────────────────────────────────────────

function makePlanet(radius: number, px: number, py: number, pz: number): THREE.Mesh {
  const geo = new THREE.SphereGeometry(radius, 4, 4);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial());
  mesh.position.set(px, py, pz);
  return mesh;
}

function makeSector(overrides: Partial<SectorObjects> = {}): SectorObjects {
  return {
    enemies: [],
    asteroids: [],
    blackHole: new THREE.Group(),
    planets: [],
    ...overrides,
  };
}

function advanceToState(
  sys: LandingSystem,
  targetState: string,
  sectorObjects: SectorObjects,
): void {
  if (targetState === 'landing-fadeout') {
    sys.beginLanding(sectorObjects);
    return;
  }
  if (targetState === 'surface-fadein') {
    sys.beginLanding(sectorObjects);
    sys.update(FADE_DURATION + 0.01);
    return;
  }
  if (targetState === 'on-surface') {
    sys.beginLanding(sectorObjects);
    sys.update(FADE_DURATION + 0.01); // landing-fadeout → surface-fadein
    sys.update(FADE_DURATION + 0.01); // surface-fadein → on-surface
    return;
  }
  if (targetState === 'launch-fadeout') {
    advanceToState(sys, 'on-surface', sectorObjects);
    sys.beginLaunch(sectorObjects);
    return;
  }
  if (targetState === 'space-fadein') {
    advanceToState(sys, 'launch-fadeout', sectorObjects);
    sys.update(FADE_DURATION + 0.01);
    return;
  }
}

// ── checkPlanetProximity ──────────────────────────────────────────────────────

describe('checkPlanetProximity', () => {
  it('returns planet when player is within landing threshold', () => {
    const planet = makePlanet(20, 100, 0, 0);
    // Player is exactly at planetEdge + threshold - 1
    const playerPos = new THREE.Vector3(100 - (20 + LANDING_THRESHOLD - 1), 0, 0);
    expect(checkPlanetProximity(playerPos, [planet])).toBe(planet);
  });

  it('returns planet when player is just inside the threshold', () => {
    const planet = makePlanet(20, 0, 0, 0);
    const playerPos = new THREE.Vector3(20 + LANDING_THRESHOLD - 0.001, 0, 0);
    expect(checkPlanetProximity(playerPos, [planet])).toBe(planet);
  });

  it('returns null when player is just outside the threshold', () => {
    const planet = makePlanet(20, 0, 0, 0);
    const playerPos = new THREE.Vector3(20 + LANDING_THRESHOLD + 0.001, 0, 0);
    expect(checkPlanetProximity(playerPos, [planet])).toBeNull();
  });

  it('returns null for an empty planet list', () => {
    expect(checkPlanetProximity(new THREE.Vector3(0, 0, 0), [])).toBeNull();
  });

  it('returns null when player is far from all planets', () => {
    const planets = [makePlanet(20, 400, 0, 0), makePlanet(20, -400, 0, 0)];
    expect(checkPlanetProximity(new THREE.Vector3(0, 0, 0), planets)).toBeNull();
  });

  it('returns the first in-range planet when multiple are nearby', () => {
    const close = makePlanet(20, 10, 0, 0);
    const also_close = makePlanet(20, 5, 0, 0);
    const far = makePlanet(20, 400, 0, 0);
    const playerPos = new THREE.Vector3(0, 0, 0);
    expect(checkPlanetProximity(playerPos, [close, also_close, far])).toBe(close);
  });

  it('respects different planet radii', () => {
    const small = makePlanet(5, 0, 0, 0);   // threshold = 5 + 30 = 35
    const large = makePlanet(40, 200, 0, 0); // threshold = 40 + 30 = 70
    const playerPos = new THREE.Vector3(140, 0, 0);
    // 200 - 140 = 60 < 70, so large planet in range
    expect(checkPlanetProximity(playerPos, [small, large])).toBe(large);
  });
});

// ── snapshotSector / restoreSectorSnapshot ────────────────────────────────────

describe('snapshotSector', () => {
  it('clones enemy positions into the snapshot', () => {
    const e = new THREE.Mesh();
    e.position.set(1, 2, 3);
    const snap = snapshotSector(makeSector({ enemies: [e] }));

    expect(snap.enemyPositions[0].x).toBeCloseTo(1);
    expect(snap.enemyPositions[0].y).toBeCloseTo(2);
    expect(snap.enemyPositions[0].z).toBeCloseTo(3);
  });

  it('clones asteroid positions into the snapshot', () => {
    const a = new THREE.Mesh();
    a.position.set(7, 8, 9);
    const snap = snapshotSector(makeSector({ asteroids: [a] }));

    expect(snap.asteroidPositions[0].x).toBeCloseTo(7);
    expect(snap.asteroidPositions[0].y).toBeCloseTo(8);
    expect(snap.asteroidPositions[0].z).toBeCloseTo(9);
  });

  it('snapshot positions are independent clones — mutating original does not affect snapshot', () => {
    const e = new THREE.Mesh();
    e.position.set(1, 2, 3);
    const snap = snapshotSector(makeSector({ enemies: [e] }));

    e.position.set(99, 99, 99);
    expect(snap.enemyPositions[0].x).toBeCloseTo(1);
  });

  it('handles empty enemies and asteroids', () => {
    const snap = snapshotSector(makeSector());
    expect(snap.enemyPositions).toHaveLength(0);
    expect(snap.asteroidPositions).toHaveLength(0);
  });
});

describe('restoreSectorSnapshot', () => {
  it('restores enemy positions from snapshot', () => {
    const e = new THREE.Mesh();
    e.position.set(10, 20, 30);
    const sector = makeSector({ enemies: [e] });
    const snap = snapshotSector(sector);

    e.position.set(0, 0, 0);
    restoreSectorSnapshot(sector, snap);

    expect(e.position.x).toBeCloseTo(10);
    expect(e.position.y).toBeCloseTo(20);
    expect(e.position.z).toBeCloseTo(30);
  });

  it('restores asteroid positions from snapshot', () => {
    const a = new THREE.Mesh();
    a.position.set(5, 15, 25);
    const sector = makeSector({ asteroids: [a] });
    const snap = snapshotSector(sector);

    a.position.set(0, 0, 0);
    restoreSectorSnapshot(sector, snap);

    expect(a.position.x).toBeCloseTo(5);
    expect(a.position.y).toBeCloseTo(15);
    expect(a.position.z).toBeCloseTo(25);
  });

  it('handles partial restore safely when sector count is smaller than snapshot', () => {
    const e1 = new THREE.Mesh();
    const e2 = new THREE.Mesh();
    e1.position.set(1, 0, 0);
    e2.position.set(2, 0, 0);
    const sector = makeSector({ enemies: [e1, e2] });
    const snap = snapshotSector(sector);

    // Simulate one enemy destroyed before launch
    const reduced = { ...sector, enemies: [e1] };
    e1.position.set(0, 0, 0);

    expect(() => restoreSectorSnapshot(reduced, snap)).not.toThrow();
    expect(e1.position.x).toBeCloseTo(1);
  });

  it('handles snapshot count larger than current sector count without throwing', () => {
    const sector = makeSector({ enemies: [] });
    const snap = snapshotSector(makeSector({ enemies: [new THREE.Mesh()] }));
    expect(() => restoreSectorSnapshot(sector, snap)).not.toThrow();
  });
});

// ── LandingSystem state machine ───────────────────────────────────────────────

describe('LandingSystem', () => {
  let system: LandingSystem;

  beforeEach(() => { system = new LandingSystem(); });

  it('starts in space state with zero fade', () => {
    expect(system.state).toBe('space');
    expect(system.fadeAlpha).toBe(0);
  });

  it('checkProximity delegates to checkPlanetProximity when in space state', () => {
    const planet = makePlanet(20, 0, 0, 0);
    const inRange = new THREE.Vector3(20 + LANDING_THRESHOLD - 1, 0, 0);
    expect(system.checkProximity(inRange, [planet])).toBe(planet);
  });

  it('checkProximity returns null when not in space state', () => {
    const sector = makeSector();
    system.beginLanding(sector); // state → landing-fadeout

    const planet = makePlanet(20, 0, 0, 0);
    expect(system.checkProximity(new THREE.Vector3(0, 0, 0), [planet])).toBeNull();
  });

  it('beginLanding transitions to landing-fadeout and saves snapshot', () => {
    const e = new THREE.Mesh();
    e.position.set(5, 0, 0);
    const sector = makeSector({ enemies: [e] });

    system.beginLanding(sector);

    expect(system.state).toBe('landing-fadeout');
    const snap = system.getSectorSnapshot();
    expect(snap).not.toBeNull();
    expect(snap!.enemyPositions[0].x).toBeCloseTo(5);
  });

  it('beginLanding is a no-op when not in space state', () => {
    const sector = makeSector();
    system.beginLanding(sector);
    system.beginLanding(sector); // second call should be ignored
    expect(system.state).toBe('landing-fadeout');
  });

  // ── landing-fadeout phase ────────────────────────────────────────────────

  it('fadeAlpha increases during landing-fadeout', () => {
    system.beginLanding(makeSector());
    system.update(FADE_DURATION / 2);
    expect(system.fadeAlpha).toBeGreaterThan(0);
    expect(system.fadeAlpha).toBeLessThan(1);
  });

  it('update emits switchToSurface when landing-fadeout completes', () => {
    system.beginLanding(makeSector());
    system.update(FADE_DURATION - 0.01);
    const { switchToSurface: early } = system.update(0);
    expect(early).toBe(false);

    const { switchToSurface } = system.update(0.02);
    expect(switchToSurface).toBe(true);
    expect(system.state).toBe('surface-fadein');
  });

  it('does not emit switchToSpace during landing-fadeout', () => {
    system.beginLanding(makeSector());
    const { switchToSpace } = system.update(FADE_DURATION + 0.1);
    expect(switchToSpace).toBe(false);
  });

  // ── surface-fadein phase ─────────────────────────────────────────────────

  it('fadeAlpha decreases during surface-fadein and reaches 0 at completion', () => {
    advanceToState(system, 'surface-fadein', makeSector());
    expect(system.fadeAlpha).toBeCloseTo(1, 1); // just started fade-in

    system.update(FADE_DURATION + 0.1);
    expect(system.state).toBe('on-surface');
    expect(system.fadeAlpha).toBe(0);
  });

  // ── on-surface state ─────────────────────────────────────────────────────

  it('reaches on-surface after two full FADE_DURATION steps', () => {
    system.beginLanding(makeSector());
    system.update(FADE_DURATION + 0.1);
    system.update(FADE_DURATION + 0.1);
    expect(system.state).toBe('on-surface');
  });

  // ── beginLaunch ──────────────────────────────────────────────────────────

  it('beginLaunch transitions to launch-fadeout', () => {
    const sector = makeSector();
    advanceToState(system, 'on-surface', sector);
    system.beginLaunch(sector);
    expect(system.state).toBe('launch-fadeout');
  });

  it('beginLaunch restores sector snapshot', () => {
    const e = new THREE.Mesh();
    e.position.set(10, 0, 0);
    const sector = makeSector({ enemies: [e] });

    advanceToState(system, 'on-surface', sector);

    // Simulate enemy moving while on surface (shouldn't happen in game, but test the restore)
    e.position.set(0, 0, 0);
    system.beginLaunch(sector);

    expect(e.position.x).toBeCloseTo(10);
  });

  it('beginLaunch is a no-op when not on-surface', () => {
    const sector = makeSector();
    system.beginLaunch(sector); // state is 'space', should be ignored
    expect(system.state).toBe('space');
  });

  // ── launch-fadeout / space-fadein ────────────────────────────────────────

  it('update emits switchToSpace when launch-fadeout completes', () => {
    const sector = makeSector();
    advanceToState(system, 'launch-fadeout', sector);

    system.update(FADE_DURATION - 0.01);
    const { switchToSpace: early } = system.update(0);
    expect(early).toBe(false);

    const { switchToSpace } = system.update(0.02);
    expect(switchToSpace).toBe(true);
    expect(system.state).toBe('space-fadein');
  });

  it('returns to space state after space-fadein completes', () => {
    const sector = makeSector();
    advanceToState(system, 'space-fadein', sector);

    system.update(FADE_DURATION + 0.1);
    expect(system.state).toBe('space');
    expect(system.fadeAlpha).toBe(0);
  });

  // ── full round-trip ──────────────────────────────────────────────────────

  it('full round-trip: space → land → surface → launch → space', () => {
    const sector = makeSector();

    system.beginLanding(sector);
    expect(system.state).toBe('landing-fadeout');

    const { switchToSurface } = system.update(FADE_DURATION + 0.01);
    expect(switchToSurface).toBe(true);
    expect(system.state).toBe('surface-fadein');

    system.update(FADE_DURATION + 0.01);
    expect(system.state).toBe('on-surface');

    system.beginLaunch(sector);
    expect(system.state).toBe('launch-fadeout');

    const { switchToSpace } = system.update(FADE_DURATION + 0.01);
    expect(switchToSpace).toBe(true);
    expect(system.state).toBe('space-fadein');

    system.update(FADE_DURATION + 0.01);
    expect(system.state).toBe('space');
    expect(system.fadeAlpha).toBe(0);
  });
});
