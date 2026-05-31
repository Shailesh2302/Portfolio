"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "OmniMind",
    image: "/images/omnimind.png",
    description:
      "Distributed multi-modal AI system for semantic retrieval across videos, PDFs, DOCX, and spreadsheets.",
    url: "https://github.com/Shailesh2302/OmniMind",
    tech: ["Rust", "Python", "TypeScript", "Qdrant", "Redis", "FastAPI", "Next.js"],
  },
  {
    name: "OSSBeat",
    image: "/images/ossbeat.png",
    description:
      "Developer platform for discovering, analyzing, and selecting GitHub repositories for open-source contributions.",
    url: "https://ossbeat.vercel.app",
    github: "https://github.com/Shailesh2302/OSSBeat",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Next.js", "Redis"],
  },
  {
    name: "SensAI",
    image: "/images/sensai.png",
    description:
      "AI-powered career coaching platform — natural language to insights for career development.",
    url: "https://sensai-ten-tan.vercel.app",
    github: "https://github.com/Shailesh2302/AI-Career-Coach",
    tech: ["React", "TypeScript", "Gemini AI", "Tailwind CSS"],
  },
  {
    name: "ZapCode",
    image: "/images/zapcode.png",
    description:
      "AI-powered platform that converts natural language into fully functional code, reducing manual coding time by up to 70%.",
    url: "https://zap-code.vercel.app",
    github: "https://github.com/Shailesh2302/ZapCode",
    tech: ["React", "TypeScript", "WebContainer", "Gemini AI"],
  },
  {
    name: "Backend CLI",
    image: "/images/backend-cli.png",
    description:
      "A modern open-source backend project generator that scaffolds full backend apps in seconds with Express, Fastify, Hono, or NestJS — supporting TypeScript, PostgreSQL, MongoDB, Docker, and more.",
    url: "https://github.com/Shailesh2302/backend-CLI",
    tech: ["Node.js", "TypeScript", "Express", "Fastify", "Hono", "NestJS", "Prisma", "Docker"],
  },
];

export default function Projects() {
  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Projects
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Featured Work
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                onClick={() => window.open(project.url || project.github, "_blank", "noopener noreferrer")}
                className="group block p-0 border border-border rounded-lg bg-card hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <svg
                    className="w-4 h-4 text-muted group-hover:text-accent transition-colors mt-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mb-3"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source
                  </a>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-foreground/5 rounded text-foreground/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
