import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({
  live,
  repo,
  status,
}: {
  live?: string;
  repo?: string;
  status?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 my-4 mb-6 p-4 rounded-xl bg-secondary/30 border border-border">
      <div className="flex flex-wrap items-center gap-3">
        {live && live !== "#" && (
          <Link
            className="font-mono text-sm underline flex gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href={live}
          >
            <Button variant="default" size="sm">
              Visit Website
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        )}
        {repo && repo !== "#" && (
          <Link
            className="font-mono text-sm underline flex gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href={repo}
          >
            <Button variant="outline" size="sm">
              GitHub Repo
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
      {status && (
        <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
          {status}
        </span>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const textSkill = (title: string, badgeText: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-xs font-bold">{badgeText}</span>,
});

const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  fastapi: textSkill("FastAPI", "API"),
  django: textSkill("Django", "Dj"),
  ai: textSkill("Artificial Intelligence", "AI"),
  cv: textSkill("Computer Vision", "CV"),
  three: textSkill("Three.js", "3D"),
  html: textSkill("HTML5", "HTML"),
  css: textSkill("CSS3", "CSS"),
  auth: textSkill("Auth & RBAC", "RBAC"),
  mediapipe: textSkill("MediaPipe Hands", "MP"),
  ar: textSkill("Web AR", "AR"),
  canvas: textSkill("HTML5 Canvas", "CNV"),
  webaudio: textSkill("Web Audio API", "SND"),
  express: textSkill("Express.js", "EXP"),
  prisma: textSkill("Prisma ORM", "ORM"),
  opencv: textSkill("OpenCV", "CV2"),
  flask: textSkill("Flask", "FLASK"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  status?: string;
};

const projects: Project[] = [
  {
    id: "classroom-attendance",
    category: "AI Computer Vision & Deep Learning",
    title: "Real-Time Classroom Attendance & Student Engagement Tracking",
    src: "/assets/projects-screenshots/classroom-attendance/landing.png",
    screenshots: ["landing.png"],
    status: "Open Source AI",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.cv,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.ai,
      ],
    },
    live: "https://github.com/murugananthamg71-raji/Real-Time-Classroom-Attendance-and-Student-Engagement-Tracking-System",
    github: "https://github.com/murugananthamg71-raji/Real-Time-Classroom-Attendance-and-Student-Engagement-Tracking-System",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            An intelligent, production-ready system utilizing Deep Learning and Computer Vision to automatically log attendance and evaluate student engagement in real-time classroom streams.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            Engineered with OpenCV, Flask, MediaPipe, and DeepFace ResNet embeddings, this system performs simultaneous multi-face detection (20+ students at 15–30 FPS), anti-spoof liveness verification, Eye Aspect Ratio (EAR) drowsiness tracking, and head-pose attention categorization (Attentive, Distracted, or Sleeping).
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Multi-Face Recognition:</strong> Real-time detection of 20+ concurrent faces with 128D ResNet deep embeddings and duplicate cooldown prevention.
            </li>
            <li>
              <strong className="text-foreground">Eye Aspect Ratio (EAR) Drowsiness Detection:</strong> Landmark analysis to detect closing eyes, microsleeps, and blink frequency.
            </li>
            <li>
              <strong className="text-foreground">Head Pose Estimation (Yaw/Pitch/Roll):</strong> Gaze and orientation analysis measuring whether students are focused forward or looking away.
            </li>
            <li>
              <strong className="text-foreground">Engagement Scoring (0–100):</strong> Comprehensive algorithmic classification: Attentive, Distracted, or Sleeping with per-student telemetry.
            </li>
            <li>
              <strong className="text-foreground">Anti-Spoofing Liveness Verification:</strong> Blink and movement checks that prevent static photo and screen attacks.
            </li>
            <li>
              <strong className="text-foreground">Real-Time Flask Dashboard &amp; Analytics:</strong> Live webcam feed with bounding boxes, telemetry overlays, automated SQLite logging, and CSV attendance export.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground">
            GitHub Repo:{" "}
            <a
              href="https://github.com/murugananthamg71-raji/Real-Time-Classroom-Attendance-and-Student-Engagement-Tracking-System"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              https://github.com/murugananthamg71-raji/Real-Time-Classroom-Attendance-and-Student-Engagement-Tracking-System
            </a>
          </div>
        </div>
      );
    },
  },
  {
    id: "farmdirect-ai",
    category: "AI AgriTech & Smart Logistics (SIH)",
    title: "FarmDirect AI — Direct Agricultural Marketplace",
    src: "/assets/projects-screenshots/farmdirect-ai/landing.png",
    screenshots: ["landing.png"],
    status: "SIH Prototype",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.ai,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://farmdirect-ai-delta.vercel.app",
    github: "https://github.com/murugananthamg71-raji/FarmDirect_AI",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            Direct-to-consumer agricultural digital marketplace built for Smart India Hackathon (SIH26033), featuring AI demand forecasting, fair price guidance, and route-optimized cold-chain logistics.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            &ldquo;Farm Fresh. Fair Prices. Direct from Farmers.&rdquo; — Eliminating exploitative middlemen and intermediaries, FarmDirect AI empowers farmers with higher profit margins while delivering affordable, fresh produce to consumers and bulk buyers. The platform integrates machine learning forecasting, mandi market price intelligence, and 2-Opt traveling salesperson algorithm route optimization.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">AI Demand Forecasting:</strong> GradientBoostingRegressor and seasonal models predicting crop demand trends to prevent agricultural wastage and stockouts.
            </li>
            <li>
              <strong className="text-foreground">Fair Price Advisor:</strong> Real-time mandi modal price indexing and cost floor computation ensuring farmers receive equitable compensation.
            </li>
            <li>
              <strong className="text-foreground">Smart Route Optimization:</strong> Nearest Neighbor and 2-Opt Traveling Salesperson (TSP) heuristic engine calculating optimal delivery routes for cold-chain vehicles.
            </li>
            <li>
              <strong className="text-foreground">Multi-Role Commerce Workflow:</strong> End-to-end marketplace tailored for Farmers / FPOs, Direct Consumers, Institutional Bulk Buyers, and Logistics Fleets.
            </li>
            <li>
              <strong className="text-foreground">Trilingual Localization:</strong> Comprehensive i18n support featuring English, Tamil (தமிழ்), and Hindi (हिन्दी) for rural and regional accessibility.
            </li>
            <li>
              <strong className="text-foreground">Full-Stack Cloud Architecture:</strong> React, TypeScript, and Vite with Leaflet route visualizer on frontend; Python FastAPI, SQLAlchemy, Docker, and PostgreSQL on backend.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground flex flex-col gap-2">
            <div>
              GitHub Repo:{" "}
              <a
                href="https://github.com/murugananthamg71-raji/FarmDirect_AI"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                https://github.com/murugananthamg71-raji/FarmDirect_AI
              </a>
            </div>
            <div>
              Live Marketplace Demo:{" "}
              <a
                href="https://farmdirect-ai-delta.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                https://farmdirect-ai-delta.vercel.app
              </a>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "kit-portal",
    category: "Full Stack Research Portal",
    title: "Centralized Research Equipment Portal — KIT",
    src: "/assets/projects-screenshots/kit-portal/landing.png",
    screenshots: ["landing.png"],
    status: "Live Production",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.three,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.auth,
      ],
    },
    live: "https://centralized-research-equipment-port.vercel.app/student/dashboard",
    github: "https://github.com/murugananthamg71-raji/centralized-research-equipment-portal-KIT",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            Centralized Research Equipment and Laboratory Facility Management Portal engineered for Karpagam Institute of Technology (Smart Campus).
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            &ldquo;Streamlining high-end research facility reservations and analytical instrumentation.&rdquo; — Designed for Karpagam Institute of Technology (Coimbatore - 641105), this campus enterprise system empowers researchers, students, and faculty to check apparatus availability, reserve time slots, and track equipment health without scheduling conflicts.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Multi-Role Authentication (RBAC):</strong> Tailored role dashboards for Students, Faculty, Lab Admins, and Technicians with secure register number verification and JWT token persistence.
            </li>
            <li>
              <strong className="text-foreground">Automated Conflict Resolution:</strong> Smart scheduling algorithm preventing overlapping lab reservations and optimizing equipment throughput.
            </li>
            <li>
              <strong className="text-foreground">Instrumentation Status Tracking:</strong> Real-time operational status, maintenance scheduling, and technician logs for campus apparatus.
            </li>
            <li>
              <strong className="text-foreground">Interactive 3D Visuals &amp; Analytics:</strong> 3D visual representations powered by React Three Fiber &amp; Three.js paired with telemetry charts via Recharts.
            </li>
            <li>
              <strong className="text-foreground">Modern Production Stack:</strong> React 19, TypeScript, Vite, Tailwind CSS on the frontend; Node.js, Express, Prisma ORM, PostgreSQL with Zod schema validation on the backend.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground flex flex-col gap-2">
            <div>
              GitHub Repo:{" "}
              <a
                href="https://github.com/murugananthamg71-raji/centralized-research-equipment-portal-KIT"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                https://github.com/murugananthamg71-raji/centralized-research-equipment-portal-KIT
              </a>
            </div>
            <div>
              Vercel Live App:{" "}
              <a
                href="https://centralized-research-equipment-port.vercel.app/student/dashboard"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                https://centralized-research-equipment-port.vercel.app/student/dashboard
              </a>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "rd-portal",
    category: "Campus Web Portal",
    title: "Smart Campus R&D Resource Sharing & Lab Access Portal",
    src: "/assets/projects-screenshots/rd-portal/landing.png",
    screenshots: ["landing.png"],
    status: "Live Production",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.auth,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://rd-resource-sharing-portal.netlify.app/login.html",
    github: "https://github.com/murugananthamg71-raji/centralized-research-equipment-portal-KIT",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            An institutional research and laboratory resource-sharing portal engineered for Karpagam Institute of Technology (Smart Campus).
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            &ldquo;Ideas become impact when knowledge is shared.&rdquo; — Designed for Karpagam Institute of Technology (Coimbatore - 641105), this digital portal streamlines smart campus research laboratory access, slot reservation, apparatus availability monitoring, and practical academic schedules across technical departments.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Multi-Role Access Control:</strong> Dedicated authentication workflows tailored for Students / Researchers, Faculty, Lab Admins, and Lab Technicians with register number verification.
            </li>
            <li>
              <strong className="text-foreground">Lab Booking &amp; Slot Management:</strong> Real-time booking engine preventing schedule collisions and streamlining laboratory utilization.
            </li>
            <li>
              <strong className="text-foreground">Equipment Status &amp; Tracking:</strong> Live status indicators for specialized instruments, devices, and technical apparatus.
            </li>
            <li>
              <strong className="text-foreground">Practical Schedules Coordination:</strong> Centralized timetable view for academic lab sessions, experiments, and researcher timelines.
            </li>
            <li>
              <strong className="text-foreground">Cloud-Deployed &amp; Fully Responsive:</strong> Live on Netlify with optimized layouts across smartphones, tablets, and desktop workstations.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground">
            Live URL:{" "}
            <a
              href="https://rd-resource-sharing-portal.netlify.app/login.html"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              https://rd-resource-sharing-portal.netlify.app/login.html
            </a>
          </div>
        </div>
      );
    },
  },
  {
    id: "hand-tracking-ar",
    category: "Computer Vision & Web AR",
    title: "Advanced Hand Tracking AR",
    src: "/assets/projects-screenshots/hand-tracking-ar/landing.png",
    screenshots: ["landing.png"],
    status: "Open Source AR",
    skills: {
      frontend: [
        PROJECT_SKILLS.mediapipe,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.canvas,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.html,
      ],
      backend: [
        PROJECT_SKILLS.cv,
        PROJECT_SKILLS.ai,
        PROJECT_SKILLS.webaudio,
      ],
    },
    live: "/hand-tracking-ar/index.html",
    github: "https://github.com/murugananthamg71-raji/Advanced-Hand-Tracking-AR",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            Real-time browser-based augmented reality application featuring MediaPipe 3D hand tracking, neon visual effects, gesture recognition, and interactive audio.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            &ldquo;Bringing next-generation spatial computing directly to the browser.&rdquo; — Engineered with Google MediaPipe Hands, HTML5 Canvas, and Web Audio API, this application performs high-frequency, sub-millisecond 3D hand tracking in real time through standard webcams with zero external hardware or app installations.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">21 3D Landmark Tracking:</strong> Sub-millisecond joint and fingertip detection running client-side using MediaPipe deep learning models.
            </li>
            <li>
              <strong className="text-foreground">Algorithmic Gesture Recognition:</strong> Real-time detection of open palm, closed fist, pinch, peace sign, and dynamic finger spread percentages.
            </li>
            <li>
              <strong className="text-foreground">Fingertip Particle Physics:</strong> Dynamic particle emitters with velocity decay, gravitational pull, and lightning sparks radiating from active fingertips.
            </li>
            <li>
              <strong className="text-foreground">Dynamic Multi-Theme Engine:</strong> Real-time visual themes including Rainbow HSL cycle, Cyberpunk duotone, Lava embers, Ocean wave gradients, and Galaxy deep space.
            </li>
            <li>
              <strong className="text-foreground">Matrix Rain &amp; Dual-Canvas Shading:</strong> Layered rendering architecture separating webcam background effects from glowing neon skeletal overlays.
            </li>
            <li>
              <strong className="text-foreground">Web Audio API Synthesizer:</strong> Interactive soundscapes with frequency oscillation and resonance modulated by hand speed and gestures.
            </li>
            <li>
              <strong className="text-foreground">Glassmorphic Telemetry HUD:</strong> Real-time performance monitors tracking FPS (up to 60 FPS), detected hand count, active gestures, and spatial coordinates.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground flex flex-col gap-2">
            <div>
              GitHub Repo:{" "}
              <a
                href="https://github.com/murugananthamg71-raji/Advanced-Hand-Tracking-AR"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                https://github.com/murugananthamg71-raji/Advanced-Hand-Tracking-AR
              </a>
            </div>
            <div>
              Live In-Browser Demo:{" "}
              <a
                href="/hand-tracking-ar/index.html"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Launch Hand Tracking AR Camera Demo
              </a>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "feed-silage",
    category: "AI / AgriTech Prototype",
    title:
      "Smart AI-Enabled Rapid Feed and Silage Quality Testing System for Dairy Farmers",
    src: "/assets/projects-screenshots/feed-silage/landing.png",
    screenshots: ["landing.png"],
    status: "Project Prototype",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.ai,
        PROJECT_SKILLS.cv,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    github: "https://github.com/murugananthamg71-raji",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            An AI-driven image inspection and feed quality diagnostic system engineered to help dairy farmers quickly evaluate silage and feed batches.
          </TypographyP>

          <ProjectsLinks
            live={this.live !== "#" ? this.live : undefined}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            Silage quality directly influences livestock health and dairy output. Traditional laboratory testing often takes days to return reports. This project addresses the challenge by integrating smartphone camera capture with computer-vision intelligence to estimate physical indicators (color distribution, chop consistency, moisture estimation, and mould risk) in real time.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Core Architecture &amp; Capabilities
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Image Capture &amp; Upload:</strong> Responsive mobile-first interface allowing on-site snapshot upload directly from farm conditions.
            </li>
            <li>
              <strong className="text-foreground">Backend API Engine:</strong> High-throughput FastAPI endpoints designed to process uploaded media and coordinate image preprocessing.
            </li>
            <li>
              <strong className="text-foreground">AI-Assisted Quality Indicators:</strong> Evaluates discoloration, texture uniformity, and risk biomarkers using computer vision models.
            </li>
            <li>
              <strong className="text-foreground">Actionable Recommendations:</strong> Generates immediate silage health scores, storage guidance, and nutritional adjustment insights.
            </li>
            <li>
              <strong className="text-foreground">Farmer Results Dashboard:</strong> Clean, intuitive breakdown of scores with visual indicators designed for effortless field readability.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground">
            Note: This project is structured as a prototype and research concept. Real-world lab calibration and field trials are planned for expanded validation.
          </div>
        </div>
      );
    },
  },
  {
    id: "student-growth",
    category: "AI / EdTech Platform",
    title: "AI Student Growth Intelligence System",
    src: "/assets/projects-screenshots/student-growth/landing.png",
    screenshots: ["landing.png"],
    status: "Concept & In Development",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.ai,
      ],
    },
    live: "#",
    github: "https://github.com/murugananthamg71-raji",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-lg text-foreground font-semibold">
            A comprehensive student intelligence platform for organizing skills, certificates, verifiable evidence, and AI-personalized career roadmaps.
          </TypographyP>

          <ProjectsLinks
            live={this.live !== "#" ? this.live : undefined}
            repo={this.github}
            status={this.status}
          />

          <TypographyP className="text-muted-foreground leading-relaxed">
            Students frequently accumulate achievements, certifications, and technical projects scattered across various platforms without a cohesive growth tracking mechanism. The AI Student Growth Intelligence System centralizes achievement verification and pairs it with intelligent career milestone mapping.
          </TypographyP>

          <TypographyH3 className="text-xl font-bold border-b border-border pb-2">
            Key Modules &amp; Features
          </TypographyH3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Student Profile Management:</strong> Centralized portfolio consolidating academic background, technical domains, and personal goals.
            </li>
            <li>
              <strong className="text-foreground">Certificate &amp; Credential Archive:</strong> Structured storage for course completions, hackathon participation, and verified badges.
            </li>
            <li>
              <strong className="text-foreground">Skills &amp; Evidence Tracking:</strong> Tagged skill competencies mapped directly to supporting GitHub repositories and deliverables.
            </li>
            <li>
              <strong className="text-foreground">Career Goal Trajectory:</strong> Goal benchmarking against real-world software engineering job role requirements.
            </li>
            <li>
              <strong className="text-foreground">Personalized AI Recommendations:</strong> Actionable learning paths suggesting specific frameworks, database topics, and projects to fill curriculum gaps.
            </li>
          </ul>

          <div className="rounded-lg p-4 bg-muted/30 border border-border text-xs font-mono text-muted-foreground">
            Status: Platform concept under active architecture and interface development.
          </div>
        </div>
      );
    },
  },
];

export default projects;
