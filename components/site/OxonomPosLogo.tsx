"use client";

import React from "react";
import Link from "next/link";

interface OxonomPosLogoProps {
  className?: string;
  variant?: "default" | "white" | "monochrome";
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  href?: string;
}

export function OxonomPosLogo({
  className = "",
  variant = "default",
  size = "md",
  showText = true,
  href = "/",
}: OxonomPosLogoProps) {
  const iconSizes = {
    sm: 34,
    md: 44,
    lg: 54,
    xl: 66,
  };

  const textSizes = {
    sm: "text-[19px]",
    md: "text-[23px]",
    lg: "text-[28px]",
    xl: "text-[34px]",
  };

  const posBadgeSizes = {
    sm: "text-[9px] px-1.5 py-0.5 tracking-[0.14em]",
    md: "text-[10.5px] px-2 py-0.5 tracking-[0.16em]",
    lg: "text-xs px-2.5 py-1 tracking-[0.18em]",
    xl: "text-sm px-3.5 py-1 tracking-[0.2em]",
  };

  const currentIconSize = iconSizes[size];
  const isWhite = variant === "white";

  const Content = (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Bespoke Luxury Enterprise POS Emblem */}
      <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
        {/* Soft Ambient Neon Glow Aura */}
        <div
          className={`absolute inset-0 rounded-2xl blur-md transition-opacity duration-300 pointer-events-none ${
            isWhite
              ? "bg-[#EA004B]/40 opacity-70 group-hover:opacity-100"
              : "bg-[#EA004B]/25 opacity-40 group-hover:opacity-75"
          }`}
        />

        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-md"
        >
          <defs>
            {/* Primary Crimson Radiant Gradient */}
            <linearGradient id={`oxoEmblemGrad_${size}_${variant}`} x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#FF387F" />
              <stop offset="38%" stopColor="#EA004B" />
              <stop offset="85%" stopColor="#A80031" />
              <stop offset="100%" stopColor="#780020" />
            </linearGradient>

            {/* Specular Edge Glass Stroke */}
            <linearGradient id={`oxoGlassRim_${size}_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#EA004B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>

            {/* Inner Metallic Bevel Highlight */}
            <linearGradient id={`oxoInnerGlow_${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Core Ribbon Ring Gradient */}
            <linearGradient id={`oxoRibbonGrad_${size}`} x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FFF1F5" />
              <stop offset="100%" stopColor="#FFC2D1" />
            </linearGradient>

            {/* Drop Shadow for Emblem Depth */}
            <filter id={`oxoDepthFilter_${size}`} x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#900025" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Precision Sculpted Squircle Shield with Beveled Corners */}
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="15"
            fill={`url(#oxoEmblemGrad_${size}_${variant})`}
            filter={`url(#oxoDepthFilter_${size})`}
          />

          {/* Top Glass Gloss Sheen (Arch Reflex) */}
          <path
            d="M5 19 C5 10.7 10.7 5 19 5 H37 C45.3 5 51 10.7 51 19 V24 C40 28 16 28 5 24 Z"
            fill={`url(#oxoInnerGlow_${size})`}
          />

          {/* Precision Micro Glass Rim Border */}
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="15"
            stroke={`url(#oxoGlassRim_${size}_${variant})`}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Dynamic Geometric Infinity "O" - Core POS Sync Loop */}
          <path
            d="M28 14 C35.732 14 42 20.268 42 28 C42 35.732 35.732 42 28 42 C20.268 42 14 35.732 14 28 C14 20.268 20.268 14 28 14 Z"
            stroke={`url(#oxoRibbonGrad_${size})`}
            strokeWidth="3.6"
            strokeLinecap="round"
          />

          {/* Contactless Fast-Pay Tap Arc Overlay (Gleaming White Accent) */}
          <path
            d="M28 14 C32 14 36.5 16.5 39.2 20 C41.2 22.8 42 25.5 42 28"
            stroke="#FFFFFF"
            strokeWidth="4.2"
            strokeLinecap="round"
          />

          {/* Precision Diagonal Slash Speed Geometry */}
          <circle cx="28" cy="14" r="1.8" fill="#FFFFFF" />

          {/* Central AI / Smart Engine 4-Point Diamond Spark */}
          <path
            d="M28 20 L30.2 25.8 L36 28 L30.2 30.2 L28 36 L25.8 30.2 L20 28 L25.8 25.8 Z"
            fill="#FFFFFF"
          />

          {/* High-Tech Satellite Sync Beacon */}
          <circle cx="39.5" cy="16.5" r="2.2" fill="#FFFFFF" />
          <circle cx="39.5" cy="16.5" r="3.4" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* Typography: Prestigious, Authoritative Neo-Grotesk Wordmark */}
      {showText && (
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`font-black ${textSizes[size]} transition-colors duration-200 ${
              isWhite
                ? "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                : "text-[#080C14] group-hover:text-black"
            }`}
            style={{
              letterSpacing: "-0.045em",
              fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            oxonom
          </span>

          {/* POS Ultra-Luxury High-Density Capsule Badge */}
          <span
            className={`ml-1.5 sm:ml-2 font-black uppercase rounded-lg relative overflow-hidden transition-all duration-300 group-hover:scale-105 ${
              posBadgeSizes[size]
            } ${
              isWhite
                ? "bg-gradient-to-r from-[#FF2B72] via-[#EA004B] to-[#BE0038] text-white border border-white/30 shadow-[0_4px_12px_rgba(234,0,75,0.4)]"
                : "bg-gradient-to-r from-[#EA004B] via-[#E00045] to-[#B30034] text-white border border-[#EA004B]/35 shadow-[0_3px_10px_rgba(234,0,75,0.3)] group-hover:shadow-[0_5px_15px_rgba(234,0,75,0.45)] group-hover:from-[#FF1E6A] group-hover:to-[#D00042]"
            }`}
          >
            {/* Top Specular Gloss Highlight Strip */}
            <span className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
            <span className="relative z-10 flex items-center gap-1 font-black">
              <span>POS</span>
            </span>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA004B] rounded-xl inline-block"
      >
        {Content}
      </Link>
    );
  }

  return Content;
}
