"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { DemoModal } from "./DemoModal";
import Link from "next/link";

export function PricingSection({
  showDetailedTable = false,
  hideComparisonLink = false,
}: {
  showDetailedTable?: boolean;
  hideComparisonLink?: boolean;
}) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Profesyonel Paket - ₺3.500 + KDV");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setDemoModalOpen(true);
  };

  return (
    <section id="fiyatlandirma" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3.5 shadow-xs">
            ŞEFFAF FİYATLANDIRMA
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Şeffaf paketler. Sabit aylık ücret.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            oxonom pos yemek satışlarınızdan pay almaz. Bütçenize uygun paketi seçin, sabit aylık ücretle restoran operasyonunuzu tam hakimiyetle yönetin.
          </p>
        </div>

        {/* Top Special Banner: Kurucu İşletme Programı */}
        <div className="mb-12 sm:mb-14 bg-gradient-to-r from-rose-50/70 via-white to-rose-50/50 border border-[#EA004B]/30 rounded-3xl p-5 sm:p-9 shadow-md relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-4 flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#EA004B] text-white tracking-wide uppercase">
                  Kurucu İşletme Programı
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  İlk 10 Onaylı Restorana Özel
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                oxonom pos'un ilk işletmelerinden biri olun, lansman avantajından yararlanın.
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                oxonom pos'a ilk gerçek restoran operasyonlarında referans vereceğimiz ilk 10 onaylı işletmeye özel aylık komisyonsuz ve sabit indirimli fiyat avantajı.
              </p>

              {/* Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>24 saatte eksiksiz kurulum desteği</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>Menü güncellemeleri dahil operasyon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>Masalara özel QR kod hazırlığı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>Öncelikli doğrudan destek hattı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>Kasa, KDS + QR / Cep sunucu fiyatı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3]" />
                  <span>Ücretsiz entegrasyon bilgilendirme</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="w-full lg:w-72 bg-white border border-[#EA004B]/35 rounded-2xl p-6 text-center shadow-lg flex flex-col justify-center items-center flex-shrink-0">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lansman Fiyatı</span>
              <div className="text-4xl font-black text-[#EA004B] my-2">
                ₺990 <span className="text-xs font-semibold text-slate-500">+ KDV / AY</span>
              </div>
              <button
                onClick={() => handleSelectPlan("Kurucu İşletme Paketi - ₺990 + KDV")}
                className="btn-shine-container tap-effect w-full mt-3 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition shadow-md shadow-[#EA004B]/25 cursor-pointer"
              >
                Kurucu Olarak Başvur
              </button>
              <span className="text-[11px] text-slate-400 mt-2.5 block font-medium">
                Yalnızca ilk başvuran 10 işletme için geçerlidir.
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* 1. Operasyon Paketi */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-lg">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Operasyon Paketi</h3>
              <p className="text-xs text-slate-500 mb-6 min-h-[32px] leading-relaxed">
                Temel dijital QR menü, sipariş ve mutfak operasyonu.
              </p>
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-black text-slate-900">₺2.000</span>
                <span className="text-xs font-semibold text-slate-500 ml-1.5">+ KDV / ay</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 font-medium">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Sınırsız QR Menü & Ürün Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Kategori, Ürün & Görsel Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Porsiyon, Sos & Varyasyon Seçenekleri</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Kalori & Alerjen Bilgileri</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Masaya Özel QR Kod Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Masadan Sipariş Alma</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Mutfak Ekranı (KDS) & Sipariş Takibi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Günlük Temel Satış Raporları</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>1 Şube Dahil</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Standart Destek</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelectPlan("Operasyon Paketi - ₺2.000 + KDV")}
              className="tap-effect mt-8 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-xs"
            >
              Operasyon Paketi Seç
            </button>
          </div>

          {/* 2. Profesyonel Paket (En Çok Tercih Edilen) */}
          <div className="bg-white border-2 border-[#EA004B] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-[#EA004B]/12 relative lg:-translate-y-2">
            {/* Top Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EA004B] text-white px-4 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-md shadow-[#EA004B]/30">
              EN ÇOK TERCİH EDİLEN
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Profesyonel Paket</h3>
              <p className="text-xs text-slate-500 mb-6 min-h-[32px] leading-relaxed">
                Tüm operasyon sürecine online ödeme, açık hesap ve AI araçları.
              </p>
              <div className="mb-5 pb-5 border-b border-slate-100">
                <span className="text-4xl font-black text-[#EA004B]">₺3.500</span>
                <span className="text-xs font-semibold text-slate-500 ml-1.5">+ KDV / ay</span>
              </div>

              <div className="bg-[#FFF0F4] text-[#EA004B] text-[11px] font-bold px-3 py-2 rounded-xl mb-5 flex items-center gap-2">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Operasyon paketi içeren tüm özellikler dahil</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-800 font-semibold">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Online Ödeme Entegrasyonu*</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Açık Hesap / Masa Bakiyesi Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Kişi Başı / Parçalı Hesap Ödeme</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Self Servis QR Sipariş & Ödeme</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Gelişmiş Tarih Bazlı Ciro Raporları</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Kampanya ve İndirim Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>oxonom pos AI Menü Aktarma Asistanı</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>oxonom pos AI Rapor Asistanı</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Öncelikli Müşteri Desteği</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelectPlan("Profesyonel Paket - ₺3.500 + KDV")}
              className="btn-shine-container tap-effect mt-8 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] shadow-xl shadow-[#EA004B]/30 transition cursor-pointer"
            >
              Profesyonel Paketi Seç
            </button>
          </div>

          {/* 3. Kurumsal Paket */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-lg">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Kurumsal</h3>
              <p className="text-xs text-slate-500 mb-6 min-h-[32px] leading-relaxed">
                Çok şubeli restoran zincirleri ve özel entegrasyonlar için.
              </p>
              <div className="mb-5 pb-5 border-b border-slate-100">
                <span className="text-4xl font-black text-slate-900">Teklif Al</span>
                <span className="text-xs font-semibold text-slate-500 ml-1.5">(Özel Fiyatlandırma)</span>
              </div>

              <div className="bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-2 rounded-xl mb-5">
                TÜM PROFESYONEL ÖZELLİKLER DAHİL
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 font-medium">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Çoklu Şube & Merkezi Menü Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Şube Bazlı Raporlar & Farklı Fiyatlandırma</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Gelişmiş Rol ve Yetki Yönetimi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Özel Donanım & POS Entegrasyonları</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Marka Özelinde Arayüz Uyarlamaları</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Yerinde Eğitim ve Ekip Onboarding</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>7/24 Kurumsal Destek & Özel SLA</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Özel Kurumsal Sözleşme</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelectPlan("Kurumsal Paket - Teklif Al")}
              className="tap-effect mt-8 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-xs"
            >
              Satış Ekibiyle Görüş
            </button>
          </div>
        </div>

        {/* Link to Full Comparison Page */}
        {!hideComparisonLink && (
          <div className="mt-12 text-center">
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EA004B] hover:text-[#D00042] transition"
            >
              <span>Tüm paket özelliklerini ve detaylı karşılaştırma tablosunu inceleyin</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        )}
      </div>

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialPackage={selectedPlan}
      />
    </section>
  );
}
