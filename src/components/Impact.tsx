"use client";

const stats = [
  {
    value: "100+",
    label: "Users Assisted",
    desc: "Handled technical support concerns during VXI AT&T experience.",
  },
  {
    value: "5+",
    label: "Projects Built",
    desc: "Created full-stack, AI-related, academic, and freelance projects.",
  },
  {
    value: "4+",
    label: "Years Experience",
    desc: "Combined tech support, leadership, operations, and creative work.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-black py-24 section-war-reveal">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Impact Report ]
        </p>

        <h2 className="mb-12 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
          Proven Results
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-border bg-surface/80 p-6 war-hover scan-pulse"
            >
              <h3 className="mb-2 font-heading text-4xl text-red">
                {stat.value}
              </h3>

              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text">
                {stat.label}
              </p>

              <p className="text-sm leading-7 text-muted">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}