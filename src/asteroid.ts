import * as THREE from 'three';

export const MIN_SPLIT_SIZE = 1.5;
export const HEALTH_PER_SIZE = 25; // each integer size unit = 1 laser shot worth of health

export function getAsteroidHealth(size: number): number {
  return Math.max(HEALTH_PER_SIZE, Math.round(size) * HEALTH_PER_SIZE);
}

export function initAsteroidMeta(mesh: THREE.Mesh, size: number): void {
  mesh.userData.size = size;
  mesh.userData.health = getAsteroidHealth(size);
}

function makeDebrisMesh(size: number, position: THREE.Vector3, rng: () => number): THREE.Mesh {
  const geo = new THREE.IcosahedronGeometry(size, 0);
  const mat = new THREE.MeshLambertMaterial({ color: 0x888880, flatShading: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  mesh.rotation.set(rng() * Math.PI * 2, rng() * Math.PI * 2, rng() * Math.PI * 2);
  initAsteroidMeta(mesh, size);
  return mesh;
}

export function spawnDebris(
  scene: THREE.Scene,
  position: THREE.Vector3,
  parentSize: number,
  rng: () => number = Math.random,
): THREE.Mesh[] {
  const debrisSize = parentSize * 0.45;
  const count = 2 + Math.floor(rng() * 2); // 2 or 3
  const pieces: THREE.Mesh[] = [];
  const spread = parentSize;

  for (let i = 0; i < count; i++) {
    const offset = new THREE.Vector3(
      (rng() * 2 - 1) * spread,
      (rng() * 2 - 1) * spread,
      (rng() * 2 - 1) * spread,
    );
    const debris = makeDebrisMesh(debrisSize, position.clone().add(offset), rng);
    scene.add(debris);
    pieces.push(debris);
  }
  return pieces;
}

export function disposeAsteroid(scene: THREE.Scene, asteroid: THREE.Mesh): void {
  scene.remove(asteroid);
  asteroid.geometry.dispose();
  if (Array.isArray(asteroid.material)) {
    asteroid.material.forEach((m) => m.dispose());
  } else {
    (asteroid.material as THREE.Material).dispose();
  }
}

/**
 * Remove a destroyed asteroid from the scene and asteroids array.
 * If its size is above MIN_SPLIT_SIZE, spawn 2-3 smaller debris pieces.
 * Returns the updated asteroids array.
 */
export function handleAsteroidDestroyed(
  scene: THREE.Scene,
  asteroid: THREE.Mesh,
  asteroids: THREE.Mesh[],
  rng: () => number = Math.random,
): THREE.Mesh[] {
  disposeAsteroid(scene, asteroid);

  const updated = asteroids.filter((a) => a !== asteroid);
  const size = (asteroid.userData.size as number) ?? MIN_SPLIT_SIZE + 1;

  if (size > MIN_SPLIT_SIZE) {
    const debris = spawnDebris(scene, asteroid.position, size, rng);
    updated.push(...debris);
  }

  return updated;
}
