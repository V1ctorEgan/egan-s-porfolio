"use client";
import SelectedWorks from "@/components/SelectedWorks";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    // Add pt-32 to account for the fixed Navbar height
    <main className="min-h-screen pt-32 bg-[#0a0c10]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SelectedWorks />
      </motion.div>
    </main>
  );
}
