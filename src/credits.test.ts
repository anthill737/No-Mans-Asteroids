import { describe, it, expect } from 'vitest';
import { CreditWallet, ENEMY_CREDIT_MIN, ENEMY_CREDIT_MAX } from './credits';

describe('CreditWallet', () => {
  // ── Construction ────────────────────────────────────────────────────────────

  it('starts at zero by default', () => {
    const w = new CreditWallet();
    expect(w.balance).toBe(0);
  });

  it('accepts a positive initial balance', () => {
    const w = new CreditWallet(100);
    expect(w.balance).toBe(100);
  });

  it('clamps negative initial balance to zero', () => {
    const w = new CreditWallet(-50);
    expect(w.balance).toBe(0);
  });

  // ── earn ────────────────────────────────────────────────────────────────────

  it('earn increments balance and returns new balance', () => {
    const w = new CreditWallet(0);
    const result = w.earn(30);
    expect(result).toBe(30);
    expect(w.balance).toBe(30);
  });

  it('earn accumulates across multiple kills', () => {
    const w = new CreditWallet(0);
    w.earn(20);
    w.earn(15);
    w.earn(50);
    expect(w.balance).toBe(85);
  });

  it('earn with enemy credit-value range stays within ENEMY_CREDIT_MIN..MAX', () => {
    expect(ENEMY_CREDIT_MIN).toBe(10);
    expect(ENEMY_CREDIT_MAX).toBe(50);
    const w = new CreditWallet(0);
    w.earn(ENEMY_CREDIT_MIN);
    expect(w.balance).toBe(ENEMY_CREDIT_MIN);
    w.earn(ENEMY_CREDIT_MAX - ENEMY_CREDIT_MIN);
    expect(w.balance).toBe(ENEMY_CREDIT_MAX);
  });

  it('earn ignores negative amounts (no penalty earn path)', () => {
    const w = new CreditWallet(100);
    w.earn(-50);
    expect(w.balance).toBe(100);
  });

  // ── spend — sufficient balance ──────────────────────────────────────────────

  it('spend deducts credits and returns success when balance is sufficient', () => {
    const w = new CreditWallet(200);
    const result = w.spend(150);
    expect(result.success).toBe(true);
    expect(result.balance).toBe(50);
    expect(w.balance).toBe(50);
  });

  it('spend exact balance succeeds and leaves zero', () => {
    const w = new CreditWallet(100);
    const result = w.spend(100);
    expect(result.success).toBe(true);
    expect(result.balance).toBe(0);
  });

  // ── spend — insufficient funds ──────────────────────────────────────────────

  it('spend more than balance returns failure without changing balance', () => {
    const w = new CreditWallet(50);
    const result = w.spend(51);
    expect(result.success).toBe(false);
    expect(result.balance).toBe(50);
    expect(w.balance).toBe(50);
  });

  it('spend on empty wallet returns failure', () => {
    const w = new CreditWallet(0);
    const result = w.spend(1);
    expect(result.success).toBe(false);
    expect(result.balance).toBe(0);
  });

  it('balance never goes below zero after failed spend', () => {
    const w = new CreditWallet(10);
    w.spend(100);
    expect(w.balance).toBeGreaterThanOrEqual(0);
  });

  // ── combined earn + spend round-trip ────────────────────────────────────────

  it('earn then spend round-trip reflects correct balance', () => {
    const w = new CreditWallet(0);
    w.earn(300);          // kill a few enemies
    w.spend(150);         // buy something
    w.earn(30);           // kill another enemy
    const result = w.spend(200); // try to buy something expensive — should fail
    expect(result.success).toBe(false);
    expect(w.balance).toBe(180); // 300 - 150 + 30 = 180, unchanged
  });
});
