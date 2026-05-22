import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { createCockpitMesh } from './cockpit';

describe('createCockpitMesh', () => {
  it('returns an object whose group is a THREE.Group', () => {
    const hud = createCockpitMesh();
    expect(hud.group).toBeInstanceOf(THREE.Group);
  });

  it('exposes the five HUD control methods', () => {
    const hud = createCockpitMesh();
    expect(typeof hud.setHealth).toBe('function');
    expect(typeof hud.setShield).toBe('function');
    expect(typeof hud.setAmmo).toBe('function');
    expect(typeof hud.setActiveWeapon).toBe('function');
    expect(typeof hud.updateRadar).toBe('function');
  });

  it('group has at least the four structural cockpit panels plus HUD geometry', () => {
    const hud = createCockpitMesh();
    // 4 panels + 2 bar-backgrounds + 2 bar-pivots + AMMO_SEGMENTS + radar parts + blip pool + 3 weapon indicators
    expect(hud.group.children.length).toBeGreaterThanOrEqual(4);
  });

  it('all direct children are placed in front of the camera (z < 0)', () => {
    const hud = createCockpitMesh();
    for (const child of hud.group.children) {
      expect(child.position.z).toBeLessThan(0);
    }
  });

  it('all direct children are beyond the near plane (z < -0.1)', () => {
    const hud = createCockpitMesh();
    for (const child of hud.group.children) {
      expect(child.position.z).toBeLessThan(-0.1);
    }
  });

  it('lower cockpit elements occupy the bottom of the view (y < 0)', () => {
    const hud = createCockpitMesh();
    const lowerChildren = hud.group.children.filter((c) => c.position.y < 0);
    expect(lowerChildren.length).toBeGreaterThan(0);
  });

  it('no box-geometry front face clips into the camera origin (front face z < 0)', () => {
    const hud = createCockpitMesh();
    const meshChildren = hud.group.children.filter(
      (c): c is THREE.Mesh => c instanceof THREE.Mesh,
    );
    for (const m of meshChildren) {
      const geo = m.geometry as THREE.BoxGeometry;
      if (!geo.parameters?.depth) continue; // skip non-box geometries
      const frontFaceZ = m.position.z + geo.parameters.depth / 2;
      expect(frontFaceZ).toBeLessThan(0);
    }
  });

  // ── setHealth ──────────────────────────────────────────────────────────────

  it('setHealth does not throw for values in [0, 1]', () => {
    const hud = createCockpitMesh();
    expect(() => hud.setHealth(0)).not.toThrow();
    expect(() => hud.setHealth(0.25)).not.toThrow();
    expect(() => hud.setHealth(0.5)).not.toThrow();
    expect(() => hud.setHealth(1)).not.toThrow();
  });

  it('setHealth clamps out-of-range values without throwing', () => {
    const hud = createCockpitMesh();
    expect(() => hud.setHealth(-1)).not.toThrow();
    expect(() => hud.setHealth(2)).not.toThrow();
  });

  it('health bar fill scale reflects the ratio', () => {
    const hud = createCockpitMesh();
    const pivot = hud.group.children.find((c) => c.userData.role === 'healthPivot');
    expect(pivot).toBeDefined();
    const fill = pivot!.children[0] as THREE.Mesh;

    hud.setHealth(1);
    expect(fill.scale.x).toBeCloseTo(1, 3);

    hud.setHealth(0.5);
    expect(fill.scale.x).toBeCloseTo(0.5, 3);

    hud.setHealth(0);
    expect(fill.scale.x).toBeGreaterThan(0); // clamped to tiny non-zero
    expect(fill.scale.x).toBeLessThan(0.01);
  });

  // ── setShield ──────────────────────────────────────────────────────────────

  it('setShield does not throw for any value', () => {
    const hud = createCockpitMesh();
    expect(() => hud.setShield(0)).not.toThrow();
    expect(() => hud.setShield(0.75)).not.toThrow();
    expect(() => hud.setShield(1)).not.toThrow();
  });

  it('shield bar fill scale reflects the ratio', () => {
    const hud = createCockpitMesh();
    const pivot = hud.group.children.find((c) => c.userData.role === 'shieldPivot');
    expect(pivot).toBeDefined();
    const fill = pivot!.children[0] as THREE.Mesh;

    hud.setShield(1);
    expect(fill.scale.x).toBeCloseTo(1, 3);

    hud.setShield(0.3);
    expect(fill.scale.x).toBeCloseTo(0.3, 3);
  });

  // ── setAmmo ────────────────────────────────────────────────────────────────

  it('setAmmo does not throw for normal and edge-case inputs', () => {
    const hud = createCockpitMesh();
    expect(() => hud.setAmmo(30, 30)).not.toThrow();
    expect(() => hud.setAmmo(15, 30)).not.toThrow();
    expect(() => hud.setAmmo(0, 30)).not.toThrow();
    expect(() => hud.setAmmo(0, 0)).not.toThrow(); // maxCount=0 guard
  });

  // ── setActiveWeapon ────────────────────────────────────────────────────────

  it('cockpit group contains three weapon indicator meshes', () => {
    const hud = createCockpitMesh();
    const slots = hud.group.children.filter((c) => c.userData.weaponSlot !== undefined);
    expect(slots.length).toBe(3);
    const slotNames = slots.map((c) => c.userData.weaponSlot).sort();
    expect(slotNames).toEqual(['chaingun', 'laser', 'missile']);
  });

  it('setActiveWeapon does not throw for any valid weapon', () => {
    const hud = createCockpitMesh();
    expect(() => hud.setActiveWeapon('laser')).not.toThrow();
    expect(() => hud.setActiveWeapon('chaingun')).not.toThrow();
    expect(() => hud.setActiveWeapon('missile')).not.toThrow();
  });

  it('active weapon indicator is bright (emissiveIntensity > 0)', () => {
    const hud = createCockpitMesh();
    hud.setActiveWeapon('laser');
    const laserSlot = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.weaponSlot === 'laser',
    ) as THREE.Mesh;
    const mat = laserSlot.material as THREE.MeshLambertMaterial;
    expect(mat.emissiveIntensity).toBeGreaterThan(0);
  });

  it('inactive weapon indicators are dim (emissiveIntensity === 0)', () => {
    const hud = createCockpitMesh();
    hud.setActiveWeapon('laser');
    for (const weapon of ['chaingun', 'missile'] as const) {
      const slot = hud.group.children.find(
        (c): c is THREE.Mesh => c.userData.weaponSlot === weapon,
      ) as THREE.Mesh;
      const mat = slot.material as THREE.MeshLambertMaterial;
      expect(mat.emissiveIntensity).toBe(0);
    }
  });

  it('switching active weapon dims previous and lights new indicator', () => {
    const hud = createCockpitMesh();

    hud.setActiveWeapon('chaingun');
    const laserSlot = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.weaponSlot === 'laser',
    ) as THREE.Mesh;
    const chaingunSlot = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.weaponSlot === 'chaingun',
    ) as THREE.Mesh;

    const laserMat = laserSlot.material as THREE.MeshLambertMaterial;
    const chaingunMat = chaingunSlot.material as THREE.MeshLambertMaterial;

    expect(chaingunMat.emissiveIntensity).toBeGreaterThan(0);
    expect(laserMat.emissiveIntensity).toBe(0);
  });

  it('setActiveWeapon called repeatedly does not throw and always has exactly one active indicator', () => {
    const hud = createCockpitMesh();
    const weapons = ['laser', 'chaingun', 'missile', 'laser', 'missile'] as const;
    for (const w of weapons) {
      expect(() => hud.setActiveWeapon(w)).not.toThrow();
    }
    // After last call ('missile'), only missile should be active
    const active = hud.group.children
      .filter((c): c is THREE.Mesh => c.userData.weaponSlot !== undefined)
      .filter((c) => (c.material as THREE.MeshLambertMaterial).emissiveIntensity > 0);
    expect(active.length).toBe(1);
    expect(active[0].userData.weaponSlot).toBe('missile');
  });

  it('weapon indicators are placed in front of camera (z < 0)', () => {
    const hud = createCockpitMesh();
    const slots = hud.group.children.filter((c) => c.userData.weaponSlot !== undefined);
    for (const slot of slots) {
      expect(slot.position.z).toBeLessThan(0);
    }
  });

  // ── updateRadar ────────────────────────────────────────────────────────────

  it('updateRadar does not throw with an empty blip list', () => {
    const hud = createCockpitMesh();
    expect(() =>
      hud.updateRadar(new THREE.Vector3(), new THREE.Quaternion(), []),
    ).not.toThrow();
  });

  it('updateRadar makes in-range blips visible', () => {
    const hud = createCockpitMesh();
    const blips = [
      { position: new THREE.Vector3(10, 0, -50), type: 'asteroid' as const },
      { position: new THREE.Vector3(-30, 5, 20), type: 'enemy' as const },
    ];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(2);
  });

  it('updateRadar hides blips for objects beyond RADAR_RANGE (200 units)', () => {
    const hud = createCockpitMesh();
    const blips = [
      { position: new THREE.Vector3(0, 0, -300), type: 'asteroid' as const }, // 300 > 200
    ];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(0);
  });

  it('updateRadar hides all blips when called with empty list after a populated one', () => {
    const hud = createCockpitMesh();
    const blips = [{ position: new THREE.Vector3(10, 0, 10), type: 'enemy' as const }];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), []);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(0);
  });
});
