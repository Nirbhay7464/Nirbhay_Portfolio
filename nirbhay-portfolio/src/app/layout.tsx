"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import "./globals.css";
import ChatBox from "@/components/chatbot/ChatBox";
import Providers from "./providers";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#FAFAFA]">
        <Providers>
          <div className="flex min-h-screen w-full">
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

            <motion.div
              initial={false}
              animate={{
                paddingLeft: isMobile
                  ? "0px"
                  : isExpanded
                  ? "240px"
                  : "80px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex-1 flex flex-col w-full min-w-0"
            >
              {/* ✅ FIXED: no items-center */}
              <main className="flex-1 w-full flex flex-col">
                {children}
              </main>

              <Footer />
            </motion.div>
          </div>

          <ChatBox />
        </Providers>
      </body>
    </html>
  );
}
