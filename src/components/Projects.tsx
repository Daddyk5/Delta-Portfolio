"use client";

const projects = [
  {
    title: "Tracix Bot",
  description:
    "An experimental automated assistant created for school research purposes, designed to demonstrate bot logic, structured workflows, and practical automation handling in local environments.",
  stack: ["Python", "Automation", "Scripting", "Local Bot System"],
  github: "https://github.com/Daddyk5/tracix_bot",
  },
  {
    title: "LegalEase",
    description:
      "A legal-focused project that adds service-oriented problem solving and practical utility to the portfolio.",
    stack: ["Kotlin"],
    github: "https://github.com/Daddyk5/LegalEase",
  },
  {
    title: "MoodSensor",
    description:
      "A modern concept project that adds variety and a more innovative feel to the project lineup.",
    stack: ["Java"],
    github: "https://github.com/Daddyk5/MoodSensor",
  },
  {
    title: "Netcafe Tracker",
    description:
      "A system for tracking promos, sales, and operational information with practical business use.",
    stack: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/Daddyk5/Netcafe_tracker",
  },
  {
    title: "Project Dating Expo",
    description:
      "A JavaScript-based project that expands the portfolio with another interactive app concept.",
    stack: ["JavaScript"],
    github: "https://github.com/Daddyk5/Project-Dating-Expo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-black/95" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Field Operations ]
        </p>
        <h2 className="mb-12 font-heading text-4xl uppercase tracking-[0.14em] text-primary">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-md border border-border bg-surface/90 p-6 transition hover:border-red"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                Operation
              </p>
              <h3 className="mt-2 font-heading text-2xl uppercase tracking-[0.08em] text-gold">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border border-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-text transition hover:border-red hover:bg-red/10"
              >
                View GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}