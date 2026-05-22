import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
  WarpSystem,
  getSectorName,
  checkBlackHoleProximity,
  BLACK_HOLE_WARP_RADIUS,
} from './warp';

describe('getSectorName', () => {
  it('returns correct format with sector number', () => {
    const name = getSectorName(1);
    expect(name).toMatch(/^Sector 1 — /);
  });

  it('includes the sector number in the output', () => {
    expect(getSectorName(2)).toMatch(/^Sector 2 — /);
    expect(getSectorName(10)).toMatch(/^Sector 10 — /);
  });

  it('region name is non-empty', () => {
    for (let i = 1; i <= 20; i++) {
      const name = getSectorName(i);
      const region = name.split(' — ')[1];
      expect(region).toBeTruthy();
      expect(region.length).toBeGreaterThan(0);
    }
  });

  it('cycles region names deterministically (15 regions)', () => {
    // sector 1 and sector 16 should share the same region (15 regions cycle)
    const region1 = getSectorName(1).split(' — ')[1];
    const region16 = getSectorName(16).split(' — ')[1];
    expect(region1).toBe(region16);
  });

  it('adjacent sectors get different region names', () => {
    for (let i = 1; i < 15; i++) {
      const r1 = getSectorName(i).split(' — ')[1];
      const r2 = getSectorName(i + 1).split(' — ')[1];
      expect(r1).not.toBe(r2);
    }
  });
});

describe('checkBlackHoleProximity', () => {
  function makeBlackHole(x: number, y: number, z: number): THREE.Group {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    return group;
  }

  it('returns true when player is inside warp radius', () => {
    const bh = makeBlackHole(0, 0, 0);
    const pos = new THREE.Vector3(BLACK_HOLE_WARP_RADIUS - 1, 0, 0);
    expect(checkBlackHoleProximity(pos, bh)).toBe(true);
  });

  it('returns true exactly at the warp radius boundary', () => {
    const bh = makeBlackHole(0, 0, 0);
    const pos = new THREE.Vector3(BLACK_HOLE_WARP_RADIUS, 0, 0);
    expect(checkBlackHoleProximity(pos, bh)).toBe(true);
  });

  it('returns false when player is outside warp radius', () => {
    const bh = makeBlackHole(0, 0, 0);
    const pos = new THREE.Vector3(BLACK_HOLE_WARP_RADIUS + 1, 0, 0);
    expect(checkBlackHoleProximity(pos, bh)).toBe(false);
  });

  it('works with non-origin black hole positions', () => {
    const bh = makeBlackHole(100, 50, -80);
    const nearPos = new THREE.Vector3(100 + BLACK_HOLE_WARP_RADIUS - 2, 50, -80);
    const farPos = new THREE.Vector3(100 + BLACK_HOLE_WARP_RADIUS + 2, 50, -80);
    expect(checkBlackHoleProximity(nearPos, bh)).toBe(true);
    expect(checkBlackHoleProximity(farPos, bh)).toBe(false);
  });

  it('uses 3D distance (not just horizontal)', () => {
    const bh = makeBlackHole(0, 0, 0);
    // Diagonal position just inside the radius
    const d = (BLACK_HOLE_WARP_RADIUS - 0.5) / Math.sqrt(3);
    const pos = new THREE.Vector3(d, d, d);
    expect(checkBlackHoleProximity(pos, bh)).toBe(true);
  });
});

