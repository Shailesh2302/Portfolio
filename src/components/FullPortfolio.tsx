"use client";

import ScrollProgress from "@/components/ScrollProgress";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Snippets from "@/components/Snippets";
import Education from "@/components/Education";
import LuffySection from "@/components/LuffySection";
import Contact from "@/components/Contact";

export default function FullPortfolio() {
  return (
    <>
      <ScrollProgress />
      <main className="flex-1">
        <section id="profile">
          <Profile />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="snippets">
          <Snippets />
        </section>
        <section id="education">
          <Education />
        </section>
        <LuffySection />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
