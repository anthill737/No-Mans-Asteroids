import type { SectorObjects } from '../sector';
import type * as THREE from 'three';

export type DamageableSpaceTargets = Pick<SectorObjects, 'asteroids' | 'enemies'>;

export function collectDamageableSpaceTargets(targets: DamageableSpaceTargets) {
  return [...targets.asteroids, ...targets.enemies];
}

export interface DamageableHitResult {
  hit: boolean;
  hitObject: THREE.Mesh | null;
}

export interface DamageableHitHandlers {
  onAsteroidHit: (asteroid: THREE.Mesh) => void;
  onAsteroidDestroyed: (asteroid: THREE.Mesh) => void;
  onEnemyHit: (enemy: THREE.Mesh) => void;
  onEnemyDestroyed: (enemy: THREE.Mesh) => void;
}

export function handleDamageableSpaceHit(
  result: DamageableHitResult,
  targets: DamageableSpaceTargets,
  handlers: DamageableHitHandlers,
): void {
  if (!result.hit || !result.hitObject) return;

  const hitObject = result.hitObject;
  const isEnemy = targets.enemies.includes(hitObject);
  const isDestroyed = hitObject.userData.health <= 0;

  if (isDestroyed) {
    if (isEnemy) {
      handlers.onEnemyDestroyed(hitObject);
    } else {
      handlers.onAsteroidDestroyed(hitObject);
    }
    return;
  }

  if (isEnemy) {
    handlers.onEnemyHit(hitObject);
  } else {
    handlers.onAsteroidHit(hitObject);
  }
}
