"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { links as navItems } from "./config";

interface HeaderProps {
  loader?: boolean;
  githubStars?: React.ReactNode;
}

const Header = ({ loader, githubStars }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in border-b border-border/40 bg-background/80 backdrop-blur-md"
      )}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-1 sm:px-4">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 group shrink-0">
          <span className="font-display font-black text-xs sm:text-sm tracking-wider px-2 py-0.5 rounded bg-primary text-primary-foreground group-hover:scale-105 transition-transform shadow-sm">
            MG
          </span>
          <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-foreground hidden md:inline group-hover:text-primary transition-colors">
            MURUGANANTHAM
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav
          className={cn(
            styles.navContainer,
            "flex items-center justify-center gap-1 sm:gap-1.5 p-1 rounded-full bg-secondary/50 dark:bg-secondary/25 border border-border/40 backdrop-blur-md overflow-x-auto max-w-[calc(100vw-130px)] sm:max-w-none shadow-inner"
          )}
        >
          {navItems.map((item) => {
            const isCurrent =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0",
                  isCurrent
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/25 scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & GitHub Stars */}
        <div className="flex items-center gap-2 shrink-0">
          <FunnyThemeToggle className="w-8 h-8 flex" />
          {githubStars}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
