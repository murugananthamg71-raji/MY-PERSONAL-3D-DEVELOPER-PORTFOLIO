export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  PYTHON = "python",
  DJANGO = "django",
  FASTAPI = "fastapi",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  LINUX = "linux",
  SQL = "sql",
  POSTGRES = "postgres",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  AWS = "aws",
  AI = "ai",
  GENAI = "genai",
  LLM = "llm",
  PROMPT = "prompt",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: {
    id: 1,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic structural foundation for accessible, responsive web apps.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    keyboardIcon: "/assets/keyboard/logos/html.svg",
    keyboardColor: "#ff480a",
  },
  [SkillNames.CSS]: {
    id: 2,
    name: "css",
    label: "CSS3",
    shortDescription: "Modern layouts, Flexbox, Grid, animations, and responsive styling.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    keyboardIcon: "/assets/keyboard/logos/css.svg",
    keyboardColor: "#633595",
  },
  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core dynamic language powering modern web interactions and frontends.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 4,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe JavaScript ensuring reliability, autocompletion, and scale.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven declarative UI development with hooks and state.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production React framework with SSR, SSG, routing, and server actions.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nextjs.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.PYTHON]: {
    id: 7,
    name: "python",
    label: "Python",
    shortDescription: "Versatile programming language for web backends, APIs, and AI models.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#306998",
  },
  [SkillNames.DJANGO]: {
    id: 8,
    name: "django",
    label: "Django",
    shortDescription: "Batteries-included Python web framework for robust, secure backends.",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    keyboardIcon: "/assets/keyboard/logos/django.svg",
    keyboardColor: "#092e20",
  },
  [SkillNames.FASTAPI]: {
    id: 9,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance Python web framework for building modern REST APIs.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    keyboardIcon: "/assets/keyboard/logos/fastapi.svg",
    keyboardColor: "#059669",
  },
  [SkillNames.TAILWIND]: {
    id: 10,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS framework for rapid and maintainable responsive UI.",
    color: "#38bdf8",
    icon: "/assets/keyboard/logos/tailwind-cyan.svg",
    keyboardIcon: "/assets/keyboard/logos/tailwind.svg",
    keyboardColor: "#00bfd8",
  },
  [SkillNames.NODEJS]: {
    id: 11,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime environment for building scalable network servers.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.LINUX]: {
    id: 12,
    name: "linux",
    label: "Linux",
    shortDescription: "Command-line administration, server environments, and shell scripting.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.SQL]: {
    id: 13,
    name: "sql",
    label: "SQL",
    shortDescription: "Relational database querying, schema design, and data normalization.",
    color: "#0284c7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/sql.svg",
    keyboardColor: "#0284c7",
  },
  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Enterprise-grade open-source relational database with ACID safety.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.MYSQL]: {
    id: 15,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Proven relational database powering modern web software stacks.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/mysql.svg",
    keyboardColor: "#00758f",
  },
  [SkillNames.MONGODB]: {
    id: 16,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible document-based NoSQL database for rapid data modeling.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    keyboardIcon: "/assets/keyboard/logos/mongodb.svg",
    keyboardColor: "#00c51b",
  },
  [SkillNames.GIT]: {
    id: 17,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control for clean history, branches, and merges.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.GITHUB]: {
    id: 18,
    name: "github",
    label: "GitHub",
    shortDescription: "Remote collaboration, code review, CI/CD actions, and project management.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.DOCKER]: {
    id: 19,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization tool for reproducible environments and microservices.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.AWS]: {
    id: 20,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure for deploying, hosting, and scaling web apps.",
    color: "#ff9900",
    icon: "/assets/keyboard/logos/aws-orange.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#ff9208",
  },
  [SkillNames.AI]: {
    id: 21,
    name: "ai",
    label: "Artificial Intelligence",
    shortDescription: "Exploring intelligent systems, data reasoning, and machine learning models.",
    color: "#8b5cf6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ai.svg",
    keyboardColor: "#8b5cf6",
  },
  [SkillNames.GENAI]: {
    id: 22,
    name: "genai",
    label: "Generative AI",
    shortDescription: "Building applications powered by modern generative models and embeddings.",
    color: "#6366f1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ai.svg",
    keyboardColor: "#6366f1",
  },
  [SkillNames.LLM]: {
    id: 23,
    name: "llm",
    label: "Large Language Models",
    shortDescription: "Prompt orchestration, structured responses, and conversational reasoning.",
    color: "#3b82f6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ai.svg",
    keyboardColor: "#3b82f6",
  },
  [SkillNames.PROMPT]: {
    id: 24,
    name: "prompt",
    label: "Prompt Engineering",
    shortDescription: "Designing robust system instructions, contextual few-shots, and guardrails.",
    color: "#ec4899",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ai.svg",
    keyboardColor: "#ec4899",
  },
};

