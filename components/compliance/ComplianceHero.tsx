"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  FileText,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export function ComplianceHero() {
  return (
    <section className="relative isolate pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-rose-50/20">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#EA004B]/12 via-purple-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-slate-400">Çözümler</span>
            </li>
            <li>/</li>
            <li className="text-[#EA004B] font-bold">Menü Yasal Uyumluluk Rehberi</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12111A] text-white border border-white/10 mb-6 shadow-md">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EA004B]/20 text-rose-300 border border-[#EA004B]/30 font-black tracking-wider text-[10px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA004B] animate-pulse" />
                Resmî Mevzuat 2026–2027
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Toplu Tüketim Yerleri Menü Şeffaflık Rehberi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.14] mb-6">
              Restoran ve Kafeler İçin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA004B] via-[#FF2A6D] to-purple-600">
                Menü Yasal Uyumluluk
              </span>{" "}
              Rehberi
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Türk Gıda Kodeksi ve Tarım ve Orman Bakanlığı düzenlemeleri kapsamında; 
              ürün bileşenleri, <strong className="text-slate-900 font-bold">14 majör alerjen</strong> ve 
              enerji (kcal/kJ) bilgilerinin menülerde sunulması zorunluluğuna dair 
              eksiksiz, tarafsız ve uygulanabilir sektör kılavuzu.
            </p>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-8">
              <div className="border-r border-slate-100 pr-2">
                <div className="flex items-center gap-1 text-[#EA004B] font-black text-lg sm:text-2xl">
                  <span>14</span>
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Majör Alerjen
                </div>
              </div>
              <div className="border-r border-slate-100 pr-2">
                <div className="flex items-center gap-1 text-slate-900 font-black text-lg sm:text-2xl">
                  <span>kcal & kJ</span>
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Çift Enerji Birimi
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-emerald-600 font-black text-lg sm:text-2xl">
                  <span>2026–27</span>
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Kademeli Takvim
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#uygulama-takvimi"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EA004B] hover:bg-[#d40043] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#EA004B]/20 transition-all active:scale-[0.98]"
              >
                <span>Yasal Takvimi İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#14-alerjen"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold border border-slate-200 shadow-xs transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#EA004B]" />
                <span>14 Majör Alerjen Listesi</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card Column (Exact match to user's uploaded banner styling) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-[380px] p-7 rounded-3xl bg-gradient-to-b from-[#181320] via-[#110F17] to-[#0A0910] border border-white/10 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Radial Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#EA004B]/30 blur-3xl pointer-events-none" />

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA004B]/20 border border-[#EA004B]/30 mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#EA004B] animate-pulse" />
                <span className="text-[11px] font-black tracking-wider text-[#FF457E] uppercase">
                  YENİ · 2026
                </span>
              </div>

              {/* Shield Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA004B]/25 to-purple-900/30 border border-[#EA004B]/30 flex items-center justify-center text-[#FF2A6D] mb-5 shadow-sm">
                <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Menü Şeffaflık Yasası
              </h3>

              {/* Card Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                2026–2027 kademeli resmî takvim — Oxonom Menu bilgi katmanı yönetimine hazır.
              </p>

              {/* Feature Checklist Inside the Card */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>14 Majör Alerjen Otomatik Etiketleme</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Porsiyon Bazında kcal & kJ Gösterimi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Basılı & QR Menü Senkronizasyonu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>AI Destekli Reçete & Bileşen Analizi</span>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Oxonom Menu Uyum Katmanı</span>
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA004B] hover:text-[#FF4A85] transition-colors"
                >
                  <span>Hemen Başla</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
