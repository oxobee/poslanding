import Link from "next/link";
import type { ContactSettings } from "@/lib/types";

interface FooterProps {
  contact: ContactSettings;
}

export function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-navy-950 font-black text-lg">
                O
              </div>
              <div>
                <span className="font-black text-xl text-white">Oxonom<span className="gradient-text">Pos</span></span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Türkiye&apos;nin yapay zeka destekli restoran yönetim platformu.
              50+ özellik, gerçek zamanlı yönetim.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 border border-white/10 transition-all text-xs font-bold">
                  in
                </a>
              )}
              {contact.instagram && (
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/30 border border-white/10 transition-all">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Özellikler</h3>
            <ul className="space-y-2">
              {["QR Self-Ordering", "AI Stüdyo", "Mutfak Ekranı (KDS)", "Müşteri CRM", "Z Raporu & Analitik", "Personel Yönetimi"].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-slate-500 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">İşletme Tipleri</h3>
            <ul className="space-y-2">
              {["Restoran & Bistrolar", "Kafe & Pastaneler", "Fast-Food & QSR", "Paket Servisi", "Hotel & Resort", "Zincir & Şubeler"].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-slate-500 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">İletişim</h3>
            <ul className="space-y-3">
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone}`} className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                    <span>📞</span> {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                    <span>✉️</span> {contact.email}
                  </a>
                </li>
              )}
              {contact.address && (
                <li className="text-slate-500 text-sm flex items-start gap-2">
                  <span>📍</span>
                  <span>{contact.address}, {contact.city}</span>
                </li>
              )}
              {contact.workingHours && (
                <li className="text-slate-500 text-sm flex items-start gap-2">
                  <span>🕐</span>
                  <span>{contact.workingHours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} OxonomPos. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-slate-600 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Admin Panel
            </Link>
            <span className="text-slate-700">·</span>
            <span className="text-slate-600 text-sm">Türkiye&apos;nin Yapay Zeka Destekli Restoran Platformu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
