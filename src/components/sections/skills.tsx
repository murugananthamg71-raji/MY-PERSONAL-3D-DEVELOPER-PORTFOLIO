"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SKILL_CATEGORIES } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { useSceneStatus } from "@/lib/scene-health";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Sparkles, Terminal } from "lucide-react";

/**
 * Skills are displayed on the interactive 3D keyboard in real-time,
 * alongside categorized tech stacks (Frontend, Backend, Databases, Tools, AI)
 * with graceful fallback grid for assistive technology, reduced motion, or WebGL unavailability.
 */
const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const is3DActive = ready && !disable3D && sceneStatus === "ready";
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [is3DActive]);

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  return (
    <SectionWrapper
      id="skills"
      className={cn(
        "w-full flex flex-col justify-center items-center py-20 px-4",
        is3DActive ? "min-h-[140dvh]" : "min-h-screen"
      )}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <SectionHeader
          id="skills"
          title="Technical Skills"
          desc={
            is3DActive
              ? "Interactive 3D Keyboard — click, hover, or type letters"
              : "Technologies & Engineering Tools"
          }
          className="mb-8"
        />

        {/* 3D Keyboard Interaction Helper Banner */}
        {is3DActive && (
          <div className="pointer-events-auto z-20 mb-8 flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md text-xs font-mono text-muted-foreground shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>Interactive 3D keys mapped to keyboard letters • Tap or press keys to test</span>
          </div>
        )}

        {/* Categorized Skills Showcase */}
        <div className="w-full pointer-events-auto z-20 mt-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-secondary/40 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Categorized Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.filter(
              (c) => activeCategory === "All" || c.title === activeCategory
            ).map((cat) => (
              <div
                key={cat.title}
                className="p-5 rounded-xl border border-border/70 bg-card/50 backdrop-blur-md shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 border-b border-border/50 pb-2.5">
                  <Terminal className="w-4 h-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground tracking-tight">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="gap-2 px-2.5 py-1 text-xs font-normal bg-secondary/30 hover:bg-secondary/60 hover:border-primary/30 transition-colors"
                    >
                      {skill.icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-3.5 h-3.5 object-contain"
                          loading="lazy"
                        />
                      )}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fallback 3D Keycaps Grid for accessibility / screen-readers / non-3D mode */}
        <ul
          className={
            !is3DActive
              ? "mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 pointer-events-auto"
              : "sr-only"
          }
        >
          {Object.values(SKILLS).map((skill) => (
            <li
              key={skill.name}
              style={{ "--skill": skill.color } as CSSProperties}
              className={cn(
                "group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-5",
                "border border-border/60 bg-secondary/20 backdrop-blur-sm",
                "transition-[transform,border-color,background-color,box-shadow] duration-300",
                "hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40",
                "hover:shadow-[0_10px_40px_-12px_var(--skill)]"
              )}
            >
              <span
                aria-hidden
                style={{ background: "var(--skill)" }}
                className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.label}
                width={44}
                height={44}
                loading="lazy"
                className="relative size-9 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 md:size-11"
              />
              <span className="relative text-center text-xs font-medium text-foreground/80 transition-colors group-hover:text-foreground md:text-sm">
                {skill.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
