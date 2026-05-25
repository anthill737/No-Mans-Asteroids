import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  CAMERA_NEAR,
  CAMERA_FAR,
  FOG_NEAR,
  FOG_FAR,
  SECTOR_DIAGONAL,
  createSpaceFog,
  createSpaceCamera,
} from './cameraConfig';

// Stars are placed at 800–1000 units from the origin in main.ts.
const STAR_MIN_RADIUS = 800;
const STAR_MAX_RADIUS = 1000;

describe('cameraConfig — camera', () => {
  it('createSpaceCamera returns a PerspectiveCamera', () => {
    expect(createSpaceCamera()).toBeInstanceOf(THREE.PerspectiveCamera);
  });

  it('camera near matches CAMERA_NEAR constant', () => {
    const camera = createSpaceCamera();
    expect(camera.near).toBe(CAMERA_NEAR);
  });

  it('camera far matches CAMERA_FAR constant', () => {
    const camera = createSpaceCamera();
    expect(camera.far).toBe(CAMERA_FAR);
  });

  it('camera near < far (non-degenerate frustum)', () => {
    const camera = createSpaceCamera();
    expect(camera.near).toBeLessThan(camera.far);
  });

  it('camera near is positive', () => {
    expect(CAMERA_NEAR).toBeGreaterThan(0);
  });

  it('CAMERA_FAR covers the full sector diagonal so nothing is clipped inside the sector', () => {
    expect(CAMERA_FAR).toBeGreaterThanOrEqual(SECTOR_DIAGONAL);
  });

  it('CAMERA_FAR is positive and finite', () => {
    expect(CAMERA_FAR).toBeGreaterThan(0);
    expect(isFinite(CAMERA_FAR)).toBe(true);
  });
});

describe('cameraConfig — fog', () => {
  it('createSpaceFog returns a linear THREE.Fog (not FogExp2)', () => {
    const fog = createSpaceFog();
    expect(fog).toBeInstanceOf(THREE.Fog);
    // FogExp2 was the P7 regression culprit — guard that it is never used here
    expect(fog).not.toBeInstanceOf(THREE.FogExp2);
  });

  it('fog near matches FOG_NEAR constant', () => {
    const fog = createSpaceFog();
    expect(fog.near).toBe(FOG_NEAR);
  });

  it('fog far matches FOG_FAR constant', () => {
    const fog = createSpaceFog();
    expect(fog.far).toBe(FOG_FAR);
  });

  it('FOG_FAR does not clip before the camera far plane', () => {
    // If fog.far < camera.far, objects the camera can still render appear fogged away.
    expect(FOG_FAR).toBeGreaterThanOrEqual(CAMERA_FAR);
  });

  it('FOG_NEAR and FOG_FAR define a valid, non-degenerate range', () => {
    expect(FOG_NEAR).toBeGreaterThan(0);
    expect(FOG_FAR).toBeGreaterThan(FOG_NEAR);
  });

  it('linear fog leaves stars at minimum radius more than 50% visible', () => {
    const fog = createSpaceFog();
    // Three.js linear fog factor: (far - dist) / (far - near), clamped [0, 1].
    // Factor 1 = fully visible; 0 = fully fogged.
    const fogFactor = (fog.far - STAR_MIN_RADIUS) / (fog.far - fog.near);
    expect(fogFactor).toBeGreaterThan(0.5);
  });

  it('linear fog leaves stars at maximum radius still partially visible (factor > 0)', () => {
    const fog = createSpaceFog();
    const fogFactor = (fog.far - STAR_MAX_RADIUS) / (fog.far - fog.near);
    expect(fogFactor).toBeGreaterThan(0);
  });
});
