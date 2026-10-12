"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { CERTIFICATIONS, CertificationItem } from "@/data/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  Eye,
  Download,
  ExternalLink,
  Sparkles,
  FileCheck,
  Image as ImageIcon,
  FileText,
  Flame,
  CheckCircle2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CertificateCardItem = ({
  cert,
  index,
}: {
  cert: CertificationItem;
  index: number;
}) => {
  const [viewMode, setViewMode] = useState<"image" | "pdf">(
    cert.imageUrl ? "image" : "pdf"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-40px" }}
      className={cn(cert.isFeatured && "md:col-span-2 lg:col-span-2")}
    >
      <Card
        className={cn(
          "h-full bg-card/60 border-border/80 backdrop-blur-sm",
          "hover:border-primary/40 hover:bg-card/80 transition-all duration-300",
          "shadow-sm hover:shadow-md flex flex-col justify-between p-5 rounded-2xl group relative overflow-hidden",
          cert.isFeatured &&
            "border-amber-500/40 bg-gradient-to-br from-card/90 via-card/60 to-amber-500/5 hover:border-amber-500/60 shadow-amber-500/5 shadow-lg"
        )}
      >
        {cert.isFeatured && (
          <div className="absolute top-0 right-0 transform translate-x-7 -translate-y-2 rotate-45 bg-gradient-to-r from-amber-500 to-red-500 text-[9px] font-bold tracking-wider uppercase py-1 px-8 text-white shadow-sm pointer-events-none">
            Featured Elite
          </div>
        )}

        <div className="space-y-4">
          {/* Header badges */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform",
                  cert.isFeatured &&
                    "bg-amber-500/15 border-amber-500/30 text-amber-500"
                )}
              >
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground font-mono">
                {cert.issuer}
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {cert.priority && (
                <Badge
                  className={cn(
                    "text-[10px] font-mono",
                    cert.isFeatured
                      ? "bg-amber-500/15 text-amber-500 border-amber-500/40"
                      : "bg-amber-500/10 text-amber-500 border-amber-500/30"
                  )}
                >
                  <Sparkles className="w-2.5 h-2.5 mr-1" />
                  {cert.priority}
                </Badge>
              )}
              {cert.grade && (
                <Badge className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono">
                  {cert.grade}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="text-[10px] font-mono border-primary/20 text-primary bg-primary/5"
              >
                {cert.category}
              </Badge>
            </div>
          </div>

          {/* Certificate Thumbnail for Real Document if available */}
          {cert.imageUrl && (
            <div className="relative rounded-xl overflow-hidden border border-border/80 aspect-[16/9] bg-slate-950/70 group/thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end justify-between p-3">
                <span className="text-[10px] font-mono text-emerald-300 font-semibold flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Official {cert.issuer.split(" ")[0]} Certificate
                </span>
                {cert.rollNo && (
                  <span className="text-[10px] font-mono text-amber-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-amber-500/30">
                    Roll: {cert.rollNo}
                  </span>
                )}
                {cert.certificateId && !cert.rollNo && (
                  <span className="text-[10px] font-mono text-cyan-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-cyan-500/30">
                    Code: {cert.certificateId.slice(0, 10)}
                  </span>
                )}
                {cert.duration && !cert.rollNo && !cert.certificateId && (
                  <span className="text-[10px] font-mono text-cyan-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-cyan-500/30">
                    {cert.duration}
                  </span>
                )}
                {cert.completedDate && !cert.rollNo && !cert.certificateId && !cert.duration && (
                  <span className="text-[10px] font-mono text-cyan-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-cyan-500/30">
                    {cert.completedDate}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Title & Focus */}
          <div>
            <h4 className="text-base md:text-lg font-bold text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors">
              {cert.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              <strong className="text-foreground/80 font-medium">Focus:</strong>{" "}
              {cert.focus}
            </p>
          </div>

          {/* Candidate reflection / caption */}
          {cert.caption && (
            <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/25 border border-amber-500/20 text-xs text-foreground/90 font-medium leading-relaxed flex items-start gap-2.5">
              <span className="text-amber-500 shrink-0 text-base leading-none mt-0.5">
                🔥
              </span>
              <p className="italic">
                &ldquo;{cert.caption}&rdquo;
              </p>
            </div>
          )}

          {/* Score breakdown metrics for featured cert */}
          {cert.scoreBreakdown && (
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/50 text-center">
                <div className="text-[10px] text-muted-foreground font-mono uppercase">
                  Consolidated
                </div>
                <div className="text-xs md:text-sm font-bold text-emerald-400 font-mono mt-0.5">
                  {cert.scoreBreakdown.consolidated}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/50 text-center">
                <div className="text-[10px] text-muted-foreground font-mono uppercase">
                  Assignments
                </div>
                <div className="text-xs md:text-sm font-bold text-foreground font-mono mt-0.5">
                  {cert.scoreBreakdown.assignments}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/50 text-center">
                <div className="text-[10px] text-muted-foreground font-mono uppercase">
                  Proctored Exam
                </div>
                <div className="text-xs md:text-sm font-bold text-foreground font-mono mt-0.5">
                  {cert.scoreBreakdown.proctoredExam}
                </div>
              </div>
            </div>
          )}

          {/* General metadata metrics (e.g. Simplilearn, Cisco, LinkedIn Learning) */}
          {!cert.scoreBreakdown && (cert.completedDate || cert.duration || cert.certificateId) && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {cert.duration && (
                <div className="p-2 rounded-xl bg-secondary/40 border border-border/50 text-center">
                  <div className="text-[10px] text-muted-foreground font-mono uppercase">
                    Duration
                  </div>
                  <div className="text-xs font-semibold text-foreground font-mono mt-0.5">
                    {cert.duration}
                  </div>
                </div>
              )}
              {cert.completedDate && (
                <div className={cn(
                  "p-2 rounded-xl bg-secondary/40 border border-border/50 text-center",
                  !cert.duration && !cert.certificateId && "col-span-2"
                )}>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase">
                    Completion Date
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mt-0.5 truncate">
                    {cert.completedDate}
                  </div>
                </div>
              )}
              {cert.certificateId && !cert.duration && (
                <div className="p-2 rounded-xl bg-secondary/40 border border-border/50 text-center">
                  <div className="text-[10px] text-muted-foreground font-mono uppercase">
                    Code / ID
                  </div>
                  <div className="text-xs font-semibold text-foreground font-mono mt-0.5 truncate" title={cert.certificateId}>
                    {cert.certificateId}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action footer */}
        <div className="pt-4 border-t border-border/40 mt-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">{cert.status}</span>
            </div>
            <span className="text-[11px] opacity-70">
              MURAGANANTHAM (Muruganantham G)
            </span>
          </div>

          {/* Buttons: View & Download */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className={cn(
                    "w-full text-xs font-medium gap-1.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors",
                    cert.isFeatured &&
                      "bg-amber-500/15 text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-black font-semibold"
                  )}
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[94vh] flex flex-col p-4 md:p-6 gap-3 md:gap-4 bg-background/95 backdrop-blur-xl border-border overflow-y-auto">
                <DialogHeader className="space-y-1.5 text-left pb-2 border-b border-border/50">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className="text-[10px] font-mono text-primary border-primary/30"
                    >
                      {cert.issuer}
                    </Badge>
                    {cert.grade && (
                      <Badge className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono">
                        {cert.grade}
                      </Badge>
                    )}
                    {cert.priority && (
                      <Badge className="text-[10px] bg-amber-500/10 text-amber-500 border-amber-500/30 font-mono">
                        <Sparkles className="w-2.5 h-2.5 mr-1" />
                        {cert.priority}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="text-[10px] font-mono">
                      {cert.category}
                    </Badge>
                  </div>

                  <DialogTitle className="text-lg md:text-xl font-bold text-foreground">
                    {cert.title}
                  </DialogTitle>

                  <DialogDescription className="text-xs text-muted-foreground">
                    Awarded to:{" "}
                    <span className="text-foreground font-semibold">
                      MURAGANANTHAM
                    </span>{" "}
                    • Focus: {cert.focus}
                  </DialogDescription>
                </DialogHeader>

                {/* Optional Quote / Caption in modal */}
                {cert.caption && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-foreground/90 font-medium flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="italic">{cert.caption}</span>
                    </div>
                    {cert.rollNo && (
                      <span className="text-[11px] font-mono text-muted-foreground shrink-0 hidden sm:inline">
                        Roll: {cert.rollNo}
                      </span>
                    )}
                  </div>
                )}

                {/* Score breakdown in modal (if applicable) */}
                {cert.scoreBreakdown && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                      <span className="text-[10px] text-muted-foreground font-mono block">
                        Consolidated Score
                      </span>
                      <strong className="text-emerald-400 font-mono text-sm">
                        {cert.scoreBreakdown.consolidated}
                      </strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                      <span className="text-[10px] text-muted-foreground font-mono block">
                        Online Assignments
                      </span>
                      <strong className="text-foreground font-mono text-sm">
                        {cert.scoreBreakdown.assignments}
                      </strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                      <span className="text-[10px] text-muted-foreground font-mono block">
                        Proctored Exam
                      </span>
                      <strong className="text-foreground font-mono text-sm">
                        {cert.scoreBreakdown.proctoredExam}
                      </strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                      <span className="text-[10px] text-muted-foreground font-mono block">
                        Certified Cohort
                      </span>
                      <strong className="text-foreground font-mono text-sm">
                        {cert.scoreBreakdown.totalCertified || "Verified"}
                      </strong>
                    </div>
                  </div>
                )}

                {/* General metadata in modal (e.g. LinkedIn Learning, IBM Credly, etc.) */}
                {!cert.scoreBreakdown && (cert.completedDate || cert.certificateId || cert.duration || cert.verifyUrl) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {cert.completedDate && (
                      <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                        <span className="text-[10px] text-muted-foreground font-mono block">
                          Completed Date
                        </span>
                        <strong className="text-foreground font-mono text-xs">
                          {cert.completedDate}
                        </strong>
                      </div>
                    )}
                    {cert.duration && (
                      <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                        <span className="text-[10px] text-muted-foreground font-mono block">
                          Course Duration
                        </span>
                        <strong className="text-foreground font-mono text-xs">
                          {cert.duration}
                        </strong>
                      </div>
                    )}
                    {cert.certificateId && (
                      <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                        <span className="text-[10px] text-muted-foreground font-mono block">
                          Certificate Code / ID
                        </span>
                        <strong className="text-emerald-400 font-mono text-xs truncate block" title={cert.certificateId}>
                          {cert.certificateId}
                        </strong>
                      </div>
                    )}
                    {cert.verifyUrl && !cert.certificateId && (
                      <div className="p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-center">
                        <span className="text-[10px] text-muted-foreground font-mono block">
                          Digital Credential
                        </span>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:underline font-mono text-xs flex items-center justify-center gap-1 mt-0.5"
                        >
                          Credly Verified
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Toggle View for Certs with Image */}
                {cert.imageUrl && (
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-xs font-mono text-muted-foreground">
                      Document Preview:
                    </span>
                    <div className="flex items-center gap-1.5 p-1 bg-secondary/50 rounded-lg border border-border/50">
                      <Button
                        size="sm"
                        variant={viewMode === "image" ? "default" : "ghost"}
                        className="h-7 text-xs px-2.5 gap-1.5"
                        onClick={() => setViewMode("image")}
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        Original Certificate
                      </Button>
                      <Button
                        size="sm"
                        variant={viewMode === "pdf" ? "default" : "ghost"}
                        className="h-7 text-xs px-2.5 gap-1.5"
                        onClick={() => setViewMode("pdf")}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        PDF Document
                      </Button>
                    </div>
                  </div>
                )}

                {/* Main Preview Container */}
                <div className="w-full flex-1 min-h-[46vh] md:min-h-[52vh] rounded-xl overflow-hidden border border-border bg-slate-950/60 relative flex items-center justify-center p-1">
                  {cert.imageUrl && viewMode === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="max-h-[56vh] w-full object-contain rounded-lg shadow-xl"
                    />
                  ) : (
                    <iframe
                      src={`${cert.pdfUrl}#toolbar=0`}
                      className="w-full h-full min-h-[46vh] md:min-h-[52vh] rounded-xl"
                      title={cert.title}
                    />
                  )}
                </div>

                {/* Modal Footer Controls */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/50 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      {cert.certificateId
                        ? `Code / ID: ${cert.certificateId} • Verified Credential`
                        : cert.rollNo
                        ? `Roll No: ${cert.rollNo} • Verified Document`
                        : cert.verifyUrl
                        ? "Credly Verified Credential"
                        : "Official Verified PDF Document"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs gap-1.5 border-amber-500/40 text-amber-500 hover:bg-amber-500/10"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Verify Credly
                        </Button>
                      </a>
                    )}
                    <a
                      href={cert.imageUrl || cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="text-xs gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open Tab
                      </Button>
                    </a>
                    <a
                      href={cert.pdfUrl}
                      download={`Muruganantham_G_${cert.title.replace(
                        /[^a-zA-Z0-9]/g,
                        "_"
                      )}.pdf`}
                    >
                      <Button
                        size="sm"
                        className="text-xs gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <a
              href={cert.pdfUrl}
              download={`Muruganantham_G_${cert.title.replace(
                /[^a-zA-Z0-9]/g,
                "_"
              )}.pdf`}
              className="w-full"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-medium gap-1.5 rounded-lg border-border hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CertificationsSection = () => {
  return (
    <SectionWrapper
      id="certifications"
      className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 max-w-7xl mx-auto"
    >
      <SectionHeader
        id="certifications"
        title="Certifications"
        desc="Industry-recognized credentials, specialized technical courses & verified competencies."
        className="mb-12 md:mb-16 mt-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificateCardItem key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