export type SkillCategory = {
  title: string;
  skills: { name: string; icon?: string; description?: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "/assets/keyboard/logos/tailwind-cyan.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "/assets/keyboard/logos/aws-orange.svg" },
    ],
  },
  {
    title: "AI & Emerging Technologies",
    skills: [
      { name: "Artificial Intelligence" },
      { name: "Generative AI" },
      { name: "Large Language Models" },
      { name: "Prompt Engineering" },
    ],
  },
];

export type Experience = {
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
    fileName?: string;
    size?: string;
    documentUrl?: string;
    issueDate?: string;
    duration?: string;
    partner?: string;
    signatory?: string;
  };
};

export const EXPERIENCE: Experience[] = [
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
      documentUrl: "/assets/documents/yuva-intern-offer-letter.png",
      issueDate: "September 25, 2026",
      duration: "8 weeks • Sep 25, 2026 – Nov 20, 2026",
      partner: "Henry Harvin Education & NSDC Accredited",
      signatory: "Kounal Gupta, Founder, YuvaIntern.com (YuvaIntern Certified)",
    },
    description: [
      "Selected for the Full Stack Developer Fresher remote internship program by YuvaIntern (Henry Harvin Education & NSDC).",
      "Designing responsive, accessible web interfaces and UI components using HTML, CSS, JavaScript, and React.",
      "Working on practical full-stack projects, component state management, and web development pipelines.",
      "Engaging in structured technical deliverables, remote collaboration, and hands-on developer training under mentor guidance.",
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

export type EducationItem = {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  highlights?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "B.Tech",
    field: "Information Technology",
    institution: "Karpagam Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    duration: "July 2025 – May 2028",
    highlights: [
      "Specializing in Software Development, Database Systems, and Emerging Web Technologies.",
      "Active exploration of Artificial Intelligence, Computer Vision, and full-stack solutions.",
      "Earned NPTEL Elite Certification in Human Computer Interaction (84% score, 4 credits).",
    ],
  },
  {
    id: 2,
    degree: "Diploma",
    field: "Electrical and Electronics Engineering",
    institution: "Sri Krishna Polytechnic College",
    location: "Coimbatore, Tamil Nadu",
    duration: "June 2021 – June 2024",
    grade: "85%",
    highlights: [
      "Graduated with distinction (85% aggregate score).",
      "Solid foundation in electrical systems, circuit fundamentals, and engineering principles.",
    ],
  },
  {
    id: 3,
    degree: "SSLC",
    field: "Secondary School Leaving Certificate",
    institution: "Govt High School, Kurumbapalayam",
    location: "Madukkarai, Coimbatore, Tamil Nadu",
    duration: "May 2021",
    grade: "78%",
    highlights: [
      "Completed Secondary School Leaving Certificate (SSLC) with 78% aggregate score.",
      "Built a strong foundation in Mathematics, Science, and fundamental academic disciplines.",
    ],
  },
];

