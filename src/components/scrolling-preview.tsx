"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Neutral wallpaper when a card has no `bg` (or it fails to load), so adding a
// project with just a screenshot still looks intentional.
const FALLBACK_BG = "linear-gradient(135deg, #1e293b, #0f172a)";

/**
 * Card preview: a screenshot floating over a wallpaper with subtle hover zoom.
 * Hover scroll animation removed per user request.
 */
const ScrollingPreview = ({
  src,
  alt,
  bg,
  isHovered = false,
}: {
  src: string;
  alt: string;
  bg?: string;
  isHovered?: boolean;
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [bgReady, setBgReady] = useState(false);

  // Preload the wallpaper so a missing/404 file falls back to the gradient
  // instead of rendering a broken background.
  useEffect(() => {
    if (!bg) {
      setBgReady(false);
      return;
    }
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => !cancelled && setBgReady(true);
    img.onerror = () => !cancelled && setBgReady(false);
    img.src = bg;
    return () => {
      cancelled = true;
    };
  }, [bg]);

  // Keep screenshot static at top-center; no hover scrolling
  return (
    <div
      className="pointer-events-none absolute inset-0"
      role="img"
      aria-label={alt}
      suppressHydrationWarning
    >
      {/* wallpaper background (falls back to a gradient when `bg` is absent) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0f172a",
          backgroundImage: bgReady && bg ? `url("${bg}")` : FALLBACK_BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* floating screenshot panel */}
      <div
        ref={viewportRef}
        className="sp-shot"
        style={{
          position: "absolute",
          left: 22,
          right: 22,
          top: 20,
          bottom: 0,
          overflow: "hidden",
          borderRadius: 10,
          boxShadow:
            "0 24px 50px -12px rgba(8,20,55,0.55), 0 8px 18px -8px rgba(8,20,55,0.45)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${src}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollingPreview;
