import type { Metadata } from "next";
import Snippets from "@/components/Snippets";

export const metadata: Metadata = {
  title: "Snippets — Rushikesh Kanfade",
};

export default function SnippetsPage() {
  return (
    <main className="flex-1 pt-20">
      <Snippets />
    </main>
  );
}
