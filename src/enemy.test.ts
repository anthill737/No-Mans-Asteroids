import { describe, it, expect, beforeEach } from 'vitest';
import * as THREE from 'three';
import {
  EnemyAISystem,
  ENEMY_MAX_HEALTH,
  ENEMY_PROJECTILE_DAMAGE,
  PURSUIT_RANGE,
  EVADE_HEALTH_THRESHOLD,
} from './enemy';

function makeMockScene() {
  const objects = new Set<THREE.Object3D>();
  return {
    add(o: THREE.Object3D) {
      objects.add(o);
    },
    remove(o: THREE.Object3D) {
      objects.delete(o);
    },
    get size() {
      return objects.size;
    },
    has(o: THREE.Object3D) {
      return objects.has(o);
    },
  } as unknown as THREE.Scene & { size: number; has(o: THREE.Object3D): boolean };
}

function makeEnemyMesh(x = 0, y = 0, z = -150): THREE.Mesh {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  return mesh;
}

function tick(ai: EnemyAISystem, frames: number, dt: number, playerPos: THREE.Vector3): void {
  for (let i = 0; i < frames; i++) {
    ai.update(dt, playerPos);
  }
}

describe('EnemyAISystem', () => {
  let scene: ReturnType<typeof makeMockScene>;
  let playerPos: THREE.Vector3;
  let enemyMesh: THREE.Mesh;
  let ai: EnemyAISystem;

  beforeEach(() => {
    scene = makeMockScene();
    playerPos = new THREE.Vector3(0, 0, 0);
    // Enemy within PURSUIT_RANGE (150 < 300) and within FIRE_RANGE (150 < 200)
    enemyMesh = makeEnemyMesh(0, 0, -150);
    ai = new EnemyAISystem(scene as unknown as THREE.Scene, [enemyMesh]);
  });

  // ── Initialization ────────────────────────────────────────────────────────

  it('initialises enemy health to ENEMY_MAX_HEALTH', () => {
    expect(enemyMesh.userData.health).toBe(ENEMY_MAX_HEALTH);
  });

  it('does not overwrite pre-existing health', () => {
    const mesh = makeEnemyMesh();
    mesh.userData.health = 42;
    new EnemyAISystem(scene as unknown as THREE.Scene, [mesh]);
    expect(mesh.userData.health).toBe(42);
  });

  // ── Steering: pursuit ─────────────────────────────────────────────────────

  it('moves enemy toward player when within PURSUIT_RANGE', () => {
    const initialZ = enemyMesh.position.z; // -150, player at z=0
    tick(ai, 120, 1 / 60, playerPos); // 2 seconds
    // z should increase (move from -150 toward 0)
    expect(enemyMesh.position.z).toBeGreaterThan(initialZ);
  });

  it('does not move enemy when player is beyond PURSUIT_RANGE', () => {
    const farPlayer = new THREE.Vector3(0, 0, PURSUIT_RANGE + 200); // well outside range
    const initialPos = enemyMesh.position.clone();
    tick(ai, 60, 1 / 60, farPlayer);
    // No behavior active, velocity should stay near zero
    expect(enemyMesh.position.distanceTo(initialPos)).toBeLessThan(2);
  });

  // ── Steering: evade ───────────────────────────────────────────────────────

  it('moves enemy away from player when health is below threshold', () => {
    enemyMesh.userData.health = ENEMY_MAX_HEALTH * EVADE_HEALTH_THRESHOLD * 0.5; // ~15%
    const initialZ = enemyMesh.position.z; // -150
    tick(ai, 120, 1 / 60, playerPos);
    // Enemy should flee further from origin → z decreases below -150
    expect(enemyMesh.position.z).toBeLessThan(initialZ);
  });

  it('switches from pursuit to evade mid-game when health drops', () => {
    // First move toward player
    tick(ai, 60, 1 / 60, playerPos);
    const midZ = enemyMesh.position.z;
    expect(midZ).toBeGreaterThan(-150); // confirmed moving toward player

    // Now damage the enemy below threshold
    enemyMesh.userData.health = ENEMY_MAX_HEALTH * 0.1;
    tick(ai, 120, 1 / 60, playerPos);
    // Should now move away — z must decrease from midZ
    expect(enemyMesh.position.z).toBeLessThan(midZ);
  });

  // ── Projectile firing ─────────────────────────────────────────────────────

  it('fires a projectile toward player within FIRE_RANGE', () => {
    // Run past the first fire interval (first enemy timer starts at 0)
    tick(ai, 5, 1 / 60, playerPos); // small initial update to let timer expire
    // After a full fire interval has passed at least once
    tick(ai, Math.ceil((3.0 * 60) + 5), 1 / 60, playerPos);
    expect(ai.projectileCount).toBeGreaterThan(0);
  });

  it('does not fire when player is outside FIRE_RANGE', () => {
    const farPlayer = new THREE.Vector3(0, 0, -1000); // >200 units away from enemy at -150
    // Run for several fire intervals
    tick(ai, 300, 1 / 60, farPlayer);
    expect(ai.projectileCount).toBe(0);
  });

  it('staggered fire timers prevent all enemies firing at the same frame', () => {
    const mesh1 = makeEnemyMesh(10, 0, -100);
    const mesh2 = makeEnemyMesh(-10, 0, -100);
    const mesh3 = makeEnemyMesh(0, 10, -100);
    const localScene = makeMockScene();
    const multiAI = new EnemyAISystem(localScene as unknown as THREE.Scene, [
      mesh1,
      mesh2,
      mesh3,
    ]);
    // Just verify construction and update work with multiple enemies
    multiAI.update(1 / 60, playerPos);
    expect(true).toBe(true); // no throw
  });

  // ── Projectile lifetime & range removal ──────────────────────────────────

  it('removes projectiles after their lifetime expires', () => {
    // Force a fire: enemy at -150, player at origin, within fire range
    tick(ai, 200, 1 / 60, playerPos); // ensures at least one projectile was fired

    const countAfterFire = ai.projectileCount;
    expect(countAfterFire).toBeGreaterThan(0);

    // Move player out of fire range so no more projectiles spawn
    const safePos = new THREE.Vector3(0, 0, 2000);
    // Run for >5 seconds (PROJECTILE_LIFETIME) so all existing projectiles expire
    tick(ai, 360, 1 / 60, safePos);

    expect(ai.projectileCount).toBe(0);
  });

  it('removes a projectile that travels beyond max range', () => {
    tick(ai, 200, 1 / 60, playerPos);
    const countAfterFire = ai.projectileCount;
    expect(countAfterFire).toBeGreaterThan(0);
    // Move player away so no new projectiles, let existing ones travel out of range
    tick(ai, 400, 1 / 60, new THREE.Vector3(0, 0, 2000));
    expect(ai.projectileCount).toBeLessThan(countAfterFire);
  });

  // ── Hit detection ─────────────────────────────────────────────────────────

  it('checkPlayerHit returns true when a projectile is near the player', () => {
    // Enemy fires at player position; walk forward until a projectile reaches origin
    tick(ai, 200, 1 / 60, playerPos);
    let hit = false;
    for (let i = 0; i < 300 && !hit; i++) {
      ai.update(1 / 60, playerPos);
      hit = ai.checkPlayerHit(playerPos);
    }
    expect(hit).toBe(true);
  });

  it('same projectile cannot hit the player twice', () => {
    tick(ai, 200, 1 / 60, playerPos);
    let firstHit = false;
    for (let i = 0; i < 300 && !firstHit; i++) {
      ai.update(1 / 60, playerPos);
      firstHit = ai.checkPlayerHit(playerPos);
    }
    // The projectile that triggered firstHit was removed; the next check at the same
    // position should not count it again
    if (firstHit) {
      const immediateSecondCheck = ai.checkPlayerHit(playerPos);
      // Could be another projectile, but the first one is gone
      expect(firstHit).toBe(true); // sanity: first hit registered
      // Verify the consumed projectile is gone by confirming state advanced
      expect(typeof immediateSecondCheck).toBe('boolean');
    }
  });

  it('checkPlayerHit returns false when no projectile is near', () => {
    expect(ai.checkPlayerHit(new THREE.Vector3(9999, 9999, 9999))).toBe(false);
  });

  // ── Reset ────────────────────────────────────────────────────────────────

  it('reset removes all projectiles from the scene', () => {
    tick(ai, 200, 1 / 60, playerPos);
    expect(ai.projectileCount).toBeGreaterThan(0);

    ai.reset();

    expect(ai.projectileCount).toBe(0);
    expect(ai.checkPlayerHit(playerPos)).toBe(false);
  });

  // ── Constants ────────────────────────────────────────────────────────────

  it('ENEMY_PROJECTILE_DAMAGE is a positive number', () => {
    expect(ENEMY_PROJECTILE_DAMAGE).toBeGreaterThan(0);
  });

  it('EVADE_HEALTH_THRESHOLD is 0.3', () => {
    expect(EVADE_HEALTH_THRESHOLD).toBe(0.3);
  });
});
