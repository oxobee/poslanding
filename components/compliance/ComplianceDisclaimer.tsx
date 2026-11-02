"use client";

import React from "react";
import { AlertCircle, Scale, ShieldAlert, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ComplianceDisclaimer() {
  return (
    <section className="py-12 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-300 shadow-sm text-left relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Scale className="w-6 h-6 text-[#EA004B]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Bölüm 14 · Yasal Bilgilendirme & Sorumluluk Beyanı
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                Resmî Mevzuat ve Hukuki Uyarı
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bu sayfada yer alan bilgiler genel bilgilendirme amacıyla hazırlanmıştır. Gıda mevzuatı, işletme türüne, faaliyet kapsamına ve yürürlükteki yasal düzenlemelere göre farklı yükümlülükler içerebilir. İşletmelerin güncel resmî mevzuatı, T.C. Tarım ve Orman Bakanlığı tebliğlerini ve ilgili resmî kılavuzları düzenli olarak takip etmesi esastır. 
                <strong className="text-slate-900 font-semibold ml-1">
                  OxonomPOS, menü bilgilendirme ve veri yönetim süreçlerini kolaylaştırır; hukuki danışmanlık veya mevzuata otomatik uygunluk garantisi sunmaz.
                </strong>
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium">
                  Kaynaklar: T.C. Tarım ve Orman Bakanlığı & Resmî Gazete
                </span>
                <Link
                  href="/basvuru"
                  className="font-bold text-[#EA004B] hover:text-[#d40043] inline-flex items-center gap-1 transition-colors"
                >
                  <span>OxonomPOS Altyapısını İnceleyin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
