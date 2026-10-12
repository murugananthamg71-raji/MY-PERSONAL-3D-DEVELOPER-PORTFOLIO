import React from "react";
import ProjectsSection from "@/components/sections/projects";
import { config } from "@/data/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Featured Projects | ${config.author}`,
  description: `Featured engineering projects by ${config.author}: Real-Time Classroom Attendance AI, FarmDirect AI, Smart Campus R&D Portal, Advanced Hand Tracking AR, Smart AI Silage Testing, and Personal 3D Portfolio.`,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto mb-6 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg bg-secondary/30 border border-border/50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>
      <ProjectsSection />
    </div>
  );
}
