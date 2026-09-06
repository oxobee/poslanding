"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import type { Testimonial } from "@/lib/types";

function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => setTestimonials(data.testimonials || []));
  }, []);

  const add = () => {
    setTestimonials((prev) => [
      ...prev,
      {
        id: generateId(),
        name: "",
        company: "",
        role: "",
        content: "",
        rating: 5,
        avatar: "",
        order: prev.length + 1,
        active: true,
      },
    ]);
  };

  const remove = (id: string) => setTestimonials((prev) => prev.filter((t) => t.id !== id));

  const update = (id: string, changes: Partial<Testimonial>) =>
    setTestimonials((prev) => prev.map((t) => t.id === id ? { ...t, ...changes } : t));

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testimonials }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors text-sm";

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-white">Yorumlar</h1>
              <p className="text-slate-500 text-sm mt-1">Müşteri testimoniallarını yönetin</p>
            </div>
            <div className="flex gap-3">
              <button onClick={add} className="px-4 py-2 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-sm text-slate-300 transition-all">
                + Yorum Ekle
              </button>
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
          </div>

          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <div className="text-center py-16 glass border border-white/10 rounded-2xl">
                <div className="text-4xl mb-3">💬</div>
                <p className="text-slate-400">Henüz yorum yok. Ekleyin!</p>
              </div>
            ) : (
              testimonials.map((t, i) => (
                <div key={t.id} className="glass border border-white/10 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="text-sm font-medium text-white">{t.name || "İsimsiz Yorum"}</span>
                      {!t.active && <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">Pasif</span>}
                    </div>
                    <button onClick={() => remove(t.id)} className="text-red-400/60 hover:text-red-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Ad Soyad *</label>
                        <input type="text" value={t.name} onChange={(e) => update(t.id, { name: e.target.value })} className={inputClass} placeholder="Mehmet Yılmaz" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Şirket</label>
                        <input type="text" value={t.company} onChange={(e) => update(t.id, { company: e.target.value })} className={inputClass} placeholder="Lezzet Durağı" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Rol / Unvan</label>
                        <input type="text" value={t.role} onChange={(e) => update(t.id, { role: e.target.value })} className={inputClass} placeholder="İşletme Sahibi" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Yorum Metni *</label>
                      <textarea value={t.content} onChange={(e) => update(t.id, { content: e.target.value })} rows={2} className={inputClass + " resize-none"} placeholder="Yorum metni..." />
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Yıldız Puanı</label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => update(t.id, { rating: star })}
                              className={`text-xl transition-transform hover:scale-125 ${star <= t.rating ? "text-amber-400" : "text-slate-700"}`}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer mt-4">
                        <input type="checkbox" checked={t.active} onChange={(e) => update(t.id, { active: e.target.checked })} className="w-4 h-4 accent-amber-500" />
                        <span className="text-sm text-slate-400">Aktif</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
