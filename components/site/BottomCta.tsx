"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { DemoModal } from "./DemoModal";

interface BottomCtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function BottomCta({
  title = "Restoran operasyonunuzu bugün sadeleştirin.",
  subtitle = "24 saat içinde menünüzü aktaralım ve mutfağınızı operasyona hazır hale getirelim.",
  buttonText = "Demo Talep Et",
}: BottomCtaProps) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#080C14] p-9 sm:p-16 text-center overflow-hidden border border-slate-800 shadow-2xl">
          {/* Crimson ambient glow from top and bottom */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-[#EA004B]/25 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-[#EA004B]/30 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-rose-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" /> Hemen Başlayın
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {subtitle}
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="btn-shine-container tap-effect px-9 py-4 rounded-2xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-2xl shadow-[#EA004B]/40 hover:shadow-[#EA004B]/50 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
