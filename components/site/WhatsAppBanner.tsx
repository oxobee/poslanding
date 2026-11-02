"use client";

import React from "react";
import { MessageCircle, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export function WhatsAppBanner() {
  const whatsappUrl = "https://wa.me/908503099901?text=Merhaba%2C%20oxonom%20pos%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  const sampleQuestions = [
    "Menümüz sisteme nasıl aktarılıyor?",
    "Mevcut tabletlerimizle çalışır mı?",
    "Kurucu İşletme Programı kontenjanı var mı?",
    "Kurulum kaç saat sürüyor?",
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1510] via-[#0D1D16] to-[#080C14] border border-[#25D366]/30 shadow-2xl p-7 sm:p-12 overflow-hidden">
          {/* Subtle Glow Mesh */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#EA004B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Info & Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-xs font-extrabold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                </span>
                Canlı WhatsApp Danışmanı · 7/24 Aktif
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Aklınıza takılan sorular mı var?{" "}
                <span className="text-[#25D366] block sm:inline">
                  WhatsApp&apos;tan hemen sorun!
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Restoranınızın masa adedi, mutfak KDS akışı, donanım uyumluluğu veya menü aktarımı hakkında uzman ekibimizle anında yazışın.
              </p>

              {/* Sample Quick Questions Chips */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                  Sık Sorulan Sorular:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((q, idx) => (
                    <a
                      key={idx}
                      href={`https://wa.me/908503099901?text=${encodeURIComponent(q)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="text-[#25D366]">“</span>
                      <span>{q}</span>
                      <span className="text-[#25D366]">”</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-[#25D366]" />
                  Ortalama Yanıt: <strong>&lt; 3 Dakika</strong>
                </span>
                <span className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  Doğrudan Ürün Uzmanı ile İletişim
                </span>
              </div>
            </div>

            {/* Right Col: Big WhatsApp Action Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/30">
                <MessageCircle className="w-9 h-9 fill-current" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Resmi Destek & Bilgi Hattı
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5 block">
                  0850 309 99 01
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  WhatsApp üzerinden tek tıkla mesaj gönderin
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shine-container tap-effect w-full py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] shadow-xl shadow-[#25D366]/25 transition flex items-center justify-center gap-2 cursor-pointer font-black"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp&apos;tan Hızlıca Sorun</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <span className="text-[10px] text-slate-400 block">
                7 gün 24 saat kesintisiz hızlı yanıt garantisi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom-Right WhatsApp Bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Canlı Destek"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-slate-950 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-extrabold hidden sm:inline whitespace-nowrap">
          Bize WhatsApp&apos;tan Sorun
        </span>
      </a>
    </section>
  );
}
