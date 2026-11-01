"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { motion } from "framer-motion";

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
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate rounded-3xl bg-[#080C14] p-8 sm:p-16 text-center overflow-hidden border border-slate-800 shadow-2xl">
          {/* Animated Crimson ambient glow from top and bottom */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-48 bg-[#EA004B] blur-3xl rounded-full pointer-events-none -z-10"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-48 bg-[#EA004B] blur-3xl rounded-full pointer-events-none -z-10"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-rose-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#EA004B]" /> Hemen Başlayın
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

            {/* Quick Guarantees Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24 Saatte Kurulum
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sıfır Komisyon
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ücretsiz Danışmanlık
              </span>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="btn-shine-container tap-effect px-9 py-4 rounded-2xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-2xl shadow-[#EA004B]/50 hover:shadow-[#EA004B]/60 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer active:scale-[0.98]"
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
