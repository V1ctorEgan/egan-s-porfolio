"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  BookOpen,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = ["All", "Web", "Mobile", "Web3"];
import { PROJECTS as projects } from "@/lib/data";
// const projects = [
//   {
//     title: "NFT Marketplace",
//     category: "WEB3",
//     description:
//       "High-frequency trading platform for digital collectibles with real-time floor price tracking and gas-optimized minting.",
//     image: "/logo.png",
//     link: "#",
//     type: "visit",
//   },
//   {
//     title: "Fitness Tracker",
//     category: "MOBILE",
//     description:
//       "Cross-platform mobile application featuring biometric data sync, social challenges, and AI-driven workout plans.",
//     image: "/fitness.png",
//     link: "#",
//     type: "case",
//   },
//   {
//     title: "DAO Governance",
//     category: "WEB3",
//     description:
//       "On-chain voting dashboard with delegated voting power and automatic treasury execution upon proposal passage.",
//     image: "/dao.png",
//     link: "#",
//     type: "visit",
//   },
//   {
//     title: "Budget Pro",
//     category: "MOBILE",
//     description:
//       "Secure personal finance manager with automatic expense categorization and encrypted local storage.",
//     image: "/budget.png",
//     link: "#",
//     type: "case",
//   },
//   {
//     title: "DevStream SaaS",
//     category: "WEB",
//     description:
//       "A project management tool for remote engineering teams featuring kanban boards and CI/CD status integration.",
//     image: "/devstream.png",
//     link: "#",
//     type: "visit",
//   },
//   {
//     title: "SecureChat",
//     category: "MOBILE",
//     description:
//       "End-to-end encrypted messaging application with self-destructing messages and P2P video calls.",
//     image: "/chat.png",
//     link: "#",
//     type: "case",
//   },
// ];

export default function SelectedWorks() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) =>
    filter === "All" ? true : p.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <section id="projects" className="w-full px-6 lg:px-24 py-24 bg-[#0a0c10]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="space-y-4">
          <span className="text-teal-400 font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            A curated collection of mobile applications and decentralized web
            platforms built with modern performance in mind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex bg-[#111827] p-1.5 rounded-xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-teal-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={project.title}
              className="group bg-[#111827]/30 border border-white/5 rounded-[2rem] overflow-hidden hover:border-teal-400/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-[#1a2333] relative overflow-hidden m-3 rounded-[1.5rem]">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-4xl uppercase tracking-tighter">
                  {project.title.split(" ")[0]}
                </div>
                {/* Image overlay or actual Image component would go here */}
              </div>

              {/* Content */}
              <div className="p-8 pt-4 space-y-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold font-mono text-gray-400 tracking-wider">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 h-12">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${
                      project.type === "visit"
                        ? "bg-teal-400 text-black border-teal-400 hover:bg-transparent hover:text-teal-400"
                        : "bg-transparent text-teal-400 border-teal-400/50 hover:bg-teal-400/5"
                    }`}
                  >
                    {project.type === "visit" ? (
                      <>
                        Visit Site <ExternalLink size={14} />
                      </>
                    ) : (
                      <>
                        Case Study <BookOpen size={14} />
                      </>
                    )}
                  </button>
                  <button className="px-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center">
                    <div className="flex items-center -space-x-1">
                      <ChevronLeft size={16} />
                      <ChevronRight size={16} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Stats Row - Moved outside the grid to span full width */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5">
        {[
          { val: "24+", label: "Projects Completed" },
          { val: "12", label: "Github Stars" },
          { val: "05", label: "Mobile Apps Live" },
          { val: "100%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="text-5xl font-bold text-teal-400 tracking-tighter">
              {stat.val}
            </h4>
            <p className="text-[10px] tracking-[0.2em] text-gray-500 font-bold uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
