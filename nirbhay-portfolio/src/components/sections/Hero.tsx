"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Database } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiOpenjdk,
} from "react-icons/si";

export default function Hero() {
  const techStack = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Java", icon: <SiOpenjdk className="text-[#007396]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "SQL", icon: <Database className="w-3 h-3 text-[#336791]" /> },
    { name: "Postgres", icon: <SiPostgresql className="text-[#4169E1]" /> },
  ];

  return (
    <section className="relative min-h-screen bg-[#FAFAFA] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-red-200/30 blur-[100px] -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[360px] h-[360px] bg-rose-200/30 blur-[120px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pt-24 pb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px]
                       rounded-[2.5rem] bg-white/70 backdrop-blur-xl p-2
                       shadow-[0_30px_60px_-15px_rgba(127,29,29,0.25)]
                       border border-white"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/assets/images/photo.png"
                alt="Nirbhay Ganorkar"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Floating icons */}
            <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white shadow-xl">
              <Code2 className="w-5 h-5 text-red-700" />
            </div>
            <div className="absolute -top-4 -left-4 p-3 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 shadow-xl">
              <Rocket className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-xs font-bold text-red-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-700" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2.6rem] sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-zinc-900"
          >
            Nirbhay <br />
            <span className="bg-gradient-to-br from-red-700 via-red-900 to-black bg-clip-text text-transparent">
              Ganorkar
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-sm sm:max-w-md text-sm sm:text-lg text-zinc-500 font-light"
          >
            Crafting high-performance digital experiences where{" "}
            <span className="font-semibold italic text-zinc-900">
              design meets engineering
            </span>.
          </motion.p>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-white/60 backdrop-blur border border-zinc-200 shadow-sm"
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <div className="relative z-20 mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* PRIMARY */}
            <motion.a
              href="/projects"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-zinc-900 text-white font-bold w-full sm:w-auto overflow-hidden shadow-lg shadow-zinc-900/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* SECONDARY */}
            <motion.a
              href="/contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center justify-center px-10 py-4 rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur font-bold text-zinc-900 w-full sm:w-auto hover:bg-white hover:shadow-lg"
            >
              Get in touch
            </motion.a>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        {/* Layer 1: Subtle Red tint shadow */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Main white divider */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}