import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Rushikesh Kanfade",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 pt-20">
      <Projects />
    </main>
  );
}
