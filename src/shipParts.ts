import * as THREE from 'three';
import { COCKPIT_READOUT_NODE_NAMES, type CockpitReadoutNodeName } from './cockpitReadouts';

export const SHIP_PART_SLOTS = ['Cockpit', 'Wings', 'Hull'] as const;
export type ShipPartSlot = typeof SHIP_PART_SLOTS[number];

export interface ShipPartMaterials {
  hull: THREE.Material;
  dark: THREE.Material;
  cockpit: THREE.Material;
  engine: THREE.Material;
  glow: THREE.Material;
  strut: THREE.Material;
}

export type ShipPartMaterialKey = keyof ShipPartMaterials;
export type VectorTuple = readonly [number, number, number];

export interface ShipLoadout {
  readonly cockpit: string;
  readonly wings: string;
  readonly hull: string;
}

export interface LegacyShipLoadout {
  readonly cockpitId: string;
  readonly wingsId: string;
  readonly hullId: string;
}

export type ShipLoadoutInput = Partial<ShipLoadout> & Partial<LegacyShipLoadout>;

export interface ComposeShipOptions {
  readonly materials?: ShipPartMaterials;
  readonly origin?: THREE.Vector3;
  readonly disposeReplacedGeometry?: boolean;
}

export interface ShipPartMeshSpec {
  readonly name: string;
  readonly geometry: THREE.BufferGeometry;
  readonly material: ShipPartMaterialKey;
  readonly position: VectorTuple;
  readonly rotation?: VectorTuple;
  readonly marker?: boolean;
}

const COCKPIT_READOUT_CAMERA_POSITIONS: Record<CockpitReadoutNodeName, VectorTuple> = {
  HEALTH: [-0.55, -0.285, -0.87],
  SHIELDS: [0, -0.285, -0.87],
  AMMO: [0.48, -0.285, -0.87],
  CREDITS: [-0.45, -0.44, -0.87],
  WEAPON: [-0.92, -0.245, -0.84],
  LOW_HEALTH_WARNING: [-0.76, -0.34, -0.87],
  RADAR: [0.92, -0.23, -0.82],
  CONTACTS: [0.92, -0.23, -0.82],
  BOOST: [0.44, -0.44, -0.87],
  SPEED: [0, -0.205, -0.87],
  SPEED_NUMERIC: [0, -0.205, -0.87],
  SPEED_GAUGE: [0, -0.245, -0.87],
};

export interface PartVariant {
  readonly id: string;
  readonly slot: ShipPartSlot;
  readonly name: string;
  readonly createMeshSpecs: () => ShipPartMeshSpec[];
}

