"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OxonomPosLogo } from "./OxonomPosLogo";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Monitor,
  ChefHat,
  Smartphone,
  Receipt,
  Sparkles,
  BarChart3,
  Coffee,
  UtensilsCrossed,
  Store,
  PhoneCall,
  ShieldCheck,
  Check,
  Zap,
  Building2,
  ExternalLink,
  CreditCard,
  BadgePercent,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<"products" | "sectors" | "corporate">("products");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const productSolutions = [
    {
      title: "Masalar & Salon Yönetimi",
      desc: "Masa birleştirme, taşıma, açık hesap ve canlı doluluk haritası.",
      icon: Monitor,
      href: "/#urun",
      badge: "Temel Modül",
    },
    {
      title: "Mutfak Ekranı (KDS)",
      desc: "İstasyon bazlı sipariş ayrıştırma, renkli süre sayacı ve gecikme ikazları.",
      icon: ChefHat,
      href: "/nasil-calisir",
      badge: "Sıfır Yanılgı",
    },
    {
      title: "Masadan QR Sipariş",
      desc: "Uygulama indirmeden doğrudan tarayıcıdan saniyeler içinde sipariş verme.",
      icon: Smartphone,
      href: "/#urun",
      badge: "Popüler",
    },
    {
      title: "Kasa & Açık Hesap",
      desc: "Parçalı ödeme, kişi başı bölüşme ve anlık ciro Z-raporları.",
      icon: Receipt,
      href: "/nasil-calisir",
      badge: "Hızlı Tahsilat",
    },
    {
      title: "AI Menü & Rapor Asistanı",
      desc: "Mevcut menüyü yapay zekayla 10 saniyede sisteme aktarma ve ciro analitiği.",
      icon: Sparkles,
      href: "/fiyatlandirma",
      badge: "Yeni v2.5",
    },
  ];

  const sectorSolutions = [
    {
      title: "Restoranlar & Lokantalar",
      desc: "Çoklu masa ve yoğun mutfak servisleri için uçtan uca senkronizasyon.",
      icon: UtensilsCrossed,
      href: "/basvuru",
    },
    {
      title: "Kafe & Kahve Zincirleri",
      desc: "Hızlı kasa, gel-al ve QR menülü self-servis sipariş düzeni.",
      icon: Coffee,
      href: "/basvuru",
    },
    {
      title: "Fast-Food & Paket Servis",
      desc: "Tezgah siparişleri ve KDS mutfak hazırlık otomasyonu.",
      icon: Store,
      href: "/basvuru",
    },
    {
      title: "Çok Şubeli Kurumsal Zincirler",
      desc: "Merkezi menü kontrolü, şube bazlı fiyatlandırma ve konsolide raporlar.",
      icon: Building2,
      href: "/fiyatlandirma",
    },
  ];

  return (
    <>
      {/* 1. FIXED WRAPPER LOCKING TOP BAR & MAIN HEADER TOGETHER */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Corporate Announcement Bar (Always fixed together with header) */}
        <aside aria-label="Duyuru ve Bilgilendirme" className="bg-[#080C14] text-white text-[11px] font-medium py-1.5 px-4 hidden md:block border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EA004B]/20 text-rose-300 border border-[#EA004B]/30 font-bold uppercase tracking-wider text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA004B] animate-pulse" />
                Lansman
              </span>
              <span className="text-slate-300">
                <strong className="text-white">Kurucu İşletme Programı:</strong> İlk 10 onaylı restorana özel sabit ₺1.999/ay fiyat avantajı!
              </span>
              <Link
                href="/basvuru"
                className="text-[#EA004B] hover:text-white transition-colors underline font-bold inline-flex items-center gap-1"
              >
                Hemen Başvur <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="tel:08503070368"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <PhoneCall className="w-3 h-3 text-[#EA004B]" />
                <span>0850 307 03 68</span>
              </a>
              <span className="text-slate-700">|</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %99.98 Uptime
              </span>
            </div>
          </div>
        </aside>

        {/* Main Corporate Header */}
        <header
          className={`transition-all duration-200 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-xs border-b border-slate-200/90 py-2.5 sm:py-3"
              : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5"
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo & Enterprise Badge */}
            <div className="flex items-center gap-3">
              <OxonomPosLogo size="md" />
              <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200">
                <ShieldCheck className="w-3 h-3 text-[#EA004B]" /> Enterprise POS
              </span>
            </div>

            {/* Center Desktop Navigation with Mega Menu */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full p-1 shadow-inner relative">
              {/* Çözümler Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopMegaOpen(true)}
                onMouseLeave={() => setDesktopMegaOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    desktopMegaOpen
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <span>Çözümler</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopMegaOpen ? "rotate-180 text-[#EA004B]" : ""}`} />
                </button>

                {/* Desktop Mega Flyout Panel */}
                <AnimatePresence>
                  {desktopMegaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-[640px] bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 grid grid-cols-2 gap-4 z-50 text-left"
                    >
                      <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#EA004B]">
                          oxonom pos Modülleri
                        </span>
                        <Link
                          href="/nasil-calisir"
                          onClick={() => setDesktopMegaOpen(false)}
                          className="text-[11px] font-semibold text-slate-500 hover:text-[#EA004B] transition inline-flex items-center gap-1"
                        >
                          Tüm Akışı Gör <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {productSolutions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setDesktopMegaOpen(false)}
                            className="group p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-3"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#EA004B] group-hover:text-white transition-all shadow-xs">
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#EA004B] transition-colors truncate">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 group-hover:bg-[#FFF0F4] group-hover:text-[#EA004B]">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Links */}
              <Link
                href="/nasil-calisir"
                className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  pathname === "/nasil-calisir"
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Nasıl Çalışır?
              </Link>
              <Link
                href="/fiyatlandirma"
                className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  pathname === "/fiyatlandirma"
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Fiyatlandırma
              </Link>
              <Link
                href="/basvuru"
                className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  pathname === "/basvuru"
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Başvuru & Demo
              </Link>
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
              <a
                href="https://pos.oxonom.com/restoran-girisi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 transition-all shadow-xs"
              >
                <span>Restoran Girişi</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <Link
                href="/basvuru"
                className="btn-shine-container tap-effect inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-md shadow-[#EA004B]/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Demo Talep Et</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>

            {/* Mobile Actions: Fiyatlar + Demo + Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <Link
                href="/fiyatlandirma"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-[#EA004B] bg-slate-100 hover:bg-[#FFF0F4] border border-slate-200/90 transition-all flex items-center gap-1"
              >
                <span>Fiyatlar</span>
              </Link>
              <Link
                href="/basvuru"
                className="btn-shine-container px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#EA004B] shadow-sm shadow-[#EA004B]/20"
              >
                Demo
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Menüyü Aç"
              >
                <Menu className="w-6 h-6 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

      {/* 3. FULLSCREEN ELASTIC OFF-CANVAS MOBILE MEGA MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Semi-transparent Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Elastic Offcanvas Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.85,
              }}
              className="fixed inset-0 z-[100] bg-white flex flex-col justify-between overflow-hidden lg:hidden shadow-2xl"
            >
              {/* Drawer Top Navigation Bar */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <OxonomPosLogo size="md" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    v2.5
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="Menüyü Kapat"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* HIGH-VISIBILITY SPOTLIGHT: FİYATLANDIRMA & PAKETLER */}
              <div className="px-4 sm:px-5 pt-3 pb-2.5 bg-gradient-to-b from-white via-rose-50/40 to-slate-50 border-b border-rose-100/80">
                <Link
                  href="/fiyatlandirma"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF0F4] via-white to-rose-50 border-2 border-[#EA004B]/35 shadow-sm shadow-[#EA004B]/10 hover:shadow-md transition-all active:scale-[0.98] group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2B72] to-[#EA004B] text-white flex items-center justify-center shadow-md shadow-[#EA004B]/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <CreditCard className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#EA004B] transition-colors truncate">
                          Fiyatlandırma & Paketler
                        </span>
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-[#EA004B] text-white tracking-wide uppercase flex-shrink-0">
                          ₺1.999&#39;dan
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium truncate">
                        Sıfır komisyon, sabit ücretler ve paket detayları
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#EA004B] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                </Link>
              </div>

              {/* Drawer Category Switcher Tabs */}
              <div className="px-5 pt-3 pb-2 bg-slate-50 border-b border-slate-200/80">
                <div className="grid grid-cols-3 gap-1 bg-slate-200/60 p-1 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setActiveMobileCategory("products")}
                    className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeMobileCategory === "products"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Ürün & KDS
                  </button>
                  <button
                    onClick={() => setActiveMobileCategory("sectors")}
                    className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeMobileCategory === "sectors"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Sektörler
                  </button>
                  <button
                    onClick={() => setActiveMobileCategory("corporate")}
                    className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeMobileCategory === "corporate"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Kurumsal
                  </button>
                </div>
              </div>

              {/* Drawer Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {/* CATEGORY 1: ÜRÜN & ÇÖZÜMLER */}
                {activeMobileCategory === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EA004B] block mb-1">
                      Öne Çıkan Modüller
                    </span>
                    {productSolutions.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-2xl border border-slate-200 hover:border-[#EA004B]/40 bg-white hover:bg-rose-50/20 transition-all active:scale-[0.98]"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-xs font-bold text-slate-900 truncate">
                                {item.title}
                              </span>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    {/* Quick Access to Pricing & Packages */}
                    <Link
                      href="/fiyatlandirma"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#FFF0F4] border border-slate-200 hover:border-[#EA004B]/30 transition-all text-xs font-bold text-slate-800 hover:text-[#EA004B]"
                    >
                      <div className="flex items-center gap-2">
                        <BadgePercent className="w-4 h-4 text-[#EA004B]" />
                        <span>Tüm Paket ve Fiyat Seçeneklerini Gör</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  </motion.div>
                )}

                {/* CATEGORY 2: SEKTÖREL ÇÖZÜMLER */}
                {activeMobileCategory === "sectors" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EA004B] block mb-1">
                      İşletme Tipinize Göre Uyarlama
                    </span>
                    {sectorSolutions.map((sec) => {
                      const Icon = sec.icon;
                      return (
                        <Link
                          key={sec.title}
                          href={sec.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-2xl border border-slate-200 hover:border-[#EA004B]/40 bg-white hover:bg-rose-50/20 transition-all active:scale-[0.98]"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-xs font-bold text-slate-900 block mb-0.5">
                              {sec.title}
                            </span>
                            <p className="text-[11px] text-slate-500 leading-snug">
                              {sec.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    {/* Quick Access to Pricing & Packages */}
                    <Link
                      href="/fiyatlandirma"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#FFF0F4] border border-slate-200 hover:border-[#EA004B]/30 transition-all text-xs font-bold text-slate-800 hover:text-[#EA004B]"
                    >
                      <div className="flex items-center gap-2">
                        <BadgePercent className="w-4 h-4 text-[#EA004B]" />
                        <span>Tüm Paket ve Fiyat Seçeneklerini Gör</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  </motion.div>
                )}

                {/* CATEGORY 3: KURUMSAL & SAYFALAR */}
                {activeMobileCategory === "corporate" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EA004B] block mb-1">
                      Kurumsal Bağlantılar
                    </span>
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-[#EA004B]/40 text-xs font-bold text-slate-800"
                    >
                      <span>Ana Sayfa</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/nasil-calisir"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-[#EA004B]/40 text-xs font-bold text-slate-800"
                    >
                      <span>Nasıl Çalışır? (5 Adımlı Akış)</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/fiyatlandirma"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-[#EA004B]/40 text-xs font-bold text-slate-800"
                    >
                      <div>
                        <span>Şeffaf Fiyatlandırma & Paketler</span>
                        <span className="block text-[10px] text-[#EA004B] font-semibold mt-0.5">Sıfır Komisyon, Sabit Ücret</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/basvuru"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF0F4] border border-[#EA004B]/30 text-xs font-bold text-[#EA004B]"
                    >
                      <div>
                        <span>İşletme Başvurusu & Demo</span>
                        <span className="block text-[10px] text-slate-600 font-medium mt-0.5">24 saatte eksiksiz kurulum</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#EA004B]" />
                    </Link>
                  </motion.div>
                )}

                {/* Direct Support & Hotline Pill */}
                <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EA004B]/10 text-[#EA004B] flex items-center justify-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Doğrudan Destek Hattı</span>
                      <a href="tel:08503070368" className="text-xs font-bold text-slate-900">
                        0850 307 03 68
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-800">
                    7/24 Canlı
                  </span>
                </div>
              </div>

              {/* Drawer Bottom Action Dock */}
              <div className="p-5 border-t border-slate-100 bg-white space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://pos.oxonom.com/restoran-girisi"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
                  >
                    <span>Restoran Girişi</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <Link
                    href="/basvuru"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-shine-container tap-effect flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] shadow-md shadow-[#EA004B]/25 transition cursor-pointer"
                  >
                    <span>Demo Talep Et</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[10px] text-slate-400">
                    oxonom pos Enterprise · Bulut Tabanlı Restoran Altyapısı
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
