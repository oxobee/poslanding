"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { HeroSlide } from "@/lib/types";

interface HeroProps {
  slides: HeroSlide[];
}

// Floating particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#60a5fa" : "#a78bfa",
            opacity: Math.random() * 0.4 + 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 6 + 4}s`,
          }}
        />
      ))}
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/8 blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
    </div>
  );
}

// Grid lines
function GridLines() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

export function Hero({ slides }: HeroProps) {
  const activeSlides = slides.filter((s) => s.active).sort((a, b) => a.order - b.order);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > current ? 1 : -1));
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % activeSlides.length;
    goTo(nextIndex, 1);
  }, [current, activeSlides.length, goTo]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + activeSlides.length) % activeSlides.length;
    goTo(prevIndex, -1);
  }, [current, activeSlides.length, goTo]);

  useEffect(() => {
    if (activeSlides.length <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, activeSlides.length]);

  const slide = activeSlides[current] || activeSlides[0];

  if (!slide) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0d1b2e] to-navy-950" />
        <GridLines />
        <Particles />
      </div>

      {/* Background Image */}
      {slide.image && (
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              >
                {/* Badge */}
                {slide.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-amber-400 text-sm font-medium mb-6"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    {slide.badge}
                  </motion.div>
                )}

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
                  <span className="text-white">{slide.title}</span>
                  <br />
                  <span className="gradient-text">{slide.subtitle}</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a href={slide.ctaUrl} className="btn-primary glow-gold">
                    {slide.ctaText}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href={slide.ctaSecondaryUrl} className="btn-secondary">
                    {slide.ctaSecondaryText}
                    <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-10">
                  {["50+ Özellik", "Gerçek Zamanlı", "Türkçe Destek", "Bulut Tabanlı"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Animated visual */}
          <div className="hidden lg:block relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                transition={{ type: "spring", damping: 20, stiffness: 150, delay: 0.1 }}
                className="relative"
              >
                {/* Main card */}
                <div className="relative animated-border">
                  <div className="bg-navy-950 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                    
                    {/* Mock dashboard */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">Dashboard</span>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                      </div>
                      
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "Bugünkü Ciro", value: "₺12,450", color: "text-emerald-400", icon: "📈" },
                          { label: "Aktif Masa", value: "8/12", color: "text-amber-400", icon: "🪑" },
                          { label: "Bekleyen", value: "3", color: "text-blue-400", icon: "⏱️" },
                        ].map((stat) => (
                          <div key={stat.label} className="glass rounded-xl p-3 text-center">
                            <div className="text-xl mb-1">{stat.icon}</div>
                            <div className={`font-bold text-sm ${stat.color}`}>{stat.value}</div>
                            <div className="text-xs text-slate-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Order items */}
                      <div className="space-y-2">
                        {[
                          { table: "Masa 3", item: "Köfte + Ayran", status: "Hazırlanıyor", color: "bg-yellow-500" },
                          { table: "Masa 7", item: "Adana Kebap", status: "Hazır ✓", color: "bg-green-500" },
                          { table: "Masa 1", item: "Karışık Izgara", status: "Bekliyor", color: "bg-red-500" },
                        ].map((order) => (
                          <div key={order.table} className="flex items-center gap-3 glass rounded-lg px-3 py-2">
                            <div className={`w-2 h-2 rounded-full ${order.color} animate-pulse`} />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-white truncate">{order.table} — {order.item}</div>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              order.color === "bg-green-500" ? "bg-green-500/20 text-green-300" :
                              order.color === "bg-yellow-500" ? "bg-yellow-500/20 text-yellow-300" :
                              "bg-red-500/20 text-red-300"
                            }`}>{order.status}</span>
                          </div>
                        ))}
                      </div>

                      {/* AI badge */}
                      <div className="flex items-center gap-2 glass border border-purple-500/30 rounded-xl p-3">
                        <div className="text-2xl">🤖</div>
                        <div>
                          <div className="text-xs font-medium text-white">AI Stüdyo Aktif</div>
                          <div className="text-xs text-slate-500">Menü görselleri üretiliyor...</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-6 h-6 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating notification */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass border border-emerald-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm">🔔</div>
                  <div>
                    <div className="text-xs font-medium text-white">Yeni Sipariş!</div>
                    <div className="text-xs text-slate-500">Masa 5 - QR Order</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 glass border border-amber-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                >
                  <div className="text-lg">⚡</div>
                  <div>
                    <div className="text-xs font-medium text-amber-300">Türkçe Sesli Uyarı</div>
                    <div className="text-xs text-slate-500">Web Speech API</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider controls */}
        {activeSlides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Önceki"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {activeSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Sonraki"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
