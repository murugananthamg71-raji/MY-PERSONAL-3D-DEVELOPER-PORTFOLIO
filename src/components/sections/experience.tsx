"use client";

import { SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export type ExperienceItem = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  skills: SkillNames[];
  note?: string;
  attachment?: {
    title: string;
    description: string;
    pdfUrl?: string;
    documentUrl?: string;
    fileName?: string;
    size?: string;
    issueDate?: string;
    duration?: string;
    partner?: string;
    signatory?: string;
  };
};

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 1,
    startDate: "Aug 2026",
    endDate: "Present",
    title: "Full Stack Engineer",
    company: "AEX Xenora Technologies",
    location: "Coimbatore, Tamil Nadu, India • Remote",
    type: "Internship",
    note: "3 mos • Remote Internship • Upskilling Program (Ref: IOL - XEN244)",
    attachment: {
      title: "Upskilling Internship Offer Letter – Full Stack Web Development",
      description: "Official Upskilling Internship Offer Letter (Ref: IOL - XEN244) issued to Muruganantham G on 22/08/2026 for Training & Upskilling Intern in Full Stack Web Development at AEX Xenora Technologies.",
      pdfUrl: "/assets/documents/Muruganantham_G_AEX_Xenora_Offer_Letter.pdf",
      fileName: "Muruganantham_G_AEX_Xenora_Offer_Letter.pdf",
      size: "PDF Document • 618 KB (2 Pages)",
      documentUrl: "/assets/documents/aex-xenora-offer-letter-page1.png",
      issueDate: "22/08/2026",
      duration: "Three (3) Months • Remote / Online",
      partner: "AEX Xenora Technologies (Ref: IOL - XEN244)",
      signatory: "AEX Xenora Technologies Private Limited",
    },
    description: [
      "Selected for the Internship Program at AEX Xenora Technologies in the domain of Full stack web development (IOL - XEN244).",
      "Building responsive full-stack web applications and scalable user-facing features under mentor guidance.",
      "Developing modular frontend interfaces and integrating backend services and REST APIs.",
      "Contributing to software infrastructure, version-controlled collaborative workflows, and code quality.",
      "Collaborating remotely on technical specifications, testing, and modern full-stack development best practices.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.SQL,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "Sep 2026",
    endDate: "Present",
    title: "Web Developer",
    company: "Yuva Intern by Henry Harvin",
    location: "Coimbatore South, Tamil Nadu, India • Remote",
    type: "Internship",
    note: "8 weeks • Remote Internship • Henry Harvin & NSDC Accredited",
    attachment: {
      title: "Internship Offer Letter – Full Stack Developer Fresher",
      description: "Official Internship Offer Letter issued to G Muruganantham on September 25, 2026 for Full Stack Developer Fresher position at YuvaIntern, under Henry Harvin Education & NSDC.",
      pdfUrl: "/assets/documents/Muruganantham_G_YuvaIntern_Offer_Letter.pdf",
      fileName: "Muruganantham_G_YuvaIntern_Offer_Letter.pdf",
      size: "PDF Document • 290 KB",
      documentUrl: "/assets/documents/yuva-intern-offer-letter.png",
      issueDate: "September 25, 2026",
      duration: "8 weeks • Sep 25, 2026 – Nov 20, 2026",
      partner: "YuvaIntern (Henry Harvin Education & NSDC)",
      signatory: "Kounal Gupta, Founder, YuvaIntern.com (YuvaIntern Certified)",
    },
    description: [
      "Selected for the Full Stack Developer Fresher remote internship program by YuvaIntern (Henry Harvin).",
      "Designing responsive, accessible web interfaces and UI components using HTML, CSS, JavaScript, and React.",
      "Working on practical full-stack projects, component state management, and web development pipelines.",
      "Engaging in structured technical deliverables, remote collaboration, and hands-on developer training.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Verified Internship",
    endDate: "Completed",
    title: "Trainee / Intern",
    company: "Texmo Industries",
    location: "Coimbatore, Tamil Nadu",
    type: "Industrial Training",
    note: "Industrial and manufacturing exposure (separate from software development)",
    description: [
      "Acquired hands-on exposure to manufacturing processes, industrial standards, and workflow efficiency.",
      "Participated in preventive maintenance routines, equipment inspection, and technical troubleshooting.",
      "Gained practical understanding of quality assurance guidelines, safety compliance, and workshop protocols.",
      "Collaborated effectively with multidisciplinary technical teams in high-standard industrial operations.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Connector Line - subtle border */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EXPERIENCES_DATA.map((exp, index) => (
            <div key={`exp-${exp.id}-${exp.company}`} className="relative">
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2 text-base font-medium text-muted-foreground">
                <span>{experience.company}</span>
                <span>•</span>
                <span className="text-xs text-muted-foreground/80">{experience.location}</span>
                {experience.type && (
                  <Badge variant="outline" className="text-[10px] uppercase font-mono px-2 py-0 border-primary/30 text-primary">
                    {experience.type}
                  </Badge>
                )}
              </div>
              {experience.note && (
                <p className="text-xs text-muted-foreground/70 italic mt-1">
                  Note: {experience.note}
                </p>
              )}
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {experience.startDate} — {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {experience.attachment && (
            <div className="rounded-xl border border-border/80 bg-secondary/30 hover:bg-secondary/40 transition-colors p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-[10px] font-mono border-emerald-500/40 text-emerald-500 bg-emerald-500/10 gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Document
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {experience.attachment.size || "PDF Document"}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
                    {experience.attachment.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {experience.attachment.partner} • Issued: {experience.attachment.issueDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
                <a
                  href={experience.attachment.pdfUrl || experience.attachment.documentUrl}
                  download={experience.attachment.fileName || "Offer_Letter.pdf"}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <a
                  href={experience.attachment.pdfUrl || experience.attachment.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent text-foreground text-xs sm:text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View PDF
                </a>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="w-3.5 h-3.5 object-contain opacity-80"
                    />
                  )}
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
