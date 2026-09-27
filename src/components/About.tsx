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
            Full-Stack · AI · Security
          </p>

          <h2 className="mt-2 font-heading text-3xl uppercase tracking-[0.12em] text-primary tactical-text-glow">
            Kenneth Gulmatico
          </h2>

          <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-red">
            ● Available for Hire
          </p>

          <p className="mt-3 font-mono text-xs text-muted">SN-24032026</p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
            [ About ]
          </p>

          <h2 className="font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
            Builder. Troubleshooter. Defender.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            I&apos;m a BS Information Technology graduate (Holy Cross of Davao
            College, 2026) who turns ideas into working
            software: web platforms in Next.js and Laravel, Android apps with
            on-device machine learning, and AI tools that save teams real time.
          </p>

          <p className="mt-4 leading-8 text-muted">
            I spent a year as a{" "}
            <span className="text-text">technical support representative</span>{" "}
            on a high-volume AT&amp;T queue and completed an{" "}
            <span className="text-text">IT internship at DSWD</span>, which
            taught me to listen to users, debug under pressure, and communicate
            clearly. I now pair that with formal training in{" "}
            <span className="text-text">security operations</span> (Cisco SOC,
            CompTIA CySA+ track) and{" "}
            <span className="text-text">AWS cloud &amp; generative AI</span>.
          </p>

          <ul className="mt-6 grid gap-3 font-mono text-xs uppercase tracking-[0.15em] text-text sm:grid-cols-2">
            {[
              "Ships end-to-end, UI to database",
              "Security-first mindset",
              "Clear, client-friendly communication",
              "Fast learner, 30+ certifications",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 bg-red" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}