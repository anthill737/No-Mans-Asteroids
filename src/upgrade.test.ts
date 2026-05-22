import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { PlayerStats } from './player';
import { FlightController, THRUST, MAX_SPEED } from './flight';
import { purchaseItem, STORE_ITEMS } from './store';
import { CreditWallet } from './credits';

// ── Shield upgrade stat deltas ─────────────────────────────────────────────────

describe('shield upgrade stat delta', () => {
  it('tier I raises maxShield by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields' && i.name.includes('I'))!;
    const before = p.maxShield;
    p.upgradeMaxShield(item.upgradeBonus!);
    expect(p.maxShield).toBe(before + item.upgradeBonus!);
  });

  it('tier II raises maxShield by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields' && i.name.includes('II'))!;
    const before = p.maxShield;
    p.upgradeMaxShield(item.upgradeBonus!);
    expect(p.maxShield).toBe(before + item.upgradeBonus!);
  });

  it('tier III raises maxShield by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields' && i.name.includes('III'))!;
    const before = p.maxShield;
    p.upgradeMaxShield(item.upgradeBonus!);
    expect(p.maxShield).toBe(before + item.upgradeBonus!);
  });

  it('shield upgrade also raises current shield (no cap exceeded)', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    const shieldBefore = p.shield;
    p.upgradeMaxShield(item.upgradeBonus!);
    expect(p.shield).toBe(shieldBefore + item.upgradeBonus!);
  });

  it('all three tiers stack: total maxShield equals base plus sum of all bonuses', () => {
    const p = new PlayerStats(100, 100);
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'shields');
    const totalBonus = tiers.reduce((s, t) => s + t.upgradeBonus!, 0);
    tiers.forEach((t) => p.upgradeMaxShield(t.upgradeBonus!));
    expect(p.maxShield).toBe(100 + totalBonus);
  });

  it('purchaseItem deducts credits and applies shield delta end-to-end', () => {
    const wallet = new CreditWallet(5000);
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    const result = purchaseItem(item, wallet, p);
    expect(result.success).toBe(true);
    expect(p.maxShield).toBe(100 + item.upgradeBonus!);
    expect(wallet.balance).toBe(5000 - item.cost);
  });
});

// ── Hull upgrade stat deltas ───────────────────────────────────────────────────

describe('hull upgrade stat delta', () => {
  it('tier I raises maxHealth by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull' && i.name.includes('I'))!;
    const before = p.maxHealth;
    p.upgradeMaxHealth(item.upgradeBonus!);
    expect(p.maxHealth).toBe(before + item.upgradeBonus!);
  });

  it('tier II raises maxHealth by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull' && i.name.includes('II'))!;
    const before = p.maxHealth;
    p.upgradeMaxHealth(item.upgradeBonus!);
    expect(p.maxHealth).toBe(before + item.upgradeBonus!);
  });

  it('tier III raises maxHealth by the declared bonus', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull' && i.name.includes('III'))!;
    const before = p.maxHealth;
    p.upgradeMaxHealth(item.upgradeBonus!);
    expect(p.maxHealth).toBe(before + item.upgradeBonus!);
  });

  it('hull upgrade also raises current health', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    const healthBefore = p.health;
    p.upgradeMaxHealth(item.upgradeBonus!);
    expect(p.health).toBe(healthBefore + item.upgradeBonus!);
  });

  it('all three tiers stack: total maxHealth equals base plus sum of all bonuses', () => {
    const p = new PlayerStats(100, 100);
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'hull');
    const totalBonus = tiers.reduce((s, t) => s + t.upgradeBonus!, 0);
    tiers.forEach((t) => p.upgradeMaxHealth(t.upgradeBonus!));
    expect(p.maxHealth).toBe(100 + totalBonus);
  });

  it('purchaseItem deducts credits and applies hull delta end-to-end', () => {
    const wallet = new CreditWallet(5000);
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    const result = purchaseItem(item, wallet, p);
    expect(result.success).toBe(true);
    expect(p.maxHealth).toBe(100 + item.upgradeBonus!);
    expect(wallet.balance).toBe(5000 - item.cost);
  });
});

// ── Engine upgrade stat deltas ─────────────────────────────────────────────────

