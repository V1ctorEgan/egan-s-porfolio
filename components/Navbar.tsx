"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" }, // Adding the / ensures it works from any page
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl border border-white/5 bg-[#0a0c10]/60 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-teal-400">Dev</span>
          <span className="text-white">Portfolio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-teal-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2 bg-teal-400 text-black text-sm font-bold rounded-xl hover:bg-teal-300 transition-colors"
        >
          Resume
          <Download size={16} />
        </motion.a>
      </div>
    </motion.nav>
  );
}
