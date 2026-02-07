"use client";

import { motion, Variants } from "framer-motion";
import { FiCode, FiZap, FiLayout, FiSmartphone } from "react-icons/fi";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type FocusItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function About() {
  const focusItems: FocusItem[] = [
    {
      title: "Responsive Design",
      desc: "Mobile-first approach for all devices.",
      icon: <FiSmartphone className="w-6 h-6 text-red-700" />,
    },
    {
      title: "Clean Code",
      desc: "Maintainable and reusable components.",
      icon: <FiCode className="w-6 h-6 text-red-900" />,
    },
    {
      title: "Performance",
      desc: "Optimized load times and smooth UX.",
      icon: <FiZap className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Pixel Perfect",
      desc: "Precise conversion from design to code.",
      icon: <FiLayout className="w-6 h-6 text-rose-800" />,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden w-full">
      {/* Decorative Maroon blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-[100px] -z-10 opacity-60" />

      {/* Main Content Container with bottom padding for divider */}
      <div className="max-w-6xl w-full ml-0 px-6 lg:pl-12 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-5 items-start"
        >
          {/* LEFT: Story */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
                My Story
              </span>

              <h2 className="mt-2 text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
                Crafting digital experiences with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">
                  purpose
                </span>
                .
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-zinc-600 text-lg leading-relaxed max-w-2xl"
            >
              <p>
                I’m a frontend developer who bridges the gap between design and
                technology. I don’t just write code; I build interfaces that feel
                natural to use and leave a lasting impression.
              </p>

              <div className="flex gap-12 pt-4">
                <div className="group">
                  <p className="text-3xl font-black text-zinc-900 transition-colors group-hover:text-red-700">1+</p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Years Exp.
                  </p>
                </div>
                <div className="group">
                  <p className="text-3xl font-black text-zinc-900 transition-colors group-hover:text-red-700">10+</p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Projects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Focus Cards */}
          <div className="lg:col-span-2 grid gap-4">
            {focusItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8, backgroundColor: "rgba(254, 242, 242, 0.5)" }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-100 bg-zinc-50/40 transition-all hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 group"
              >
                <div className="p-3 rounded-xl bg-white shadow-sm border border-zinc-50 group-hover:border-red-100">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 transition-colors group-hover:text-red-800">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-sm text-zinc-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        {/* Layer 1: Subtle Red tint for depth */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d"></path>
        </svg>

        {/* Layer 2: Main Section Transition (Matches Background of next section) */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Note: Change fill="#FAFAFA" if your next section is a different color */}
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#FAFAFA"></path>
        </svg>
      </div>
    </section>
  );
}