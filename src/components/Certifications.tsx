"use client";

import Image from "next/image";
import { useState } from "react";
import { Medal, ShieldCheck, X } from "lucide-react";

type Certificate = {
  file: string;
  title: string;
  issuer?: string;
  tier: "Gold" | "Silver" | "Bronze";
};

const certificates: Certificate[] = [
  { file: "Agile Project Management.png", title: "Agile Project Management", tier: "Gold" },
  { file: "AI1.png", title: "Research Graduate", tier: "Silver" },
  { file: "AI2.png", title: "Research Graduate II", tier: "Silver" },
  { file: "aws_ai1.png", title: "AWS Artificial Intelligence", issuer: "AWS", tier: "Gold" },
  { file: "aws_develop.png", title: "AWS Cloud Developing", issuer: "AWS", tier: "Gold" },
  { file: "aws_essential.png", title: "AWS Prompt Engineering Essentials", issuer: "AWS", tier: "Gold" },
  { file: "aws_governance.png", title: "AWS Security & Governance", issuer: "AWS", tier: "Gold" },
  { file: "aws_ml.png", title: "AWS Machine Learning", issuer: "AWS", tier: "Gold" },
  { file: "aws_optimizer.png", title: "AWS Optimizing Foundation Models", issuer: "AWS", tier: "Gold" },
  { file: "aws_overview.png", title: "AWS Overview", issuer: "AWS", tier: "Gold" },
  { file: "aws_practioner.png", title: "AWS Cloud Practitioner", issuer: "AWS", tier: "Gold" },
  { file: "aws_practioner2.png", title: "AWS Cloud Practitioner Essentials", issuer: "AWS", tier: "Gold" },
  { file: "Aws_prompt_engineering.png", title: "AWS Prompt Engineering", issuer: "AWS", tier: "Gold" },
  { file: "aws_responsible.png", title: "AWS Responsible AI", issuer: "AWS", tier: "Gold" },
  { file: "aws_solutions.png", title: "AWS Generative AI Solutions", issuer: "AWS", tier: "Gold" },
  { file: "cert.jpg", title: "General Certification", tier: "Silver" },
  { file: "COE.png", title: "Certificate of Employment", tier: "Gold" },
  { file: "Critical Thinking in the AI Era.png", title: "Critical Thinking in the AI Era", tier: "Gold" },
  { file: "Data Science & Analytics.png", title: "Data Science & Analytics", tier: "Gold" },
  { file: "dbms.png", title: "Database Management Systems", tier: "Silver" },
  { file: "Full Stack Dev.png", title: "Full Stack Development", tier: "Gold" },
  { file: "introduction to AI.png", title: "Introduction to AI", tier: "Silver" },
  { file: "Introduction to Cybersecurity Awareness.png", title: "Cybersecurity Awareness", tier: "Silver" },
  { file: "python and flask.png", title: "Python and Flask", tier: "Silver" },
  { file: "Rag Certificate.png", title: "RAG Certificate", tier: "Gold" },
  { file: "sql joins.png", title: "SQL Joins", tier: "Bronze" },
  { file: "web1.png", title: "Web Development I", tier: "Silver" },
  { file: "web2.png", title: "Web Development II", tier: "Silver" },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/nox-projects.jpg"
          alt="Nox background"
          fill
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

          <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.18em] text-primary md:text-5xl">
            Commendations & Clearances
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted">
            Certifications displayed as tactical achievement medals. Select any
            medal to open the full certificate record.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <button
              key={cert.file}
              onClick={() => setSelected(cert)}
              className="group relative overflow-hidden rounded-md border border-border bg-[#111]/90 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-red hover:shadow-[0_0_28px_rgba(204,34,0,0.22)]"
            >
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red to-transparent opacity-70" />

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-black shadow-[0_0_18px_rgba(200,164,74,0.18)]">
                  <Medal className="h-7 w-7 text-gold" />
                </div>

                <span className="rounded-sm border border-border bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {cert.tier} Clearance
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
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-md border border-red bg-[#0A0A0A] p-4 shadow-[0_0_40px_rgba(204,34,0,0.28)]">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-20 rounded-sm border border-border bg-black/80 p-2 text-muted transition hover:border-red hover:text-red"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 border-b border-border pb-4 pr-12">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-red">
                Certificate Record Opened
              </p>
              <h3 className="mt-2 font-heading text-2xl uppercase tracking-[0.12em] text-primary">
                {selected.title}
              </h3>
            </div>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-sm border border-border bg-black">
              <Image
                src={`/Certifications/${selected.file}`}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}