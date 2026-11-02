"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ChevronRight,
  Zap,
  CheckCircle2,
  Clock,
  UtensilsCrossed,
  Coffee,
  Building2,
  ChefHat,
  Sparkles,
} from "lucide-react";
import { ProductScreenShowcase } from "./ProductScreenShowcase";
import { motion, AnimatePresence } from "framer-motion";

const BUSINESS_TYPES = [
  {
    name: "Restoran",
    icon: UtensilsCrossed,
    color: "#EA004B",
    tag: "Fine Dining & Bistro",
  },
  {
    name: "Cafe",
    icon: Coffee,
    color: "#FF2B72",
    tag: "Kahve & Bakery",
  },
  {
    name: "Otel",
    icon: Building2,
    color: "#D00042",
    tag: "Otel & Tesis",
  },
  {
    name: "Lokanta",
    icon: ChefHat,
    color: "#B30034",
    tag: "Geleneksel & Esnaf",
  },
] as const;

export function Hero() {
  const [typeIndex, setTypeIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // Step 1: Start closing the selection lines and mouse towards the center
      setIsClosing(true);

      // Step 2: At mid-point (when lines meet in the center), update the text
      setTimeout(() => {
        setTypeIndex((prev) => (prev + 1) % BUSINESS_TYPES.length);
        // Step 3: Open the lines and mouse back outwards to reveal the new word
        setIsClosing(false);
      }, 380);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const currentItem = BUSINESS_TYPES[typeIndex];

  return (
    <section className="relative isolate pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 overflow-hidden">
      {/* Dynamic Background Ambient Radial Mesh */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[750px] h-[360px] bg-gradient-to-b from-[#EA004B]/15 via-[#EA004B]/6 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Announcement Pill */}
        <Link
          href="/basvuru"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/25 mb-6 shadow-xs hover:border-[#EA004B]/50 hover:bg-[#FFE5EC] transition-all duration-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA004B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA004B]"></span>
          </span>
          <span className="truncate max-w-[240px] sm:max-w-none">
            Yeni Nesil Restoran & POS Platformu v2.5
          </span>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] flex-shrink-0" />
        </Link>

        {/* Main Headline with Animated Canvas-Selection-Box Style Rotating Business Type */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.26] sm:leading-[1.18]">
          {/* Canvas Text Selection Box Container */}
          <span className="relative inline-flex items-center justify-center align-baseline my-1 mx-1.5 sm:mx-2 mr-8 sm:mr-10 md:mr-12 min-w-[135px] sm:min-w-[190px] md:min-w-[230px] lg:min-w-[265px] px-2.5 sm:px-4 py-0.5 sm:py-1 select-none">
            {/* Animated Selection Frame (contracts to 0% width in center, then springs back open to 100%) */}
            <motion.span
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-[#EA004B]/12 pointer-events-none rounded-[2px]"
              animate={{
                width: isClosing ? "0%" : "100%",
                opacity: isClosing ? 0.3 : 1,
              }}
              transition={{
                duration: isClosing ? 0.34 : 0.46,
                ease: isClosing ? [0.4, 0, 0.2, 1] : [0.175, 0.885, 0.32, 1.25],
              }}
            >
              {/* Left Handle Bar (extends slightly above selection box with top square pin) */}
              <span className="absolute left-0 -top-2.5 sm:-top-3 bottom-0 w-[2.5px] sm:w-[3px] bg-[#EA004B] pointer-events-none">
                <span className="absolute -top-[4px] -left-[3.5px] sm:-left-[4px] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#EA004B] rounded-[1px] shadow-xs" />
              </span>

              {/* Right Handle Bar (extends slightly below selection box with bottom square pin) */}
              <span className="absolute right-0 top-0 -bottom-2.5 sm:-bottom-3 w-[2.5px] sm:w-[3px] bg-[#EA004B] pointer-events-none">
                <span className="absolute -bottom-[4px] -left-[3.5px] sm:-left-[4px] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#EA004B] rounded-[1px] shadow-xs" />
              </span>

              {/* Canvas Pointer Cursor (Travels along with the right line as it opens/closes) */}
              <motion.div
                animate={{
                  x: isClosing ? -2 : [0, 3, 0],
                  y: isClosing ? 2 : [0, -3, 0],
                  scale: isClosing ? 0.9 : 1,
                  rotate: isClosing ? -5 : 0,
                }}
                transition={{
                  x: isClosing ? { duration: 0.34 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                  y: isClosing ? { duration: 0.34 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.2 },
                }}
                className="absolute left-full ml-1 sm:ml-1.5 -top-1 sm:-top-0.5 z-20 pointer-events-none select-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L11.5 21L14.5 13.5L22 10.5L4.5 3Z"
                    fill="#EA004B"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.span>

            {/* Business Type Text (smoothly fades & shrinks while lines close, then pops back in as lines open) */}
            <motion.span
              key={currentItem.name}
              initial={{
                opacity: 0,
                scale: 0.75,
                filter: "blur(3px)",
              }}
              animate={{
                opacity: isClosing ? 0 : 1,
                scale: isClosing ? 0.75 : 1,
                filter: isClosing ? "blur(3px)" : "blur(0px)",
              }}
              transition={{
                duration: isClosing ? 0.28 : 0.4,
                ease: isClosing ? [0.4, 0, 0.2, 1] : [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 inline-block text-slate-900 font-black tracking-tight"
            >
              {currentItem.name}
            </motion.span>
          </span>
          operasyonunuzu <br className="hidden sm:inline" />
          <span className="text-[#EA004B] relative inline-block">
            tek akışta
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#EA004B]/35 -z-10"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C50 3 150 3 197 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          yönetin.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed px-2">
          Siparişten mutfak ekranına, adisyondan masaya tam senkronize restoran yönetim sistemi ve POS altyapısı. Sıfır donanım zorunluluğu, anında kurulum.
        </p>

        {/* Action Buttons: Direct link to /basvuru without popup */}
        <div className="mt-7 sm:mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 px-2">
          <Link
            href="/basvuru"
            className="btn-shine-container tap-effect inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 rounded-2xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:scale-[0.98] shadow-xl shadow-[#EA004B]/30 hover:shadow-2xl hover:shadow-[#EA004B]/40 transition-all text-xs sm:text-sm cursor-pointer whitespace-nowrap font-black"
          >
            <span>Demo Talep Et</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link
            href="/nasil-calisir"
            className="tap-effect inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3.5 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] transition-all text-xs sm:text-sm shadow-xs whitespace-nowrap"
          >
            <span>Nasıl Çalışır?</span>
          </Link>
        </div>

        {/* 3 Bullet Guarantees */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-semibold text-slate-600 px-2">
          <div className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Hızlı Kurulum (24 Saat)</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Donanım Zorunluluğu Yok</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>7/24 Kesintisiz Destek</span>
          </div>
        </div>

        {/* Interactive Live Screen Showcase with Floating Badges */}
        <div className="mt-10 sm:mt-12 relative">
          {/* Floating Metric Badge 1: Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2.5 absolute -left-6 top-16 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-3 z-20 text-left pointer-events-none"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Zap className="w-4 h-4 fill-amber-500 text-amber-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Masa Devri</span>
              <span className="text-xs font-black text-slate-900">%40 Daha Hızlı</span>
            </div>
          </motion.div>

          {/* Floating Metric Badge 2: Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex items-center gap-2.5 absolute -right-6 top-28 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-3 z-20 text-left pointer-events-none"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Mutfak Senkronu</span>
              <span className="text-xs font-black text-slate-900">%0 Sipariş Hatası</span>
            </div>
          </motion.div>

          {/* Floating Metric Badge 3: Bottom Left */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden lg:flex items-center gap-2.5 absolute -left-2 bottom-8 bg-white/95 backdrop-blur-md border border-[#EA004B]/30 shadow-xl rounded-2xl p-3 z-20 text-left pointer-events-none"
          >
            <div className="w-8 h-8 rounded-xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#EA004B]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Hesap Tahsilatı</span>
              <span className="text-xs font-black text-[#EA004B]">&lt; 15 Saniyede Kapanış</span>
            </div>
          </motion.div>

          {/* Screen Showcase Component */}
          <ProductScreenShowcase />
        </div>
      </div>
    </section>
  );
}
