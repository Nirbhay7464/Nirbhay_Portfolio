"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type ProjectsProps = {
  limit?: number;
  showCTA?: boolean;
};

export default function Projects({
  limit,
  showCTA = false,
}: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projects"
      className="relative py-24 bg-white w-full border-t border-gray-100 overflow-hidden"
    >
      {/* Adjusted pb-40 here to give space for the slanted divider 
         so the "View All Projects" button doesn't get cut off.
      */}
      <div className="relative z-10 max-w-6xl w-full ml-0 px-6 lg:pl-12 pb-40">
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
            Portfolio
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">
              Work
            </span>
            .
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl text-lg leading-relaxed font-light">
            A curated collection of projects that showcase my frontend expertise,
            technical architecture, and user-centric design approach.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl border border-zinc-200 bg-white p-8
                         hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5
                         transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-red-800 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full
                               bg-zinc-50 text-zinc-500 border border-zinc-100
                               group-hover:border-red-50 group-hover:text-red-700
                               transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-zinc-50">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-900 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  <Github size={16} />
                  Codebase
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                         bg-zinc-900 text-white font-bold
                         hover:bg-red-800 transition-all duration-300
                         shadow-xl shadow-zinc-200 hover:shadow-red-900/20"
            >
              View All Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        )}
      </div>

      {/* 🔻 REFINED BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        {/* Layer 1: Subtle Red Accent Line (Matches Hero/About style) */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Transition to Next Section Background (e.g., #FAFAFA) */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[140px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Change fill to #FAFAFA if your next section is off-white */}
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}