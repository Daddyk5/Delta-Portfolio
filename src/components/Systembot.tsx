"use client";

import Image from "next/image";
import { AlertTriangle, ChevronsRight, Power, ShieldAlert, ShieldCheck } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

const RING_RADIUS = 70;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function Systembot() {
  const {
    startBootSequence,
    skipBootSequence,
    bootPhase,
    countdown,
    progress,
    bootComplete,
  } = useAudio();

  if (bootComplete) return null;

  const percent = Math.round(progress * 100);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio intro"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Nox_Hero.jpg"
          alt=""
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
          Portfolio System · v2.0
        </p>

        <h1 className="mb-2 font-heading text-4xl font-bold uppercase tracking-[0.18em] text-text md:text-6xl">
          Kenneth Gulmatico
        </h1>

        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          Full-Stack Developer · AI · Security Operations
        </p>

        <div className="mb-2 h-1.5 w-full max-w-xl overflow-hidden rounded-sm border border-border bg-surface/70">
          <div
            className="h-full bg-gradient-to-r from-red via-ember to-gold transition-[width] duration-150 ease-linear"
            style={{ width: `${Math.max(4, percent)}%` }}
          />
        </div>
        <p className="mb-10 w-full max-w-xl text-right font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          {percent.toString().padStart(3, "0")}%
        </p>

        {bootPhase === "idle" && (
          <div className="flex flex-col items-center gap-5">
            <button
              type="button"
              onClick={startBootSequence}
              className="group flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-bg"
            >
              <Power className="h-4 w-4" />
              Enter Portfolio
            </button>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Best experienced with sound on
            </p>
          </div>
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
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-red">
              <AlertTriangle className="h-5 w-5 animate-pulse" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                System boot in progress
              </p>
            </div>

            <div className="relative flex h-44 w-44 items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
                <circle cx="80" cy="80" r={RING_RADIUS} fill="none" stroke="#2e3a2e" strokeWidth="3" />
                <circle
                  cx="80"
                  cy="80"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#cc2200"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE * ((progress - 0.1) / 0.8)}
                  className="drop-shadow-[0_0_8px_rgba(204,34,0,0.6)] transition-[stroke-dashoffset] duration-100 ease-linear"
                />
              </svg>
              <span
                key={countdown}
                className="font-heading text-7xl text-red drop-shadow-[0_0_24px_rgba(204,34,0,0.45)] animate-countTick"
                aria-live="assertive"
              >
                {countdown}
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Stand by for operator interface
            </p>
          </div>
        )}

        {(bootPhase === "granted" || bootPhase === "flash") && (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-gold">
              <ShieldCheck className="h-8 w-8" />
              <p className="flicker font-heading text-3xl uppercase tracking-[0.3em] text-gold">
                Access Granted
              </p>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Launching portfolio...
            </p>
          </div>
        )}
      </div>

      {bootPhase !== "granted" && bootPhase !== "flash" && (
        <button
          type="button"
          onClick={skipBootSequence}
          className="absolute bottom-6 right-6 z-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition hover:text-gold"
        >
          Skip intro
          <ChevronsRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
