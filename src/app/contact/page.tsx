import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Rushikesh Kanfade",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-20">
      <Contact />
    </main>
  );
}
