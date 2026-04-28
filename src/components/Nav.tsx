"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/50 border-b border-border px-6 py-3 flex justify-between items-center">

      {/* LOGO */}
      <div className="font-heading text-xl text-primary tracking-widest">
        ◈ NOX
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-6 text-sm font-mono text-muted uppercase tracking-wider">
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#experience" className="hover:text-primary">Experience</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </div>

    </nav>
  );
}