import { Howl } from 'howler';
import { SILENT_WAV_URI } from './gameAudio';

export interface EngineAudioState {
  inSpace: boolean;
  onSurface: boolean;
  inWarp: boolean;
  thrustMagnitude: number;
  boostActive: boolean;
}

export interface EngineAudioMix {
  baseShouldPlay: boolean;
  boostShouldPlay: boolean;
  baseTargetVolume: number;
  baseTargetRate: number;
  boostTargetVolume: number;
  boostTargetRate: number;
}

export const ENGINE_VOLUME_STORAGE_KEY = 'space-game:settings:engineVolume';
export const ENGINE_VOLUME_DEFAULT_SCALE = 1;
export const ENGINE_BASE_IDLE_VOLUME = 0.24;
export const ENGINE_BASE_FULL_VOLUME = 0.48;
export const ENGINE_BOOST_VOLUME = 0.6;
export const ENGINE_SMOOTHING_PER_SECOND = 7;
export const ENGINE_MUTE_SMOOTHING_PER_SECOND = 18;

const STOP_VOLUME_THRESHOLD = 0.005;
const LOOP_SAMPLE_RATE = 22050;
const LOOP_DURATION_SECONDS = 1;

export interface EngineVolumeStorage {
  getItem(key: string): string | null;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function parseEngineVolumeScale(rawValue: string | null): number | null {
  if (rawValue === null) return null;
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) return null;
  return clamp01(parsed > 1 ? parsed / 100 : parsed);
}

export function getEngineVolumeScale(
  storage: EngineVolumeStorage | undefined = typeof localStorage === 'undefined'
    ? undefined
    : localStorage,
): number {
  if (!storage) return ENGINE_VOLUME_DEFAULT_SCALE;

  try {
    return parseEngineVolumeScale(storage.getItem(ENGINE_VOLUME_STORAGE_KEY)) ?? ENGINE_VOLUME_DEFAULT_SCALE;
  } catch {
    return ENGINE_VOLUME_DEFAULT_SCALE;
  }
}

function writeAscii(view: DataView, offset: number, value: string): void {
  for (let i = 0; i < value.length; i++) {
    view.setUint8(offset + i, value.charCodeAt(i));
  }
}