export type CertificationItem = {
  id: number;
  title: string;
  issuer: string;
  category: string;
  focus: string;
  status: string;
  priority?: string;
  grade?: string;
  pdfUrl: string;
  imageUrl?: string;
  rollNo?: string;
  certificateId?: string;
  completedDate?: string;
  duration?: string;
  verifyUrl?: string;
  caption?: string;
  isFeatured?: boolean;
  scoreBreakdown?: {
    consolidated: string;
    assignments?: string;
    proctoredExam?: string;
    totalCertified?: string;
    duration?: string;
    credits?: string;
    fundedBy?: string;
    institute?: string;
  };
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: "Explore Azure App Service",
    issuer: "Microsoft Learn",
    category: "Cloud Deployment",
    focus: "Cloud deployment, hosting web applications, Azure App Service architecture, scaling, and cloud management.",
    priority: "High Priority",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/azure-app-service.pdf",
    imageUrl: "/assets/documents/certificates/azure-app-service.png",
    completedDate: "June 3, 2026",
    caption: "Excited to share that I have successfully completed the Microsoft Learn certification: Explore Azure App Service! 🚀🤞",
  },
  {
    id: 2,
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    category: "UI/UX & Design",
    focus: "Human-centered design, user research, empathy mapping, ideation, prototyping, iterative testing, and cross-functional collaboration.",
    priority: "Credly Verified",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/ibm-design-thinking.pdf",
    imageUrl: "/assets/documents/certificates/ibm-design-thinking.png",
    completedDate: "05 AUG 2026",
    verifyUrl: "https://www.credly.com/go/5eyRbbTK",
    caption: "Earned the IBM SkillsBuild Enterprise Design Thinking Practitioner certification, demonstrating knowledge of human-centered design principles. Developed skills in user research, empathy, problem definition, ideation, prototyping, and iterative testing. Learned to collaborate effectively in cross-functional teams to create innovative, user-focused solutions using the Enterprise Design Thinking framework... 🚀🚀",
  },
  {
    id: 3,
    title: "Introduction to Generative AI and Agents",
    issuer: "Microsoft",
    category: "Generative AI",
    focus: "Generative AI fundamentals, autonomous AI agents, prompt engineering, real-world AI use cases, and responsible AI practices.",
    priority: "AI Certified",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/microsoft-genai-agents.pdf",
    imageUrl: "/assets/documents/certificates/microsoft-genai-agents.png",
    completedDate: "May 30, 2026",
    caption: "Completed the 'Introduction to Generative AI and Agents' course from Microsoft — mastering GenAI fundamentals, autonomous AI agents, prompt engineering, real-world use cases, and responsible AI practices! 🏆🚀",
  },
  {
    id: 4,
    title: "Introduction to Computer Vision Concepts",
    issuer: "Microsoft",
    category: "Computer Vision",
    focus: "Image processing, object detection, feature extraction, AI computer vision architectures, and visual reasoning.",
    priority: "Vision AI",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/microsoft-computer-vision.pdf",
    imageUrl: "/assets/documents/certificates/microsoft-computer-vision.png",
    completedDate: "June 3, 2026",
    caption: "Excited to share that I have successfully completed the Microsoft Learn certification: Introduction to Computer Vision Concepts! 🚀👁️",
  },
  {
    id: 5,
    title: "Introduction to Natural Language Processing (NLP) Concepts",
    issuer: "Microsoft",
    category: "NLP & AI",
    focus: "Text processing, semantic analysis, tokenization, language understanding, and human language AI models.",
    priority: "NLP Certified",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/microsoft-nlp.pdf",
    imageUrl: "/assets/documents/certificates/microsoft-nlp.png",
    completedDate: "May 30, 2026",
    caption: "Successfully completed Microsoft's Introduction to Natural Language Processing (NLP) Concepts certification — gaining deep insights into NLP fundamentals, text processing, language understanding, and human language AI! 🚀🎓",
  },
  {
    id: 6,
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Data & Analytics",
    focus: "Data concepts, data management, analytical foundations, data architectures, and data-driven problem solving.",
    priority: "Credly Verified",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/ibm-data-fundamentals.pdf",
    imageUrl: "/assets/documents/certificates/ibm-data-fundamentals.png",
    completedDate: "Jul 09, 2026",
    verifyUrl: "https://www.credly.com/badges/a8376efc-cb55-4c4b-9339-f95418cecef2",
    caption: "Excited to share that I've successfully earned the IBM SkillsBuild – Data Fundamentals certification! This learning journey has strengthened my understanding of data concepts and reinforced the importance of continuous upskilling. Looking forward to applying these skills in real-world projects! 🚀❤️🔥",
  },
  {
    id: 7,
    title: "Human Computer Interaction",
    issuer: "NPTEL (IIT Madras & IIIT Delhi)",
    category: "HCI & Usability",
    focus: "Usability, interface design, user experience, cognitive psychology, and interaction principles.",
    grade: "Elite, 84%",
    priority: "Elite Certified",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/nptel-hci-elite.pdf",
    imageUrl: "/assets/documents/certificates/nptel-hci-elite.png",
    rollNo: "NPTEL26CS70S250500380",
    caption: "NPTEL course on Human Computer Interaction with Elite certification and secured 84%. Grateful for this learning opportunity.. ❤️🔥",
    isFeatured: true,
    scoreBreakdown: {
      consolidated: "84% (Elite)",
      assignments: "25 / 25",
      proctoredExam: "58.75 / 75",
      totalCertified: "23,139 candidates",
      duration: "Jan-Apr 2026 (12 week course)",
      credits: "4 Credits Recommended",
      fundedBy: "MoE, Govt. of India",
      institute: "IIIT Delhi & IIT Madras",
    },
  },
  {
    id: 8,
    title: "Learning Docker",
    issuer: "LinkedIn Learning",
    category: "DevOps & Containers",
    focus: "Containers, Docker Products, application packaging, and deployment fundamentals.",
    priority: "Verified Credential",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/linkedin-docker.pdf",
    imageUrl: "/assets/documents/certificates/linkedin-docker.png",
    certificateId: "96e1662f1139ef998309e76b332399b9262297ef1816650cd0b857f37e4aabdb",
    completedDate: "Aug 07, 2026 at 03:44PM UTC",
    duration: "2 hours 6 minutes",
    caption: "Course completed covering Docker Products, container packaging, and deployment fundamentals.",
  },
  {
    id: 9,
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    category: "Relational Databases",
    focus: "SQL queries, joins, filtering, grouping, schema design, and relational databases.",
    priority: "Verified Credential",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/simplilearn-sql.pdf",
    imageUrl: "/assets/documents/certificates/simplilearn-sql.png",
    certificateId: "9422922",
    completedDate: "18th November 2025",
    caption: "I’m happy to share that I have successfully completed the “Introduction to SQL” course from Simplilearn SkillUp. 🎓",
  },
  {
    id: 10,
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    category: "Networking & Security",
    focus: "Networking fundamentals, connectivity, network protocols, IP routing, and architecture.",
    priority: "Verified Credential",
    status: "Verified",
    pdfUrl: "/assets/documents/certificates/cisco-networking-essentials.pdf",
    imageUrl: "/assets/documents/certificates/cisco-networking-essentials.png",
    completedDate: "24 Dec 2025",
    caption: "Successfully completed the Networking Essentials course from Cisco Networking Academy. This achievement marks an important step in developing my networking and technical skills.. ❤️🔥",
  },
];

export const themeDisclaimers = {
  light: [
    "Switching to clean, daylight contrast mode.",
    "Crisp visuals enabled.",
    "Clear, focused readability on neutral backgrounds.",
  ],
  dark: [
    "Welcome to space dark mode.",
    "Deep space theme with glowing accents enabled.",
    "High-contrast dark mode activated.",
  ],
};
