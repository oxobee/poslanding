"use client";

import React, { useState } from "react";
import {
  Flame,
  Zap,
  Scale,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Tag,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function NutritionAndLabelsSection() {
  const [kcalInput, setKcalInput] = useState<number>(450);

  // 1 kcal = 4.184 kJ
  const calculatedKj = Math.round(kcalInput * 4.184);

  const DIETARY_LABELS = [
    {
      label: "Vegan",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      definition: "Hiçbir hayvansal ürün (et, balık, kümes hayvanı, süt, peynir, tereyağı, yumurta, bal) içermez.",
      allergenWarning: "ÖNEMLİ: Vegan olması alerjensiz olduğu anlamına GELMEZ. Yer fıstığı, soya, gluten, sert kabuklu yemişler ve susam içerebilir!",
    },
    {
      label: "Vejetaryen",
      color: "bg-green-50 text-green-800 border-green-200",
      definition: "Et, kümes hayvanı ve balık içermez; ancak süt ürünleri ve yumurta içerebilir.",
      allergenWarning: "Süt ve yumurta majör alerjenleri barındırabilir; menüde açıkça belirtilmelidir.",
    },
    {
      label: "Glutensiz",
      color: "bg-amber-50 text-amber-800 border-amber-200",
      definition: "Son üründe gluten miktarının 20 mg/kg (20 ppm) altında olduğunu laboratuvar analiziyle belgeleyen gıdalardır.",
      allergenWarning: "Mutfakta un tozu uçuşması dahi 20 ppm sınırını aşar. Çapraz temas önlenemiyorsa 'Glutensiz' yerine 'Gluten içermeyen malzemelerle hazırlandı' denmelidir.",
    },
    {
      label: "Laktozsuz",
      color: "bg-blue-50 text-blue-800 border-blue-200",
      definition: "Sütteki laktoz şekerinin laktaz enzimiyle parçalandığı veya hiç süt şekeri içermeyen ürünlerdir.",
      allergenWarning: "Laktozsuz ürünler kazein ve peynir altı suyu süt proteinlerini hala içerebilir. Süt proteini alerjisi olanlar için tehlikelidir.",
    },
    {
      label: "Şekersiz / İlave Şeker İçermez",
      color: "bg-purple-50 text-purple-800 border-purple-200",
      definition: "'Şekersiz' 100g'da en fazla 0.5g şeker demektir. 'İlave şeker içermez' ise sonradan şeker veya şurup eklenmediği anlamına gelir.",
      allergenWarning: "Doğal meyve şekeri içeren ürünler 'ilave şeker içermez' olabilir ama 'şekersiz' olmayabilir; bu iki kavram karıştırılmamalıdır.",
    },
    {
      label: "Yüksek Proteinli",
      color: "bg-rose-50 text-rose-800 border-rose-200",
      definition: "Ürünün toplam enerji değerinin en az %20'sinin proteinden sağlandığı beyanlardır.",
      allergenWarning: "Protein tozu veya soya izolatı eklenmişse ilgili alerjenler mutlaka etiketlenmelidir.",
    },
  ];

  return (
    <section id="enerji-ve-etiketler" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#EA004B]" />
            Bölüm 4 & 6 · Enerji Bildirimi ve Diyet Etiketleri
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Enerji (kcal & kJ) Bildirimi ve Doğru Beslenme Etiketleri
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mevzuat uyarınca kalori ve enerji birimlerinin sunulma kuralları ile 
            tüketicileri yanıltmadan kullanılması gereken diyet etiketleri.
          </p>
        </div>

        {/* 1. Calorie / Energy Converter & Legal Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Enerji Değeri Sunumu: kcal ve kJ Zorunluluğu
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Beslenme mevzuatında halk arasında &ldquo;kalori&rdquo; olarak bilinen değer, bilimsel olarak 
              <strong className="text-slate-900 font-bold"> kilokalori (kcal)</strong> ve uluslararası standart olan 
              <strong className="text-slate-900 font-bold"> kilojoule (kJ)</strong> cinsinden birlikte gösterilmelidir. 
              Dönüşüm sabiti: <strong>1 kcal = 4,184 kJ</strong> olarak hesaplanır.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Porsiyon veya 100g/ml Bazında Sunum
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Enerji değeri ürünün tek porsiyonu başına (ör. 1 Porsiyon / 320g için 540 kcal / 2.259 kJ) veya standart 100g/100ml başına açıkça yazılmalıdır.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Zorunlu Bildirim vs. İsteğe Bağlı Bildirim
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong className="text-slate-900">Yasal Olarak Zorunlu:</strong> Enerji Değeri (kcal & kJ). <br />
                    <strong className="text-slate-700">İsteğe Bağlı (Tavsiye Edilen):</strong> Protein, Yağ, Doymuş Yağ, Karbonhidrat, Şeker, Lif ve Tuz değerleri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Converter Widget */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#EA004B]" />
                İnteraktif Enerji Dönüştürücü
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                Resmî Formül
              </span>
            </div>

            <label className="block text-xs font-bold text-slate-700 mb-2">
              Porsiyon Kalori Değerini Girin (kcal):
            </label>
            <input
              type="number"
              min={10}
              max={3000}
              step={10}
              value={kcalInput}
              onChange={(e) => setKcalInput(Number(e.target.value) || 0)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-black text-lg focus:outline-none focus:border-[#EA004B] mb-4"
            />

            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 mb-4">
              <div className="text-[11px] font-bold text-[#EA004B] uppercase tracking-wider mb-1">
                Menüde Gösterilecek Yasal İfade:
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900">
                {kcalInput.toLocaleString("tr-TR")} kcal / {calculatedKj.toLocaleString("tr-TR")} kJ
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                (1 porsiyon üzerinden hesaplanmıştır)
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              OxonomPOS menü panelinde sadece kcal değerini girdiğinizde, sistem arka planda resmi mevzuat katsayısını uygulayarak kJ değerini menüye otomatik olarak ekler.
            </p>
          </div>
        </div>

        {/* 2. Dietary Labels Matrix & Vegan vs Allergen Distinction */}
        <div>
          <div className="text-left mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#EA004B] text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              Bölüm 6 · Beslenme ve Yaşam Tarzı Etiketleri
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900">
              Vegan, Vejetaryen ve Diğer Etiketlerin Yasal Sınırları
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Etiketlerin yanlış veya yanıltıcı kullanımı tüketicilerin sağlığını doğrudan riske atar.
            </p>
          </div>

          {/* Crucial Callout: Vegan != Allergen-Free */}
          <div className="p-5 rounded-2xl bg-[#12111A] text-white border border-white/10 mb-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Hayati Ayrım: Bir Ürünün Vegan Olması Alerjensiz Olduğu Anlamına Gelmez!
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pek çok tüketici &ldquo;Vegan&rdquo; etiketini güvenli bir alerjen filtresi zannetmektedir. 
                Oysa vegan bir salata ya da burger; yer fıstığı, ceviz, soya, gluten ve susam gibi ölümcül alerjenleri yüksek miktarda içerebilir. 
                İşletmeler vegan ibaresinin yanına mutlaka ürünün içerdiği alerjenleri de açıkça eklemekle yükümlüdür.
              </p>
            </div>
          </div>

          {/* Cards of 6 Labels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIETARY_LABELS.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between text-left"
              >
                <div>
                  <span className={`inline-block text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-3 ${item.color}`}>
                    {item.label}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {item.definition}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 leading-normal">
                  <strong className="text-slate-900 font-bold">Yasal Dikkat: </strong>
                  {item.allergenWarning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
