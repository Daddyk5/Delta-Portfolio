"use client";

import { ArrowRight, Check, Code2, ExternalLink, Target } from "lucide-react";

type CaseStudy = {
  title: string;
  repoName?: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  idealFor: string;
  stack: string[];
  github: string;
  live?: string;
};

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "SBG Portal",
    tagline: "Live Client Project · Gym & Membership System",
    problem:
      "A growing jiu-jitsu ministry needed one place to present its classes online and to keep track of members, attendance, and belt progress.",
    solution:
      "A complete website plus admin and member portal on one secure backend: the public finds classes, staff run check-ins, members follow their own progress.",
    features: [
      "Public site: programs, schedule, coaches, gallery",
      "QR self check-in and staff attendance",
      "Belt progression log with coach feedback",
      "Member dashboard: attendance and belt journey",
      "Role-based logins for staff and members",
      "Messenger chat button for new inquiries",
    ],
    idealFor: "Gyms, studios, schools, clubs, and ministries",
    stack: ["Next.js 16", "React 19", "Supabase", "Tailwind v4", "TypeScript"],
    github: "https://github.com/Daddyk5/SBG-Portal",
    live: "https://sbg-portal.netlify.app/",
  },
  {
    title: "LegalEase",
    tagline: "AI Contract Analyzer · Capstone",
    problem:
      "Most Filipinos sign contracts without knowing if the terms will hold up, and a lawyer's review is costly for everyday agreements.",
    solution:
      "Snap a photo or upload a PDF and get a plain-language verdict in seconds, based on the Philippine Civil Code's contract categories.",
    features: [
      "Scan by camera or PDF upload with on-device OCR",
      "Classifies: Void, Voidable, Unenforceable, Rescissible, or Enforceable",
      "Plain-language summary with a confidence score",
      "Color-coded risk level for quick decisions",
      "Works offline with an on-device ML model",
      "Scan history and secure user accounts",
    ],
    idealFor: "Law offices, HR teams, landlords, and small businesses",
    stack: ["Kotlin", "Jetpack Compose", "Gemini AI", "ML Kit OCR", "TFLite", "Firebase"],
    github: "https://github.com/Daddyk5/LegalEase",
  },
  {
    title: "AniChain",
    tagline: "Real-Time Market Price Tracker",
    problem:
      "Food prices in Davao City's public markets change daily, but shoppers and food businesses only find out at the stall.",
    solution:
      "A trading-app style mobile board that pushes live meat, fish, egg, and produce prices from Bankerohan, Agdao, and city bulletins.",
    features: [
      "Live ticker: every open app updates instantly",
      "7, 30, and 90-day price charts per commodity",
      "Watchlist with instant price-change alerts",
      "AI trend summaries written from recorded prices",
      "Automated price scraping plus staff price entry",
      "Clean change-only history, ready for research",
    ],
    idealFor: "Agriculture offices, co-ops, and food businesses",
    stack: ["Expo", "TypeScript", "Hono", "PostgreSQL", "Claude AI"],
    github: "https://github.com/Daddyk5/AniChain-a-digital-food-stock-tracker-for-agriculture",
  },
  {
    title: "Yamashita Hono Fitness",
    repoName: "Ironvein Arena",
    tagline: "AI Fitness Coach App · Web + Android",
    problem:
      "Generic workout apps feel like chores, and AI fitness chatbots often invent exercises that don't exist.",
    solution:
      "An anime fight-arc themed training app whose AI coach only recommends real exercises from an 876-exercise database.",
    features: [
      "32 screens: onboarding, training, progress",
      "AI coach chat that streams replies, with voice input",
      "876-exercise library with form-demo images",
      "Cloud (Claude) or free local AI (Ollama)",
      "Accounts with a paid-feature gate for AI chat",
      "Native Android build via Capacitor",
    ],
    idealFor: "Fitness coaches, gyms, and wellness startups",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Capacitor", "Claude AI"],
    github: "https://github.com/Daddyk5/Yamashita-Hono-Fitness-App",
  },
  {
    title: "Decision Dashboard",
    tagline: "Rice Operations & Business Intelligence",
    problem:
      "Rice distributors juggle stock batches with expiry dates, orders, deliveries, and payments, often across scattered spreadsheets.",
    solution:
      "One operations dashboard for inventory, orders, deliveries, and payments, feeding live data to Power BI for management.",
    features: [
      "Batch tracking with automatic expiry status",
      "Orders, deliveries, and payment records",
      "Live Power BI reports for executives",
      "Role-based access with a full audit history",
      "REST API for integrations",
      "PDF operations reports",
    ],
    idealFor: "Distributors, warehouses, and retail chains",
    stack: ["Django", "PostgreSQL", "Supabase", "Power BI", "REST API"],
    github: "https://github.com/Daddyk5/Decision-Dashboard-",
    live: "https://decision-dashboard-7e3f.onrender.com",
  },
];

