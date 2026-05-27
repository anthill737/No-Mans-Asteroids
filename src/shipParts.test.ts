import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import {
  createCockpitMesh,
  type RadarBlip,
} from './cockpit';
import { MAX_SPEED, ROLL_SPEED, THRUST } from './flight';
import { PlayerStats } from './player';
import {
  applyLoadout,
  composeShip,
  DEFAULT_SHIP_LOADOUT,
  findShipMarker,
  getStandardPartVariant,
  PartVariantRegistry,
  positionShipForFpv,
  SHIP_FPV_CAMERA_ANCHOR,
  SHIP_PART_SLOTS,
  type ShipLoadout,
  type ShipPartMeshSpec,
} from './shipParts';
import { COCKPIT_READOUT_NODE_NAMES } from './cockpitReadouts';

function expectVector(actual: readonly number[], expected: readonly number[]): void {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < expected.length; i++) {
    expect(actual[i]).toBeCloseTo(expected[i]);
  }
}

function geometryDimensions(geometry: THREE.BufferGeometry): string {
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  if (!box) return 'unbounded';
  return [
    (box.max.x - box.min.x).toFixed(3),
    (box.max.y - box.min.y).toFixed(3),
    (box.max.z - box.min.z).toFixed(3),
  ].join('x');
}

function variantShapeSignature(specs: ShipPartMeshSpec[]): string {
  return specs
    .map((spec) => [
      spec.geometry.type,
      spec.geometry.attributes.position.count,
      geometryDimensions(spec.geometry),
      spec.position.map((value) => value.toFixed(2)).join(','),
      spec.rotation?.map((value) => value.toFixed(2)).join(',') ?? '0,0,0',
    ].join(':'))
    .join('|');
}

function findSpec(specs: ShipPartMeshSpec[], name: string): ShipPartMeshSpec {
  const spec = specs.find((candidate) => candidate.name === name);
  if (!spec) throw new Error(`Missing mesh spec ${name}`);
  return spec;
}

function readCollisionRadius(ship: THREE.Object3D): number {
  const marker = findShipMarker(ship);
  if (!marker) throw new Error('Missing ship collision marker');
  marker.geometry.computeBoundingSphere();
  const radius = marker.geometry.boundingSphere?.radius;
  if (radius === undefined) throw new Error('Missing ship collision radius');
  return radius;
}

function readFlightModelSnapshot(ship: THREE.Object3D): Record<string, number> {
  const player = new PlayerStats(100, 100);
  return {
    topSpeed: MAX_SPEED,
    acceleration: THRUST,
    turnRate: ROLL_SPEED,
    healthMax: player.maxHealth,
    shieldsMax: player.maxShield,
    collisionRadius: readCollisionRadius(ship),
  };
}

