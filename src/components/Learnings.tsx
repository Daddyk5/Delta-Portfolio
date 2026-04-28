"use client";

const learning = [
  "Machine Learning with Python",
  "Cybersecurity Fundamentals",
  "Advanced React and Next.js Patterns",
  "Laravel System Architecture",
  "AI Prompt Engineering",
  "Technical Documentation and Research Writing",
];

export default function Learning() {
  return (
    <section id="learning" className="bg-black py-24 section-war-reveal">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Current Training ]
        </p>

        <h2 className="mb-10 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
          Currently Learning
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {learning.map((item) => (
            <div
              key={item}
              className="border border-border bg-surface/80 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] text-muted war-hover scan-pulse"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}