import * as THREE from 'three';
import { buildStoreBuilding } from './store';

export { STORE_X, STORE_Z } from './store';
export { STORE_INTERACTION_RADIUS } from './store';

export const SURFACE_WALK_SPEED = 6;   // units/s
export const SURFACE_EYE_HEIGHT = 1.7; // camera height above ground

// Ship position and launch trigger radius
export const SHIP_X = 0;
export const SHIP_Z = -12;
export const LAUNCH_THRESHOLD = 6;    // units, XZ distance to trigger launch

export interface SurfaceScene {
  scene: THREE.Scene;
  shipMarker: THREE.Mesh;
}

// ── Seeded 2D simplex noise ───────────────────────────────────────────────────
// Classic Gustavson simplex noise with a mulberry32-seeded permutation table.

const _GRAD2 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
] as const;
const _F2 = 0.5 * (Math.sqrt(3) - 1);
const _G2 = (3 - Math.sqrt(3)) / 6;

let _permSeed = -1;
const _perm = new Uint8Array(512);

function _ensurePerm(seed: number): void {
  if (seed === _permSeed) return;
  _permSeed = seed;
  let s = (seed >>> 0) + 1;
  function rand(): number {
    s = (s + 0x6d2b79f5) >>> 0;
    let z = s;
    z = Math.imul(z ^ (z >>> 15), z | 1);
    z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
    return ((z ^ (z >>> 14)) >>> 0) / 0x100000000;
  }
  for (let i = 0; i < 256; i++) _perm[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1)) & 255;
    const tmp = _perm[i]; _perm[i] = _perm[j]; _perm[j] = tmp;
  }
  for (let i = 0; i < 256; i++) _perm[256 + i] = _perm[i];
}

