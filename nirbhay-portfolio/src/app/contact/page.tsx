"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, Linkedin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 2000);
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest">Available for new opportunities</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-zinc-900 leading-[0.9] mb-8 tracking-tighter">
                Let's make <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-800 to-zinc-900">
                  it official
                </span>.
              </h1>
              
              <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-md mb-12">
                I help brands build high-performance web applications. Drop a message to start a technical discussion.
              </p>

              <div className="grid grid-cols-1 gap-8">
                <ContactLink icon={<Mail size={22} />} label="Professional Email" value="nirbhayganorkar@gmail.com" href="mailto:nirbhayganorkar@gmail.com" />
                <ContactLink icon={<Linkedin size={22} />} label="LinkedIn" value="linkedin.com/in/nirbhay" href="https://www.linkedin.com/in/nirbhay-ganorkar-5139a9312/" />
                <ContactLink icon={<MapPin size={22} />} label="Current Base" value="Amravati, Maharashtra, India" href="#" />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: The Custom Conversation Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Subtle Outer Card Glow */}
              <div className="absolute -inset-4 bg-red-600/5 blur-3xl opacity-0 transition-opacity duration-700 group-focus-within:opacity-100" />
              
              <div className="relative bg-zinc-900 border border-zinc-800/50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
                {/* Visual Accent Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] -z-10" />
                
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center flex flex-col items-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Sent Successfully</h3>
                      <p className="text-zinc-400 font-light">I'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Send a brief</h3>
                        <p className="text-zinc-500 text-sm font-light">Fill out the form below to start our collaboration.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <InputField label="Name" placeholder="Nirbhay..." required />
                        <InputField label="Email" type="email" placeholder="name@company.com" required />
                      </div>

                      <InputField label="Subject" placeholder="How can I help?" />

                      <div className="relative group/field">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 group-focus-within/field:text-red-500 transition-colors duration-300">
                          Message
                        </label>
                        <textarea 
                          rows={4}
                          required
                          className="w-full bg-zinc-800/30 border border-zinc-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-600/50 focus:bg-zinc-800/50 transition-all duration-500 text-white placeholder:text-zinc-700 resize-none font-light"
                          placeholder="Tell me about your project goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="relative w-full py-5 rounded-2xl bg-white text-zinc-900 font-black uppercase tracking-[0.2em] text-[12px] transition-all duration-500 overflow-hidden group/btn disabled:opacity-50"
                      >
                        <div className="absolute inset-0 bg-red-700 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <div className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors">
                          {status === "sending" ? "Processing..." : "Initiate Conversation"}
                          <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </div>
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Architect Footer Divider */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-40">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-zinc-50">
              <path d="M1200 120L0 120L0 0L1200 120Z" />
           </svg>
        </div>
      </section>
    </main>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div className="relative group/field flex flex-col">
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 group-focus-within/field:text-red-500 transition-colors duration-300">
        {label}
      </label>
      <input 
        {...props}
        className="w-full bg-zinc-800/30 border border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600/50 focus:bg-zinc-800/50 transition-all duration-500 text-white placeholder:text-zinc-700 font-light"
      />
    </div>
  );
}

function ContactLink({ icon, label, value, href }: any) {
  return (
    <motion.a 
      whileHover={{ x: 8 }}
      href={href} 
      className="flex items-center gap-6 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 border border-zinc-100 group-hover:border-red-700">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-zinc-900 font-bold text-lg">{value}</p>
      </div>
    </motion.a>
  );
}