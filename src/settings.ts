import { Howler } from 'howler';
import { ENGINE_VOLUME_DEFAULT_SCALE, ENGINE_VOLUME_STORAGE_KEY } from './audio/engineAudio';
import {
  formatInputLabel,
  getControlActionLabel,
  getControlRows,
  getDefaultControlBindings,
  keyboardEventToInputId,
  loadControlBindings,
  resetControlBindings,
  saveControlBindings,
  setControlBinding,
  type BindingConflict,
  type ControlAction,
  type ControlBindings,
  type StorageLike,
} from './controlBindings';
import {
  DEFAULT_SHIP_LOADOUT,
  normalizeShipLoadout,
  PartVariantRegistry,
  SHIP_PART_SLOTS,
  type ShipLoadout,
  type ShipLoadoutInput,
  type ShipPartSlot,
} from './shipParts';

export const SETTINGS_KEY = 'Escape';
export const SETTINGS_KEY_LABEL = 'Esc';
export const SETTINGS_TABS = ['Sound', 'Controls', 'Ship', 'Save Game'] as const;
export const MASTER_VOLUME_STORAGE_KEY = 'space-game:settings:masterVolume';
export const SFX_VOLUME_STORAGE_KEY = 'space-game:settings:sfxVolume';

export type SettingsTab = typeof SETTINGS_TABS[number];
export type SoundVolumeCategory = 'master' | 'sfx' | 'engine';
type SettingsLoadLastSaveResult = 'loaded' | 'cancelled' | 'missing';

export const SOUND_VOLUME_CATEGORIES = ['master', 'sfx', 'engine'] as const;
export const SOUND_VOLUME_LABELS: Record<SoundVolumeCategory, string> = {
  master: 'Master',
  sfx: 'SFX',
  engine: 'Engine',
};
export const SOUND_VOLUME_STORAGE_KEYS: Record<SoundVolumeCategory, string> = {
  master: MASTER_VOLUME_STORAGE_KEY,
  sfx: SFX_VOLUME_STORAGE_KEY,
  engine: ENGINE_VOLUME_STORAGE_KEY,
};
export const SOUND_VOLUME_DEFAULTS: Record<SoundVolumeCategory, number> = {
  master: 100,
  sfx: 100,
  engine: Math.round(ENGINE_VOLUME_DEFAULT_SCALE * 100),
};

export interface SettingsState {
  isOpen: boolean;
  activeTab: SettingsTab;
}

export interface SettingsOverlay {
  readonly element: HTMLDivElement;
  readonly isOpen: boolean;
  readonly activeTab: SettingsTab;
  open(): void;
  close(): void;
  toggle(): void;
  selectTab(tab: SettingsTab): void;
}

export interface SettingsOverlayOptions {
  onOpen?: () => void;
  onClose?: () => void;
  onTabChange?: (tab: SettingsTab) => void;
  onSaveNow?: () => { savedAt: Date };
  onLoadLastSave?: () => SettingsLoadLastSaveResult;
  sound?: SoundSettingsControllerOptions;
  controlBindings?: ControlBindings;
  controlStorage?: StorageLike;
  onControlBindingsChange?: (bindings: ControlBindings) => void;
  ship?: ShipCustomizationOptions;
}

export interface ShipCustomizationOptions {
  getLoadout?: () => ShipLoadoutInput;
  onApplyLoadout?: (loadout: ShipLoadout) => ShipLoadoutInput | void;
}

export interface ShipVariantOptionModel {
  slot: ShipPartSlot;
  id: string;
  name: string;
  selected: boolean;
  available: true;
  costLabel: 'Free';
  previewClass: string;
}

export interface ShipSlotPickerModel {
  slot: ShipPartSlot;
  variants: ShipVariantOptionModel[];
}

export interface SoundVolumeStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface SoundVolumeLayer {
  setMasterVolume(scale: number): void;
  setSfxVolume(scale: number): void;
  setEngineVolume(scale: number): void;
}

export interface SoundVolumeHandlers {
  master?: (scale: number) => void;
  sfx?: (scale: number) => void;
  engine?: (scale: number) => void;
}

export interface SoundSettingsControllerOptions {
  storage?: SoundVolumeStorage;
  volumeLayer?: SoundVolumeLayer;
  volumeHandlers?: SoundVolumeHandlers;
  applyInitial?: boolean;
}

export interface SoundSettingsController {
  readonly preferences: Record<SoundVolumeCategory, number>;
  getVolume(category: SoundVolumeCategory): number;
  setVolume(category: SoundVolumeCategory, value: number): number;
}

export interface SoundVolumeSliderModel {
  category: SoundVolumeCategory;
  label: string;
  value: number;
  ariaLabel: string;
  min: number;
  max: number;
  step: number;
}

export function createSettingsState(
  activeTab: SettingsTab = 'Sound',
): SettingsState {
  return { isOpen: false, activeTab };
}

