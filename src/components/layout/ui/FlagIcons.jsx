// src/components/layout/ui/FlagIcons.jsx
import React from "react";

export const FlagUK = ({ width = 19, height = 13, style = {} }) => (
  <svg
    viewBox="0 0 60 30"
    width={width}
    height={height}
    style={{
      borderRadius: 2.5,
      boxShadow: "0 1px 3px rgba(0,0,0,0.22)",
      display: "inline-block",
      flexShrink: 0,
      verticalAlign: "middle",
      overflow: "hidden",
      ...style,
    }}
  >
    <rect width="60" height="30" fill="#012169" />
    <path d="M0 0l60 30m0-30L0 30" stroke="#ffffff" strokeWidth="6" />
    <path
      d="M0 0l25 12.5M35 17.5l25 12.5M60 0L35 12.5M25 17.5L0 30"
      stroke="#C8102E"
      strokeWidth="2"
    />
    <path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" />
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

export const FlagCambodia = ({ width = 19, height = 13, style = {} }) => (
  <svg
    viewBox="0 0 60 40"
    width={width}
    height={height}
    style={{
      borderRadius: 2.5,
      boxShadow: "0 1px 3px rgba(0,0,0,0.22)",
      display: "inline-block",
      flexShrink: 0,
      verticalAlign: "middle",
      overflow: "hidden",
      ...style,
    }}
  >
    {/* Top and Bottom Blue Stripes */}
    <rect width="60" height="40" fill="#032EA1" />
    {/* Middle Red Stripe */}
    <rect y="10" width="60" height="20" fill="#ED1B24" />

    {/* Angkor Wat Silhouette in White */}
    <rect x="17" y="27" width="26" height="1.5" fill="#FFFFFF" rx="0.3" />
    <rect x="18.5" y="25.5" width="23" height="1.5" fill="#FFFFFF" rx="0.3" />
    <path d="M20 25.5 H40 V22 H20 Z" fill="#FFFFFF" />
    {/* Doorways */}
    <rect x="29" y="23.5" width="2" height="2" fill="#ED1B24" />
    <rect x="23" y="24" width="1.5" height="1.5" fill="#ED1B24" />
    <rect x="35.5" y="24" width="1.5" height="1.5" fill="#ED1B24" />
    {/* Gallery Roofline */}
    <path d="M19 22 H41 L39.5 21 H20.5 Z" fill="#FFFFFF" />
    {/* Left Tower */}
    <path d="M22 21 H26 V17.5 L24 14.5 L22 17.5 Z" fill="#FFFFFF" />
    {/* Right Tower */}
    <path d="M34 21 H38 V17.5 L36 14.5 L34 17.5 Z" fill="#FFFFFF" />
    {/* Center Tower (Tallest) */}
    <path d="M27.5 21 H32.5 V16.5 L30 12 L27.5 16.5 Z" fill="#FFFFFF" />
  </svg>
);
