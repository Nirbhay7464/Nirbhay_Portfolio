"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Layers } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-red-700" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS" , "JavaScript" , "UI/UX Principles" , "Framer Motion" , "Node.js" ,],
    },
    {
      title: "Backend & Databases",
      icon: <Terminal className="w-5 h-5 text-red-700" />,
      skills: ["REST APIs", "Drizzle ORM", "PostgresSQL", "Neon Postgres", "MongoDB", "Authentication", "JWT & OAuth", "Serverless Functions",],
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="w-5 h-5 text-red-700" />,
      skills: ["Git & GitHub", "REST APIs", "VS Code", "Responsive Design", "Optimization" , "Clerk Auth" , "Vercel" ],
    },
    {
      title: "Core & Others",
      icon: <Layers className="w-5 h-5 text-red-700" />,
      skills: ["Auth & Forms", "Vercel Deployment", "UI Refactoring", "SEO Basics", "Node.js", "Java", "Data Structures", "Algorithms", "System Design", "Testing & Debugging",],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#FAFAFA] w-full border-t border-gray-100 overflow-hidden">
      
      <div className="max-w-6xl w-full ml-0 px-6 lg:pl-12 pb-32">
        
        {/* Heading */}
        <div className="mb-14">
          <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
            Expertise
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">Tech Stack</span>.
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl text-lg leading-relaxed font-light">
            Technologies and tools I use to build fast, responsive, and
            maintainable web applications where performance meets design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-3xl border border-zinc-200 bg-white hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-200 group-hover:text-white transition-colors duration-300">
                  {/* Note: Added strokeWidth for better visibility on hover */}
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold text-zinc-500 bg-zinc-50 rounded-full border border-zinc-100 group-hover:border-red-100 group-hover:text-red-800 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        {/* Layer 1: Subtle Red tint */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d"></path>
        </svg>

        {/* Layer 2: Main Transition to White */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}