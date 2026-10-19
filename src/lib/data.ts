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
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
];

export const PROOF_HIGHLIGHTS = [
  {
    stat: "5+",
    label: "real projects shipped across full-stack, mobile & AI automation",
  },
  {
    stat: "2",
    label: "live in production today — a multi-platform app and a public AI tool",
  },
  {
    stat: "2024",
    label: "the year I became a Software Engineer and started building toward AI",
  },
];

export const DISCIPLINES = {
  build: {
    index: "01 / 03",
    name: "Build",
    label: "STRUCTURE",
    headline: "Give an idea structure.",
    description:
      "Responsive interfaces and full-stack features that turn a requirement into working software — primarily on the MERN stack.",
    linkText: "Explore the frontend work",
    linkHref: "#work",
  },
  automate: {
    index: "02 / 03",
    name: "Automate",
    label: "AI AUTOMATION",
    headline: "Make software do more of the work.",
    description:
      "Wiring LLM APIs (OpenAI, Gemini) into real application logic — chat agents and recommendation engines, not just prompt demos.",
    linkText: "Explore the AI work",
    linkHref: "#ai-automation",
  },
  learn: {
    index: "03 / 03",
    name: "Learn",
    label: "DATA SCIENCE",
    headline: "Grow into data-driven decisions.",
    description:
      "An ongoing M.S. in Data Science sharpening how I reason about data, modeling, and the systems built on top of both.",
    linkText: "Explore the journey",
    linkHref: "#journey",
  },
} as const;

export type DisciplineKey = keyof typeof DISCIPLINES;

export const PROCESS_STEPS = [
  { step: "01", title: "Understand the requirement", description: "Start from the actual problem, not an assumed solution." },
  { step: "02", title: "Shape the data and the API", description: "Model the data, design the endpoints, decide what the client actually needs." },
  { step: "03", title: "Build and ship the product", description: "Implement the client, wire it to the API, and get it in front of real use." },
];

export const ACCORDION_ITEMS = [
  {
    id: "exp-1",
    number: "01",
    category: "PRODUCT & FRONTEND",
    title: "Build with perspective.",
    description:
      "I connect what users need with what the stack can do — clean component hierarchies, responsive interfaces, and state that stays predictable as a product grows.",
    strengths: "React · Next.js · TypeScript · Tailwind CSS · Framer Motion · Redux/Zustand",
  },
  {
    id: "exp-2",
    number: "02",
    category: "BACKEND & DATA",
    title: "Make the backend disappear.",
    description:
      "REST APIs, data modeling, and authentication that just work — so the frontend never has to compensate for a shaky foundation underneath it.",
    strengths: "Node.js · Express · Sequelize · PostgreSQL · MongoDB · JWT Authentication",
  },
  {
    id: "exp-3",
    number: "03",
    category: "AI & AUTOMATION",
    title: "Bring intelligence forward.",
    description:
      "Integrating LLM APIs and third-party services into real product logic — a chat agent that generates structured output, a recommendation engine that filters a real catalog.",
    strengths: "OpenAI API · Google Gemini API · Firebase · Workflow automation",
  },
];

export const JOURNEY = [
  {
    year: "2024",
    title: "Completed the degree, joined the team.",
    description:
      "Finished a B.S. in Computer Science and joined Clustox as a Software Engineer, building full-stack web applications on the MERN stack.",
  },
  {
    year: "2024 — Present",
    title: "Full-stack engineering, day to day.",
    description:
      "Working across the stack in a professional engineering team — API design, data modeling, and frontend implementation on real client work.",
  },
  {
    year: "Ongoing",
    title: "Building the next layer: data and AI.",
    description:
      "Pursuing an M.S. in Data Science while building AI-powered side projects — a chat agent, a recommendation engine — to turn that study into shipped software.",
  },
];

export const JOURNEY_STORY = [
  {
    marker: "BEFORE 2024",
    title: "Four years of Computer Science.",
    body: "Algorithms, systems, and software fundamentals — the groundwork everything since has been built on.",
    tag: "Education",
  },
  {
    marker: "2024",
    title: "Degree finished. Career started.",
    body: "Completed the B.S. and joined Clustox as a Software Engineer in the same year — straight from the classroom into production code.",
    tag: "Turning point",
  },
  {
    marker: "2024 — Present",
    title: "Full-stack, every day.",
    body: "API design, data modeling, and frontend implementation on real client work, as part of a professional engineering team.",
    tag: "Clustox",
  },
  {
    marker: "Ongoing",
    title: "Adding data and AI to the stack.",
    body: "Pursuing an M.S. in Data Science while shipping AI-powered side projects of my own — turning that study into software, not just coursework.",
    tag: "What's next",
  },
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

export type SkillFilter = "all" | "frontend" | "backend" | "ai" | "mobile";

export const SKILL_GROUPS: {
  id: string;
  category: Exclude<SkillFilter, "all">;
  number: string;
  categoryTitle: string;
  highlight: string;
  skills: { name: string; context: string }[];
}[] = [
  {
    id: "grp-frontend",
    category: "frontend",
    number: "01",
    categoryTitle: "FRONTEND",
    highlight: "Responsive, maintainable client experiences.",
    skills: [
      { name: "React & Next.js", context: "Component architecture, routing, data fetching" },
      { name: "TypeScript / JavaScript", context: "Typed, maintainable application code" },
      { name: "Tailwind CSS", context: "Design-token-driven, responsive styling" },
      { name: "Framer Motion", context: "Scroll reveals, hover micro-interactions, page motion" },
    ],
  },
  {
    id: "grp-backend",
    category: "backend",
    number: "02",
    categoryTitle: "BACKEND & DATA",
    highlight: "APIs and data models built for real use.",
    skills: [
      { name: "Node.js & Express", context: "REST APIs, middleware, route/controller patterns" },
      { name: "PostgreSQL & Sequelize", context: "Relational data modeling, migrations, queries" },
      { name: "MongoDB", context: "Document modeling for flexible application data" },
      { name: "JWT Authentication", context: "Token-based auth, OTP verification, session handling" },
    ],
  },
  {
    id: "grp-ai",
    category: "ai",
    number: "03",
    categoryTitle: "AI & AUTOMATION",
    highlight: "LLMs and automation wired into real products.",
    skills: [
      { name: "OpenAI API", context: "Chat-driven features and structured generation" },
      { name: "Google Gemini API", context: "A second LLM provider in a dual-provider pipeline" },
      { name: "Firebase", context: "Session persistence for AI-driven conversations" },
      { name: "Workflow automation", context: "Wiring third-party services into application logic" },
    ],
  },
  {
    id: "grp-mobile",
    category: "mobile",
    number: "04",
    categoryTitle: "MOBILE & TOOLING",
    highlight: "Cross-platform apps and the tools behind them.",
    skills: [
      { name: "React Native & Expo", context: "Cross-platform mobile apps, three shipped" },
      { name: "Zustand / Redux", context: "Predictable client-side state management" },
      { name: "Git, Docker, Postman", context: "Version control, containers, API testing" },
      { name: "Nginx & PM2", context: "Production deployment for Node.js services" },
    ],
  },
];
