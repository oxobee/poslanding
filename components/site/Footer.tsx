"use client";

import React, { useState } from "react";
import Link from "next/link";
import { OxonomPosLogo } from "./OxonomPosLogo";
import { DemoModal } from "./DemoModal";
import { Instagram, Linkedin, Twitter, Mail, Clock, Phone } from "lucide-react";

export function Footer() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#080C14] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/60">
            {/* Brand & Contact Column */}
            <div className="lg:col-span-2 space-y-4">
              <OxonomPosLogo variant="white" size="md" />
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Restoranlar için QR menü, masadan sipariş, mutfak ekranı (KDS), açık hesap ve ödeme operasyon altyapısı.
              </p>

              <div className="pt-2 space-y-2 text-slate-300">
                <div className="text-[11px] font-bold text-slate-200 tracking-wider uppercase">
                  BİZE ULAŞIN
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-3.5 h-3.5 text-[#EA004B]" />
                  <a href="tel:08503080000" className="hover:text-white transition-colors font-medium">
                    0850 308 00 00
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3.5 h-3.5 text-[#EA004B]" />
                  <a href="mailto:info@oxonompos.com" className="hover:text-white transition-colors">
                    info@oxonompos.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#EA004B]" />
                  <span>Pzt-Cmt: 09:00 - 20:00</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/oxonompos"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#EA004B] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/oxonompos"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#EA004B] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/oxonompos"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#EA004B] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 1: ÜRÜN */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                ÜRÜN
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    oxonom pos Nedir?
                  </Link>
                </li>
                <li>
                  <Link href="/nasil-calisir" className="hover:text-white transition-colors">
                    Nasıl Çalışır?
                  </Link>
                </li>
                <li>
                  <Link href="/fiyatlandirma" className="hover:text-white transition-colors">
                    Fiyatlandırma
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: ÇÖZÜMLER */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                ÇÖZÜMLER
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Demo & Başvuru
                  </button>
                </li>
                <li>
                  <a
                    href="https://agenapos.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Restoran Girişi
                  </a>
                </li>
                <li>
                  <Link href="/basvuru" className="hover:text-white transition-colors">
                    Satış Ortaklığı
                  </Link>
                </li>
                <li>
                  <Link href="/basvuru" className="hover:text-white transition-colors">
                    Partner Girişi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: KURUMSAL */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                KURUMSAL
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Kariyer
                  </Link>
                </li>
                <li>
                  <Link href="/basvuru" className="hover:text-white transition-colors">
                    İletişim & Destek
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: YASAL */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                YASAL
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="cursor-default hover:text-white transition-colors">
                    Gizlilik Politikası
                  </span>
                </li>
                <li>
                  <span className="cursor-default hover:text-white transition-colors">
                    Kullanım Koşulları
                  </span>
                </li>
                <li>
                  <span className="cursor-default hover:text-white transition-colors">
                    Çerez Politikası
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 oxonom pos Teknoloji. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center gap-4">
              <span>Türkiye'nin Restoran Operasyon Zekası</span>
            </div>
          </div>
        </div>
      </footer>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