function triangularWingGeometry(side: -1 | 1): THREE.BufferGeometry {
  const halfY = 0.14;
  const rootFrontZ = 1.9;
  const rootRearZ = -1.55;
  const tipX = side * 5.8;
  const tipZ = -0.2;

  const vertices = new Float32Array([
    0, halfY, rootFrontZ,
    0, halfY, rootRearZ,
    tipX, halfY, tipZ,
    0, -halfY, rootFrontZ,
    0, -halfY, rootRearZ,
    tipX, -halfY, tipZ,
  ]);

  const indices = side === -1
    ? [0, 2, 1, 3, 4, 5, 0, 1, 4, 0, 4, 3, 1, 2, 5, 1, 5, 4, 2, 0, 3, 2, 3, 5]
    : [0, 1, 2, 3, 5, 4, 0, 4, 1, 0, 3, 4, 1, 5, 2, 1, 4, 5, 2, 3, 0, 2, 5, 3];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function box(
  name: string,
  material: ShipPartMaterialKey,
  size: VectorTuple,
  position: VectorTuple,
  rotation?: VectorTuple,
): ShipPartMeshSpec {
  return { name, material, position, rotation, geometry: new THREE.BoxGeometry(...size) };
}

function cockpitDome(name: string, position: VectorTuple, radius = 0.75): ShipPartMeshSpec {
  return {
    name,
    material: 'cockpit',
    position,
    geometry: new THREE.SphereGeometry(radius, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2),
  };
}

function enginePod(name: string, x: number, z: number, radiusTop = 0.45, radiusBottom = 0.6): ShipPartMeshSpec {
  return {
    name,
    material: 'engine',
    position: [x, 1.3, z],
    rotation: [Math.PI / 2, 0, 0],
    geometry: new THREE.CylinderGeometry(radiusTop, radiusBottom, 2.2, 8),
  };
}

function engineGlow(name: string, x: number, z: number, radius = 0.44): ShipPartMeshSpec {
  return {
    name,
    material: 'glow',
    position: [x, 1.3, z],
    rotation: [-Math.PI / 2, 0, 0],
    geometry: new THREE.CircleGeometry(radius, 8),
  };
}

function strut(name: string, x: number, z: number): ShipPartMeshSpec {
  return {
    name,
    material: 'strut',
    position: [x, 0.8, z],
    geometry: new THREE.CylinderGeometry(0.1, 0.15, 1.0, 6),
  };
}

export const PartVariantRegistry = {
  Cockpit: [
    {
      id: 'cockpit-standard',
      slot: 'Cockpit',
      name: 'Standard Cockpit',
      createMeshSpecs: () => [
        cockpitDome('standard-cockpit-dome', [0, 2.2, 2.2]),
      ],
    },
    {
      id: 'cockpit-razor',
      slot: 'Cockpit',
      name: 'Razor Canopy',
      createMeshSpecs: () => [
        {
          name: 'razor-forward-canopy',
          material: 'cockpit',
          position: [0, 2.05, 2.45],
          rotation: [Math.PI / 2, Math.PI / 4, 0],
          geometry: new THREE.ConeGeometry(0.85, 1.8, 4),
        },
      ],
    },
    {
      id: 'cockpit-twin-bubble',
      slot: 'Cockpit',
      name: 'Twin Bubble Cockpit',
      createMeshSpecs: () => [
        cockpitDome('left-bubble-canopy', [-0.45, 2.1, 2.15], 0.48),
        cockpitDome('right-bubble-canopy', [0.45, 2.1, 2.15], 0.48),
        box('twin-bubble-center-spine', 'dark', [0.18, 0.22, 1.35], [0, 2.08, 2.2]),
      ],
    },
  ],
  Wings: [
    {
      id: 'wings-standard',
      slot: 'Wings',
      name: 'Standard Wings',
      createMeshSpecs: () => [
        box('standard-left-wing', 'dark', [5, 0.3, 3.5], [-3.6, 1.25, 0.5]),
        box('standard-right-wing', 'dark', [5, 0.3, 3.5], [3.6, 1.25, 0.5]),
      ],
    },
    {
      id: 'wings-delta',
      slot: 'Wings',
      name: 'Delta Wings',
      createMeshSpecs: () => [
        {
          name: 'delta-left-wing',
          material: 'dark',
          position: [0, 1.24, 0.55],
          geometry: triangularWingGeometry(-1),
        },
        {
          name: 'delta-right-wing',
          material: 'dark',
          position: [0, 1.24, 0.55],
          geometry: triangularWingGeometry(1),
        },
      ],
    },
    {
      id: 'wings-forked',
      slot: 'Wings',
      name: 'Forked Wings',
      createMeshSpecs: () => [
        box('forked-left-forward-wing', 'dark', [3.4, 0.25, 1.1], [-3.2, 1.3, 1.85], [0, 0.18, 0]),
        box('forked-left-rear-wing', 'dark', [3.7, 0.25, 0.9], [-3.3, 1.2, -1.1], [0, -0.2, 0]),
        box('forked-right-forward-wing', 'dark', [3.4, 0.25, 1.1], [3.2, 1.3, 1.85], [0, -0.18, 0]),
        box('forked-right-rear-wing', 'dark', [3.7, 0.25, 0.9], [3.3, 1.2, -1.1], [0, 0.2, 0]),
      ],
    },
  ],
  Hull: [
    {
      id: 'hull-standard',
      slot: 'Hull',
      name: 'Standard Hull',
      createMeshSpecs: () => [
        {
          ...box('standard-fuselage', 'hull', [2.2, 1.4, 8], [0, 1.5, 0]),
          marker: true,
        },
        {
          name: 'standard-nose-cone',
          material: 'hull',
          position: [0, 1.5, 5.4],
          rotation: [Math.PI / 2, 0, 0],
          geometry: new THREE.ConeGeometry(1.1, 2.8, 8),
        },
        enginePod('standard-left-engine', -0.75, -4.1),
        engineGlow('standard-left-engine-glow', -0.75, -5.3),
        enginePod('standard-right-engine', 0.75, -4.1),
        engineGlow('standard-right-engine-glow', 0.75, -5.3),
        strut('standard-front-left-strut', -0.8, 2.5),
        strut('standard-front-right-strut', 0.8, 2.5),
        strut('standard-rear-left-strut', -0.8, -2.5),
        strut('standard-rear-right-strut', 0.8, -2.5),
      ],
    },
    {
      id: 'hull-spear',
      slot: 'Hull',
      name: 'Spear Hull',
      createMeshSpecs: () => [
        {
          name: 'spear-fuselage',
          material: 'hull',
          position: [0, 1.45, -0.2],
          rotation: [Math.PI / 2, 0, 0],
          marker: true,
          geometry: new THREE.CylinderGeometry(0.8, 1.1, 7.6, 6),
        },
        {
          name: 'spear-long-nose',
          material: 'hull',
          position: [0, 1.45, 5.15],
          rotation: [Math.PI / 2, 0, 0],
          geometry: new THREE.ConeGeometry(0.85, 3.4, 6),
        },
        enginePod('spear-main-engine', 0, -4.3, 0.65, 0.85),
        engineGlow('spear-main-engine-glow', 0, -5.5, 0.62),
        strut('spear-front-left-strut', -0.55, 2.1),
        strut('spear-front-right-strut', 0.55, 2.1),
        strut('spear-rear-left-strut', -0.7, -2.6),
        strut('spear-rear-right-strut', 0.7, -2.6),
      ],
    },
    {
      id: 'hull-twin-boom',
      slot: 'Hull',
      name: 'Twin Boom Hull',
      createMeshSpecs: () => [
        {
          ...box('twin-boom-center-keel', 'hull', [1.1, 1.0, 5.6], [0, 1.45, 0.5]),
          marker: true,
        },
        box('twin-boom-left-body', 'hull', [0.8, 0.9, 6.7], [-1.05, 1.35, -0.25]),
        box('twin-boom-right-body', 'hull', [0.8, 0.9, 6.7], [1.05, 1.35, -0.25]),
        {
          name: 'twin-boom-arrow-nose',
          material: 'hull',
          position: [0, 1.45, 4.75],
          rotation: [Math.PI / 2, 0, 0],
          geometry: new THREE.ConeGeometry(1.0, 2.4, 4),
        },
        enginePod('twin-boom-left-engine', -1.05, -4.2, 0.35, 0.5),
        engineGlow('twin-boom-left-engine-glow', -1.05, -5.35, 0.36),
        enginePod('twin-boom-right-engine', 1.05, -4.2, 0.35, 0.5),
        engineGlow('twin-boom-right-engine-glow', 1.05, -5.35, 0.36),
        strut('twin-boom-front-left-strut', -1.1, 2.3),
        strut('twin-boom-front-right-strut', 1.1, 2.3),
        strut('twin-boom-rear-left-strut', -1.1, -2.4),
        strut('twin-boom-rear-right-strut', 1.1, -2.4),
      ],
    },
  ],
} as const satisfies Record<ShipPartSlot, readonly PartVariant[]>;

export const SHIP_FPV_CAMERA_ANCHOR: VectorTuple = [0, 3.0, -6.4];

export const SHIP_MOUNT_POINTS: Record<ShipPartSlot, VectorTuple> = {
  Hull: [0, 0, 0],
  Wings: [0, 0, 0],
  Cockpit: [0, 0, 0],
};

export const DEFAULT_SHIP_LOADOUT: ShipLoadout = {
  cockpit: 'cockpit-standard',
  wings: 'wings-standard',
  hull: 'hull-standard',
};

export function getStandardPartVariant(slot: ShipPartSlot): PartVariant {
  const standard = PartVariantRegistry[slot].find((variant) => variant.name === `Standard ${slot}`);
  if (!standard) throw new Error(`Missing Standard variant for ${slot}`);
  return standard;
}

export function createDefaultShipPartMaterials(): ShipPartMaterials {
  return {
    hull: new THREE.MeshLambertMaterial({ color: 0x8899aa, flatShading: true }),
    dark: new THREE.MeshLambertMaterial({ color: 0x445566, flatShading: true }),
    cockpit: new THREE.MeshBasicMaterial({ color: 0x44aaff }),
    engine: new THREE.MeshLambertMaterial({ color: 0x222233, flatShading: true }),
    glow: new THREE.MeshBasicMaterial({ color: 0xff6600 }),
    strut: new THREE.MeshLambertMaterial({ color: 0x334455, flatShading: true }),
  };
}

export function findPartVariant(slot: ShipPartSlot, id: string): PartVariant | undefined {
  return PartVariantRegistry[slot].find((variant) => variant.id === id);
}

function getPartVariant(slot: ShipPartSlot, id: string): PartVariant {
  const variant = findPartVariant(slot, id);
  if (!variant) throw new Error(`Unknown ${slot} variant: ${id}`);
  return variant;
}

export function normalizeShipLoadout(loadout: ShipLoadoutInput | null | undefined): ShipLoadout {
  const cockpitCandidate = loadout?.cockpit ?? loadout?.cockpitId;
  const wingsCandidate = loadout?.wings ?? loadout?.wingsId;
  const hullCandidate = loadout?.hull ?? loadout?.hullId;

  const cockpit = cockpitCandidate && findPartVariant('Cockpit', cockpitCandidate)
    ? cockpitCandidate
    : DEFAULT_SHIP_LOADOUT.cockpit;
  const wings = wingsCandidate && findPartVariant('Wings', wingsCandidate)
    ? wingsCandidate
    : DEFAULT_SHIP_LOADOUT.wings;
  const hull = hullCandidate && findPartVariant('Hull', hullCandidate)
    ? hullCandidate
    : DEFAULT_SHIP_LOADOUT.hull;

  return { cockpit, wings, hull };
}

export function createPartMeshes(
  variant: PartVariant,
  materials: ShipPartMaterials,
  origin: THREE.Vector3,
): THREE.Mesh[] {
  return variant.createMeshSpecs().map((spec) => {
    const mesh = new THREE.Mesh(spec.geometry, materials[spec.material]);
    mesh.name = spec.name;
    mesh.position.set(
      origin.x + spec.position[0],
      origin.y + spec.position[1],
      origin.z + spec.position[2],
    );
    if (spec.rotation) mesh.rotation.set(spec.rotation[0], spec.rotation[1], spec.rotation[2]);
    mesh.userData.shipPartSlot = variant.slot;
    mesh.userData.shipPartVariantId = variant.id;
    if (spec.marker) mesh.userData.shipMarker = true;
    return mesh;
  });
}

function createSlotGroup(
  variant: PartVariant,
  materials: ShipPartMaterials,
  origin: THREE.Vector3,
): THREE.Group {
  const slotGroup = new THREE.Group();
  slotGroup.name = `${variant.slot}-mount`;
  slotGroup.userData.shipPartRoot = true;
  slotGroup.userData.shipPartSlot = variant.slot;
  slotGroup.userData.shipPartVariantId = variant.id;
  slotGroup.userData.mountPoint = [...SHIP_MOUNT_POINTS[variant.slot]];

  for (const mesh of createPartMeshes(variant, materials, origin)) {
    slotGroup.add(mesh);
  }

  if (variant.slot === 'Cockpit') {
    for (const node of createCockpitReadoutNodes(materials, origin, variant.id)) {
      slotGroup.add(node);
    }
  }

  return slotGroup;
}

function cameraLocalToShipLocal([x, y, z]: VectorTuple): THREE.Vector3 {
  const [anchorX, anchorY, anchorZ] = SHIP_FPV_CAMERA_ANCHOR;
  return new THREE.Vector3(anchorX - x, anchorY + y, -z + anchorZ);
}

function createCockpitReadoutNodes(
  materials: ShipPartMaterials,
  origin: THREE.Vector3,
  variantId: string,
): THREE.Object3D[] {
  const markerGeometry = new THREE.BoxGeometry(0.055, 0.018, 0.006);

  return COCKPIT_READOUT_NODE_NAMES.map((name) => {
    const node = new THREE.Group();
    node.name = name;
    node.userData.cockpitReadoutNode = true;
    node.userData.cockpitReadoutName = name;
    node.userData.shipPartVariantId = variantId;

    const local = cameraLocalToShipLocal(COCKPIT_READOUT_CAMERA_POSITIONS[name]).add(origin);
    node.position.copy(local);

    const marker = new THREE.Mesh(markerGeometry.clone(), materials.glow);
    marker.name = `${name}-surface`;
    marker.userData.cockpitReadoutSurface = true;
    node.add(marker);

    return node;
  });
}

function disposeObjectGeometry(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose();
    }
  });
}

