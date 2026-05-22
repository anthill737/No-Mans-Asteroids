import * as THREE from 'three';
import { SectorObjects } from './sector';

export const LANDING_THRESHOLD = 30; // extra units beyond planet radius
export const FADE_DURATION = 1.2;    // seconds per fade in/out

// How long after launch before proximity can trigger another landing.
const POST_LAUNCH_COOLDOWN = 10.0;

export interface SectorSnapshot {
  enemyPositions: THREE.Vector3[];
  enemyRotations: THREE.Euler[];
  asteroidPositions: THREE.Vector3[];
  asteroidRotations: THREE.Euler[];
}

export type LandingState =
  | 'space'
  | 'landing-fadeout'
  | 'surface-fadein'
  | 'on-surface'
  | 'launch-fadeout'
  | 'space-fadein';

/** Returns the first planet the player is within landing range of, or null. */
export function checkPlanetProximity(
  playerPos: THREE.Vector3,
  planets: THREE.Mesh[],
): THREE.Mesh | null {
  for (const planet of planets) {
    const geo = planet.geometry as THREE.SphereGeometry;
    const planetRadius = geo.parameters?.radius ?? 20;
    const threshold = planetRadius + LANDING_THRESHOLD;
    if (playerPos.distanceTo(planet.position) <= threshold) {
      return planet;
    }
  }
  return null;
}

/** Deep-copies enemy and asteroid positions/rotations out of the sector for later restoration. */
export function snapshotSector(sectorObjects: SectorObjects): SectorSnapshot {
  return {
    enemyPositions: sectorObjects.enemies.map((e) => e.position.clone()),
    enemyRotations: sectorObjects.enemies.map((e) => e.rotation.clone()),
    asteroidPositions: sectorObjects.asteroids.map((a) => a.position.clone()),
    asteroidRotations: sectorObjects.asteroids.map((a) => a.rotation.clone()),
  };
}

/** Applies a saved snapshot back onto the sector objects. Handles partial counts safely. */
export function restoreSectorSnapshot(
  sectorObjects: SectorObjects,
  snapshot: SectorSnapshot,
): void {
  const eCount = Math.min(sectorObjects.enemies.length, snapshot.enemyPositions.length);
  for (let i = 0; i < eCount; i++) {
    sectorObjects.enemies[i].position.copy(snapshot.enemyPositions[i]);
    sectorObjects.enemies[i].rotation.copy(snapshot.enemyRotations[i]);
  }
  const aCount = Math.min(sectorObjects.asteroids.length, snapshot.asteroidPositions.length);
  for (let i = 0; i < aCount; i++) {
    sectorObjects.asteroids[i].position.copy(snapshot.asteroidPositions[i]);
    sectorObjects.asteroids[i].rotation.copy(snapshot.asteroidRotations[i]);
  }
}

/**
 * State machine for the landing/launch transition cycle.
 *
 * Space → landing-fadeout → surface-fadein → on-surface → launch-fadeout → space-fadein → Space
 *
 * fadeAlpha: 0 = transparent, 1 = full black — drive an overlay element with this.
 */
export class LandingSystem {
  state: LandingState = 'space';
  fadeAlpha = 0;

  private fadeTimer = 0;
  private _snapshot: SectorSnapshot | null = null;
  private postLaunchCooldown = 0;

  /** Call each frame from space; returns the planet if player is within landing range. */
  checkProximity(playerPos: THREE.Vector3, planets: THREE.Mesh[]): THREE.Mesh | null {
    if (this.state !== 'space') return null;
    if (this.postLaunchCooldown > 0) return null;
    return checkPlanetProximity(playerPos, planets);
  }

  /** Begin the landing fade sequence. Saves a sector snapshot for later restoration. */
  beginLanding(sectorObjects: SectorObjects): void {
    if (this.state !== 'space') return;
    this._snapshot = snapshotSector(sectorObjects);
    this.state = 'landing-fadeout';
    this.fadeTimer = 0;
    this.fadeAlpha = 0;
  }

  /** Begin the launch fade sequence. Restores sector snapshot immediately. */
  beginLaunch(sectorObjects: SectorObjects): void {
    if (this.state !== 'on-surface') return;
    if (this._snapshot) restoreSectorSnapshot(sectorObjects, this._snapshot);
    this.state = 'launch-fadeout';
    this.fadeTimer = 0;
    this.fadeAlpha = 0;
  }

  getSectorSnapshot(): SectorSnapshot | null {
    return this._snapshot;
  }

  /**
   * Advance the state machine by dt seconds.
   *
   * switchToSurface: true on the frame the renderer should switch to the surface scene.
   * switchToSpace:   true on the frame the renderer should switch back to the space scene.
   * onSurface:       true on the frame surface-fadein completes (screen fully visible on surface).
   *                  Use this to reset the camera euler so the player faces the beacon.
   */
  update(dt: number): { switchToSurface: boolean; switchToSpace: boolean; onSurface: boolean } {
    let switchToSurface = false;
    let switchToSpace = false;
    let onSurface = false;

    switch (this.state) {
      case 'landing-fadeout':
        this.fadeTimer += dt;
        this.fadeAlpha = Math.min(1, this.fadeTimer / FADE_DURATION);
        if (this.fadeTimer >= FADE_DURATION) {
          this.state = 'surface-fadein';
          this.fadeTimer = 0;
          switchToSurface = true;
        }
        break;

      case 'surface-fadein':
        this.fadeTimer += dt;
        this.fadeAlpha = Math.max(0, 1 - this.fadeTimer / FADE_DURATION);
        if (this.fadeTimer >= FADE_DURATION) {
          this.state = 'on-surface';
          this.fadeAlpha = 0;
          onSurface = true;
        }
        break;

      case 'launch-fadeout':
        this.fadeTimer += dt;
        this.fadeAlpha = Math.min(1, this.fadeTimer / FADE_DURATION);
        if (this.fadeTimer >= FADE_DURATION) {
          this.state = 'space-fadein';
          this.fadeTimer = 0;
          switchToSpace = true;
        }
        break;

      case 'space-fadein':
        this.fadeTimer += dt;
        this.fadeAlpha = Math.max(0, 1 - this.fadeTimer / FADE_DURATION);
        if (this.fadeTimer >= FADE_DURATION) {
          this.state = 'space';
          this.fadeAlpha = 0;
          this.postLaunchCooldown = POST_LAUNCH_COOLDOWN;
        }
        break;
    }

    if (this.postLaunchCooldown > 0) {
      this.postLaunchCooldown = Math.max(0, this.postLaunchCooldown - dt);
    }

    return { switchToSurface, switchToSpace, onSurface };
  }
}
