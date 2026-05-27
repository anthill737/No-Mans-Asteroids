// Synthesized game audio via Web Audio API — no external files required.
// All sounds are generated procedurally to guarantee no load errors.

// Minimal silent WAV (44 bytes, 0 samples, 8kHz mono PCM) used as Howler fallback source
// so the file-based WeaponAudio never issues a failing network request.
export const SILENT_WAV_URI =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYAAERnAAABAAgAZGF0YQAAAAA=';

function getCtx(): AudioContext | null {
  if (typeof AudioContext !== 'undefined') return new AudioContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (globalThis as any).webkitAudioContext !== 'undefined')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (globalThis as any).webkitAudioContext();
  return null;
}

type NoiseColor = 'white' | 'brown';

function fillNoise(buffer: AudioBuffer, color: NoiseColor = 'white'): void {
  for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
    const data = buffer.getChannelData(ch);
    let lastOut = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      if (color === 'brown') {
        lastOut = (lastOut + 0.02 * white) / 1.02;
        data[i] = lastOut * 3.5;
      } else {
        data[i] = white;
      }
    }
  }
}

function envelope(
  gain: GainNode,
  ctx: AudioContext,
  attack: number,
  sustain: number,
  release: number,
  peak = 1,
): void {
  const t = ctx.currentTime;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(peak, t + attack);
  gain.gain.setValueAtTime(peak, t + attack + sustain);
  gain.gain.linearRampToValueAtTime(0, t + attack + sustain + release);
}

export class GameAudio {
  private readonly ctx: AudioContext | null;
  private sfxOutput: GainNode | null = null;
  private sfxVolumeScale = 1;
  private lowHealthCooldown = 0;
  private chaingunNodeId: ReturnType<typeof setInterval> | null = null;

  // Per-hit timestamp fields for rate-limiting (ms since epoch, -Infinity = never fired)
  private shieldHitLastMs = -Infinity;
  private hullHitLastMs = -Infinity;
  private lowHealthHitLastMs = -Infinity;

  private static readonly SHIELD_HIT_COOLDOWN_MS = 100;
  private static readonly HULL_HIT_COOLDOWN_MS = 100;
  private static readonly LOW_HEALTH_HIT_COOLDOWN_MS = 200;

  constructor() {
    this.ctx = getCtx();
  }

  setSfxVolumeScale(scale: number): void {
    this.sfxVolumeScale = Math.max(0, Math.min(1, scale));
    if (this.ctx && this.sfxOutput) {
      this.sfxOutput.gain.setValueAtTime(this.sfxVolumeScale, this.ctx.currentTime);
    }
  }

  private getSfxDestination(ctx: AudioContext): AudioNode {
    if (this.sfxOutput === null) {
      this.sfxOutput = ctx.createGain();
      this.sfxOutput.gain.value = this.sfxVolumeScale;
      this.sfxOutput.connect(ctx.destination);
    }
    return this.sfxOutput;
  }

  private connectToSfxOutput(node: AudioNode, ctx: AudioContext): void {
    if (this.sfxVolumeScale === 1 && this.sfxOutput === null) {
      node.connect(ctx.destination);
    } else {
      node.connect(this.getSfxDestination(ctx));
    }
  }

