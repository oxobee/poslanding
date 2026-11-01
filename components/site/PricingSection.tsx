"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Camera, Wrench, ShieldCheck, Zap } from "lucide-react";

interface PricingSectionProps {
  hideComparisonLink?: boolean;
}

export function PricingSection({ hideComparisonLink = false }: PricingSectionProps) {
  return (
    <section id="fiyatlandirma" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#EA004B]/20 text-[#EA004B] text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Şeffaf Fiyatlandırma · Sıfır Komisyon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Cironuzdan pay almayan,{" "}
            <span className="text-[#EA004B]">şeffaf ve net</span> paketler.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            oxonom pos yemek satışlarınızdan asla pay almaz. Bütçenize uygun paketi seçin, sabit aylık ücretle restoran operasyonunuzu tam hakimiyetle yönetin.
          </p>
        </div>

        {/* Top Special Banner: Kurucu İşletme Programı (₺1.999) */}
        <div className="mb-14 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/60 border-2 border-[#EA004B]/35 rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-4 flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-black bg-[#EA004B] text-white tracking-wide uppercase shadow-sm">
                  Kurucu İşletme Programı
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  İlk 10 Onaylı Restorana Özel
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                oxonom pos&apos;un ilk işletmelerinden biri olun, lansman avantajından yararlanın.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                oxonom pos&apos;a ilk gerçek restoran operasyonlarında referans vereceğimiz ilk 10 onaylı işletmeye özel aylık komisyonsuz ve sabit indirimli fiyat avantajı.
              </p>

              {/* Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>24 saatte eksiksiz menü & masa kurulum desteği</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>Menü güncellemeleri dahil operasyon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>Masalara özel QR kod hazırlığı ve baskı dosyaları</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>Öncelikli doğrudan VIP destek hattı (7/24)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>Kasa, KDS mutfak ekranı + QR / Cep sunucu dahil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#EA004B] stroke-[3] flex-shrink-0" />
                  <span>Ömür boyu sabit fiyat garantisi</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="w-full lg:w-76 bg-white border border-[#EA004B]/35 rounded-2xl p-6 text-center shadow-lg flex flex-col justify-center items-center flex-shrink-0">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Lansman Özel Sabit Fiyat</span>
              <div className="text-4xl font-black text-[#EA004B] my-2">
                ₺1.999 <span className="text-xs font-semibold text-slate-500">+ KDV / AY</span>
              </div>
              <Link
                href="/basvuru?paket=kurucu-isletme"
                className="btn-shine-container tap-effect w-full mt-3 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition shadow-md shadow-[#EA004B]/25 flex items-center justify-center gap-1.5"
              >
                <span>Kurucu Olarak Başvur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] text-slate-400 mt-2.5 block font-medium">
                Yalnızca ilk başvuran 10 işletme için geçerlidir.
              </span>
            </div>
          </div>
        </div>

        {/* 1. YAZILIM & POS SAAS PAKETLERİ (Profesyonel & Kurumsal) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-black tracking-wider uppercase text-[#EA004B] block">
                [ POS & RESTORAN YAZILIM PAKETLERİ ]
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Bulut POS, KDS ve QR Sipariş Altyapısı
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
            {/* 1. Profesyonel Paket (Operasyon Özellikleri Dahil - ₺2.999) */}
            <div className="bg-white border-2 border-[#EA004B] rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-[#EA004B]/15 relative hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EA004B] text-white px-4 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-md shadow-[#EA004B]/30 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>EN ÇOK TERCİH EDİLEN</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-black text-slate-900">Profesyonel Paket</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FFF0F4] text-[#EA004B]">
                    Eksiksiz Çözüm
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Operasyon ve profesyonel modüllerin tamamı tek pakette: QR menü, masadan sipariş, KDS, açık hesap ve AI araçları.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#EA004B]">₺2.999</span>
                    <span className="text-xs font-semibold text-slate-500">+ KDV / ay</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    KDV dahil ₺3.598,80 · Yıllık taahhüt zorunluluğu yok
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  {/* Operasyon + Pro Birleşik Özellikleri */}
                  <div className="flex items-start gap-2.5 font-bold text-slate-900">
                    <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>Sınırsız QR Menü & Dinamik Ürün / Kategori Yönetimi</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-bold text-slate-900">
                    <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>Masadan Canlı Sipariş & Masaya Özel QR Kodlar</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-bold text-slate-900">
                    <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>Mutfak Ekranı (KDS) & İstasyon Bazlı Ayrıştırma</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-bold text-slate-900">
                    <Check className="w-4 h-4 text-[#EA004B] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>Masa Birleştirme, Taşıma & Açık Hesap Takibi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Kişi Başı Bölüşme & Parçalı Hesap Tahsilatı</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Porsiyon, Sos, Varyasyon & Alerjen Bilgileri</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Online Ödeme Entegrasyonu</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>oxonom pos AI Menü Aktarma Asistanı</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>oxonom pos AI Rapor & Ciro Asistanı</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Kampanya, İndirim & Kupon Yönetimi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Gelişmiş Tarih Bazlı Ciro Analitiği & Z-Raporları</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Öncelikli 7/24 Doğrudan Müşteri Desteği</span>
                  </div>
                </div>
              </div>

              <Link
                href="/basvuru?paket=profesyonel-2999"
                className="btn-shine-container tap-effect mt-8 w-full py-4 px-4 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] shadow-xl shadow-[#EA004B]/30 transition flex items-center justify-center gap-2 cursor-pointer font-black"
              >
                <span>Profesyonel Paketi Seç</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. Kurumsal Paket (Teklif Al) */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-black text-slate-900">Kurumsal</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Zincir & Özel
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Çok şubeli restoran zincirleri, franchise yapıları ve özel donanım/ERP entegrasyonları için.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">Teklif Al</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    İşletme büyüklüğünüze ve şube adedinize göre özel fiyatlandırma
                  </span>
                </div>

                <div className="bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-2 rounded-xl mb-5">
                  TÜM PROFESYONEL ÖZELLİKLER DAHİL
                </div>

                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Çoklu Şube & Merkezi Menü / Fiyat Yönetimi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Şube Bazlı Konsolide Ciro Raporları</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Gelişmiş Rol, Yetki ve Personel Yönetimi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Özel ERP, Muhasebe ve Donanım Entegrasyonları</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Marka Özelinde Arayüz ve Özel Domain Desteği</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Yerinde Kurulum, Ekip Eğitimi ve Onboarding</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>7/24 Kurumsal VIP Destek & Özel SLA Garantisi</span>
                  </div>
                </div>
              </div>

              <Link
                href="/basvuru?paket=kurumsal"
                className="tap-effect mt-8 w-full py-4 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <span>Satış Ekibiyle Görüş</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. MEDYA VE KURULUM HİZMETLERİ (Image 1 & Image 2) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-wider uppercase text-[#EA004B] block mb-1">
              [ MEDYA VE YAZILIM HİZMETLERİ ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Kurulum, Görsel Tasarım ve Medya Yönetimi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Restoranınızı dijital dünyada öne geçirecek yerinde kurulum, profesyonel çekim ve sosyal medya paketleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Kurulum ve Özel Tasarım (Image 2) */}
            <div className="bg-[#111622] text-white border border-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    KAMPANYA
                  </span>
                </div>

                <h4 className="text-2xl font-black text-white tracking-tight mb-2">
                  Kurulum ve Özel Tasarım
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Bir şube için tek seferlik: yerinde kurulum, ürün görselleri, QR ve ekran menüsü tasarımları.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-slate-400 text-lg line-through font-semibold">₺20.000</span>
                    <span className="text-4xl font-black text-white tracking-tight">₺12.000</span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-1 font-medium">
                    tek seferlik + KDV (KDV dahil ₺14.400 · Son gün 30 Kasım 2026)
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    PAKETTE:
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Şubede yerinde kurulum</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Ürün görselleri ve menü fotoğrafları</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>QR menü tasarımı ve kurulumu</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Ekran (TV) menüsü tasarımları</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Dijital tasarımlar ve içeriklerin oluşturulması</span>
                  </div>
                </div>
              </div>

              <Link
                href="/basvuru?paket=kurulum-tasarim"
                className="tap-effect mt-8 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Hizmet İçin Başvur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: OxonomPos Medya Hizmeti (Image 1) */}
            <div className="bg-[#111622] text-white border border-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EA004B]">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#EA004B]/20 text-rose-300 border border-[#EA004B]/30">
                    AYLIK SOSYAL MEDYA
                  </span>
                </div>

                <h4 className="text-2xl font-black text-white tracking-tight mb-2">
                  OxonomPos Medya Hizmeti
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  İsteğe bağlı aylık sosyal medya yönetimi: ürün ve mekân fotoğrafı, menü görselleri, içerik ve paylaşım yönetimi.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-4xl font-black text-white tracking-tight">₺20.000</span>
                    <span className="text-xs text-slate-400 font-medium">/ ay + KDV</span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-1 font-medium">
                    KDV dahil ₺24.000 · Profesyonel içerik üretimi
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    PAKETTE:
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Ürün ve mekân fotoğrafı</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Menü ve QR menü görselleri</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Sosyal medya içerik ve paylaşım yönetimi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Aylık düzenli çekim ve kreatif tasarım desteği</span>
                  </div>
                </div>
              </div>

              <Link
                href="/basvuru?paket=medya-hizmeti"
                className="tap-effect mt-8 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Hizmet İçin Başvur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Link to Full Comparison Page */}
        {!hideComparisonLink && (
          <div className="mt-14 text-center">
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
    </section>
  );
}