export function isSettingsToggleKey(key: string): boolean {
  return key === SETTINGS_KEY;
}

export function isGameplayInputPaused(state: Pick<SettingsState, 'isOpen'>): boolean {
  return state.isOpen;
}

const SHIP_SLOT_LOADOUT_KEYS: Record<ShipPartSlot, keyof ShipLoadout> = {
  Cockpit: 'cockpit',
  Wings: 'wings',
  Hull: 'hull',
};

function getShipPreviewClass(variantId: string): string {
  return `settings-ship-preview--${variantId}`;
}

export function getShipCustomizationPickerModels(
  loadout: ShipLoadoutInput = DEFAULT_SHIP_LOADOUT,
): ShipSlotPickerModel[] {
  const normalized = normalizeShipLoadout(loadout);
  const selectedBySlot: Record<ShipPartSlot, string> = {
    Cockpit: normalized.cockpit,
    Wings: normalized.wings,
    Hull: normalized.hull,
  };

  return SHIP_PART_SLOTS.map((slot) => ({
    slot,
    variants: PartVariantRegistry[slot].map((variant) => ({
      slot,
      id: variant.id,
      name: variant.name,
      selected: variant.id === selectedBySlot[slot],
      available: true,
      costLabel: 'Free',
      previewClass: getShipPreviewClass(variant.id),
    })),
  }));
}

function getDefaultVolumeStorage(): SoundVolumeStorage | undefined {
  return typeof localStorage === 'undefined' ? undefined : localStorage;
}

export function clampVolumePercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function volumePercentToScale(value: number): number {
  return clampVolumePercent(value) / 100;
}

function parseStoredVolumePercent(rawValue: string | null): number | null {
  if (rawValue === null) return null;
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) return null;
  return clampVolumePercent(parsed >= 0 && parsed <= 1 ? parsed * 100 : parsed);
}

export function readSoundVolumePreference(
  category: SoundVolumeCategory,
  storage: SoundVolumeStorage | undefined = getDefaultVolumeStorage(),
): number {
  if (!storage) return SOUND_VOLUME_DEFAULTS[category];

  try {
    return parseStoredVolumePercent(storage.getItem(SOUND_VOLUME_STORAGE_KEYS[category])) ??
      SOUND_VOLUME_DEFAULTS[category];
  } catch {
    return SOUND_VOLUME_DEFAULTS[category];
  }
}

export function writeSoundVolumePreference(
  category: SoundVolumeCategory,
  value: number,
  storage: SoundVolumeStorage | undefined = getDefaultVolumeStorage(),
): number {
  const clamped = clampVolumePercent(value);
  if (storage) {
    try {
      storage.setItem(SOUND_VOLUME_STORAGE_KEYS[category], String(clamped));
    } catch {
      // Storage can be unavailable in private browsing; live audio still changes.
    }
  }
  return clamped;
}

export function createHowlerSoundVolumeLayer(
  handlers: SoundVolumeHandlers = {},
): SoundVolumeLayer {
  return {
    setMasterVolume(scale: number) {
      Howler.volume(scale);
      handlers.master?.(scale);
    },
    setSfxVolume(scale: number) {
      handlers.sfx?.(scale);
    },
    setEngineVolume(scale: number) {
      handlers.engine?.(scale);
    },
  };
}

export function applySoundVolumePreference(
  category: SoundVolumeCategory,
  value: number,
  volumeLayer: SoundVolumeLayer = createHowlerSoundVolumeLayer(),
): number {
  const clamped = clampVolumePercent(value);
  const scale = volumePercentToScale(clamped);

  if (category === 'master') volumeLayer.setMasterVolume(scale);
  else if (category === 'sfx') volumeLayer.setSfxVolume(scale);
  else volumeLayer.setEngineVolume(scale);

  return clamped;
}

export function loadSoundVolumePreferences(
  storage: SoundVolumeStorage | undefined = getDefaultVolumeStorage(),
): Record<SoundVolumeCategory, number> {
  return {
    master: readSoundVolumePreference('master', storage),
    sfx: readSoundVolumePreference('sfx', storage),
    engine: readSoundVolumePreference('engine', storage),
  };
}

export function createSoundSettingsController(
  options: SoundSettingsControllerOptions = {},
): SoundSettingsController {
  const storage = options.storage ?? getDefaultVolumeStorage();
  const volumeLayer = options.volumeLayer ?? createHowlerSoundVolumeLayer(options.volumeHandlers);
  const preferences = loadSoundVolumePreferences(storage);

  const controller: SoundSettingsController = {
    get preferences() {
      return { ...preferences };
    },
    getVolume(category: SoundVolumeCategory) {
      return preferences[category];
    },
    setVolume(category: SoundVolumeCategory, value: number) {
      const clamped = writeSoundVolumePreference(category, value, storage);
      preferences[category] = clamped;
      applySoundVolumePreference(category, clamped, volumeLayer);
      return clamped;
    },
  };

  if (options.applyInitial !== false) {
    for (const category of SOUND_VOLUME_CATEGORIES) {
      applySoundVolumePreference(category, preferences[category], volumeLayer);
    }
  }

  return controller;
}

