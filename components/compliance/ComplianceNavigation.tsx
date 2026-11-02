"use client";

import React, { useState, useEffect } from "react";
import { ListFilter, ChevronRight } from "lucide-react";

export function ComplianceNavigation() {
  const [activeSection, setActiveSection] = useState<string>("nedir");

  const NAV_ITEMS = [
    { id: "nedir", label: "1. Uyumluluk Nedir?" },
    { id: "uygulama-takvimi", label: "2. Yasal Takvim (2026-27)" },
    { id: "bilesenler", label: "3. Ürün Bileşenleri" },
    { id: "enerji-ve-etiketler", label: "4. Kalori (kcal/kJ) & Diyet" },
    { id: "14-alerjen", label: "5. 14 Majör Alerjen" },
    { id: "qr-ve-alternatif", label: "7-8. QR & Alternatif Bildirim" },
    { id: "yapay-zeka-analizi", label: "9. AI Reçete Analizi" },
    { id: "cok-subeli", label: "10-11. Şube Yönetimi" },
    { id: "avantajlar", label: "12. İşletme Avantajları" },
    { id: "sss", label: "13. Sıkça Sorulan Sorular" },
  ];

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2 px-4 overflow-x-auto no-scrollbar">
      <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 text-xs whitespace-nowrap">
        <span className="text-slate-400 font-bold flex items-center gap-1 mr-2 flex-shrink-0 text-[11px] uppercase tracking-wider">
          <ListFilter className="w-3.5 h-3.5 text-[#EA004B]" />
          Rehber Başlıkları:
        </span>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="px-3 py-1.5 rounded-full font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex-shrink-0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