describe('PartVariantRegistry', () => {
  it('lists at least three variants for every ship part slot', () => {
    for (const slot of SHIP_PART_SLOTS) {
      expect(PartVariantRegistry[slot].length).toBeGreaterThanOrEqual(3);
      for (const variant of PartVariantRegistry[slot]) {
        expect(variant.slot).toBe(slot);
        expect(variant.createMeshSpecs().length).toBeGreaterThan(0);
      }
    }
  });

  it('contains the required Standard variant names', () => {
    expect(getStandardPartVariant('Cockpit').name).toBe('Standard Cockpit');
    expect(getStandardPartVariant('Wings').name).toBe('Standard Wings');
    expect(getStandardPartVariant('Hull').name).toBe('Standard Hull');
  });

  it('uses distinct geometry shapes within each part slot', () => {
    for (const slot of SHIP_PART_SLOTS) {
      const signatures = PartVariantRegistry[slot].map((variant) => (
        variantShapeSignature(variant.createMeshSpecs())
      ));
      expect(new Set(signatures).size).toBe(PartVariantRegistry[slot].length);
    }
  });

  it('keeps the Standard Cockpit geometry aligned with the pre-existing ship dome', () => {
    const [cockpit] = getStandardPartVariant('Cockpit').createMeshSpecs();

    expect(cockpit.name).toBe('standard-cockpit-dome');
    expect(cockpit.geometry).toBeInstanceOf(THREE.SphereGeometry);
    expectVector(cockpit.position, [0, 2.2, 2.2]);

    const parameters = (cockpit.geometry as THREE.SphereGeometry).parameters;
    expect(parameters.radius).toBeCloseTo(0.75);
    expect(parameters.widthSegments).toBe(8);
    expect(parameters.heightSegments).toBe(6);
    expect(parameters.phiStart).toBeCloseTo(0);
    expect(parameters.phiLength).toBeCloseTo(Math.PI * 2);
    expect(parameters.thetaStart).toBeCloseTo(0);
    expect(parameters.thetaLength).toBeCloseTo(Math.PI / 2);
  });

  it('keeps the Standard Wings geometry aligned with the pre-existing ship wings', () => {
    const specs = getStandardPartVariant('Wings').createMeshSpecs();
    const left = findSpec(specs, 'standard-left-wing');
    const right = findSpec(specs, 'standard-right-wing');

    for (const wing of [left, right]) {
      expect(wing.geometry).toBeInstanceOf(THREE.BoxGeometry);
      const parameters = (wing.geometry as THREE.BoxGeometry).parameters;
      expect(parameters.width).toBeCloseTo(5);
      expect(parameters.height).toBeCloseTo(0.3);
      expect(parameters.depth).toBeCloseTo(3.5);
    }

    expectVector(left.position, [-3.6, 1.25, 0.5]);
    expectVector(right.position, [3.6, 1.25, 0.5]);
  });

  it('keeps the Standard Hull geometry aligned with the pre-existing ship body', () => {
    const specs = getStandardPartVariant('Hull').createMeshSpecs();
    const fuselage = findSpec(specs, 'standard-fuselage');
    const nose = findSpec(specs, 'standard-nose-cone');
    const leftEngine = findSpec(specs, 'standard-left-engine');
    const rightEngineGlow = findSpec(specs, 'standard-right-engine-glow');

    expect(fuselage.marker).toBe(true);
    expect(fuselage.geometry).toBeInstanceOf(THREE.BoxGeometry);
    expect((fuselage.geometry as THREE.BoxGeometry).parameters).toMatchObject({
      width: 2.2,
      height: 1.4,
      depth: 8,
    });
    expectVector(fuselage.position, [0, 1.5, 0]);

    expect(nose.geometry).toBeInstanceOf(THREE.ConeGeometry);
    expectVector(nose.position, [0, 1.5, 5.4]);
    expectVector(nose.rotation ?? [], [Math.PI / 2, 0, 0]);
    expect((nose.geometry as THREE.ConeGeometry).parameters.radius).toBeCloseTo(1.1);
    expect((nose.geometry as THREE.ConeGeometry).parameters.height).toBeCloseTo(2.8);
    expect((nose.geometry as THREE.ConeGeometry).parameters.radialSegments).toBe(8);

    expect(leftEngine.geometry).toBeInstanceOf(THREE.CylinderGeometry);
    expectVector(leftEngine.position, [-0.75, 1.3, -4.1]);
    expectVector(leftEngine.rotation ?? [], [Math.PI / 2, 0, 0]);

    expect(rightEngineGlow.geometry).toBeInstanceOf(THREE.CircleGeometry);
    expectVector(rightEngineGlow.position, [0.75, 1.3, -5.3]);
    expectVector(rightEngineGlow.rotation ?? [], [-Math.PI / 2, 0, 0]);

    expect(specs.filter((spec) => spec.name.includes('strut'))).toHaveLength(4);
  });
});

