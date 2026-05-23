"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const links = [
  {
    label: "Email",
    value: "rushikeshkanfade123@gmail.com",
    href: "mailto:rushikeshkanfade123@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rushikeshkanfade",
    href: "https://www.linkedin.com/in/rushikesh-kanfade-2a78ba229/",
  },
  {
    label: "GitHub",
    value: "github.com/Shailesh2302",
    href: "https://github.com/Shailesh2302",
  },
  {
    label: "X (Twitter)",
    value: "@Shaileshkanfade",
    href: "https://x.com/Shaileshkanfade",
  },
  {
    label: "Phone",
    value: "+91 9527504854",
    href: "tel:+919527504854",
  },
];

export default function Contact() {
  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Connect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="max-w-2xl">
            <p className="text-muted mb-8 leading-relaxed">
              Open to collaborations, research discussions, and engineering
              challenges. If you&apos;re building something interesting in AI,
              distributed systems, or backend infrastructure — let&apos;s talk.
            </p>

            <div className="space-y-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center justify-between p-4 border border-border rounded-lg group hover:border-accent transition-all duration-300"
                >
                  <span className="font-mono text-xs text-muted tracking-wider uppercase">
                    {link.label}
                  </span>
                  <span className="text-sm group-hover:text-accent transition-colors">
                    {link.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