function removePartRoots(ship: THREE.Object3D, disposeGeometry: boolean): void {
  const partRoots = ship.children.filter((child) => child.userData.shipPartRoot);
  for (const root of partRoots) {
    ship.remove(root);
    if (disposeGeometry) disposeObjectGeometry(root);
  }
}

function addLoadoutParts(
  ship: THREE.Object3D,
  loadout: ShipLoadout,
  materials: ShipPartMaterials,
  origin: THREE.Vector3,
): void {
  const hull = getPartVariant('Hull', loadout.hull);
  const wings = getPartVariant('Wings', loadout.wings);
  const cockpit = getPartVariant('Cockpit', loadout.cockpit);

  ship.add(createSlotGroup(hull, materials, origin));
  ship.add(createSlotGroup(wings, materials, origin));
  ship.add(createSlotGroup(cockpit, materials, origin));
  ship.userData.shipLoadout = { ...loadout };
}

let activeComposedShip: THREE.Object3D | null = null;

export function composeShip(
  cockpitId: string,
  wingsId: string,
  hullId: string,
  options: ComposeShipOptions = {},
): THREE.Object3D {
  const ship = new THREE.Group();
  ship.name = 'composed-ship';
  ship.userData.composedShip = true;
  activeComposedShip = ship;

  applyLoadout({ cockpit: cockpitId, wings: wingsId, hull: hullId }, ship, options);
  return ship;
}

