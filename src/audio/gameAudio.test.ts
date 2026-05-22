import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Web Audio API mock ────────────────────────────────────────────────────────
// The GameAudio class falls back to null when AudioContext is unavailable
// (Node/Vitest environment). Tests verify the public interface and the
// low-health cooldown logic, which is pure JS regardless of AudioContext.

const { mockResume, mockCreateOscillator, mockCreateGain, mockCreateBiquadFilter,
        mockCreateBuffer, mockCreateBufferSource, MockAudioContext } = vi.hoisted(() => {
  const mockResume = vi.fn().mockResolvedValue(undefined);
  const mockOscStart = vi.fn();
  const mockOscStop = vi.fn();
  const mockConnect = vi.fn();
  const mockSetValueAtTime = vi.fn();
  const mockLinearRampToValueAtTime = vi.fn();
  const mockExponentialRampToValueAtTime = vi.fn();

  const makeGainParam = () => ({
    setValueAtTime: mockSetValueAtTime,
    linearRampToValueAtTime: mockLinearRampToValueAtTime,
    exponentialRampToValueAtTime: mockExponentialRampToValueAtTime,
    value: 0,
  });

  const mockCreateOscillator = vi.fn().mockImplementation(() => ({
    connect: mockConnect,
    start: mockOscStart,
    stop: mockOscStop,
    type: 'sine',
    frequency: makeGainParam(),
  }));

  const mockCreateGain = vi.fn().mockImplementation(() => ({
    connect: mockConnect,
    gain: makeGainParam(),
  }));

  const mockCreateBiquadFilter = vi.fn().mockImplementation(() => ({
    connect: mockConnect,
    type: 'lowpass',
    frequency: makeGainParam(),
    Q: makeGainParam(),
  }));

  const mockFillFloat32Array = vi.fn();
  const mockCreateBuffer = vi.fn().mockImplementation((channels: number, length: number) => ({
    numberOfChannels: channels,
    getChannelData: () => new Float32Array(length),
  }));

  const mockBufferSourceStart = vi.fn();
  const mockCreateBufferSource = vi.fn().mockImplementation(() => ({
    connect: mockConnect,
    start: mockBufferSourceStart,
    buffer: null,
  }));
  void mockFillFloat32Array;

  const MockAudioContext = vi.fn().mockImplementation(() => ({
    state: 'running',
    currentTime: 0,
    sampleRate: 44100,
    destination: {},
    resume: mockResume,
    createOscillator: mockCreateOscillator,
    createGain: mockCreateGain,
    createBiquadFilter: mockCreateBiquadFilter,
    createBuffer: mockCreateBuffer,
    createBufferSource: mockCreateBufferSource,
  }));

  return {
    mockResume,
    mockCreateOscillator,
    mockCreateGain,
    mockCreateBiquadFilter,
    mockCreateBuffer,
    mockCreateBufferSource,
    MockAudioContext,
  };
});

vi.stubGlobal('AudioContext', MockAudioContext);

import { GameAudio, SILENT_WAV_URI } from './gameAudio';

function makeAudio(): GameAudio {
  return new GameAudio();
}

beforeEach(() => {
  vi.clearAllMocks();
  MockAudioContext.mockImplementation(() => ({
    state: 'running',
    currentTime: 0,
    sampleRate: 44100,
    destination: {},
    resume: mockResume,
    createOscillator: mockCreateOscillator,
    createGain: mockCreateGain,
    createBiquadFilter: mockCreateBiquadFilter,
    createBuffer: mockCreateBuffer,
    createBufferSource: mockCreateBufferSource,
  }));
});

// ── SILENT_WAV_URI ────────────────────────────────────────────────────────────

describe('SILENT_WAV_URI', () => {
  it('is a valid data URI for a WAV file', () => {
    expect(SILENT_WAV_URI).toMatch(/^data:audio\/wav;base64,/);
  });
});

// ── Laser ─────────────────────────────────────────────────────────────────────

describe('playLaserZap', () => {
  it('creates an oscillator and schedules it', () => {
    const audio = makeAudio();
    audio.playLaserZap();
    expect(mockCreateOscillator).toHaveBeenCalledTimes(1);
    expect(mockCreateGain).toHaveBeenCalledTimes(1);
  });
});

// ── Chaingun ──────────────────────────────────────────────────────────────────

describe('chaingun audio', () => {
  it('startChaingunChatter creates buffer source', () => {
    const audio = makeAudio();
    audio.startChaingunChatter();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    audio.stopChaingunChatter();
  });

  it('calling startChaingunChatter twice does not double-start', () => {
    const audio = makeAudio();
    audio.startChaingunChatter();
    const callsAfterFirst = mockCreateBuffer.mock.calls.length;
    // Immediate second call — interval not fired yet
    audio.startChaingunChatter();
    expect(mockCreateBuffer.mock.calls.length).toBe(callsAfterFirst);
    audio.stopChaingunChatter();
  });

  it('stopChaingunChatter without start does not crash', () => {
    const audio = makeAudio();
    expect(() => audio.stopChaingunChatter()).not.toThrow();
  });
});

