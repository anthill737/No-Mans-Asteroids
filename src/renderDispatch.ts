import * as THREE from 'three';

export type RenderMode = 'space' | 'surface';

export interface RendererLike {
  render(scene: THREE.Scene, camera: THREE.Camera): void;
}

/**
 * Dispatches the per-frame render call to the correct scene/camera pair.
 *
 * Extracted into its own function so tests can spy on renderer.render without
 * importing main.ts (which has browser-only side-effects).  Any removal of the
 * renderer.render(...) call inside this function will cause renderDispatch.test.ts
 * to fail — that is the regression guard for the P7 black-screen fix.
 */
export function renderFrame(
  renderer: RendererLike,
  mode: RenderMode,
  spaceScene: THREE.Scene,
  spaceCamera: THREE.Camera,
  surfaceScene: THREE.Scene | null,
  surfaceCamera: THREE.Camera,
): void {
  if (mode === 'space') {
    renderer.render(spaceScene, spaceCamera);
  } else if (mode === 'surface' && surfaceScene !== null) {
    renderer.render(surfaceScene, surfaceCamera);
  }
}
