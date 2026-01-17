"use client";
import { motion } from "framer-motion";
import { Clock, Rocket, Users } from "lucide-react"; // npm install lucide-react

const stats = [
  {
    label: "EXPERIENCE",
    value: "5+ Years",
    description: "Professional Growth",
    icon: <Clock className="w-5 h-5 text-teal-400" />,
  },
  {
    label: "LIVE APPS",
    value: "20+ Projects",
    description: "Production Ready",
    icon: <Rocket className="w-5 h-5 text-teal-400" />,
  },
  {
    label: "CONTRIBUTION",
    value: "Open Source",
    description: "200+ Pull Requests",
    icon: <Users className="w-5 h-5 text-teal-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the "one-by-one" effect
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function Stats() {
  return (
    <section className="w-full px-6 lg:px-20 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group p-8 rounded-2xl bg-[#111827]/50 border border-white/5 hover:border-teal-400/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">
              {stat.label}
            </p>
            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-sm text-teal-400/80 flex items-center gap-2">
              <span className="text-lg">~</span> {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
