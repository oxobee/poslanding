"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { ProductScreenShowcase } from "./ProductScreenShowcase";

export function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-white">
      {/* Background ambient radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#EA004B]/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#EA004B] animate-pulse" />
          <span className="tracking-wide">Yeni Nesil Restoran Platformu</span>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]"
          style={{ letterSpacing: "-0.035em" }}
        >
          Restoran operasyonunuzu <br className="hidden sm:inline" />
          <span className="text-[#EA004B] relative inline-block">
            tek akışta
          </span>{" "}
          yönetin.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Siparişten mutfak ekranına, adisyondan masaya tam senkronize restoran yönetim sistemi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            onClick={() => setDemoModalOpen(true)}
            className="btn-shine-container tap-effect w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-xl shadow-[#EA004B]/25 hover:shadow-2xl hover:shadow-[#EA004B]/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <span>Demo Talep Et</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <Link
            href="/nasil-calisir"
            className="tap-effect w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200/90 hover:bg-slate-50 hover:text-slate-950 shadow-xs transition-all text-sm flex items-center justify-center gap-2"
          >
            <span>Nasıl Çalışır?</span>
          </Link>
        </motion.div>

        {/* 3 Bullet Guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-semibold text-slate-600"
        >
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Hızlı Kurulum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Donanım Zorunluluğu Yok</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>7/24 Teknik Destek</span>
          </div>
        </motion.div>

        {/* Interactive Live Screen Showcase (Ekran Sunması) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <ProductScreenShowcase />
        </motion.div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
