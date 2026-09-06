"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  { step: "01", icon: "🌐", title: "Sisteme Giriş Yapın", desc: "Hesabınızı oluşturun, dakikalar içinde hazır." },
  { step: "02", icon: "📂", title: "Menünüzü AI ile Yükleyin", desc: "Fotoğraf veya PDF — AI kategorileri ve ürünleri okur." },
  { step: "03", icon: "🪑", title: "Masaları Tanımlayın", desc: "QR kodlarını yazdırın ve masalara yapıştırın." },
  { step: "04", icon: "👥", title: "Personelinizi Ekleyin", desc: "Rolleri atayın, PIN kodlarını belirleyin." },
  { step: "05", icon: "💰", title: "İlk Siparişi Alın", desc: "OxonomPos gerisini yapar — otomatik, akıllı, hızlı." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
            🚀 Başlamak İçin
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            5 Adımda{" "}
            <span className="gradient-text">Hazırsınız</span>
          </h2>
          <p className="text-xl text-slate-400">
            Karmaşık kurulum yok. Teknik bilgi gerektirmez.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden lg:block" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="glass border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="text-6xl font-black text-white/5 absolute top-3 right-4 pointer-events-none select-none">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-amber-500/50 z-10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
