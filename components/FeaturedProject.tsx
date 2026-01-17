"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function FeaturedProject() {
  return (
    <section className="w-full px-6 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group overflow-hidden rounded-3xl bg-[#111827]/40 border border-white/5 p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-teal-400 text-xs font-bold tracking-[0.2em] uppercase">
                Featured Project
              </span>
              <h3 className="text-4xl lg:text-5xl font-bold text-white">
                EtherFlow Wallet
              </h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              A cross-platform mobile wallet for the Ethereum ecosystem.
              Features include biometric security, multi-sig support, and direct
              dApp interaction via an embedded browser.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {["React Native", "Ethers.js", "WalletConnect"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Case Study Link */}
            {/* <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-teal-400 font-semibold group/link"
              whileHover={{ x: 5 }}
            >
              Case Study
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
              />
            </motion.a> */}
            <Link
              href={`/projects/etherflow-wallet`}
              className="inline-flex items-center gap-2 text-teal-400 font-semibold group/link"
            >
              Case Study
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
              />
            </Link>
          </div>

          {/* Project Preview Image */}
          <div className="flex-1 w-full relative aspect-16/10 lg:aspect-auto">
            <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Replace with your actual image path */}
              <div className="bg-[#1a2333] w-full h-75 lg:h-112.5 flex items-center justify-center text-gray-600 italic">
                {/* When you have the image:
                  <Image src="/etherflow.png" alt="Project Preview" fill className="object-cover" /> 
                */}
                [Mobile App Screenshots Placeholder]
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-teal-500/10 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
