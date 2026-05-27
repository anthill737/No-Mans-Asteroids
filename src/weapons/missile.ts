import * as THREE from 'three';
import { spheresOverlap } from '../collision';
import { LASER_DAMAGE } from '../laser';
import { AMMO_CAPACITY } from '../ammoConfig';

export const MISSILE_DAMAGE = 100; // high damage: destroys a 100-health enemy in 1 hit
export const MISSILE_SPEED = 30; // units per second — slow physical projectile
export const MISSILE_MAX_RANGE = 600; // units before auto-removal
export const MISSILE_RADIUS = 1.0; // collision sphere radius
export const MISSILE_MAX_AMMO = AMMO_CAPACITY.missile;

// Sanity: missiles must deal significantly more damage than a laser shot.
if (MISSILE_DAMAGE <= LASER_DAMAGE) {
  throw new Error('MISSILE_DAMAGE must be greater than LASER_DAMAGE');
}

export interface MissileFireResult {
  fired: boolean;
  ammoRemaining: number;
}

export interface MissileHitResult {
  hitObject: THREE.Mesh;
}

interface ActiveMissile {
  mesh: THREE.Mesh;
  direction: THREE.Vector3;
  distanceTraveled: number;
}

export class MissileSystem {
  private _ammo: number;
  readonly maxAmmo: number;
  private readonly scene: THREE.Scene;
  private readonly missiles: ActiveMissile[] = [];

  constructor(scene: THREE.Scene, initialAmmo: number) {
    this.scene = scene;
    this._ammo = initialAmmo;
    this.maxAmmo = initialAmmo;
  }

  get ammo(): number {
    return this._ammo;
  }

  get missileCount(): number {
    return this.missiles.length;
  }

  fire(
    cameraPosition: THREE.Vector3,
    cameraQuaternion: THREE.Quaternion,
  ): MissileFireResult {
    if (this._ammo <= 0) {
      return { fired: false, ammoRemaining: 0 };
    }

    this._ammo--;

    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(cameraQuaternion);
    const spawnPos = cameraPosition.clone().addScaledVector(direction, 2.0);

    // Elongated cone: tip points in direction of travel
    const geo = new THREE.ConeGeometry(0.15, 0.8, 6);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xff6600,
      emissive: new THREE.Color(0xff3300),
      emissiveIntensity: 0.5,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(spawnPos);

    // Cone tip is +Y by default; rotate so +Y aligns with travel direction
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

    this.scene.add(mesh);
    this.missiles.push({ mesh, direction: direction.clone(), distanceTraveled: 0 });

    return { fired: true, ammoRemaining: this._ammo };
  }

  update(dt: number, targets: THREE.Mesh[]): MissileHitResult[] {
    const hits: MissileHitResult[] = [];
    const toRemove: number[] = [];

    for (let i = 0; i < this.missiles.length; i++) {
      const missile = this.missiles[i];
      const step = MISSILE_SPEED * dt;
      missile.mesh.position.addScaledVector(missile.direction, step);
      missile.distanceTraveled += step;

      if (missile.distanceTraveled >= MISSILE_MAX_RANGE) {
        toRemove.push(i);
        continue;
      }

      let hitTarget = false;
      for (const target of targets) {
        if (!target.geometry.boundingSphere) {
          target.geometry.computeBoundingSphere();
        }
        const targetRadius =
          (target.geometry.boundingSphere?.radius ?? 5) * target.scale.x;

        const mp = missile.mesh.position;
        const tp = target.position;
        if (
          spheresOverlap(mp.x, mp.y, mp.z, MISSILE_RADIUS, tp.x, tp.y, tp.z, targetRadius)
        ) {
          if (target.userData.health === undefined) {
            target.userData.health = 100;
          }
          target.userData.health -= MISSILE_DAMAGE;
          hits.push({ hitObject: target });
          hitTarget = true;
          break;
        }
      }

      if (hitTarget) {
        toRemove.push(i);
      }
    }

    // Remove in reverse index order to preserve remaining indices
    for (let i = toRemove.length - 1; i >= 0; i--) {
      const idx = toRemove[i];
      const missile = this.missiles[idx];
      this.scene.remove(missile.mesh);
      missile.mesh.geometry.dispose();
      (missile.mesh.material as THREE.Material).dispose();
      this.missiles.splice(idx, 1);
    }

    return hits;
  }

  addAmmo(count: number): void {
    this._ammo = Math.min(this._ammo + Math.max(0, count), this.maxAmmo);
  }

  reset(ammo: number): void {
    this._ammo = Math.min(Math.max(0, ammo), this.maxAmmo);
    for (const missile of this.missiles) {
      this.scene.remove(missile.mesh);
      missile.mesh.geometry.dispose();
      (missile.mesh.material as THREE.Material).dispose();
    }
    this.missiles.length = 0;
  }
}