export function getSoundVolumeSliderModels(
  controller: Pick<SoundSettingsController, 'getVolume'>,
): SoundVolumeSliderModel[] {
  return SOUND_VOLUME_CATEGORIES.map((category) => ({
    category,
    label: SOUND_VOLUME_LABELS[category],
    value: controller.getVolume(category),
    ariaLabel: `${SOUND_VOLUME_LABELS[category]} volume`,
    min: 0,
    max: 100,
    step: 1,
  }));
}

function applyStyles(el: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
  Object.assign(el.style, styles);
}

function ensureSettingsStyles(): void {
  if (document.getElementById('settings-menu-style')) return;

  const style = document.createElement('style');
  style.id = 'settings-menu-style';
  style.textContent = `
    .settings-menu-root {
      align-items: center;
      background:
        linear-gradient(180deg, rgba(8, 12, 18, 0.72), rgba(4, 5, 8, 0.86)),
        radial-gradient(circle at 50% 20%, rgba(255, 172, 86, 0.18), transparent 38%);
      color: #e9f7ef;
      display: none;
      font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
      inset: 0;
      justify-content: center;
      padding: 28px;
      position: fixed;
      z-index: 500;
    }

    .settings-menu-root.is-open {
      display: flex;
    }

    .settings-panel {
      background: linear-gradient(180deg, rgba(25, 31, 38, 0.96), rgba(12, 15, 20, 0.98));
      border: 2px solid #b78a42;
      box-shadow: 0 0 0 3px rgba(31, 41, 45, 0.9), 0 18px 60px rgba(0, 0, 0, 0.55);
      clip-path: polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px);
      max-width: 760px;
      min-height: 440px;
      width: min(760px, 100%);
    }

    .settings-header {
      align-items: center;
      border-bottom: 1px solid rgba(183, 138, 66, 0.65);
      display: flex;
      gap: 18px;
      justify-content: space-between;
      padding: 18px 20px;
    }

    .settings-title {
      color: #ffd58d;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    .settings-key {
      color: #93d7c5;
      font-size: 13px;
      margin-top: 4px;
    }

    .settings-close {
      background: #2f1f1b;
      border: 1px solid #e0a15e;
      color: #ffe1b3;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      height: 36px;
      min-width: 80px;
    }

    .settings-body {
      display: grid;
      gap: 0;
      grid-template-columns: 190px 1fr;
      min-height: 360px;
    }

    .settings-tabs {
      background: rgba(6, 13, 16, 0.7);
      border-right: 1px solid rgba(183, 138, 66, 0.45);
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 18px 14px;
    }

    .settings-tab {
      background: #111d22;
      border: 1px solid rgba(112, 152, 137, 0.65);
      color: #bfe9db;
      cursor: pointer;
      font: inherit;
      height: 42px;
      text-align: left;
      padding: 0 12px;
    }

    .settings-tab.is-active {
      background: #27351f;
      border-color: #d8a54f;
      color: #ffd58d;
      box-shadow: inset 4px 0 0 #d8a54f;
    }

    .settings-content {
      padding: 24px;
    }

    .settings-content h2 {
      color: #ffd58d;
      font-size: 18px;
      letter-spacing: 0;
      margin: 0 0 14px;
      text-transform: uppercase;
    }

    .settings-content p,
    .settings-content li {
      color: #c8d8d2;
      font-size: 14px;
      line-height: 1.55;
    }

    .settings-content ul {
      margin: 0;
      padding-left: 18px;
    }

    .settings-controls-list {
      display: grid;
      gap: 8px;
    }

    .settings-control-row {
      align-items: center;
      background: rgba(8, 18, 20, 0.7);
      border: 1px solid rgba(112, 152, 137, 0.42);
      color: #d7eee6;
      display: grid;
      font: inherit;
      gap: 12px;
      grid-template-columns: minmax(150px, 1fr) 150px;
      min-height: 42px;
      padding: 8px 10px;
      text-align: left;
      width: 100%;
    }

    button.settings-control-row {
      cursor: pointer;
    }

    button.settings-control-row:hover,
    button.settings-control-row.is-waiting {
      border-color: #ffd58d;
      color: #fff4d3;
    }

    .settings-control-binding {
      color: #ffd58d;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .settings-control-note {
      color: #93d7c5;
      font-size: 12px;
      grid-column: 1 / -1;
    }

    .settings-controls-error {
      color: #ff9a8c;
      font-size: 13px;
      margin: 0 0 12px;
      min-height: 20px;
    }

    .settings-controls-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }

    .settings-reset {
      background: #2f1f1b;
      border: 1px solid #e0a15e;
      color: #ffe1b3;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      min-height: 36px;
      padding: 0 12px;
    }

    .settings-sound-panel {
      display: flex;
      flex-direction: column;
      gap: 18px;
      max-width: 430px;
    }

    .settings-volume-row {
      display: grid;
      gap: 10px;
      grid-template-columns: 92px minmax(0, 1fr) 52px;
      align-items: center;
    }

    .settings-volume-label {
      color: #dffbf0;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .settings-volume-slider {
      accent-color: #d8a54f;
      cursor: pointer;
      width: 100%;
    }

    .settings-volume-value {
      color: #ffd58d;
      font-size: 15px;
      font-weight: 800;
      text-align: right;
    }

    .settings-save-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 360px;
    }

    .settings-save-actions {
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .settings-action {
      background: #17282b;
      border: 1px solid rgba(147, 215, 197, 0.8);
      color: #dffbf0;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      min-height: 44px;
      padding: 0 12px;
    }

    .settings-action:hover,
    .settings-action:focus-visible {
      background: #20383a;
      border-color: #ffd58d;
      color: #ffd58d;
      outline: none;
    }

    .settings-action.is-danger {
      background: #2b1c1a;
      border-color: rgba(224, 161, 94, 0.9);
      color: #ffe1b3;
    }

    .settings-save-status {
      color: #93d7c5;
      font-size: 14px;
      min-height: 24px;
      opacity: 0;
      transition: opacity 360ms ease;
    }

    .settings-save-status.is-visible {
      opacity: 1;
    }

    .settings-save-status[data-tone="warning"] {
      color: #ffd58d;
    }

    .settings-save-status[data-tone="danger"] {
      color: #ffb3a5;
    }

    .settings-ship-panel {
      display: grid;
      gap: 14px;
    }

    .settings-ship-slots {
      display: grid;
      gap: 12px;
    }

    .settings-ship-slot {
      background: rgba(8, 18, 20, 0.58);
      border: 1px solid rgba(112, 152, 137, 0.42);
      padding: 10px;
    }

    .settings-ship-slot-title {
      color: #dffbf0;
      font-size: 13px;
      font-weight: 800;
      margin: 0 0 8px;
      text-transform: uppercase;
    }

    .settings-ship-variants {
      display: grid;
      gap: 8px;
    }

    .settings-ship-variant {
      align-items: center;
      background: #101b20;
      border: 1px solid rgba(112, 152, 137, 0.65);
      color: #d7eee6;
      cursor: pointer;
      display: grid;
      font: inherit;
      gap: 10px;
      grid-template-columns: 72px minmax(0, 1fr) 54px;
      min-height: 52px;
      padding: 6px 8px;
      text-align: left;
      width: 100%;
    }

    .settings-ship-variant:hover,
    .settings-ship-variant:focus-visible {
      border-color: #ffd58d;
      color: #fff4d3;
      outline: none;
    }

    .settings-ship-variant.is-selected {
      background: #27351f;
      border-color: #d8a54f;
      box-shadow: inset 4px 0 0 #d8a54f;
      color: #ffd58d;
    }

    .settings-ship-preview {
      background:
        linear-gradient(180deg, rgba(36, 48, 52, 0.96), rgba(10, 15, 18, 0.96));
      border: 1px solid rgba(147, 215, 197, 0.55);
      display: block;
      height: 38px;
      overflow: hidden;
      position: relative;
      width: 58px;
    }

    .settings-ship-preview span {
      background: #88a0aa;
      display: block;
      position: absolute;
    }

    .settings-ship-preview-mark-1 {
      height: 18px;
      left: 22px;
      top: 10px;
      width: 14px;
    }

    .settings-ship-preview-mark-2 {
      height: 8px;
      left: 8px;
      top: 15px;
      width: 16px;
    }

    .settings-ship-preview-mark-3 {
      height: 8px;
      right: 8px;
      top: 15px;
      width: 16px;
    }

    .settings-ship-preview-mark-4 {
      background: #ff7a2c;
      height: 5px;
      left: 25px;
      top: 29px;
      width: 8px;
    }

    .settings-ship-preview--cockpit-standard .settings-ship-preview-mark-1 {
      background: #44aaff;
      border-radius: 50% 50% 20% 20%;
      height: 22px;
      left: 19px;
      top: 8px;
      width: 20px;
    }

    .settings-ship-preview--cockpit-razor .settings-ship-preview-mark-1 {
      background: #44aaff;
      clip-path: polygon(50% 0, 100% 72%, 50% 100%, 0 72%);
      height: 26px;
      left: 17px;
      top: 6px;
      width: 24px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-1,
    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-2 {
      background: #44aaff;
      border-radius: 50%;
      height: 18px;
      top: 10px;
      width: 18px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-1 {
      left: 13px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-2 {
      left: 28px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-3 {
      background: #445566;
      height: 24px;
      left: 27px;
      top: 7px;
      width: 4px;
    }

    .settings-ship-preview--wings-standard .settings-ship-preview-mark-1 {
      height: 24px;
      left: 25px;
      top: 7px;
      width: 8px;
    }

    .settings-ship-preview--wings-standard .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-standard .settings-ship-preview-mark-3 {
      background: #445566;
      height: 12px;
      top: 14px;
      width: 22px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-delta .settings-ship-preview-mark-3 {
      background: #445566;
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
      height: 28px;
      top: 5px;
      width: 25px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-2 {
      left: 4px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-3 {
      right: 4px;
      transform: scaleX(-1);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-forked .settings-ship-preview-mark-3,
    .settings-ship-preview--wings-forked .settings-ship-preview-mark-4 {
      background: #445566;
      height: 7px;
      width: 21px;
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-2 {
      left: 6px;
      top: 9px;
      transform: rotate(-12deg);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-3 {
      right: 6px;
      top: 9px;
      transform: rotate(12deg);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-4 {
      left: 19px;
      top: 23px;
      width: 20px;
    }

    .settings-ship-preview--hull-standard .settings-ship-preview-mark-1 {
      height: 25px;
      left: 24px;
      top: 7px;
      width: 10px;
    }

    .settings-ship-preview--hull-standard .settings-ship-preview-mark-2 {
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      height: 12px;
      left: 21px;
      top: 3px;
      width: 16px;
    }

    .settings-ship-preview--hull-spear .settings-ship-preview-mark-1 {
      clip-path: polygon(50% 0, 100% 28%, 72% 100%, 28% 100%, 0 28%);
      height: 31px;
      left: 22px;
      top: 4px;
      width: 14px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-1 {
      height: 28px;
      left: 26px;
      top: 5px;
      width: 6px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-2,
    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-3 {
      height: 25px;
      top: 8px;
      width: 8px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-2 {
      left: 13px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-3 {
      right: 13px;
    }

    .settings-ship-name {
      overflow-wrap: anywhere;
    }

    .settings-ship-cost {
      color: #93d7c5;
      font-size: 12px;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .settings-ship-actions {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .settings-ship-status {
      color: #93d7c5;
      font-size: 13px;
      min-height: 20px;
    }

    @media (max-width: 640px) {
      .settings-menu-root {
        padding: 14px;
      }

      .settings-body {
        grid-template-columns: 1fr;
      }

      .settings-tabs {
        border-right: 0;
        border-bottom: 1px solid rgba(183, 138, 66, 0.45);
        flex-direction: row;
        overflow-x: auto;
      }

      .settings-tab {
        min-width: 130px;
      }

      .settings-save-actions {
        grid-template-columns: 1fr;
      }

      .settings-ship-actions {
        grid-template-columns: 1fr;
      }

      .settings-volume-row {
        grid-template-columns: 1fr 52px;
      }

      .settings-volume-label {
        grid-column: 1 / -1;
      }
    }
  `;
  document.head.appendChild(style);
}

