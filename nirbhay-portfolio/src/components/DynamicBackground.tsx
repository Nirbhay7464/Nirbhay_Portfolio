"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  /* ----------------------------- */
  /* Spotlight follows cursor      */
  /* ----------------------------- */
  const spotlightX = useTransform(mouseX, [0, window.innerWidth], ["20%", "80%"]);
  const spotlightY = useTransform(mouseY, [0, window.innerHeight], ["20%", "80%"]);

  /* ----------------------------- */
  /* Slow parallax drift           */
  /* ----------------------------- */
  const driftX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const driftY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* -------------------------------- */}
      {/* BASE COLOR FIELD                 */}
      {/* -------------------------------- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #fff7f7 0%, #fff 40%, #fff 60%, #fff1f1 100%)",
        }}
      />

      {/* -------------------------------- */}
      {/* DIAGONAL FLOW LINES (SIGNATURE)  */}
      {/* -------------------------------- */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              rgba(244,63,94,0.06) 0px,
              rgba(244,63,94,0.06) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* -------------------------------- */}
      {/* INTERACTIVE SPOTLIGHT (KEY)      */}
      {/* -------------------------------- */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              700px at ${spotlightX} ${spotlightY},
              rgba(255,255,255,0.55),
              rgba(255,255,255,0.25),
              transparent 70%
            )
          `,
        }}
      />

      {/* -------------------------------- */}
      {/* DEPTH GLOW (PARALLAX)            */}
      {/* -------------------------------- */}
      <motion.div
        style={{ x: driftX, y: driftY }}
        className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%]
                   bg-gradient-to-br from-rose-200/25 via-transparent to-red-300/25
                   blur-[200px]"
      />

      {/* -------------------------------- */}
      {/* MICRO NOISE (PREMIUM FEEL)       */}
      {/* -------------------------------- */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('/grain.png')" }}
      />
    </div>
  );
}
