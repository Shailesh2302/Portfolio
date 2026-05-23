"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "OmniMind",
    role: "AI & Backend Engineer",
    tech: "Rust, Python, TypeScript, Node.js, FastAPI, Redis, Qdrant, Next.js, Turborepo",
    period: "May 2026 – Present",
    points: [
      "Architecting OmniMind, a distributed multi-modal AI system that transforms videos, PDFs, DOCX, and spreadsheets into searchable, AI-understandable knowledge using semantic retrieval and intelligent media pipelines.",
      "Designed a hybrid AI architecture combining Rust workers, Python AI services, and Node.js orchestration to process, index, and retrieve information across structured and unstructured content.",
      "Built advanced RAG pipelines with vector embeddings and Qdrant, enabling contextual question answering, semantic search, and cross-file retrieval across documents and video transcripts.",
      "Engineered AI-powered video intelligence features including timestamp-aware semantic retrieval, important moment detection, and automatic clip generation using FFmpeg and high-performance Rust processing pipelines.",
      "Developed distributed asynchronous workflows using Redis queues and concurrent worker systems for scalable media processing, transcription, embedding generation, and AI indexing.",
    ],
  },
  {
    title: "OSSBeat",
    role: "Backend Developer",
    tech: "Node.js, TypeScript, PostgreSQL, Prisma, Next.js, Redis, Turborepo",
    period: "Nov 2025 – May 2026",
    points: [
      "Introduced OSSBeat, a developer-focused platform that simplifies discovering, analyzing, and selecting GitHub repositories for learning, collaboration, and open-source contributions.",
      "Built a backend-focused platform to discover and analyze GitHub repositories using the GitHub REST API, improving repository discovery efficiency by ~50%.",
      "Enhanced a scalable backend with PostgreSQL + Prisma, implementing pagination, indexing, and Redis caching to reduce response times by ~40%.",
      "Secured APIs with JWT authentication, API keys, and rate limiting using a clean Controller–Service–Repository architecture in a monorepo setup.",
    ],
  },
  {
    title: "AI Website Generator",
    role: "Full-Stack Developer",
    tech: "React, TypeScript, WebContainer, Gemini AI",
    period: "Jan 2025 – May 2025",
    points: [
      "A business management application created to manage invoicing, track sales leads, and monitor revenue performance. Supports operational reporting, lead tracking, and financial visibility for business teams.",
      "Composed an AI-powered platform that converts natural language into fully functional code, reducing manual coding time by up to 70%.",
      "Crafted a responsive user interface, improving accessibility across devices and reducing layout issues across screen sizes by ~40%.",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Work & Projects
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-background" />

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="font-serif text-2xl">{exp.title}</h3>
                    <p className="text-sm text-muted mt-1">{exp.role}</p>
                    <p className="font-mono text-xs text-accent mt-2">{exp.period}</p>
                  </div>

                  <div className="md:col-span-3">
                    <ul className="space-y-3">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-sm leading-relaxed text-muted flex gap-3">
                          <span className="text-accent mt-1.5 shrink-0">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono bg-card border border-border rounded text-foreground/85"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
