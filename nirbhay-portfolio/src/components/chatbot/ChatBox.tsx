"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mail, Phone } from "lucide-react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[60] group flex items-center justify-center w-14 h-14 bg-red-950 text-white rounded-2xl shadow-2xl hover:bg-red-900 transition-all duration-300 hover:scale-110 active:scale-95 shadow-red-900/20"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[320px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-red-950 p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold tracking-tight">Let's Connect</h4>
                <p className="text-red-200/80 text-sm mt-1">Usually responds within a few hours</p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-800 rounded-full opacity-20" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hi there! 👋 I'm <span className="font-bold text-gray-900">Nirbhay</span>. 
                  How can I help you today?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {/* WhatsApp Action */}
                <a
                  href="https://wa.me/917385295992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-sm font-semibold text-gray-700">Quick Chat</p>
                  </div>
                </a>

                {/* Email Action */}
                <a
                  href="mailto:nirbhayganorkar@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="text-sm font-semibold text-gray-700">Send an Inquiry</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                Available for worldwide projects
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay (Optional: closes chat when clicking outside) */}
      {open && (
        <div 
          className="fixed inset-0 z-50 bg-black/5 backdrop-blur-[2px] lg:hidden" 
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}