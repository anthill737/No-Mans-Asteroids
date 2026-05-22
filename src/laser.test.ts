import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { LaserSystem, LASER_DAMAGE, BEAM_FRAMES } from './laser';

function makeScene(): THREE.Scene {
  return new THREE.Scene();
}

function makeAsteroid(x: number, y: number, z: number, size = 2): THREE.Mesh {
  const geo = new THREE.SphereGeometry(size, 8, 8);
  const mat = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.updateMatrixWorld(true);
  return mesh;
}

describe('LaserSystem', () => {
  // ── Ammo ──────────────────────────────────────────────────────────────────

  it('starts with the given ammo count', () => {
    const laser = new LaserSystem(makeScene(), 30);
    expect(laser.ammo).toBe(30);
  });

  it('decrements ammo by 1 per shot when ammo is available', () => {
    const laser = new LaserSystem(makeScene(), 10);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(laser.ammo).toBe(9);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(laser.ammo).toBe(8);
  });

  it('returns fired=true and decremented ammoRemaining when shooting', () => {
    const laser = new LaserSystem(makeScene(), 5);
    const result = laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(result.fired).toBe(true);
    expect(result.ammoRemaining).toBe(4);
  });

  it('does nothing when ammo is 0 — fired=false, ammo stays 0', () => {
    const laser = new LaserSystem(makeScene(), 0);
    const result = laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(result.fired).toBe(false);
    expect(result.hit).toBe(false);
    expect(result.hitObject).toBeNull();
    expect(result.ammoRemaining).toBe(0);
    expect(laser.ammo).toBe(0);
  });

  it('ammo never goes below 0 after many shots', () => {
    const laser = new LaserSystem(makeScene(), 2);
    for (let i = 0; i < 5; i++) {
      laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    }
    expect(laser.ammo).toBe(0);
  });

  // ── Hit detection ──────────────────────────────────────────────────────────

  it('registers no hit when firing at empty space', () => {
    const laser = new LaserSystem(makeScene(), 10);
    const result = laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(result.hit).toBe(false);
    expect(result.hitObject).toBeNull();
  });

  it('registers a hit when an asteroid is directly in front of camera', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(0, 0, -10);
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    const result = laser.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), [asteroid]);
    expect(result.hit).toBe(true);
    expect(result.hitObject).toBe(asteroid);
  });

  it('does not hit an asteroid that is behind the camera', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(0, 0, 10); // +Z = behind in Three.js convention
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    const result = laser.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), [asteroid]);
    expect(result.hit).toBe(false);
  });

  it('does not hit an asteroid far to the side (not in ray path)', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(100, 0, -10); // far to the right
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    const result = laser.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), [asteroid]);
    expect(result.hit).toBe(false);
  });

  // ── Damage application ────────────────────────────────────────────────────

  it('decrements asteroid health by LASER_DAMAGE on hit', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(0, 0, -10);
    asteroid.userData.health = 100;
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    laser.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), [asteroid]);
    expect(asteroid.userData.health).toBe(100 - LASER_DAMAGE);
  });

  it('initializes asteroid health to 100 if not previously set, then applies damage', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(0, 0, -10);
    // No health set
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    laser.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), [asteroid]);
    expect(asteroid.userData.health).toBe(100 - LASER_DAMAGE);
  });

  it('can reduce asteroid health across multiple shots', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    const asteroid = makeAsteroid(0, 0, -10);
    asteroid.userData.health = 100;
    scene.add(asteroid);
    asteroid.updateMatrixWorld(true);

    const origin = new THREE.Vector3(0, 0, 0);
    const quat = new THREE.Quaternion();
    laser.fire(origin, quat, [asteroid]);
    laser.fire(origin, quat, [asteroid]);
    expect(asteroid.userData.health).toBe(100 - LASER_DAMAGE * 2);
  });

  // ── Beam visibility ───────────────────────────────────────────────────────

  it('adds a beam object to the scene when fired', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 5);
    expect(scene.children.length).toBe(0);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(scene.children.length).toBe(1);
  });

  it('beam remains visible for at least one frame (before any update call)', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 5);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    const beamVisible = scene.children.some((c) => c instanceof THREE.Line);
    expect(beamVisible).toBe(true);
  });

  it('beam is removed from scene after BEAM_FRAMES update() calls', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 5);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(scene.children.length).toBe(1);

    for (let i = 0; i < BEAM_FRAMES; i++) laser.update();
    expect(scene.children.length).toBe(0);
  });

  it('no beam is created when ammo is 0', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 0);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    expect(scene.children.length).toBe(0);
  });

  it('firing again replaces the existing beam (still only one beam in scene)', () => {
    const scene = makeScene();
    const laser = new LaserSystem(scene, 10);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    laser.fire(new THREE.Vector3(), new THREE.Quaternion(), []);
    const lines = scene.children.filter((c) => c instanceof THREE.Line);
    expect(lines.length).toBe(1);
  });
});
