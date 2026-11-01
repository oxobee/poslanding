"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OxonomPosLogo } from "./OxonomPosLogo";
import { DemoModal } from "./DemoModal";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Ürün", href: "/" },
    { label: "Nasıl Çalışır?", href: "/nasil-calisir" },
    { label: "Fiyatlandırma", href: "/fiyatlandirma" },
    { label: "Başvuru & Demo", href: "/basvuru" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <OxonomPosLogo size="md" />

            {/* Desktop Center Navigation Pill */}
            <nav className="hidden md:flex items-center bg-slate-100/80 border border-slate-200/80 rounded-full p-1 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-slate-900 bg-white shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://agenapos.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200/90 hover:bg-slate-50 hover:text-slate-950 transition-all shadow-xs tap-effect"
              >
                Restoran Girişi
              </a>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="btn-shine-container px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-md shadow-[#EA004B]/20 transition-all flex items-center gap-1.5 cursor-pointer tap-effect"
              >
                <span>Demo Talep Et</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#EA004B] shadow-sm tap-effect"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menü"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-5 pt-4 pb-6 space-y-2.5 shadow-xl"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#FFF0F4] text-[#EA004B] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href="https://agenapos.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50"
                >
                  Restoran Girişi
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDemoModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] shadow-sm"
                >
                  Demo Talep Et
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
}
