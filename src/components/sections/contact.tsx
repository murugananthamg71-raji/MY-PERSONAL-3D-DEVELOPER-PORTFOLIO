"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { motion } from "motion/react";

const ContactSection = () => {
  const contactChannels = [
    {
      title: "Email",
      value: config.email,
      href: `mailto:${config.email}`,
      icon: <Mail className="w-4 h-4 text-primary" />,
      sub: "Direct inquiries",
    },
    {
      title: "Phone",
      value: "+91 88706 42691",
      href: "tel:+918870642691",
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      sub: "Direct call / WhatsApp",
    },
    {
      title: "LinkedIn",
      value: "in/muruganantham-g-7893b2267",
      href: config.social.linkedin,
      icon: <SiLinkedin className="w-4 h-4 text-blue-400" />,
      sub: "Professional network",
    },
    {
      title: "GitHub",
      value: "github.com/murugananthamg71-raji",
      href: config.social.github,
      icon: <SiGithub className="w-4 h-4 text-foreground" />,
      sub: "Code & repositories",
    },
    {
      title: "Location",
      value: config.location,
      icon: <MapPin className="w-4 h-4 text-red-400" />,
      sub: "Available for remote & hybrid roles",
    },
  ];

  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto pt-16 md:pt-24 pb-20 px-4 flex flex-col items-center justify-start">
      <SectionHeader
        id="contact"
        className="relative mb-12 md:mb-16 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center"
        title="Let's Build Something Meaningful"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-4 pointer-events-auto"
        >
          <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border shadow-sm space-y-4">
            <h3 className="text-xl font-bold font-display text-foreground">
              Get in Touch
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you are looking to collaborate on a full stack web application, explore practical AI implementations, or discuss exciting engineering opportunities, my inbox is always open.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {contactChannels.map((channel, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm flex items-start gap-3.5 hover:border-primary/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-secondary/80 border border-border shrink-0">
                  {channel.icon}
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="text-xs font-mono text-muted-foreground uppercase">
                    {channel.title}
                  </div>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      target={channel.href.startsWith("mailto:") || channel.href.startsWith("tel:") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {channel.value}
                    </Link>
                  ) : (
                    <div className="text-sm font-semibold text-foreground truncate">
                      {channel.value}
                    </div>
                  )}
                  <div className="text-[11px] text-muted-foreground">
                    {channel.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 pointer-events-auto"
        >
          <Card className="bg-card/70 border-border/80 backdrop-blur-md rounded-2xl shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-display font-bold">
                Send a Message
              </CardTitle>
              <CardDescription className="text-sm">
                Fill in the details below and I&apos;ll get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
