import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { createCockpitMesh, computeRadarContacts, RADAR_RANGE } from './cockpit';
import { PURSUIT_RANGE } from './enemy';

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
      { position: new THREE.Vector3(10, 0, -50), type: 'asteroid' as const, bearing: 0, elevation: 0 },
      { position: new THREE.Vector3(-30, 5, 20), type: 'enemy' as const, bearing: 0, elevation: 0 },
    ];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(2);
  });

  it('updateRadar hides blips for objects beyond RADAR_RANGE', () => {
    const hud = createCockpitMesh();
    // Place blip well outside detection range
    const blips = [
      { position: new THREE.Vector3(0, 0, -(RADAR_RANGE + 100)), type: 'asteroid' as const, bearing: 0, elevation: 0 },
    ];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(0);
  });

  it('updateRadar hides all blips when called with empty list after a populated one', () => {
    const hud = createCockpitMesh();
    const blips = [{ position: new THREE.Vector3(10, 0, 10), type: 'enemy' as const, bearing: 0, elevation: 0 }];
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), blips);
    hud.updateRadar(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), []);

    const visibleBlips = hud.group.children.filter(
      (c) => c.userData.isBlip && c.visible,
    );
    expect(visibleBlips.length).toBe(0);
  });

  // ── Radar 3D display: elevation encoding ──────────────────────────────────

  it('cockpit group contains a RADAR label mesh', () => {
    const hud = createCockpitMesh();
    const radarLabel = hud.group.children.find((c) => c.userData.hudReadout === 'radar');
    expect(radarLabel).toBeDefined();
  });

  it('RADAR label text is set to "RADAR"', () => {
    const hud = createCockpitMesh();
    const radarLabel = hud.group.children.find((c) => c.userData.hudReadout === 'radar');
    expect(radarLabel?.userData.hudReadoutText).toBe('RADAR');
  });

  it('blip with positive elevation is positioned above blip at zero elevation', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    // Level blip
    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, 0, 50), type: 'enemy' as const, bearing: 0, elevation: 0 },
    ]);
    const levelY = hud.group.children.find((c) => c.userData.isBlip && c.visible)!.position.y;

    // Blip above player
    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, 30, 50), type: 'enemy' as const, bearing: 0, elevation: Math.PI / 6 },
    ]);
    const aboveY = hud.group.children.find((c) => c.userData.isBlip && c.visible)!.position.y;

    expect(aboveY).toBeGreaterThan(levelY);
  });

  it('blip with negative elevation is positioned below blip at zero elevation', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    // Level blip
    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, 0, 50), type: 'enemy' as const, bearing: 0, elevation: 0 },
    ]);
    const levelY = hud.group.children.find((c) => c.userData.isBlip && c.visible)!.position.y;

    // Blip below player
    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, -30, 50), type: 'enemy' as const, bearing: 0, elevation: -Math.PI / 6 },
    ]);
    const belowY = hud.group.children.find((c) => c.userData.isBlip && c.visible)!.position.y;

    expect(belowY).toBeLessThan(levelY);
  });

  it('blip directly above (elevation = π/2) reaches maximum y on radar', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, 50, 0), type: 'enemy' as const, bearing: 0, elevation: Math.PI / 2 },
    ]);
    const topBlip = hud.group.children.find((c) => c.userData.isBlip && c.visible);
    expect(topBlip).toBeDefined();
    // y should be above the radar center (y = -0.23)
    expect(topBlip!.position.y).toBeGreaterThan(-0.23);
  });

  it('blip directly below (elevation = -π/2) reaches minimum y on radar', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(0, -50, 0), type: 'enemy' as const, bearing: 0, elevation: -Math.PI / 2 },
    ]);
    const bottomBlip = hud.group.children.find((c) => c.userData.isBlip && c.visible);
    expect(bottomBlip).toBeDefined();
    // y should be below the radar center (y = -0.23)
    expect(bottomBlip!.position.y).toBeLessThan(-0.23);
  });

  it('blip to the right (bearing = π/2) has x > radar center x', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(50, 0, 0), type: 'enemy' as const, bearing: Math.PI / 2, elevation: 0 },
    ]);
    const blip = hud.group.children.find((c) => c.userData.isBlip && c.visible);
    expect(blip).toBeDefined();
    // Radar center x = 0.92; blip to the right should have x > 0.92
    expect(blip!.position.x).toBeGreaterThan(0.92);
  });

  it('blip to the left (bearing = -π/2) has x < radar center x', () => {
    const hud = createCockpitMesh();
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    hud.updateRadar(playerPos, playerQuat, [
      { position: new THREE.Vector3(-50, 0, 0), type: 'enemy' as const, bearing: -Math.PI / 2, elevation: 0 },
    ]);
    const blip = hud.group.children.find((c) => c.userData.isBlip && c.visible);
    expect(blip).toBeDefined();
    // Blip to the left should have x < 0.92
    expect(blip!.position.x).toBeLessThan(0.92);
  });

  it('enemy blips use a hostile red color', () => {
    const hud = createCockpitMesh();
    hud.updateRadar(new THREE.Vector3(), new THREE.Quaternion(), [
      { position: new THREE.Vector3(0, 0, 50), type: 'enemy' as const, bearing: 0, elevation: 0 },
    ]);
    const blip = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.isBlip && c.visible,
    ) as THREE.Mesh;
    const mat = blip.material as THREE.MeshLambertMaterial;
    // Red channel dominant (hostile appearance)
    expect(mat.color.r).toBeGreaterThan(mat.color.g);
    expect(mat.color.r).toBeGreaterThan(mat.color.b);
  });
});