const moreProjects: Project[] = [
  {
    title: "ProspectIQ",
    tagline: "AI Lead-Intelligence SaaS",
    description:
      "Finds, qualifies, and tracks business leads across Canada and the US for outbound sales teams, with CRM workflows and analytics.",
    stack: ["AI", "SaaS", "CRM", "Analytics"],
    github: "https://github.com/Daddyk5/ProspectIQ",
  },
  {
    title: "CipherChain",
    tagline: "Web3 Encrypted Messaging",
    description:
      "End-to-end encrypted real-time chat with blockchain message verification and MetaMask sign-in.",
    stack: ["React", "Solidity", "Ethers.js", "Firebase"],
    github: "https://github.com/Daddyk5/CipherChain",
  },
  {
    title: "Ping AI Pilot",
    tagline: "AI Network Monitoring",
    description:
      "Real-time ping analytics and connectivity diagnostics, with AI-assisted insights to spot network issues early.",
    stack: ["Next.js", "TypeScript", "AI"],
    github: "https://github.com/Daddyk5/Ping_AI_Pilot",
  },
  {
    title: "Tracix Bot",
    tagline: "AI Chat Moderation",
    description:
      "Detects toxic messages in English, Filipino, and Spanish using NLP plus rules, with tiered mute logic and a Flask API.",
    stack: ["Python", "Flask", "NLP"],
    github: "https://github.com/Daddyk5/tracix_bot",
  },
  {
    title: "MoodSensor",
    tagline: "Real-Time Emotion Recognition",
    description:
      "Android app that reads facial expressions through the camera and classifies emotions live with on-device ML.",
    stack: ["Java", "Android", "CameraX", "TFLite"],
    github: "https://github.com/Daddyk5/MoodSensor",
  },
  {
    title: "KingxQueen",
    tagline: "Real-Time Dating Platform",
    description:
      "Live-chat backend with Socket.io and Firestore, hardened with Helmet, rate limiting, and compression.",
    stack: ["Node.js", "Express", "Socket.io"],
    github: "https://github.com/Daddyk5/Project-Dating-Expo",
  },
];

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <span
          key={item}
          className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function CodeLink({ href, label = "View Code" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-text transition hover:border-red hover:bg-red/10"
    >
      <Code2 className="h-4 w-4" />
      {label}
    </a>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-md border border-gold/30 bg-gradient-to-br from-surface via-black to-black transition duration-300 hover:border-gold/70 hover:shadow-[0_0_40px_rgba(200,164,74,0.12)]">
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.05fr_1fr]">
        {/* Story */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="font-heading text-5xl font-bold leading-none text-gold/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            {study.live && (
              <span className="flex items-center gap-1.5 rounded-sm border border-[#3ecf8e]/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3ecf8e]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3ecf8e]" />
                Live
              </span>
            )}
          </div>

          <h3 className="mt-4 font-heading text-3xl font-bold uppercase tracking-[0.05em] text-text md:text-4xl">
            {study.title}
          </h3>
          {study.repoName && (
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              a.k.a. {study.repoName}
            </p>
          )}
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-red">
            {study.tagline}
          </p>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                The Problem
              </dt>
              <dd className="mt-1.5 leading-7 text-muted">{study.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                What I Built
              </dt>
              <dd className="mt-1.5 leading-7 text-text">{study.solution}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-start gap-2 rounded-sm border border-border bg-black/50 px-4 py-3 text-sm text-muted">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-red" />
            <span>
              <span className="text-text">Perfect for:</span> {study.idealFor}
            </span>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            {study.live && (
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-bg"
              >
                <ExternalLink className="h-4 w-4" />
                Try Live Demo
              </a>
            )}
            <CodeLink href={study.github} />
          </div>
        </div>

        {/* Features */}
        <div className="rounded-md border border-border bg-black/60 p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Key Features
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {study.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-6 text-text">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Built With
            </p>
            <StackTags stack={study.stack} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-black/95" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Field Operations ]
        </p>
        <h2 className="mb-4 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow">
          Case Studies
        </h2>
        <p className="mb-12 max-w-3xl leading-8 text-muted">
          Real problems, real products. Here&apos;s what I&apos;ve built, who
          it helps, and what it can do. Each one can be adapted for your
          business.
        </p>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-md border border-red/40 bg-red/5 p-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-heading text-2xl font-semibold uppercase tracking-[0.08em] text-text">
              Need something like this?
            </p>
            <p className="mt-1 text-sm text-muted">
              A portal, dashboard, or AI-powered app built for your business.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-red bg-red/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:bg-red"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <h3 className="mb-6 mt-20 font-heading text-2xl uppercase tracking-[0.12em] text-text">
          More Builds
        </h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {moreProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-md border border-border bg-surface/90 p-6 transition hover:border-red"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                {project.tagline}
              </p>
              <h4 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[0.08em] text-gold">
                {project.title}
              </h4>
              <p className="mb-5 mt-4 flex-1 text-sm leading-7 text-muted">
                {project.description}
              </p>
              <StackTags stack={project.stack} />
              <div className="mt-6">
                <CodeLink href={project.github} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Daddyk5?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition hover:text-gold"
          >
            Browse all 40+ repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