export function applyLoadout(
  loadout: ShipLoadoutInput,
  targetShip: THREE.Object3D | null = activeComposedShip,
  options: ComposeShipOptions = {},
): THREE.Object3D {
  if (!targetShip) {
    const normalized = normalizeShipLoadout(loadout);
    return composeShip(normalized.cockpit, normalized.wings, normalized.hull, options);
  }

  const normalized = normalizeShipLoadout(loadout);
  const materials = options.materials ?? createDefaultShipPartMaterials();
  const origin = options.origin ?? new THREE.Vector3();

  removePartRoots(targetShip, options.disposeReplacedGeometry ?? true);
  addLoadoutParts(targetShip, normalized, materials, origin);
  activeComposedShip = targetShip;
  return targetShip;
}

export function findShipMarker(ship: THREE.Object3D): THREE.Mesh | null {
  let marker: THREE.Mesh | null = null;
  ship.traverse((child) => {
    if (!marker && child instanceof THREE.Mesh && child.userData.shipMarker) {
      marker = child;
    }
  });
  return marker;
}

export function positionShipForFpv(ship: THREE.Object3D): void {
  const [anchorX, anchorY, anchorZ] = SHIP_FPV_CAMERA_ANCHOR;
  ship.position.set(anchorX, -anchorY, anchorZ);
  ship.rotation.set(0, Math.PI, 0);
}
