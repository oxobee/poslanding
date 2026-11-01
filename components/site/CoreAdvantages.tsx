"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Monitor, Receipt, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CoreAdvantages() {
  const advantages = [
    {
      title: "Masadan QR Sipariş",
      role: "Misafir",
      icon: QrCode,
      description:
        "Misafir masadaki QR kodu okutur. Menüye anında ulaşır, porsiyonunu ve notunu seçip siparişini verir. Garson bekleme süresi sıfıra iner, masa devir hızı artar.",
      highlight: "Garson bekleme kaybı: 0 dk",
      accent: "#EA004B",
    },
    {
      title: "Mutfak Ekranı (KDS)",
      role: "Mutfak",
      icon: Monitor,
      description:
        "Gelen siparişler anında istasyon ekranına düşer. Pişme dereceleri, alerjenler ve özel notlar şefin önünde hatasız, renk kodlu sayaçlarla listelenir.",
      highlight: "Sipariş yanılgısı: %0 hata",
      accent: "#EA004B",
    },
    {
      title: "Kasa & Açık Hesap",
      role: "Kasa & Yönetim",
      icon: Receipt,
      description:
        "Adisyon karmaşasına son. Masanın açık bakiyesi, parça başı veya kişi başı hesap alma ve anlık ciro raporları tek ekranda kontrol edilir.",
      highlight: "Hesap kapatma: < 15 sn",
      accent: "#EA004B",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3.5 shadow-xs">
            TEMEL AVANTAJLAR
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Operasyon karmaşasına son verin.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Yoğun saatlerde garson-kasa-mutfak arasındaki iletişimsizliği ortadan kaldırın.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white border border-slate-200 rounded-3xl p-7 hover:border-[#EA004B]/50 hover:shadow-xl hover:shadow-[#EA004B]/5 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center transition-all duration-300 group-hover:bg-[#EA004B] group-hover:text-white group-hover:scale-105 shadow-xs">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#FFF0F4] group-hover:text-[#EA004B] transition-colors">
                      {item.role}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#EA004B] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-800">{item.highlight}</span>
                  <Link
                    href="/nasil-calisir"
                    className="inline-flex items-center gap-1.5 text-[#EA004B] hover:gap-2.5 transition-all duration-200"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
