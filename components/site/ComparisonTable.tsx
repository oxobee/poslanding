"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const comparisonData = [
  { feature: "Sipariş Alma", competitors: true, oxonom: true, note: "" },
  { feature: "Mutfak Ekranı (KDS)", competitors: "partial", oxonom: true, note: "Sesli uyarı + 3 aşamalı" },
  { feature: "QR Self-Ordering", competitors: "partial", oxonom: true, note: "Entegre, sınırsız masa" },
  { feature: "AI ile Menü İçe Aktar", competitors: false, oxonom: true, note: "Fotoğraf / PDF / URL" },
  { feature: "AI Görsel Üretme", competitors: false, oxonom: true, note: "4 kalite seviyesi" },
  { feature: "AI Fotoğraf İyileştirme", competitors: false, oxonom: true, note: "Önce/Sonra karşılaştırma" },
  { feature: "AI Metin Yazarı", competitors: false, oxonom: true, note: "Kalori + Alerjen dahil" },
  { feature: "AI Sohbet Asistanı", competitors: false, oxonom: true, note: "Rol bazlı kişiselleştirilmiş" },
  { feature: "Türkçe Sesli Uyarı", competitors: false, oxonom: true, note: "Web Speech API" },
  { feature: "Parçalı / Karma Ödeme", competitors: "partial", oxonom: true, note: "Nakit+Kart+Yemek Kartı" },
  { feature: "Müşteri CRM", competitors: false, oxonom: true, note: "Profil, indirim, doğum günü" },
  { feature: "Doğum Günü Otomasyonu", competitors: false, oxonom: true, note: "Otomatik indirim tetikleme" },
  { feature: "Z Raporu Derinliği", competitors: "partial", oxonom: true, note: "7 sekmeli detaylı analiz" },
  { feature: "Personel Performans Raporu", competitors: false, oxonom: true, note: "Z Raporunda personel bazlı" },
  { feature: "Stok Reçete Entegrasyonu", competitors: "partial", oxonom: true, note: "Standart dahil" },
  { feature: "Ürün Müsaitlik Saati", competitors: false, oxonom: true, note: "Saat bazlı otomatik" },
  { feature: "86 Sistemi", competitors: "partial", oxonom: true, note: "Hızlı devre dışı bırakma" },
  { feature: "QR Menü Tema Tasarımı", competitors: false, oxonom: true, note: "2 tema + tam renk özelleştirme" },
  { feature: "Mobil API", competitors: "partial", oxonom: true, note: "Garson uygulaması hazır" },
  { feature: "Modül Bazlı Lisans", competitors: false, oxonom: true, note: "Her modül bağımsız" },
  { feature: "Bölge / Zone Yönetimi", competitors: false, oxonom: true, note: "Garson/masa bölge atama" },
  { feature: "Ekran PIN Kilidi", competitors: false, oxonom: true, note: "" },
  { feature: "Sistem Aktivite Logu", competitors: false, oxonom: true, note: "Her işlem kayıtlı" },
];

function StatusIcon({ value }: { value: boolean | "partial" }) {
  if (value === true) {
    return (
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
        </svg>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

export function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const oxonomCount = comparisonData.filter((d) => d.oxonom === true).length;
  const competitorCount = comparisonData.filter((d) => d.competitors === true).length;

  return (
    <section id="comparison" className="section-padding bg-gradient-to-b from-transparent via-navy-950/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            ⚔️ Rakip Karşılaştırması
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Neden{" "}
            <span className="gradient-text">OxonomPos?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Piyasadaki standart sistemler 12–15 özellik sunarken OxonomPos{" "}
            <strong className="text-amber-400">50+ entegre özellik</strong> ile çalışır.
          </p>
        </motion.div>

        {/* Score cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-10"
        >
          <div className="glass rounded-2xl p-5 text-center border border-slate-700/50">
            <div className="text-4xl font-black text-slate-400 mb-1">{competitorCount}/{comparisonData.length}</div>
            <div className="text-sm text-slate-500">Genel Rakipler</div>
            <div className="mt-2 text-xs text-red-400">Ortalama 12–15 özellik</div>
          </div>
          <div className="glass rounded-2xl p-5 text-center border border-amber-500/30 glow-gold">
            <div className="text-4xl font-black gradient-text mb-1">{oxonomCount}/{comparisonData.length}</div>
            <div className="text-sm text-amber-300 font-medium">OxonomPos</div>
            <div className="mt-2 text-xs text-emerald-400">50+ entegre özellik</div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto rounded-2xl border border-white/10"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-navy-950/80 backdrop-blur-sm border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 w-1/2">Özellik</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-400">Rakipler</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-amber-400">OxonomPos</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 hidden md:table-cell">Not</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.025 }}
                  className="border-b border-white/5 hover:bg-white/3 transition-colors group"
                >
                  <td className="px-6 py-3.5 text-sm text-slate-300 font-medium">{row.feature}</td>
                  <td className="px-6 py-3.5 text-center">
                    <StatusIcon value={row.competitors as boolean | "partial"} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <StatusIcon value={row.oxonom} />
                  </td>
                  <td className="px-6 py-3.5 hidden md:table-cell">
                    {row.note && (
                      <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {row.note}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2"><StatusIcon value={true} /><span className="text-slate-400">Var</span></div>
          <div className="flex items-center gap-2"><StatusIcon value={"partial"} /><span className="text-slate-400">Kısmen / Ek ücret</span></div>
          <div className="flex items-center gap-2"><StatusIcon value={false} /><span className="text-slate-400">Yok</span></div>
        </div>
      </div>
    </section>
  );
}
