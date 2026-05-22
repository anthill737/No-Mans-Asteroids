import { describe, it, expect } from 'vitest';
import { PlayerStats } from './player';

describe('PlayerStats', () => {
  describe('initial state', () => {
    it('starts at full health and shield', () => {
      const p = new PlayerStats(100, 80);
      expect(p.health).toBe(100);
      expect(p.shield).toBe(80);
    });

    it('isAlive is true at full health', () => {
      const p = new PlayerStats(100, 80);
      expect(p.isAlive).toBe(true);
    });
  });

  describe('applyDamage — shield absorbs first', () => {
    it('small damage depletes shield only, leaving hull intact', () => {
      const p = new PlayerStats(100, 80);
      const result = p.applyDamage(30);
      expect(p.shield).toBe(50);
      expect(p.health).toBe(100);
      expect(result.shieldDamage).toBe(30);
      expect(result.hullDamage).toBe(0);
      expect(result.isDead).toBe(false);
    });

    it('damage exactly equal to shield empties shield without touching hull', () => {
      const p = new PlayerStats(100, 80);
      const result = p.applyDamage(80);
      expect(p.shield).toBe(0);
      expect(p.health).toBe(100);
      expect(result.hullDamage).toBe(0);
    });

    it('damage exceeding shield spills overflow into hull', () => {
      const p = new PlayerStats(100, 30);
      const result = p.applyDamage(50);
      expect(p.shield).toBe(0);
      expect(p.health).toBe(80); // 100 - (50-30)
      expect(result.shieldDamage).toBe(30);
      expect(result.hullDamage).toBe(20);
      expect(result.isDead).toBe(false);
    });

    it('damage with zero shield goes straight to hull', () => {
      const p = new PlayerStats(100, 0);
      p.applyDamage(40);
      expect(p.health).toBe(60);
    });

    it('multiple hits accumulate correctly — shield first, then hull', () => {
      const p = new PlayerStats(100, 30);
      p.applyDamage(15); // shield: 30→15, health: 100
      p.applyDamage(25); // shield absorbs 15 (→0), overflow 10 hits hull (→90)
      expect(p.shield).toBe(0);
      expect(p.health).toBe(90);
    });
  });

  describe('clamping — neither stat underflows or overflows', () => {
    it('health never goes below 0', () => {
      const p = new PlayerStats(100, 0);
      p.applyDamage(200);
      expect(p.health).toBe(0);
    });

    it('shield never goes below 0', () => {
      const p = new PlayerStats(100, 50);
      p.applyDamage(300);
      expect(p.shield).toBe(0);
    });

    it('negative damage amount is treated as zero — no healing via applyDamage', () => {
      const p = new PlayerStats(100, 80);
      p.applyDamage(30);
      p.applyDamage(-50);
      expect(p.shield).toBe(50);
      expect(p.health).toBe(100);
    });
  });

  describe('death detection', () => {
    it('isDead is true when hull reaches exactly zero', () => {
      const p = new PlayerStats(100, 0);
      const result = p.applyDamage(100);
      expect(result.isDead).toBe(true);
      expect(p.isAlive).toBe(false);
    });

    it('isDead is false when hull is above zero', () => {
      const p = new PlayerStats(100, 0);
      const result = p.applyDamage(50);
      expect(result.isDead).toBe(false);
      expect(p.isAlive).toBe(true);
    });

    it('massive overkill does not underflow health below zero', () => {
      const p = new PlayerStats(100, 0);
      p.applyDamage(99999);
      expect(p.health).toBe(0);
      expect(p.shield).toBe(0);
    });
  });

  describe('reset', () => {
    it('restores health and shield to their maximums', () => {
      const p = new PlayerStats(100, 80);
      p.applyDamage(200);
      p.reset();
      expect(p.health).toBe(100);
      expect(p.shield).toBe(80);
    });

    it('isAlive is true after reset from death', () => {
      const p = new PlayerStats(100, 0);
      p.applyDamage(100);
      p.reset();
      expect(p.isAlive).toBe(true);
    });

    it('reset after partial damage restores to full, not just to pre-damage', () => {
      const p = new PlayerStats(100, 80);
      p.applyDamage(20);
      p.reset();
      expect(p.shield).toBe(80);
      expect(p.health).toBe(100);
    });
  });
});
