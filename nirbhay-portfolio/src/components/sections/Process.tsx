"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      desc: "I dive deep into the goal and user requirements to ensure the solution is perfectly aligned from day one.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      id: "02",
      title: "Architecture",
      desc: "Planning layouts and component structures with a focus on clarity, modularity, and responsive design.",
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      id: "03",
      title: "Development",
      desc: "Writing clean, maintainable code and building reusable components while keeping performance at the core.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      id: "04",
      title: "Deployment",
      desc: "Rigorous testing across devices and performance polishing to deliver a smooth, production-ready experience.",
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 bg-[#FAFAFA] w-full border-t border-gray-100 overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full ml-0 px-6 lg:pl-12 pb-32 md:pb-40">
        
        {/* Heading Section */}
        <div className="mb-16">
          <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
            Workflow
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">
              Execute
            </span>
            .
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl text-lg font-light leading-relaxed">
            A disciplined approach to building digital products that are clean,
            scalable, and optimized for the best user experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] border border-zinc-200 bg-white/70 backdrop-blur-sm
                         hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5
                         transition-all duration-500"
            >
              {/* Step Icon & Number */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-2xl bg-zinc-50 text-red-700
                                group-hover:bg-red-700 group-hover:text-white
                                transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-zinc-600 
                                 group-hover:text-red-700 transition-colors duration-500">
                  {step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light group-hover:text-zinc-600 transition-colors">
                {step.desc}
              </p>

              {/* Decorative Connector (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-zinc-200 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔻 CUSTOM ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 overflow-hidden leading-[0]">
        {/* Layer 1: The "Shadow" Slant (Maroon Tint) */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[80px] opacity-[0.03]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Transition to Solid White Section */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}