"use client";
import { EXPERIENCE, SKILL_GROUPS } from "../../lib/data";
import { motion } from "framer-motion";
import { Briefcase, Code, Smartphone, Database, Globe } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-24 bg-[#0a0c10]">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Experience <span className="text-teal-400">& Skills</span>
        </h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          A chronological narrative of professional milestones paired with a
          modular breakdown of technical proficiencies developed over years in
          software engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Professional Journey */}
        <div className="lg:col-span-7 space-y-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-teal-400" size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Professional Journey
            </h2>
          </div>

          <div className="relative  pl-2 border-white/10  space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-10 mb-2 "
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-teal-400 rounded-full -left-2 top-1 shadow-[0_0_15px_rgba(20,184,166,0.5)]" />

                <div className="bg-[#111827]/40 border border-white/5 p-6 rounded-2xl hover:border-teal-400/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-teal-400 font-medium text-sm mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-teal-500">›</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Technical Toolkit */}
        {/* <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-teal-400" size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Technical Toolkit
            </h2>
          </div>

          <div className="grid gap-6">
            {SKILL_GROUPS.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#111827]/60 border border-white/5"
              >
                <h4 className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}
