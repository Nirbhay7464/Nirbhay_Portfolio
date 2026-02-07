"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white w-full border-t border-gray-100 overflow-hidden">
      {/* Aligned with Sidebar */}
      <div className="relative z-10 max-w-6xl w-full ml-0 px-6 lg:pl-12 pb-32">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-red-700 font-bold tracking-widest uppercase text-xs">
                Get in Touch
              </span>
              <h2 className="mt-2 text-4xl md:text-6xl font-black text-zinc-900 leading-tight">
                Let’s build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-950">
                  something great
                </span>.
              </h2>
              <p className="mt-6 text-zinc-600 text-lg font-light leading-relaxed max-w-md">
                Have a project idea, a job opportunity, or just want to discuss 
                the latest in web tech? My inbox is always open.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4">
              <a 
                href="mailto:nirbhayganorkar@gmail.com" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-zinc-50 text-zinc-400 group-hover:bg-red-50 group-hover:text-red-700 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase">Email Me</p>
                  <p className="text-zinc-900 font-semibold group-hover:text-red-800 transition-colors">nirbhayganorkar@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/917385295992" 
                target="_blank" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-zinc-50 text-zinc-400 group-hover:bg-green-50 group-hover:text-green-600 transition-all">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase">WhatsApp</p>
                  <p className="text-zinc-900 font-semibold group-hover:text-green-700 transition-colors">+91 73852 95992</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Visual CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-700 rounded-[3rem] rotate-3 scale-105 opacity-5 -z-10" />
            
            <div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl shadow-red-900/20">
              <h3 className="text-3xl font-bold mb-6">Start a conversation</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                I typically respond within 24 hours. Let's discuss your goals 
                and how I can help you achieve them.
              </p>
              
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:nirbhayganorkar@gmail.com"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-red-700 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-900/40"
                >
                  <Send size={18} />
                  Send a Message
                </a>
                
                <Link href="https://www.linkedin.com/in/nirbhay-ganorkar-5139a9312/" className="text-center text-zinc-500 text-xs mt-2 uppercase tracking-widest font-bold">
                  Or find me on LinkedIn
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔻 BOTTOM ARCHITECTURAL DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        {/* Layer 1: Subtle Red shadow */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#7f1d1d" />
        </svg>

        {/* Layer 2: Main Transition to Off-White (#FAFAFA) */}
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}