"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Rust", "Python"],
  },
  {
    title: "Generative AI & LLM Systems",
    skills: ["RAG Pipelines", "AI Agents", "Multi-Modal AI", "Fine-Tuning", "Vector Databases"],
  },
  {
    title: "AI Frameworks & Tooling",
    skills: ["LangChain", "Hugging Face", "OpenAI API", "PyTorch"],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Frameworks / Libraries",
    skills: ["Next.js", "Zustand", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Developer Tools",
    skills: ["GitHub", "Docker", "CI/CD", "AWS", "VS Code", "Postman"],
  },
  {
    title: "Core Skills",
    skills: ["Communication", "System Design", "Distributed Systems", "Strategic Planning"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Toolkit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Skills & Expertise
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm border border-border rounded-md bg-card hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default text-foreground/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
