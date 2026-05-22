import * as THREE from 'three';

export const BLACK_HOLE_WARP_RADIUS = 15;

const WARP_OUT_DURATION = 0.5;
const WARP_IN_DURATION = 0.5;
const SECTOR_NAME_DURATION = 3.0;
const NAME_FADE_DURATION = 0.5;
const POST_WARP_COOLDOWN = 2.0;

const SECTOR_REGIONS = [
  'Cygnus Expanse',
  'Orion Reach',
  'Perseus Arm',
  'Sagittarius Deep',
  'Vela Corridor',
  'Hydra Void',
  'Centaurus Drift',
  'Aquila Passage',
  'Lyra Basin',
  'Scorpius Rift',
  'Taurus Cloud',
  'Gemini Cluster',
  'Andromeda Fringe',
  'Cassiopeia Shoal',
  'Eridanus Expanse',
];

export function getSectorName(sectorId: number): string {
  const idx = ((sectorId - 1) % SECTOR_REGIONS.length + SECTOR_REGIONS.length) % SECTOR_REGIONS.length;
  return `Sector ${sectorId} — ${SECTOR_REGIONS[idx]}`;
}

export function checkBlackHoleProximity(
  playerPos: THREE.Vector3,
  blackHole: THREE.Group,
): boolean {
  return playerPos.distanceTo(blackHole.position) <= BLACK_HOLE_WARP_RADIUS;
}

export type WarpState = 'idle' | 'warp-out' | 'warp-in' | 'showing-name';

export class WarpSystem {
  state: WarpState = 'idle';
  flashAlpha = 0;
  nameAlpha = 0;
  sectorId: number;

  private timer = 0;
  private cooldownTimer = 0;

  constructor(initialSectorId = 1) {
    this.sectorId = initialSectorId;
  }

  canWarp(): boolean {
    return this.state === 'idle' && this.cooldownTimer <= 0;
  }

  beginWarp(): void {
    if (!this.canWarp()) return;
    this.state = 'warp-out';
    this.timer = 0;
    this.flashAlpha = 0;
    this.nameAlpha = 0;
  }

  reset(sectorId = 1): void {
    this.sectorId = sectorId;
    this.state = 'idle';
    this.timer = 0;
    this.cooldownTimer = 0;
    this.flashAlpha = 0;
    this.nameAlpha = 0;
  }

  /** Returns warpNow=true on the single frame when the sector should be regenerated. */
  update(dt: number): { warpNow: boolean } {
    let warpNow = false;

    switch (this.state) {
      case 'warp-out':
        this.timer += dt;
        this.flashAlpha = Math.min(1, this.timer / WARP_OUT_DURATION);
        if (this.timer >= WARP_OUT_DURATION) {
          warpNow = true;
          this.sectorId++;
          this.state = 'warp-in';
          this.timer = 0;
          this.flashAlpha = 1;
        }
        break;

      case 'warp-in':
        this.timer += dt;
        this.flashAlpha = Math.max(0, 1 - this.timer / WARP_IN_DURATION);
        if (this.timer >= WARP_IN_DURATION) {
          this.state = 'showing-name';
          this.timer = 0;
          this.flashAlpha = 0;
          this.nameAlpha = 0;
        }
        break;

      case 'showing-name': {
        this.timer += dt;
        const t = this.timer;
        if (t < NAME_FADE_DURATION) {
          this.nameAlpha = t / NAME_FADE_DURATION;
        } else if (t < SECTOR_NAME_DURATION - NAME_FADE_DURATION) {
          this.nameAlpha = 1;
        } else if (t < SECTOR_NAME_DURATION) {
          this.nameAlpha = (SECTOR_NAME_DURATION - t) / NAME_FADE_DURATION;
        } else {
          this.nameAlpha = 0;
          this.state = 'idle';
          this.timer = 0;
          this.cooldownTimer = POST_WARP_COOLDOWN;
        }
        break;
      }

      case 'idle':
        if (this.cooldownTimer > 0) {
          this.cooldownTimer = Math.max(0, this.cooldownTimer - dt);
        }
        break;
    }

    return { warpNow };
  }
}
