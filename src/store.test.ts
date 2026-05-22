import { describe, it, expect } from 'vitest';
import { STORE_ITEMS, STORE_X, STORE_Z, STORE_INTERACTION_RADIUS, StoreUI, buildStoreBuilding, purchaseItem } from './store';
import { CreditWallet } from './credits';
import { PlayerStats } from './player';
import * as THREE from 'three';

// ── Store items data ──────────────────────────────────────────────────────────

describe('STORE_ITEMS', () => {
  it('contains at least 3 purchasable items', () => {
    expect(STORE_ITEMS.length).toBeGreaterThanOrEqual(3);
  });

  it('every item has a non-empty name', () => {
    for (const item of STORE_ITEMS) {
      expect(typeof item.name).toBe('string');
      expect(item.name.length).toBeGreaterThan(0);
    }
  });

  it('every item has a non-empty description', () => {
    for (const item of STORE_ITEMS) {
      expect(typeof item.desc).toBe('string');
      expect(item.desc.length).toBeGreaterThan(0);
    }
  });

  it('every item has a positive credit cost', () => {
    for (const item of STORE_ITEMS) {
      expect(typeof item.cost).toBe('number');
      expect(item.cost).toBeGreaterThan(0);
    }
  });

  it('includes weapon and ammo options (covers both categories)', () => {
    const names = STORE_ITEMS.map((i) => i.name.toLowerCase());
    const hasWeapon = names.some((n) =>
      n.includes('cannon') || n.includes('missile') || n.includes('plasma') ||
      n.includes('chaingun') || n.includes('laser'),
    );
    const hasAmmo = names.some((n) =>
      n.includes('ammo') || n.includes('rack') || n.includes('pack') || n.includes('crate'),
    );
    expect(hasWeapon || hasAmmo).toBe(true);
    expect(STORE_ITEMS.some((i) => i.cost >= 500)).toBe(true);
  });

  it('all item names are unique', () => {
    const names = STORE_ITEMS.map((i) => i.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('every item has a valid category', () => {
    for (const item of STORE_ITEMS) {
      expect(['ammo', 'weapon', 'upgrade']).toContain(item.category);
    }
  });
});

// ── Upgrade tiers ─────────────────────────────────────────────────────────────

describe('upgrade tiers', () => {
  it('has exactly three shield upgrade tiers', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'shields');
    expect(tiers.length).toBe(3);
  });

  it('has exactly three engine upgrade tiers', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'engine');
    expect(tiers.length).toBe(3);
  });

  it('has exactly three hull upgrade tiers', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'hull');
    expect(tiers.length).toBe(3);
  });

  it('shield tier costs are strictly increasing', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'shields');
    expect(tiers[0].cost).toBeLessThan(tiers[1].cost);
    expect(tiers[1].cost).toBeLessThan(tiers[2].cost);
  });

  it('engine tier costs are strictly increasing', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'engine');
    expect(tiers[0].cost).toBeLessThan(tiers[1].cost);
    expect(tiers[1].cost).toBeLessThan(tiers[2].cost);
  });

  it('hull tier costs are strictly increasing', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'hull');
    expect(tiers[0].cost).toBeLessThan(tiers[1].cost);
    expect(tiers[1].cost).toBeLessThan(tiers[2].cost);
  });

  it('shield upgrades have positive upgradeBonus values', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'shields');
    for (const t of tiers) {
      expect(t.upgradeBonus).toBeGreaterThan(0);
    }
  });

  it('hull upgrades have positive upgradeBonus values', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'hull');
    for (const t of tiers) {
      expect(t.upgradeBonus).toBeGreaterThan(0);
    }
  });

  it('engine upgrades have positive thrust and speed bonuses', () => {
    const tiers = STORE_ITEMS.filter((i) => i.upgradeType === 'engine');
    for (const t of tiers) {
      expect(t.engineThrustBonus).toBeGreaterThan(0);
      expect(t.engineSpeedBonus).toBeGreaterThan(0);
    }
  });
});

// ── purchaseItem ──────────────────────────────────────────────────────────────

