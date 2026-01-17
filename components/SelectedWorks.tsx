"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Code2 } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Web3"];

const projects = [
  {
    title: "NFT Marketplace",
    category: "Web3",
    description:
      "High-frequency trading platform for digital collectibles with real-time floor price tracking.",
    image: "/nft-preview.jpg", // Add your images to /public
    link: "#",
    type: "visit",
  },
  {
    title: "Fitness Tracker",
    category: "Mobile",
    description:
      "Cross-platform mobile application featuring biometric data sync and AI-driven workout plans.",
    image: "/fitness-preview.jpg",
    link: "#",
    type: "case",
  },
  // Add the rest of your 6 projects here...
];

export default function SelectedWorks() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <section id="projects" className="w-full px-6 lg:px-20 py-24 bg-[#0a0c10]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="space-y-4">
          <span className="text-teal-400 font-mono text-sm tracking-widest">
            PORTFOLIO
          </span>
          <h2 className="text-5xl font-bold text-white">Selected Works</h2>
          <p className="text-gray-400 max-w-xl">
            A curated collection of mobile applications and decentralized web
            platforms built with modern performance in mind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group bg-[#111827]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-teal-400/30 transition-colors"
            >
              {/* Image Container */}
              <div className="aspect-4/3 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                  [ {project.title} Image ]
                </div>
                {/* Image component would go here */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      project.type === "visit"
                        ? "bg-teal-400 text-black hover:bg-teal-300"
                        : "border border-teal-400/50 text-teal-400 hover:bg-teal-400/10"
                    }`}
                  >
                    {project.type === "visit" ? (
                      <>
                        <ExternalLink size={16} /> Visit Site
                      </>
                    ) : (
                      <>
                        <BookOpen size={16} /> Case Study
                      </>
                    )}
                  </button>
                  <button className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5">
                    <Code2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5">
          {[
            { val: "24+", label: "PROJECTS COMPLETED" },
            { val: "12", label: "GITHUB STARS" },
            { val: "05", label: "MOBILE APPS LIVE" },
            { val: "100%", label: "CLIENT SATISFACTION" },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <h4 className="text-4xl font-bold text-teal-400">{stat.val}</h4>
              <p className="text-[10px] tracking-[0.2em] text-gray-500 font-bold uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
