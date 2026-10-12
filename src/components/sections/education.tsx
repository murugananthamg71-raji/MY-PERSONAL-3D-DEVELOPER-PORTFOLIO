"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { EDUCATION } from "@/data/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center min-h-[90vh] py-20 px-4 max-w-5xl mx-auto"
    >
      <SectionHeader
        id="education"
        title="Education"
        desc="Academic background and credentials."
        className="mb-12 md:mb-16 mt-0"
      />

      <div className="w-full relative flex flex-col gap-8 md:gap-10">
        {/* Subtle center line for desktop */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-border/70 hidden sm:block" />

        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative sm:pl-16"
          >
            {/* Timeline icon node */}
            <div className="absolute left-3.5 sm:left-5.5 top-5 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-primary/60 text-primary shadow-sm z-10">
              <GraduationCap className="w-4 h-4" />
            </div>

            <Card
              className={cn(
                "bg-card text-card-foreground border-border/80 backdrop-blur-sm",
                "hover:border-primary/30 transition-colors duration-300",
                "shadow-sm hover:shadow-md"
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" className="text-xs font-mono">
                        {edu.degree}
                      </Badge>
                      <CardTitle className="text-lg md:text-xl font-bold tracking-tight">
                        {edu.field}
                      </CardTitle>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground font-medium">
                      <span className="text-foreground">{edu.institution}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-red-400" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {edu.grade && (
                      <Badge variant="outline" className="font-mono text-xs border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
                        <Award className="w-3 h-3 mr-1" />
                        Grade: {edu.grade}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="font-mono text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              {edu.highlights && edu.highlights.length > 0 && (
                <CardContent className="pt-0">
                  <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    {edu.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
