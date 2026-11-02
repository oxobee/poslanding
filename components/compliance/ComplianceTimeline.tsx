"use client";

import React, { useState } from "react";
import {
  Calendar,
  Building2,
  Store,
  UtensilsCrossed,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldAlert,
  Info,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

export function ComplianceTimeline() {
  const [selectedTier, setSelectedTier] = useState<0 | 1 | 2>(0);

  const TIERS = [
    {
      id: "tier-1",
      title: "Ulusal Zincir Restoranlar",
      subtitle: "Türkiye genelinde çoklu şubesi olan kurumsal zincirler",
      effectiveDate: "1 Temmuz 2026",
      status: "Öncelikli Aşama",
      statusColor: "bg-rose-100 text-rose-800 border-rose-200",
      icon: Building2,
      summary:
        "Tüm Türkiye genelinde organize olmuş ulusal zincir restoranlar için enerji (kcal & kJ) ve 14 majör alerjen bildirimleri en erken aşamada devreye girmektedir.",
      obligations: [
        {
          name: "Enerji Değeri (kcal & kJ)",
          status: "Zorunlu",
          desc: "Menü panolarında, basılı materyallerde ve dijital menülerde porsiyon bazında sunulması mecburidir.",
        },
        {
          name: "14 Majör Alerjen Deklarasyonu",
          status: "Zorunlu",
          desc: "Tüm menü kalemlerinde 14 alerjen maddesi açıkça belirtilmeli ve sipariş öncesinde erişilebilir olmalıdır.",
        },
        {
          name: "Bileşen ve Malzeme Listesi",
          status: "Zorunlu",
          desc: "Tüketicinin talep etmesi halinde ürünün tüm bileşenlerinin eksiksiz gösterileceği altyapı bulunmalıdır.",
        },
        {
          name: "Çift Erişim (QR + Basılı Alternatif)",
          status: "Zorunlu",
          desc: "Yalnızca QR menü yeterli kabul edilmez; akıllı telefonu olmayan müşterilere basılı liste de sunulmalıdır.",
        },
      ],
      transitionNote:
        "T.C. Tarım ve Orman Bakanlığı resmî kılavuzlarına göre ulusal zincirler, tüketici erişiminin en yoğun olduğu grup olması sebebiyle geçiş takviminin öncü grubunu oluşturmaktadır.",
    },
    {
      id: "tier-2",
      title: "Aynı İlde 3 veya Daha Fazla Şube",
      subtitle: "Aynı il sınırları içerisinde 3+ şubeyle faaliyet gösteren işletmeler",
      effectiveDate: "31 Aralık 2026",
      status: "Orta Aşama",
      statusColor: "bg-amber-100 text-amber-800 border-amber-200",
      icon: Store,
      summary:
        "Bölgesel zincirler ve aynı ilde üç veya daha çok şubeye sahip restoran-kafe grupları için uyumun tamamlanması gereken tarihtir.",
      obligations: [
        {
          name: "Enerji Değeri (kcal & kJ)",
          status: "Zorunlu",
          desc: "Şubeler arası reçete standardizasyonu sağlanarak porsiyon bazında enerji değerleri menülere eklenmelidir.",
        },
        {
          name: "14 Majör Alerjen Deklarasyonu",
          status: "Zorunlu",
          desc: "Her şubede sunulan ürünlerin alerjen matrisi oluşturulmalı ve şube bazlı mutfak çapraz temasları denetlenmelidir.",
        },
        {
          name: "Şubeler Arası Merkezi Kontrol",
          status: "Kritik",
          desc: "Aynı isimli ürün farklı şubelerde farklı tedarikçilerle hazırlanıyorsa, şube bazlı içerik doğrulaması yapılmalıdır.",
        },
        {
          name: "Yazılı / Dijital Alternatif Bildirim",
          status: "Zorunlu",
          desc: "Misafirin talep etmesi durumunda basılı doküman, masa üstü kartı veya pano üzerinden bilgilendirme yapılmalıdır.",
        },
      ],
      transitionNote:
        "Bölgesel zincirler, şube mutfaklarında reçete sapmalarını önlemek amacıyla merkezi bir POS ve menü yönetim altyapısıyla bu süreci yönetmelidir.",
    },
    {
      id: "tier-3",
      title: "Tüm Bağımsız Toplu Tüketim Yerleri",
      subtitle: "Tek şubeli restoranlar, butik kafeler, lokantalar, barlar ve oteller",
      effectiveDate: "31 Aralık 2027",
      status: "Genel Yürürlük",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      icon: UtensilsCrossed,
      summary:
        "Kapsam dışı kalan bağımsız işletmeler için genel geçiş süresi tamamlanacaktır. Alerjen bilgilendirmesi ise hali hazırda zaten zorunludur.",
      obligations: [
        {
          name: "14 Majör Alerjen Deklarasyonu",
          status: "Şu An Yürürlükte",
          desc: "Gıda alerjenlerinin bildirilmesi mevcut mevzuatta zaten zorunlu olup derhal eksiksiz uygulanmalıdır.",
        },
        {
          name: "Enerji Değeri (kcal & kJ)",
          status: "31 Aralık 2027'ye Kadar",
          desc: "Standart porsiyon enerji değerlerinin belirlenmesi ve menü formatına entegre edilmesi için tanınan nihai süredir.",
        },
        {
          name: "Ürün İçerik Şeffaflığı",
          status: "Zorunlu",
          desc: "Müşterinin sorusu halinde servis personelinin bilgi verebilmesi veya yazılı listenin sunulabilmesi şarttır.",
        },
        {
          name: "Erişilebilir Bilgilendirme",
          status: "Zorunlu",
          desc: "Dijital menü veya basılı menüde tüketiciyi yanıltmayacak net ifadeler kullanılmalıdır.",
        },
      ],
      transitionNote:
        "Önemli Hatırlatma: Alerjen bildirimi için 2027 yılı beklenemez; Türk Gıda Kodeksi uyarınca alerjen bilgisi sunma yükümlülüğü şu anda da yürürlüktedir.",
    },
  ];

  const current = TIERS[selectedTier];
  const CurrentIcon = current.icon;

  return (
    <section id="uygulama-takvimi" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-[#EA004B]" />
            Bölüm 2 · Yasal Yükümlülükler & Takvim
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            İşletmeler İçin Yasal Yükümlülükler ve Resmî Uygulama Takvimi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Türkiye&#39;de yürürlükteki gıda etiketleme ve toplu tüketim yönetmelikleri uyarınca 
            işletme ölçeğine göre belirlenen kademeli geçiş takvimi ve uyulması gereken zorunluluklar.
          </p>
        </div>

        {/* Timeline Tabs (3 Kademeli Buton) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            const isSelected = selectedTier === idx;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(idx as 0 | 1 | 2)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#12111A] text-white border-slate-900 shadow-xl"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-[#EA004B] text-white"
                        : "bg-white text-slate-700 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? "bg-[#EA004B]/20 text-rose-300 border-[#EA004B]/40"
                        : tier.statusColor
                    }`}
                  >
                    {tier.effectiveDate}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1 truncate">
                  {tier.title}
                </h3>
                <p
                  className={`text-xs line-clamp-2 ${
                    isSelected ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {tier.subtitle}
                </p>
                {isSelected && (
                  <motion.div
                    layoutId="active-tier-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#EA004B]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Tier Detailed Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#EA004B]">
                  Hedef Grup
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-bold text-slate-600">
                  Resmî Geçiş Tarihi: <strong className="text-slate-900">{current.effectiveDate}</strong>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {current.title}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${current.statusColor}`}>
                <Clock className="w-3.5 h-3.5" />
                {current.status}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 my-5 leading-relaxed">
            {current.summary}
          </p>

          {/* Obligations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {current.obligations.map((ob, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {ob.name}
                    </h4>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 flex-shrink-0">
                      {ob.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {ob.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition Notice Callout */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Mevzuat Notu: </strong>
              {current.transitionNote}
            </div>
          </div>
        </motion.div>

        {/* Resmî Kaynaklar & Yasal İnceleme Doğrulaması */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 flex-shrink-0">
              <Scale className="w-5 h-5 text-[#EA004B]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Resmî Mevzuat Dayanakları & Doğrulama Kaynakları
              </h4>
              <p className="text-[11px] text-slate-500">
                Türk Gıda Kodeksi Gıda Etiketleme ve Tüketicileri Bilgilendirme Yönetmeliği
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href="https://www.tarimorman.gov.tr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#EA004B] transition-colors"
            >
              <span>tarimorman.gov.tr</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.resmigazete.gov.tr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#EA004B] transition-colors"
            >
              <span>resmigazete.gov.tr</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.mevzuat.gov.tr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#EA004B] transition-colors"
            >
              <span>mevzuat.gov.tr</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
