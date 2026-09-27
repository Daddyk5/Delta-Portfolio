"use client";

import { Download, FileText, Mail, Phone, Send } from "lucide-react";

const EMAIL = "kenneth.gulmatico@hcdc.edu.ph";

const socials = [
  { label: "GitHub", href: "https://github.com/Daddyk5" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kenneth-gulmatico-53036b375/" },
  { label: "Facebook", href: "https://www.facebook.com/axel.alonzo.16" },
  { label: "Telegram", href: "https://t.me/Firekai1" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(204,34,0,0.14),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Establish Comms ]
        </p>

        <h2 className="mb-6 font-heading text-4xl uppercase tracking-[0.14em] text-primary tactical-text-glow md:text-5xl">
          Let&apos;s Build Something
        </h2>

        <p className="mx-auto max-w-2xl leading-8 text-muted">
          Open to freelance projects, full-time roles, and collaborations in
          web development, AI, and security. Tell me what you&apos;re working
          on — I usually reply within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Project%20Inquiry&body=Hi%20Kenneth,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`}
            className="flex items-center gap-2 border border-red bg-red/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:bg-red"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>

          <a
            href="/kg_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-bg"
          >
            <FileText className="h-4 w-4" />
            View Resume
          </a>

          <a
            href="/kg_resume.pdf"
            download="Kenneth_Gulmatico_Resume.pdf"
            className="flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition hover:text-gold"
            >
              <Send className="h-3 w-3" />
              {label}
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          <a
            href="tel:+639054549950"
            className="flex items-center justify-center gap-3 rounded-md border border-border bg-surface/60 p-4 text-gold transition hover:border-red"
          >
            <Phone className="h-4 w-4" />
            +63 905 454 9950
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 rounded-md border border-border bg-surface/60 p-4 text-sm text-gold transition hover:border-red"
          >
            <Mail className="h-4 w-4" />
            {EMAIL}
          </a>
        </div>
      </div>

      <footer className="relative z-10 mt-20 border-t border-border py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Kenneth Gulmatico</p>
          <p>Davao City, Philippines · Built with Next.js</p>
        </div>
      </footer>
    </section>
  );
}
