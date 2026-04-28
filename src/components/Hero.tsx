"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const noxBackgrounds = [
  "/images/nox1.webp",
  "/images/nox2.webp",
  "/images/nox3.webp",
  "/images/nox4.jpg",
  "/images/nox5.jpg",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0">
        <Image
          src="/images/Nox_Hero.jpg"
          alt="Nox tactical background"
          fill
          priority
          sizes="100vw"
          className="object-cover nox-bg"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,34,0,0.16),transparent_42%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[1] hidden h-40 grid-cols-5 gap-2 px-4 pb-4 opacity-25 md:grid">
        {noxBackgrounds.map((src) => (
          <div
            key={src}
            className="relative overflow-hidden rounded-sm border border-border bg-black"
          >
            <Image
              src={src}
              alt="Nox background layer"
              fill
              sizes="20vw"
              className="object-cover nox-bg"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[2] scanlines pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
          [ Operator Profile ]
        </p>

        <div className="hex-frame mb-6">
          <div className="hex-inner">
            <Image
              src="/images/mypic.jpg"
              alt="Kenneth Gulmatico"
              fill
              priority
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="mb-2 font-heading text-4xl font-bold uppercase tracking-[0.18em] text-primary drop-shadow-[0_0_18px_rgba(204,34,0,0.55)] md:text-6xl">
          Kenneth Gulmatico
        </h1>

        <p className="mb-2 text-xs font-mono uppercase tracking-[0.25em] text-text">
          Status: <span className="text-red animate-pulse">OPEN FOR WORK</span>
        </p>

        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted drop-shadow-[0_0_12px_rgba(0,0,0,0.9)] md:text-base">
          Tactical Tech Operator
        </p>

        <TypeAnimation
          sequence={[
            "Tech Support Specialist",
            1800,
            "Gaming Hub Operator",
            1800,
            "Graphic Designer",
            1800,
            "IT Student Leader",
            1800,
            "Full-Stack Developer",
            1800,
            "Machine Learning Engineering",
            1800,
            "AI Prompt Engineering",
            1800,
          ]}
          repeat={Infinity}
          className="max-w-2xl text-sm uppercase tracking-[0.18em] text-muted drop-shadow-[0_0_12px_rgba(0,0,0,0.9)] md:text-base"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="border border-primary bg-black/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-red hover:bg-red/20"
          >
            View Operations
          </a>

          <a
            href="#contact"
            className="border border-border bg-black/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/20"
          >
            Establish Comms
          </a>
        </div>
      </div>
    </section>
  );
}