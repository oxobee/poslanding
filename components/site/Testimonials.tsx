"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const colors = [
    "from-amber-500 to-orange-600",
    "from-purple-500 to-indigo-600",
    "from-cyan-500 to-blue-600",
    "from-emerald-500 to-teal-600",
    "from-pink-500 to-rose-600",
    "from-yellow-500 to-amber-600",
  ];
  const colorIndex = t.id.charCodeAt(t.id.length - 1) % colors.length;

  return (
    <div className="flex-shrink-0 w-80 sm:w-96 glass border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-colors duration-300 mx-3">
      {/* Quote */}
      <div className="text-amber-500/30 text-5xl font-serif leading-none mb-3">&ldquo;</div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-4">{t.content}</p>

      {/* Rating */}
      <StarRating rating={t.rating} />

      {/* Author */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
        {t.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-sm font-bold text-white`}>
            {initials}
          </div>
        )}
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role} — {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const active = testimonials.filter((t) => t.active).sort((a, b) => a.order - b.order);
  // Duplicate for seamless marquee
  const doubled = [...active, ...active];

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            💬 Başarı Hikayeleri
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            İşletmeler{" "}
            <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-slate-400">
            Türkiye&apos;nin önde gelen restoranları OxonomPos ile operasyonlarını dönüştürdü.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mb-4">
        <div className="marquee-content">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="marquee-container">
        <div style={{ animation: "marqueeReverse 35s linear infinite" }} className="inline-flex">
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`rev-${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent" />
    </section>
  );
}
