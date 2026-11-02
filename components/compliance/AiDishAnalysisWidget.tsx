"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  CheckCircle2,
  AlertTriangle,
  Scale,
  RefreshCw,
  ShieldCheck,
  ChefHat,
  Utensils,
  Flame,
  FileCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AiDishAnalysisWidget() {
  const [analyzed, setAnalyzed] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);

  const sampleDish = {
    name: "Tavuklu Kremalı Makarna",
    description: "Özel harmanlanmış tavuk göğsü dilimleri, krema, parmesan peyniri, sızma zeytinyağı ve taze baharatlar ile hazırlanan fettuccine makarna.",
    ingredients: [
      { name: "Tavuk Göğsü", allergen: null, role: "Protein Kaynağı" },
      { name: "Fettuccine Makarna", allergen: "Gluten İçeren Tahıllar", role: "Karbonhidrat (Buğday İrmiği)" },
      { name: "Krema (%35 Yağlı)", allergen: "Süt ve Süt Ürünleri", role: "Süt Yağı, Laktoz & Kazein" },
      { name: "Parmesan Peyniri", allergen: "Süt ve Süt Ürünleri", role: "Sert Peynir, Laktoz Türevi" },
      { name: "Sızma Zeytinyağı", allergen: null, role: "Bitkisel Yağ" },
      { name: "Baharatlar (Karabiber, Fesleğen)", allergen: null, role: "Aroma Verici" },
    ],
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setAnalyzed(false);
    setTimeout(() => {
      setIsSimulating(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <section id="yapay-zeka-analizi" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EA004B]" />
            Bölüm 9 · Yapay Zekâ ile Beslenme ve Alerjen Analizi
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Yapay Zekâ ile Reçete Taraması ve Alerjen Tespiti
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Oxonom AI Asistanı, menü açıklamalarınızı ve reçete bileşenlerinizi tarayarak olası alerjenleri 
            ve referans enerji değerlerini saniyeler içinde ön taslak olarak hazırlar.
          </p>
        </div>

        {/* Live Interactive Dish Breakdown Simulation */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                  Vaka İncelemesi Örneği
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Mutfak Reçete Girişi
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#EA004B]" />
                {sampleDish.name}
              </h3>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12111A] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin text-[#EA004B]" : ""}`} />
              <span>{isSimulating ? "AI Reçeteyi Tarıyor..." : "Analizi Yeniden Çalıştır"}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 my-4 leading-relaxed italic">
            &ldquo;{sampleDish.description}&rdquo;
          </p>

          {/* Ingredient Pills */}
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Tanımlanan Reçete Malzemeleri:
            </span>
            <div className="flex flex-wrap gap-2">
              {sampleDish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  {ing.name}
                </span>
              ))}
            </div>
          </div>

          {/* AI Analysis Result Board */}
          <AnimatePresence mode="wait">
            {analyzed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6 pt-6 border-t border-slate-200"
              >
                {/* Detected Allergens Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-100 text-[#EA004B] flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        Tespit Edilen Olası Majör Alerjenler (2 Kategori)
                      </h4>
                    </div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-50 text-[#EA004B] border border-rose-200">
                      Zorunlu Bildirim
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#FFF0F4] border border-[#EA004B]/20 text-xs">
                      <div className="font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                        <span>1. Gluten İçeren Tahıllar</span>
                        <span className="text-[10px] font-bold text-[#EA004B]">Makarna</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Fettuccine makarna hamurunda kullanılan buğday irmiği kaynaklıdır. Çölyak ve gluten hassasiyeti için etiketlenmelidir.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FFF0F4] border border-[#EA004B]/20 text-xs">
                      <div className="font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                        <span>7. Süt ve Süt Ürünleri</span>
                        <span className="text-[10px] font-bold text-[#EA004B]">Krema & Parmesan</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Krema ve parmesan peyniri süt proteini ve laktoz içerir. Laktoz intoleransı ve süt alerjisi için etiketlenmelidir.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Energy & Calorie Reference Estimation with Strict Disclaimer */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                        <Flame className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        Referans Enerji Değeri Simülasyonu (Standart 350g Porsiyon)
                      </h4>
                    </div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      Ön Taslak Değer
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center my-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-lg font-black text-slate-900">~685</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">kcal / Porsiyon</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-lg font-black text-slate-900">~2.865</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">kJ / Porsiyon</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-lg font-black text-slate-900">~38g</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Protein (Tavuk)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-lg font-black text-slate-900">~32g</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Yağ (Krema/Zeytinyağı)</div>
                    </div>
                  </div>

                  {/* CRITICAL LEGAL REQUIREMENT: NO BLIND CALORIE WITHOUT GRAMMAGE */}
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                    <Scale className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Mevzuat Uyarısı: </strong>
                      Gerçek porsiyon gramajı, kullanılan kremanın yağ oranı ve tedarikçi ürün değerleri girilmeden üretilen kalori değerleri kesin kabul edilemez. 
                      İşletmeler mutfakta standartlaşmış reçete gramajlarını esas almalıdır.
                    </div>
                  </div>
                </div>

                {/* Mandatory Chef/Manager Verification Stamp */}
                <div className="p-4 rounded-2xl bg-[#12111A] text-white border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">
                        Zorunlu İnsan Kontrolü ve Onay Kuralı
                      </h5>
                      <p className="text-[11px] text-slate-300">
                        Yapay zekâ tarafından oluşturulan analizler mutlaka şef, gıda mühendisi veya işletme yetkilisi tarafından doğrulanmalıdır.
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-rose-300 border border-white/10 flex-shrink-0">
                    <ChefHat className="w-4 h-4" />
                    <span>Şef Onayı Bekleniyor</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="py-12 text-center text-slate-500">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#EA004B] mb-2" />
                <span className="text-xs font-semibold">Reçete bileşenleri taranıyor...</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
