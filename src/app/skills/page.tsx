import React from "react";
import SkillsSection from "@/components/sections/skills";
import { config } from "@/data/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Technical Skills | ${config.author}`,
  description: `Technical competencies of ${config.author}: React, Python, Django, FastAPI, SQL, PostgreSQL, Docker, AWS, and AI/LLMs.`,
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto mb-6 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg bg-secondary/30 border border-border/50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>
      <SkillsSection />
    </div>
  );
}
