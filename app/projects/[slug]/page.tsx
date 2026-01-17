"use client";
import { PROJECTS } from "@/lib/data";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project that matches the URL slug
  const project = PROJECTS.find((p) => p.slug === params.slug);

  // If the project doesn't exist, show the 404 page
  if (!project) return notFound();

  return (
    <main className="min-h-screen pt-32 px-6 lg:px-20 bg-[#0a0c10]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-teal-400 font-mono text-sm">
          {project.tags.join(" • ")}
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-8">
          {project.title}
        </h1>

        <div className="aspect-video bg-white/5 rounded-3xl mb-12 overflow-hidden border border-white/10">
          {/* Replace with <Image /> when ready */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Project Image Placeholder
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed">
          <p>{project.fullCaseStudy}</p>
        </div>
      </motion.div>
    </main>
  );
}