function _snoise2(x: number, y: number): number {
  const s = (x + y) * _F2;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const t = (i + j) * _G2;
  const x0 = x - (i - t);
  const y0 = y - (j - t);
  const i1 = x0 > y0 ? 1 : 0;
  const j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + _G2;
  const y1 = y0 - j1 + _G2;
  const x2 = x0 - 1 + 2 * _G2;
  const y2 = y0 - 1 + 2 * _G2;
  const ii = i & 255;
  const jj = j & 255;
  const gi0 = _perm[ii     + _perm[jj     ]] % 8;
  const gi1 = _perm[ii + i1 + _perm[jj + j1]] % 8;
  const gi2 = _perm[ii + 1  + _perm[jj + 1 ]] % 8;
  let n = 0;
  let tt = 0.5 - x0 * x0 - y0 * y0;
  if (tt > 0) { tt *= tt; n += tt * tt * (_GRAD2[gi0][0] * x0 + _GRAD2[gi0][1] * y0); }
  tt = 0.5 - x1 * x1 - y1 * y1;
  if (tt > 0) { tt *= tt; n += tt * tt * (_GRAD2[gi1][0] * x1 + _GRAD2[gi1][1] * y1); }
  tt = 0.5 - x2 * x2 - y2 * y2;
  if (tt > 0) { tt *= tt; n += tt * tt * (_GRAD2[gi2][0] * x2 + _GRAD2[gi2][1] * y2); }
  return 70 * n;
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns terrain elevation at (x, z) using three-octave simplex fBm.
 * The flat zone within 30 units of origin keeps the ship area walkable.
 */
export function terrainHeight(x: number, z: number, seed: number): number {
  _ensurePerm(seed);
  const h =
    _snoise2(x * 0.04, z * 0.04) * 4 +
    _snoise2(x * 0.09, z * 0.09) * 2 +
    _snoise2(x * 0.20, z * 0.20) * 0.8;
  const dist = Math.sqrt(x * x + z * z);
  const flatFactor = dist < 30 ? 0 : Math.min(1, (dist - 30) / 35);
  return h * flatFactor;
}

function buildTerrain(seed: number): THREE.Mesh {
  const size = 500;
  const segs = 50;
  const geo = new THREE.PlaneGeometry(size, size, segs, segs);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    pos.setY(i, terrainHeight(pos.getX(i), pos.getZ(i), seed));
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();

  const mat = new THREE.MeshLambertMaterial({
    color: 0xa07848,
    flatShading: true,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geo, mat);
}

/**
 * Builds a low-poly landed spaceship at (SHIP_X, groundH, SHIP_Z).
 * The ship faces toward the player spawn point (+Z direction), so the
 * cockpit and nose are visible as the player walks up.
 */
function buildShip(seed: number): { marker: THREE.Mesh; group: THREE.Group } {
  const group = new THREE.Group();
  const y0 = terrainHeight(SHIP_X, SHIP_Z, seed);

  const hullMat  = new THREE.MeshLambertMaterial({ color: 0x8899aa, flatShading: true });
  const darkMat  = new THREE.MeshLambertMaterial({ color: 0x445566, flatShading: true });
  const cockpitMat = new THREE.MeshBasicMaterial({ color: 0x44aaff });
  const engineMat  = new THREE.MeshLambertMaterial({ color: 0x222233, flatShading: true });
  const glowMat    = new THREE.MeshBasicMaterial({ color: 0xff6600 });
  const strutMat   = new THREE.MeshLambertMaterial({ color: 0x334455, flatShading: true });
  const padMat     = new THREE.MeshBasicMaterial({ color: 0xffcc00 });

  // ── Fuselage ────────────────────────────────────────────────────────────────
  const fuselageGeo = new THREE.BoxGeometry(2.2, 1.4, 8);
  const fuselage = new THREE.Mesh(fuselageGeo, hullMat);
  fuselage.position.set(SHIP_X, y0 + 1.5, SHIP_Z);
  group.add(fuselage);

  // ── Wings ───────────────────────────────────────────────────────────────────
  const wingGeo = new THREE.BoxGeometry(5, 0.3, 3.5);
  const leftWing = new THREE.Mesh(wingGeo, darkMat);
  leftWing.position.set(SHIP_X - 3.6, y0 + 1.25, SHIP_Z + 0.5);
  group.add(leftWing);
  const rightWing = new THREE.Mesh(wingGeo, darkMat);
  rightWing.position.set(SHIP_X + 3.6, y0 + 1.25, SHIP_Z + 0.5);
  group.add(rightWing);

  // ── Nose cone (tip points toward player, +Z direction) ─────────────────────
  const noseGeo = new THREE.ConeGeometry(1.1, 2.8, 8);
  const noseMesh = new THREE.Mesh(noseGeo, hullMat);
  noseMesh.rotation.x = Math.PI / 2;
  noseMesh.position.set(SHIP_X, y0 + 1.5, SHIP_Z + 5.4);
  group.add(noseMesh);

  // ── Cockpit dome ────────────────────────────────────────────────────────────
  const cockpitGeo = new THREE.SphereGeometry(0.75, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  const cockpitMesh = new THREE.Mesh(cockpitGeo, cockpitMat);
  cockpitMesh.position.set(SHIP_X, y0 + 2.2, SHIP_Z + 2.2);
  group.add(cockpitMesh);

  // ── Engine pods (x2 at rear) ────────────────────────────────────────────────
  const engineGeo = new THREE.CylinderGeometry(0.45, 0.6, 2.2, 8);
  for (const xOff of [-0.75, 0.75]) {
    const pod = new THREE.Mesh(engineGeo, engineMat);
    pod.rotation.x = Math.PI / 2;
    pod.position.set(SHIP_X + xOff, y0 + 1.3, SHIP_Z - 4.1);
    group.add(pod);

    const glowGeo = new THREE.CircleGeometry(0.44, 8);
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = -Math.PI / 2;
    glow.position.set(SHIP_X + xOff, y0 + 1.3, SHIP_Z - 5.3);
    group.add(glow);
  }

  // ── Landing struts (4 legs) ─────────────────────────────────────────────────
  const strutGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.0, 6);
  for (const [sx, sz] of [[-0.8, 2.5], [0.8, 2.5], [-0.8, -2.5], [0.8, -2.5]] as const) {
    const strut = new THREE.Mesh(strutGeo, strutMat);
    strut.position.set(SHIP_X + sx, y0 + 0.8, SHIP_Z + sz);
    group.add(strut);
  }

  // ── Launch pad ring ──────────────────────────────────────────────────────────
  const padRingGeo = new THREE.TorusGeometry(LAUNCH_THRESHOLD * 0.85, 0.25, 6, 48);
  const padRing = new THREE.Mesh(padRingGeo, padMat);
  padRing.rotation.x = Math.PI / 2;
  padRing.position.set(SHIP_X, y0 + 0.1, SHIP_Z);
  group.add(padRing);

  // ── Arrow pointing from spawn toward ship ───────────────────────────────────
  const arrowGeo = new THREE.ConeGeometry(1.2, 4, 6);
  const arrowMesh = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: 0xff4400 }));
  arrowMesh.rotation.x = Math.PI / 2;
  arrowMesh.position.set(SHIP_X, y0 + 0.3, SHIP_Z / 2);
  group.add(arrowMesh);

  // ── Lights ──────────────────────────────────────────────────────────────────
  const blueLight = new THREE.PointLight(0x4488ff, 15, 100);
  blueLight.position.set(SHIP_X, y0 + 6, SHIP_Z);
  group.add(blueLight);

  const engineLight = new THREE.PointLight(0xff5500, 8, 30);
  engineLight.position.set(SHIP_X, y0 + 1.3, SHIP_Z - 5);
  group.add(engineLight);

  return { marker: fuselage, group };
}

