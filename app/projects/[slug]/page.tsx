import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../../lib/data";
import {
  ArrowLeft,
  Github,
  Box,
  Zap,
  AlertTriangle,
  Code2,
} from "lucide-react";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find project based on slug from lib/data.ts
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  // console.log(p.params)
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 lg:px-24 py-8 border-b border-white/5">
        <div className="flex gap-2 items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <span>Portfolio</span>
          <span className="text-gray-700">/</span>
          <span className="text-white">{project.title} App</span>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 text-teal-400 text-[10px] font-bold uppercase tracking-widest hover:text-teal-300 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-md bg-teal-400/10 border border-teal-400/20 text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            Case Study: {project.category}
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
            {project.title}: <br />
            <span className="text-teal-400 italic font-medium">
              Architecture
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={project.link}
              className="flex items-center gap-2 px-8 py-4 bg-teal-400 text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] transition-all"
            >
              <Code2 size={18} /> View Code on GitHub
            </Link>
            <button className="px-8 py-4 bg-[#1e293b]/30 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1e293b]/50 transition-all text-white">
              Live Demo
            </button>
          </div>
        </div>

        {/* Mockup Preview */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-teal-400/10 blur-[120px] rounded-full" />
          <div className="relative w-full max-w-95 aspect-9/19 bg-[#0a0c10] border-10px border-[#1e293b] rounded-[3.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Phone Notch Detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1e293b] rounded-b-2xl z-20" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="px-6 lg:px-24 py-20 bg-[#0d0f14]">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-0.5 w-12 bg-teal-400" />
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white">
            Project Deep Dive
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Overview */}
          <div className="bg-[#1e293b]/20 border border-white/5 p-10 rounded-[2.5rem] space-y-6">
            <div className="w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center text-teal-400">
              <Box size={24} />
            </div>
            <h3 className="text-2xl font-bold">Overview</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Developed a cross-platform interface designed for high-performance
              interaction. The app serves as a gateway to decentralized
              protocols with a focus on non-technical accessibility and seamless
              user onboarding.
            </p>
          </div>

          {/* The Challenge */}
          <div className="bg-[#1e293b]/20 border border-white/5 p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden group">
            <AlertTriangle className="absolute -right-8 -top-8 w-48 h-48 text-white/2 -rotate-12 group-hover:text-teal-400/2 transition-colors" />
            <div className="w-12 h-12 bg-red-400/10 rounded-xl flex items-center justify-center text-red-400">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold">The Challenge</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              The primary obstacle was orchestrating real-time state
              synchronization across multiple nodes while maintaining a 99.9%
              crash-free rate. High-frequency data updates often led to UI jank
              and battery drain in earlier iterations.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="px-3 py-1 bg-red-400/10 text-red-400 text-[9px] font-bold rounded-md border border-red-400/20 uppercase tracking-wider">
                Latency: +3s
              </span>
              <span className="px-3 py-1 bg-red-400/10 text-red-400 text-[9px] font-bold rounded-md border border-red-400/20 uppercase tracking-wider">
                Memory Leaks Detected
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
