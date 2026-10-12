import React from "react";
import AboutSection from "@/components/sections/about";
import { config } from "@/data/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `About Me | ${config.author}`,
  description: `About ${config.author} — Full Stack Developer & AI Enthusiast based in Coimbatore, Tamil Nadu, India.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto mb-6 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg bg-secondary/30 border border-border/50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>
      <AboutSection />
    </div>
  );
}
