"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import Image from "next/image";
import type { HeroSlide } from "@/lib/types";

function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

function SlideForm({
  slide,
  onChange,
  onImageUpload,
  uploading,
}: {
  slide: HeroSlide;
  onChange: (updated: HeroSlide) => void;
  onImageUpload: (slideId: string, file: File) => void;
  uploading: string | null;
}) {
  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors text-sm";

  return (
    <div className="space-y-4 p-4 bg-white/3 rounded-xl border border-white/8">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Ana Başlık *</label>
          <input
            type="text"
            value={slide.title}
            onChange={(e) => onChange({ ...slide, title: e.target.value })}
            className={inputClass}
            placeholder="Türkiye'nin En Akıllı"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Alt Başlık *</label>
          <input
            type="text"
            value={slide.subtitle}
            onChange={(e) => onChange({ ...slide, subtitle: e.target.value })}
            className={inputClass}
            placeholder="Restoran Yönetim Platformu"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">Açıklama</label>
        <textarea
          value={slide.description}
          onChange={(e) => onChange({ ...slide, description: e.target.value })}
          rows={2}
          className={inputClass + " resize-none"}
          placeholder="Kısa açıklama..."
        />
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">Rozet Metni</label>
        <input
          type="text"
          value={slide.badge}
          onChange={(e) => onChange({ ...slide, badge: e.target.value })}
          className={inputClass}
          placeholder="🚀 Yeni: AI Menü Stüdyo"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Birincil CTA Metni</label>
          <input
            type="text"
            value={slide.ctaText}
            onChange={(e) => onChange({ ...slide, ctaText: e.target.value })}
            className={inputClass}
            placeholder="Ücretsiz Demo İste"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Birincil CTA URL</label>
          <input
            type="text"
            value={slide.ctaUrl}
            onChange={(e) => onChange({ ...slide, ctaUrl: e.target.value })}
            className={inputClass}
            placeholder="#contact"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1">İkincil CTA Metni</label>
          <input
            type="text"
            value={slide.ctaSecondaryText}
            onChange={(e) => onChange({ ...slide, ctaSecondaryText: e.target.value })}
            className={inputClass}
            placeholder="Özellikleri Keşfet"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">İkincil CTA URL</label>
          <input
            type="text"
            value={slide.ctaSecondaryUrl}
            onChange={(e) => onChange({ ...slide, ctaSecondaryUrl: e.target.value })}
            className={inputClass}
            placeholder="#features"
          />
        </div>
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-xs text-slate-400 mb-2">Arka Plan Görseli</label>
        <div className="flex gap-3 items-start">
          <div className="flex-1">
            <input
              type="text"
              value={slide.image}
              onChange={(e) => onChange({ ...slide, image: e.target.value })}
              className={inputClass}
              placeholder="https://... veya aşağıdan dosya yükleyin"
            />
          </div>
          <label className="shrink-0 px-3 py-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-sm text-slate-300 cursor-pointer transition-all flex items-center gap-2">
            {uploading === slide.id ? (
              <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              "📤"
            )}
            Yükle
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onImageUpload(slide.id, file);
              }}
            />
          </label>
        </div>
        {slide.image && (
          <div className="mt-2 relative h-24 w-full rounded-lg overflow-hidden">
            <Image src={slide.image} alt="Preview" fill className="object-cover" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={slide.active}
            onChange={(e) => onChange({ ...slide, active: e.target.checked })}
            className="w-4 h-4 accent-amber-500"
          />
          <span className="text-sm text-slate-400">Aktif</span>
        </label>
      </div>
    </div>
  );
}

export default function AdminHeroPage() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        setSlides(data.hero || []);
        setLoading(false);
      });
  }, []);

  const handleImageUpload = async (slideId: string, file: File) => {
    setUploading(slideId);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url) {
      setSlides((prev) => prev.map((s) => s.id === slideId ? { ...s, image: data.url } : s));
    }
    setUploading(null);
  };

  const addSlide = () => {
    setSlides((prev) => [
      ...prev,
      {
        id: generateId(),
        title: "",
        subtitle: "",
        description: "",
        ctaText: "Ücretsiz Demo İste",
        ctaUrl: "#contact",
        ctaSecondaryText: "Özellikleri Keşfet",
        ctaSecondaryUrl: "#features",
        image: "",
        badge: "",
        order: prev.length + 1,
        active: true,
      },
    ]);
  };

  const removeSlide = (id: string) => {
    setSlides((prev) => prev.filter((s) => s.id !== id));
  };

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hero: slides }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-white">Hero & Slider</h1>
              <p className="text-slate-500 text-sm mt-1">Ana sayfanın slider slaytlarını yönetin</p>
            </div>
            <div className="flex gap-3">
              <button onClick={addSlide} className="px-4 py-2 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-sm text-slate-300 transition-all flex items-center gap-2">
                + Yeni Slayt
              </button>
              <button
                onClick={save}
                disabled={saving}
                className="px-5 py-2 rounded-xl font-bold text-[#0f172a] transition-all disabled:opacity-70 flex items-center gap-2 text-sm"
                style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
              >
                {saving ? <div className="w-4 h-4 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin" /> : null}
                {saved ? "✓ Kaydedildi" : "Kaydet"}
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-6">
              {slides.length === 0 ? (
                <div className="text-center py-16 glass border border-white/10 rounded-2xl">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="text-slate-400">Henüz slayt yok. Yeni slayt ekleyin.</p>
                </div>
              ) : (
                slides.map((slide, i) => (
                  <div key={slide.id} className="glass border border-white/10 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-white">{slide.title || "Başlıksız Slayt"}</span>
                        {!slide.active && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">Pasif</span>
                        )}
                      </div>
                      <button
                        onClick={() => removeSlide(slide.id)}
                        className="text-red-400/60 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-5">
                      <SlideForm
                        slide={slide}
                        onChange={(updated) =>
                          setSlides((prev) => prev.map((s) => s.id === updated.id ? updated : s))
                        }
                        onImageUpload={handleImageUpload}
                        uploading={uploading}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