describe('composeShip', () => {
  it('assembles every valid cockpit, wing, and hull combination into one Object3D', () => {
    for (const cockpit of PartVariantRegistry.Cockpit) {
      for (const wings of PartVariantRegistry.Wings) {
        for (const hull of PartVariantRegistry.Hull) {
          const ship = composeShip(cockpit.id, wings.id, hull.id);
          expect(ship).toBeInstanceOf(THREE.Object3D);
          expect(ship.userData.shipLoadout).toEqual({
            cockpit: cockpit.id,
            wings: wings.id,
            hull: hull.id,
          });

          const slotRoots = ship.children.filter((child) => child.userData.shipPartRoot);
          expect(slotRoots).toHaveLength(3);
          expect(slotRoots.map((child) => child.userData.shipPartSlot).sort()).toEqual([
            'Cockpit',
            'Hull',
            'Wings',
          ]);
          expect(findShipMarker(ship)).toBeInstanceOf(THREE.Mesh);
        }
      }
    }
  });

  it('keeps the Standard loadout graph aligned with the original part names', () => {
    const ship = composeShip(
      DEFAULT_SHIP_LOADOUT.cockpit,
      DEFAULT_SHIP_LOADOUT.wings,
      DEFAULT_SHIP_LOADOUT.hull,
    );
    const meshNames: string[] = [];
    ship.traverse((child) => {
      if (child instanceof THREE.Mesh) meshNames.push(child.name);
    });

    expect(meshNames).toContain('standard-cockpit-dome');
    expect(meshNames).toContain('standard-left-wing');
    expect(meshNames).toContain('standard-right-wing');
    expect(meshNames).toContain('standard-fuselage');
  });

  it('swaps loadout parts on the existing Object3D without detached part roots', () => {
    const ship = composeShip(
      DEFAULT_SHIP_LOADOUT.cockpit,
      DEFAULT_SHIP_LOADOUT.wings,
      DEFAULT_SHIP_LOADOUT.hull,
    );
    const nextLoadout: ShipLoadout = {
      cockpit: 'cockpit-razor',
      wings: 'wings-forked',
      hull: 'hull-twin-boom',
    };

    const returned = applyLoadout(nextLoadout, ship);
    expect(returned).toBe(ship);
    expect(ship.userData.shipLoadout).toEqual(nextLoadout);

    const slotRoots = ship.children.filter((child) => child.userData.shipPartRoot);
    expect(slotRoots).toHaveLength(3);
    expect(slotRoots.map((child) => child.userData.shipPartVariantId).sort()).toEqual([
      'cockpit-razor',
      'hull-twin-boom',
      'wings-forked',
    ]);

    const oldStandardMesh = ship.getObjectByName('standard-fuselage');
    expect(oldStandardMesh).toBeUndefined();
    expect(ship.getObjectByName('twin-boom-center-keel')).toBeInstanceOf(THREE.Mesh);
  });

  it('adds the required named diegetic readout nodes to every cockpit variant', () => {
    for (const cockpit of PartVariantRegistry.Cockpit) {
      const ship = composeShip(cockpit.id, 'wings-standard', 'hull-standard');

      for (const name of COCKPIT_READOUT_NODE_NAMES) {
        const node = ship.getObjectByName(name);
        expect(node, `${cockpit.id} is missing ${name}`).toBeDefined();
        expect(node?.userData.cockpitReadoutNode).toBe(true);
      }
    }
  });

  it('rebinds live HUD state to replacement cockpit nodes after runtime applyLoadout', () => {
    const ship = composeShip('cockpit-standard', 'wings-standard', 'hull-standard');
    const hud = createCockpitMesh();
    hud.bindToCockpit(ship);

    hud.setHealth(0.91);
    const oldHealthNode = ship.getObjectByName('HEALTH');
    expect(oldHealthNode?.userData.hudReadoutText).toBe('HEALTH  91 / 100');

    applyLoadout({
      cockpit: 'cockpit-razor',
      wings: 'wings-forked',
      hull: 'hull-twin-boom',
    }, ship);

    hud.bindToCockpit(ship);
    const radarContacts: RadarBlip[] = [
      {
        position: new THREE.Vector3(0, 0, 100),
        type: 'enemy',
        bearing: 0,
        elevation: 0,
      },
    ];

    hud.setHealth(0.37);
    hud.setShield(0.64);
    hud.setAmmo(7, 12);
    hud.setActiveWeapon('chaingun');
    hud.setCredits(420);
    hud.setBoostActive(true);
    hud.setSpeed(new THREE.Vector3(18, 0, 0), 30, 48);
    hud.updateRadar(new THREE.Vector3(), new THREE.Quaternion(), radarContacts);

    const newHealthNode = ship.getObjectByName('HEALTH');
    expect(newHealthNode).toBeDefined();
    expect(newHealthNode).not.toBe(oldHealthNode);
    expect(newHealthNode?.userData.hudReadoutText).toBe('HEALTH  37 / 100');
    expect(ship.getObjectByName('SHIELDS')?.userData.hudReadoutText).toBe('SHIELDS  64 / 100');
    expect(ship.getObjectByName('AMMO')?.userData.hudReadoutText).toBe('AMMO  7 / 12');
    expect(ship.getObjectByName('WEAPON')?.userData.activeWeapon).toBe('chaingun');
    expect(ship.getObjectByName('CREDITS')?.userData.credits).toBe(420);
    expect(ship.getObjectByName('BOOST')?.userData.boostActive).toBe(true);
    expect(ship.getObjectByName('SPEED')?.userData.hudReadoutText).toBe('SPEED  18 m/s');
    expect(ship.getObjectByName('SPEED_GAUGE')?.userData.boostZoneActive).toBe(true);
    expect(ship.getObjectByName('RADAR')?.userData.contactCount).toBe(1);
    expect(ship.getObjectByName('CONTACTS')?.userData.contacts).toEqual([
      { type: 'enemy', bearing: 0, elevation: 0 },
    ]);
  });

  it('does not drift flight-model constants after equipping a non-Standard cosmetic loadout', () => {
    const ship = composeShip(
      DEFAULT_SHIP_LOADOUT.cockpit,
      DEFAULT_SHIP_LOADOUT.wings,
      DEFAULT_SHIP_LOADOUT.hull,
    );
    const before = readFlightModelSnapshot(ship);

    applyLoadout({
      cockpit: 'cockpit-razor',
      wings: 'wings-forked',
      hull: DEFAULT_SHIP_LOADOUT.hull,
    }, ship);

    expect(readFlightModelSnapshot(ship)).toStrictEqual(before);
  });

  it('keeps cockpit readout nodes inside the default FPV camera frustum', () => {
    const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
    camera.updateMatrixWorld(true);
    camera.updateProjectionMatrix();

    for (const cockpit of PartVariantRegistry.Cockpit) {
      const ship = composeShip(cockpit.id, 'wings-standard', 'hull-standard');
      positionShipForFpv(ship);
      ship.updateMatrixWorld(true);

      for (const name of COCKPIT_READOUT_NODE_NAMES) {
        const node = ship.getObjectByName(name);
        expect(node).toBeDefined();
        const projected = node!.getWorldPosition(new THREE.Vector3()).project(camera);
        expect(projected.z, `${cockpit.id} ${name} should be in front of the camera`).toBeLessThan(1);
        expect(Math.abs(projected.x), `${cockpit.id} ${name} should not be horizontally off-screen`).toBeLessThanOrEqual(1);
        expect(Math.abs(projected.y), `${cockpit.id} ${name} should not be vertically off-screen`).toBeLessThanOrEqual(1);
      }
    }
  });

  it('documents one fixed FPV camera anchor for every cockpit variant', () => {
    expectVector(SHIP_FPV_CAMERA_ANCHOR, [0, 3.0, -6.4]);
  });

  it('places composed FPV ship meshes beyond the camera near plane', () => {
    const ship = composeShip('cockpit-twin-bubble', 'wings-forked', 'hull-twin-boom');
    positionShipForFpv(ship);
    ship.updateMatrixWorld(true);

    ship.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const box = new THREE.Box3().setFromObject(child);
      expect(box.max.z).toBeLessThan(-0.1);
    });
  });
});
