import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills — Rushikesh Kanfade",
};

export default function SkillsPage() {
  return (
    <main className="flex-1 pt-20">
      <Skills />
    </main>
  );
}
