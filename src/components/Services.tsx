"use client";

import { Bot, Code2, PenTool, ShieldCheck, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  pitch: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Web & Mobile Development",
    pitch:
      "Fast, responsive products built end to end — from landing pages to full SaaS dashboards and Android apps.",
    deliverables: ["Next.js / React apps", "Supabase & Postgres backends", "Expo, Kotlin & Flutter mobile", "Dashboards & admin panels"],
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    pitch:
      "Put AI to work in your business: smart assistants, lead scoring, content moderation, and workflow automation.",
    deliverables: ["LLM & RAG features", "Chatbots & moderation", "On-device ML (TFLite)", "AWS generative AI"],
  },
  {
    icon: ShieldCheck,
    title: "Security & IT Support",
    pitch:
      "Security-minded setup and troubleshooting, backed by SOC and CySA+ training and real support-desk experience.",
    deliverables: ["Security reviews", "Log & threat triage", "Hardened app setup", "Tech support & docs"],
  },
  {
    icon: PenTool,
    title: "UI & Graphic Design",
    pitch:
      "Clean, professional visuals for products and documents — resumes, presentations, and interface mockups.",
    deliverables: ["UI / UX mockups", "Brand & social assets", "Resumes & CVs", "Thesis & report layout"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-24 section-war-reveal">
      <div className="absolute inset-0 boot-grid opacity-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
            [ Mission Capabilities ]
          </p>
          <h2 className="font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
            How I Can Help
          </h2>
          <p className="mt-4 leading-8 text-muted">
            Whether you need a product built, an AI feature added, or your
            systems looked over with a security eye — here&apos;s what I bring
            to your team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, pitch, deliverables }) => (
            <article
              key={title}
              className="group relative rounded-md border border-border bg-surface/80 p-7 war-hover"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-gold/50 bg-black text-gold transition group-hover:border-red group-hover:text-red">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="font-heading text-2xl font-semibold uppercase tracking-[0.08em] text-text">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{pitch}</p>

              <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-md border border-red/40 bg-red/5 p-6 text-center md:flex-row md:text-left">
          <p className="font-heading text-xl uppercase tracking-[0.1em] text-text">
            Have a project in mind? Let&apos;s scope it together.
          </p>
          <a
            href="#contact"
            className="border border-red bg-red/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:bg-red"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
