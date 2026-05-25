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

// ── Player hit cooldown guard ─────────────────────────────────────────────────
// Tests use direct timestamp injection — no AudioContext mocking required.

describe('_hitCooldownAllowed', () => {
  it('returns false (suppressed) when within cooldown window', () => {
    const audio = makeAudio();
    const now = 1_000_000;
    // lastMs was 50ms ago, window is 100ms — still within window
    expect(audio._hitCooldownAllowed(now - 50, now, 100)).toBe(false);
  });

  it('returns true (allowed) when cooldown has elapsed', () => {
    const audio = makeAudio();
    const now = 1_000_000;
    // lastMs was 200ms ago, window is 100ms — elapsed
    expect(audio._hitCooldownAllowed(now - 200, now, 100)).toBe(true);
  });

  it('returns true when lastMs is -Infinity (never fired)', () => {
    const audio = makeAudio();
    expect(audio._hitCooldownAllowed(-Infinity, 1_000_000, 100)).toBe(true);
  });

  it('returns false when nowMs equals lastMs (fired this exact instant)', () => {
    const audio = makeAudio();
    const now = 1_000_000;
    expect(audio._hitCooldownAllowed(now, now, 100)).toBe(false);
  });

  it('returns true exactly at the window boundary', () => {
    const audio = makeAudio();
    const now = 1_000_000;
    // elapsed == windowMs: allowed
    expect(audio._hitCooldownAllowed(now - 100, now, 100)).toBe(true);
  });
});

// ── Player hit audio ──────────────────────────────────────────────────────────

describe('player hit audio', () => {
  it('playPlayerShieldHit creates a buffer source', () => {
    const audio = makeAudio();
    audio.playPlayerShieldHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    expect(mockCreateBiquadFilter).toHaveBeenCalledTimes(1);
  });

  it('playPlayerHullHit creates a buffer source', () => {
    const audio = makeAudio();
    audio.playPlayerHullHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    expect(mockCreateBiquadFilter).toHaveBeenCalledTimes(1);
  });

  it('playPlayerLowHealthHit creates a buffer source and an oscillator', () => {
    const audio = makeAudio();
    audio.playPlayerLowHealthHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    expect(mockCreateOscillator).toHaveBeenCalledTimes(1);
  });

  it('playPlayerShieldHit is suppressed on immediate second call (within cooldown)', () => {
    const audio = makeAudio();
    audio.playPlayerShieldHit(); // fires
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
    audio.playPlayerShieldHit(); // suppressed — still within 100ms window
    expect(mockCreateBuffer).not.toHaveBeenCalled();
  });

  it('playPlayerHullHit is suppressed on immediate second call (within cooldown)', () => {
    const audio = makeAudio();
    audio.playPlayerHullHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
    audio.playPlayerHullHit();
    expect(mockCreateBuffer).not.toHaveBeenCalled();
  });

  it('playPlayerLowHealthHit is suppressed on immediate second call (within cooldown)', () => {
    const audio = makeAudio();
    audio.playPlayerLowHealthHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
    audio.playPlayerLowHealthHit();
    expect(mockCreateBuffer).not.toHaveBeenCalled();
  });

  it('shield and hull hits use independent cooldown state', () => {
    const audio = makeAudio();
    audio.playPlayerShieldHit(); // fires shield, sets shieldHitLastMs
    vi.clearAllMocks();
    // hull hit has its own independent timestamp — should still fire
    audio.playPlayerHullHit();
    expect(mockCreateBuffer).toHaveBeenCalledTimes(1);
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
      audio.playPlayerShieldHit();
      audio.playPlayerHullHit();
      audio.playPlayerLowHealthHit();
    }).not.toThrow();
    vi.stubGlobal('AudioContext', MockAudioContext);
  });
});


// ── selectPlayerHitAudio pure selector ──────────────────────────────────────────

import { selectPlayerHitAudio } from './gameAudio';

describe('selectPlayerHitAudio', () => {
  it('maps a shield-only hit to playPlayerShieldHit', () => {
    // shieldDamage > 0, hullDamage = 0 — shields absorbed the hit
    expect(selectPlayerHitAudio(10, 0, 0.8)).toBe('playPlayerShieldHit');
  });

  it('maps a hull hit (healthy) to playPlayerHullHit', () => {
    // hullDamage > 0, health fraction above low-health threshold
    expect(selectPlayerHitAudio(0, 15, 0.5)).toBe('playPlayerHullHit');
  });

  it('maps a hull hit that drops health below 25% to playPlayerLowHealthHit', () => {
    // hullDamage > 0, health fraction below low-health threshold
    expect(selectPlayerHitAudio(0, 20, 0.2)).toBe('playPlayerLowHealthHit');
  });

  it('maps a hull hit at exactly 25% health to playPlayerHullHit (boundary is exclusive)', () => {
    expect(selectPlayerHitAudio(0, 5, 0.25)).toBe('playPlayerHullHit');
  });

  it('maps a hull hit just below 25% to playPlayerLowHealthHit', () => {
    expect(selectPlayerHitAudio(0, 5, 0.249)).toBe('playPlayerLowHealthHit');
  });

  it('hull damage takes priority over shield damage when both are positive', () => {
    // Damage overflows shields: both shieldDamage and hullDamage > 0
    expect(selectPlayerHitAudio(5, 10, 0.6)).toBe('playPlayerHullHit');
  });

  it('returns null when no damage was dealt', () => {
    expect(selectPlayerHitAudio(0, 0, 1.0)).toBeNull();
  });
});
