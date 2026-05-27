import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import { ChaingunSystem, CHAINGUN_DAMAGE } from './chaingun';
import { collectDamageableSpaceTargets, handleDamageableSpaceHit } from './targeting';

function makeTarget(x: number, y: number, z: number): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 8, 8),
    new THREE.MeshBasicMaterial(),
  );
  mesh.position.set(x, y, z);
  mesh.updateMatrixWorld(true);
  return mesh;
}

describe('collectDamageableSpaceTargets', () => {
  it('includes asteroids and enemies for hitscan/projectile damage paths', () => {
    const asteroid = makeTarget(5, 0, -20);
    const enemy = makeTarget(0, 0, -20);

    const targets = collectDamageableSpaceTargets({
      asteroids: [asteroid],
      enemies: [enemy],
    });

    expect(targets).toEqual([asteroid, enemy]);
  });

  it('allows a synthetic chaingun hit to reduce enemy health', () => {
    expect(CHAINGUN_DAMAGE).toBeGreaterThan(0);

    const scene = new THREE.Scene();
    const gun = new ChaingunSystem(scene, 10);
    const enemy = makeTarget(0, 0, -20);
    enemy.userData.health = 100;
    scene.add(enemy);
    enemy.updateMatrixWorld(true);

    const targets = collectDamageableSpaceTargets({
      asteroids: [],
      enemies: [enemy],
    });

    const result = gun.fire(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), targets);

    expect(result.hit).toBe(true);
    expect(result.hitObject).toBe(enemy);
    expect(enemy.userData.health).toBe(100 - CHAINGUN_DAMAGE);
  });

  it('routes a synthetic destroyed enemy hit to enemy destruction handling', () => {
    const asteroid = makeTarget(5, 0, -20);
    const enemy = makeTarget(0, 0, -20);
    enemy.userData.health = 0;
    const onAsteroidHit = vi.fn();
    const onAsteroidDestroyed = vi.fn();
    const onEnemyHit = vi.fn();
    const onEnemyDestroyed = vi.fn();

    handleDamageableSpaceHit(
      { hit: true, hitObject: enemy },
      { asteroids: [asteroid], enemies: [enemy] },
      { onAsteroidHit, onAsteroidDestroyed, onEnemyHit, onEnemyDestroyed },
    );

    expect(onEnemyDestroyed).toHaveBeenCalledTimes(1);
    expect(onEnemyDestroyed).toHaveBeenCalledWith(enemy);
    expect(onAsteroidDestroyed).not.toHaveBeenCalled();
    expect(onEnemyHit).not.toHaveBeenCalled();
    expect(onAsteroidHit).not.toHaveBeenCalled();
  });
});
