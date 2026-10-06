"use client";

import { GraduationCap } from "lucide-react";

type Entry = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

const experiences: Entry[] = [
  {
    company: "Department of Social Welfare and Development (DSWD)",
    role: "IT Intern · Field Office XI",
    date: "February - May 2026",
    bullets: [
      "Built a Purchase Request Tracking System for the Pantawid Pamilyang Pilipino Program (4Ps) in the Davao Region.",
      "Completed 486 hours of supervised on-the-job training, supporting IT systems and workflow processes.",
    ],
  },
  {
    company: "Freelance · Remote",
    role: "Graphic Designer",
    date: "2026 - Present",
    bullets: [
      "Designed and edited capstone projects, documents, and client presentations.",
      "Created polished layouts and improved document readability for student and client deliverables.",
    ],
  },
  {
    company: "BC Gaming Hub",
    role: "Operator",
    date: "2025 - 2026",
    bullets: [
      "Managed daily gaming hub operations and assisted customers with station usage and concerns.",
      "Monitored equipment readiness, user sessions, and front-desk support tasks.",
    ],
  },
  {
    company: "VXI (AT&T Account)",
    role: "Technical Support Representative (TSR)",
    date: "October 2021 - November 2022",
    bullets: [
      "Resolved customer technical issues across a high-volume support queue, maintaining first-call resolution.",
      "Assisted users with account, service, and device-related issues in a fast-paced support environment.",
    ],
  },
];

const leadership: Entry[] = [
  {
    company: "CETSO",
    role: "Officer",
    date: "2024",
    bullets: [
      "Organizational planning, student liaison, and engagement initiatives for the IT department.",
    ],
  },
  {
    company: "Holy Cross of Davao College",
    role: "Class Representative",
    date: "2023 - 2024",
    bullets: [
      "Represented classmates and bridged communication between students and school bodies.",
    ],
  },
];

function EntryCard({ item }: { item: Entry }) {
  return (
    <div className="relative rounded-md border border-border border-l-2 border-l-red bg-surface/90 p-6 war-hover">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
        {item.date}
      </p>
      <h3 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[0.08em] text-gold">
        {item.role}
      </h3>
      <p className="mt-1 text-text">{item.company}</p>

      <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-red" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Deployment Log ]
        </p>
        <h2 className="mb-12 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
          Experience
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {experiences.map((item) => (
              <EntryCard key={item.role + item.company} item={item} />
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-md border border-gold/50 bg-gradient-to-b from-gold/10 to-black p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold/60 bg-black text-gold">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                2021 - 2026
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[0.06em] text-text">
                BS Information Technology
              </h3>
              <p className="mt-1 text-sm text-muted">Holy Cross of Davao College</p>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-muted">
                Capstone: <span className="text-gold">LegalEase</span>, an
                AI contract analyzer grounded in Philippine law.
              </p>
            </div>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Leadership
              </p>
              <div className="space-y-4">
                {leadership.map((item) => (
                  <EntryCard key={item.role + item.company} item={item} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
