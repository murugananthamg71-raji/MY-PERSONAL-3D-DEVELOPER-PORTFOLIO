"use client";

import React from "react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode relative z-10")}>
        <HeroSection />
      </main>
    </div>
  );
}

export default MainPage;
