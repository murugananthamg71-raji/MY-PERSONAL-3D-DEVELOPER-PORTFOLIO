"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "GitHub",
    href: config.social.github,
    icon: <SiGithub className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin className="w-4 h-4" />,
  },
  {
    name: "Email",
    href: `mailto:${config.email}`,
    icon: <Mail className="w-4 h-4" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center gap-1 z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link
            href={button.href}
            key={button.name}
            target={button.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={button.name}
          >
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
