"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Zap,
  Layout,
  Database,
  Smartphone,
  Globe,
  GraduationCap,
  Award,
} from "lucide-react";

const EXPERIENCE_DATA = [
  {
    role: "Full Stack Developer",
    company: "EngineMarts",
    period: "2025 – Present",
    points: [
      "Developed EngineMarts, a Next.js-based global talent marketplace connecting verified engineers and technical specialists with companies worldwide.",
      "Built full stack features supporting both frontend interfaces and backend logic.",
      "Implemented multi-step profile onboarding with skill and certificate verification.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "ExpertDex",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Developed a logistics platform connecting vehicle owners/drivers with users needing load transportation services.",
      "Designed backend architecture, APIs, data models, and business logic for logistics operations.",
      "Built complete user-facing frontend using React, covering onboarding, route selection, and payment flows.",
    ],
  },
  {
    role: "Senior Mobile App Developer",
    company: "Avly, Port Harcourt",
    period: "Jun 2024 – Aug 2025",
    points: [
      "Built a social media management app allowing multi-platform content scheduling and analytics.",
      "Streamlined UI/UX to improve usability and engagement.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Vulue",
    period: "2022",
    points: [
      "Built and maintained core frontend features using React for collaborative finance software across West Africa.",
      "Translated financial workflows into intuitive UI/UX.",
      "Contributed to product features supporting data-driven financial insights.",
    ],
  },
];

const SKILLS = [
  {
    title: "Frontend",
    icon: <Layout size={18} />,
    tags: ["REACT", "NEXT.JS", "TAILWIND", "TYPESCRIPT"],
  },
  {
    title: "Backend",
    icon: <Database size={18} />,
    tags: ["NODE.JS", "GO", "POSTGRESQL", "GRAPHQL"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={18} />,
    tags: ["SWIFT", "FLUTTER", "REACT NATIVE", "KOTLIN"],
  },
  {
    title: "Web3 & Decentralization",
    icon: <Globe size={18} />,
    tags: ["SOLIDITY", "ETHERS.JS", "HARDHAT", "IPFS"],
    highlight: true,
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-24 bg-[#0a0c10] text-white">
      {/* Header */}
      <header className="max-w-4xl mb-20">
        <h1 className="text-6xl font-bold mb-6">
          Experience <span className="text-teal-400">& Skills</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          A chronological narrative of professional milestones paired with a
          modular breakdown of technical proficiencies developed over years in
          software engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Professional Journey */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-10 text-gray-300">
            <Briefcase size={20} className="text-teal-400" />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Professional Journey
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-2 space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                {/* Timeline Node */}
                <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[6.5px] top-2 shadow-[0_0_15px_rgba(20,184,166,0.4)]" />

                <div className="group bg-[#111827]/30 border border-white/5 p-8 rounded-2xl hover:border-teal-400/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-bold group-hover:text-teal-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-teal-400/80 font-semibold mb-6">
                    {exp.company}
                  </p>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-teal-500 mt-1">›</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Technical Toolkit & Education */}
        <div className="lg:col-span-5 space-y-12">
          <div className="flex items-center gap-3 mb-10 text-gray-300">
            <Zap size={20} className="text-teal-400" />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Technical Toolkit
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl border transition-all ${
                  skill.highlight
                    ? "bg-teal-400/5 border-teal-400/20 shadow-[0_0_20px_rgba(20,184,166,0.05)]"
                    : "bg-[#111827]/40 border-white/5"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg text-teal-400">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-gray-200">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-gray-400 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="pt-10 border-t border-white/5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">
              Education & Certificates
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-white/5 rounded-lg h-fit text-gray-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">B.Sc. in Engineering</h4>
                  <p className="text-xs text-gray-500">
                    University of Port Harcourt • 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-white/5 rounded-lg h-fit text-gray-400">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Full Stack Specialist</h4>
                  <p className="text-xs text-gray-500">
                    Certified Professional • 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
