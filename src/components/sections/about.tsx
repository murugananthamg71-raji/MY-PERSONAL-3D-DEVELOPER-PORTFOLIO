"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Database,
  Sparkles,
  MapPin,
  Laptop,
  GraduationCap,
  Layers,
} from "lucide-react";
import { config } from "@/data/config";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Laptop className="w-5 h-5 text-blue-500" />,
      title: "Full Stack Web Development",
      desc: "Architecting end-to-end applications with modern frontend frameworks and reliable backend systems.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: "Modern User Interfaces",
      desc: "Crafting responsive, clean, and intuitive user experiences with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Backend APIs & Databases",
      desc: "Building structured REST APIs and data models using Python, Django, FastAPI, SQL, PostgreSQL, and MongoDB.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: "Practical Artificial Intelligence",
      desc: "Exploring AI, computer vision, and generative models to solve practical real-world problems.",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-24 px-4 max-w-7xl mx-auto"
    >
      <SectionHeader
        id="about"
        title={
          <span>
            Turning Logic Into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Impact
            </span>
          </span>
        }
        desc="Driven by curiosity, engineered with precision — bridging full-stack systems with applied artificial intelligence."
        className="mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        {/* Left Column: Narrative Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1 text-xs font-mono border-primary/40 text-primary">
                Full Stack Developer &amp; AI Enthusiast
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                {config.location}
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              &ldquo;{config.description.long}&rdquo;
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              My journey focuses on both frontend and backend development — from designing responsive user interfaces with React to developing backend APIs and working with databases such as MySQL and PostgreSQL. I aim to build applications that are reliable, user-friendly, and scalable.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Beyond web development, I am interested in Artificial Intelligence, Computer Vision, and Generative AI. I enjoy exploring emerging technologies and applying my knowledge through practical projects that address real-world challenges.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs font-normal">
                React &amp; Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                Python / Django / FastAPI
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                SQL &amp; PostgreSQL
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                AI &amp; Computer Vision
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                Continuous Hands-on Learning
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Focus Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-card/40 border-border/80 hover:border-primary/40 transition-colors backdrop-blur-sm"
            >
              <CardContent className="p-4 md:p-5 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-secondary/60 border border-border shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
