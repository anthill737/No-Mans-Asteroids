/**
 * Returns true when two spheres overlap (their surfaces intersect or one contains the other).
 * Uses squared distance to avoid a sqrt.
 */
export function spheresOverlap(
  ax: number, ay: number, az: number, ar: number,
  bx: number, by: number, bz: number, br: number,
): boolean {
  const dx = ax - bx;
  const dy = ay - by;
  const dz = az - bz;
  const distSq = dx * dx + dy * dy + dz * dz;
  const radSum = ar + br;
  return distSq <= radSum * radSum;
}
