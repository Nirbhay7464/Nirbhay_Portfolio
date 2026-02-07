"use client";

import { motion } from "framer-motion";

export default function AboutClient() {
  return (
    <main className="relative bg-white overflow-hidden">

      {/* ================= INTRO ================= */}
      <section className="w-full px-6 lg:pl-12 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
            About Me
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight">
            Crafting digital experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">
              intention
            </span>.
          </h1>

          <p className="mt-8 text-xl text-zinc-600 leading-relaxed font-light max-w-2xl">
            Hi, I’m Nirbhay — a Full Stack developer who enjoys turning complex
            problems into simple, elegant digital experiences. I focus on
            building interfaces that feel natural, perform fast, and scale
            gracefully.
          </p>
        </motion.div>
      </section>

      {/* ================= JOURNEY + PHILOSOPHY ================= */}
      <section className="w-full px-6 lg:pl-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-24 max-w-6xl">

          {/* ================= MY JOURNEY ================= */}
          <div>
            <h2 className="text-3xl font-black text-zinc-900 mb-16 tracking-tight">
              My Journey
            </h2>

            <div className="relative pl-12 space-y-16">
              {/* Vertical timeline rail */}
              <div className="absolute left-0 top-2 h-[calc(100%-10px)] w-px bg-zinc-100" />

              {[
                {
                  year: "2022",
                  title: "Started Frontend Development",
                  desc: "Began exploring HTML, CSS, and JavaScript with curiosity and intent.",
                },
                {
                  year: "2023",
                  title: "Full Stack & System Architecture",
                  desc: "Engineered end-to-end applications integrating robust React interfaces with scalable backend services and database management.",
                },
                {
                  year: "2024",
                  title: "Next.js & Full-Stack Systems",
                  desc: "Mastered Server-Side Rendering (SSR) and API design, delivering high-performance, SEO-optimized production applications.",
                },
                {
                  year: "2025",
                  title: "Scalable Backend & Cloud Ops",
                  desc: "Advanced into microservices architecture and cloud-native deployments, focusing on database indexing and distributed system reliability.",
                },
                {
                  year: "2026",
                  title: "System Design & AI Integration",
                  desc: "Architecting large-scale enterprise solutions with specialized focus on real-time data streaming and custom AI model integrations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[51.5px] top-1.5 w-2 h-2 rounded-full bg-red-700 ring-[6px] ring-white border border-red-200" />

                  <div className="space-y-2">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-red-700/50">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---- PHILOSOPHY ---- */}
          <div>
            <h2 className="text-3xl font-black text-zinc-900 mb-16 tracking-tight">
              What I Believe In
            </h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Clarity",
                  desc: "Readable code and intuitive interfaces scale better than clever solutions.",
                },
                {
                  title: "Performance",
                  desc: "Fast, responsive experiences respect the user’s time and attention.",
                },
                {
                  title: "Consistency",
                  desc: "Reusable components and systems ensure long-term quality.",
                },
                {
                  title: "Continuous Growth",
                  desc: "I actively learn and adapt to modern frontend standards.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-red-100 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500"
                >
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-red-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-600 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL NOTE & STATS ================= */}
      <section className="w-full px-6 lg:pl-12 pb-48">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-2xl font-light text-zinc-500 leading-relaxed italic">
              "Outside of coding, I enjoy refining my workflow and continuously
              improving how ideas translate into <span className="text-zinc-900 font-medium not-italic">meaningful user experiences</span>."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-16"
          >
            <div>
              <p className="text-6xl font-black text-zinc-900 tracking-tighter">2+</p>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">
                Years Exp.
              </span>
            </div>
            <div>
              <p className="text-6xl font-black text-zinc-900 tracking-tighter">20+</p>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">
                Projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔻 BOTTOM ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        {/* Layer 1: Subtle Red Accent */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Transition to #FAFAFA */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#FAFAFA" />
        </svg>
      </div>
    </main>
  );
}