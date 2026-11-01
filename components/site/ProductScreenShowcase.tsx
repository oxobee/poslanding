"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ChefHat,
  Receipt,
  Clock,
  CheckCircle2,
  Users,
  CreditCard,
  Plus,
  Zap,
} from "lucide-react";

export function ProductScreenShowcase() {
  const [activeScreen, setActiveScreen] = useState<"pos" | "kds" | "qr">("pos");
  const [selectedTable, setSelectedTable] = useState<number>(4);

  const tables = [
    { id: 1, name: "Masa 1", status: "empty", amount: 0, guests: 0, time: "Boş" },
    { id: 2, name: "Masa 2", status: "served", amount: 540, guests: 2, time: "28 dk" },
    { id: 3, name: "Masa 3", status: "kitchen", amount: 920, guests: 4, time: "12 dk" },
    { id: 4, name: "Masa 4", status: "billing", amount: 1420, guests: 3, time: "45 dk" },
    { id: 5, name: "Masa 5", status: "empty", amount: 0, guests: 0, time: "Boş" },
    { id: 6, name: "Masa 6", status: "kitchen", amount: 760, guests: 2, time: "08 dk" },
  ];

  return (
    <div className="relative isolate max-w-4xl mx-auto mt-10 sm:mt-12 w-full">
      {/* Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/10 via-[#EA004B]/12 to-rose-500/5 rounded-3xl blur-xl -z-10 pointer-events-none" />

      {/* Main Screen Container Frame */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden text-left">
        {/* Mockup Top Window Header Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3.5 sm:px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          {/* Traffic Lights & Title */}
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
              <span className="ml-1.5 sm:ml-2 text-xs font-bold text-slate-700">
                oxonom pos <span className="text-slate-400 font-normal">/</span> Operasyon Paneli
              </span>
            </div>
            {/* Live Indicator on small screen */}
            <span className="sm:hidden flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Canlı
            </span>
          </div>

          {/* Interactive Screen Switcher Tabs */}
          <div className="grid grid-cols-3 sm:flex items-center bg-white border border-slate-200/90 rounded-xl p-1 shadow-xs gap-1">
            <button
              onClick={() => setActiveScreen("pos")}
              className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeScreen === "pos"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Monitor className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="sm:inline hidden">Masalar & Kasa</span>
              <span className="sm:hidden inline">Masalar</span>
            </button>
            <button
              onClick={() => setActiveScreen("kds")}
              className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeScreen === "kds"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <ChefHat className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="sm:inline hidden">Mutfak (KDS)</span>
              <span className="sm:hidden inline">Mutfak</span>
            </button>
            <button
              onClick={() => setActiveScreen("qr")}
              className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeScreen === "qr"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="sm:inline hidden">QR Menü</span>
              <span className="sm:hidden inline">QR</span>
            </button>
          </div>
        </div>

        {/* Screen Showcase Viewport */}
        <div className="p-3.5 sm:p-6 bg-slate-50/40">
          {/* VIEW 1: POS & Live Tables */}
          {activeScreen === "pos" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
                {/* Tables Grid (Left 7 Cols) */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-extrabold text-slate-900">Salon Masaları (6 Masa)</span>
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Servis
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500" /> Mutfak
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#EA004B]" /> Hesap
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    {tables.map((tbl) => {
                      const isSelected = selectedTable === tbl.id;
                      return (
                        <button
                          key={tbl.id}
                          onClick={() => setSelectedTable(tbl.id)}
                          className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-white border-2 border-[#EA004B] shadow-sm"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-slate-900">{tbl.name}</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                tbl.status === "empty"
                                  ? "bg-slate-300"
                                  : tbl.status === "billing"
                                  ? "bg-[#EA004B]"
                                  : tbl.status === "kitchen"
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                              }`}
                            />
                          </div>

                          {tbl.status === "empty" ? (
                            <span className="text-[11px] text-slate-400 block py-1 font-medium">Boş</span>
                          ) : (
                            <div>
                              <div className="text-xs font-extrabold text-slate-900">
                                ₺{tbl.amount.toLocaleString("tr-TR")}
                              </div>
                              <div className="text-[10px] text-slate-500 flex items-center justify-between mt-1">
                                <span>{tbl.guests} Kişi</span>
                                <span>{tbl.time}</span>
                              </div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Summary Bar */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Aktif Masalar</span>
                        <span className="font-bold text-slate-800">4 / 6 Masa</span>
                      </div>
                      <div className="h-6 w-px bg-slate-200" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Açık Hesap</span>
                        <span className="font-bold text-[#EA004B]">₺3.640,00</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      Canlı Senkronize
                    </span>
                  </div>
                </div>

                {/* Selected Table Adisyon Drawer (Right 5 Cols) */}
                <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5">
                      <div>
                        <span className="text-xs font-bold text-slate-900">Masa 4 — Adisyon</span>
                        <span className="text-[10px] text-slate-500 block">3 Misafir · QR Sipariş</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF0F4] text-[#EA004B]">
                        Hesap Bekliyor
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">2x Gurme Burger</span>
                          <span className="text-[10px] text-slate-500 block">Orta pişmiş, soğan yok</span>
                        </div>
                        <span className="font-bold text-slate-900">₺640</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">1x Trüflü Patates</span>
                        </div>
                        <span className="font-bold text-slate-900">₺180</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">3x Ev Yapımı Limonata</span>
                        </div>
                        <span className="font-bold text-slate-900">₺270</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">1x Sufle</span>
                        </div>
                        <span className="font-bold text-slate-900">₺160</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-2.5 mt-3 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Ara Toplam</span>
                        <span>₺1.250,00</span>
                      </div>
                      <div className="flex justify-between text-slate-900 font-black text-sm pt-1 border-t border-slate-100">
                        <span>Toplam Tutar</span>
                        <span className="text-[#EA004B]">₺1.420,00</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-100">
                    <button className="py-2 px-3 rounded-xl text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition text-center cursor-pointer">
                      Parçalı Hesap
                    </button>
                    <button className="py-2 px-3 rounded-xl text-[11px] font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition text-center cursor-pointer">
                      Hesabı Kapat
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: KDS Kitchen Display System */}
            {activeScreen === "kds" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Kitchen Ticket 1 */}
                <div className="bg-white border-2 border-[#EA004B] rounded-2xl p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                      <div>
                        <span className="text-xs font-black text-[#EA004B]">Masa 4</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1082</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF0F4] text-[#EA004B] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 04:15 dk
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="font-bold text-slate-900">2x Gurme Burger</div>
                        <div className="text-[10px] font-semibold text-[#EA004B] bg-[#FFF0F4] px-1.5 py-0.5 rounded inline-block mt-0.5">
                          Not: Soğansız
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">1x Trüflü Patates</div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2 bg-[#EA004B] text-white rounded-xl text-xs font-bold hover:bg-[#D00042] transition cursor-pointer">
                    Hazırlandı
                  </button>
                </div>

                {/* Kitchen Ticket 2 */}
                <div className="bg-white border border-amber-300 rounded-2xl p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                      <div>
                        <span className="text-xs font-black text-amber-700">Masa 3</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1080</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 08:30 dk
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="font-bold text-slate-900">1x Izgara Somon</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">2x Akdeniz Salata</div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2 bg-amber-500 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition cursor-pointer">
                    Hazırlanıyor
                  </button>
                </div>

                {/* Kitchen Ticket 3 */}
                <div className="bg-white border border-emerald-300 rounded-2xl p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                      <div>
                        <span className="text-xs font-black text-emerald-700">Masa 2</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1078</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Serviste
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-400 line-through">
                      <div>2x Dana Antrikot</div>
                      <div>1x Patates Püresi</div>
                    </div>
                  </div>

                  <div className="mt-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold text-center">
                    Tamamlandı
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: Guest QR Menu Experience */}
            {activeScreen === "qr" && (
              <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center font-bold text-xs">
                      O
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">oxonom pos Menü</span>
                      <span className="text-[10px] text-slate-500">Masa 4 · Canlı Sipariş</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Açık
                  </span>
                </div>

                <div className="flex gap-1.5 py-2.5 overflow-x-auto text-[11px] font-semibold text-slate-600">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EA004B] text-white flex-shrink-0">Popüler</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">Burgerler</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">İçecekler</span>
                </div>

                <div className="space-y-2">
                  <div className="border border-slate-100 rounded-xl p-2 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Gurme Füme Burger</div>
                      <div className="text-xs font-extrabold text-[#EA004B] mt-0.5">₺320</div>
                    </div>
                    <button className="w-6 h-6 rounded-lg bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#D00042] transition cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="border border-slate-100 rounded-xl p-2 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Trüflü Çıtır Patates</div>
                      <div className="text-xs font-extrabold text-[#EA004B] mt-0.5">₺180</div>
                    </div>
                    <button className="w-6 h-6 rounded-lg bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#D00042] transition cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Sepetim</span>
                    <span className="text-xs font-bold text-slate-900">₺500,00</span>
                  </div>
                  <button className="py-1.5 px-3.5 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition cursor-pointer">
                    Sipariş Ver
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
