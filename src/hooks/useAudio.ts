"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type BootPhase = "idle" | "warning" | "countdown" | "granted" | "flash" | "music" | "complete";

type AudioContextType = {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  bootPhase: BootPhase;
  countdown: number;
  bootComplete: boolean;
  toggleMute: () => void;
  setVolume: (value: number) => void;
  startBootSequence: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

const AUDIO = {
  warning: "/audio/warning.wav",
  verify: "/audio/verify.wav",
  music: "/audio/blazefall.mp3",
} as const;

const clampVolume = (value: number) => Math.min(1, Math.max(0, value));

export function AudioProvider({ children }: { children: ReactNode }) {
  const warningRef = useRef<HTMLAudioElement | null>(null);
  const verifyRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const pendingMusicRef = useRef(false);
  const volumeRef = useRef(0.35);
  const mutedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.35);
  const [bootPhase, setBootPhase] = useState<BootPhase>("idle");
  const [countdown, setCountdown] = useState(5);
  const [bootComplete, setBootComplete] = useState(false);

  const syncAudioSettings = useCallback(() => {
    const nextVolume = mutedRef.current ? 0 : volumeRef.current;
    const audioElements = [
      warningRef.current,
      verifyRef.current,
      musicRef.current,
    ];

    audioElements.forEach((audio) => {
      if (!audio) return;
      audio.muted = mutedRef.current;
      audio.volume = nextVolume;
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
      musicRef.current = new Audio(AUDIO.music);
      musicRef.current.loop = true;
      musicRef.current.preload = "auto";
      musicRef.current.addEventListener("play", () => setIsPlaying(true));
      musicRef.current.addEventListener("pause", () => setIsPlaying(false));
      musicRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    syncAudioSettings();
  }, [syncAudioSettings]);

  const playSound = useCallback((audio: HTMLAudioElement | null) => {
    if (!audio || mutedRef.current) return;

    audio.currentTime = 0;
    void audio.play().catch(() => {
      // Browser autoplay rules can block sounds until the first user gesture.
    });
  }, []);

  const playMusic = useCallback(() => {
    const music = musicRef.current;
    if (!music) return;

    pendingMusicRef.current = true;
    syncAudioSettings();

    void music.play().then(
      () => {
        pendingMusicRef.current = false;
        setIsPlaying(!mutedRef.current);
      },
      () => {
        setIsPlaying(false);
      }
    );
  }, [syncAudioSettings]);

  useEffect(() => {
    const retryPendingMusic = () => {
      if (!pendingMusicRef.current || mutedRef.current) return;
      playMusic();
    };

    window.addEventListener("pointerdown", retryPendingMusic);
    window.addEventListener("keydown", retryPendingMusic);
    window.addEventListener("touchstart", retryPendingMusic);

    return () => {
      window.removeEventListener("pointerdown", retryPendingMusic);
      window.removeEventListener("keydown", retryPendingMusic);
      window.removeEventListener("touchstart", retryPendingMusic);

      [warningRef.current, verifyRef.current, musicRef.current].forEach((audio) => {
        if (!audio) return;
        audio.pause();
        audio.src = "";
        audio.load();
      });
    };
  }, [playMusic]);

  const startBootSequence = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    initAudio();

    setBootPhase("warning");
    playSound(warningRef.current);

    setTimeout(() => {
      setBootPhase("countdown");

      let current = 5;
      setCountdown(current);
      playSound(warningRef.current);

      const timer = setInterval(() => {
        current -= 1;
        setCountdown(current);

        if (current > 0) {
          playSound(warningRef.current);
        }

        if (current <= 0) {
          clearInterval(timer);

          setBootPhase("granted");
          playSound(verifyRef.current);

          setTimeout(() => {
            setBootPhase("flash");

            setTimeout(() => {
              setBootPhase("music");
              playMusic();

              setTimeout(() => {
                setBootPhase("complete");
                setBootComplete(true);
              }, 1000);
            }, 300);
          }, 1200);
        }
      }, 1000);
    }, 1200);
  }, [initAudio, playMusic, playSound]);

  const toggleMute = useCallback(() => {
    const next = !mutedRef.current;
    mutedRef.current = next;
    setIsMuted(next);
    syncAudioSettings();

    const music = musicRef.current;
    if (!music) return;

    if (next) {
      setIsPlaying(false);
      return;
    }

    if (pendingMusicRef.current || bootPhase === "music" || bootPhase === "complete") {
      playMusic();
    }
  }, [bootPhase, playMusic, syncAudioSettings]);

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
      bootComplete,
      toggleMute,
      setVolume,
      startBootSequence,
    }),
    [
      isPlaying,
      isMuted,
      volume,
      bootPhase,
      countdown,
      bootComplete,
      toggleMute,
      setVolume,
      startBootSequence,
    ]
  );

  // eslint-disable-next-line react-hooks/refs
  return createElement(AudioContext.Provider, { value: contextValue }, children);
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return context;
}
