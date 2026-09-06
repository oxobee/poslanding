"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { href: "/admin/dashboard", icon: "📊", label: "Dashboard" },
  { href: "/admin/hero", icon: "🎯", label: "Hero & Slider" },
  { href: "/admin/seo", icon: "🔍", label: "SEO & Open Graph" },
  { href: "/admin/contact", icon: "📞", label: "İletişim Bilgileri" },
  { href: "/admin/testimonials", icon: "💬", label: "Yorumlar" },
  { href: "/admin/media", icon: "🖼️", label: "Medya Galerisi" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  return (
    <aside className={`flex flex-col border-r border-white/8 bg-[#080d1a] transition-all duration-300 ${collapsed ? "w-16" : "w-64"} shrink-0`}>
      {/* Logo */}
      <div className="flex items-center gap-3 p-4 border-b border-white/8 h-16">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[#0f172a] font-black text-sm shrink-0">
          O
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <div className="font-black text-sm text-white truncate">OxonomPos</div>
            <div className="text-xs text-slate-500 truncate">Admin Panel</div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-slate-600 hover:text-slate-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7M19 19l-7-7 7-7"} />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                active
                  ? "bg-amber-500/15 border border-amber-500/30 text-amber-400"
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              {!collapsed && <span className="text-sm font-medium truncate">{item.label}</span>}
              {active && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/8 space-y-1">
        <Link
          href="/"
          target="_blank"
          title={collapsed ? "Siteyi Gör" : undefined}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all"
        >
          <span className="text-lg">🌐</span>
          {!collapsed && <span className="text-sm font-medium">Siteyi Gör</span>}
        </Link>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          title={collapsed ? "Çıkış Yap" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <span className="text-lg">🚪</span>
          {!collapsed && <span className="text-sm font-medium">{loggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}</span>}
        </button>
      </div>
    </aside>
  );
}
