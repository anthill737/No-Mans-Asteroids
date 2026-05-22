export type MouseMoveCallback = (dx: number, dy: number) => void;

export function setupPointerLock(
  canvas: HTMLCanvasElement,
  onMove: MouseMoveCallback,
): () => void {
  function onClick() {
    canvas.requestPointerLock();
  }

  function onMouseMove(e: MouseEvent) {
    if (document.pointerLockElement === canvas) {
      onMove(e.movementX, e.movementY);
    }
  }

  canvas.addEventListener('click', onClick);
  document.addEventListener('mousemove', onMouseMove);

  return () => {
    canvas.removeEventListener('click', onClick);
    document.removeEventListener('mousemove', onMouseMove);
  };
}
