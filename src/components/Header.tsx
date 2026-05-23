"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = ["Profile", "Experience", "Projects", "Snippets", "Contact"];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Profile");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      if (!isHome) return;
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (!el) return { id: item, top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return { id: item, top: rect.top, bottom: rect.bottom };
      });
      const visible = sections.find((s) => s.top <= 200 && s.bottom > 200);
      if (visible) setActiveSection(visible.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      const current = navItems.find(
        (item) => pathname === `/${item.toLowerCase()}`
      );
      if (current) setActiveSection(current);
    }
  }, [pathname, isHome]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-serif text-lg tracking-tight">
          RK<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === item
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
