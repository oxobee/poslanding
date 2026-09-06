"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const techStack = [
  { icon: "⚡", title: "Next.js 16 App Router", desc: "En hızlı web uygulama mimarisi" },
  { icon: "🔒", title: "Zod Şema Doğrulama", desc: "Sunucu ve istemci aynı kurallar" },
  { icon: "🛡️", title: "Rol Bazlı Koruma", desc: "Her aksiyon ayrı yetki seviyesinde" },
  { icon: "📊", title: "Prisma ORM", desc: "Güvenli ve tip-güvenli veritabanı" },
  { icon: "🧪", title: "613 Otomatik Test", desc: "%100 CI geçer, kırılmaz" },
  { icon: "📱", title: "Tailwind + Radix UI", desc: "Dokunmatik ekran optimizasyonlu" },
  { icon: "🔊", title: "Web Speech API", desc: "Türkçe sesli uyarı sistemi" },
  { icon: "🤖", title: "OpenRouter AI", desc: "En güncel dil modellerine erişim" },
];

const targetAudience = [
  { icon: "🍽️", title: "Restoran & Bistrolar", desc: "Masa yönetimi, KDS, Z raporu, CRM komple paket" },
  { icon: "☕", title: "Kafe & Pastaneler", desc: "Self-order, QR menü, hızlı POS kasa" },
  { icon: "🍔", title: "Fast-Food & QSR", desc: "QSR teması, hızlı kasa, paket sipariş" },
  { icon: "📦", title: "Paket Servisi", desc: "Takeaway + Delivery sipariş tipi, paket takibi" },
  { icon: "🏨", title: "Hotel & Resort", desc: "Çoklu bölge, personel rolleri, detaylı raporlama" },
  { icon: "🔗", title: "Zincir & Şubeler", desc: "Merkezi admin paneli, şube bazlı yönetim" },
];

export function TechAndTarget() {
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

  return (
    <>
      {/* Tech Stack */}
      <section className="section-padding bg-gradient-to-b from-transparent via-navy-950/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              📐 Teknik Üstünlükler
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Enterprise Kalitesinde{" "}
              <span className="gradient-text-blue">Mimari</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="glass border border-white/8 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              🎯 Kimler İçin İdeal?
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Her İşletme Tipine{" "}
              <span className="gradient-text">Özel Çözüm</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={visible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass border border-white/8 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
