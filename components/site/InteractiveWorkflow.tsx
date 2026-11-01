"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Smartphone, Monitor, Receipt, Sparkles, Clock, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function InteractiveWorkflow() {
  const [activeTab, setActiveTab] = useState<"guest" | "kds" | "pos">("guest");

  const tabData = {
    guest: {
      roleTitle: "MASADAKİ MÜŞTERİ NE GÖRÜR?",
      mainTitle: "Saniyeler içinde menüye erişim ve sipariş",
      description:
        "Misafir masadaki QR kodu okutur. Tarayıcıda açılan menüden ürünleri inceler, porsiyonunu ve notunu seçip 'Sipariş Ver' butonuna dokunur. Garsonun gelmesini veya menü getirmesini beklemez.",
      checks: [
        "Uygulama indirmeden doğrudan tarayıcıda anında çalışma",
        "Yüksek çözünürlüklü fotoğraflar ve alerjen filtreleri",
        "Ürüne özel pişme derecesi, sos ve çıkarılacak malzeme notları",
        "Sipariş durumunu ve mutfak hazırlığını ekrandan takip edebilme",
      ],
      metrics: [
        {
          label: "Erişim Hızı",
          value: "< 2 Saniye",
          desc: "Telefon kamerasıyla okutup menüye anında ulaşma",
          badgeColor: "text-[#EA004B] bg-[#FFF0F4]",
        },
        {
          label: "Bekleme Kaybı",
          value: "0 Dakika",
          desc: "Garson veya fiziksel menü bekleme zorunluluğu yok",
          badgeColor: "text-amber-700 bg-amber-50",
        },
        {
          label: "Müşteri Deneyimi",
          value: "%100 Bağımsız",
          desc: "Alerjen filtreleri, içerik bilgisi ve hızlı sepet",
          badgeColor: "text-emerald-700 bg-emerald-50",
        },
      ],
    },
    kds: {
      roleTitle: "MUTFAKTAKİ ŞEF NE GÖRÜR?",
      mainTitle: "Sipariş anında istasyona düşer ve zaman sayacı başlar",
      description:
        "Gelen tüm siparişler ızgara, soğuk, tatlı ve içecek gibi mutfak istasyonlarına ayrışmış olarak ekrana akar. Geciken siparişler renk değiştirerek mutfak ekibini anında uyarır.",
      checks: [
        "İstasyon bazlı otomatik sipariş ve ürün ayrıştırma",
        "Renkli süre sayaçları ve gecikme ikazları",
        "Malzeme çıkarma ve özel pişirme notlarının belirgin vurgusu",
        "Tek dokunuşla 'Hazırlandı' durumuna geçirme ve garsona bildirme",
      ],
      metrics: [
        {
          label: "Hazırlık Hızı",
          value: "%40 Daha Hızlı",
          desc: "İletişim kopukluğu olmadan doğrudan mutfak üretimi",
          badgeColor: "text-[#EA004B] bg-[#FFF0F4]",
        },
        {
          label: "Hata Oranı",
          value: "%0 Yanılgı",
          desc: "Garson notu okunamadı veya unutuldu riski tamamen sıfır",
          badgeColor: "text-emerald-700 bg-emerald-50",
        },
        {
          label: "İstasyon Uyumu",
          value: "%100 Otomatik",
          desc: "Soğuk mezeler ve sıcak lezzetler ayrı panellerde",
          badgeColor: "text-blue-700 bg-blue-50",
        },
      ],
    },
    pos: {
      roleTitle: "KASADAKİ YÖNETİCİ NE GÖRÜR?",
      mainTitle: "Tüm masalar, açık bakiyeler ve anlık tahsilat",
      description:
        "Hangi masa ne sipariş verdi, ne kadar hesap birikti tek bakışta görülür. Misafir ister masadan kendi öder, ister kasada parçalı veya tek çekim tahsil edilir.",
      checks: [
        "Gerçek zamanlı masa yerleşimi ve doluluk takibi",
        "Masayı bölme, birleştirme ve parça başı tahsilat",
        "Online ödeme ve temassız kart entegrasyonu",
        "Gün sonu Z raporu ve ciro analizlerine anlık canlı erişim",
      ],
      metrics: [
        {
          label: "Hesap Alma Süresi",
          value: "< 15 Saniye",
          desc: "Hesap isteme, adisyon getirme beklemesi sıfırlanır",
          badgeColor: "text-[#EA004B] bg-[#FFF0F4]",
        },
        {
          label: "Açık Masa Kontrolü",
          value: "%100 Güvenli",
          desc: "Masalar arası kayıp veya karışıklık riski biter",
          badgeColor: "text-emerald-700 bg-emerald-50",
        },
        {
          label: "Yönetim Hakimiyeti",
          value: "Canlı Ciro",
          desc: "Cebinizden veya kasadan anlık ciro ve ürün satış raporu",
          badgeColor: "text-purple-700 bg-purple-50",
        },
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3.5 shadow-xs">
            Uçtan Uca Akış
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Masadan kasaya <span className="text-[#EA004B]">senkronize</span> restoran deneyimi.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            oxonom pos'un gücü, müşterinin telefonundaki hareketin aynı anda mutfak ekranına ve kasaya anlamlı bir veri olarak yansımasıdır.
          </p>
        </motion.div>

        {/* 3 Pills Selector with tactile feedback */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("guest")}
            className={`tap-effect px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "guest"
                ? "bg-[#EA004B] text-white shadow-lg shadow-[#EA004B]/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
            }`}
          >
            1. Misafir Deneyimi
          </button>
          <button
            onClick={() => setActiveTab("kds")}
            className={`tap-effect px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "kds"
                ? "bg-[#EA004B] text-white shadow-lg shadow-[#EA004B]/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
            }`}
          >
            2. Mutfak Ekranı (KDS)
          </button>
          <button
            onClick={() => setActiveTab("pos")}
            className={`tap-effect px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "pos"
                ? "bg-[#EA004B] text-white shadow-lg shadow-[#EA004B]/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
            }`}
          >
            3. Kasa & Açık Hesap
          </button>
        </div>

        {/* Live Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Column: What they see */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#EA004B] tracking-wider uppercase">
                {current.roleTitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {current.mainTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                {current.checks.map((chk, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-medium">{chk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/basvuru"
                  className="btn-shine-container tap-effect inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-white bg-[#EA004B] hover:bg-[#D00042] shadow-md shadow-[#EA004B]/20 transition"
                >
                  <span>Hemen Başvur & Demo Al</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Operational Output & Advantage Metrics */}
            <div className="lg:col-span-5 bg-slate-50/90 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                OPERASYONEL ÇIKTI & AVANTAJ
              </span>

              <div className="space-y-3.5">
                {current.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {metric.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {metric.desc}
                      </div>
                    </div>
                    <span className={`text-xs font-black px-3 py-1.5 rounded-lg flex-shrink-0 ${metric.badgeColor}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
