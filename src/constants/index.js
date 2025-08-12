// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  // {
  //   title: "Web & Mobile Apps",
  //   description:
  //     "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
  //   items: [
  //     {
  //       title: "Cross-Platform Apps",
  //       description: "(Single codebase for iOS/Android/Web)",
  //     },
  //     {
  //       title: "PWAs",
  //       description: "(Offline mode, Push Notifications)",
  //     },
  //     {
  //       title: "E-Commerce",
  //       description: "(Checkout flows, Payment Gateways, Inventory APIs)",
  //     },
  //   ],
  // },
];
export const projects = [
  {
    id: 1,
    name: "MoodyPlayer",
    description:
      "An intelligent music player that detects your mood through facial expressions and plays music.",
    href: "https://ai-moody-palyer.vercel.app/",
    image: "/assets/projects/project1.png",
    bgImage: "/assets/projects/project1.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "face-api.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "cloudStorage" },
    ],
  },
  {
    id: 2,
    name: "EcoTrakr",
    description:
      "EcoTrakr is a modern web application that empowers individuals to track, visualize, and reduce their daily carbon emissions.",
    href: "https://carbonfootprint-tracker25.vercel.app/",
    image: "/assets/projects/project2.png",
    bgImage: "/assets/projects/project2.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "reduxtoolkit" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "FlixStream",
    description:
      "Welcome to FlixStream, your ultimate destination for exploring a vast collection of movies and TV shows.",
    href: "https://flix-stream-cinema-entertainment.vercel.app/",
    image: "/assets/projects/project3.png",
    bgImage: "/assets/projects/project3.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Reduxtoolkit" },
      { id: 3, name: "tailwindcss" },
      { id: 4, name: "TMDB api" },
    ],
  },
  {
    id: 4,
    name: "DevLinks",
    description:
      "Create and explore developer profiles with GitHub, LinkedIn, bios, and more – all in one place.",
    href: "https://devlink-25.netlify.app/",
    image: "/assets/projects/project4.png",
    bgImage: "/assets/projects/project4.png",
    frameworks: [
      { id: 1, name: "react.js" },
      { id: 2, name: "reduxtoolkit" },
      { id: 3, name: "tailwindcss" },
      // { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sujal_jaiswal_25/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sujaljaiswal25/" },
  { name: "GitHub", href: "https://github.com/Sujaljaiswal25" },
];
