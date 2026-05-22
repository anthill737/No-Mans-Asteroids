import * as THREE from 'three';

export const LASER_DAMAGE = 25;
export const LASER_RANGE = 500;
export const BEAM_FRAMES = 5;

export interface FireResult {
  fired: boolean;
  hit: boolean;
  hitObject: THREE.Mesh | null;
  ammoRemaining: number;
}

export class LaserSystem {
  private _ammo: number;
  readonly maxAmmo: number;
  private readonly raycaster = new THREE.Raycaster();
  private readonly scene: THREE.Scene;
  private activeBeam: THREE.Line | null = null;
  private beamFramesLeft = 0;

  constructor(scene: THREE.Scene, initialAmmo: number) {
    this.scene = scene;
    this._ammo = initialAmmo;
    this.maxAmmo = initialAmmo;
    this.raycaster.far = LASER_RANGE;
  }

  get ammo(): number {
    return this._ammo;
  }

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
      hitObject.userData.health -= LASER_DAMAGE;
    } else {
      endPoint = cameraPosition.clone().addScaledVector(direction, LASER_RANGE);
    }

    const beamStart = cameraPosition.clone().addScaledVector(direction, 1.5);
    this.spawnBeam(beamStart, endPoint);

    return { fired: true, hit, hitObject, ammoRemaining: this._ammo };
  }

  update(): void {
    if (this.beamFramesLeft > 0) {
      this.beamFramesLeft--;
      if (this.beamFramesLeft === 0 && this.activeBeam) {
        this.scene.remove(this.activeBeam);
        (this.activeBeam.material as THREE.Material).dispose();
        this.activeBeam.geometry.dispose();
        this.activeBeam = null;
      }
    }
  }

  addAmmo(count: number): void {
    this._ammo = Math.min(this._ammo + Math.max(0, count), this.maxAmmo);
  }

  reset(ammo: number): void {
    this._ammo = Math.min(Math.max(0, ammo), this.maxAmmo);
    if (this.activeBeam) {
      this.scene.remove(this.activeBeam);
      (this.activeBeam.material as THREE.Material).dispose();
      this.activeBeam.geometry.dispose();
      this.activeBeam = null;
    }
    this.beamFramesLeft = 0;
  }

  private spawnBeam(start: THREE.Vector3, end: THREE.Vector3): void {
    if (this.activeBeam) {
      this.scene.remove(this.activeBeam);
      (this.activeBeam.material as THREE.Material).dispose();
      this.activeBeam.geometry.dispose();
      this.activeBeam = null;
    }

    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({ color: 0x00ffff });
    this.activeBeam = new THREE.Line(geo, mat);
    this.scene.add(this.activeBeam);
    this.beamFramesLeft = BEAM_FRAMES;
  }
}
