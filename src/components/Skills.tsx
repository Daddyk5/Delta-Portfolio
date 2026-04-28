"use client";

const technicalSkills = [
  { name: "HTML / CSS", level: 9 },
  { name: "JavaScript", level: 8 },
  { name: "TypeScript", level: 6 },
  { name: "React.js", level: 7 },
  { name: "Next.js", level: 7 },
  { name: "React Components", level: 7 },
  { name: "React Hooks", level: 7 },
  { name: "Tailwind CSS", level: 8 },
  { name: "Laravel / PHP", level: 8 },
  { name: "Node.js / Express", level: 6 },
  { name: "Python", level: 7 },
  { name: "Flask", level: 6 },
  { name: "Flutter", level: 5 },
  { name: "Java", level: 7 },
  { name: "Kotlin", level: 6 },
  { name: "MySQL / Database Design", level: 8 },
  { name: "REST API Integration", level: 7 },
  { name: "Git / GitHub", level: 8 },
  { name: "Machine Learning Fundamentals", level: 6 },
  { name: "AI Prompt Engineering", level: 8 },
  { name: "Cybersecurity Basics", level: 6 },
  { name: "Research Writing", level: 8 },
  { name: "Technical Documentation", level: 8 },
  { name: "UI / UX & Graphic Design", level: 8 },
];

const toolStack = [
  "Next.js",
  "React",
  "React Hooks",
  "React Components",
  "Laravel",
  "PHP",
  "Node.js",
  "Express",
  "Python",
  "Flask",
  "Flutter",
  "Java",
  "Kotlin",
  "MySQL",
  "Tailwind CSS",
  "GitHub",
  "VS Code",
  "Figma",
  "Canva",
];

const softSkills = [
  "Technical Support",
  "Problem Solving",
  "Leadership",
  "Communication",
  "Graphic Design",
  "Documentation",
  "Research Writing",
  "Academic Writing",
  "Thesis Assistance",
  "Team Collaboration",
  "Adaptability",
  "Customer Assistance",
  "Creative Thinking",
  "Time Management",
  "Troubleshooting",
  "Critical Thinking",
  "Attention to Detail",
  "Fast Learner",
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 section-war-reveal">
      <div className="absolute inset-0 bg-black/95" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Tactical Arsenal ]
        </p>

        <h2 className="mb-4 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
          Skills
        </h2>

        <p className="mb-12 max-w-3xl leading-8 text-muted">
          My skill set spans full-stack development, technical support,
          creative design, and emerging technologies like AI prompting and
          machine learning fundamentals.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-heading text-2xl uppercase tracking-[0.08em] text-text">
              Technical Skills
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted">{skill.name}</span>
                    <span className="font-mono text-gold">{skill.level}/10</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-sm bg-border">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-gold to-red transition-all duration-700"
                      style={{ width: `${skill.level * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="mb-6 font-heading text-2xl uppercase tracking-[0.08em] text-text">
                Tools & Platforms
              </h3>

              <div className="flex flex-wrap gap-3">
                {toolStack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-sm border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted war-hover"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-heading text-2xl uppercase tracking-[0.08em] text-text">
                Field Traits
              </h3>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted war-hover"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}