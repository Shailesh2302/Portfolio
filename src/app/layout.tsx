import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushikesh Kanfade — AI & Backend Engineer",
  description:
    "AI & Backend Engineer working with TypeScript, Python and Rust to build retrieval-driven AI systems, low-latency data pipelines, and distributed backend services.",
  openGraph: {
    title: "Rushikesh Kanfade — AI & Backend Engineer",
    description:
      "AI & Backend Engineer working with TypeScript, Python and Rust to build retrieval-driven AI systems, low-latency data pipelines, and distributed backend services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
