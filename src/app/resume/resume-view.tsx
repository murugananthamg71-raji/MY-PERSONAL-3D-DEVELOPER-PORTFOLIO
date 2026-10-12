"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft, Printer, FileText, MapPin, Mail, Globe, Award, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { config } from "@/data/config";
import { EDUCATION, EXPERIENCE, CERTIFICATIONS, SKILL_CATEGORIES } from "@/data/constants";

export default function ResumeView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground pb-16">
      {/* Top action bar */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="gap-2 text-xs font-mono"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </Button>

            <a
              href="/Muruganantham_G_Resume.pdf"
              download="Muruganantham_G_Resume.pdf"
            >
              <Button size="sm" className="gap-2 text-xs font-mono">
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Informational placeholder badge explaining custom PDF location */}
        <div className="mb-6 p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-muted-foreground font-mono flex items-start gap-3">
          <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-foreground">
              Live Digital Resume for {config.author}
            </p>
            <p>
              To supply an external compiled PDF document, place your custom file at{" "}
              <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                public/Muruganantham_G_Resume.pdf
              </code>
              . The &ldquo;Download PDF&rdquo; button points directly to that file.
            </p>
          </div>
        </div>
      </div>

      {/* Structured A4-style Resume Sheet */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-12 rounded-2xl border border-border bg-card text-card-foreground shadow-xl space-y-8 print:border-none print:shadow-none print:p-0"
        >
          {/* Header */}
          <div className="border-b border-border pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
                {config.author}
              </h1>
              <p className="text-lg font-medium text-primary">
                Full Stack Developer &amp; AI Enthusiast
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  {config.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {config.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  Portfolio Website
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col items-start gap-2">
              <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
                B.Tech (IT)
              </Badge>
              <Badge variant="secondary" className="font-mono text-xs">
                Available for Roles
              </Badge>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Professional Summary
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {config.description.long}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-lg border border-border/70 bg-secondary/20 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-foreground">
                      {edu.degree} in {edu.field} — {edu.institution}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{edu.location}</span>
                    {edu.grade && (
                      <span className="font-semibold text-emerald-400">
                        • Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.highlights && (
                    <ul className="list-disc list-outside ml-4 pt-1 space-y-0.5 text-xs text-muted-foreground">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Internship */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Experience &amp; Training
            </h2>
            <div className="space-y-3">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-lg border border-border/70 bg-secondary/20 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-foreground">
                      {exp.title} — {exp.company}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.startDate} – {exp.endDate} ({exp.type})
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-muted-foreground leading-relaxed">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  {(exp.attachment?.pdfUrl || exp.attachment?.documentUrl) && (
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={exp.attachment.pdfUrl || exp.attachment.documentUrl}
                        download={exp.attachment.fileName || "Offer_Letter.pdf"}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Offer Letter (PDF)
                      </a>
                      <a
                        href={exp.attachment.pdfUrl || exp.attachment.documentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View PDF
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg border border-border/60 bg-secondary/10 space-y-1.5">
                  <span className="text-xs font-semibold text-foreground">{cat.title}:</span>
                  <p className="text-xs text-muted-foreground">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center gap-2 text-xs text-muted-foreground p-2 rounded bg-secondary/10 border border-border/40">
                  <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-foreground font-medium truncate">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
