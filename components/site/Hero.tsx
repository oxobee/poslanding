"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight, Zap, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { ProductScreenShowcase } from "./ProductScreenShowcase";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 overflow-hidden">
      {/* Dynamic Background Ambient Radial Mesh */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[340px] bg-gradient-to-b from-[#EA004B]/15 via-[#EA004B]/6 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

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

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]">
          Restoran operasyonunuzu <br className="hidden sm:inline" />
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
    </section>
  );
}
