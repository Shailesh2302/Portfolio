"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LuffySection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-border rounded-lg" />
            <div className="relative overflow-hidden rounded-lg bg-card">
                <Image
                  src="/images/luffy.jpeg"
                  alt="Monkey D. Luffy"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Inspiration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-2 leading-tight">
                The King of the<br />
                <span className="italic">Pirates</span> Mentality
              </h2>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="border-l-2 border-accent pl-6 italic text-muted text-lg leading-relaxed"
            >
              &ldquo;I don&apos;t want to conquer anything. I just think the man with the
              most freedom on the sea is the Pirate King.&rdquo;
              <footer className="not-italic text-sm mt-3 text-accent">
                — Monkey D. Luffy
              </footer>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted text-sm leading-relaxed"
            >
              Building systems with the same relentless drive — pushing boundaries,
              exploring uncharted territory, and never settling for the status quo.
              Every line of code is a step toward freedom of expression and mastery
              of craft.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
