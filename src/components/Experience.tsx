"use client";

const experiences = [
  {
    company: "VXI AT&T",
    role: "Tech Support",
    date: "October 2021 - November 2022",
    bullets: [
      "Provided technical support assistance to customers and helped resolve service-related concerns.",
      "Handled troubleshooting clearly while maintaining professional communication.",
      "Assisted users with account, service, and device-related issues in a fast-paced support environment.",
    ],
  },
  {
    company: "BC Gaming Hub",
    role: "Operator",
    date: "2025 - 2026",
    bullets: [
      "Managed daily gaming hub operations and assisted customers with station usage and concerns.",
      "Monitored equipment readiness, user sessions, and front-desk support tasks.",
      "Helped maintain a smooth customer experience in a busy gaming environment.",
    ],
  },
  {
    company: "Freelance",
    role: "Graphic Designer",
    date: "2026 - Present",
    bullets: [
      "Designed resumes, academic papers, thesis materials, and presentation-ready visual assets.",
      "Created polished layouts and improved document readability for student and client deliverables.",
      "Balanced client requests with clean design execution and practical output.",
    ],
  },
  {
    company: "College Representation",
    role: "2nd Year ITS Representative",
    date: "August 2023 - May 2024",
    bullets: [
      "Represented fellow students and helped communicate academic and organizational concerns.",
      "Participated in student-related coordination and leadership responsibilities.",
      "Supported student engagement and served as a bridge between learners and school bodies.",
    ],
  },
  {
    company: "CETSO",
    role: "3rd Year IT Representative",
    date: "2024",
    bullets: [
      "Served as a student representative for the 3rd year IT group.",
      "Assisted in coordination and communication for student matters.",
      "Demonstrated leadership, reliability, and willingness to serve the department.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Deployment Log ]
        </p>
        <h2 className="mb-12 font-heading text-4xl uppercase tracking-[0.14em] text-primary">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-border bg-surface/90 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                {item.date}
              </p>
              <h3 className="mt-2 font-heading text-2xl uppercase tracking-[0.08em] text-gold">
                {item.company}
              </h3>
              <p className="mt-1 text-lg text-text">{item.role}</p>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}