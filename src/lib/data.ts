export const SITE = {
  name: "Bilal Nadeem",
  role: "Software Engineer · Full-Stack Developer",
  tagline:
    "I build full-stack web products on the MERN stack and I'm expanding into AI automation — shipping real applications, not just experiments.",
  location: "Available for remote work",
  email: "", // not supplied — contact via profile links below
  github: "https://github.com/MBN4",
  linkedin: "https://www.linkedin.com/in/bilal-nadeem-2016833a7/",
  fiverr: "https://www.fiverr.com/mbbiillaall",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-automation", label: "AI Automation" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  featured: boolean;
  category: "Full-Stack" | "AI Automation" | "Mobile";
};

export const PROJECTS: Project[] = [
  {
    slug: "madina-collar",
    name: "Madina Collar",
    tagline: "Production fabric ordering platform — mobile, web, admin, and API",
    description:
      "A live fabric sales and ordering system built around a single Express/Sequelize (PostgreSQL) API that serves three independent client applications: a React Native (Expo) mobile app, a Next.js customer web app, and a React + Vite admin panel for staff. Customers browse fabric qualities, styles, and price matrices, then place and track orders; admins manage catalog data, pricing, and order fulfillment from a dedicated dashboard.",
    role:
      "Designed and built the backend data model (orders, qualities, styles, price matrices, OTP-based auth) and implemented matching ordering flows across the mobile and web clients.",
    stack: [
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "JWT",
      "React Native (Expo)",
      "Next.js",
      "React",
      "Vite",
      "Framer Motion",
      "Zustand",
    ],
    highlights: [
      "Single backend API (Express + Sequelize/PostgreSQL) powering three separate frontends — mobile, web, and an internal admin panel.",
      "Token-based authentication with OTP verification and a blacklisted-token model for secure session handling.",
      "Deployed to a production VPS behind Nginx with PM2 process management and Let's Encrypt SSL across three subdomains.",
      "Order, pricing, and catalog management (quality/style/price-matrix CRUD) built for real staff use, not just a demo.",
    ],
    links: [{ label: "View Code", href: "https://github.com/MBN4/madina-collar" }],
    featured: true,
    category: "Full-Stack",
  },
  {
    slug: "circle-ai-universe",
    name: "Circle — The AI Universe",
    tagline: "A curated discovery platform for AI tools, with an AI-assisted matchmaker",
    description:
      "A Next.js 15 / React 19 directory of AI tools for design, coding, video, copywriting, and marketing — built with a directory/search view, a side-by-side comparison tool, a pricing calculator, and a shareable 'tool stack' builder. The standout feature is an AI Matchmaker that filters the catalog against a user's role and goal to surface a short, relevant shortlist.",
    role:
      "Designed and built the full frontend: data modeling for the tool catalog, the matchmaker's recommendation logic, and the interactive comparison/stack/calculator views.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Interactive AI Matchmaker that narrows a 100+ tool catalog by role and goal to return tailored recommendations.",
      "Dedicated compare, pricing-calculator, and workflow/'stack' builder views beyond a standard directory listing.",
      "Built entirely with Framer Motion for page and interaction animation — the same animation approach used on this portfolio.",
      "Deployed and publicly live on Vercel.",
    ],
    links: [
      { label: "Live Demo", href: "https://circle-the-ai-universe.vercel.app" },
      { label: "View Code", href: "https://github.com/MBN4/circle-the-ai-universe" },
    ],
    featured: true,
    category: "AI Automation",
  },
  {
    slug: "ai-business-analyst",
    name: "AI Business Analyst",
    tagline: "A conversational AI agent that turns a chat into a structured requirements summary",
    description:
      "An AI-powered chat agent built on Next.js that interviews a user about a project idea, then generates a structured business-requirements summary using LLM APIs (OpenAI and Google Gemini). Conversations are persisted with Firebase, and a lead-capture form (HubSpot) is wired in for turning a completed session into a follow-up contact.",
    role:
      "Built the chat interface, the requirement-generation pipeline across two LLM providers, and the Firebase persistence layer.",
    stack: ["Next.js", "OpenAI API", "Google Gemini API", "Firebase", "Ant Design"],
    highlights: [
      "Dual LLM integration (OpenAI + Gemini) behind a single chat-to-summary pipeline.",
      "Structured requirements-summary generation from free-form conversation, not just raw chat.",
      "Firebase-backed session persistence and a HubSpot form for lead capture after a session.",
    ],
    links: [{ label: "View Code", href: "https://github.com/MBN4/ai-business-analyst" }],
    featured: true,
    category: "AI Automation",
  },
  {
    slug: "reelbite",
    name: "ReelBite",
    tagline: "A short-video discovery feed for food, with a dedicated food-partner platform",
    description:
      "A MERN application that pairs a short-form video feed (think reels, for food) with a separate 'food partner' side for restaurants to register, upload dishes, and manage their listings. Media uploads are handled through ImageKit, with JWT-based auth for both regular users and food-partner accounts.",
    role: "Built the full stack: Express/MongoDB API, auth for two user types, and the React feed/upload UI.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "ImageKit"],
    highlights: [
      "Dual account system — regular users and food-partner (restaurant) accounts — with separate flows and protected routes.",
      "Video feed UI with a custom player modal, explore view, and partner dashboard for managing dish listings.",
      "Media storage and delivery via ImageKit integration.",
    ],
    links: [{ label: "View Code", href: "https://github.com/MBN4/ReelBite" }],
    featured: false,
    category: "Full-Stack",
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    tagline: "A home-chef marketplace mobile app with customer, chef, and admin roles",
    description:
      "A React Native (Expo) marketplace app connecting customers with local home chefs. Customers browse chef menus, place and track orders, and manage addresses with location autocomplete; chefs manage their menu and view an earnings dashboard; admins get a separate dashboard. Backed by a Node.js/Express/MongoDB API with Cloudinary-hosted media.",
    role: "Built the mobile client across all three roles and the supporting Express/MongoDB backend.",
    stack: ["React Native (Expo)", "Node.js", "Express", "MongoDB", "Zustand", "Google Places API"],
    highlights: [
      "Three distinct role-based flows in one app — customer ordering, chef menu/earnings management, and admin oversight.",
      "Location-aware ordering with Google Places/Maps autocomplete for delivery addresses.",
      "Custom chef earnings dashboard and order-tracking screens built with React Native and Zustand state management.",
    ],
    links: [{ label: "View Code", href: "https://github.com/MBN4/Kitchens" }],
    featured: false,
    category: "Mobile",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);

