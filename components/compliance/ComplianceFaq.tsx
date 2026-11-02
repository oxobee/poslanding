"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
  category: "Genel & Yasal" | "Alerjen & Kalori" | "QR & Teknoloji" | "OxonomPOS";
}

const FAQS: FaqItem[] = [
  {
    q: "Restoranlarda menü bilgilendirmesi neden önemlidir?",
    a: "Tüketicilerin satın aldıkları gıdaların içeriğini, besin değerlerini ve alerjenlerini bilmesi temel bir tüketici hakkıdır. Yanlış ya da eksik bilgi verilmesi, alerjik bünyeye sahip bireylerde ölümcül sağlık riskleri oluşturabileceği gibi işletmeler için de ağır idari para cezaları ve itibar kaybı doğurur.",
    category: "Genel & Yasal",
  },
  {
    q: "Restoran menüsünde ürün bileşenleri belirtilmeli midir?",
    a: "Evet. Mevzuat gereğince tüketicinin talep etmesi halinde ürünün hazırlanmasında kullanılan tüm bileşenlerin açıkça sunulabilmesi şarttır. Menü kartında ürünün ana yapısını oluşturan temel malzemeler özetlenmeli, detaylı reçete bileşenleri ise dijital menü veya basılı içerik dokümanında hazır tutulmalıdır.",
    category: "Genel & Yasal",
  },
  {
    q: "14 majör alerjen nelerdir?",
    a: "Türk Gıda Kodeksi uyarınca bildirilmesi zorunlu 14 majör alerjen şunlardır: 1. Gluten içeren tahıllar, 2. Kabuklular, 3. Yumurta, 4. Balık, 5. Yer fıstığı, 6. Soya fasulyesi, 7. Süt ve süt ürünleri (laktoz dahil), 8. Sert kabuklu meyveler (ağaç yemişleri), 9. Kereviz, 10. Hardal, 11. Susam, 12. Kükürt dioksit ve sülfitler, 13. Acı bakla (lüpen), 14. Yumuşakçalar.",
    category: "Alerjen & Kalori",
  },
  {
    q: "Alerjen bilgileri müşterilere nasıl sunulmalıdır?",
    a: "Alerjen bilgisi sipariş verilmeden önce müşterinin doğrudan görebileceği şekilde sunulmalıdır. Masadaki QR menüde ürün adının yanında alerjen ikonları/etiketleri yer almalı, ayrıca QR kod kullanamayan misafirler için işletmede basılı bir alerjen matrisi veya eğitimli servis personeli hazır bulunmalıdır.",
    category: "Alerjen & Kalori",
  },
  {
    q: "Menüde kalori bilgisi bulunması zorunlu mudur?",
    a: "Yürürlükteki geçiş takvimine göre; ulusal zincir restoranlar için 1 Temmuz 2026, aynı ilde 3 veya daha fazla şubesi bulunan zincirler için 31 Aralık 2026 ve diğer tüm toplu tüketim yerleri için 31 Aralık 2027 tarihinden itibaren porsiyon bazında enerji değerinin (kcal & kJ) sunulması zorunludur.",
    category: "Alerjen & Kalori",
  },
  {
    q: "Enerji değeri kcal ve kJ olarak mı gösterilmelidir?",
    a: "Evet. Mevzuata göre enerji değeri hem kilokalori (kcal) hem de uluslararası birim olan kilojoule (kJ) cinsinden birlikte sunulmalıdır (Örnek: 450 kcal / 1.883 kJ). OxonomPOS kcal değerini girdiğinizde kJ karşılığını otomatik olarak hesaplar.",
    category: "Alerjen & Kalori",
  },
  {
    q: "QR menü kullanmak yasal bilgilendirme için tek başına yeterli midir?",
    a: "Hayır. QR menü bilgilerin güncel tutulması ve zengin sunumu için en pratik araçtır; ancak tek başına tüm yasal yükümlülüğü karşılamaz. Akıllı telefonu olmayan, şarjı biten veya internete erişemeyen müşteriler için işletmede basılı alternatif dokümanların da hazır bulundurulması yasal zorunluluktur.",
    category: "QR & Teknoloji",
  },
  {
    q: "QR kod kullanamayan müşterilere nasıl bilgi verilmelidir?",
    a: "İşletme içerisinde basılı A4 içerik sayfaları, masa üstü bilgilendirme kartları, duvara asılı menü panoları veya eğitimli salon personelinin yazılı alerjen listesini masaya getirmesi yoluyla eksiksiz bilgi verilmelidir.",
    category: "QR & Teknoloji",
  },
  {
    q: "Yapay zekâ ile ürünlerin kalori değerleri hesaplanabilir mi?",
    a: "Yapay zekâ, standart malzeme ve reçete veritabanlarından yararlanarak referans kalori tahminleri üretebilir. Ancak mutfaktaki gerçek porsiyon gramajı, kullanılan yağ miktarı ve tedarikçi marka değerleri girilmeden AI tek başına kesin kalori üretemez. Çıkan değerler işletme şefi tarafından doğrulanmalıdır.",
    category: "QR & Teknoloji",
  },
  {
    q: "AI tarafından tespit edilen alerjenler kesin bilgi midir?",
    a: "Hayır. Yapay zekâ ürün açıklaması ve malzeme listesine bakarak yüksek doğrulukla olası alerjenleri işaretler; ancak endüstriyel sosların içerisindeki gizli katkıları veya mutfaktaki çapraz bulaşma risklerini bilemez. AI analizleri daima insan onayına tabidir.",
    category: "QR & Teknoloji",
  },
  {
    q: "Vegan ürünler alerjen içermez mi?",
    a: "Kesinlikle hayır! Vegan bir ürün hiçbir hayvansal katkı içermez ancak gluten, yer fıstığı, soya, ceviz, badem, kereviz ve susam gibi en tehlikeli majör alerjenleri bol miktarda içerebilir. Vegan ve alerjensiz kavramları asla birbiriyle karıştırılmamalıdır.",
    category: "Genel & Yasal",
  },
  {
    q: "Glutensiz ürünler hangi koşullarda bu şekilde tanımlanabilir?",
    a: "Bir ürünün menüde 'Glutensiz' olarak etiketlenebilmesi için son üründeki gluten miktarının 20 mg/kg (20 ppm) altında olduğunun akredite laboratuvar testleriyle doğrulanmış olması ve çapraz temas riskinin tamamen izole edilmiş olması şarttır. Aksi halde 'Glutensiz malzemelerle hazırlandı (çapraz bulaşma riski vardır)' ifadesi kullanılmalıdır.",
    category: "Genel & Yasal",
  },
  {
    q: "Çok şubeli restoranlar ürün bilgilerini nasıl yönetmelidir?",
    a: "Çok şubeli işletmeler, standart reçeteleri merkezden belirleyen fakat her şubenin yerel tedarikçi ve mutfak farklılıklarını kontrol etmesine imkan tanıyan merkezi bir bulut POS yazılımı (OxonomPOS) kullanmalıdır.",
    category: "OxonomPOS",
  },
  {
    q: "Ürün reçetesi değiştiğinde menü bilgileri de güncellenmeli midir?",
    a: "Kesinlikle evet. Mutfakta kullanılan peynirin, unun veya sosun markası ya da içeriği değiştiğinde; içerik, alerjen ve kalori değerleri anında güncellenmelidir. Dijital menü bu güncellemeyi tek tıkla canlıya alarak işletmeyi cezai sorumluluktan korur.",
    category: "Genel & Yasal",
  },
  {
    q: "Oxonom Menu yasal uyumluluk sürecine nasıl yardımcı olur?",
    a: "Oxonom Menu; 14 majör alerjenin ürünlere etiketlenmesini, porsiyon enerji (kcal & kJ) değerlerinin otomatik hesaplanmasını, AI reçete analizini ve denetim anında tek tıkla basılı resmi PDF/A4 dökümü alınmasını sağlayarak uyum sürecini zahmetsiz ve hatasız hale getirir.",
    category: "OxonomPOS",
  },
  {
    q: "OxonomPOS kullanmak bütün yasal yükümlülükleri otomatik olarak karşılar mı?",
    a: "OxonomPOS, işletmelerin ürün bilgilerini düzenlemesine ve müşterilere sunmasına yardımcı olan bir dijital yönetim aracıdır. Yazılım kullanımı, işletmenin mevzuata uyum sorumluluğunu ve sisteme girilen bilgilerin doğruluğunu kontrol etme yükümlülüğünü ortadan kaldırmaz. Bilgilerin doğruluğu işletmenin kendi yasal sorumluluğundadır.",
    category: "OxonomPOS",
  },
];

