"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    institution: "Anuradha Engineering College, Chikhli",
    board: "SGBA University",
    degree: "Bachelor of Engineering in Information Technology",
    score: "7.28 CGPA",
    period: "2021 – 2025",
  },
  {
    institution: "Sant Gadge Baba Amravati University",
    board: "Maharashtra State Board",
    degree: "Higher Secondary Education (XII)",
    score: "76.10%",
    period: "2019 – 2020",
  },
];

export default function Education() {
  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Academic Background
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-border rounded-lg bg-card"
              >
                <div>
                  <h3 className="font-serif text-lg">{edu.institution}</h3>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  <p className="text-xs text-muted mt-1">{edu.board}</p>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                  <span className="font-mono text-sm text-accent font-medium">
                    {edu.score}
                  </span>
                  <span className="font-mono text-xs text-muted">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
