import { describe, expect, it, vi } from 'vitest';

const { mockHowlerVolume } = vi.hoisted(() => ({
  mockHowlerVolume: vi.fn(),
}));

vi.mock('howler', () => ({
  Howler: {
    volume: mockHowlerVolume,
  },
}));

import { ENGINE_VOLUME_DEFAULT_SCALE } from './audio/engineAudio';
import { SAVE_KEY } from './saveLoad';
import {
  createHowlerSoundVolumeLayer,
  createSettingsState,
  createSoundSettingsController,
  getShipCustomizationPickerModels,
  getSoundVolumeSliderModels,
  isGameplayInputPaused,
  isSettingsToggleKey,
  MASTER_VOLUME_STORAGE_KEY,
  SETTINGS_KEY,
  SETTINGS_KEY_LABEL,
  SETTINGS_TABS,
  SFX_VOLUME_STORAGE_KEY,
  SOUND_VOLUME_DEFAULTS,
  SOUND_VOLUME_STORAGE_KEYS,
  writeSoundVolumePreference,
} from './settings';
import { DEFAULT_SHIP_LOADOUT, SHIP_PART_SLOTS } from './shipParts';

function createMemoryStorage(initial: Record<string, string> = {}) {
  const data = { ...initial };
  return {
    data,
    getItem: vi.fn((key: string) => data[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      data[key] = value;
    }),
  };
}

describe('settings menu foundation', () => {
  it('documents Escape as the settings toggle key', () => {
    expect(SETTINGS_KEY).toBe('Escape');
    expect(SETTINGS_KEY_LABEL).toBe('Esc');
    expect(isSettingsToggleKey('Escape')).toBe(true);
    expect(isSettingsToggleKey('F5')).toBe(false);
  });

  it('scaffolds the required tab sections', () => {
    expect(SETTINGS_TABS).toEqual(['Sound', 'Controls', 'Ship', 'Save Game']);
  });

  it('treats an open settings menu as paused gameplay input', () => {
    const state = createSettingsState();
    expect(isGameplayInputPaused(state)).toBe(false);

    state.isOpen = true;
    expect(isGameplayInputPaused(state)).toBe(true);
  });
});

describe('settings ship customization models', () => {
  it('builds free unlocked pickers for every ship slot', () => {
    const pickers = getShipCustomizationPickerModels(DEFAULT_SHIP_LOADOUT);

    expect(pickers.map((picker) => picker.slot)).toEqual([...SHIP_PART_SLOTS]);

    for (const picker of pickers) {
      expect(picker.variants.length).toBeGreaterThanOrEqual(3);
      expect(picker.variants.every((variant) => variant.available)).toBe(true);
      expect(picker.variants.every((variant) => variant.costLabel === 'Free')).toBe(true);
      expect(picker.variants.every((variant) => variant.previewClass.includes(variant.id))).toBe(true);
      expect(picker.variants.filter((variant) => variant.selected)).toHaveLength(1);
    }
  });

  it('marks pending Ship tab selections without mutating the default loadout', () => {
    const pickers = getShipCustomizationPickerModels({
      cockpit: 'cockpit-twin-bubble',
      wings: 'wings-forked',
      hull: 'hull-twin-boom',
    });

    expect(pickers.find((picker) => picker.slot === 'Cockpit')?.variants.find((variant) => variant.selected)?.id)
      .toBe('cockpit-twin-bubble');
    expect(pickers.find((picker) => picker.slot === 'Wings')?.variants.find((variant) => variant.selected)?.id)
      .toBe('wings-forked');
    expect(pickers.find((picker) => picker.slot === 'Hull')?.variants.find((variant) => variant.selected)?.id)
      .toBe('hull-twin-boom');
    expect(DEFAULT_SHIP_LOADOUT).toEqual({
      cockpit: 'cockpit-standard',
      wings: 'wings-standard',
      hull: 'hull-standard',
    });
  });
});

describe('settings sound volumes', () => {
  it('uses the P9 engine default when no preference is stored', () => {
    const storage = createMemoryStorage();
    const controller = createSoundSettingsController({
      storage,
      applyInitial: false,
    });

    expect(SOUND_VOLUME_DEFAULTS.engine).toBe(Math.round(ENGINE_VOLUME_DEFAULT_SCALE * 100));
    expect(controller.getVolume('engine')).toBe(SOUND_VOLUME_DEFAULTS.engine);
  });

  it('constructs Master, SFX, and Engine slider models for the Sound section', () => {
    const controller = createSoundSettingsController({
      storage: createMemoryStorage(),
      applyInitial: false,
    });

    const sliderModels = getSoundVolumeSliderModels(controller);

    expect(sliderModels.map((model) => model.label)).toEqual(['Master', 'SFX', 'Engine']);
    expect(sliderModels.map((model) => model.category)).toEqual(['master', 'sfx', 'engine']);
    expect(sliderModels.every((model) => model.min === 0 && model.max === 100 && model.step === 1)).toBe(true);
    expect(sliderModels.map((model) => model.ariaLabel)).toEqual([
      'Master volume',
      'SFX volume',
      'Engine volume',
    ]);
  });

  it('moves a synthetic slider value and applies the category volume live', () => {
    const storage = createMemoryStorage();
    const volumeLayer = {
      setMasterVolume: vi.fn(),
      setSfxVolume: vi.fn(),
      setEngineVolume: vi.fn(),
    };
    const controller = createSoundSettingsController({
      storage,
      volumeLayer,
      applyInitial: false,
    });

    const sliderValue = controller.setVolume('sfx', 37);

    expect(sliderValue).toBe(37);
    expect(volumeLayer.setSfxVolume).toHaveBeenCalledWith(0.37);
    expect(storage.setItem).toHaveBeenCalledWith(SFX_VOLUME_STORAGE_KEY, '37');
  });

  it('applies Master through the Howler.js volume method', () => {
    mockHowlerVolume.mockClear();
    const layer = createHowlerSoundVolumeLayer();

    layer.setMasterVolume(0.42);

    expect(mockHowlerVolume).toHaveBeenCalledWith(0.42);
  });

  it('writes volume preferences to keys that differ from the save blob key', () => {
    const storage = createMemoryStorage();

    writeSoundVolumePreference('master', 55, storage);
    writeSoundVolumePreference('engine', 62, storage);

    expect(MASTER_VOLUME_STORAGE_KEY).not.toBe(SAVE_KEY);
    expect(SOUND_VOLUME_STORAGE_KEYS.engine).not.toBe(SAVE_KEY);
    expect(storage.setItem).toHaveBeenCalledWith(MASTER_VOLUME_STORAGE_KEY, '55');
    expect(storage.setItem).toHaveBeenCalledWith(SOUND_VOLUME_STORAGE_KEYS.engine, '62');
  });
});
