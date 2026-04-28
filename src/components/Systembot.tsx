"use client";

import Image from "next/image";
import { AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

export default function Systembot() {
  const { startBootSequence, bootPhase, countdown, bootComplete } = useAudio();

  if (bootComplete) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/Nox_Hero.jpg"
          alt="Nox background"
          fill
          priority
          sizes="100vw"
          className="object-cover nox-bg opacity-30"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="absolute inset-0 boot-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {bootPhase === "flash" && (
        <div className="absolute inset-0 bg-red/70 animate-redFlash" />
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          Delta Force Portfolio System
        </p>

        <h1 className="mb-4 font-heading text-4xl font-bold uppercase tracking-[0.18em] text-text md:text-6xl">
          Kenneth Gulmatico
        </h1>

        <div className="mb-8 h-2 w-full max-w-xl overflow-hidden rounded-sm border border-border bg-surface/70">
          <div
            className={`h-full bg-gradient-to-r from-red via-ember to-primary transition-all duration-500 ${
              bootPhase === "warning"
                ? "w-[16%]"
                : bootPhase === "countdown"
                ? "w-[70%]"
                : bootPhase === "granted"
                ? "w-[92%]"
                : bootPhase === "flash" || bootPhase === "music"
                ? "w-full"
                : "w-[4%]"
            }`}
          />
        </div>

        {bootPhase === "idle" && (
          <button
            type="button"
            onClick={startBootSequence}
            className="border border-primary bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-primary transition hover:bg-primary hover:text-bg"
          >
            Initialize Audio Boot
          </button>
        )}

        {bootPhase === "warning" && (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3 text-red">
              <ShieldAlert className="h-8 w-8 animate-pulse" />
              <span className="font-heading text-2xl uppercase tracking-[0.25em]">
                Warning
              </span>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted">
              Initializing tactical audiovisual systems...
            </p>
          </div>
        )}

        {bootPhase === "countdown" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-red">
              <AlertTriangle className="h-7 w-7 animate-pulse" />
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted">
                System boot in progress
              </p>
            </div>

            <div className="font-heading text-7xl text-red drop-shadow-[0_0_24px_rgba(204,34,0,0.45)] animate-countPulse md:text-8xl">
              {countdown}
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Stand by for operator interface
            </p>
          </div>
        )}

        {bootPhase === "granted" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-primary">
              <ShieldCheck className="h-8 w-8" />
              <p className="flicker font-heading text-3xl uppercase tracking-[0.3em] text-primary">
                Access Granted
              </p>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Launching operator portfolio...
            </p>
          </div>
        )}

        {bootPhase === "music" && (
          <div className="space-y-3">
            <p className="font-heading text-2xl uppercase tracking-[0.25em] text-primary">
              System Online
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Entering cinematic interface...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}