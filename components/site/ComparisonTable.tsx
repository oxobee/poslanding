"use client";

import React from "react";
import { Check, Minus } from "lucide-react";

export function ComparisonTable() {
  const categories = [
    {
      name: "TEMEL OPERASYON & MENÜ",
      rows: [
        { name: "Sınırsız QR Menü & Ürün Yönetimi", op: true, pro: true, ent: true },
        { name: "Masa & QR Kod Yönetimi", op: true, pro: true, ent: true },
        { name: "Masadan Sipariş & Mutfak Ekranı (KDS)", op: true, pro: true, ent: true },
        { name: "Şube Sayısı", op: "1 Şube", pro: "1 Şube", ent: "Sınırsız" },
      ],
    },
    {
      name: "ÖDEME, AÇIK HESAP VE AI",
      rows: [
        { name: "Online Ödeme Entegrasyonu*", op: false, pro: true, ent: true },
        { name: "Açık Hesap & Parçalı Ödeme", op: false, pro: true, ent: true },
        { name: "Self Servis QR Sipariş / Ödeme", op: false, pro: true, ent: true },
        { name: "oxonom pos AI Menü Aktarma", op: false, pro: true, ent: true },
        { name: "oxonom pos AI Rapor Asistanı", op: false, pro: true, ent: true },
      ],
    },
    {
      name: "YÖNETİM & RAPORLAMA",
      rows: [
        { name: "Raporlama Kapsamı", op: "Temel Günlük", pro: "Gelişmiş Tarih Bazlı", ent: "Şube Bazlı & Konsolide" },
        { name: "Kampanya ve İndirim Yönetimi", op: false, pro: true, ent: true },
      ],
    },
    {
      name: "PARTNER & KURULUM",
      rows: [
        { name: "Destek Seviyesi", op: "Standart Destek", pro: "Öncelikli Destek", ent: "7/24 SLA Destek" },
        { name: "Onboarding & Kurulum", op: "Online Dokümantasyon", pro: "Online Birebir Eğitim", ent: "Yerinde Kurulum & Eğitim" },
      ],
    },
  ];

  const renderCell = (val: boolean | string) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 inline-flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      ) : (
        <span className="text-slate-300">
          <Minus className="w-4 h-4 mx-auto" />
        </span>
      );
    }
    return <span className="font-medium text-slate-700">{val}</span>;
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Detaylı Paket Karşılaştırması
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Her paketin sunduğu özellikleri tek tabloda karşılaştırın
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4 font-semibold w-2/5">ÖZELLİKLER</th>
              <th className="py-3 px-4 font-semibold text-center w-1/5">OPERASYON</th>
              <th className="py-3 px-4 font-semibold text-center w-1/5 text-[#EA004B]">PROFESYONEL</th>
              <th className="py-3 px-4 font-semibold text-center w-1/5">KURUMSAL</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <React.Fragment key={cat.name}>
                <tr className="bg-slate-50/70">
                  <td colSpan={4} className="py-2.5 px-4 font-bold text-[11px] text-[#EA004B] tracking-wider uppercase">
                    {cat.name}
                  </td>
                </tr>
                {cat.rows.map((row) => (
                  <tr key={row.name} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                    <td className="py-3 px-4 text-slate-700 font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {renderCell(row.op)}
                    </td>
                    <td className="py-3 px-4 text-center bg-rose-50/30 font-medium">
                      {renderCell(row.pro)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {renderCell(row.ent)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-slate-400 mt-5 text-center">
        * Online ödeme servis sağlayıcı komisyon oranları hariçtir. Tüm fiyatlara KDV dahil değildir.
      </p>
    </div>
  );
}
