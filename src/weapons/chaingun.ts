import * as THREE from 'three';
import { LASER_DAMAGE } from '../laser';

export const CHAINGUN_DAMAGE = 8; // less than LASER_DAMAGE (25)
export const CHAINGUN_RANGE = 500;
export const CHAINGUN_FIRE_RATE = 12; // rounds per second (≥10)
export const CHAINGUN_BEAM_FRAMES = 2;

export interface FireResult {
  fired: boolean;
  hit: boolean;
  hitObject: THREE.Mesh | null;
  ammoRemaining: number;
}

// Sanity check enforced at module load: chaingun damage must be less than laser damage.
if (CHAINGUN_DAMAGE >= LASER_DAMAGE) {
  throw new Error('CHAINGUN_DAMAGE must be less than LASER_DAMAGE');
}

export class ChaingunSystem {
  private _ammo: number;
  readonly maxAmmo: number;
  private readonly fireInterval: number; // seconds between shots = 1 / FIRE_RATE
  private accumulator: number;
  private readonly raycaster = new THREE.Raycaster();
  private readonly scene: THREE.Scene;
  private activeBeam: THREE.Line | null = null;
  private beamFramesLeft = 0;

  constructor(scene: THREE.Scene, initialAmmo: number) {
    this.scene = scene;
    this._ammo = initialAmmo;
    this.maxAmmo = initialAmmo;
    this.fireInterval = 1 / CHAINGUN_FIRE_RATE;
    this.accumulator = this.fireInterval; // ready to fire immediately on first press
    this.raycaster.far = CHAINGUN_RANGE;
  }

  get ammo(): number {
    return this._ammo;
  }

  /**
   * Fire a single shot immediately — bypasses rate limiting.
   * Used directly for tests; also called internally by update().
   */
  fire(
    cameraPosition: THREE.Vector3,
    cameraQuaternion: THREE.Quaternion,
    targets: THREE.Mesh[],
  ): FireResult {
    if (this._ammo <= 0) {
      return { fired: false, hit: false, hitObject: null, ammoRemaining: 0 };
    }

    this._ammo--;

    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(cameraQuaternion);
    this.raycaster.set(cameraPosition, direction);

    const intersects = this.raycaster.intersectObjects(targets);
    let hit = false;
    let hitObject: THREE.Mesh | null = null;
    let endPoint: THREE.Vector3;

    if (intersects.length > 0) {
      hit = true;
      hitObject = intersects[0].object as THREE.Mesh;
      endPoint = intersects[0].point.clone();
      if (hitObject.userData.health === undefined) {
        hitObject.userData.health = 100;
      }
      hitObject.userData.health -= CHAINGUN_DAMAGE;
    } else {
      endPoint = cameraPosition.clone().addScaledVector(direction, CHAINGUN_RANGE);
    }

    const beamStart = cameraPosition.clone().addScaledVector(direction, 1.5);
    this.spawnBeam(beamStart, endPoint);

    return { fired: true, hit, hitObject, ammoRemaining: this._ammo };
  }

  /**
   * Call every game frame.
   * Advances beam fade timer, and fires as many rate-limited shots as dt allows when isFiring=true.
   * Returns an array of FireResult for each shot that was attempted this frame.
   */
  update(
    dt: number,
    isFiring: boolean,
    cameraPosition: THREE.Vector3,
    cameraQuaternion: THREE.Quaternion,
    targets: THREE.Mesh[],
  ): FireResult[] {
    if (this.beamFramesLeft > 0) {
      this.beamFramesLeft--;
      if (this.beamFramesLeft === 0 && this.activeBeam) {
        this.scene.remove(this.activeBeam);
        (this.activeBeam.material as THREE.Material).dispose();
        this.activeBeam.geometry.dispose();
        this.activeBeam = null;
      }
    }

    if (!isFiring) {
      // Drain accumulator so the gun doesn't fire a burst on next press
      this.accumulator = this.fireInterval;
      return [];
    }

    this.accumulator += dt;
    const results: FireResult[] = [];

    while (this.accumulator >= this.fireInterval) {
      this.accumulator -= this.fireInterval;
      if (this._ammo <= 0) {
        this.accumulator = 0;
        break;
      }
      results.push(this.fire(cameraPosition, cameraQuaternion, targets));
    }

    return results;
  }

  addAmmo(count: number): void {
    this._ammo = Math.min(this._ammo + Math.max(0, count), this.maxAmmo);
  }

  reset(ammo: number): void {
    this._ammo = Math.min(Math.max(0, ammo), this.maxAmmo);
    this.accumulator = this.fireInterval;
    this.beamFramesLeft = 0;
    if (this.activeBeam) {
      this.scene.remove(this.activeBeam);
      (this.activeBeam.material as THREE.Material).dispose();
      this.activeBeam.geometry.dispose();
      this.activeBeam = null;
    }
  }

  private spawnBeam(start: THREE.Vector3, end: THREE.Vector3): void {
    if (this.activeBeam) {
      this.scene.remove(this.activeBeam);
      (this.activeBeam.material as THREE.Material).dispose();
      this.activeBeam.geometry.dispose();
      this.activeBeam = null;
    }

    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({ color: 0xff8800 }); // orange flash
    this.activeBeam = new THREE.Line(geo, mat);
    this.scene.add(this.activeBeam);
    this.beamFramesLeft = CHAINGUN_BEAM_FRAMES;
  }
}
