// data.ts
export const PROJECTS = [
  { slug: "etherflow-wallet",
    title: "EtherFlow Wallet",
    description: "A cross-platform mobile wallet for the Ethereum ecosystem. Features include biometric security and multi-sig support.",
    fullCaseStudy: "Here you can write the long version of the project story...",
    tags: ["React Native", "Ethers.js", "WalletConnect"],
    link: "#",
    image: "/logo.png" 
  },
  // Add more projects here
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
  }
  // ... Continue adding Vulue, Grow Quest, and Reality 3DHub here
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