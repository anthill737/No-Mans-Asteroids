import { describe, it, expect } from 'vitest';
import {
  createLoadLastSaveHandler,
  createSaveNowHandler,
  saveGame,
  loadGame,
  clearSave,
  hasSave,
  SAVE_KEY,
  type GameSaveState,
} from './saveLoad';
import { AMMO_CAPACITY } from './ammoConfig';
import { composeShip, DEFAULT_SHIP_LOADOUT } from './shipParts';

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
  loadout: {
    cockpit: 'cockpit-razor',
    wings: 'wings-delta',
    hull: 'hull-spear',
  },
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
    expect(loaded!.loadout).toEqual(fullState.loadout);
  });

  it('round-trips a non-default loadout and reconstructs the composed ship with the same part IDs', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);

    const raw = storage.getItem(SAVE_KEY);
    expect(raw).not.toBeNull();
    expect(JSON.parse(raw!).loadout).toEqual(fullState.loadout);

    const loaded = loadGame(storage);
    expect(loaded).not.toBeNull();

    const ship = composeShip(
      loaded!.loadout.cockpit,
      loaded!.loadout.wings,
      loaded!.loadout.hull,
    );

    expect(ship.userData.shipLoadout).toEqual(fullState.loadout);
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

describe('manual save/load handlers', () => {
  it('Save Now writes the full current game-state blob to storage', () => {
    const storage = new StorageStub();
    const saveNow = createSaveNowHandler({
      getState: () => fullState,
      storage,
      now: () => new Date('2026-05-25T14:32:00'),
    });

    const result = saveNow();
    const raw = storage.getItem(SAVE_KEY);
    expect(raw).not.toBeNull();
    expect(result.savedAt.getHours()).toBe(14);
    expect(JSON.parse(raw!)).toEqual({
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
      loadout: {
        cockpit: 'cockpit-razor',
        wings: 'wings-delta',
        hull: 'hull-spear',
      },
    });
  });

  it('Load Last Save applies matching saved state without asking for confirmation', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    let applied: GameSaveState | null = null;
    let confirmCalls = 0;
    const loadLastSave = createLoadLastSaveHandler({
      getCurrentState: () => ({ ...fullState, unlockedWeapons: [...fullState.unlockedWeapons] }),
      applyState: (state) => { applied = state; },
      storage,
      confirmLoad: () => {
        confirmCalls++;
        return true;
      },
    });

    expect(loadLastSave()).toBe('loaded');
    expect(confirmCalls).toBe(0);
    expect(applied).toEqual(fullState);
  });

  it('Load Last Save confirms before replacing unsaved progress', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    let applied: GameSaveState | null = null;
    let confirmMessage = '';
    const loadLastSave = createLoadLastSaveHandler({
      getCurrentState: () => ({ ...fullState, credits: 9999 }),
      applyState: (state) => { applied = state; },
      storage,
      confirmLoad: (message) => {
        confirmMessage = message;
        return true;
      },
    });

    expect(loadLastSave()).toBe('loaded');
    expect(confirmMessage).toContain('Unsaved progress');
    expect(applied).toEqual(fullState);
  });

  it('Load Last Save leaves dirty state untouched when confirmation is cancelled', () => {
    const storage = new StorageStub();
    saveGame(fullState, storage);
    let applied = false;
    const loadLastSave = createLoadLastSaveHandler({
      getCurrentState: () => ({ ...fullState, sectorId: 99 }),
      applyState: () => { applied = true; },
      storage,
      confirmLoad: () => false,
    });

    expect(loadLastSave()).toBe('cancelled');
    expect(applied).toBe(false);
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

  it('defaults legacy saves without a loadout to Standard parts', () => {
    const storage = new StorageStub();
    const legacyState = { ...fullState };
    delete (legacyState as Partial<GameSaveState>).loadout;
    storage.setItem(SAVE_KEY, JSON.stringify(legacyState));

    const loaded = loadGame(storage);

    expect(loaded).not.toBeNull();
    expect(loaded!.loadout).toEqual(DEFAULT_SHIP_LOADOUT);
  });

  it('normalizes saves that used the previous loadout key names', () => {
    const storage = new StorageStub();
    const previousSchemaState = {
      ...fullState,
      loadout: {
        cockpitId: 'cockpit-twin-bubble',
        wingsId: 'wings-forked',
        hullId: 'hull-twin-boom',
      },
    };
    storage.setItem(SAVE_KEY, JSON.stringify(previousSchemaState));

    const loaded = loadGame(storage);

    expect(loaded).not.toBeNull();
    expect(loaded!.loadout).toEqual({
      cockpit: 'cockpit-twin-bubble',
      wings: 'wings-forked',
      hull: 'hull-twin-boom',
    });
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
      laserAmmo: AMMO_CAPACITY.laser,
      chaingunAmmo: AMMO_CAPACITY.chaingun,
      missileAmmo: AMMO_CAPACITY.missile,
      loadout: DEFAULT_SHIP_LOADOUT,
    };
    saveGame(pristine, storage);
    const loaded = loadGame(storage);
    expect(loaded).not.toBeNull();
    expect(loaded!.credits).toBe(0);
    expect(loaded!.unlockedWeapons).toEqual([]);
    expect(loaded!.sectorId).toBe(1);
    expect(loaded!.laserAmmo).toBe(AMMO_CAPACITY.laser);
    expect(loaded!.chaingunAmmo).toBe(AMMO_CAPACITY.chaingun);
    expect(loaded!.missileAmmo).toBe(AMMO_CAPACITY.missile);
    expect(loaded!.loadout).toEqual(DEFAULT_SHIP_LOADOUT);
  });
});
