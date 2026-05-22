import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  terrainHeight,
  createSurfaceScene,
  SurfaceController,
  SURFACE_WALK_SPEED,
  SURFACE_EYE_HEIGHT,
  SHIP_X,
  SHIP_Z,
  LAUNCH_THRESHOLD,
} from './surface';

// ── terrainHeight ─────────────────────────────────────────────────────────────

describe('terrainHeight', () => {
  it('returns 0 at the origin (flat zone)', () => {
    expect(terrainHeight(0, 0, 42)).toBe(0);
  });

  it('returns near-zero within the flat zone (r < 30)', () => {
    expect(Math.abs(terrainHeight(15, 0, 42))).toBe(0);
    expect(Math.abs(terrainHeight(0, 25, 42))).toBe(0);
  });

  it('returns elevation variation beyond the flat zone', () => {
    const seed = 1;
    const samples = [
      terrainHeight(100, 0, seed),
      terrainHeight(0, 100, seed),
      terrainHeight(-80, 80, seed),
      terrainHeight(120, -60, seed),
      terrainHeight(200, 200, seed),
    ];
    const allSame = samples.every(v => v === samples[0]);
    expect(allSame).toBe(false);
  });

  it('is deterministic for the same seed', () => {
    expect(terrainHeight(80, 40, 7)).toBe(terrainHeight(80, 40, 7));
    expect(terrainHeight(-50, 130, 99)).toBe(terrainHeight(-50, 130, 99));
  });

  it('differs across seeds at the same coordinate', () => {
    const a = terrainHeight(80, 80, 1);
    const b = terrainHeight(80, 80, 2);
    expect(a).not.toBe(b);
  });

  it('returns a finite number for large coordinates', () => {
    expect(Number.isFinite(terrainHeight(1000, 1000, 5))).toBe(true);
    expect(Number.isFinite(terrainHeight(-1000, 500, 5))).toBe(true);
  });
});

// ── createSurfaceScene ────────────────────────────────────────────────────────

describe('createSurfaceScene', () => {
  it('returns a scene and shipMarker', () => {
    const { scene, shipMarker } = createSurfaceScene(42);
    expect(scene).toBeInstanceOf(THREE.Scene);
    expect(shipMarker).toBeInstanceOf(THREE.Mesh);
  });

  it('scene has a non-black background (alien atmosphere)', () => {
    const { scene } = createSurfaceScene(1);
    expect(scene.background).not.toBeNull();
    const bg = scene.background as THREE.Color;
    expect(bg).toBeInstanceOf(THREE.Color);
    expect(bg.r + bg.g + bg.b).toBeGreaterThan(0);
  });

  it('scene background differs from pure black space', () => {
    const { scene } = createSurfaceScene(1);
    const bg = scene.background as THREE.Color;
    const black = new THREE.Color(0x000000);
    expect(bg.equals(black)).toBe(false);
  });

  it('scene contains a terrain mesh with flat shading', () => {
    const { scene } = createSurfaceScene(10);
    let foundFlatShaded = false;
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        const mat = obj.material as THREE.Material;
        if ('flatShading' in mat && (mat as THREE.MeshLambertMaterial).flatShading) {
          foundFlatShaded = true;
        }
      }
    });
    expect(foundFlatShaded).toBe(true);
  });

  it('terrain geometry is large enough (>= 400 units wide)', () => {
    const { scene } = createSurfaceScene(5);
    let maxExtent = 0;
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        const geo = obj.geometry;
        geo.computeBoundingBox();
        const box = geo.boundingBox;
        if (box) {
          const size = new THREE.Vector3();
          box.getSize(size);
          const extent = Math.max(size.x, size.z);
          if (extent > maxExtent) maxExtent = extent;
        }
      }
    });
    expect(maxExtent).toBeGreaterThanOrEqual(400);
  });

  it('terrain mesh has elevation variation (not a flat plane)', () => {
    const { scene } = createSurfaceScene(3);
    const heights: number[] = [];
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material instanceof THREE.MeshLambertMaterial) {
        const pos = obj.geometry.attributes.position as THREE.BufferAttribute;
        if (pos && pos.count > 100) {
          for (let i = 0; i < pos.count; i += 50) {
            heights.push(pos.getY(i));
          }
        }
      }
    });
    expect(heights.length).toBeGreaterThan(1);
    const minH = Math.min(...heights);
    const maxH = Math.max(...heights);
    expect(maxH - minH).toBeGreaterThan(0.1);
  });

  it('has ambient and directional lighting', () => {
    const { scene } = createSurfaceScene(1);
    let hasAmbient = false;
    let hasDirectional = false;
    scene.traverse((obj) => {
      if (obj instanceof THREE.AmbientLight) hasAmbient = true;
      if (obj instanceof THREE.DirectionalLight) hasDirectional = true;
    });
    expect(hasAmbient).toBe(true);
    expect(hasDirectional).toBe(true);
  });

  it('scene contains multiple distinct meshes (ship has fuselage, wings, etc.)', () => {
    const { scene } = createSurfaceScene(7);
    let meshCount = 0;
    scene.traverse((obj) => { if (obj instanceof THREE.Mesh) meshCount++; });
    expect(meshCount).toBeGreaterThan(5);
  });
});

