"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FAFAFA] pt-32 pb-10 overflow-hidden">
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-700/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-100/30 blur-[100px] -z-10 rounded-full" />

      {/* --- HUGE WATERMARK --- */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap">
        <h2 className="text-[15rem] font-black uppercase tracking-tighter text-zinc-900">
          NIRBHAY
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-16">
          
          {/* TOP SECTION: Main Navigation / Socials */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Left: Branding */}
            <div className="flex flex-col items-center md:items-start group">
              <div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-black text-sm shadow-xl shadow-zinc-900/20"
                >
                  NG
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-zinc-900 font-black tracking-tighter text-xl uppercase leading-none">
                    Nirbhay Ganorkar
                  </span>
                  <span className="text-[10px] text-red-700 font-bold uppercase tracking-[0.3em] mt-1">
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Social Links with Hover Glow */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Nirbhay7464", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/nirbhay-ganorkar-5139a9312/", label: "LinkedIn" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/nirbhay_ganorkar01/", label: "Instagram" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 rounded-2xl bg-white border border-zinc-200 text-zinc-500 hover:text-red-700 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Right: Back to Top (Floating Action Style) */}
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 text-white font-bold text-xs tracking-widest shadow-2xl shadow-zinc-900/40 hover:bg-red-800 transition-all"
            >
              BACK TO TOP
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* BOTTOM BAR: Copyright Only */}
          <div className="w-full pt-10 border-t border-zinc-200/50 flex flex-col items-center space-y-4">
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.5em] text-center">
              © {currentYear} • Handcrafted by Nirbhay Ganorkar
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-700 animate-pulse" />
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest">
                Amravati, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}