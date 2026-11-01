"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundGridPattern() {
  return (
    <div style={{ zIndex: 0 }} className="fixed inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base SVG Square Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_85%)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="oxonom-grid-pattern"
            width="48"
            height="48"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M.5 48V.5H48"
              fill="none"
              stroke="#EA004B"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
            {/* Small intersection dot */}
            <circle cx="0.5" cy="0.5" r="1.5" fill="#EA004B" fillOpacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#oxonom-grid-pattern)" />
      </svg>

      {/* 2. Floating Animated Gradient Orbs matching #EA004B & Soft Tints */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EA004B]/10 via-[#FF2A6D]/8 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#EA004B]/8 via-rose-300/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#EA004B]/6 via-pink-400/6 to-transparent blur-3xl"
      />

      {/* 3. Subtle Animated Accent Squares in Grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]">
        <motion.div
          animate={{
            opacity: [0.1, 0.45, 0.1],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[240px] left-[15%] w-12 h-12 border border-[#EA004B]/25 bg-[#EA004B]/5 rounded-sm"
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[480px] right-[18%] w-12 h-12 border border-[#EA004B]/20 bg-[#EA004B]/5 rounded-sm"
        />
        <motion.div
          animate={{
            opacity: [0.08, 0.4, 0.08],
            scale: [0.97, 1.02, 0.97],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[840px] left-[35%] w-12 h-12 border border-[#EA004B]/25 bg-[#EA004B]/5 rounded-sm"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
          className="absolute top-[1200px] right-[30%] w-12 h-12 border border-[#EA004B]/20 bg-[#EA004B]/5 rounded-sm"
        />
      </div>
    </div>
  );
}