  /** Call on first user gesture to unlock the AudioContext. */
  resume(): void {
    if (this.ctx && this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  /**
   * Pure cooldown guard — exposed for unit testing via direct timestamp injection.
   * Returns true (allowed) when nowMs - lastMs >= windowMs, false (suppressed) otherwise.
   */
  _hitCooldownAllowed(lastMs: number, nowMs: number, windowMs: number): boolean {
    return nowMs - lastMs >= windowMs;
  }

  // ── Weapons ──────────────────────────────────────────────────────────────────

  playLaserZap(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    osc.type = 'sawtooth';
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.15);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.linearRampToValueAtTime(0, t + 0.15);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  startChaingunChatter(): void {
    const ctx = this.ctx;
    if (!ctx || this.chaingunNodeId !== null) return;
    this._fireChaingunBurst();
    // Schedule repeated bursts every 83 ms (~12 rps)
    this.chaingunNodeId = setInterval(() => this._fireChaingunBurst(), 83);
  }

  stopChaingunChatter(): void {
    if (this.chaingunNodeId !== null) {
      clearInterval(this.chaingunNodeId);
      this.chaingunNodeId = null;
    }
  }

  playMissileWhoosh(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.5;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(2400, ctx.currentTime + duration * 0.4);
    filter.Q.value = 2;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.05, 0.2, 0.25, 0.6);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  playMissileExplosion(): void {
    this._playExplosion(0.6);
  }

  // ── Asteroids ─────────────────────────────────────────────────────────────────

  playAsteroidHit(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.18;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.05, 0.13, 0.5);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  playAsteroidDestroy(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.4;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + duration);
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.1, 0.3, 0.7);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  // ── Enemies ───────────────────────────────────────────────────────────────────

  playEnemyHit(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.15;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2200;
    filter.Q.value = 3;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.04, 0.11, 0.5);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  playEnemyDestroy(): void {
    this._playExplosion(0.8);
  }

  // ── Player hit feedback ───────────────────────────────────────────────────────

  /**
   * High-pitched resonant "shzzt" — electronic energy deflection off shields.
   * Distinct from hull/explosion sounds by using white noise through a highpass
   * filter in the 2800 Hz range.
   * Rate-limited to one instance per 100 ms.
   */
  playPlayerShieldHit(): void {
    const now = Date.now();
    if (!this._hitCooldownAllowed(this.shieldHitLastMs, now, GameAudio.SHIELD_HIT_COOLDOWN_MS)) return;
    this.shieldHitLastMs = now;
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.1;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf); // white noise — bright, electronic character
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 2800;
    filter.Q.value = 4;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.03, 0.07, 0.4);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  /**
   * Deep low-frequency thud — physical hull impact.
   * Brown noise through a very low lowpass (300 Hz) gives a heavy, muffled feel
   * distinct from shield hit (high freq) and asteroid hit (900 Hz lowpass).
   * Rate-limited to one instance per 100 ms.
   */
  playPlayerHullHit(): void {
    const now = Date.now();
    if (!this._hitCooldownAllowed(this.hullHitLastMs, now, GameAudio.HULL_HIT_COOLDOWN_MS)) return;
    this.hullHitLastMs = now;
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.22;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 300;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.08, 0.14, 0.6);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  /**
   * Hull thud layered with an alarm oscillator — signals critical damage.
   * Noticeably more urgent than shield/hull variants due to the square-wave
   * overlay descending from 880→660 Hz.
   * Rate-limited to one instance per 200 ms.
   */
  playPlayerLowHealthHit(): void {
    const now = Date.now();
    if (!this._hitCooldownAllowed(this.lowHealthHitLastMs, now, GameAudio.LOW_HEALTH_HIT_COOLDOWN_MS)) return;
    this.lowHealthHitLastMs = now;
    const ctx = this.ctx;
    if (!ctx) return;
    // Deep hull thud layer
    const duration = 0.3;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.1, 0.2, 0.7);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
    // Alarm oscillator overlay — the urgency marker
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.connect(oscGain);
    this.connectToSfxOutput(oscGain, ctx);
    osc.type = 'square';
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.linearRampToValueAtTime(660, t + 0.15);
    oscGain.gain.setValueAtTime(0, t);
    oscGain.gain.linearRampToValueAtTime(0.25, t + 0.01);
    oscGain.gain.setValueAtTime(0.25, t + 0.08);
    oscGain.gain.linearRampToValueAtTime(0, t + 0.15);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // ── Navigation ────────────────────────────────────────────────────────────────

