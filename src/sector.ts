import * as THREE from 'three';
import { initAsteroidMeta } from './asteroid';

export const SECTOR_RADIUS = 500;
export const SPAWN_CLEAR_RADIUS = 15;
export const ASTEROID_COUNT = 25;
export const ENEMY_MIN = 8;
export const ENEMY_MAX = 10;
export const PLANET_MIN = 1;
export const PLANET_MAX = 3;

// mulberry32 — fast, seedable, no external deps
export function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 0x100000000;
  };
}

function randomInSector(rng: () => number, minRadius = SPAWN_CLEAR_RADIUS): THREE.Vector3 {
  for (let i = 0; i < 1000; i++) {
    const x = (rng() * 2 - 1) * SECTOR_RADIUS;
    const y = (rng() * 2 - 1) * SECTOR_RADIUS;
    const z = (rng() * 2 - 1) * SECTOR_RADIUS;
    const lenSq = x * x + y * y + z * z;
    const rMin2 = minRadius * minRadius;
    const rMax2 = SECTOR_RADIUS * SECTOR_RADIUS;
    if (lenSq >= rMin2 && lenSq <= rMax2) {
      return new THREE.Vector3(x, y, z);
    }
  }
  return new THREE.Vector3(minRadius * 2, 0, 0);
}

export function createAsteroids(rng: () => number = Math.random): THREE.Mesh[] {
  const mat = new THREE.MeshLambertMaterial({ color: 0x888880, flatShading: true });
  const asteroids: THREE.Mesh[] = [];
  for (let i = 0; i < ASTEROID_COUNT; i++) {
    const size = 1 + rng() * 4;
    const geo = new THREE.IcosahedronGeometry(size, 0);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(randomInSector(rng));
    mesh.rotation.set(rng() * Math.PI * 2, rng() * Math.PI * 2, rng() * Math.PI * 2);
    initAsteroidMeta(mesh, size);
    asteroids.push(mesh);
  }
  return asteroids;
}

export function createBlackHole(rng: () => number = Math.random): THREE.Group {
  const group = new THREE.Group();

  const coreMat = new THREE.MeshLambertMaterial({ color: 0x000000, flatShading: true });
  const coreGeo = new THREE.SphereGeometry(8, 16, 16);
  group.add(new THREE.Mesh(coreGeo, coreMat));

  const diskMat = new THREE.MeshLambertMaterial({
    color: 0xff6600,
    emissive: new THREE.Color(0xff3300),
    emissiveIntensity: 0.8,
    flatShading: true,
  });
  const diskGeo = new THREE.TorusGeometry(14, 2, 8, 32);
  const disk = new THREE.Mesh(diskGeo, diskMat);
  disk.rotation.x = Math.PI / 2;
  group.add(disk);

  // Extra clearance so the large mesh doesn't straddle the spawn zone
  group.position.copy(randomInSector(rng, SPAWN_CLEAR_RADIUS + 30));
  return group;
}

export function createEnemyShips(rng: () => number = Math.random): THREE.Mesh[] {
  const count = Math.min(
    ENEMY_MAX,
    ENEMY_MIN + Math.floor(rng() * (ENEMY_MAX - ENEMY_MIN + 1)),
  );
  const mat = new THREE.MeshLambertMaterial({ color: 0xcc2200, flatShading: true });
  const ships: THREE.Mesh[] = [];
  for (let i = 0; i < count; i++) {
    const geo = new THREE.ConeGeometry(1.5, 4, 4);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(randomInSector(rng));
    mesh.rotation.set(rng() * Math.PI * 2, rng() * Math.PI * 2, 0);
    ships.push(mesh);
  }
  return ships;
}

const PLANET_COLORS = [0x3355cc, 0x33aa55, 0xcc7733, 0x993399, 0x33bbcc];

export function createPlanets(rng: () => number = Math.random): THREE.Mesh[] {
  const count = PLANET_MIN + Math.floor(rng() * PLANET_MAX); // 1–3
  const planets: THREE.Mesh[] = [];
  for (let i = 0; i < count; i++) {
    const color = PLANET_COLORS[Math.floor(rng() * PLANET_COLORS.length)];
    const radius = 20 + Math.floor(rng() * 20);
    const geo = new THREE.SphereGeometry(radius, 8, 8);
    const mat = new THREE.MeshLambertMaterial({ color, flatShading: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(randomInSector(rng, SPAWN_CLEAR_RADIUS + radius));
    planets.push(mesh);
  }
  return planets;
}

export interface SectorObjects {
  asteroids: THREE.Mesh[];
  blackHole: THREE.Group;
  enemies: THREE.Mesh[];
  planets: THREE.Mesh[];
}

export function generateSector(
  scene: THREE.Scene,
  seed: number = Math.floor(Math.random() * 0xffffffff),
): SectorObjects {
  const rng = mulberry32(seed);
  const asteroids = createAsteroids(rng);
  const blackHole = createBlackHole(rng);
  const enemies = createEnemyShips(rng);
  const planets = createPlanets(rng);

  asteroids.forEach((a) => scene.add(a));
  scene.add(blackHole);
  enemies.forEach((e) => scene.add(e));
  planets.forEach((p) => scene.add(p));

  return { asteroids, blackHole, enemies, planets };
}