// ── SurfaceController ─────────────────────────────────────────────────────────

describe('SurfaceController', () => {
  it('snaps camera y to terrain height + eye height when stationary', () => {
    const ctrl = new SurfaceController(42);
    const pos = new THREE.Vector3(0, 0, 0);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    ctrl.update(0.016, pos, euler);
    const expected = terrainHeight(0, 0, 42) + SURFACE_EYE_HEIGHT;
    expect(pos.y).toBeCloseTo(expected, 5);
  });

  it('nearShip is false when player is far from ship', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(0, 0, 0);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const { nearShip } = ctrl.update(0.016, pos, euler);
    expect(nearShip).toBe(false);
  });

  it('nearShip is true when player is within launch threshold of ship', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(SHIP_X, 0, SHIP_Z + (LAUNCH_THRESHOLD - 0.1));
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const { nearShip } = ctrl.update(0.016, pos, euler);
    expect(nearShip).toBe(true);
  });

  it('launchRequested is false when near ship but E not pressed', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(SHIP_X, 0, SHIP_Z + (LAUNCH_THRESHOLD - 0.1));
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const { launchRequested } = ctrl.update(0.016, pos, euler);
    expect(launchRequested).toBe(false);
  });

  it('launchRequested is true when near ship and E is pressed', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(SHIP_X, 0, SHIP_Z + (LAUNCH_THRESHOLD - 0.1));
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    // Simulate E key press via the internal handler (no DOM window in node env)
    ctrl._onKeyDown({ key: 'e' } as KeyboardEvent);
    const { launchRequested } = ctrl.update(0.016, pos, euler);
    expect(launchRequested).toBe(true);
  });

  it('launchRequested resets to false on subsequent update', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(SHIP_X, 0, SHIP_Z + (LAUNCH_THRESHOLD - 0.1));
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    ctrl._onKeyDown({ key: 'e' } as KeyboardEvent);
    ctrl.update(0.016, pos, euler);                      // consumes E latch
    const { launchRequested } = ctrl.update(0.016, pos, euler); // E gone
    expect(launchRequested).toBe(false);
  });

  it('launchRequested is false when E pressed but player is far from ship', () => {
    const ctrl = new SurfaceController(1);
    const pos = new THREE.Vector3(0, 0, 0); // far from ship
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    ctrl._onKeyDown({ key: 'e' } as KeyboardEvent);
    const { nearShip, launchRequested } = ctrl.update(0.016, pos, euler);
    expect(nearShip).toBe(false);
    expect(launchRequested).toBe(false);
  });

  it('E key latch consumed even when not near ship', () => {
    const ctrl = new SurfaceController(1);
    const farPos = new THREE.Vector3(0, 0, 0);
    const nearPos = new THREE.Vector3(SHIP_X, 0, SHIP_Z + (LAUNCH_THRESHOLD - 0.1));
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    ctrl._onKeyDown({ key: 'e' } as KeyboardEvent);
    ctrl.update(0.016, farPos, euler);  // consumed while far
    const { launchRequested } = ctrl.update(0.016, nearPos, euler); // near now, but E gone
    expect(launchRequested).toBe(false);
  });

  it('constants are sensible', () => {
    expect(SURFACE_WALK_SPEED).toBeGreaterThan(0);
    expect(SURFACE_EYE_HEIGHT).toBeGreaterThan(0);
    expect(LAUNCH_THRESHOLD).toBeGreaterThan(0);
  });
});