  playWarpActivation(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    // Rising sci-fi sweep
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    osc.type = 'sine';
    const t = ctx.currentTime;
    const dur = 1.2;
    osc.frequency.setValueAtTime(80, t);
    osc.frequency.exponentialRampToValueAtTime(2400, t + dur * 0.7);
    osc.frequency.exponentialRampToValueAtTime(100, t + dur);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 0.1);
    gain.gain.setValueAtTime(0.5, t + dur * 0.7);
    gain.gain.linearRampToValueAtTime(0, t + dur);
    osc.start(t);
    osc.stop(t + dur);
  }

  // ── UI ────────────────────────────────────────────────────────────────────────

  playUIClick(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    osc.type = 'square';
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.linearRampToValueAtTime(800, t + 0.04);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.linearRampToValueAtTime(0, t + 0.04);
    osc.start(t);
    osc.stop(t + 0.04);
  }

  playStorePurchase(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    // Rising chime: two tones
    const notes = [523.25, 783.99]; // C5, G5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      this.connectToSfxOutput(gain, ctx);
      osc.type = 'sine';
      const t = ctx.currentTime + i * 0.12;
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.02);
      gain.gain.setValueAtTime(0.35, t + 0.08);
      gain.gain.linearRampToValueAtTime(0, t + 0.18);
      osc.start(t);
      osc.stop(t + 0.18);
    });
  }

  // ── Low-health warning ────────────────────────────────────────────────────────

  /**
   * Call each frame. Plays a warning pulse once when healthRatio drops below 0.25,
   * then waits 3 seconds before it can fire again.
   */
  checkLowHealth(healthRatio: number, dt: number): void {
    if (this.lowHealthCooldown > 0) {
      this.lowHealthCooldown = Math.max(0, this.lowHealthCooldown - dt);
    }

    if (healthRatio < 0.25 && this.lowHealthCooldown === 0) {
      this._playLowHealthWarning();
      this.lowHealthCooldown = 3.0;
    }
  }

  /** Reset low-health state (call on game restart or health recovery above threshold). */
  resetLowHealthWarning(): void {
    this.lowHealthCooldown = 0;
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private _fireChaingunBurst(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.06;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 1.5;
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.01, 0.05, 0.4);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  private _playExplosion(volume: number): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const duration = 0.55;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    fillNoise(buf, 'brown');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + duration);
    const gain = ctx.createGain();
    envelope(gain, ctx, 0.001, 0.05, 0.5, volume);
    src.connect(filter);
    filter.connect(gain);
    this.connectToSfxOutput(gain, ctx);
    src.start();
  }

  private _playLowHealthWarning(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    // Pulsing alarm: two beeps
    [0, 0.18].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      this.connectToSfxOutput(gain, ctx);
      osc.type = 'square';
      const t = ctx.currentTime + offset;
      osc.frequency.setValueAtTime(440, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.3, t + 0.02);
      gain.gain.setValueAtTime(0.3, t + 0.1);
      gain.gain.linearRampToValueAtTime(0, t + 0.15);
      osc.start(t);
      osc.stop(t + 0.15);
    });
  }
}


// ── Pure hit-audio selector ───────────────────────────────────────────────────

export type PlayerHitAudioMethod =
  | 'playPlayerShieldHit'
  | 'playPlayerHullHit'
  | 'playPlayerLowHealthHit';

const PLAYER_LOW_HEALTH_THRESHOLD = 0.25;

/**
 * Pure selector with no audio side-effects. Maps applyDamage return values and
 * current health fraction to the correct GameAudio method name.
 * Returns null when neither shieldDamage nor hullDamage is positive.
 */
export function selectPlayerHitAudio(
  shieldDamage: number,
  hullDamage: number,
  healthFraction: number,
): PlayerHitAudioMethod | null {
  if (hullDamage > 0) {
    return healthFraction < PLAYER_LOW_HEALTH_THRESHOLD
      ? 'playPlayerLowHealthHit'
      : 'playPlayerHullHit';
  }
  if (shieldDamage > 0) return 'playPlayerShieldHit';
  return null;
}