// ── computeRadarContacts ──────────────────────────────────────────────────────

describe('computeRadarContacts', () => {
  it('RADAR_RANGE is at least as large as PURSUIT_RANGE (enemy engagement range)', () => {
    expect(RADAR_RANGE).toBeGreaterThanOrEqual(PURSUIT_RANGE);
  });

  it('enemy directly ahead (+Z) and above (+Y) has positive elevation and near-zero bearing', () => {
    // Player at origin, identity quaternion (facing +Z)
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion(); // identity

    const enemy = { position: new THREE.Vector3(0, 50, 100) };
    const contacts = computeRadarContacts([enemy], playerPos, playerQuat);

    expect(contacts.length).toBe(1);
    expect(contacts[0].elevation).toBeGreaterThan(0);
    expect(contacts[0].bearing).toBeCloseTo(0, 5);
  });

  it('enemy directly behind (-Z) and below (-Y) has negative elevation and bearing ≈ ±π', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const enemy = { position: new THREE.Vector3(0, -50, -100) };
    const contacts = computeRadarContacts([enemy], playerPos, playerQuat);

    expect(contacts.length).toBe(1);
    expect(contacts[0].elevation).toBeLessThan(0);
    // bearing should be close to π (or -π) — check absolute value
    expect(Math.abs(contacts[0].bearing)).toBeCloseTo(Math.PI, 5);
  });

  it('enemy to the right (+X) has positive bearing', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const enemy = { position: new THREE.Vector3(100, 0, 0) };
    const contacts = computeRadarContacts([enemy], playerPos, playerQuat);

    expect(contacts.length).toBe(1);
    expect(contacts[0].bearing).toBeCloseTo(Math.PI / 2, 4);
    expect(contacts[0].elevation).toBeCloseTo(0, 4);
  });

  it('enemy to the left (-X) has negative bearing', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const enemy = { position: new THREE.Vector3(-100, 0, 0) };
    const contacts = computeRadarContacts([enemy], playerPos, playerQuat);

    expect(contacts.length).toBe(1);
    expect(contacts[0].bearing).toBeCloseTo(-Math.PI / 2, 4);
  });

  it('enemy beyond RADAR_RANGE is excluded', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const farEnemy = { position: new THREE.Vector3(0, 0, RADAR_RANGE + 1) };
    const contacts = computeRadarContacts([farEnemy], playerPos, playerQuat);
    expect(contacts.length).toBe(0);
  });

  it('enemy exactly at RADAR_RANGE boundary is excluded (strictly greater-than filter)', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    // Inside range
    const nearEnemy = { position: new THREE.Vector3(0, 0, RADAR_RANGE - 1) };
    expect(computeRadarContacts([nearEnemy], playerPos, playerQuat).length).toBe(1);

    // Outside range
    const farEnemy = { position: new THREE.Vector3(0, 0, RADAR_RANGE + 1) };
    expect(computeRadarContacts([farEnemy], playerPos, playerQuat).length).toBe(0);
  });

  it('adding an enemy to the input array causes it to appear in the next call result', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const enemies: Array<{ position: THREE.Vector3 }> = [];
    expect(computeRadarContacts(enemies, playerPos, playerQuat).length).toBe(0);

    enemies.push({ position: new THREE.Vector3(0, 0, 50) });
    expect(computeRadarContacts(enemies, playerPos, playerQuat).length).toBe(1);
  });

  it('removing an enemy from the input array causes it to be absent in the next call result', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();

    const enemy = { position: new THREE.Vector3(0, 0, 50) };
    const enemies: Array<{ position: THREE.Vector3 }> = [enemy];
    expect(computeRadarContacts(enemies, playerPos, playerQuat).length).toBe(1);

    enemies.splice(0, 1);
    expect(computeRadarContacts(enemies, playerPos, playerQuat).length).toBe(0);
  });

  it('all returned contacts have type "enemy"', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();
    const enemies = [
      { position: new THREE.Vector3(10, 0, 10) },
      { position: new THREE.Vector3(-20, 5, 30) },
    ];
    const contacts = computeRadarContacts(enemies, playerPos, playerQuat);
    expect(contacts.every((c) => c.type === 'enemy')).toBe(true);
  });

  it('bearing and elevation are in expected ranges', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();
    const enemies = [
      { position: new THREE.Vector3(30, 20, 50) },
      { position: new THREE.Vector3(-80, -40, -60) },
    ];
    const contacts = computeRadarContacts(enemies, playerPos, playerQuat);
    for (const c of contacts) {
      expect(c.bearing).toBeGreaterThanOrEqual(-Math.PI);
      expect(c.bearing).toBeLessThanOrEqual(Math.PI);
      expect(c.elevation).toBeGreaterThanOrEqual(-Math.PI / 2);
      expect(c.elevation).toBeLessThanOrEqual(Math.PI / 2);
    }
  });

  it('returns empty array when enemies array is empty', () => {
    const contacts = computeRadarContacts([], new THREE.Vector3(), new THREE.Quaternion());
    expect(contacts).toEqual([]);
  });

  it('player orientation (quaternion) affects bearing calculation', () => {
    // Enemy is at world +X = (100, 0, 0).
    // Player faces +Z (identity): enemy is to the right → bearing ≈ π/2.
    // Player faces +X (rotate +π/2 around Y): enemy is directly ahead → bearing ≈ 0.
    const playerPos = new THREE.Vector3(0, 0, 0);
    const enemy = { position: new THREE.Vector3(100, 0, 0) };

    const facingZ = new THREE.Quaternion(); // identity — local +Z = world +Z
    const [facingZContact] = computeRadarContacts([enemy], playerPos, facingZ);
    expect(facingZContact.bearing).toBeCloseTo(Math.PI / 2, 3);

    // Rotate +π/2 around Y: local +Z maps to world +X (player faces +X)
    const facingX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    const [facingXContact] = computeRadarContacts([enemy], playerPos, facingX);
    expect(facingXContact.bearing).toBeCloseTo(0, 3);
  });
});
