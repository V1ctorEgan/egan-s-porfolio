"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Using your actual data from lib/data.ts
import { PROJECTS as projects } from "@/lib/data";

const categories = ["All", "Web", "Mobile", "Web3"];

export default function SelectedWorks() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) =>
    filter === "All" ? true : p.category.toLowerCase() === filter.toLowerCase(),
  );

  return (
    <section
      id="projects"
      className="w-full  px-6 lg:px-24 py-24 bg-[#0a0c10] min-h-screen"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="space-y-4">
          <span className="text-teal-400 font-mono text-[10px] tracking-[0.4em] font-bold uppercase">
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
        <div className="flex h-fit p-0 bg-transparent  rounded-xl  border-white/5 items-center jusfity-center mb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-teal-400 text-black shadow-[0_0_20px_rgba(45,212,191,0.3)]"
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.slug}
              className="group bg-[#111827]/60 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-teal-400/30 transition-all duration-500"
            >
              {/* Image Container - FIXED: Added relative and h-64 */}
              <div className="relative aspect-4/3 w-full bg-[#1a2333] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0c10]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 pt-4 space-y-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold font-mono text-gray-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 h-10">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-2">
                  {project.type === "visit" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={`/projects/${project.slug}`}
                      scroll={false}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-teal-400/40 text-teal-400 font-bold text-xs uppercase tracking-wider hover:bg-teal-400/10 transition-all"
                    >
                      Case Study <BookOpen size={14} />
                    </Link>
                  )}

                  <button className="px-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">
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

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5">
        {[
          { val: "24+", label: "Projects Completed" },
          { val: "12", label: "Github Stars" },
          { val: "05", label: "Mobile Apps Live" },
          { val: "100%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="text-6xl font-bold text-teal-400 tracking-tighter">
              {stat.val}
            </h4>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
