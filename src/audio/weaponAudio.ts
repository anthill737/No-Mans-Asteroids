import { Howl } from 'howler';
import { SILENT_WAV_URI } from './gameAudio';

// Weapon audio manager.
// Chaingun uses a single looping Howl (not per-shot) to prevent distortion at 12+ shots/sec.
// SILENT_WAV_URI is prepended to each src list so Howler loads successfully even when
// the mp3/wav asset files are absent, preventing browser console errors.
export class WeaponAudio {
  private readonly laser: Howl;
  private readonly chaingun: Howl;
  private readonly whoosh: Howl;
  private readonly explosion: Howl;

  private chaingunSoundId: number | undefined = undefined;

  constructor() {
    this.laser = new Howl({
      src: [SILENT_WAV_URI, 'sounds/laser-zap.mp3', 'sounds/laser-zap.wav'],
      volume: 0.7,
      onloaderror: () => {},
    });

    this.chaingun = new Howl({
      src: [SILENT_WAV_URI, 'sounds/chaingun-chatter.mp3', 'sounds/chaingun-chatter.wav'],
      loop: true,
      volume: 0.8,
      onloaderror: () => {},
    });

    this.whoosh = new Howl({
      src: [SILENT_WAV_URI, 'sounds/missile-whoosh.mp3', 'sounds/missile-whoosh.wav'],
      volume: 0.8,
      onloaderror: () => {},
    });

    this.explosion = new Howl({
      src: [SILENT_WAV_URI, 'sounds/missile-explosion.mp3', 'sounds/missile-explosion.wav'],
      volume: 1.0,
      onloaderror: () => {},
    });
  }

  playLaserZap(): void {
    this.laser.play();
  }

  // Start continuous chatter. Safe to call every frame — only starts once if already playing.
  startChaingunChatter(): void {
    if (!this.chaingun.playing(this.chaingunSoundId)) {
      this.chaingunSoundId = this.chaingun.play();
    }
  }

  stopChaingunChatter(): void {
    if (this.chaingunSoundId !== undefined) {
      this.chaingun.stop(this.chaingunSoundId);
      this.chaingunSoundId = undefined;
    }
  }

  playMissileWhoosh(): void {
    this.whoosh.play();
  }

  playMissileExplosion(): void {
    this.explosion.play();
  }
}