// ── Missile ───────────────────────────────────────────────────────────────────

describe('missile audio', () => {
  it('playMissileWhoosh creates a buffer source', () => {
    const audio = makeAudio();
    audio.playMissileWhoosh();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });

  it('playMissileExplosion creates a buffer source', () => {
    const audio = makeAudio();
    audio.playMissileExplosion();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });
});

// ── Asteroid ──────────────────────────────────────────────────────────────────

describe('asteroid audio', () => {
  it('playAsteroidHit creates a buffer source', () => {
    const audio = makeAudio();
    audio.playAsteroidHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });

  it('playAsteroidDestroy creates a buffer source', () => {
    const audio = makeAudio();
    audio.playAsteroidDestroy();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });
});

// ── Enemy ─────────────────────────────────────────────────────────────────────

describe('enemy audio', () => {
  it('playEnemyHit creates a buffer source', () => {
    const audio = makeAudio();
    audio.playEnemyHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });

  it('playEnemyDestroy creates a buffer source', () => {
    const audio = makeAudio();
    audio.playEnemyDestroy();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
  });
});

// ── Warp & UI ─────────────────────────────────────────────────────────────────

describe('warp and UI audio', () => {
  it('playWarpActivation creates an oscillator', () => {
    const audio = makeAudio();
    audio.playWarpActivation();
    expect(mockCreateOscillator).toHaveBeenCalledTimes(1);
  });

  it('playUIClick creates an oscillator', () => {
    const audio = makeAudio();
    audio.playUIClick();
    expect(mockCreateOscillator).toHaveBeenCalledTimes(1);
  });

  it('playStorePurchase creates two oscillators (two notes)', () => {
    const audio = makeAudio();
    audio.playStorePurchase();
    expect(mockCreateOscillator).toHaveBeenCalledTimes(2);
  });
});

// ── Low-health warning ────────────────────────────────────────────────────────

describe('checkLowHealth', () => {
  it('plays warning when health drops below 25%', () => {
    const audio = makeAudio();
    audio.checkLowHealth(0.24, 0.016);
    expect(mockCreateOscillator).toHaveBeenCalled();
  });

  it('does not play when health is at or above 25%', () => {
    const audio = makeAudio();
    audio.checkLowHealth(0.25, 0.016);
    expect(mockCreateOscillator).not.toHaveBeenCalled();
  });

  it('does not replay during cooldown (called every frame for 2 seconds)', () => {
    const audio = makeAudio();
    // First call triggers the warning
    audio.checkLowHealth(0.1, 0.016);
    const afterFirst = mockCreateOscillator.mock.calls.length;
    expect(afterFirst).toBeGreaterThan(0);

    // Subsequent calls within cooldown must not trigger again
    for (let i = 0; i < 60; i++) {
      audio.checkLowHealth(0.1, 0.016);
    }
    expect(mockCreateOscillator.mock.calls.length).toBe(afterFirst);
  });

  it('plays again after cooldown expires', () => {
    const audio = makeAudio();
    audio.checkLowHealth(0.1, 0.016);
    const afterFirst = mockCreateOscillator.mock.calls.length;

    // Advance dt past the 3s cooldown
    audio.checkLowHealth(0.1, 4.0);
    expect(mockCreateOscillator.mock.calls.length).toBeGreaterThan(afterFirst);
  });

  it('resetLowHealthWarning allows immediate re-trigger', () => {
    const audio = makeAudio();
    audio.checkLowHealth(0.1, 0.016);
    const afterFirst = mockCreateOscillator.mock.calls.length;
    audio.resetLowHealthWarning();
    audio.checkLowHealth(0.1, 0.016);
    expect(mockCreateOscillator.mock.calls.length).toBeGreaterThan(afterFirst);
  });
});

// ── No-op when AudioContext unavailable ───────────────────────────────────────

describe('graceful no-op without AudioContext', () => {
  it('all play methods are safe when ctx is null', () => {
    vi.stubGlobal('AudioContext', undefined);
    const audio = new GameAudio();
    expect(() => {
      audio.playLaserZap();
      audio.startChaingunChatter();
      audio.stopChaingunChatter();
      audio.playMissileWhoosh();
      audio.playMissileExplosion();
      audio.playAsteroidHit();
      audio.playAsteroidDestroy();
      audio.playEnemyHit();
      audio.playEnemyDestroy();
      audio.playWarpActivation();
      audio.playUIClick();
      audio.playStorePurchase();
      audio.checkLowHealth(0.1, 0.016);
    }).not.toThrow();
    vi.stubGlobal('AudioContext', MockAudioContext);
  });
});
