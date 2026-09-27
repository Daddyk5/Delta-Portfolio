"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

export default function AudioHUD() {
  const { isMuted, toggleMute, volume, setVolume, isPlaying, bootComplete } =
    useAudio();

  if (!bootComplete) return null;

  const handleVolumeChange = (value: number) => {
    setVolume(value);

    // If muted and user moves volume up, unmute automatically
    if (isMuted && value > 0) {
      toggleMute();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-auto rounded-md border sm:w-56 border-border bg-bg/90 p-3 text-xs font-mono text-muted shadow-[0_0_20px_rgba(204,34,0,0.12)] backdrop-blur-md war-hover">
      <div className="flex items-center justify-between gap-3 sm:mb-2">
        <span className="hidden tracking-widest sm:inline">
          {isMuted ? "AUDIO MUTED" : "BLAZEFALL OST"}
        </span>

        <button
          onClick={toggleMute}
          className="transition hover:text-text"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="mb-3 hidden h-4 items-end gap-1 sm:flex">
        {[1, 2, 3, 4].map((bar) => (
          <span
            key={bar}
            className={`w-1 rounded-sm bg-primary ${
              isPlaying && !isMuted
                ? "animate-[hudbar_0.9s_ease-in-out_infinite]"
                : "opacity-40"
            }`}
            style={{
              height: `${8 + bar * 2}px`,
              animationDelay: `${bar * 0.12}s`,
            }}
          />
        ))}
      </div>

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={isMuted ? 0 : volume}
        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        className="hidden w-full accent-primary sm:block"
        aria-label="Music volume"
      />
    </div>
  );
}