"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { ProductScreenShowcase } from "./ProductScreenShowcase";

export function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-white">
      {/* Background ambient radial glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[250px] bg-[#EA004B]/8 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#EA004B]" />
          <span>Yeni Nesil Restoran Platformu</span>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-[28px] xs:text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.16]">
          Restoran operasyonunuzu <br className="hidden sm:inline" />
          <span className="text-[#EA004B] relative inline-block">
            tek akışta
          </span>{" "}
          yönetin.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Siparişten mutfak ekranına, adisyondan masaya tam senkronize restoran yönetim sistemi.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:scale-[0.98] active:bg-[#B8003A] shadow-lg shadow-[#EA004B]/20 hover:shadow-xl hover:shadow-[#EA004B]/30 transition-all text-xs sm:text-sm cursor-pointer whitespace-nowrap"
          >
            <span>Demo Talep Et</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <Link
            href="/nasil-calisir"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] transition-all text-xs sm:text-sm shadow-xs whitespace-nowrap"
          >
            <span>Nasıl Çalışır?</span>
          </Link>
        </div>

        {/* 3 Bullet Guarantees */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Hızlı Kurulum</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>Donanım Zorunluluğu Yok</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>7/24 Teknik Destek</span>
          </div>
        </div>

        {/* Interactive Live Screen Showcase */}
        <div className="mt-6">
          <ProductScreenShowcase />
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