function formatManualSaveTime(date: Date): string {
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function renderSoundContent(
  container: HTMLElement,
  controller: SoundSettingsController,
): void {
  container.innerHTML = '';

  const panel = document.createElement('div');
  panel.className = 'settings-sound-panel';

  const heading = document.createElement('h2');
  heading.textContent = 'Sound';
  panel.appendChild(heading);

  for (const model of getSoundVolumeSliderModels(controller)) {
    const row = document.createElement('label');
    row.className = 'settings-volume-row';

    const label = document.createElement('span');
    label.className = 'settings-volume-label';
    label.textContent = model.label;

    const slider = document.createElement('input');
    slider.className = 'settings-volume-slider';
    slider.type = 'range';
    slider.min = String(model.min);
    slider.max = String(model.max);
    slider.step = String(model.step);
    slider.value = String(model.value);
    slider.setAttribute('aria-label', model.ariaLabel);

    const value = document.createElement('span');
    value.className = 'settings-volume-value';
    value.textContent = slider.value;

    slider.addEventListener('input', () => {
      const nextValue = controller.setVolume(model.category, Number(slider.value));
      value.textContent = String(nextValue);
      slider.value = String(nextValue);
    });

    row.append(label, slider, value);
    panel.appendChild(row);
  }

  container.appendChild(panel);
}

function renderSaveGameContent(container: HTMLElement, options: SettingsOverlayOptions): void {
  container.innerHTML = '';

  const panel = document.createElement('div');
  panel.className = 'settings-save-panel';

  const heading = document.createElement('h2');
  heading.textContent = 'Save Game';

  const actions = document.createElement('div');
  actions.className = 'settings-save-actions';

  const saveButton = document.createElement('button');
  saveButton.className = 'settings-action';
  saveButton.type = 'button';
  saveButton.textContent = 'Save Now';

  const loadButton = document.createElement('button');
  loadButton.className = 'settings-action is-danger';
  loadButton.type = 'button';
  loadButton.textContent = 'Load Last Save';

  const status = document.createElement('div');
  status.className = 'settings-save-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  let fadeTimer: number | undefined;
  let clearTimer: number | undefined;
  const showStatus = (message: string, tone: 'success' | 'warning' | 'danger' = 'success'): void => {
    if (fadeTimer !== undefined) window.clearTimeout(fadeTimer);
    if (clearTimer !== undefined) window.clearTimeout(clearTimer);
    status.textContent = message;
    status.dataset.tone = tone;
    status.classList.add('is-visible');
    fadeTimer = window.setTimeout(() => {
      status.classList.remove('is-visible');
    }, 2800);
    clearTimer = window.setTimeout(() => {
      status.textContent = '';
    }, 3300);
  };

  saveButton.addEventListener('click', () => {
    if (!options.onSaveNow) {
      showStatus('Save unavailable', 'warning');
      return;
    }

    const result = options.onSaveNow();
    showStatus(`Saved at ${formatManualSaveTime(result.savedAt)}`);
  });

  loadButton.addEventListener('click', () => {
    if (!options.onLoadLastSave) {
      showStatus('Load unavailable', 'warning');
      return;
    }

    const result = options.onLoadLastSave();
    const messages: Record<SettingsLoadLastSaveResult, { text: string; tone: 'success' | 'warning' | 'danger' }> = {
      loaded: { text: 'Loaded last save', tone: 'success' },
      cancelled: { text: 'Load cancelled', tone: 'warning' },
      missing: { text: 'No save found', tone: 'danger' },
    };
    showStatus(messages[result].text, messages[result].tone);
  });

  actions.append(saveButton, loadButton);
  panel.append(heading, actions, status);
  container.appendChild(panel);
}

interface ControlsRenderOptions {
  bindings: ControlBindings;
  waitingAction: ControlAction | null;
  errorMessage: string;
  onStartRebind: (action: ControlAction) => void;
  onReset: () => void;
}

function renderControlsContent(container: HTMLElement, options: ControlsRenderOptions): void {
  container.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = 'Controls';
  container.appendChild(heading);

  const error = document.createElement('div');
  error.className = 'settings-controls-error';
  error.setAttribute('role', 'status');
  error.setAttribute('aria-live', 'polite');
  error.textContent = options.errorMessage;
  container.appendChild(error);

  const list = document.createElement('div');
  list.className = 'settings-controls-list';

  for (const row of getControlRows(options.bindings)) {
    const rowEl = document.createElement(row.remappable ? 'button' : 'div');
    rowEl.className = 'settings-control-row';
    rowEl.setAttribute('data-control-action', row.id);

    if (row.remappable) {
      const action = row.id as ControlAction;
      const button = rowEl as HTMLButtonElement;
      button.type = 'button';
      button.classList.toggle('is-waiting', options.waitingAction === action);
      button.addEventListener('click', () => options.onStartRebind(action));
    }

    const label = document.createElement('span');
    label.textContent = row.label;
    const binding = document.createElement('span');
    binding.className = 'settings-control-binding';
    binding.textContent = row.remappable && options.waitingAction === row.id
      ? 'Press key'
      : row.remappable
        ? formatInputLabel(row.binding)
        : row.binding;

    rowEl.append(label, binding);

    if (row.note) {
      const note = document.createElement('span');
      note.className = 'settings-control-note';
      note.textContent = row.note;
      rowEl.appendChild(note);
    }

    list.appendChild(rowEl);
  }

  const actions = document.createElement('div');
  actions.className = 'settings-controls-actions';
  const reset = document.createElement('button');
  reset.className = 'settings-reset';
  reset.type = 'button';
  reset.textContent = 'Reset to defaults';
  reset.addEventListener('click', options.onReset);
  actions.appendChild(reset);

  container.append(list, actions);
}

interface ShipRenderOptions {
  pendingLoadout: ShipLoadout;
  statusMessage: string;
  onSelectVariant: (slot: ShipPartSlot, variantId: string) => void;
  onApply: () => void;
  onRevert: () => void;
  onCancel: () => void;
}

function createShipPreview(option: ShipVariantOptionModel): HTMLSpanElement {
  const preview = document.createElement('span');
  preview.className = `settings-ship-preview ${option.previewClass}`;
  preview.dataset.slot = option.slot;
  preview.dataset.variantId = option.id;
  preview.setAttribute('aria-hidden', 'true');

  for (let i = 1; i <= 4; i++) {
    const mark = document.createElement('span');
    mark.className = `settings-ship-preview-mark-${i}`;
    preview.appendChild(mark);
  }

  return preview;
}

function renderShipContent(container: HTMLElement, options: ShipRenderOptions): void {
  container.innerHTML = '';

  const panel = document.createElement('div');
  panel.className = 'settings-ship-panel';

  const heading = document.createElement('h2');
  heading.textContent = 'Ship';

  const slots = document.createElement('div');
  slots.className = 'settings-ship-slots';

  for (const picker of getShipCustomizationPickerModels(options.pendingLoadout)) {
    const section = document.createElement('section');
    section.className = 'settings-ship-slot';

    const title = document.createElement('h3');
    title.className = 'settings-ship-slot-title';
    title.textContent = picker.slot;

    const variants = document.createElement('div');
    variants.className = 'settings-ship-variants';

    for (const variant of picker.variants) {
      const button = document.createElement('button');
      button.className = 'settings-ship-variant';
      button.classList.toggle('is-selected', variant.selected);
      button.type = 'button';
      button.dataset.shipSlot = variant.slot;
      button.dataset.shipVariant = variant.id;
      button.setAttribute('aria-pressed', String(variant.selected));
      button.addEventListener('click', () => options.onSelectVariant(variant.slot, variant.id));

      const name = document.createElement('span');
      name.className = 'settings-ship-name';
      name.textContent = variant.name;

      const cost = document.createElement('span');
      cost.className = 'settings-ship-cost';
      cost.textContent = variant.costLabel;

      button.append(createShipPreview(variant), name, cost);
      variants.appendChild(button);
    }

    section.append(title, variants);
    slots.appendChild(section);
  }

  const actions = document.createElement('div');
  actions.className = 'settings-ship-actions';

  const apply = document.createElement('button');
  apply.className = 'settings-action';
  apply.type = 'button';
  apply.textContent = 'Apply';
  apply.addEventListener('click', options.onApply);

  const revert = document.createElement('button');
  revert.className = 'settings-action is-danger';
  revert.type = 'button';
  revert.textContent = 'Revert';
  revert.addEventListener('click', options.onRevert);

  const cancel = document.createElement('button');
  cancel.className = 'settings-action is-danger';
  cancel.type = 'button';
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', options.onCancel);

  actions.append(apply, revert, cancel);

  const status = document.createElement('div');
  status.className = 'settings-ship-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.textContent = options.statusMessage;

  panel.append(heading, slots, actions, status);
  container.appendChild(panel);
}

function renderTabContent(
  container: HTMLElement,
  tab: SettingsTab,
  options: SettingsOverlayOptions,
  soundController: SoundSettingsController,
  controlsOptions: ControlsRenderOptions,
  shipOptions: ShipRenderOptions,
): void {
  if (tab === 'Sound') {
    renderSoundContent(container, soundController);
    return;
  }

  if (tab === 'Controls') {
    renderControlsContent(container, controlsOptions);
    return;
  }

  if (tab === 'Ship') {
    renderShipContent(container, shipOptions);
    return;
  }

  if (tab === 'Save Game') {
    renderSaveGameContent(container, options);
    return;
  }

  const copy: Record<SettingsTab, string> = {
    Sound: '',
    Controls: '',
    Ship: '',
    'Save Game': '',
  };
  container.innerHTML = copy[tab];
}

export function createSettingsOverlay(
  options: SettingsOverlayOptions = {},
): SettingsOverlay {
  ensureSettingsStyles();

  const state = createSettingsState();
  const soundController = createSoundSettingsController(options.sound);
  const controlStorage = options.controlStorage;
  let controlBindings = options.controlBindings
    ? { ...options.controlBindings }
    : controlStorage
      ? loadControlBindings(controlStorage)
      : getDefaultControlBindings();
  let waitingAction: ControlAction | null = null;
  let controlError = '';
  let pendingShipLoadout: ShipLoadout | null = null;
  let shipStatus = '';
  const root = document.createElement('div');
  root.className = 'settings-menu-root';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Settings menu');

  const panel = document.createElement('section');
  panel.className = 'settings-panel';

  const header = document.createElement('header');
  header.className = 'settings-header';

  const titleWrap = document.createElement('div');
  const title = document.createElement('div');
  title.className = 'settings-title';
  title.textContent = 'Settings';
  const keyHint = document.createElement('div');
  keyHint.className = 'settings-key';
  keyHint.textContent = `${SETTINGS_KEY_LABEL} toggles menu. Click the canvas after closing to resume mouse flight.`;
  titleWrap.append(title, keyHint);

  const closeButton = document.createElement('button');
  closeButton.className = 'settings-close';
  closeButton.type = 'button';
  closeButton.textContent = 'Close';

  header.append(titleWrap, closeButton);

  const body = document.createElement('div');
  body.className = 'settings-body';
  const tabList = document.createElement('nav');
  tabList.className = 'settings-tabs';
  tabList.setAttribute('aria-label', 'Settings sections');
  const content = document.createElement('div');
  content.className = 'settings-content';

  const tabButtons = new Map<SettingsTab, HTMLButtonElement>();
  for (const tab of SETTINGS_TABS) {
    const button = document.createElement('button');
    button.className = 'settings-tab';
    button.type = 'button';
    button.textContent = tab;
    button.addEventListener('click', () => overlay.selectTab(tab));
    tabButtons.set(tab, button);
    tabList.appendChild(button);
  }

  body.append(tabList, content);
  panel.append(header, body);
  root.appendChild(panel);

  closeButton.addEventListener('click', () => overlay.close());

  const updateControlBindings = (bindings: ControlBindings): void => {
    controlBindings = { ...bindings };
    if (controlStorage) saveControlBindings(controlBindings, controlStorage);
    else saveControlBindings(controlBindings);
    options.onControlBindingsChange?.(controlBindings);
  };

  const describeConflict = (action: ControlAction, conflict: BindingConflict): string => (
    `${formatInputLabel(conflict.binding)} is already assigned to ${conflict.label}; ${getControlActionLabel(action)} was not changed.`
  );

  const getCurrentShipLoadout = (): ShipLoadout => (
    normalizeShipLoadout(options.ship?.getLoadout?.() ?? DEFAULT_SHIP_LOADOUT)
  );

  const resetPendingShipLoadout = (): void => {
    pendingShipLoadout = getCurrentShipLoadout();
  };

  const discardPendingShipLoadout = (): void => {
    pendingShipLoadout = null;
    shipStatus = '';
  };

  const sync = (): void => {
    root.classList.toggle('is-open', state.isOpen);
    root.setAttribute('aria-hidden', String(!state.isOpen));
    applyStyles(root, { pointerEvents: state.isOpen ? 'auto' : 'none' });

    for (const [tab, button] of tabButtons) {
      const active = tab === state.activeTab;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    }
    renderTabContent(content, state.activeTab, options, soundController, {
      bindings: controlBindings,
      waitingAction,
      errorMessage: controlError,
      onStartRebind: (action) => {
        waitingAction = action;
        controlError = '';
        sync();
      },
      onReset: () => {
        waitingAction = null;
        controlError = '';
        const defaults = controlStorage
          ? resetControlBindings(controlStorage)
          : resetControlBindings();
        controlBindings = defaults;
        options.onControlBindingsChange?.(controlBindings);
        sync();
      },
    }, {
      pendingLoadout: pendingShipLoadout ?? getCurrentShipLoadout(),
      statusMessage: shipStatus,
      onSelectVariant: (slot, variantId) => {
        const loadout = pendingShipLoadout ?? getCurrentShipLoadout();
        pendingShipLoadout = {
          ...loadout,
          [SHIP_SLOT_LOADOUT_KEYS[slot]]: variantId,
        };
        shipStatus = '';
        sync();
      },
      onApply: () => {
        const loadout = pendingShipLoadout ?? getCurrentShipLoadout();
        if (!options.ship?.onApplyLoadout) {
          shipStatus = 'Ship apply unavailable';
          sync();
          return;
        }

        const applied = options.ship.onApplyLoadout(loadout);
        pendingShipLoadout = normalizeShipLoadout(applied ?? loadout);
        shipStatus = 'Applied and saved';
        sync();
      },
      onRevert: () => {
        resetPendingShipLoadout();
        shipStatus = 'Reverted';
        sync();
      },
      onCancel: () => {
        discardPendingShipLoadout();
        overlay.close();
      },
    });
  };

  const onCaptureKeyDown = (event: KeyboardEvent): void => {
    if (!waitingAction) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    const action = waitingAction;
    const input = keyboardEventToInputId(event);
    const result = setControlBinding(controlBindings, action, input);
    waitingAction = null;

    if (result.success) {
      controlError = '';
      updateControlBindings(result.bindings);
    } else {
      controlError = describeConflict(action, result.conflict);
    }

    sync();
  };
  document.addEventListener('keydown', onCaptureKeyDown, true);

  const overlay: SettingsOverlay = {
    element: root,
    get isOpen() {
      return state.isOpen;
    },
    get activeTab() {
      return state.activeTab;
    },
    open() {
      if (state.isOpen) return;
      if (state.activeTab === 'Ship') resetPendingShipLoadout();
      state.isOpen = true;
      sync();
      options.onOpen?.();
    },
    close() {
      if (!state.isOpen) return;
      state.isOpen = false;
      sync();
      if (state.activeTab === 'Ship') discardPendingShipLoadout();
      options.onClose?.();
    },
    toggle() {
      if (state.isOpen) this.close();
      else this.open();
    },
    selectTab(tab: SettingsTab) {
      if (state.activeTab === tab) return;
      if (state.activeTab === 'Ship') discardPendingShipLoadout();
      state.activeTab = tab;
      if (tab === 'Ship') resetPendingShipLoadout();
      sync();
      options.onTabChange?.(tab);
    },
  };

  sync();
  document.body.appendChild(root);
  return overlay;
}
