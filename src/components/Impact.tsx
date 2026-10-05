"use client";

const stats = [
  {
    value: "100+",
    label: "Users Supported",
    desc: "Resolved account, device, and service issues for AT&T customers in a fast-paced support floor.",
  },
  {
    value: "10+",
    label: "Projects Shipped",
    desc: "Including a live client portal for a Davao City gym, a real-time market price app, and AI-powered mobile apps.",
  },
  {
    value: "30+",
    label: "Certifications",
    desc: "Meta Full-Stack Developer, Cisco SOC, CompTIA CySA+ training, and a full AWS cloud & generative-AI track.",
  },
  {
    value: "4+",
    label: "Years in Tech",
    desc: "Combined support, operations, leadership, and freelance design experience.",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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