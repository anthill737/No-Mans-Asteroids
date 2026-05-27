import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  createCockpitMesh,
  computeRadarContacts,
  computeSpeedometerDisplay,
  RADAR_RANGE,
} from './cockpit';
import { COCKPIT_READOUT_NODE_NAMES } from './cockpitReadouts';
import { PURSUIT_RANGE } from './enemy';

describe('createCockpitMesh', () => {
  it('returns an object whose group is a THREE.Group', () => {
    const hud = createCockpitMesh();
    expect(hud.group).toBeInstanceOf(THREE.Group);
  });

  it('exposes the five HUD control methods', () => {
    const hud = createCockpitMesh();
    expect(typeof hud.bindToCockpit).toBe('function');
    expect(typeof hud.setHealth).toBe('function');
    expect(typeof hud.setShield).toBe('function');
    expect(typeof hud.setAmmo).toBe('function');
    expect(typeof hud.setActiveWeapon).toBe('function');
    expect(typeof hud.setBoostActive).toBe('function');
    expect(typeof hud.setSpeed).toBe('function');
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

  it('rebinds HUD updates to the named readout nodes on a supplied cockpit object', () => {
    const hud = createCockpitMesh();
    const cockpit = new THREE.Group();
    for (const name of COCKPIT_READOUT_NODE_NAMES) {
      const node = new THREE.Group();
      node.name = name;
      cockpit.add(node);
    }

    hud.bindToCockpit(cockpit);
    hud.setHealth(0.42);
    hud.setShield(0.77);
    hud.setAmmo(12, 30);
    hud.setActiveWeapon('missile');
    hud.setCredits(350);
    hud.setBoostActive(true);
    hud.setSpeed(new THREE.Vector3(12, 5, 0), 30, 48);
    hud.updateRadar(
      new THREE.Vector3(),
      new THREE.Quaternion(),
      [{ position: new THREE.Vector3(0, 0, 100), type: 'enemy', bearing: 0, elevation: 0 }],
    );

    expect(cockpit.getObjectByName('HEALTH')?.userData.hudReadoutText).toBe('HEALTH  42 / 100');
    expect(cockpit.getObjectByName('SHIELDS')?.userData.hudReadoutText).toBe('SHIELDS  77 / 100');
    expect(cockpit.getObjectByName('AMMO')?.userData.hudReadoutText).toBe('AMMO  12 / 30');
    expect(cockpit.getObjectByName('WEAPON')?.userData.activeWeapon).toBe('missile');
    expect(cockpit.getObjectByName('CREDITS')?.userData.credits).toBe(350);
    expect(cockpit.getObjectByName('BOOST')?.userData.boostActive).toBe(true);
    expect(cockpit.getObjectByName('SPEED_NUMERIC')?.userData.hudReadoutText).toBe('SPEED  13 m/s');
    expect(cockpit.getObjectByName('SPEED_GAUGE')?.userData.boostZoneActive).toBe(true);
    expect(cockpit.getObjectByName('CONTACTS')?.userData.contactCount).toBe(1);
  });

  // ── BOOST indicator ────────────────────────────────────────────────────────

  it('contains a labeled BOOST readout and cockpit-geometry indicator', () => {
    const hud = createCockpitMesh();
    const boostLabel = hud.group.children.find((c) => c.userData.hudReadout === 'boost');
    const boostIndicator = hud.group.children.find((c) => c.userData.isBoostIndicator);

    expect(boostLabel).toBeDefined();
    expect(boostLabel?.userData.hudReadoutText).toBe('BOOST');
    expect(boostIndicator).toBeDefined();
  });

  it('BOOST indicator lights while active and dims while inactive', () => {
    const hud = createCockpitMesh();
    const boostIndicator = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.isBoostIndicator,
    );
    expect(boostIndicator).toBeDefined();

    hud.setBoostActive(true);
    const mat = boostIndicator!.material as THREE.MeshLambertMaterial;
    expect(boostIndicator!.userData.boostActive).toBe(true);
    expect(mat.emissiveIntensity).toBeGreaterThan(0);

    hud.setBoostActive(false);
    expect(boostIndicator!.userData.boostActive).toBe(false);
    expect(mat.emissiveIntensity).toBe(0);
  });

  // ── SPEED readout ──────────────────────────────────────────────────────────

  it('contains a labeled SPEED readout and cockpit-geometry gauge', () => {
    const hud = createCockpitMesh();
    const speedLabel = hud.group.children.find((c) => c.userData.hudReadout === 'speed');
    const speedGauge = hud.group.children.find((c) => c.userData.role === 'speedGaugeBg');

    expect(speedLabel).toBeDefined();
    expect(speedLabel?.userData.hudReadoutText).toBe('SPEED  0 m/s');
    expect(speedGauge).toBeDefined();
  });

  it('setSpeed writes the numeric SPEED readout from authoritative velocity magnitude', () => {
    const hud = createCockpitMesh();
    hud.setSpeed(new THREE.Vector3(12, 5, 0), 30, 30);

    expect(hud.getReadoutText('speed')).toBe('SPEED  13 m/s');
  });

  it('speed gauge fills to the current normal max-speed limit', () => {
    const hud = createCockpitMesh();
    const normalFillGroup = hud.group.children.find((c) => c.userData.role === 'speedNormalFill');
    expect(normalFillGroup).toBeDefined();
    const normalFill = normalFillGroup!.children[0] as THREE.Mesh;

    hud.setSpeed(new THREE.Vector3(15, 0, 0), 30, 30);
    expect(normalFill.scale.x).toBeCloseTo(0.5, 3);

    hud.setSpeed(new THREE.Vector3(30, 0, 0), 30, 30);
    expect(normalFill.scale.x).toBeCloseTo(1, 3);
  });

  it('speed gauge exposes a colored boost zone when current max speed exceeds normal max', () => {
    const hud = createCockpitMesh();
    const boostZone = hud.group.children.find(
      (c): c is THREE.Mesh => c.userData.role === 'speedBoostZone',
    );
    const boostFillGroup = hud.group.children.find((c) => c.userData.role === 'speedBoostFill');
    expect(boostZone).toBeDefined();
    expect(boostFillGroup).toBeDefined();
    const boostFill = boostFillGroup!.children[0] as THREE.Mesh;

    hud.setSpeed(new THREE.Vector3(40, 0, 0), 30, 48);

    expect(boostZone!.visible).toBe(true);
    expect(boostZone!.userData.boostZoneActive).toBe(true);
    expect(boostFill.visible).toBe(true);
    expect(boostFill.scale.x).toBeGreaterThan(0);
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

  it('returns one derived contact per authoritative in-range world enemy and zero for no world enemies', () => {
    const playerPos = new THREE.Vector3(30, -12, 75);
    const playerQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(0, Math.PI / 3, 0),
    );
    const localEnemyOffsets = [
      new THREE.Vector3(0, 35, 180),
      new THREE.Vector3(140, -45, 120),
      new THREE.Vector3(-95, 10, -150),
    ];
    const world = {
      enemies: localEnemyOffsets.map((localOffset) => {
        const enemy = new THREE.Mesh();
        enemy.position.copy(localOffset.clone().applyQuaternion(playerQuat).add(playerPos));
        return enemy;
      }),
    };

    const contacts = computeRadarContacts(world.enemies, playerPos, playerQuat);

    expect(contacts).toHaveLength(world.enemies.length);
    contacts.forEach((contact, index) => {
      const derivedLocalOffset = world.enemies[index].position
        .clone()
        .sub(playerPos)
        .applyQuaternion(playerQuat.clone().invert());
      const horizontalDistance = Math.sqrt(
        derivedLocalOffset.x * derivedLocalOffset.x
          + derivedLocalOffset.z * derivedLocalOffset.z,
      );

      expect(contact.position).toEqual(world.enemies[index].position);
      expect(contact.type).toBe('enemy');
      expect(contact.bearing).toBeCloseTo(
        Math.atan2(derivedLocalOffset.x, derivedLocalOffset.z),
        5,
      );
      expect(contact.elevation).toBeCloseTo(
        Math.atan2(derivedLocalOffset.y, horizontalDistance),
        5,
      );
    });

    expect(computeRadarContacts([], playerPos, playerQuat)).toHaveLength(0);
    expect(
      computeRadarContacts(
        [{ position: new THREE.Vector3(RADAR_RANGE + 100, 0, 0).add(playerPos) }],
        playerPos,
        playerQuat,
      ),
    ).toHaveLength(0);
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

  it('returns one contact per authoritative in-range enemy with derived bearing and elevation', () => {
    const playerPos = new THREE.Vector3(0, 0, 0);
    const playerQuat = new THREE.Quaternion();
    const enemies = [
      { position: new THREE.Vector3(0, 40, 100) },
      { position: new THREE.Vector3(120, -30, 0) },
      { position: new THREE.Vector3(0, 0, RADAR_RANGE + 50) },
    ];

    const contacts = computeRadarContacts(enemies, playerPos, playerQuat);

    expect(contacts.length).toBe(2);
    expect(contacts[0].position).toEqual(enemies[0].position);
    expect(contacts[0].bearing).toBeCloseTo(0, 5);
    expect(contacts[0].elevation).toBeGreaterThan(0);
    expect(contacts[1].position).toEqual(enemies[1].position);
    expect(contacts[1].bearing).toBeCloseTo(Math.PI / 2, 5);
    expect(contacts[1].elevation).toBeLessThan(0);
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

// ── computeSpeedometerDisplay ─────────────────────────────────────────────────

describe('computeSpeedometerDisplay', () => {
  it('converts a synthetic ship-velocity vector to the expected m/s readout', () => {
    const display = computeSpeedometerDisplay(new THREE.Vector3(12, 5, 0), 30, 30);

    expect(display.speedMps).toBe(13);
    expect(display.readoutText).toBe('SPEED  13 m/s');
    expect(display.currentRatio).toBeCloseTo(13 / 30, 1);
  });

  it('scales the full gauge to the current max-speed limit while preserving the boost zone', () => {
    const display = computeSpeedometerDisplay(new THREE.Vector3(40, 0, 0), 30, 48);

    expect(display.boostZoneActive).toBe(true);
    expect(display.normalRatio).toBeCloseTo(30 / 48, 5);
    expect(display.boostZoneRatio).toBeCloseTo(18 / 48, 5);
    expect(display.boostFillRatio).toBeCloseTo(10 / 18, 5);
  });
});
