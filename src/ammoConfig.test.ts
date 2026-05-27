import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { LaserSystem } from './laser';
import { ChaingunSystem } from './weapons/chaingun';
import { MissileSystem } from './weapons/missile';
import { STORE_ITEMS } from './store';
import {
  AMMO_CAPACITY,
  AMMO_RESUPPLY,
  AMMO_TYPES,
  P9_AMMO_CAPACITY,
  P9_AMMO_RESUPPLY,
} from './ammoConfig';

describe('P10 ammo capacity tuning', () => {
  it('bumps each weapon capacity to 1.4x-1.6x its P9 value', () => {
    for (const ammoType of AMMO_TYPES) {
      const ratio = AMMO_CAPACITY[ammoType] / P9_AMMO_CAPACITY[ammoType];

      expect(ratio).toBeGreaterThanOrEqual(1.4);
      expect(ratio).toBeLessThanOrEqual(1.6);
    }
  });

  it('bumps store resupply amounts to 1.4x-1.6x their P9 values without changing prices', () => {
    const expectedCosts = {
      laser: 150,
      chaingun: 200,
      missile: 300,
    };

    for (const ammoType of AMMO_TYPES) {
      const item = STORE_ITEMS.find((candidate) => candidate.ammoType === ammoType);
      const ratio = AMMO_RESUPPLY[ammoType] / P9_AMMO_RESUPPLY[ammoType];

      expect(item).toBeDefined();
      expect(item!.ammoAmount).toBe(AMMO_RESUPPLY[ammoType]);
      expect(item!.cost).toBe(expectedCosts[ammoType]);
      expect(ratio).toBeGreaterThanOrEqual(1.4);
      expect(ratio).toBeLessThanOrEqual(1.6);
    }
  });

  it('silently clamps loaded ammo above the new max capacity', () => {
    const scene = new THREE.Scene();
    const laser = new LaserSystem(scene, AMMO_CAPACITY.laser);
    const chaingun = new ChaingunSystem(scene, AMMO_CAPACITY.chaingun);
    const missiles = new MissileSystem(scene, AMMO_CAPACITY.missile);

    expect(() => {
      laser.reset(AMMO_CAPACITY.laser + 1000);
      chaingun.reset(AMMO_CAPACITY.chaingun + 1000);
      missiles.reset(AMMO_CAPACITY.missile + 1000);
    }).not.toThrow();

    expect(laser.ammo).toBe(AMMO_CAPACITY.laser);
    expect(chaingun.ammo).toBe(AMMO_CAPACITY.chaingun);
    expect(missiles.ammo).toBe(AMMO_CAPACITY.missile);
  });
});
