import type { Metadata } from "next";
import FullPortfolio from "@/components/FullPortfolio";

export const metadata: Metadata = {
  title: "Rushikesh Kanfade — AI & Backend Engineer",
};

export default function ProfilePage() {
  return <FullPortfolio />;
}
