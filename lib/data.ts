// data.ts
// lib/data.ts
export const PROJECTS = [
  {
    slug: "enginemarts",
    title: "EngineMarts",
    category: "Web",
    description: "A Next.js global talent marketplace connecting verified engineers with companies. Featuring multi-step onboarding and certificate verification.",
    image: "/enginemart.png", 
    link: "https://engine-maps-z785.vercel.app/",
    type: "visit",
    tags: ["Next.js", "Full Stack", "Auth"]
  },
  {
    slug: "expertdex",
    title: "ExpertDex Logistics",
    category: "Web",
    description: "Logistics ecosystem connecting vehicle owners with service seekers. Built complete payment flows and real-time route selection.",
    image: "/expertd.png",
    link: "https://expertdex-mobile.vercel.app/",
    type: "visit",
    tags: ["React", "APIs", "Logistics"]
  },
  {
    slug: "avly-social",
    title: "Avly Social",
    category: "Mobile",
    description: "Multi-platform social media scheduler and analytics suite designed to improve brand engagement and usability.",
    image: "/avly.png",
    link: "#",
    type: "visit",
    tags: ["React Native", "Analytics"]
  },
  {
    slug: "grow-quest",
    title: "Grow Quest",
    category: "Mobile",
    description: "Personal development app with digital libraries, mentorship portals, and social video features like reels.",
    image: "/growquest-preview.png",
    link: "#",
    type: "case",
    tags: ["Cross-Platform", "Community"]
  },
  {
    slug: "sui-exchange",
    title: "Sui Exchange",
    category: "Web3",
    description: "a decentralized marketplace where developers, content creators, etc, can meet in the sui ecosystem",
    image: "/suie.png",
    link: "https://sui-exchange.vercel.app/",
    type: "visit",
    tags: ["Sui move", "smart contract"]
  },
  {
    slug: "ledger-vote",
    title: "LedgerVote",
    category: "Web3",
    description: "a decentralized voting system which is tamper-free, transparent and facilitates free and fair elections",
    image: "/ledgervote.png",
    link: "https://ledger-votes.vercel.app/",
    type: "visit",
    tags: ["Sui move", "smart contract"]
  },

];

export const TECH_STACK = [
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Solidity", category: "Web3" },
  { name: "TypeScript", category: "Language" },
  // ... rest of your stack
];

// lib/data.ts
export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "EngineMarts",
    period: "2025 - Present",
    points: [
      "Developed a Next.js-based global talent marketplace connecting verified engineers with companies worldwide.",
      "Implemented multi-step profile onboarding with skill and certificate verification.",
      "Built full stack features supporting both frontend interfaces and backend logic."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "ExpertDex",
    period: "Nov 2025 - Jan 2026",
    points: [
      "Developed a logistics platform connecting vehicle owners/drivers with users needing load transportation.",
      "Designed backend architecture, APIs, data models, and business logic for logistics operations.",
      "Built complete user-facing frontend using React, covering onboarding and payment flows."
    ]
  },
  {
    role: "Senior Mobile App Developer",
    company: "Avly",
    location: "Port Harcourt",
    period: "Jun 2024 - Aug 2025",
    points: [
      "Built a social media management app allowing multi-platform content scheduling and analytics.",
      "Streamlined UI/UX to improve usability and engagement."
    ]
  },
  {
    role: "React Native Developer",
    company: "GrowQuest",
    period: "Jul 2025 - Sep 2025",
    points: [
      "Built a mentorship and personal development app with multi-role mentor–mentee features.",
      "Developed a digital library with book reading and video playback.",
      "Implemented structured community discussions and optimized a Reels-style short video viewer.",
      "Integrated Firebase and Firestore with scalable state management."
    ]
  },
  {
    role: "React Native Developer",
    company: "UzoRides",
    period: "Sep 2025 - Nov 2025",
    points: [
      "Developed core mobile features including authentication, ride requests, and trip flow systems.",
      "Integrated real-time maps, geolocation, and route updates.",
      "Connected frontend to backend APIs for ride lifecycle, payments, and tracking."
    ]
  },
  {
    role: "Mobile App Developer",
    company: "Reality3DHub",
    period: "Oct 2025 - Sep 2025",
    points: [
      "Developed an electric-bike companion app with real-time speed, distance, and battery tracking.",
      "Built dashboards for monitoring bike performance."
    ]
  }
  
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "TypeScript"],
    icon: "Layout"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Go", "PostgreSQL", "GraphQL"],
    icon: "Database"
  },
  {
    title: "Mobile Development",
    skills: [ "React Native", "Swift", "Kotlin"],
    icon: "Smartphone"
  },
  {
    title: "Web3 & Decentralization",
    skills: ["Solidity", "Ethers.js", "Foundry", "IPFS"],
    icon: "Globe"
  }
];