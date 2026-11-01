"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, ShoppingBag, ChefHat, UtensilsCrossed, CreditCard, Sparkles, ArrowRight } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      num: "01",
      role: "Misafir",
      title: "Masa QR Okutma",
      desc: "Müşteri masadaki QR kodu okutur ve uygulamaya gerek olmadan restoran menüsüne anında girer.",
      icon: QrCode,
      time: "1 sn",
    },
    {
      num: "02",
      role: "Misafir",
      title: "Sipariş Onayı",
      desc: "Porsiyon, sos ve özel pişirme notlarını seçip 'Sipariş Ver' butonuyla mutfağa iletir.",
      icon: ShoppingBag,
      time: "20 sn",
    },
    {
      num: "03",
      role: "Mutfak (KDS)",
      title: "Mutfak Hazırlığı",
      desc: "Sipariş anında şef ekranına düşer; hazırlık başlar ve durum mutfak ekranından güncellenir.",
      icon: ChefHat,
      time: "Canlı",
    },
    {
      num: "04",
      role: "Salon (POS)",
      title: "Servis Teslimi",
      desc: "Hazır olan tabaklar ve içecekler masa numarası uyarısıyla servis personeline bildirilir.",
      icon: UtensilsCrossed,
      time: "Hatasız",
    },
    {
      num: "05",
      role: "Kasa / Misafir",
      title: "Ödeme & Sıfırlama",
      desc: "Misafir masada veya kasada açık hesabını kapatır; masa sonraki misafir için anında yenilenir.",
      icon: CreditCard,
      time: "< 15 sn",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> 5 ADIMDA OPERASYON
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Masadan ödemeye <span className="text-[#EA004B]">beş adım.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Misafirin masaya oturmasından hesabın kapanmasına kadar sürtünmesiz, tam senkronize süreç.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Line on Desktop */}
        <div className="relative">
          {/* Subtle Desktop Progress Connector Bar */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#EA004B]/20 via-[#EA004B]/40 to-[#EA004B]/20 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 hover:border-[#EA004B]/50 hover:shadow-xl hover:shadow-[#EA004B]/8 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-2"
                >
                  <div>
                    {/* Top row: Number & Role Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-sm font-black text-slate-300 group-hover:text-[#EA004B] transition-colors group-hover:scale-110">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#FFF0F4] group-hover:text-[#EA004B] transition-colors">
                        {step.role}
                      </span>
                    </div>

                    {/* Icon Container with Pop Effect */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-2 group-hover:bg-[#EA004B] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#EA004B] transition-colors tracking-tight">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Metric Chip */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                    <span className="text-slate-400 font-medium">Ortalama Süre</span>
                    <span className="text-[#EA004B] bg-[#FFF0F4] px-2 py-0.5 rounded-md">
                      {step.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
