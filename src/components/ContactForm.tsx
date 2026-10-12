"use client";

import { ChevronRight, Loader2, Mail, Send } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { z } from "zod";
import { config } from "@/data/config";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const { toast } = useToast();

  const handleMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(subject || "Portfolio Inquiry");
    const mailtoBody = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(`mailto:${config.email}?subject=${mailtoSubject}&body=${mailtoBody}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setApiError(null);

    const result = formSchema.safeParse({ fullName, email, subject, message });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message: `[Subject: ${subject}]\n\n${message}` }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // If Resend API key is not configured (503) or failed (500)
        setApiError(data.error || "Email service is currently offline. You can send directly via your email client.");
        toast({
          title: "Service Notice",
          description: "Direct email dispatch is ready via mailto client fallback.",
          variant: "default",
          className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
        });
        setLoading(false);
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setSubmitted(true);
      setLoading(false);
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setApiError("Network connection issue. Please use the direct mailto button.");
      toast({
        title: "Connection Issue",
        description: "Please send directly via your preferred email app.",
        className: cn("top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"),
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center space-y-3">
          <h4 className="text-lg font-bold text-foreground">Thank You for Connecting!</h4>
          <p className="text-sm text-muted-foreground">
            Your message has been received. I will get back to you as soon as possible.
          </p>
          <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form className="w-full space-y-4" onSubmit={handleSubmit} aria-busy={loading}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full name *</Label>
              <Input
                id="fullname"
                placeholder="Your name"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrors((p) => ({ ...p, fullName: undefined }));
                }}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: undefined }));
                }}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              placeholder="Collaboration / Project Inquiry"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setErrors((p) => ({ ...p, subject: undefined }));
              }}
            />
            {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="content">Your Message *</Label>
            <Textarea
              placeholder="Tell me about your project, idea, or questions..."
              id="content"
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors((p) => ({ ...p, message: undefined }));
              }}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
          </LabelInputContainer>

          {apiError && (
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>{apiError}</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleMailtoFallback}
                className="shrink-0 text-xs border-amber-500/40 text-amber-300 hover:bg-amber-500/20"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                Open Email App
              </Button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              disabled={loading}
              className="flex-1 bg-primary text-primary-foreground font-medium rounded-md h-10 shadow-sm"
              type="submit"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Send Message</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleMailtoFallback}
              className="h-10 text-xs font-mono"
            >
              <Mail className="w-3.5 h-3.5 mr-2" />
              Direct Email Fallback
            </Button>
          </div>

          <p className="text-[11px] text-muted-foreground text-center pt-1 font-mono">
            No spam guarantee. Direct responses sent within 24–48 hours.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 w-full", className)}>
      {children}
    </div>
  );
};
