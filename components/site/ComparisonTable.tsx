"use client";

import React from "react";
import { Check, Minus } from "lucide-react";

export function ComparisonTable() {
  const categories = [
    {
      name: "TEMEL RESTORAN, MENÜ & KDS",
      rows: [
        { name: "Sınırsız QR Menü & Ürün / Kategori Yönetimi", founder: true, pro: true, ent: true },
        { name: "Masaya Özel QR Kod Yönetimi & Canlı Sipariş", founder: true, pro: true, ent: true },
        { name: "Mutfak Ekranı (KDS) & İstasyon Ayrıştırma", founder: true, pro: true, ent: true },
        { name: "Porsiyon, Sos, Varyasyon & Alerjen Yönetimi", founder: true, pro: true, ent: true },
        { name: "Masa Birleştirme, Taşıma ve Doluluk Haritası", founder: true, pro: true, ent: true },
        { name: "Dahil Olan Şube Sayısı", founder: "1 Şube", pro: "1 Şube", ent: "Sınırsız Şube" },
      ],
    },
    {
      name: "ÖDEME, AÇIK HESAP VE AI ARAÇLARI",
      rows: [
        { name: "Açık Hesap / Masa Bakiyesi Yönetimi", founder: true, pro: true, ent: true },
        { name: "Kişi Başı Bölüşme & Parçalı Hesap Tahsilatı", founder: true, pro: true, ent: true },
        { name: "Online Ödeme Entegrasyonu", founder: true, pro: true, ent: true },
        { name: "Self Servis Masadan QR Ödeme", founder: true, pro: true, ent: true },
        { name: "oxonom pos AI Menü Aktarma Asistanı", founder: true, pro: true, ent: true },
        { name: "oxonom pos AI Rapor & Ciro Asistanı", founder: false, pro: true, ent: true },
        { name: "Kampanya, İndirim ve Kupon Yönetimi", founder: false, pro: true, ent: true },
      ],
    },
    {
      name: "YÖNETİM, ANALİTİK VE ŞUBE KAPSAMI",
      rows: [
        { name: "Raporlama Kapsamı", founder: "Temel Günlük", pro: "Gelişmiş Tarih Bazlı", ent: "Şube Bazlı & Konsolide" },
        { name: "Çoklu Şube & Merkezi Menü Yönetimi", founder: false, pro: false, ent: true },
        { name: "Gelişmiş Rol, Yetki ve Personel Kısıtlamaları", founder: false, pro: false, ent: true },
        { name: "Özel ERP & POS Entegrasyonu", founder: false, pro: false, ent: true },
      ],
    },
    {
      name: "KURULUM, DESTEK VE MEDYA HİZMETLERİ",
      rows: [
        { name: "Müşteri Destek Seviyesi", founder: "VIP Destek", pro: "Öncelikli 7/24 Destek", ent: "Özel SLA & Hesap Yöneticisi" },
        { name: "İlk Kurulum ve Menü Girişi", founder: "24 Saatte Dahil", pro: "Online Birebir Eğitim", ent: "Yerinde Kurulum & Eğitim" },
        { name: "Kurulum ve Özel Tasarım Paketi", founder: "Opsiyonel (₺12.000)", pro: "Opsiyonel (₺12.000)", ent: "Pakete Dahil" },
        { name: "OxonomPos Medya Hizmeti (Fotoğraf & Sosyal Medya)", founder: "Opsiyonel (₺20.000/ay)", pro: "Opsiyonel (₺20.000/ay)", ent: "Özel Kapsam" },
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
    return <span className="font-semibold text-slate-700">{val}</span>;
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Detaylı Paket Karşılaştırması
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          İhtiyacınıza en uygun oxonom pos paketini ve hizmetlerini tek tabloda inceleyin
        </p>
      </div>

      <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
        <table className="w-full min-w-[620px] text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4 font-semibold w-2/5">ÖZELLİKLER</th>
              <th className="py-3 px-4 font-semibold text-center w-1/5">
                <span className="block text-slate-900 font-extrabold">KURUCU İŞLETME</span>
                <span className="text-[10px] text-emerald-600 font-bold lowercase">₺1.999/ay</span>
              </th>
              <th className="py-3 px-4 font-semibold text-center w-1/5 text-[#EA004B] bg-rose-50/50 rounded-t-xl">
                <span className="block text-[#EA004B] font-black">PROFESYONEL</span>
                <span className="text-[10px] text-[#EA004B] font-bold lowercase">₺2.999/ay</span>
              </th>
              <th className="py-3 px-4 font-semibold text-center w-1/5">
                <span className="block text-slate-900 font-extrabold">KURUMSAL</span>
                <span className="text-[10px] text-slate-500 font-bold lowercase">özel teklif</span>
              </th>
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
                      {renderCell(row.founder)}
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
    </div>
  );
}
