import { describe, it, expect } from 'vitest';
import { saveGame, loadGame, clearSave, hasSave, SAVE_KEY, type GameSaveState } from './saveLoad';

class StorageStub {
  private store: Record<string, string> = {};
  getItem(key: string): string | null { return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null; }
  setItem(key: string, value: string): void { this.store[key] = value; }
  removeItem(key: string): void { delete this.store[key]; }
}

const fullState: GameSaveState = {
  credits: 1500,
  sectorId: 7,
  health: 75,
  shield: 50,
  shieldUpgrade: 50,
  hullUpgrade: 25,
  engineThrustBonus: 5,
  engineSpeedBonus: 5,
  unlockedWeapons: ['Plasma Cannon'],
  laserAmmo: 20,
  chaingunAmmo: 80,
  missileAmmo: 3,
};

describe('saveGame / loadGame round-trip', () => {
  it('serializes all fields to storage and reads them back identically', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    const loaded = loadGame(storage);

    expect(loaded).not.toBeNull();
    expect(loaded!.credits).toBe(fullState.credits);
    expect(loaded!.sectorId).toBe(fullState.sectorId);
    expect(loaded!.health).toBe(fullState.health);
    expect(loaded!.shield).toBe(fullState.shield);
    expect(loaded!.shieldUpgrade).toBe(fullState.shieldUpgrade);
    expect(loaded!.hullUpgrade).toBe(fullState.hullUpgrade);
    expect(loaded!.engineThrustBonus).toBe(fullState.engineThrustBonus);
    expect(loaded!.engineSpeedBonus).toBe(fullState.engineSpeedBonus);
    expect(loaded!.unlockedWeapons).toEqual(fullState.unlockedWeapons);
    expect(loaded!.laserAmmo).toBe(fullState.laserAmmo);
    expect(loaded!.chaingunAmmo).toBe(fullState.chaingunAmmo);
    expect(loaded!.missileAmmo).toBe(fullState.missileAmmo);
  });

  it('stores valid JSON at the expected key', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    const raw = storage.getItem(SAVE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!) as Record<string, unknown>;
    expect(parsed.credits).toBe(fullState.credits);
    expect(parsed.sectorId).toBe(fullState.sectorId);
  });

  it('overwrites a previous save with the latest state', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    const updated: GameSaveState = { ...fullState, credits: 9999, sectorId: 15 };
    saveGame(updated, storage);
    const loaded = loadGame(storage);
    expect(loaded!.credits).toBe(9999);
    expect(loaded!.sectorId).toBe(15);
  });

  it('clearSave removes the entry so loadGame returns null', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    clearSave(storage);
    expect(loadGame(storage)).toBeNull();
  });

  it('hasSave returns false when storage is empty', () => {
    const storage = new StorageStub();
    expect(hasSave(storage)).toBe(false);
  });

  it('hasSave returns true after a save', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    expect(hasSave(storage)).toBe(true);
  });

  it('hasSave returns false after clearSave', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    clearSave(storage);
    expect(hasSave(storage)).toBe(false);
  });
});

describe('loadGame with no save (fresh start)', () => {
  it('returns null without throwing when storage is empty', () => {
    const storage = new StorageStub();
    expect(() => loadGame(storage)).not.toThrow();
    expect(loadGame(storage)).toBeNull();
  });
});

describe('loadGame corruption handling', () => {
  it('returns null for malformed JSON without throwing', () => {
    const storage = new StorageStub();
    storage.setItem(SAVE_KEY, 'not-json{{{');
    expect(() => loadGame(storage)).not.toThrow();
    expect(loadGame(storage)).toBeNull();
  });

  it('returns null when required fields are missing', () => {
    const storage = new StorageStub();
    storage.setItem(SAVE_KEY, JSON.stringify({ credits: 100 }));
    expect(loadGame(storage)).toBeNull();
  });

  it('returns null when a numeric field is the wrong type', () => {
    const storage = new StorageStub();
    const bad = { ...fullState, credits: 'a lot' };
    storage.setItem(SAVE_KEY, JSON.stringify(bad));
    expect(loadGame(storage)).toBeNull();
  });

  it('returns null when unlockedWeapons is not an array', () => {
    const storage = new StorageStub();
    const bad = { ...fullState, unlockedWeapons: 'Plasma Cannon' };
    storage.setItem(SAVE_KEY, JSON.stringify(bad));
    expect(loadGame(storage)).toBeNull();
  });
});

describe('round-trip with zero/default values (fresh new game state)', () => {
  it('saves and restores a pristine game state (all zeros)', () => {
    const storage = new StorageStub();
    const pristine: GameSaveState = {
      credits: 0,
      sectorId: 1,
      health: 100,
      shield: 100,
      shieldUpgrade: 0,
      hullUpgrade: 0,
      engineThrustBonus: 0,
      engineSpeedBonus: 0,
      unlockedWeapons: [],
      laserAmmo: 30,
      chaingunAmmo: 120,
      missileAmmo: 8,
    };
    saveGame(pristine, storage);
    const loaded = loadGame(storage);
    expect(loaded).not.toBeNull();
    expect(loaded!.credits).toBe(0);
    expect(loaded!.unlockedWeapons).toEqual([]);
    expect(loaded!.sectorId).toBe(1);
    expect(loaded!.laserAmmo).toBe(30);
    expect(loaded!.chaingunAmmo).toBe(120);
    expect(loaded!.missileAmmo).toBe(8);
  });
});
