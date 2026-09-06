"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FeatureCategory } from "@/lib/types";

interface FeaturesProps {
  features: FeatureCategory[];
}

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  "from-purple-500 to-indigo-600": {
    border: "border-purple-500/30 hover:border-purple-500/60",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  "from-cyan-500 to-blue-600": {
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  "from-orange-500 to-red-600": {
    border: "border-orange-500/30 hover:border-orange-500/60",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  "from-green-500 to-emerald-600": {
    border: "border-green-500/30 hover:border-green-500/60",
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "shadow-green-500/20",
  },
  "from-pink-500 to-rose-600": {
    border: "border-pink-500/30 hover:border-pink-500/60",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    glow: "shadow-pink-500/20",
  },
  "from-yellow-500 to-orange-600": {
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    glow: "shadow-yellow-500/20",
  },
  "from-teal-500 to-cyan-600": {
    border: "border-teal-500/30 hover:border-teal-500/60",
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    glow: "shadow-teal-500/20",
  },
};

function useScrollReveal() {
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
  return { ref, visible };
}

function FeatureCard({ feature, index }: { feature: FeatureCategory; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useScrollReveal();
  const colors = colorMap[feature.color] || colorMap["from-purple-500 to-indigo-600"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`feature-card glass border rounded-2xl p-6 cursor-pointer group transition-all duration-300 ${colors.border} hover:shadow-xl hover:shadow-black/20`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Icon */}
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${colors.bg} transition-transform duration-300 group-hover:scale-110`}>
              {feature.icon}
            </div>
            {/* Text */}
            <div className="min-w-0">
              <h3 className="font-bold text-white text-lg leading-tight">{feature.title}</h3>
              <p className={`text-sm font-medium mt-0.5 ${colors.text}`}>{feature.subtitle}</p>
            </div>
          </div>

          {/* Expand arrow */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${colors.bg} ${colors.text}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Expandable features list */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-2">
                {feature.features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Features({ features }: FeaturesProps) {
  const activeFeatures = features
    .filter((f) => f.active)
    .sort((a, b) => a.order - b.order);

  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section id="features" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            ⚡ 50+ Entegre Özellik
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Kategorize{" "}
            <span className="gradient-text">Özellik Haritası</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Rakip sistemlerin birkaçına sahip olduğu özellikler, OxonomPos&apos;ta hepsini bulursunuz — tek çatı altında.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {activeFeatures.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#comparison" className="btn-primary">
            Rakip Karşılaştırmasını Gör
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
