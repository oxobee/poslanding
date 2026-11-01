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
  Sparkles,
  ShoppingBag,
  Plus,
  Flame,
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
    { id: 7, name: "Masa 7", status: "served", amount: 1150, guests: 4, time: "34 dk" },
    { id: 8, name: "Masa 8", status: "kitchen", amount: 380, guests: 1, time: "05 dk" },
  ];

  return (
    <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
      {/* Ambient Floating Glow Behind Mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/10 via-[#EA004B]/15 to-purple-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Floating Micro-Badges for Screen Presentation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute -left-8 top-16 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-xl items-center gap-3 z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          <Zap className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Mutfak Senkronu</span>
          <span className="text-xs font-extrabold text-slate-900">&lt; 1.5 sn Anlık İletim</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute -right-8 bottom-16 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-xl items-center gap-3 z-20"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center font-bold">
          <Flame className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Masa Devir Hızı</span>
          <span className="text-xs font-extrabold text-slate-900">%35 Artış</span>
        </div>
      </motion.div>

      {/* Main Screen Container Frame */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
        {/* Mockup Top Window Header Bar */}
        <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[11px] font-semibold text-slate-500 hidden sm:inline">
              oxonom pos — Restoran Operasyon Paneli
            </span>
          </div>

          {/* Interactive Screen Switcher Tabs */}
          <div className="flex items-center bg-white border border-slate-200/90 rounded-xl p-1 shadow-xs">
            <button
              onClick={() => setActiveScreen("pos")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer tap-effect ${
                activeScreen === "pos"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Kasa & Masalar</span>
            </button>
            <button
              onClick={() => setActiveScreen("kds")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer tap-effect ${
                activeScreen === "kds"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>Mutfak (KDS)</span>
            </button>
            <button
              onClick={() => setActiveScreen("qr")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer tap-effect ${
                activeScreen === "qr"
                  ? "bg-[#EA004B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>QR Menü</span>
            </button>
          </div>
        </div>

        {/* Screen Showcase Viewport */}
        <div className="p-4 sm:p-6 bg-slate-50/50 min-h-[380px]">
          <AnimatePresence mode="wait">
            {/* VIEW 1: POS & Live Tables */}
            {activeScreen === "pos" && (
              <motion.div
                key="pos-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5"
              >
                {/* Tables Grid (Left 7 Cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Salon Masaları (8 Masa)</span>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
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

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {tables.map((tbl) => {
                      const isSelected = selectedTable === tbl.id;
                      return (
                        <button
                          key={tbl.id}
                          onClick={() => setSelectedTable(tbl.id)}
                          className={`p-3 rounded-2xl text-left border transition-all cursor-pointer tap-effect relative ${
                            isSelected
                              ? "bg-white border-2 border-[#EA004B] shadow-md shadow-[#EA004B]/10"
                              : "bg-white border-slate-200/80 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-slate-900">{tbl.name}</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                tbl.status === "empty"
                                  ? "bg-slate-300"
                                  : tbl.status === "billing"
                                  ? "bg-[#EA004B] animate-ping"
                                  : tbl.status === "kitchen"
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                              }`}
                            />
                          </div>

                          {tbl.status === "empty" ? (
                            <span className="text-[11px] text-slate-400 block py-1 font-medium">Masa Boş</span>
                          ) : (
                            <div>
                              <div className="text-xs font-black text-slate-900">
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
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Aktif Masalar</span>
                        <span className="font-bold text-slate-800">6 / 8 Masa (%75)</span>
                      </div>
                      <div className="h-6 w-px bg-slate-200" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Anlık Açık Hesap</span>
                        <span className="font-bold text-[#EA004B]">₺5.170,00</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      Canlı Senkronize
                    </span>
                  </div>
                </div>

                {/* Selected Table Adisyon Drawer (Right 5 Cols) */}
                <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4.5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                      <div>
                        <span className="text-xs font-bold text-slate-900">Masa 4 — Adisyon</span>
                        <span className="text-[10px] text-slate-500 block">3 Misafir · Masa QR Siparişi</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF0F4] text-[#EA004B]">
                        Hesap Bekliyor
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">2x Gurme Burger Menü</span>
                          <span className="text-[10px] text-slate-500 block">Orta pişmiş, soğan yok</span>
                        </div>
                        <span className="font-bold text-slate-900">₺640</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">1x Trüflü Parmesan Patates</span>
                        </div>
                        <span className="font-bold text-slate-900">₺180</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">3x Ev Yapımı Limonata</span>
                          <span className="text-[10px] text-slate-500 block">Nanesiz</span>
                        </div>
                        <span className="font-bold text-slate-900">₺270</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-800">1x Sıcak Çikolatalı Sufle</span>
                        </div>
                        <span className="font-bold text-slate-900">₺160</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 mt-4 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Ara Toplam</span>
                        <span>₺1.250,00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>KDV (%10)</span>
                        <span>₺170,00</span>
                      </div>
                      <div className="flex justify-between text-slate-900 font-extrabold text-sm pt-1 border-t border-slate-100">
                        <span>Toplam Tutar</span>
                        <span className="text-[#EA004B]">₺1.420,00</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                    <button className="py-2 px-3 rounded-xl text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition text-center tap-effect">
                      Parçalı Hesap
                    </button>
                    <button className="py-2 px-3 rounded-xl text-[11px] font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition text-center tap-effect">
                      Hesabı Kapat
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: KDS Kitchen Display System */}
            {activeScreen === "kds" && (
              <motion.div
                key="kds-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {/* Kitchen Ticket 1 */}
                <div className="bg-white border-2 border-[#EA004B] rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                      <div>
                        <span className="text-xs font-black text-[#EA004B]">Masa 4</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1082</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF0F4] text-[#EA004B] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 04:15 dk
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <div className="font-bold text-slate-900">2x Burger Gurme</div>
                        <div className="text-[10px] font-semibold text-[#EA004B] bg-[#FFF0F4] px-1.5 py-0.5 rounded inline-block mt-0.5">
                          Not: Soğansız, ekstra cheddar
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">1x Trüflü Patates</div>
                        <div className="text-[10px] text-slate-500">Baharatlı sos ayrı</div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2 bg-[#EA004B] text-white rounded-xl text-xs font-bold hover:bg-[#D00042] transition tap-effect">
                    Hazırlandı — Garsona Bildir
                  </button>
                </div>

                {/* Kitchen Ticket 2 */}
                <div className="bg-white border border-amber-300 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                      <div>
                        <span className="text-xs font-black text-amber-700">Masa 7</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1080</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 08:30 dk
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <div className="font-bold text-slate-900">1x Izgara Somon Fileto</div>
                        <div className="text-[10px] text-slate-500">Kuşkonmaz garnitürlü</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">2x Akdeniz Salatası</div>
                        <div className="text-[10px] text-slate-500">Soslar masaya ayrı</div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2 bg-amber-500 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition tap-effect">
                    Hazırlanıyor (Şef 2)
                  </button>
                </div>

                {/* Kitchen Ticket 3 */}
                <div className="bg-white border border-emerald-300 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                      <div>
                        <span className="text-xs font-black text-emerald-700">Masa 2</span>
                        <span className="text-[10px] text-slate-400 block">Sipariş #1078</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Serviste
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-500 line-through">
                      <div>2x Dana Antrikot (Orta İyi)</div>
                      <div>1x Fırın Patates Püresi</div>
                    </div>
                  </div>

                  <div className="mt-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold text-center">
                    Masa Servisi Tamamlandı
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: Guest QR Menu Experience */}
            {activeScreen === "qr" && (
              <motion.div
                key="qr-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-md mx-auto bg-white border border-slate-200/90 rounded-3xl p-5 shadow-lg"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#FFF0F4] text-[#EA004B] flex items-center justify-center font-bold text-xs">
                      O
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">oxonom pos Menü</span>
                      <span className="text-[10px] text-slate-500">Masa 4 · Hızlı Sipariş</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Canlı Menü
                  </span>
                </div>

                {/* Categories */}
                <div className="flex gap-2 py-3 overflow-x-auto text-[11px] font-semibold text-slate-600">
                  <span className="px-3 py-1 rounded-full bg-[#EA004B] text-white flex-shrink-0">Popüler</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">Burgerler</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">İçecekler</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">Tatlılar</span>
                </div>

                {/* Products Mini list */}
                <div className="space-y-2.5">
                  <div className="border border-slate-100 rounded-xl p-2.5 flex items-center justify-between gap-3 hover:border-slate-200">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Gurme Füme Burger</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">180g dana köfte, cheddar, karamelize soğan</div>
                      <div className="text-xs font-extrabold text-[#EA004B] mt-0.5">₺320</div>
                    </div>
                    <button className="w-7 h-7 rounded-lg bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#D00042] transition">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-2.5 flex items-center justify-between gap-3 hover:border-slate-200">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Trüflü Çıtır Patates</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">Trüf yağı, rendelenmiş parmesan peyniri</div>
                      <div className="text-xs font-extrabold text-[#EA004B] mt-0.5">₺180</div>
                    </div>
                    <button className="w-7 h-7 rounded-lg bg-[#EA004B] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#D00042] transition">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Sepetim (3 Ürün)</span>
                    <span className="text-xs font-bold text-slate-900">₺820,00</span>
                  </div>
                  <button className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-[#EA004B] hover:bg-[#D00042] transition tap-effect">
                    Sipariş Ver
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
