"use client";
import { motion } from "framer-motion";
import { Github, Share2, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-4 px-6 lg:px-20 pt-10 py-3 border-t border-white/5 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2 mt-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-white">Dev</span>
            <span className="text-teal-400">Portfolio</span>
          </div>
          <p className="text-gray-500 text-xs tracking-wide">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/v1ctorEgan"
            whileHover={{ y: -3, textShadow: "0 0 8px rgb(20, 184, 166)" }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Code2 size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Share2 size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Right Side: Built with Credit */}
        <div className="text-gray-500 text-xs font-medium ">
          Built with <span className="text-teal-400">Passion</span> and{" "}
          <span className="text-teal-400">TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