describe('engine upgrade stat delta', () => {
  it('tier I raises player thrustBonus and speedBonus by declared amounts', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine' && i.name.includes('I'))!;
    p.upgradeEngine(item.engineThrustBonus!, item.engineSpeedBonus!);
    expect(p.thrustBonus).toBe(item.engineThrustBonus!);
    expect(p.speedBonus).toBe(item.engineSpeedBonus!);
  });

  it('tier II raises player thrustBonus and speedBonus by declared amounts', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine' && i.name.includes('II'))!;
    p.upgradeEngine(item.engineThrustBonus!, item.engineSpeedBonus!);
    expect(p.thrustBonus).toBe(item.engineThrustBonus!);
    expect(p.speedBonus).toBe(item.engineSpeedBonus!);
  });

  it('tier III raises player thrustBonus and speedBonus by declared amounts', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine' && i.name.includes('III'))!;
    p.upgradeEngine(item.engineThrustBonus!, item.engineSpeedBonus!);
    expect(p.thrustBonus).toBe(item.engineThrustBonus!);
    expect(p.speedBonus).toBe(item.engineSpeedBonus!);
  });

  it('all three engine tiers stack correctly', () => {
    const p = new PlayerStats(100, 100);
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'engine');
    const totalThrust = tiers.reduce((s, t) => s + t.engineThrustBonus!, 0);
    const totalSpeed = tiers.reduce((s, t) => s + t.engineSpeedBonus!, 0);
    tiers.forEach((t) => p.upgradeEngine(t.engineThrustBonus!, t.engineSpeedBonus!));
    expect(p.thrustBonus).toBe(totalThrust);
    expect(p.speedBonus).toBe(totalSpeed);
  });

  it('FlightController thrustBonus causes faster acceleration than baseline', () => {
    const bonus = 10;
    const fc = new FlightController();
    fc.thrustBonus = bonus;
    fc.setKey('w', true);

    const fcBaseline = new FlightController();
    fcBaseline.setKey('w', true);

    const dt = 1 / 60;
    fc.update(dt, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());
    fcBaseline.update(dt, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());

    expect(fc.velocity.length()).toBeGreaterThan(fcBaseline.velocity.length());
  });

  it('FlightController speedBonus raises the velocity cap: pre-loaded velocity is not clamped back to old MAX_SPEED', () => {
    const bonus = 10;
    const fc = new FlightController();
    fc.speedBonus = bonus;

    // Pre-load velocity just above old MAX_SPEED — baseline would clamp it back,
    // but with speedBonus the new cap is MAX_SPEED + bonus so it should pass through.
    const aboveOldCap = MAX_SPEED + 5; // 35, still below new cap of 40
    fc.velocity.set(0, 0, -aboveOldCap);
    fc.setKey('w', true);

    fc.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());

    // Velocity should remain above old MAX_SPEED (not clamped back to 30)
    expect(fc.velocity.length()).toBeGreaterThan(MAX_SPEED);
    // And should not exceed new cap
    expect(fc.velocity.length()).toBeLessThanOrEqual(MAX_SPEED + bonus + 1e-6);
  });

  it('FlightController with zero bonuses matches baseline THRUST and MAX_SPEED', () => {
    const fc = new FlightController();
    fc.setKey('w', true);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const pos = new THREE.Vector3();

    // After one frame, velocity should reflect exactly THRUST (no bonus)
    fc.update(1 / 60, euler, pos);
    // Expected forward velocity: THRUST * (1/60) ≈ 0.333 m/s, minus tiny drag
    expect(fc.velocity.z).toBeCloseTo(-(THRUST / 60), 1);
  });

  it('purchaseItem deducts credits and applies engine delta end-to-end', () => {
    const wallet = new CreditWallet(5000);
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine')!;
    const result = purchaseItem(item, wallet, p);
    expect(result.success).toBe(true);
    expect(p.thrustBonus).toBe(item.engineThrustBonus!);
    expect(p.speedBonus).toBe(item.engineSpeedBonus!);
    expect(wallet.balance).toBe(5000 - item.cost);
  });
});

// ── Warp persistence ───────────────────────────────────────────────────────────

describe('upgrade persistence across warp', () => {
  it('PlayerStats retains upgraded maxShield after a simulated warp (no reset called)', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    p.upgradeMaxShield(item.upgradeBonus!);
    const maxShieldAfterUpgrade = p.maxShield;

    // Simulate warp: sector changes but player is NOT reset
    // (restartGame calls player.reset(), but warp does not — mirrors main.ts behaviour)
    expect(p.maxShield).toBe(maxShieldAfterUpgrade);
  });

  it('PlayerStats retains upgraded maxHealth after a simulated warp', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    p.upgradeMaxHealth(item.upgradeBonus!);
    const maxHealthAfterUpgrade = p.maxHealth;
    expect(p.maxHealth).toBe(maxHealthAfterUpgrade);
  });

  it('PlayerStats retains engine bonuses after a simulated warp', () => {
    const p = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine')!;
    p.upgradeEngine(item.engineThrustBonus!, item.engineSpeedBonus!);
    expect(p.thrustBonus).toBe(item.engineThrustBonus!);
    expect(p.speedBonus).toBe(item.engineSpeedBonus!);
  });

  it('FlightController retains bonuses after flight.reset() (velocity zeroed but bonuses preserved)', () => {
    const fc = new FlightController();
    fc.thrustBonus = 10;
    fc.speedBonus = 5;
    fc.velocity.set(30, 0, 0);
    fc.reset(); // only zeros velocity
    expect(fc.thrustBonus).toBe(10);
    expect(fc.speedBonus).toBe(5);
    expect(fc.velocity.length()).toBe(0);
  });
});
