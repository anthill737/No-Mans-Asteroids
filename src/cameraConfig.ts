import * as THREE from 'three';
import { SECTOR_RADIUS } from './sector';

// Minimum camera far: must see across the full sector diagonal.
// For a spherical sector of radius SECTOR_RADIUS the worst-case visible
// distance is the cube diagonal: sqrt(3) * 2 * SECTOR_RADIUS ≈ 1732 units.
export const SECTOR_DIAGONAL = Math.ceil(Math.sqrt(3) * 2 * SECTOR_RADIUS);

// Camera near clip plane — matches Three.js default recommendation for space scenes.
export const CAMERA_NEAR = 0.1;

// Camera far clip plane — must be >= SECTOR_DIAGONAL
export const CAMERA_FAR = 5000;

// Fog far — must be >= CAMERA_FAR so fog never occludes objects the camera
// can still see.  (Keeping fog near well inside the sector is fine; keeping
// fog far at or beyond the camera clip keeps large far objects visible.)
export const FOG_FAR = 5000;

// Fog near — where fog begins; well inside the sector for depth effect
export const FOG_NEAR = 300;

/**
 * Creates the linear space fog used in the main scene.
 * Centralised here so tests can verify the fog type and range against the
 * live constants rather than against hardcoded literals in main.ts.
 */
export function createSpaceFog(): THREE.Fog {
  return new THREE.Fog(0x000005, FOG_NEAR, FOG_FAR);
}

/**
 * Creates the space PerspectiveCamera with the canonical near/far values.
 * Aspect ratio defaults to 1 so this can be called in a Node test environment
 * without access to window dimensions.
 */
export function createSpaceCamera(aspect = 1): THREE.PerspectiveCamera {
  return new THREE.PerspectiveCamera(75, aspect, CAMERA_NEAR, CAMERA_FAR);
}
