"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "TechFlow Systems",
    role: "Senior Full-Stack Developer",
    period: "2023 - Present",
    desc: "Leading the development of a decentralized finance dashboard using Next.js and Solidity.",
  },
  {
    company: "MobileFirst Agency",
    role: "Mobile Developer",
    period: "2021 - 2023",
    desc: "Developed and deployed 5+ React Native applications for international clients.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 lg:px-20 py-24 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-8 border-l border-teal-400/30"
            >
              <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_#14b8a6]" />
              <span className="text-teal-400 font-mono text-sm">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
              <p className="text-gray-400 font-semibold">{exp.company}</p>
              <p className="text-gray-500 mt-4 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
