"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-7xl flex flex-col rounded-2xl border border-white/5 bg-[#0a0c10]/60 backdrop-blur-md shadow-lg overflow-hidden">
        {/* Main Bar */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <span className="text-teal-400">Dev</span>
            <span className="text-white">Portfolio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Resume + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-teal-400 text-black text-sm font-bold rounded-xl hover:bg-teal-300 transition-colors"
            >
              Resume
              <Download size={16} />
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2  text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/5 bg-[#0a0c10]/95"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-white/5 my-2" />
                <a
                  href="/resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 bg-teal-400 text-black font-bold rounded-xl"
                >
                  Download Resume
                  <Download size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
