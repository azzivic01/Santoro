/**
 * Web Audio ambient synthesizer for Santoro.
 * Simulates the calm, quiet acoustics of an old Roman palazzo:
 * gentle resonant warm harmonics, soft fountain water ripples, and distance.
 */
class RomanPalazzoAmbience {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private oscLow: OscillatorNode | null = null;
  private oscMid: OscillatorNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      // Gentle fade in
      this.masterGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Warm low drone (palazzo stone resonance ~108Hz)
      this.oscLow = this.ctx.createOscillator();
      this.oscLow.type = 'sine';
      this.oscLow.frequency.setValueAtTime(108, this.ctx.currentTime);

      const lowGain = this.ctx.createGain();
      lowGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.oscLow.connect(lowGain);
      lowGain.connect(this.masterGain);
      this.oscLow.start();

      // Soft upper fifth warm acoustic harmonic (162Hz)
      this.oscMid = this.ctx.createOscillator();
      this.oscMid.type = 'sine';
      this.oscMid.frequency.setValueAtTime(162, this.ctx.currentTime);

      const midGain = this.ctx.createGain();
      midGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.oscMid.connect(midGain);
      midGain.connect(this.masterGain);
      this.oscMid.start();

      // Pink noise filtered into gentle trickling fountain / courtyard whisper
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      // Bandpass filter for gentle courtyard ambience
      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(540, this.ctx.currentTime);
      bandpass.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.noiseNode.connect(bandpass);
      bandpass.connect(this.masterGain);
      this.noiseNode.start();

      this.isRunning = true;
    } catch {
      this.isRunning = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        try {
          this.oscLow?.stop();
          this.oscMid?.stop();
          this.noiseNode?.stop();
          this.oscLow?.disconnect();
          this.oscMid?.disconnect();
          this.noiseNode?.disconnect();
        } catch {
          // cleanup
        }
        this.isRunning = false;
      }, 1600);
    } catch {
      this.isRunning = false;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }
}

export const palazzoAmbience = new RomanPalazzoAmbience();
