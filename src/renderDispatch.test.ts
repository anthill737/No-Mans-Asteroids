import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import { renderFrame } from './renderDispatch';

function mockRenderer() {
  return { render: vi.fn<[THREE.Scene, THREE.Camera], void>() };
}

function makeScene() {
  return new THREE.Scene();
}

function makeCamera() {
  return new THREE.PerspectiveCamera();
}

// ── Space mode — regression guard ────────────────────────────────────────────
// The P7 black-screen bug was caused by the `renderer.render(scene, camera)`
// call being absent from the space branch of animate().  These tests fail
// if that call is removed from renderFrame(), guarding against reintroduction
// of the same regression.
describe('renderFrame — space mode', () => {
  it('calls renderer.render exactly once with spaceScene and spaceCamera', () => {
    const renderer = mockRenderer();
    const spaceScene = makeScene();
    const spaceCamera = makeCamera();
    const surfaceCamera = makeCamera();

    renderFrame(renderer, 'space', spaceScene, spaceCamera, null, surfaceCamera);

    expect(renderer.render).toHaveBeenCalledOnce();
    expect(renderer.render).toHaveBeenCalledWith(spaceScene, spaceCamera);
  });

  it('renders the exact spaceScene instance, not a different scene', () => {
    const renderer = mockRenderer();
    const spaceScene = makeScene();
    const wrongScene = makeScene();
    const spaceCamera = makeCamera();
    const surfaceCamera = makeCamera();

    renderFrame(renderer, 'space', spaceScene, spaceCamera, null, surfaceCamera);

    const calledScene = renderer.render.mock.calls[0][0];
    expect(calledScene).toBe(spaceScene);
    expect(calledScene).not.toBe(wrongScene);
  });

  it('does not render a surface scene when mode is space', () => {
    const renderer = mockRenderer();
    const spaceScene = makeScene();
    const spaceCamera = makeCamera();
    const surfaceScene = makeScene();
    const surfaceCamera = makeCamera();

    renderFrame(renderer, 'space', spaceScene, spaceCamera, surfaceScene, surfaceCamera);

    expect(renderer.render).not.toHaveBeenCalledWith(surfaceScene, expect.anything());
    expect(renderer.render).not.toHaveBeenCalledWith(expect.anything(), surfaceCamera);
  });
});

// ── Surface mode ─────────────────────────────────────────────────────────────
describe('renderFrame — surface mode', () => {
  it('calls renderer.render with surfaceScene and surfaceCamera when surfaceScene is present', () => {
    const renderer = mockRenderer();
    const spaceScene = makeScene();
    const spaceCamera = makeCamera();
    const surfaceScene = makeScene();
    const surfaceCamera = makeCamera();

    renderFrame(renderer, 'surface', spaceScene, spaceCamera, surfaceScene, surfaceCamera);

    expect(renderer.render).toHaveBeenCalledOnce();
    expect(renderer.render).toHaveBeenCalledWith(surfaceScene, surfaceCamera);
  });

  it('does not call renderer.render when mode is surface but surfaceScene is null', () => {
    const renderer = mockRenderer();

    renderFrame(renderer, 'surface', makeScene(), makeCamera(), null, makeCamera());

    expect(renderer.render).not.toHaveBeenCalled();
  });

  it('does not render the space scene in surface mode', () => {
    const renderer = mockRenderer();
    const spaceScene = makeScene();
    const spaceCamera = makeCamera();
    const surfaceScene = makeScene();
    const surfaceCamera = makeCamera();

    renderFrame(renderer, 'surface', spaceScene, spaceCamera, surfaceScene, surfaceCamera);

    expect(renderer.render).not.toHaveBeenCalledWith(spaceScene, expect.anything());
    expect(renderer.render).not.toHaveBeenCalledWith(expect.anything(), spaceCamera);
  });
});
