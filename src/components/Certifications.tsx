"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, ExternalLink, Medal, ShieldCheck, X } from "lucide-react";

type Category = "Security" | "Cloud & AI" | "Development" | "Professional";

type Certificate = {
  /** File in /public/Certifications — an image or a PDF. */
  file?: string;
  title: string;
  issuer?: string;
  platform?: string;
  date?: string;
  verifyUrl?: string;
  category: Category;
  tier: "Gold" | "Silver" | "Bronze";
  featured?: boolean;
};

const certificates: Certificate[] = [
  {
    file: "compTIaCysa+.png",
    title: "CompTIA CySA+ (CS0-003): Security Operations",
    issuer: "Pearson",
    platform: "Coursera",
    date: "Sep 2026",
    verifyUrl: "https://coursera.org/verify/35GOE6AVC4YQ",
    category: "Security",
    tier: "Gold",
    featured: true,
  },
  {
    file: "comPsysa-exam.png",
    title: "CompTIA CySA+ (CS0-003): Certification Exam Prep",
    issuer: "Pearson",
    platform: "Coursera",
    date: "Sep 2026",
    verifyUrl: "https://coursera.org/verify/QLB02EH53O5T",
    category: "Security",
    tier: "Gold",
    featured: true,
  },
  {
    file: "soc.png",
    title: "Security Operations Center (SOC)",
    issuer: "Cisco",
    platform: "Coursera",
    date: "Jan 2026",
    verifyUrl: "https://coursera.org/verify/E2C65XN5VGWL",
    category: "Security",
    tier: "Gold",
    featured: true,
  },
  { file: "aws_governance.png", title: "AWS Security & Governance", issuer: "AWS", category: "Security", tier: "Gold" },
  { file: "Introduction to Cybersecurity Awareness.png", title: "Cybersecurity Awareness", category: "Security", tier: "Silver" },
  { file: "aws_practioner.png", title: "AWS Cloud Practitioner", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_practioner2.png", title: "AWS Cloud Practitioner Essentials", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_develop.png", title: "AWS Cloud Developing", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_overview.png", title: "AWS Overview", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_ai1.png", title: "AWS Artificial Intelligence", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_ml.png", title: "AWS Machine Learning", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_solutions.png", title: "AWS Generative AI Solutions", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_optimizer.png", title: "AWS Optimizing Foundation Models", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_responsible.png", title: "AWS Responsible AI", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "Aws_prompt_engineering.png", title: "AWS Prompt Engineering", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "aws_essential.png", title: "AWS Prompt Engineering Essentials", issuer: "AWS", category: "Cloud & AI", tier: "Gold" },
  { file: "Rag Certificate.png", title: "Retrieval-Augmented Generation (RAG)", category: "Cloud & AI", tier: "Gold" },
  { file: "introduction to AI.png", title: "Introduction to AI", category: "Cloud & AI", tier: "Silver" },
  { file: "AI1.png", title: "AI Research Graduate", category: "Cloud & AI", tier: "Silver" },
  { file: "AI2.png", title: "AI Research Graduate II", category: "Cloud & AI", tier: "Silver" },
  { file: "Full Stack Dev.png", title: "Full Stack Development", category: "Development", tier: "Gold" },
  { file: "Data Science & Analytics.png", title: "Data Science & Analytics", category: "Development", tier: "Gold" },
  { file: "python and flask.png", title: "Python and Flask", category: "Development", tier: "Silver" },
  { file: "dbms.png", title: "Database Management Systems", category: "Development", tier: "Silver" },
  { file: "sql joins.png", title: "SQL Joins", category: "Development", tier: "Bronze" },
  { file: "web1.png", title: "Web Development I", category: "Development", tier: "Silver" },
  { file: "web2.png", title: "Web Development II", category: "Development", tier: "Silver" },
  { file: "Agile Project Management.png", title: "Agile Project Management", category: "Professional", tier: "Gold" },
  { file: "Critical Thinking in the AI Era.png", title: "Critical Thinking in the AI Era", category: "Professional", tier: "Gold" },
  { file: "COE.png", title: "Certificate of Employment", category: "Professional", tier: "Gold" },
  { file: "cert.jpg", title: "General Certification", category: "Professional", tier: "Silver" },
];

