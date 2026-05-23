import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience — Rushikesh Kanfade",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1 pt-20">
      <Experience />
    </main>
  );
}