export function ComplianceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState<string>("Tümü");
  const [query, setQuery] = useState<string>("");

  const categories = ["Tümü", "Genel & Yasal", "Alerjen & Kalori", "QR & Teknoloji", "OxonomPOS"];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCat === "Tümü" || faq.category === activeCat;
    const matchesQuery =
      faq.q.toLowerCase().includes(query.toLowerCase()) ||
      faq.a.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="sss" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#EA004B]" />
            Bölüm 13 · Sıkça Sorulan Sorular
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Menü Yasal Uyumluluğu Hakkında Merak Edilenler
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Restoran, kafe ve toplu tüketim yerlerinin menü şeffaflık yasası ve uygulama süreçleriyle ilgili en çok sorduğu soruların kapsamlı yanıtları.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCat === cat
                    ? "bg-[#EA004B] text-white"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Sorularda ara..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#EA004B]"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLastQuestion = faq.q.includes("bütün yasal yükümlülükleri otomatik olarak karşılar mı");
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-slate-50/90 border-[#EA004B]/30 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {index + 1}. {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#EA004B]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                        {isLastQuestion && (
                          <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-[11px] font-semibold text-rose-950 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#EA004B] flex-shrink-0" />
                            <span>OxonomPOS yasal mevzuata uyumu kolaylaştırır; hukuki danışmanlık yerine geçmez.</span>
                          </div>
                        )}
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
