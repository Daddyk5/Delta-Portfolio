"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 section-war-reveal">
      <div className="absolute inset-0">
        <Image
          src="/images/nox3.webp"
          alt="Nox about background"
          fill
          sizes="100vw"
          className="object-cover nox-bg"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div className="rounded-md border border-border bg-surface/90 p-6 war-hover scan-pulse">
          <div className="relative mb-4 h-72 w-full overflow-hidden rounded-sm border border-border">
            <Image
              src="/images/mypic.jpg"
              alt="Kenneth Gulmatico"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Operator Dossier
          </p>

          <h2 className="mt-2 font-heading text-3xl uppercase tracking-[0.12em] text-primary tactical-text-glow">
            Kenneth Gulmatico
          </h2>

          <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-red">
            ● Active Duty
          </p>

          <p className="mt-3 font-mono text-xs text-muted">SN-24032026</p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
            [ About ]
          </p>

          <h2 className="font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
            Tactical-Tech Creative Operator
          </h2>

          <p className="mt-6 leading-8 text-muted">
            I am an IT student and creative tech builder with experience in
            technical support, gaming hub operations, campus representation, and
            freelance design work.
          </p>

          <p className="mt-4 leading-8 text-muted">
            My portfolio combines technical ability, leadership, and a cinematic
            Delta Force inspired interface built around my own personal identity
            and work.
          </p>
        </div>
      </div>
    </section>
  );
}