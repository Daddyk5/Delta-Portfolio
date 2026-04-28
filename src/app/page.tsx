import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Learning from "@/components/Learnings";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <Impact />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
    </main>
  );
}