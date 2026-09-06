import { getSettings } from "@/lib/db";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import Link from "next/link";

export default async function AdminDashboard() {
  const settings = await getSettings();
  const activeSlides = settings.hero.filter((s) => s.active).length;
  const activeTestimonials = settings.testimonials.filter((t) => t.active).length;

  const cards = [
    {
      href: "/admin/hero",
      icon: "🎯",
      label: "Hero Slider",
      value: `${activeSlides} Slayt`,
      desc: "Aktif banner sayısı",
      color: "border-amber-500/30 hover:border-amber-500/60",
      badge: "text-amber-400",
    },
    {
      href: "/admin/seo",
      icon: "🔍",
      label: "SEO & OG",
      value: settings.seo.title ? "✓ Ayarlı" : "⚠ Boş",
      desc: "Meta etiketleri ve Open Graph",
      color: "border-blue-500/30 hover:border-blue-500/60",
      badge: "text-blue-400",
    },
    {
      href: "/admin/contact",
      icon: "📞",
      label: "İletişim",
      value: settings.contact.phone || "—",
      desc: "Telefon numarası",
      color: "border-green-500/30 hover:border-green-500/60",
      badge: "text-green-400",
    },
    {
      href: "/admin/testimonials",
      icon: "💬",
      label: "Yorumlar",
      value: `${activeTestimonials} Aktif`,
      desc: "Toplam yorum sayısı",
      color: "border-purple-500/30 hover:border-purple-500/60",
      badge: "text-purple-400",
    },
    {
      href: "/admin/media",
      icon: "🖼️",
      label: "Medya",
      value: "Görsel Ekle",
      desc: "Vercel Blob depolama",
      color: "border-pink-500/30 hover:border-pink-500/60",
      badge: "text-pink-400",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white mb-1">Dashboard</h1>
            <p className="text-slate-500">
              Hoş geldiniz! Son güncelleme:{" "}
              {settings.updatedAt
                ? new Date(settings.updatedAt).toLocaleString("tr-TR")
                : "—"}
            </p>
          </div>

          {/* Quick action cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`block glass border rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group ${card.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className={`font-bold text-lg ${card.badge}`}>{card.value}</div>
                    <div className="text-xs text-slate-600">{card.desc}</div>
                  </div>
                </div>
                <div className="font-semibold text-white">{card.label}</div>
                <div className="flex items-center gap-1 mt-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  Düzenle
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick info */}
          <div className="glass border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Hızlı Bilgi</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">Site Başlığı</span>
                <span className="text-white text-sm font-medium truncate max-w-xs text-right">{settings.seo.title || "—"}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">E-posta</span>
                <span className="text-white text-sm">{settings.contact.email || "—"}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">GEO Bölge</span>
                <span className="text-white text-sm">{settings.seo.geoRegion || "—"}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400 text-sm">OG Görseli</span>
                <span className={`text-sm ${settings.seo.ogImage ? "text-emerald-400" : "text-red-400"}`}>
                  {settings.seo.ogImage ? "✓ Ayarlı" : "⚠ Eksik"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
