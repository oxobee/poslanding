"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  Calendar,
  Layers,
  Flame,
  ShieldAlert,
  QrCode,
  Sparkles,
  Building2,
  TrendingUp,
  HelpCircle,
  Compass,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  num: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "nedir",
    num: "01",
    label: "Uyumluluk Nedir?",
    shortLabel: "Tanım",
    icon: FileText,
  },
  {
    id: "uygulama-takvimi",
    num: "02",
    label: "Yasal Takvim (2026-27)",
    shortLabel: "Takvim",
    icon: Calendar,
  },
  {
    id: "bilesenler",
    num: "03",
    label: "Bileşen Bildirimi",
    shortLabel: "Bileşenler",
    icon: Layers,
  },
  {
    id: "enerji-ve-etiketler",
    num: "04",
    label: "Kalori & Diyet Etiketleri",
    shortLabel: "Kalori/Diyet",
    icon: Flame,
  },
  {
    id: "14-alerjen",
    num: "05",
    label: "14 Majör Alerjen",
    shortLabel: "Alerjenler",
    icon: ShieldAlert,
  },
  {
    id: "qr-ve-alternatif",
    num: "07",
    label: "QR & Basılı Menü",
    shortLabel: "QR/Basılı",
    icon: QrCode,
  },
  {
    id: "yapay-zeka-analizi",
    num: "09",
    label: "AI Reçete Analizi",
    shortLabel: "AI Analiz",
    icon: Sparkles,
  },
  {
    id: "cok-subeli",
    num: "10",
    label: "Şube Yönetimi",
    shortLabel: "Şubeler",
    icon: Building2,
  },
  {
    id: "avantajlar",
    num: "12",
    label: "İşletme Avantajları",
    shortLabel: "Faydalar",
    icon: TrendingUp,
  },
  {
    id: "sss",
    num: "13",
    label: "Sıkça Sorulan Sorular",
    shortLabel: "S.S.S.",
    icon: HelpCircle,
  },
];

export function ComplianceNavigation() {
  const [activeSection, setActiveSection] = useState<string>("nedir");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scrollspy to automatically highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollNav = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[58px] sm:top-[68px] z-40 py-2 sm:py-3 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-center pointer-events-auto">
        {/* Floating Capsule Dock matching Brand Theme */}
        <div className="relative w-full max-w-full rounded-2xl sm:rounded-full bg-[#12111A]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40 p-1 sm:p-1.5 flex items-center">
          
          {/* Left Corporate Tag Pill (Desktop) */}
          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EA004B]/20 border border-[#EA004B]/35 text-[#FF457E] text-[10px] font-black uppercase tracking-wider flex-shrink-0 ml-1 mr-1.5 select-none shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#EA004B]" />
            <span>Rehber İçeriği</span>
          </div>

          {/* Left Arrow Button for Quick Horizontal Scroll */}
          <button
            onClick={() => scrollNav("left")}
            aria-label="Sola Kaydır"
            className="hidden sm:flex w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 items-center justify-center flex-shrink-0 transition-colors ml-1 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Scrollable Nav Items Track */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-1 py-0.5 text-xs whitespace-nowrap"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-full font-bold transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer select-none text-[11px] sm:text-xs ${
                    isActive
                      ? "text-white shadow-md shadow-[#EA004B]/35"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {/* Active Background Capsule with Spring Transition */}
                  {isActive && (
                    <motion.div
                      layoutId="active-compliance-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF2B72] via-[#EA004B] to-[#D10041] -z-10 shadow-lg shadow-[#EA004B]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Number Badge */}
                  <span
                    className={`text-[9px] font-black px-1.5 py-0.2 rounded-full transition-colors ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-white/10 text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {item.num}
                  </span>

                  {/* Icon */}
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      isActive ? "text-white" : "text-rose-400/80"
                    }`}
                  />

                  {/* Label (Full on larger screens, short on small) */}
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="inline sm:hidden">{item.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button for Quick Horizontal Scroll */}
          <button
            onClick={() => scrollNav("right")}
            aria-label="Sağa Kaydır"
            className="hidden sm:flex w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 items-center justify-center flex-shrink-0 transition-colors mr-1 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
