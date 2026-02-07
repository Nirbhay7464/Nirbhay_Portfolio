"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, User, Cpu, Layout, Mail,
  Github, Linkedin, Twitter, Menu, X,
  Instagram
} from "lucide-react";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

export default function Sidebar({ isExpanded, setIsExpanded }: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Skills", href: "/skills", icon: Cpu },
    { label: "Projects", href: "/projects", icon: Layout },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  const SidebarContent = (isMobileView = false) => (
    <div className="flex flex-col h-full relative">
      {/* Brand Logo Area */}
      <div className="h-24 flex items-center px-5 justify-between">
        <div className="flex items-center">
          <div className="relative flex items-center justify-center min-w-[40px]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-800 to-red-600 flex items-center justify-center shadow-lg shadow-red-100">
              <span className="text-white font-black text-xl tracking-tighter">N</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
          </div>

          <AnimatePresence>
            {(isExpanded || isMobileView) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="ml-4 overflow-hidden whitespace-nowrap"
              >
                <h2 className="font-bold text-gray-900 tracking-tight text-lg leading-none">Nirbhay G.</h2>
                <p className="text-[10px] text-red-700 font-bold uppercase tracking-widest mt-1">Engineer</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Fixed Cross Button placement for Mobile */}
        {isMobileView && (
          <button 
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:bg-red-50 rounded-lg text-red-700 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => isMobileView && setMobileOpen(false)}
              className="relative group block"
            >
              <div className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 ${
                isActive ? "text-red-700 bg-red-50/60" : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
              }`}>
                <div className="relative z-10">
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                
                <AnimatePresence>
                  {(isExpanded || isMobileView) && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="text-sm font-semibold whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute left-0 w-1 h-6 bg-red-700 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Social Footer */}
      <div className="p-4 mb-4">
        <div className={`bg-gray-50/80 rounded-2xl p-2 flex transition-all duration-300 ${
          isExpanded || isMobileView ? "flex-row justify-around items-center h-12" : "flex-col gap-4 py-4"
        }`}>
          <SocialIcon href="https://github.com/Nirbhay7464" icon={<Github size={18} />} />
          <SocialIcon href="https://www.instagram.com/nirbhay_ganorkar01/" icon={<Instagram size={18} />} />
          <SocialIcon href="https://www.linkedin.com/in/nirbhay-ganorkar-5139a9312/" icon={<Linkedin size={18} />} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Hamburger for Mobile */}
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden fixed top-5 left-5 z-[60] p-3 bg-white rounded-xl shadow-xl border border-gray-100 text-red-700 hover:scale-105 active:scale-95 transition-all"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-md z-[51] lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-[280px] bg-white z-[55] flex flex-col lg:hidden shadow-2xl"
            >
              {SidebarContent(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
        initial={false}
        animate={{ width: isExpanded ? 240 : 80 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen bg-white border-r border-gray-100 flex-col z-50 overflow-hidden"
        style={{ boxShadow: isExpanded ? "10px 0 30px rgba(0,0,0,0.04)" : "none" }}
      >
        {SidebarContent(false)}
      </motion.aside>
    </>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-400 hover:text-red-700 hover:scale-110 transition-all flex items-center justify-center">
      {icon}
    </Link>
  );
}