function encodePcmWav(samples: Float32Array, sampleRate: number): string {
  if (typeof btoa === 'undefined') return SILENT_WAV_URI;

  const bytesPerSample = 2;
  const byteLength = 44 + samples.length * bytesPerSample;
  const buffer = new ArrayBuffer(byteLength);
  const view = new DataView(buffer);

  writeAscii(view, 0, 'RIFF');
  view.setUint32(4, byteLength - 8, true);
  writeAscii(view, 8, 'WAVE');
  writeAscii(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * bytesPerSample, true);
  view.setUint16(32, bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, 'data');
  view.setUint32(40, samples.length * bytesPerSample, true);

  let offset = 44;
  for (const sample of samples) {
    const s = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += bytesPerSample;
  }

  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:audio/wav;base64,${btoa(binary)}`;
}

function createEngineLoopDataUri(boost: boolean): string {
  const length = Math.floor(LOOP_SAMPLE_RATE * LOOP_DURATION_SECONDS);
  const samples = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const t = i / LOOP_SAMPLE_RATE;
    const lfo = Math.sin(2 * Math.PI * (boost ? 8 : 4) * t);
    const base = boost
      ? Math.sin(2 * Math.PI * 95 * t) * 0.42 +
        Math.sin(2 * Math.PI * 190 * t) * 0.24 +
        Math.sin(2 * Math.PI * 285 * t) * 0.12 +
        Math.sin(2 * Math.PI * 760 * t) * 0.05
      : Math.sin(2 * Math.PI * 55 * t) * 0.48 +
        Math.sin(2 * Math.PI * 110 * t) * 0.22 +
        Math.sin(2 * Math.PI * 165 * t) * 0.08;
    const pulse = boost ? 0.8 + 0.2 * lfo : 0.9 + 0.1 * lfo;
    samples[i] = base * pulse * 0.65;
  }

  return encodePcmWav(samples, LOOP_SAMPLE_RATE);
}

export function smoothEngineParam(
  current: number,
  target: number,
  dt: number,
  responsiveness = ENGINE_SMOOTHING_PER_SECOND,
): number {
  const alpha = Math.min(1, Math.max(0, dt) * responsiveness);
  return current + (target - current) * alpha;
}

export function selectEngineAudioMix(
  state: EngineAudioState,
  volumeSource?: EngineVolumeStorage | number,
): EngineAudioMix {
  const engineAllowed = state.inSpace && !state.onSurface && !state.inWarp;
  const thrust = clamp01(state.thrustMagnitude);
  const boostShouldPlay = engineAllowed && state.boostActive;
  const volumeScale = typeof volumeSource === 'number'
    ? clamp01(volumeSource)
    : getEngineVolumeScale(volumeSource);

  return {
    baseShouldPlay: engineAllowed,
    boostShouldPlay,
    baseTargetVolume: engineAllowed
      ? (ENGINE_BASE_IDLE_VOLUME + (ENGINE_BASE_FULL_VOLUME - ENGINE_BASE_IDLE_VOLUME) * thrust) *
        volumeScale
      : 0,
    baseTargetRate: engineAllowed ? 0.88 + 0.26 * thrust : 1,
    boostTargetVolume: boostShouldPlay ? ENGINE_BOOST_VOLUME * volumeScale : 0,
    boostTargetRate: boostShouldPlay ? 1.28 : 1,
  };
}

export class EngineAudio {
  private readonly base: Howl;
  private readonly boost: Howl;
  private baseSoundId: number | undefined = undefined;
  private boostSoundId: number | undefined = undefined;
  private baseVolume = 0;
  private boostVolume = 0;
  private baseRate = 1;
  private boostRate = 1;
  private volumeScaleOverride: number | null = null;

  constructor() {
    this.base = new Howl({
      src: [createEngineLoopDataUri(false)],
      loop: true,
      volume: 0,
      rate: 1,
      onloaderror: () => {},
    });

    this.boost = new Howl({
      src: [createEngineLoopDataUri(true)],
      loop: true,
      volume: 0,
      rate: 1,
      onloaderror: () => {},
    });
  }

  update(state: EngineAudioState, dt: number): EngineAudioMix {
    const mix = selectEngineAudioMix(state, this.volumeScaleOverride ?? undefined);
    this.updateBase(mix, dt);
    this.updateBoost(mix, dt);
    return mix;
  }

  setVolumeScale(scale: number): void {
    this.volumeScaleOverride = clamp01(scale);
  }

  stopAll(): void {
    if (this.baseSoundId !== undefined) this.base.stop(this.baseSoundId);
    if (this.boostSoundId !== undefined) this.boost.stop(this.boostSoundId);
    this.baseSoundId = undefined;
    this.boostSoundId = undefined;
    this.baseVolume = 0;
    this.boostVolume = 0;
  }

  private ensureBasePlaying(): void {
    if (this.baseSoundId !== undefined && this.base.playing(this.baseSoundId)) return;
    this.baseSoundId = this.base.play();
    this.base.volume(0, this.baseSoundId);
    this.base.rate(this.baseRate, this.baseSoundId);
  }

  private ensureBoostPlaying(): void {
    if (this.boostSoundId !== undefined && this.boost.playing(this.boostSoundId)) return;
    this.boostSoundId = this.boost.play();
    this.boost.volume(0, this.boostSoundId);
    this.boost.rate(this.boostRate, this.boostSoundId);
  }

  private updateBase(mix: EngineAudioMix, dt: number): void {
    if (mix.baseShouldPlay) this.ensureBasePlaying();

    const smoothing = mix.baseShouldPlay
      ? ENGINE_SMOOTHING_PER_SECOND
      : ENGINE_MUTE_SMOOTHING_PER_SECOND;
    this.baseVolume = smoothEngineParam(this.baseVolume, mix.baseTargetVolume, dt, smoothing);
    this.baseRate = smoothEngineParam(this.baseRate, mix.baseTargetRate, dt, ENGINE_SMOOTHING_PER_SECOND);

    if (this.baseSoundId === undefined) return;
    this.base.volume(this.baseVolume, this.baseSoundId);
    this.base.rate(this.baseRate, this.baseSoundId);

    if (!mix.baseShouldPlay && this.baseVolume <= STOP_VOLUME_THRESHOLD) {
      this.base.stop(this.baseSoundId);
      this.baseSoundId = undefined;
      this.baseVolume = 0;
    }
  }

  private updateBoost(mix: EngineAudioMix, dt: number): void {
    if (mix.boostShouldPlay) this.ensureBoostPlaying();

    const smoothing = mix.boostShouldPlay
      ? ENGINE_SMOOTHING_PER_SECOND
      : ENGINE_MUTE_SMOOTHING_PER_SECOND;
    this.boostVolume = smoothEngineParam(this.boostVolume, mix.boostTargetVolume, dt, smoothing);
    this.boostRate = smoothEngineParam(this.boostRate, mix.boostTargetRate, dt, ENGINE_SMOOTHING_PER_SECOND);

    if (this.boostSoundId === undefined) return;
    this.boost.volume(this.boostVolume, this.boostSoundId);
    this.boost.rate(this.boostRate, this.boostSoundId);

    if (!mix.boostShouldPlay && this.boostVolume <= STOP_VOLUME_THRESHOLD) {
      this.boost.stop(this.boostSoundId);
      this.boostSoundId = undefined;
      this.boostVolume = 0;
    }
  }
}
