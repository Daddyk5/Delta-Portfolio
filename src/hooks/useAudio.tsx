"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type BootPhase = "idle" | "warning" | "countdown" | "granted" | "flash" | "complete";

type AudioContextType = {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  bootPhase: BootPhase;
  countdown: number;
  /** 0 → 1 across the whole boot sequence, used for the progress bar. */
  progress: number;
  bootComplete: boolean;
  toggleMute: () => void;
  setVolume: (value: number) => void;
  startBootSequence: () => void;
  skipBootSequence: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

const AUDIO = {
  warning: "/audio/warning.wav",
  verify: "/audio/verify.wav",
  music: "/audio/blazefall.mp3",
} as const;

const TIMING = {
  warningMs: 1200,
  countdownFrom: 5,
  grantedMs: 1200,
  flashMs: 350,
  musicFadeInMs: 2500,
  warningFadeOutMs: 400,
} as const;

const clampVolume = (value: number) => Math.min(1, Math.max(0, value));

export function AudioProvider({ children }: { children: ReactNode }) {
  const warningRef = useRef<HTMLAudioElement | null>(null);
  const verifyRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const pendingMusicRef = useRef(false);
  const musicWantedRef = useRef(false);
  const volumeRef = useRef(0.35);
  const mutedRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const fadesRef = useRef(new Map<HTMLAudioElement, number>());

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.35);
  const [bootPhase, setBootPhase] = useState<BootPhase>("idle");
  const [countdown, setCountdown] = useState<number>(TIMING.countdownFrom);
  const [progress, setProgress] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);

  const later = useCallback((fn: () => void, ms: number) => {
    timersRef.current.push(window.setTimeout(fn, ms));
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => {
      window.clearTimeout(id);
      window.clearInterval(id);
    });
    timersRef.current = [];
  }, []);

  const stopFade = useCallback((audio: HTMLAudioElement) => {
    const id = fadesRef.current.get(audio);
    if (id !== undefined) {
      window.clearInterval(id);
      fadesRef.current.delete(audio);
    }
  }, []);

  /** Ramp an element's volume from its current level to `to` (0–1 of the user volume). */
  const fade = useCallback(
    (audio: HTMLAudioElement, to: number, ms: number, onDone?: () => void) => {
      stopFade(audio);
      const from = volumeRef.current > 0 ? audio.volume / volumeRef.current : 0;
      const start = performance.now();

      const id = window.setInterval(() => {
        const t = Math.min(1, (performance.now() - start) / ms);
        // Read volumeRef every tick so slider changes during a fade are respected.
        audio.volume = clampVolume((from + (to - from) * t) * volumeRef.current);
        if (t >= 1) {
          stopFade(audio);
          onDone?.();
        }
      }, 40);

      fadesRef.current.set(audio, id);
    },
    [stopFade]
  );

  const syncAudioSettings = useCallback(() => {
    [warningRef.current, verifyRef.current, musicRef.current].forEach((audio) => {
      if (!audio) return;
      audio.muted = mutedRef.current;
      if (!fadesRef.current.has(audio)) audio.volume = volumeRef.current;
    });
  }, []);

  const initAudio = useCallback(() => {
    if (!warningRef.current) {
      warningRef.current = new Audio(AUDIO.warning);
      warningRef.current.preload = "auto";
    }

    if (!verifyRef.current) {
      verifyRef.current = new Audio(AUDIO.verify);
      verifyRef.current.preload = "auto";
    }

    if (!musicRef.current) {
      const music = new Audio(AUDIO.music);
      music.loop = true;
      music.preload = "auto";
      music.addEventListener("play", () => setIsPlaying(true));
      music.addEventListener("pause", () => setIsPlaying(false));
      music.addEventListener("ended", () => setIsPlaying(false));
      musicRef.current = music;
    }

    syncAudioSettings();
  }, [syncAudioSettings]);

  /**
   * Safari/iOS only allow audio that was started during a user gesture.
   * Starting and immediately pausing each element inside the click "unlocks"
   * it, so the music can start on its own when the countdown reaches zero.
   */
  const unlockAudio = useCallback((audio: HTMLAudioElement | null) => {
    if (!audio) return;
    const previous = audio.muted;
    audio.muted = true;
    void audio
      .play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
      })
      .catch(() => {})
      .finally(() => {
        audio.muted = previous;
      });
  }, []);

  const playSound = useCallback(
    (audio: HTMLAudioElement | null) => {
      if (!audio || mutedRef.current) return;
      stopFade(audio);
      audio.volume = volumeRef.current;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Autoplay can still be blocked; the boot visuals carry on without it.
      });
    },
    [stopFade]
  );

  const stopSound = useCallback(
    (audio: HTMLAudioElement | null, fadeMs = 0) => {
      if (!audio || audio.paused) return;
      if (fadeMs === 0) {
        stopFade(audio);
        audio.pause();
        return;
      }
      fade(audio, 0, fadeMs, () => {
        audio.pause();
        audio.volume = volumeRef.current;
      });
    },
    [fade, stopFade]
  );

  const playMusic = useCallback(
    (fadeInMs = 0) => {
      const music = musicRef.current;
      if (!music) return;

      musicWantedRef.current = true;
      pendingMusicRef.current = true;
      music.muted = mutedRef.current;
      if (fadeInMs > 0 && music.paused) music.volume = 0;

      void music.play().then(
        () => {
          pendingMusicRef.current = false;
          if (fadeInMs > 0) fade(music, 1, fadeInMs);
          else music.volume = volumeRef.current;
        },
        () => {
          // Blocked: retry on the next user interaction (see effect below).
          music.volume = volumeRef.current;
          setIsPlaying(false);
        }
      );
    },
    [fade]
  );

  useEffect(() => {
    const retryPendingMusic = () => {
      if (!pendingMusicRef.current || mutedRef.current) return;
      playMusic();
    };

    const fades = fadesRef.current;
    const audioRefs = [warningRef, verifyRef, musicRef];

    window.addEventListener("pointerdown", retryPendingMusic);
    window.addEventListener("keydown", retryPendingMusic);
    window.addEventListener("touchstart", retryPendingMusic);

    return () => {
      window.removeEventListener("pointerdown", retryPendingMusic);
      window.removeEventListener("keydown", retryPendingMusic);
      window.removeEventListener("touchstart", retryPendingMusic);

      clearTimers();
      fades.forEach((id) => window.clearInterval(id));
      fades.clear();

      audioRefs.forEach((ref) => {
        const audio = ref.current;
        if (!audio) return;
        audio.pause();
        audio.src = "";
        audio.load();
        ref.current = null;
      });
      startedRef.current = false;
      musicWantedRef.current = false;
    };
  }, [clearTimers, playMusic]);

  const finishBoot = useCallback(() => {
    setProgress(1);
    setBootPhase("complete");
    setBootComplete(true);
  }, []);

  const startBootSequence = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    initAudio();
    unlockAudio(verifyRef.current);
    unlockAudio(musicRef.current);

    // The warning track is ~11s long — play it once and let it run under the
    // countdown instead of restarting it every second.
    setBootPhase("warning");
    setProgress(0.05);
    playSound(warningRef.current);

    later(() => {
      setBootPhase("countdown");

      // Derive the display from a fixed deadline so the timer never drifts,
      // even if the tab is throttled or a tick arrives late.
      const total = TIMING.countdownFrom * 1000;
      const deadline = performance.now() + total;
      setCountdown(TIMING.countdownFrom);

      const tick = window.setInterval(() => {
        const remaining = Math.max(0, deadline - performance.now());
        setCountdown(Math.ceil(remaining / 1000));
        setProgress(0.1 + 0.8 * (1 - remaining / total));

        if (remaining > 0) return;

        window.clearInterval(tick);

        // Timer hits zero → music starts right away.
        stopSound(warningRef.current, TIMING.warningFadeOutMs);
        playSound(verifyRef.current);
        playMusic(TIMING.musicFadeInMs);

        setBootPhase("granted");
        setProgress(0.95);

        later(() => {
          setBootPhase("flash");
          later(finishBoot, TIMING.flashMs);
        }, TIMING.grantedMs);
      }, 50);

      timersRef.current.push(tick);
    }, TIMING.warningMs);
  }, [finishBoot, initAudio, later, playMusic, playSound, stopSound, unlockAudio]);

  const skipBootSequence = useCallback(() => {
    clearTimers();
    initAudio();
    startedRef.current = true;
    stopSound(warningRef.current);
    playMusic(TIMING.musicFadeInMs);
    finishBoot();
  }, [clearTimers, finishBoot, initAudio, playMusic, stopSound]);

  const toggleMute = useCallback(() => {
    const next = !mutedRef.current;
    mutedRef.current = next;
    setIsMuted(next);
    syncAudioSettings();

    const music = musicRef.current;
    if (!music) return;

    // Only resume if the boot sequence has already reached the music cue.
    if (!next && musicWantedRef.current && music.paused) {
      playMusic();
    }
  }, [playMusic, syncAudioSettings]);

  const setVolume = useCallback(
    (value: number) => {
      const next = clampVolume(value);
      volumeRef.current = next;
      setVolumeState(next);
      syncAudioSettings();
    },
    [syncAudioSettings]
  );

  const contextValue = useMemo(
    () => ({
      isPlaying,
      isMuted,
      volume,
      bootPhase,
      countdown,
      progress,
      bootComplete,
      toggleMute,
      setVolume,
      startBootSequence,
      skipBootSequence,
    }),
    [
      isPlaying,
      isMuted,
      volume,
      bootPhase,
      countdown,
      progress,
      bootComplete,
      toggleMute,
      setVolume,
      startBootSequence,
      skipBootSequence,
    ]
  );

  return (
    <AudioContext.Provider value={contextValue}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return context;
}
