const config = {
  title: "Muruganantham G | Full Stack Developer",
  headline: "Building Digital Experiences with Code.",
  subHeadline: "HELLO, I'M MURUGANANTHAM G",
  roles: [
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "AI Enthusiast",
  ],
  description: {
    long: "I am a Full Stack Developer passionate about building modern web applications, exploring artificial intelligence, and creating digital experiences that solve real-world problems. I enjoy learning new technologies, developing practical projects, and turning innovative ideas into functional software.",
    short: "I build responsive web applications and explore AI-powered solutions that address real-world challenges.",
  },
  location: "Coimbatore, Tamil Nadu, India",
  keywords: [
    "Muruganantham G",
    "Muruganantham",
    "portfolio",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "AI Enthusiast",
    "Next.js",
    "Django",
    "FastAPI",
    "Three.js",
    "3D Portfolio",
    "Coimbatore Developer",
  ],
  author: "Muruganantham G",
  email: "murugananthamg@gmail.com",
  phone: "+91 8870642691",
  site: "https://muruganantham-portfolio-13.vercel.app",

  // for github stars button or repo attribution
  githubUsername: "murugananthamg71-raji",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/murugananthamg71-raji",
    linkedin: "https://linkedin.com/in/muruganantham-g-7893b2267",
    email: "mailto:murugananthamg@gmail.com",
    phone: "tel:+918870642691",
    portfolio: "https://muruganantham-portfolio-13.vercel.app/",
  },
};

export { config };