export const EXPERIENCE = [
  {
    company: "Clustox",
    title: "Software Engineer",
    period: "2024 — Present",
    summary:
      "Working as a full-stack software engineer, building and maintaining web applications across the stack — from API and database design to frontend implementation — as part of a professional engineering team.",
    points: [
      "Contributing to full-stack web application development in a professional team environment.",
      "Working across frontend and backend layers, including API design, data modeling, and UI implementation.",
      "Applying production engineering practices — version control, code review, and iterative delivery — on real client work.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. in Data Science",
    institution: "In Progress",
    period: "Ongoing",
    description:
      "Currently pursuing a Master's in Data Science, building on a software engineering foundation with a deeper focus on data analysis, machine learning, and intelligent systems.",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "Completed 2024",
    period: "2024",
    description:
      "Completed a Bachelor's degree in Computer Science, covering core software engineering, algorithms, and systems fundamentals that underpin full-stack development work today.",
  },
];

export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Authentication", "Sequelize"],
  },
  {
    category: "Data & Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "Google Gemini API", "LLM-powered chat agents", "Workflow automation", "Firebase"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Tooling & Platform",
    items: ["Git", "GitHub", "Docker", "Postman", "Figma", "Nginx", "PM2"],
  },
];

export const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "MERN Stack Developer",
  "AI Automation Developer",
];
