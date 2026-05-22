import { describe, it, expect } from 'vitest';
import { spheresOverlap } from './collision';

describe('spheresOverlap', () => {
  it('returns true for identical spheres (fully overlapping)', () => {
    expect(spheresOverlap(0, 0, 0, 5, 0, 0, 0, 5)).toBe(true);
  });

  it('returns true when spheres partially overlap', () => {
    // centers 3 apart, radii 2 each → sum 4 > 3
    expect(spheresOverlap(0, 0, 0, 2, 3, 0, 0, 2)).toBe(true);
  });

  it('returns true when one sphere is inside the other', () => {
    // small sphere at origin fully inside large sphere
    expect(spheresOverlap(0, 0, 0, 10, 1, 0, 0, 1)).toBe(true);
  });

  it('returns true when spheres touch exactly (distance equals sum of radii)', () => {
    // centers 4 apart, radii 2 each → touching
    expect(spheresOverlap(0, 0, 0, 2, 4, 0, 0, 2)).toBe(true);
  });

  it('returns false when spheres do not overlap', () => {
    // centers 10 apart, radii 2 each → gap of 6
    expect(spheresOverlap(0, 0, 0, 2, 10, 0, 0, 2)).toBe(false);
  });

  it('returns false when spheres are far apart in 3D', () => {
    expect(spheresOverlap(0, 0, 0, 1, 100, 100, 100, 1)).toBe(false);
  });

  it('returns false when one sphere is just outside the other', () => {
    // centers 5.001 apart, radii 2 each → sum 4, no overlap
    expect(spheresOverlap(0, 0, 0, 2, 5.001, 0, 0, 2)).toBe(false);
  });

  it('works correctly with negative coordinates', () => {
    // centers at (-10,0,0) and (10,0,0), radii 5 → distance 20, sum 10 → no overlap
    expect(spheresOverlap(-10, 0, 0, 5, 10, 0, 0, 5)).toBe(false);
  });

  it('works correctly with negative coords that do overlap', () => {
    // centers at (-1,0,0) and (1,0,0), radii 3 → distance 2, sum 6 → overlap
    expect(spheresOverlap(-1, 0, 0, 3, 1, 0, 0, 3)).toBe(true);
  });
});
