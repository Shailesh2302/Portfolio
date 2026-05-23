import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education — Rushikesh Kanfade",
};

export default function EducationPage() {
  return (
    <main className="flex-1 pt-20">
      <Education />
    </main>
  );
}
