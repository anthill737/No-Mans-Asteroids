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
  private lowHealthCooldown = 0;
  private chaingunNodeId: ReturnType<typeof setInterval> | null = null;
  private chaingunGain: GainNode | null = null;

  constructor() {
    this.ctx = getCtx();
  }

  /** Call on first user gesture to unlock the AudioContext. */
  resume(): void {
    if (this.ctx && this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  // ── Weapons ──────────────────────────────────────────────────────────────────

  playLaserZap(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
    src.start();
  }

  playEnemyDestroy(): void {
    this._playExplosion(0.8);
  }

  // ── Navigation ────────────────────────────────────────────────────────────────

  playWarpActivation(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    // Rising sci-fi sweep
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
      gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
    gain.connect(ctx.destination);
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
      gain.connect(ctx.destination);
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
