import { beforeEach, describe, expect, it, vi } from 'vitest';

const { MockHowl, howlInstances } = vi.hoisted(() => {
  type MockHowlInstance = {
    // The Howler mock methods intentionally use loose types so this test file
    // stays compatible with the project's ES2020 TypeScript target.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    play: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stop: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    volume: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rate: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    playing: any;
    options: Record<string, unknown>;
  };

  let nextId = 1;
  const howlInstances: MockHowlInstance[] = [];
  const MockHowl = vi.fn().mockImplementation((options: Record<string, unknown>) => {
    const instance: MockHowlInstance = {
      play: vi.fn(() => nextId++),
      stop: vi.fn(),
      volume: vi.fn(),
      rate: vi.fn(),
      playing: vi.fn(() => false),
      options,
    };
    howlInstances.push(instance);
    return instance;
  });

  return { MockHowl, howlInstances };
});

vi.mock('howler', () => ({ Howl: MockHowl }));

import {
  ENGINE_BASE_FULL_VOLUME,
  ENGINE_BASE_IDLE_VOLUME,
  ENGINE_BOOST_VOLUME,
  ENGINE_VOLUME_STORAGE_KEY,
  EngineAudio,
  getEngineVolumeScale,
  selectEngineAudioMix,
  smoothEngineParam,
} from './engineAudio';

const P9_ENGINE_BASE_IDLE_VOLUME = 0.16;
const P9_ENGINE_BASE_FULL_VOLUME = 0.32;

beforeEach(() => {
  vi.clearAllMocks();
  howlInstances.length = 0;
});

describe('selectEngineAudioMix', () => {
  it('uses base engine defaults that are strictly louder than the P9 mix', () => {
    expect(ENGINE_BASE_IDLE_VOLUME).toBeGreaterThan(P9_ENGINE_BASE_IDLE_VOLUME);
    expect(ENGINE_BASE_FULL_VOLUME).toBeGreaterThan(P9_ENGINE_BASE_FULL_VOLUME);
  });

  it('raises the base engine flight loop by about 50 percent over P9', () => {
    expect(ENGINE_BASE_IDLE_VOLUME).toBeCloseTo(P9_ENGINE_BASE_IDLE_VOLUME * 1.5);
    expect(ENGINE_BASE_FULL_VOLUME).toBeCloseTo(P9_ENGINE_BASE_FULL_VOLUME * 1.5);
  });

  it('keeps the boost layer louder than the raised base loop', () => {
    expect(ENGINE_BOOST_VOLUME).toBeGreaterThan(ENGINE_BASE_FULL_VOLUME);
  });

  it('keeps the base engine audible at idle while in space', () => {
    const mix = selectEngineAudioMix({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    });

    expect(mix.baseShouldPlay).toBe(true);
    expect(mix.baseTargetVolume).toBe(ENGINE_BASE_IDLE_VOLUME);
    expect(mix.boostShouldPlay).toBe(false);
    expect(mix.boostTargetVolume).toBe(0);
  });

  it('uses a stored Engine volume scale instead of the fresh default', () => {
    const storage = {
      getItem: vi.fn((key: string) => (key === ENGINE_VOLUME_STORAGE_KEY ? '50' : null)),
    };

    const mix = selectEngineAudioMix({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: true,
    }, storage);

    expect(storage.getItem).toHaveBeenCalledWith(ENGINE_VOLUME_STORAGE_KEY);
    expect(mix.baseTargetVolume).toBeCloseTo(ENGINE_BASE_FULL_VOLUME * 0.5);
    expect(mix.boostTargetVolume).toBeCloseTo(ENGINE_BOOST_VOLUME * 0.5);
  });

  it('raises base volume and pitch as thrust increases', () => {
    const idle = selectEngineAudioMix({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    });
    const full = selectEngineAudioMix({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: false,
    });

    expect(full.baseTargetVolume).toBe(ENGINE_BASE_FULL_VOLUME);
    expect(full.baseTargetVolume).toBeGreaterThan(idle.baseTargetVolume);
    expect(full.baseTargetRate).toBeGreaterThan(idle.baseTargetRate);
  });

  it('adds a distinct boost layer only while boost is active in space', () => {
    const boost = selectEngineAudioMix({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: true,
    });

    expect(boost.baseShouldPlay).toBe(true);
    expect(boost.boostShouldPlay).toBe(true);
    expect(boost.boostTargetVolume).toBe(ENGINE_BOOST_VOLUME);
    expect(boost.boostTargetRate).toBeGreaterThan(boost.baseTargetRate);
  });

  it('mutes base and boost on surface or during warp', () => {
    for (const state of [
      { inSpace: false, onSurface: true, inWarp: false },
      { inSpace: true, onSurface: false, inWarp: true },
    ]) {
      const mix = selectEngineAudioMix({
        ...state,
        thrustMagnitude: 1,
        boostActive: true,
      });
      expect(mix.baseShouldPlay).toBe(false);
      expect(mix.boostShouldPlay).toBe(false);
      expect(mix.baseTargetVolume).toBe(0);
      expect(mix.boostTargetVolume).toBe(0);
    }
  });
});

