"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import Image from "next/image";
import type { SEOSettings } from "@/lib/types";

export default function AdminSEOPage() {
  const [seo, setSeo] = useState<SEOSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "og" | "twitter" | "geo">("general");

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => setSeo(data.seo));
  }, []);

  const save = async () => {
    if (!seo) return;
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seo }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleImageUpload = async (field: "ogImage" | "twitterImage", file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url && seo) {
      setSeo({ ...seo, [field]: data.url });
    }
    setUploading(false);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors text-sm";

  const tabs = [
    { id: "general", label: "Genel SEO", icon: "🔍" },
    { id: "og", label: "Open Graph", icon: "📊" },
    { id: "twitter", label: "Twitter Card", icon: "🐦" },
    { id: "geo", label: "GEO & Schema", icon: "🌍" },
  ] as const;

  if (!seo) {
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
              <h1 className="text-3xl font-black text-white">SEO & Open Graph</h1>
              <p className="text-slate-500 text-sm mt-1">Meta etiketleri, Open Graph ve GEO ayarları</p>
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

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500/15 border border-amber-500/40 text-amber-400"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          <div className="glass border border-white/10 rounded-2xl p-6 space-y-5">
            {/* GENERAL */}
            {activeTab === "general" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Site Başlığı (title)</label>
                  <input type="text" value={seo.title} onChange={(e) => setSeo({ ...seo, title: e.target.value })} className={inputClass} placeholder="OxonomPos — Türkiye'nin..." />
                  <p className="text-xs text-slate-600 mt-1">{seo.title.length}/70 karakter (önerilen: 50-70)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Meta Description</label>
                  <textarea value={seo.description} onChange={(e) => setSeo({ ...seo, description: e.target.value })} rows={3} className={inputClass + " resize-none"} placeholder="Site açıklaması..." />
                  <p className="text-xs text-slate-600 mt-1">{seo.description.length}/160 karakter (önerilen: 150-160)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Anahtar Kelimeler</label>
                  <input type="text" value={seo.keywords} onChange={(e) => setSeo({ ...seo, keywords: e.target.value })} className={inputClass} placeholder="restoran, pos, qr menü..." />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Canonical URL</label>
                    <input type="url" value={seo.canonicalUrl} onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })} className={inputClass} placeholder="https://oxonompos.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Robots</label>
                    <select value={seo.robots} onChange={(e) => setSeo({ ...seo, robots: e.target.value })} className={inputClass + " cursor-pointer"}>
                      <option value="index, follow">index, follow</option>
                      <option value="noindex, nofollow">noindex, nofollow</option>
                      <option value="index, nofollow">index, nofollow</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Yazar</label>
                    <input type="text" value={seo.author} onChange={(e) => setSeo({ ...seo, author: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Tema Rengi</label>
                    <div className="flex gap-2">
                      <input type="color" value={seo.themeColor} onChange={(e) => setSeo({ ...seo, themeColor: e.target.value })} className="w-12 h-11 rounded-xl border border-white/10 bg-white/5 cursor-pointer" />
                      <input type="text" value={seo.themeColor} onChange={(e) => setSeo({ ...seo, themeColor: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={seo.schemaOrg} onChange={(e) => setSeo({ ...seo, schemaOrg: e.target.checked })} className="w-4 h-4 accent-amber-500" />
                    <span className="text-sm text-slate-300">Schema.org JSON-LD ekle</span>
                  </label>
                </div>
              </>
            )}

            {/* OPEN GRAPH */}
            {activeTab === "og" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">OG Title</label>
                  <input type="text" value={seo.ogTitle} onChange={(e) => setSeo({ ...seo, ogTitle: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">OG Description</label>
                  <textarea value={seo.ogDescription} onChange={(e) => setSeo({ ...seo, ogDescription: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">OG URL</label>
                  <input type="url" value={seo.ogUrl} onChange={(e) => setSeo({ ...seo, ogUrl: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">OG Görseli (1200×630 önerilir)</label>
                  <div className="flex gap-3 items-start">
                    <input type="text" value={seo.ogImage} onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })} className={inputClass} placeholder="https://..." />
                    <label className="shrink-0 px-3 py-3 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-sm text-slate-300 cursor-pointer transition-all flex items-center gap-2">
                      {uploading ? <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" /> : "📤"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload("ogImage", f); }} />
                    </label>
                  </div>
                  {seo.ogImage && (
                    <div className="mt-3 relative h-40 rounded-xl overflow-hidden border border-white/10">
                      <Image src={seo.ogImage} alt="OG Preview" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                        <div>
                          <div className="text-white font-bold text-sm">{seo.ogTitle}</div>
                          <div className="text-slate-300 text-xs truncate">{seo.ogDescription}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* TWITTER */}
            {activeTab === "twitter" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Twitter Card Tipi</label>
                  <select value={seo.twitterCard} onChange={(e) => setSeo({ ...seo, twitterCard: e.target.value as "summary" | "summary_large_image" })} className={inputClass + " cursor-pointer"}>
                    <option value="summary_large_image">Summary Large Image</option>
                    <option value="summary">Summary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Twitter Title</label>
                  <input type="text" value={seo.twitterTitle} onChange={(e) => setSeo({ ...seo, twitterTitle: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Twitter Description</label>
                  <textarea value={seo.twitterDescription} onChange={(e) => setSeo({ ...seo, twitterDescription: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Twitter Görseli</label>
                  <div className="flex gap-3 items-start">
                    <input type="text" value={seo.twitterImage} onChange={(e) => setSeo({ ...seo, twitterImage: e.target.value })} className={inputClass} placeholder="https://..." />
                    <label className="shrink-0 px-3 py-3 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-sm text-slate-300 cursor-pointer transition-all flex items-center gap-2">
                      {uploading ? <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" /> : "📤"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload("twitterImage", f); }} />
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* GEO */}
            {activeTab === "geo" && (
              <>
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-2">
                  <p className="text-blue-400 text-sm">
                    🌍 GEO meta etiketleri, arama motorlarının sitenizin coğrafi konumunu anlamasına yardımcı olur.
                    Yerel SEO için önemlidir.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">GEO Bölge (geo.region)</label>
                    <input type="text" value={seo.geoRegion} onChange={(e) => setSeo({ ...seo, geoRegion: e.target.value })} className={inputClass} placeholder="TR-34" />
                    <p className="text-xs text-slate-600 mt-1">Örn: TR-34 (İstanbul), TR-06 (Ankara)</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">GEO Yer Adı (geo.placename)</label>
                    <input type="text" value={seo.geoPlacename} onChange={(e) => setSeo({ ...seo, geoPlacename: e.target.value })} className={inputClass} placeholder="Istanbul, Turkey" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">GEO Koordinat (geo.position)</label>
                    <input type="text" value={seo.geoPosition} onChange={(e) => setSeo({ ...seo, geoPosition: e.target.value })} className={inputClass} placeholder="41.0082;28.9784" />
                    <p className="text-xs text-slate-600 mt-1">Format: enlem;boylam</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">ICBM</label>
                    <input type="text" value={seo.icbm} onChange={(e) => setSeo({ ...seo, icbm: e.target.value })} className={inputClass} placeholder="41.0082, 28.9784" />
                    <p className="text-xs text-slate-600 mt-1">Format: enlem, boylam</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
