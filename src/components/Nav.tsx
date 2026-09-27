"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b px-6 py-3 backdrop-blur transition-colors ${
        scrolled ? "border-border bg-black/80" : "border-transparent bg-black/30"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="font-heading text-xl font-bold tracking-widest text-gold">
          ◈ KG<span className="text-muted">.dev</span>
        </a>

        <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider text-muted lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`transition hover:text-gold ${active === href ? "text-gold" : ""}`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-red bg-red/15 px-4 py-2 text-text transition hover:bg-red"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-muted transition hover:text-gold lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 border-t border-border pt-3 font-mono text-sm uppercase tracking-wider text-muted lg:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-2 transition hover:text-gold ${active === href ? "text-gold" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
