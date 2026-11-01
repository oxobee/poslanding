"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight, Zap, CheckCircle2, Clock } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { ProductScreenShowcase } from "./ProductScreenShowcase";
import { motion } from "framer-motion";

export function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-gradient-to-b from-[#EA004B]/12 via-[#EA004B]/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-6 shadow-xs hover:border-[#EA004B]/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA004B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA004B]"></span>
          </span>
          <span>Yeni Nesil Restoran & POS Platformu</span>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.14]">
          Restoran operasyonunuzu <br className="hidden sm:inline" />
          <span className="text-[#EA004B] relative inline-block">
            tek akışta
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#EA004B]/30 -z-10"
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
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Siparişten mutfak ekranına, adisyondan masaya tam senkronize restoran yönetim sistemi ve POS altyapısı.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="btn-shine-container tap-effect inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:scale-[0.98] shadow-xl shadow-[#EA004B]/30 hover:shadow-2xl hover:shadow-[#EA004B]/40 transition-all text-xs sm:text-sm cursor-pointer whitespace-nowrap"
          >
            <span>Demo Talep Et</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <Link
            href="/nasil-calisir"
            className="tap-effect inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] transition-all text-xs sm:text-sm shadow-xs whitespace-nowrap"
          >
            <span>Nasıl Çalışır?</span>
          </Link>
        </div>

        {/* 3 Bullet Guarantees */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-xs font-semibold text-slate-600">
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

        {/* Interactive Live Screen Showcase with Floating Floating Badges */}
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

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
