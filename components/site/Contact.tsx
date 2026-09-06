"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { ContactSettings } from "@/lib/types";

interface ContactProps {
  contact: ContactSettings;
}

export function Contact({ contact }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            📞 İletişim
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Ücretsiz Demo{" "}
            <span className="gradient-text">Talep Edin</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Restoranınıza özel demo için hemen iletişime geçin. 24 saat içinde dönüş yapıyoruz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Telefon</div>
                      <div className="font-medium">{contact.phone}</div>
                    </div>
                  </a>
                )}
                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      💬
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">WhatsApp</div>
                      <div className="font-medium">{contact.whatsapp}</div>
                    </div>
                  </a>
                )}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      ✉️
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">E-posta</div>
                      <div className="font-medium">{contact.email}</div>
                    </div>
                  </a>
                )}
                {contact.address && (
                  <div className="flex items-start gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-lg shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Adres</div>
                      <div className="font-medium">{contact.address}<br />{contact.city}, {contact.country}</div>
                    </div>
                  </div>
                )}
                {contact.workingHours && (
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-lg">
                      🕐
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Çalışma Saatleri</div>
                      <div className="font-medium">{contact.workingHours}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-sm font-semibold text-slate-400 mb-4">Sosyal Medya</h3>
              <div className="flex gap-3">
                {contact.linkedin && (
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform text-sm font-bold">
                    in
                  </a>
                )}
                {contact.instagram && (
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {contact.twitter && (
                  <a href={contact.twitter} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-700/50 border border-slate-600/30 flex items-center justify-center text-slate-300 hover:scale-110 transition-transform font-bold text-sm">
                    𝕏
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 border border-amber-500/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Talebiniz Alındı!</h3>
                  <p className="text-slate-400">24 saat içinde sizinle iletişime geçeceğiz.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-6">Demo Talebi Gönder</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1.5">Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="Ahmet Yılmaz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1.5">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="+90 5xx xxx xx xx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">E-posta</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="ahmet@restoran.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">İşletme Adı</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="Lezzet Durağı Restaurant"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Mesajınız</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                      placeholder="İşletmeniz ve ihtiyaçlarınız hakkında bilgi verin..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Demo Talebi Gönder
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    Bilgileriniz gizli tutulur. Spam göndermeyiz.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
