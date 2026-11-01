"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "oxonom pos sistemini nasıl kurarım?",
      a: "Kurulum son derece basittir. Başvurunuzun ardından 24 saat içinde mevcut menünüzü dijital sisteme aktarırız, masalarınıza özel QR kodlarınızı hazırlarız. Özel donanım zorunluluğu olmadan mevcut tablet, telefon veya bilgisayarlarınızla anında kullanmaya başlarsınız.",
    },
    {
      q: "Var olan donanımlarımla uyumlu çalışır mı?",
      a: "Evet! oxonom pos modern web ve bulut altyapısıyla çalışır. Mevcut Android / iOS tabletleriniz, dokunmatik POS ekranlarınız, mutfak monitörleriniz ve termal fiş yazıcılarınızla kusursuz uyum sağlar.",
    },
    {
      q: "Satış komisyonu veya gizli ek ücret var mı?",
      a: "Kesinlikle hayır. oxonom pos yemek satışlarınız veya adisyon cirolarınız üzerinden hiçbir yüzde komisyon almaz. Yalnızca seçtiğiniz paketin sabit aylık ücretini ödersiniz.",
    },
    {
      q: "Çoklu şube veya franchise işletmeleri için uygun mu?",
      a: "Evet. Kurumsal paketimiz ile merkezi menü yönetimi, şube bazlı farklı fiyatlandırma, dinamik yetkilendirme ve konsolide ciro raporlama imkanına sahip olursunuz.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/50 border-t border-slate-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 inline mr-1" /> SSS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Aklınıza takılan tüm soruların yanıtları burada.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-xs ${
                  isOpen
                    ? "border-[#EA004B]/40 shadow-md shadow-[#EA004B]/5"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#EA004B] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#FFF0F4] text-[#EA004B]" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