const filters = ["All", "Security", "Cloud & AI", "Development", "Professional"] as const;
type Filter = (typeof filters)[number];

const isPdf = (file?: string) => file?.toLowerCase().endsWith(".pdf") ?? false;

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const featured = certificates.filter((c) => c.featured);
  const archive = useMemo(
    () =>
      certificates.filter(
        (c) => !c.featured && (filter === "All" || c.category === filter)
      ),
    [filter]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/nox2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover nox-bg"
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="absolute inset-0 boot-grid opacity-10" />
      <div className="absolute inset-0 scanlines pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
            [ Achievement Archive ]
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.18em] text-primary tactical-text-glow md:text-5xl">
            Certifications & Training
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted">
            {certificates.length} credentials across security operations, AWS
            cloud and AI, and software development. Security credentials are
            independently verifiable.
          </p>
        </div>

        {/* Featured: latest security credentials */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-red" />
            <h3 className="font-heading text-xl uppercase tracking-[0.2em] text-text">
              Security Operations Track
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-red/60 to-transparent" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((cert) => (
              <article
                key={cert.title}
                className="group relative overflow-hidden rounded-md border border-red/50 bg-gradient-to-b from-red/10 via-[#111]/95 to-black p-6 shadow-[0_0_30px_rgba(204,34,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-red hover:shadow-[0_0_36px_rgba(204,34,0,0.28)]"
              >
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red to-transparent" />

                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-sm border border-gold/60 bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {cert.date}
                  </span>
                </div>

                <h4 className="min-h-16 font-heading text-2xl font-semibold uppercase leading-tight tracking-[0.06em] text-text">
                  {cert.title}
                </h4>

                <p className="mt-2 text-sm text-muted">
                  Authorized by {cert.issuer} · via {cert.platform}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition hover:text-red"
                    >
                      <BadgeCheck className="h-4 w-4" />
                      Verify
                    </a>
                  )}
                  {cert.file && (
                    <button
                      type="button"
                      onClick={() => setSelected(cert)}
                      className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition hover:text-text"
                    >
                      <Medal className="h-4 w-4" />
                      View Certificate
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Archive with category filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition ${
                filter === f
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border bg-black/60 text-muted hover:border-primary hover:text-text"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {archive.map((cert, index) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelected(cert)}
              className="group relative overflow-hidden rounded-md border border-border bg-[#111]/90 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-red hover:shadow-[0_0_28px_rgba(204,34,0,0.22)]"
            >
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red to-transparent opacity-70" />

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-black shadow-[0_0_18px_rgba(200,164,74,0.18)]">
                  <Medal className="h-6 w-6 text-gold" />
                </div>

                <span className="rounded-sm border border-border bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {cert.category}
              </p>

              <h3 className="mt-2 min-h-14 font-heading text-xl font-semibold uppercase tracking-[0.08em] text-text">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {cert.issuer ?? "Training Record"}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                <ShieldCheck className="h-4 w-4" />
                View Certificate
              </div>

              <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-primary opacity-60" />
              <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-primary opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-md border border-red bg-[#0A0A0A] p-4 shadow-[0_0_40px_rgba(204,34,0,0.28)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-20 rounded-sm border border-border bg-black/80 p-2 text-muted transition hover:border-red hover:text-red"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4 pr-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-red">
                  Certificate Record Opened
                </p>
                <h3 className="mt-2 font-heading text-2xl uppercase tracking-[0.12em] text-primary">
                  {selected.title}
                </h3>
              </div>
              {selected.verifyUrl && (
                <a
                  href={selected.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gold px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-bg"
                >
                  Verify on {selected.platform ?? "issuer site"}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-sm border border-border bg-black">
              {isPdf(selected.file) ? (
                <iframe
                  src={`/Certifications/${encodeURIComponent(selected.file!)}#view=FitH&toolbar=0`}
                  title={selected.title}
                  className="h-full w-full bg-white"
                />
              ) : (
                <Image
                  src={`/Certifications/${selected.file}`}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
