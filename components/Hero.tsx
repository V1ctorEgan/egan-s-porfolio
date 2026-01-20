"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-32 gap-10">
      {/* Left side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <div className="flex items-center gap-2 text-teal-400 bg-teal-400/10 w-fit px-3 py-1 rounded-full border border-teal-400/20 text-xs font-medium">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>

        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
          Full-Stack & <br />
          <span className="text-teal-400">Mobile Developer</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl">
          Building high-performance applications and seamless mobile experiences
          with frontend, backend and web3 technologies. i turn complex problems
          into elegant digital solutions
        </p>

        <div className="flex gap-4">
          <a
            href="/projects"
            className="bg-teal-400 text-black px-6 py-3 rounded-md font-bold hover:bg-teal-300 transition-colors"
          >
            View My Projects
          </a>
          <Link
            href={"/contact"}
            className="border border-white/10 bg-white/5 px-6 py-3 rounded-md font-bold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>

      {/* Right side: Code Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full max-w-xl bg-[#111827] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
      >
        <div className="bg-white/5 p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-gray-500 text-xs">main.ts</span>
        </div>
        <div className="p-6 space-y-1">
          <p>
            <span className="text-blue-400">const</span>{" "}
            <span className="text-yellow-400">developer</span> = {"{"}
          </p>
          <p className="ml-4">
            name: <span className="text-teal-400">'Egan Victor'</span>,
          </p>
          <p className="ml-4">
            role: <span className="text-teal-400">'Full Stack & Mobile'</span>,
          </p>
          <p className="ml-4">
            focus: [
            <span className="text-teal-400">
              'Web', 'Mobile','smart contracts'
            </span>
            ],
          </p>
          <p>{"};"}</p>
          <p className="pt-4 text-blue-400">
            function <span className="text-yellow-400">solveProblem</span>
            (issue) {"{"}
          </p>
          <p className="ml-4 text-gray-500">// Implementation happens here</p>
          <p className="ml-4">
            return issue.<span className="text-blue-300">optimize</span>();
          </p>
          <p>{"}"}</p>
        </div>
      </motion.div>
    </section>
  );
}