describe('getEngineVolumeScale', () => {
  it('falls back to the bumped default when no Engine preference is stored', () => {
    const storage = { getItem: vi.fn(() => null) };

    expect(getEngineVolumeScale(storage)).toBe(1);
  });

  it('accepts normalized persisted Engine volume values', () => {
    const storage = { getItem: vi.fn(() => '0.35') };

    expect(getEngineVolumeScale(storage)).toBe(0.35);
  });
});

describe('smoothEngineParam', () => {
  it('moves toward the target gradually instead of jumping instantly', () => {
    const next = smoothEngineParam(0.1, 0.24, 1 / 60);
    expect(next).toBeGreaterThan(0.1);
    expect(next).toBeLessThan(0.24);
  });

  it('can reach the target when enough time has elapsed', () => {
    expect(smoothEngineParam(0.1, 0.24, 1)).toBe(0.24);
  });
});

describe('EngineAudio', () => {
  it('constructs two looping Howl layers for base and boost', () => {
    new EngineAudio();

    expect(MockHowl).toHaveBeenCalledTimes(2);
    expect(howlInstances[0].options.loop).toBe(true);
    expect(howlInstances[1].options.loop).toBe(true);
  });

  it('starts the base loop in space and does not start boost at idle', () => {
    const audio = new EngineAudio();
    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    }, 1 / 60);

    expect(howlInstances[0].play).toHaveBeenCalledTimes(1);
    expect(howlInstances[1].play).not.toHaveBeenCalled();
    const volumeCalls = howlInstances[0].volume.mock.calls;
    const firstVolume = volumeCalls[volumeCalls.length - 1]?.[0] as number;
    expect(firstVolume).toBeGreaterThan(0);
    expect(firstVolume).toBeLessThan(ENGINE_BASE_IDLE_VOLUME);
  });

  it('starts and then fades/stops the boost layer when boost is released', () => {
    const audio = new EngineAudio();
    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: true,
    }, 1 / 60);

    expect(howlInstances[1].play).toHaveBeenCalledTimes(1);

    for (let i = 0; i < 30; i++) {
      audio.update({
        inSpace: true,
        onSurface: false,
        inWarp: false,
        thrustMagnitude: 0,
        boostActive: false,
      }, 1 / 60);
    }

    expect(howlInstances[1].stop).toHaveBeenCalledTimes(1);
  });

  it('fades and stops engine layers during warp', () => {
    const audio = new EngineAudio();
    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: true,
    }, 1 / 60);

    for (let i = 0; i < 30; i++) {
      audio.update({
        inSpace: true,
        onSurface: false,
        inWarp: true,
        thrustMagnitude: 1,
        boostActive: true,
      }, 1 / 60);
    }

    expect(howlInstances[0].stop).toHaveBeenCalledTimes(1);
    expect(howlInstances[1].stop).toHaveBeenCalledTimes(1);
  });

  it('selects the expected engine layers through idle, cruise, boost, surface, warp, and return', () => {
    const audio = new EngineAudio();
    const idle = {
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    };
    const cruising = { ...idle, thrustMagnitude: 1 };
    const boosting = { ...cruising, boostActive: true };
    const onSurface = { ...boosting, inSpace: false, onSurface: true };
    const inWarp = { ...boosting, inWarp: true };

    const idleMix = audio.update(idle, 1 / 60);
    expect(idleMix.baseShouldPlay).toBe(true);
    expect(idleMix.boostShouldPlay).toBe(false);
    expect(howlInstances[0].play).toHaveBeenCalled();
    expect(howlInstances[1].play).not.toHaveBeenCalled();

    const cruiseMix = audio.update(cruising, 1 / 60);
    expect(cruiseMix.baseShouldPlay).toBe(true);
    expect(cruiseMix.baseTargetVolume).toBe(ENGINE_BASE_FULL_VOLUME);
    expect(cruiseMix.boostShouldPlay).toBe(false);

    const boostMix = audio.update(boosting, 1 / 60);
    expect(boostMix.baseShouldPlay).toBe(true);
    expect(boostMix.boostShouldPlay).toBe(true);
    expect(boostMix.boostTargetVolume).toBe(ENGINE_BOOST_VOLUME);
    expect(howlInstances[1].play).toHaveBeenCalled();

    for (let i = 0; i < 30; i++) {
      const surfaceMix = audio.update(onSurface, 1 / 60);
      expect(surfaceMix.baseShouldPlay).toBe(false);
      expect(surfaceMix.boostShouldPlay).toBe(false);
      expect(surfaceMix.baseTargetVolume).toBe(0);
      expect(surfaceMix.boostTargetVolume).toBe(0);
    }
    expect(howlInstances[0].stop).toHaveBeenCalled();
    expect(howlInstances[1].stop).toHaveBeenCalled();

    const basePlayCountBeforeWarpReturn = howlInstances[0].play.mock.calls.length;
    const boostPlayCountBeforeWarpReturn = howlInstances[1].play.mock.calls.length;
    const warpMix = audio.update(inWarp, 1 / 60);
    expect(warpMix.baseShouldPlay).toBe(false);
    expect(warpMix.boostShouldPlay).toBe(false);
    expect(warpMix.baseTargetVolume).toBe(0);
    expect(warpMix.boostTargetVolume).toBe(0);

    const returnedMix = audio.update(cruising, 1 / 60);
    expect(returnedMix.baseShouldPlay).toBe(true);
    expect(returnedMix.boostShouldPlay).toBe(false);
    expect(howlInstances[0].play.mock.calls.length).toBeGreaterThan(basePlayCountBeforeWarpReturn);
    expect(howlInstances[1].play.mock.calls.length).toBe(boostPlayCountBeforeWarpReturn);
  });

  it('smooths dispatcher volume and pitch changes instead of jumping to targets', () => {
    const audio = new EngineAudio();

    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    }, 1 / 60);
    const idleVolume = howlInstances[0].volume.mock.calls.at(-1)?.[0] as number;
    const idleRate = howlInstances[0].rate.mock.calls.at(-1)?.[0] as number;
    expect(idleVolume).toBeGreaterThan(0);
    expect(idleVolume).toBeLessThan(ENGINE_BASE_IDLE_VOLUME);
    expect(idleRate).toBeLessThan(1);
    expect(idleRate).toBeGreaterThan(0.88);

    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: false,
    }, 1 / 60);
    const cruiseVolume = howlInstances[0].volume.mock.calls.at(-1)?.[0] as number;
    const cruiseRate = howlInstances[0].rate.mock.calls.at(-1)?.[0] as number;
    expect(cruiseVolume).toBeGreaterThan(idleVolume);
    expect(cruiseVolume).toBeLessThan(ENGINE_BASE_FULL_VOLUME);
    expect(cruiseRate).toBeGreaterThan(idleRate);
    expect(cruiseRate).toBeLessThan(1.14);

    audio.update({
      inSpace: true,
      onSurface: false,
      inWarp: false,
      thrustMagnitude: 1,
      boostActive: true,
    }, 1 / 60);
    const boostVolume = howlInstances[1].volume.mock.calls.at(-1)?.[0] as number;
    const boostRate = howlInstances[1].rate.mock.calls.at(-1)?.[0] as number;
    expect(boostVolume).toBeGreaterThan(0);
    expect(boostVolume).toBeLessThan(ENGINE_BOOST_VOLUME);
    expect(boostRate).toBeGreaterThan(1);
    expect(boostRate).toBeLessThan(1.28);
  });
});