export function createSurfaceScene(seed: number): SurfaceScene {
  const scene = new THREE.Scene();

  const skyColor = new THREE.Color(0xd4884a);
  scene.background = skyColor;
  scene.fog = new THREE.Fog(skyColor, 180, 460);

  // Warm directional sun + cool ambient fill — Valheim-style complementary lighting.
  const ambient = new THREE.AmbientLight(0x7090c0, 1.8);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffe080, 5.0);
  sun.position.set(3, 5, 2);
  scene.add(sun);

  scene.add(buildTerrain(seed));

  const { marker: shipMarker, group: shipGroup } = buildShip(seed);
  scene.add(shipGroup);

  scene.add(buildStoreBuilding(seed, terrainHeight));

  return { scene, shipMarker };
}

/** On-foot WASD controller with E-key launch detection. */
export class SurfaceController {
  private readonly seed: number;
  private keys: Record<string, boolean> = {};
  private _eLatch = false; // true for one update after 'e' is pressed
  readonly _onKeyDown: (e: KeyboardEvent) => void;
  private readonly _onKeyUp: (e: KeyboardEvent) => void;

  constructor(seed: number) {
    this.seed = seed;
    this._onKeyDown = (e) => {
      const k = e.key.toLowerCase();
      this.keys[k] = true;
      if (k === 'e') this._eLatch = true;
    };
    this._onKeyUp = (e) => { this.keys[e.key.toLowerCase()] = false; };
  }

  attach(): void {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  detach(): void {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this.keys = {};
    this._eLatch = false;
  }

  /**
   * Move cameraPosition based on WASD + current yaw (euler.y).
   * Snaps camera y to terrain height.
   *
   * Returns:
   *   nearShip        — true when player is within LAUNCH_THRESHOLD of the ship.
   *   launchRequested — true when nearShip AND the player pressed E this frame.
   */
  update(dt: number, cameraPosition: THREE.Vector3, euler: THREE.Euler): { nearShip: boolean; launchRequested: boolean } {
    const cdt = Math.min(dt, 0.1);
    const speed = SURFACE_WALK_SPEED;

    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, euler.y, 0, 'YXZ'));
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(q);

    if (this.keys['w']) cameraPosition.addScaledVector(forward,  speed * cdt);
    if (this.keys['s']) cameraPosition.addScaledVector(forward, -speed * cdt);
    if (this.keys['a']) cameraPosition.addScaledVector(right,   -speed * cdt);
    if (this.keys['d']) cameraPosition.addScaledVector(right,    speed * cdt);

    const groundH = terrainHeight(cameraPosition.x, cameraPosition.z, this.seed);
    cameraPosition.y = groundH + SURFACE_EYE_HEIGHT;

    const dx = cameraPosition.x - SHIP_X;
    const dz = cameraPosition.z - SHIP_Z;
    const nearShip = Math.sqrt(dx * dx + dz * dz) <= LAUNCH_THRESHOLD;

    // Consume the E latch every frame so a single keypress fires exactly once.
    const eLatch = this._eLatch;
    this._eLatch = false;

    return { nearShip, launchRequested: nearShip && eLatch };
  }
}
