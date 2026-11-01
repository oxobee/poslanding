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
    sm: 30,
    md: 36,
    lg: 44,
    xl: 54,
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
    lg: "text-sm px-2.5 py-1",
    xl: "text-base px-3.5 py-1",
  };

  const currentIconSize = iconSizes[size];
  const isWhite = variant === "white";

  const Content = (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Modern Sweet Brand Mark */}
      <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform duration-200"
        >
          <defs>
            <linearGradient id={`oxoGrad_${size}_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1E6A" />
              <stop offset="45%" stopColor="#EA004B" />
              <stop offset="100%" stopColor="#C8003E" />
            </linearGradient>
            <filter id={`oxoShadow_${size}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#EA004B" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Squircle Container */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill={`url(#oxoGrad_${size}_${variant})`}
            filter={`url(#oxoShadow_${size})`}
          />

          {/* Glass Highlight Stroke */}
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="11"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Stylized Modern O Ring */}
          <circle
            cx="22"
            cy="22"
            r="10"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Pulse Signal Center */}
          <circle
            cx="22"
            cy="22"
            r="3.5"
            fill="#FFFFFF"
          />

          {/* Contactless Signal Arc */}
          <path
            d="M 28 14 A 12 12 0 0 1 33 21"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Typography: Sweet, Professional, Highly Readable Font */}
      {showText && (
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`font-black ${textSizes[size]} tracking-tight transition-colors duration-200 ${
              isWhite ? "text-white" : "text-slate-900 group-hover:text-black"
            }`}
            style={{ letterSpacing: "-0.04em" }}
          >
            oxonom
          </span>
          <span
            className={`ml-1.5 font-bold uppercase rounded-lg tracking-wider transition-all duration-200 group-hover:scale-105 ${
              posBadgeSizes[size]
            } ${
              isWhite
                ? "bg-[#EA004B] text-white shadow-sm"
                : "bg-[#EA004B] text-white shadow-sm shadow-[#EA004B]/30 group-hover:bg-[#D00042]"
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
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA004B] rounded-xl inline-block">
        {Content}
      </Link>
    );
  }

  return Content;
}
