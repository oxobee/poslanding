"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, ArrowRight, Building, User, Layers, FileText } from "lucide-react";
import toast from "react-hot-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export function DemoModal({ isOpen, onClose, initialPackage = "Profesyonel Paket - ₺3.500 + KDV" }: DemoModalProps) {
  const [formData, setFormData] = useState({
    restaurantName: "",
    branchName: "Merkez Şube",
    city: "İstanbul",
    district: "Kadıköy",
    contactName: "",
    phone: "",
    email: "",
    selectedPackage: initialPackage,
    tableCount: "24",
    referralCode: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.restaurantName || !formData.contactName || !formData.phone) {
      toast.error("Lütfen zorunlu alanları doldurun.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Başvurunuz başarıyla alındı! Ekibimiz 24 saat içinde sizinle iletişime geçecek.");
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-50/60 via-white to-white">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" /> İşletme Başvurusu
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  İşletme Başvuru Formu
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    Başvurunuz Başarıyla Alındı!
                  </h4>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Sayın <strong>{formData.contactName}</strong>, <strong>{formData.restaurantName}</strong> için yaptığınız başvuru operasyon ekibimize iletilmiştir. Menünüzün sisteme aktarımı ve kurulum süreci için 24 saat içinde sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={handleReset}
                    className="tap-effect mt-4 px-7 py-3 bg-[#EA004B] text-white font-bold rounded-xl hover:bg-[#D00042] transition shadow-md shadow-[#EA004B]/25 text-xs"
                  >
                    Tamam
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: İşletme Bilgileri */}
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#EA004B] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#EA004B] text-white flex items-center justify-center text-[10px] font-black">1</span>
                      İşletme Bilgileri
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          İşletme / Restoran Adı <span className="text-[#EA004B]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.restaurantName}
                          onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                          placeholder="Örn: Kadıköy Burger & Co."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Şube Adı (İsteğe Bağlı)
                        </label>
                        <input
                          type="text"
                          value={formData.branchName}
                          onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                          placeholder="Merkez Şube"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Şehir <span className="text-[#EA004B]">*</span>
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-white"
                        >
                          <option value="İstanbul">İstanbul</option>
                          <option value="Ankara">Ankara</option>
                          <option value="İzmir">İzmir</option>
                          <option value="Antalya">Antalya</option>
                          <option value="Bursa">Bursa</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          İlçe <span className="text-[#EA004B]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          placeholder="Kadıköy, Beşiktaş, vb."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Yetkili İletişim Bilgileri */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#EA004B] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#EA004B] text-white flex items-center justify-center text-[10px] font-black">2</span>
                      Yetkili İletişim Bilgileri
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Yetkili Ad Soyad <span className="text-[#EA004B]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Adınız ve Soyadınız"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Telefon Numarası <span className="text-[#EA004B]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0 (5xx) xxx xx xx"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          E-Posta Adresi
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="yetkili@restoran.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Paket & Operasyon */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#EA004B] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#EA004B] text-white flex items-center justify-center text-[10px] font-black">3</span>
                      Paket & Operasyon
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          İlgilendiğiniz Paket <span className="text-[#EA004B]">*</span>
                        </label>
                        <select
                          value={formData.selectedPackage}
                          onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-white font-medium"
                        >
                          <option value="Kurucu İşletme Paketi - ₺990 + KDV">Kurucu İşletme Paketi - ₺990 + KDV (Lansman Özel)</option>
                          <option value="Operasyon Paketi - ₺2.000 + KDV">Operasyon Paketi - ₺2.000 + KDV</option>
                          <option value="Profesyonel Paket - ₺3.500 + KDV">Profesyonel Paket - ₺3.500 + KDV (En Popüler)</option>
                          <option value="Kurumsal Paket - Teklif Al">Kurumsal Paket - Özel Teklif</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Masa Sayısı
                        </label>
                        <input
                          type="text"
                          value={formData.tableCount}
                          onChange={(e) => setFormData({ ...formData, tableCount: e.target.value })}
                          placeholder="Örn: 24"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Ek Detaylar & Referans */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#EA004B] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#EA004B] text-white flex items-center justify-center text-[10px] font-black">4</span>
                      Ek Detaylar & Referans
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Referans Kodu (Varsa)
                      </label>
                      <input
                        type="text"
                        value={formData.referralCode}
                        onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                        placeholder="Örn: PTR-2026"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        oxonom pos iş ortağınızın referans kodu varsa buraya yazabilirsiniz.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Eklemek İstedikleriniz / Mutfak Tipi (Opsiyonel)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Mevcut sisteminiz, mutfak yapınız veya özel isteklerinizi buraya yazabilirsiniz..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA004B] focus:border-transparent transition bg-slate-50/40 focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-shine-container tap-effect w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-xl shadow-[#EA004B]/25 transition-all text-sm cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>İşleniyor...</span>
                      ) : (
                        <>
                          <span>İşletme Başvurusunu Tamamla</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-3 font-normal">
                      Başvurarak Kullanım Koşulları ve KVKK aydınlatma metnini kabul etmiş olursunuz.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
