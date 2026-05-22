import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Howler mock ──────────────────────────────────────────────────────────────
// Howler requires Web Audio API which is not available in Node/Vitest.
// vi.hoisted ensures mock vars are initialized before vi.mock factory runs.

const { mockPlay, mockStop, mockPlaying, MockHowl } = vi.hoisted(() => {
  const mockPlay = vi.fn().mockReturnValue(1);
  const mockStop = vi.fn();
  const mockPlaying = vi.fn().mockReturnValue(false);
  const MockHowl = vi.fn().mockImplementation(() => ({
    play: mockPlay,
    stop: mockStop,
    playing: mockPlaying,
  }));
  return { mockPlay, mockStop, mockPlaying, MockHowl };
});

vi.mock('howler', () => ({ Howl: MockHowl }));

import { WeaponAudio } from './weaponAudio';

function makeAudio(): WeaponAudio {
  return new WeaponAudio();
}

// ── Setup ────────────────────────────────────────────────────────────────────

beforeEach(() => {
  vi.clearAllMocks();
  mockPlaying.mockReturnValue(false);
});

// ── Laser ────────────────────────────────────────────────────────────────────

describe('laser audio', () => {
  it('playLaserZap() triggers play on the laser Howl', () => {
    const audio = makeAudio();
    audio.playLaserZap();
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('multiple laser shots each call play once per shot', () => {
    const audio = makeAudio();
    audio.playLaserZap();
    audio.playLaserZap();
    audio.playLaserZap();
    expect(mockPlay).toHaveBeenCalledTimes(3);
  });
});

// ── Chaingun ─────────────────────────────────────────────────────────────────

describe('chaingun audio — single looping sound', () => {
  it('startChaingunChatter() calls play when not already playing', () => {
    const audio = makeAudio();
    audio.startChaingunChatter();
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('calling startChaingunChatter() repeatedly does not spawn extra sounds', () => {
    const audio = makeAudio();

    // First call starts the sound
    audio.startChaingunChatter();
    expect(mockPlay).toHaveBeenCalledTimes(1);

    // Simulate sound already playing
    mockPlaying.mockReturnValue(true);

    // 12 more rapid calls (e.g. one game frame at 12 rps)
    for (let i = 0; i < 12; i++) {
      audio.startChaingunChatter();
    }

    // play() must not have been called again
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('stopChaingunChatter() calls stop on the chaingun Howl', () => {
    const audio = makeAudio();
    audio.startChaingunChatter();
    audio.stopChaingunChatter();
    expect(mockStop).toHaveBeenCalledTimes(1);
  });

  it('stopChaingunChatter() without prior start does not crash', () => {
    const audio = makeAudio();
    expect(() => audio.stopChaingunChatter()).not.toThrow();
  });

  it('chaingun firing for 3+ seconds at 12 rps does not crash and does not spawn >1 sound', () => {
    const audio = makeAudio();
    const framesPerSecond = 60;
    const durationSeconds = 3;
    const totalFrames = framesPerSecond * durationSeconds;

    // First call starts the sound
    audio.startChaingunChatter();
    mockPlaying.mockReturnValue(true);

    // Remaining frames of continuous fire
    expect(() => {
      for (let i = 1; i < totalFrames; i++) {
        audio.startChaingunChatter();
      }
    }).not.toThrow();

    // Only one play() call total for the whole 3-second burst
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('re-firing after stop starts the sound again', () => {
    const audio = makeAudio();

    audio.startChaingunChatter();
    mockPlaying.mockReturnValue(true);

    audio.stopChaingunChatter();
    mockPlaying.mockReturnValue(false);

    audio.startChaingunChatter();
    expect(mockPlay).toHaveBeenCalledTimes(2);
  });
});

// ── Missile ──────────────────────────────────────────────────────────────────

describe('missile audio', () => {
  it('playMissileWhoosh() calls play on the whoosh Howl', () => {
    const audio = makeAudio();
    audio.playMissileWhoosh();
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('playMissileExplosion() calls play on the explosion Howl', () => {
    const audio = makeAudio();
    audio.playMissileExplosion();
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  it('multiple missiles each play their own whoosh', () => {
    const audio = makeAudio();
    audio.playMissileWhoosh();
    audio.playMissileWhoosh();
    expect(mockPlay).toHaveBeenCalledTimes(2);
  });

  it('multiple impacts each play their own explosion', () => {
    const audio = makeAudio();
    audio.playMissileExplosion();
    audio.playMissileExplosion();
    expect(mockPlay).toHaveBeenCalledTimes(2);
  });
});

// ── Howl construction ────────────────────────────────────────────────────────

describe('Howl construction', () => {
  it('creates exactly 4 Howl instances (laser, chaingun, whoosh, explosion)', () => {
    MockHowl.mockClear();
    makeAudio();
    expect(MockHowl).toHaveBeenCalledTimes(4);
  });

  it('chaingun Howl is constructed with loop: true', () => {
    MockHowl.mockClear();
    makeAudio();
    const chaingunCall = MockHowl.mock.calls.find(
      (args) => args[0].loop === true,
    );
    expect(chaingunCall).toBeDefined();
  });

  it('laser Howl is not looping', () => {
    MockHowl.mockClear();
    makeAudio();
    const laserCall = MockHowl.mock.calls.find(
      (args) =>
        (args[0].src as string[]).some((s: string) => s.includes('laser')),
    );
    expect(laserCall).toBeDefined();
    expect(laserCall![0].loop).not.toBe(true);
  });
});
