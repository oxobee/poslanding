"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 mb-3">
            SSS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Aklınıza takılan tüm soruların yanıtları burada.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-[#EA004B] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#EA004B]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
