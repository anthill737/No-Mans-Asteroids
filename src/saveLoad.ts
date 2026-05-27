import { DEFAULT_SHIP_LOADOUT, normalizeShipLoadout, type ShipLoadout, type ShipLoadoutInput } from './shipParts';

export const SAVE_KEY = 'spacegame_save_v1';

export interface GameSaveState {
  credits: number;
  sectorId: number;
  health: number;
  shield: number;
  /** Cumulative max-shield bonus above base (sum of all shield upgrade tiers purchased). */
  shieldUpgrade: number;
  /** Cumulative max-health bonus above base (sum of all hull upgrade tiers purchased). */
  hullUpgrade: number;
  engineThrustBonus: number;
  engineSpeedBonus: number;
  unlockedWeapons: string[];
  laserAmmo: number;
  chaingunAmmo: number;
  missileAmmo: number;
  loadout: ShipLoadout;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface ManualSaveResult {
  savedAt: Date;
  state: GameSaveState;
}

export type LoadLastSaveResult = 'loaded' | 'cancelled' | 'missing';

export interface SaveNowHandlerOptions {
  getState: () => GameSaveState;
  storage?: StorageLike;
  now?: () => Date;
}

export interface LoadLastSaveHandlerOptions {
  getCurrentState: () => GameSaveState;
  applyState: (state: GameSaveState) => void;
  storage?: StorageLike;
  confirmLoad?: (message: string) => boolean;
}

export function saveGame(state: GameSaveState, storage: StorageLike = localStorage): void {
  storage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function loadGame(storage: StorageLike = localStorage): GameSaveState | null {
  const raw = storage.getItem(SAVE_KEY);
  if (raw === null) return null;
  try {
    const p = JSON.parse(raw) as Partial<Omit<GameSaveState, 'loadout'> & { loadout?: ShipLoadoutInput }>;
    if (
      typeof p.credits !== 'number' ||
      typeof p.sectorId !== 'number' ||
      typeof p.health !== 'number' ||
      typeof p.shield !== 'number' ||
      typeof p.shieldUpgrade !== 'number' ||
      typeof p.hullUpgrade !== 'number' ||
      typeof p.engineThrustBonus !== 'number' ||
      typeof p.engineSpeedBonus !== 'number' ||
      !Array.isArray(p.unlockedWeapons) ||
      typeof p.laserAmmo !== 'number' ||
      typeof p.chaingunAmmo !== 'number' ||
      typeof p.missileAmmo !== 'number'
    ) {
      return null;
    }
    return {
      ...p,
      loadout: normalizeShipLoadout(p.loadout ?? DEFAULT_SHIP_LOADOUT),
    } as GameSaveState;
  } catch {
    return null;
  }
}

export function clearSave(storage: StorageLike = localStorage): void {
  storage.removeItem(SAVE_KEY);
}

export function hasSave(storage: StorageLike = localStorage): boolean {
  return storage.getItem(SAVE_KEY) !== null;
}

export function areSaveStatesEquivalent(a: GameSaveState, b: GameSaveState): boolean {
  return (
    a.credits === b.credits &&
    a.sectorId === b.sectorId &&
    a.health === b.health &&
    a.shield === b.shield &&
    a.shieldUpgrade === b.shieldUpgrade &&
    a.hullUpgrade === b.hullUpgrade &&
    a.engineThrustBonus === b.engineThrustBonus &&
    a.engineSpeedBonus === b.engineSpeedBonus &&
    a.laserAmmo === b.laserAmmo &&
    a.chaingunAmmo === b.chaingunAmmo &&
    a.missileAmmo === b.missileAmmo &&
    a.loadout.cockpit === b.loadout.cockpit &&
    a.loadout.wings === b.loadout.wings &&
    a.loadout.hull === b.loadout.hull &&
    a.unlockedWeapons.length === b.unlockedWeapons.length &&
    a.unlockedWeapons.every((weapon, index) => weapon === b.unlockedWeapons[index])
  );
}

export function createSaveNowHandler(options: SaveNowHandlerOptions): () => ManualSaveResult {
  return () => {
    const state = options.getState();
    const savedAt = options.now?.() ?? new Date();
    saveGame(state, options.storage);
    return { savedAt, state };
  };
}

export function createLoadLastSaveHandler(options: LoadLastSaveHandlerOptions): () => LoadLastSaveResult {
  return () => {
    const savedState = loadGame(options.storage);
    if (savedState === null) return 'missing';

    if (!areSaveStatesEquivalent(options.getCurrentState(), savedState)) {
      const confirmLoad = options.confirmLoad ?? ((message: string) => window.confirm(message));
      if (!confirmLoad('Load last save? Unsaved progress will be lost.')) {
        return 'cancelled';
      }
    }

    options.applyState(savedState);
    return 'loaded';
  };
}
