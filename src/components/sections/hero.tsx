"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FileDown, Mail, ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % config.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen flex flex-col justify-between")}>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 items-center">
        <div
          className={cn(
            "min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-start",
            "pt-24 pb-16 px-6 sm:px-12 md:pl-16 lg:pl-20 xl:pl-24"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col max-w-xl">
              {/* Small Introduction */}
              <BlurIn delay={0.3}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary mb-4 tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  {config.subHeadline}
                </div>
              </BlurIn>

              {/* Main Headline */}
              <BlurIn delay={0.6}>
                <h1
                  className={cn(
                    "leading-tight text-foreground font-display font-bold",
                    "text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left mb-3"
                  )}
                >
                  {config.headline}
                </h1>
              </BlurIn>

              {/* Animated Role Text */}
              <div className="h-10 sm:h-12 flex items-center mb-4 overflow-hidden">
                <span className="text-muted-foreground text-lg sm:text-xl font-medium mr-2">
                  I am a
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {config.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Short Description */}
              <BlurIn delay={0.9}>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                  {config.description.short}
                </p>
              </BlurIn>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 pointer-events-auto">
                <Link href="/projects">
                  <Button className="group flex items-center gap-2 shadow-sm font-medium">
                    Explore My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/resume">
                  <Button variant="outline" className="flex items-center gap-2 font-medium">
                    <FileDown className="w-4 h-4" />
                    Download Resume
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="secondary" className="flex items-center gap-2 font-medium">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pointer-events-auto">
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                        <SiGithub className="w-4 h-4" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">GitHub Profile</TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                        <SiLinkedin className="w-4 h-4" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">LinkedIn Profile</TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <Link
                      href={`mailto:${config.email}`}
                      aria-label="Send Email"
                    >
                      <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Email: {config.email}</TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}
        </div>

        {/* Right column gives space for 3D Keyboard canvas */}
        <div className="col-span-1 hidden md:block" />
      </div>

      {/* Full-width Animated Marquee Ribbon */}
      <div className="w-full overflow-hidden border-t border-border/40 bg-secondary/30 backdrop-blur-md py-3 sm:py-3.5 pointer-events-auto z-10">
        <motion.div
          className="flex whitespace-nowrap gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 shrink-0">
              <span className="font-display font-black text-sm sm:text-lg md:text-xl tracking-widest uppercase bg-gradient-to-r from-blue-400 via-indigo-300 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                MURUGANANTHAM PORTFOLIO
              </span>
              <span className="text-primary text-xs sm:text-sm">✦</span>
              <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                FULL STACK DEVELOPER
              </span>
              <span className="text-emerald-400 text-xs sm:text-sm">✦</span>
              <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                AI ENTHUSIAST
              </span>
              <span className="text-purple-400 text-xs sm:text-sm">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
