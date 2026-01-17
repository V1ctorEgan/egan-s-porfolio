"use client";
import { motion } from "framer-motion";
import {
  Smartphone,
  Database,
  Layers,
  Code2,
  Cloud,
  Wind,
  Globe,
} from "lucide-react";

const technologies = [
  { name: "React Native", icon: <Smartphone size={18} /> },
  { name: "React ", icon: <Smartphone size={18} /> },
  { name: "Node.js", icon: <Layers size={18} /> },
  { name: "Next.js", icon: <Layers size={18} /> },
  { name: "Solidity", icon: <Database size={18} /> },
  { name: "TypeScript", icon: <Code2 size={18} /> },
  { name: "AWS", icon: <Cloud size={18} /> },
  { name: "PostgreSQL", icon: <Database size={18} /> },
  { name: "Mongodb", icon: <Globe size={18} /> },
  //   { name: "Flutter", icon: <Wind size={18} /> },
];

export default function TechStack() {
  return (
    <section className="w-full px-6 lg:px-20 py-12">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-xl font-bold whitespace-nowrap">Core Tech Stack</h2>
        <div className="h-px w-full bg-white/10" />
        <span className="text-xs text-gray-500 whitespace-nowrap font-mono">
          Skills & Tools
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="flex items-center gap-3 p-4 rounded-xl bg-[#111827]/40 border border-white/5 transition-colors"
          >
            <div className="text-teal-400">{tech.icon}</div>
            <span className="text-sm font-medium text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
