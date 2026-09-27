"use client";

const technicalSkills = [
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "React Components",
  "React Hooks",
  "Tailwind CSS",
  "Laravel / PHP",
  "Node.js / Express",
  "Python",
  "Flask",
  "Flutter",
  "Java",
  "Kotlin",
  "MySQL / PostgreSQL",
  "Supabase",
  "Django",
  "React Native / Expo",
  "Power BI",
  "REST API Integration",
  "Git / GitHub",
  "Cloud Computing (AWS)",
  "Linux Administration",
  "Network Troubleshooting",
  "Machine Learning Fundamentals",
  "AI Prompt Engineering",
  "Security Operations (SOC)",
  "Threat Detection & Triage",
  "Research Writing",
  "Technical Documentation",
  "UI / UX & Graphic Design",
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
  "PostgreSQL",
  "Supabase",
  "Django",
  "Expo",
  "Capacitor",
  "Power BI",
  "Tailwind CSS",
  "GitHub",
  "VS Code",
  "Figma",
  "Canva",
  "Zendesk",
  "Salesforce",
  "Helpshift",
  "CRM Systems",
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
  "English · Filipino · Cebuano · Ilonggo",
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

            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden rounded-md border border-gold/30 bg-gradient-to-br from-primary/20 via-surface/50 to-black/50 p-4 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/40 hover:from-primary/40 hover:via-surface/80"
                >
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  </div>
                  
                  <div className="relative">
                    <div className="inline-block mb-2">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse mr-2" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gold/70 group-hover:text-gold transition-colors">
                        ARMED
                      </span>
                    </div>
                    <p className="font-heading text-sm uppercase tracking-[0.08em] text-text group-hover:text-gold transition-colors">
                      {skill}
                    </p>
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