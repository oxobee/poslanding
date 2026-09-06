"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import type { ContactSettings } from "@/lib/types";

export default function AdminContactPage() {
  const [contact, setContact] = useState<ContactSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => setContact(data.contact));
  }, []);

  const save = async () => {
    if (!contact) return;
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors text-sm";

  if (!contact) {
    return (
      <div className="flex h-screen overflow-hidden text-white">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-white">İletişim Bilgileri</h1>
              <p className="text-slate-500 text-sm mt-1">Telefon, e-posta, adres ve sosyal medya</p>
            </div>
            <button
              onClick={save}
              disabled={saving}
              className="px-5 py-2 rounded-xl font-bold text-[#0f172a] transition-all disabled:opacity-70 flex items-center gap-2 text-sm"
              style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
            >
              {saving && <div className="w-4 h-4 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin" />}
              {saved ? "✓ Kaydedildi" : "Kaydet"}
            </button>
          </div>

          <div className="space-y-6">
            {/* Phones */}
            <div className="glass border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">📞 Telefon</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Birincil Telefon</label>
                  <input type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={inputClass} placeholder="+90 212 000 00 00" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">İkincil Telefon</label>
                  <input type="tel" value={contact.phone2} onChange={(e) => setContact({ ...contact, phone2: e.target.value })} className={inputClass} placeholder="+90 212 000 00 01" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">WhatsApp Numarası</label>
                  <input type="tel" value={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })} className={inputClass} placeholder="+90 555 000 00 00" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">E-posta</label>
                  <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={inputClass} placeholder="info@oxonompos.com" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">📍 Adres</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-400 mb-1.5">Sokak Adresi</label>
                  <input type="text" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })} className={inputClass} placeholder="Levent Mah. Büyükdere Cad. No:1" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Şehir</label>
                  <input type="text" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })} className={inputClass} placeholder="İstanbul" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Ülke</label>
                  <input type="text" value={contact.country} onChange={(e) => setContact({ ...contact, country: e.target.value })} className={inputClass} placeholder="Türkiye" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-400 mb-1.5">Google Maps Embed URL</label>
                  <input type="url" value={contact.mapUrl} onChange={(e) => setContact({ ...contact, mapUrl: e.target.value })} className={inputClass} placeholder="https://maps.google.com/maps?..." />
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="glass border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🕐 Çalışma Saatleri</h2>
              <input type="text" value={contact.workingHours} onChange={(e) => setContact({ ...contact, workingHours: e.target.value })} className={inputClass} placeholder="Pazartesi – Cuma: 09:00 – 18:00" />
            </div>

            {/* Social */}
            <div className="glass border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🔗 Sosyal Medya</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: "linkedin" as const, icon: "in", label: "LinkedIn", placeholder: "https://linkedin.com/company/..." },
                  { key: "instagram" as const, icon: "📷", label: "Instagram", placeholder: "https://instagram.com/..." },
                  { key: "twitter" as const, icon: "𝕏", label: "Twitter / X", placeholder: "https://twitter.com/..." },
                  { key: "youtube" as const, icon: "▶", label: "YouTube", placeholder: "https://youtube.com/..." },
                ].map((social) => (
                  <div key={social.key}>
                    <label className="block text-sm text-slate-400 mb-1.5">
                      <span className="font-medium">{social.icon}</span> {social.label}
                    </label>
                    <input
                      type="url"
                      value={contact[social.key]}
                      onChange={(e) => setContact({ ...contact, [social.key]: e.target.value })}
                      className={inputClass}
                      placeholder={social.placeholder}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
