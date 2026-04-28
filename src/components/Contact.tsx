"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted">
          [ Establish Comms ]
        </p>

        <h2 className="mb-6 font-heading text-4xl uppercase tracking-[0.14em] text-primary">
          Contact
        </h2>

        <p className="mx-auto max-w-2xl leading-8 text-muted">
          Ready for collaborations, project opportunities, creative technical
          work, and professional connections.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kenneth.gulmatico@hcdc.edu.ph?subject=Job Opportunity&body=Hi Kenneth,%0D%0A%0D%0AI saw your portfolio and would like to discuss an opportunity."
            className="border border-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-red hover:bg-red/10"
          >
            Email Me
          </a>

          <a
            href="/kg_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Daddyk5"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kenneth-gulmatico-53036b375/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/axel.alonzo.16"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            Facebook
          </a>

          <a
            href="https://t.me/Firekai1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary hover:bg-primary/10"
          >
            Telegram
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Direct Line
          </p>

          <a
            href="tel:+639054549950"
            className="text-lg text-gold transition hover:text-red"
          >
            +63 905 454 9950
          </a>

          <p className="mt-3 font-mono text-xs text-muted">
            Email: kenneth.gulmatico@hcdc.edu.ph
          </p>
        </div>
      </div>
    </section>
  );
}