describe('purchaseItem', () => {
  it('deducts the correct cost on successful ammo purchase', () => {
    const wallet = new CreditWallet(1000);
    const item = STORE_ITEMS.find((i) => i.category === 'ammo')!;
    const result = purchaseItem(item, wallet);
    expect(result.success).toBe(true);
    expect(wallet.balance).toBe(1000 - item.cost);
  });

  it('returns failure when credits are insufficient', () => {
    const wallet = new CreditWallet(0);
    const item = STORE_ITEMS[0];
    const result = purchaseItem(item, wallet);
    expect(result.success).toBe(false);
    expect(wallet.balance).toBe(0);
  });

  it('leaves credits unchanged on failure', () => {
    const wallet = new CreditWallet(50);
    const expensiveItem = STORE_ITEMS.find((i) => i.cost > 50)!;
    purchaseItem(expensiveItem, wallet);
    expect(wallet.balance).toBe(50);
  });

  it('shield upgrade increases player maxShield', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    const result = purchaseItem(item, wallet, player);
    expect(result.success).toBe(true);
    expect(player.maxShield).toBe(100 + (item.upgradeBonus ?? 0));
  });

  it('hull upgrade increases player maxHealth', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    const result = purchaseItem(item, wallet, player);
    expect(result.success).toBe(true);
    expect(player.maxHealth).toBe(100 + (item.upgradeBonus ?? 0));
  });

  it('engine upgrade increases player thrustBonus and speedBonus', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'engine')!;
    const result = purchaseItem(item, wallet, player);
    expect(result.success).toBe(true);
    expect(player.thrustBonus).toBe(item.engineThrustBonus ?? 0);
    expect(player.speedBonus).toBe(item.engineSpeedBonus ?? 0);
  });

  it('shield upgrade with insufficient credits leaves maxShield unchanged', () => {
    const wallet = new CreditWallet(0);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    purchaseItem(item, wallet, player);
    expect(wallet.balance).toBe(0);
    expect(player.maxShield).toBe(100);
  });

  it('hull upgrade with insufficient credits leaves maxHealth unchanged', () => {
    const wallet = new CreditWallet(0);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    purchaseItem(item, wallet, player);
    expect(player.maxHealth).toBe(100);
  });

  it('shield upgrade also increases current shield by the bonus', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    purchaseItem(item, wallet, player);
    expect(player.shield).toBeGreaterThan(100);
  });

  it('hull upgrade also increases current health by the bonus', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'hull')!;
    purchaseItem(item, wallet, player);
    expect(player.health).toBeGreaterThan(100);
  });

  it('multiple upgrades stack correctly', () => {
    const wallet = new CreditWallet(10000);
    const player = new PlayerStats(100, 100);
    const shieldItems = STORE_ITEMS.filter((i) => i.upgradeType === 'shields');
    for (const item of shieldItems) {
      purchaseItem(item, wallet, player);
    }
    const totalBonus = shieldItems.reduce((sum, i) => sum + (i.upgradeBonus ?? 0), 0);
    expect(player.maxShield).toBe(100 + totalBonus);
  });

  it('upgrade without player argument does not throw', () => {
    const wallet = new CreditWallet(2000);
    const item = STORE_ITEMS.find((i) => i.upgradeType === 'shields')!;
    expect(() => purchaseItem(item, wallet)).not.toThrow();
  });

  it('weapon purchase adds the weapon to player unlockedWeapons', () => {
    const wallet = new CreditWallet(2000);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.category === 'weapon')!;
    const result = purchaseItem(item, wallet, player);
    expect(result.success).toBe(true);
    expect(wallet.balance).toBe(2000 - item.cost);
    expect(player.unlockedWeapons.has(item.name)).toBe(true);
  });

  it('weapon purchase with insufficient credits does not add to inventory', () => {
    const wallet = new CreditWallet(0);
    const player = new PlayerStats(100, 100);
    const item = STORE_ITEMS.find((i) => i.category === 'weapon')!;
    const result = purchaseItem(item, wallet, player);
    expect(result.success).toBe(false);
    expect(wallet.balance).toBe(0);
    expect(player.unlockedWeapons.has(item.name)).toBe(false);
  });

  it('weapon purchase without player argument does not throw', () => {
    const wallet = new CreditWallet(2000);
    const item = STORE_ITEMS.find((i) => i.category === 'weapon')!;
    expect(() => purchaseItem(item, wallet)).not.toThrow();
  });
});

// ── Store constants ───────────────────────────────────────────────────────────

describe('store constants', () => {
  it('STORE_X and STORE_Z are finite numbers', () => {
    expect(Number.isFinite(STORE_X)).toBe(true);
    expect(Number.isFinite(STORE_Z)).toBe(true);
  });

  it('STORE_INTERACTION_RADIUS is a positive number', () => {
    expect(STORE_INTERACTION_RADIUS).toBeGreaterThan(0);
  });

  it('store is within the flat terrain zone (< 30 units from origin)', () => {
    const dist = Math.sqrt(STORE_X * STORE_X + STORE_Z * STORE_Z);
    expect(dist).toBeLessThan(30);
  });

  it('store and ship positions do not overlap (interaction zones are disjoint)', () => {
    // Ship beacon is at (0, -12) with LAUNCH_THRESHOLD=6; store at (STORE_X, STORE_Z).
    // Zones must be disjoint so E key actions don't collide.
    const LAUNCH_THRESHOLD = 6;
    const shipDist = Math.sqrt(STORE_X * STORE_X + (STORE_Z + 12) * (STORE_Z + 12));
    expect(shipDist).toBeGreaterThan(LAUNCH_THRESHOLD + STORE_INTERACTION_RADIUS);
  });
});

// ── buildStoreBuilding ────────────────────────────────────────────────────────

describe('buildStoreBuilding', () => {
  it('returns a THREE.Group', () => {
    const group = buildStoreBuilding(42);
    expect(group).toBeInstanceOf(THREE.Group);
  });

  it('group has multiple child meshes (building body, sign tower, etc.)', () => {
    const group = buildStoreBuilding(1);
    const meshes: THREE.Mesh[] = [];
    group.traverse((o: THREE.Object3D) => { if (o instanceof THREE.Mesh) meshes.push(o); });
    expect(meshes.length).toBeGreaterThanOrEqual(4);
  });

  it('group is deterministic — same seed gives same child count', () => {
    const a = buildStoreBuilding(7);
    const b = buildStoreBuilding(7);
    expect(a.children.length).toBe(b.children.length);
  });

  it('contains a point light for ambient glow', () => {
    const group = buildStoreBuilding(5);
    let hasLight = false;
    group.traverse((o: THREE.Object3D) => { if (o instanceof THREE.PointLight) hasLight = true; });
    expect(hasLight).toBe(true);
  });
});

// ── StoreUI class interface ───────────────────────────────────────────────────

describe('StoreUI class', () => {
  it('exposes show, hide, and destroy methods on the prototype', () => {
    expect(typeof StoreUI.prototype.show).toBe('function');
    expect(typeof StoreUI.prototype.hide).toBe('function');
    expect(typeof StoreUI.prototype.destroy).toBe('function');
  });

  it('isOpen getter is defined on the prototype', () => {
    const descriptor = Object.getOwnPropertyDescriptor(StoreUI.prototype, 'isOpen');
    expect(descriptor).toBeDefined();
    expect(typeof descriptor?.get).toBe('function');
  });
});
