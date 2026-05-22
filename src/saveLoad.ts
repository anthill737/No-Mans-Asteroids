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
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function saveGame(state: GameSaveState, storage: StorageLike = localStorage): void {
  storage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function loadGame(storage: StorageLike = localStorage): GameSaveState | null {
  const raw = storage.getItem(SAVE_KEY);
  if (raw === null) return null;
  try {
    const p = JSON.parse(raw) as Partial<GameSaveState>;
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
    return p as GameSaveState;
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