describe('WarpSystem', () => {
  describe('initial state', () => {
    it('starts in idle state', () => {
      const ws = new WarpSystem(1);
      expect(ws.state).toBe('idle');
    });

    it('can warp initially', () => {
      const ws = new WarpSystem(1);
      expect(ws.canWarp()).toBe(true);
    });

    it('starts with flash and name alpha at 0', () => {
      const ws = new WarpSystem(1);
      expect(ws.flashAlpha).toBe(0);
      expect(ws.nameAlpha).toBe(0);
    });

    it('uses sectorId from constructor', () => {
      const ws = new WarpSystem(5);
      expect(ws.sectorId).toBe(5);
    });

    it('defaults to sectorId 1', () => {
      const ws = new WarpSystem();
      expect(ws.sectorId).toBe(1);
    });
  });

  describe('beginWarp', () => {
    it('transitions to warp-out state', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      expect(ws.state).toBe('warp-out');
    });

    it('cannot start when already warping', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.1);
      ws.beginWarp(); // no-op
      expect(ws.state).toBe('warp-out');
    });

    it('canWarp returns false once started', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      expect(ws.canWarp()).toBe(false);
    });
  });

  describe('state machine transitions', () => {
    it('warp-out transitions to warp-in and fires warpNow exactly once', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();

      let warpNowCount = 0;
      for (let i = 0; i < 20; i++) {
        const { warpNow } = ws.update(0.05);
        if (warpNow) warpNowCount++;
      }
      expect(warpNowCount).toBe(1);
    });

    it('increments sectorId when warpNow fires', () => {
      const ws = new WarpSystem(3);
      ws.beginWarp();
      ws.update(0.6); // cross warp-out (0.5s)
      expect(ws.sectorId).toBe(4);
    });

    it('flashAlpha reaches 1 at warp-out/warp-in boundary', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      expect(ws.flashAlpha).toBe(1);
    });

    it('warp-in reduces flashAlpha back to 0', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6); // warp-out done
      ws.update(0.6); // warp-in done
      expect(ws.flashAlpha).toBe(0);
      expect(ws.state).toBe('showing-name');
    });

    it('showing-name fades nameAlpha in and out over 3 seconds', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6); // warp-out
      ws.update(0.6); // warp-in → showing-name

      ws.update(0.25); // mid fade-in
      expect(ws.nameAlpha).toBeGreaterThan(0);
      expect(ws.nameAlpha).toBeLessThanOrEqual(1);

      ws.update(0.4); // fully visible
      expect(ws.nameAlpha).toBe(1);

      ws.update(2.1); // through hold into fade-out
      expect(ws.nameAlpha).toBeGreaterThanOrEqual(0);
      expect(ws.nameAlpha).toBeLessThanOrEqual(1);
    });

    it('returns to idle after name display completes', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.update(0.6);
      ws.update(4.0); // well past 3s name duration
      expect(ws.state).toBe('idle');
      expect(ws.nameAlpha).toBe(0);
      expect(ws.flashAlpha).toBe(0);
    });

    it('warpNow is false during warp-in and showing-name', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6); // fires warpNow, now in warp-in

      const { warpNow: warpNow2 } = ws.update(0.3); // mid warp-in
      expect(warpNow2).toBe(false);

      ws.update(0.4); // now in showing-name
      const { warpNow: warpNow3 } = ws.update(1.0);
      expect(warpNow3).toBe(false);
    });
  });

  describe('post-warp cooldown (prevents chain-warping)', () => {
    it('cannot warp immediately after sequence completes', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6); // warp-out
      ws.update(0.6); // warp-in
      ws.update(4.0); // showing-name done → idle with cooldown
      expect(ws.state).toBe('idle');
      expect(ws.canWarp()).toBe(false);
    });

    it('can warp again after cooldown expires (2 seconds)', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.update(0.6);
      ws.update(4.0); // sets 2s cooldown
      ws.update(2.1); // past POST_WARP_COOLDOWN
      expect(ws.canWarp()).toBe(true);
    });

    it('cannot warp at 1 second into cooldown', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.update(0.6);
      ws.update(4.0);
      ws.update(1.0); // only 1s elapsed, cooldown is 2s
      expect(ws.canWarp()).toBe(false);
    });

    it('cannot warp during warp-in state', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6); // now in warp-in
      expect(ws.canWarp()).toBe(false);
    });

    it('cannot warp during showing-name state', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.update(0.6); // now in showing-name
      expect(ws.canWarp()).toBe(false);
    });
  });

  describe('reset', () => {
    it('returns to idle with no cooldown', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.reset();
      expect(ws.state).toBe('idle');
      expect(ws.canWarp()).toBe(true);
    });

    it('clears flash and name alpha', () => {
      const ws = new WarpSystem(1);
      ws.beginWarp();
      ws.update(0.6);
      ws.reset();
      expect(ws.flashAlpha).toBe(0);
      expect(ws.nameAlpha).toBe(0);
    });

    it('resets sectorId to provided value', () => {
      const ws = new WarpSystem(5);
      ws.beginWarp();
      ws.update(0.6);
      ws.reset(1);
      expect(ws.sectorId).toBe(1);
    });

    it('defaults reset sectorId to 1', () => {
      const ws = new WarpSystem(7);
      ws.reset();
      expect(ws.sectorId).toBe(1);
    });
  });

  describe('multiple warp sequences', () => {
    it('sectorId increments with each warp', () => {
      const ws = new WarpSystem(1);

      ws.beginWarp();
      ws.update(0.6); ws.update(0.6); ws.update(4.0); ws.update(2.1);
      expect(ws.sectorId).toBe(2);

      ws.beginWarp();
      ws.update(0.6); ws.update(0.6); ws.update(4.0); ws.update(2.1);
      expect(ws.sectorId).toBe(3);
    });
  });
});
