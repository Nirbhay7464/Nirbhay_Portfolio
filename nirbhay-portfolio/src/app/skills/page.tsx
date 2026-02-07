"use client";

import { motion } from "framer-motion";
import { Code2, Server, Globe, Cpu, Database, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-5 h-5" />,
    desc: "Architecting immersive user interfaces with focus on performance, SEO, and accessibility.",
    items: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-5 h-5" />,
    desc: "Building secure, scalable server-side logic and robust database architectures.",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Globe className="w-5 h-5" />,
    desc: "Automating deployments and managing cloud infrastructure for high-availability apps.",
    items: ["Docker", "AWS (S3/EC2)", "Vercel", "GitHub Actions", "REST & GraphQL", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#FAFAFA] w-full border-t border-zinc-100 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-50/50 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-6xl w-full ml-0 px-6 lg:pl-12 relative z-10">
        
        {/* Heading */}
        <div className="mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-700 font-bold tracking-[0.3em] uppercase text-xs">
              Capabilities
            </span>
            <h2 className="mt-4 text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-900 to-black">
                Ecosystem
              </span>.
            </h2>
            <p className="mt-8 text-zinc-500 text-xl font-light leading-relaxed max-w-2xl">
              I don't just write code; I design systems. From high-fidelity frontends to 
              complex backend architectures, I bridge the gap between design and deployment.
            </p>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] border border-zinc-200 bg-white p-10 hover:border-red-200 hover:shadow-[0_30px_60px_-15px_rgba(127,29,29,0.1)] transition-all duration-500"
            >
              {/* Floating Number Decor */}
              <span className="absolute top-8 right-10 text-5xl font-black text-zinc-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{index + 1}
              </span>

              {/* Header */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white shadow-lg shadow-zinc-900/20 group-hover:bg-red-700 group-hover:shadow-red-900/40 transition-all duration-500">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-500 font-light leading-relaxed mb-10 min-h-[60px]">
                {group.desc}
              </p>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-50">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl 
                               bg-zinc-50 text-zinc-500 border border-zinc-100
                               group-hover:bg-red-50 group-hover:text-red-800 group-hover:border-red-100
                               transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔻 BOTTOM ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        {/* Layer 1: Subtle Maroon Shadow */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Main Transition to White */}
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