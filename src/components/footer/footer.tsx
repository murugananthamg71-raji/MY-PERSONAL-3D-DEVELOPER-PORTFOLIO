"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { ArrowUp } from "lucide-react";

function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full shrink-0 border-t border-border/80 bg-background/50 backdrop-blur-md px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Author brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-xs tracking-wider px-1.5 py-0.5 rounded bg-primary text-primary-foreground">
              MG
            </span>
            <span className="font-display font-bold text-sm tracking-tight text-foreground">
              {config.author}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Full Stack Developer &amp; AI Enthusiast • Coimbatore, India
          </p>
        </div>

        {/* Social buttons */}
        <SocialMediaButtons />

        {/* Copyright and back-to-top */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {year} {config.author}. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono rounded-full px-3 h-8 hover:bg-secondary/60"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Top
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
