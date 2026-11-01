"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

export default function BasvuruPage() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    branchName: "Merkez Şube",
    city: "İstanbul",
    district: "Kadıköy",
    contactName: "",
    phone: "",
    email: "",
    selectedPackage: "Profesyonel Paket - ₺2.999 + KDV",
    tableCount: "24",
    referralCode: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("paket");
      if (p === "kurucu-isletme") {
        setFormData(prev => ({ ...prev, selectedPackage: "Kurucu İşletme Paketi - ₺1.999 + KDV" }));
      } else if (p === "kurulum-tasarim") {
        setFormData(prev => ({ ...prev, selectedPackage: "Kurulum ve Özel Tasarım - ₺12.000 + KDV" }));
      } else if (p === "medya-hizmeti") {
        setFormData(prev => ({ ...prev, selectedPackage: "OxonomPos Medya Hizmeti - ₺20.000 + KDV / ay" }));
      } else if (p === "kurumsal") {
        setFormData(prev => ({ ...prev, selectedPackage: "Kurumsal Paket - Teklif Al" }));
      } else if (p?.includes("profesyonel")) {
        setFormData(prev => ({ ...prev, selectedPackage: "Profesyonel Paket - ₺2.999 + KDV" }));
      }
    }
  }, []);

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

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-gradient-to-b from-rose-50/40 via-white to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Info & Value Props */}
            <div className="lg:col-span-5 space-y-7 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F4] text-[#EA004B] border border-[#EA004B]/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> İşletme Başvurusu
              </span>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]"
                style={{ letterSpacing: "-0.035em" }}
              >
                Restoranınızı <br />
                <span className="text-[#EA004B]">oxonom pos</span> ile güçlendirin.
              </h1>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Restoran bilgilerinizi iletin; ekibimiz menünüzü, masa planınızı ve operasyon akışınızı 24 saat içinde sisteme hazırlasın.
              </p>

              {/* 3 Step Cards */}
              <div className="space-y-4 pt-2">
                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F4] text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 mb-1">Hızlı Ön İnceleme</h2>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Başvurunuz aynı gün içinde operasyon ekibimizce incelenir ve işletme hedefleriniz netleştirilir.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F4] text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 mb-1">Menü ve Masa Kurulumu</h2>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Ürün listeniz, opsiyonlarınız, mutfak istasyonlarınız ve masa planınız oxonom pos ekibince sisteme girilir.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F4] text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 mb-1">Sabit ve Şeffaf Fiyat</h2>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Cironuzdan pay veya gizli maliyetler yok. Yalnızca bütçenizi bildiğiniz sabit aylık paket ücreti ödersiniz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kurucu Program Notice - Eye-catching, theme-aligned and updated to 1.999 TL */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF0F4] via-white to-rose-50/70 border-2 border-[#EA004B]/35 rounded-3xl p-6 sm:p-7 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA004B]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#EA004B] text-white shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Lansman Özel · Son 3 Kontenjan
                  </span>
                  <span className="text-xs font-black text-[#EA004B] bg-white px-2 py-0.5 rounded-md border border-[#EA004B]/20">
                    ₺1.999 + KDV / ay
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 tracking-tight mb-1.5">
                  KURUCU İŞLETME PROGRAMI DEVAM EDİYOR
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3.5">
                  İlk 10 onaylanan restorana özel aylık <strong>1.999 TL + KDV</strong> sabit fiyat garantisi. Başvurunuzda otomatik değerlendirilir ve kontenjan ayrılır.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 font-semibold border-t border-[#EA004B]/15 pt-3">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA004B]" /> Ömür Boyu Sabit Fiyat
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA004B]" /> Sıfır Komisyon Garantisi
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Complete 4-Step Application Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-2xl">
              <div className="mb-7 pb-6 border-b border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  İşletme Başvuru Formu
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Restoran bilgilerinizi doldurun; 24 saat içinde menünüzü aktaralım ve kurulumu başlatalım.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-14 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Başvurunuz Başarıyla Alındı!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Sayın <strong>{formData.contactName}</strong>, <strong>{formData.restaurantName}</strong> için başvurunuz ekibimize ulaştı. Kurulum ve menü aktarımı için en geç 24 saat içinde sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="tap-effect mt-5 px-7 py-3 bg-[#EA004B] text-white font-bold rounded-xl hover:bg-[#D00042] transition shadow-md shadow-[#EA004B]/25 text-xs"
                  >
                    Yeni Başvuru Yap
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
                          <option value="Kurucu İşletme Paketi - ₺1.999 + KDV">Kurucu İşletme Paketi - ₺1.999 + KDV (Lansman Özel)</option>
                          <option value="Profesyonel Paket - ₺2.999 + KDV">Profesyonel Paket - ₺2.999 + KDV (En Popüler)</option>
                          <option value="Kurulum ve Özel Tasarım - ₺12.000 + KDV">Kurulum ve Özel Tasarım - ₺12.000 + KDV (Kampanyalı)</option>
                          <option value="OxonomPos Medya Hizmeti - ₺20.000 + KDV / ay">OxonomPos Medya Hizmeti - ₺20.000 + KDV / ay</option>
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
                      <p className="text-[11px] text-slate-500 mt-1 font-normal">
                        oxonom pos iş ortağınızın referans kodu varsa buraya yazabilirsiniz.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Eklemek İstedikleriniz / Mutfak Tipi (Opsiyonel)
                      </label>
                      <textarea
                        rows={3}
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
                      className="btn-shine-container tap-effect w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#EA004B] hover:bg-[#D00042] active:bg-[#B8003A] shadow-xl shadow-[#EA004B]/25 transition-all text-sm cursor-pointer disabled:opacity-70"
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
