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
    sm: 32,
    md: 38,
    lg: 46,
    xl: 56,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  const posBadgeSizes = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2 py-0.5",
    lg: "text-sm px-2.5 py-0.5",
    xl: "text-base px-3.5 py-1",
  };

  const currentIconSize = iconSizes[size];
  const isWhite = variant === "white";

  const Content = (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Precision Engineered POS Brand Glyph */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg"
        >
          <defs>
            {/* Primary Brand Crimson Gradient */}
            <linearGradient id={`oxoGrad_${size}_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E75" />
              <stop offset="50%" stopColor="#EA004B" />
              <stop offset="100%" stopColor="#B30036" />
            </linearGradient>

            {/* Subtle Inner Glass Bevel */}
            <linearGradient id={`oxoHighlight_${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Depth Shadow */}
            <filter id={`oxoGlow_${size}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#EA004B" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Squircle Badge Container */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="13"
            fill={`url(#oxoGrad_${size}_${variant})`}
            filter={`url(#oxoGlow_${size})`}
          />

          {/* Precision Glass Border */}
          <rect
            x="3.75"
            y="3.75"
            width="40.5"
            height="40.5"
            rx="12.25"
            stroke={`url(#oxoHighlight_${size})`}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Iconic Geometric Outer "O" Ring */}
          <circle
            cx="24"
            cy="24"
            r="11.5"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Core Pulse Point */}
          <circle
            cx="24"
            cy="24"
            r="4.2"
            fill="#FFFFFF"
          />

          {/* Fast Contactless / Cloud Signal Wave */}
          <path
            d="M 31 16 C 33.5 18.5 35 21 35 24 C 35 27 33.5 29.5 31 32"
            stroke="#FFFFFF"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Typography: Clean, Modern, Professional Neo-Grotesque */}
      {showText && (
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`font-black ${textSizes[size]} tracking-tight transition-colors duration-200 ${
              isWhite ? "text-white" : "text-slate-900 group-hover:text-black"
            }`}
            style={{ letterSpacing: "-0.045em" }}
          >
            oxonom
          </span>
          <span
            className={`ml-1.5 font-extrabold uppercase rounded-lg tracking-wider transition-all duration-200 group-hover:shadow-md ${
              posBadgeSizes[size]
            } ${
              isWhite
                ? "bg-[#EA004B] text-white shadow-xs"
                : "bg-[#EA004B] text-white shadow-sm shadow-[#EA004B]/35 group-hover:bg-[#D00042]"
            }`}
            style={{ letterSpacing: "0.06em" }}
          >
            pos
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
