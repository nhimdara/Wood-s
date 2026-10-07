// src/components/layout/ui/LanguageToggle.jsx
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { useTheme } from "../../../context/ThemeContext";
import { FlagUK, FlagCambodia } from "./FlagIcons";

export default function LanguageToggle({ isMobile = false, isDrawer = false }) {
  const { language, isKhmer, toggleLanguage, setLanguage } = useLanguage();
  const { isDark } = useTheme();

  const handleToggle = (e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    toggleLanguage(e);
  };

  // Drawer full-width mode (inside mobile drawer menu)
  if (isDrawer) {
    return (
      <div
        style={{
          marginTop: 14,
          padding: "12px 14px",
          borderRadius: 14,
          background: "var(--kalbe-surface-elevated)",
          border: "1px solid var(--kalbe-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>🌐</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)" }}>
              {isKhmer ? "ភាសា (Language)" : "Language (ភាសា)"}
            </div>
            <div style={{ fontSize: 11, color: "var(--kalbe-text-muted)" }}>
              {isKhmer ? "ជ្រើសរើសភាសាប្រើប្រាស់" : "Select website display language"}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            background: isDark ? "rgba(0,0,0,0.3)" : "rgba(13,110,56,0.08)",
            padding: 3,
            borderRadius: 24,
            border: "1px solid var(--kalbe-border)",
            gap: 2,
          }}
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            style={{
              padding: "5px 12px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: !isKhmer ? "var(--kalbe-green)" : "transparent",
              color: !isKhmer ? "#FFFFFF" : "var(--kalbe-text-muted)",
              boxShadow: !isKhmer ? "0 2px 6px rgba(13,110,56,0.3)" : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <FlagUK width={16} height={11} />
            <span>EN</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage("km")}
            style={{
              padding: "5px 12px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: isKhmer ? "var(--kalbe-green)" : "transparent",
              color: isKhmer ? "#FFFFFF" : "var(--kalbe-text-muted)",
              boxShadow: isKhmer ? "0 2px 6px rgba(13,110,56,0.3)" : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <FlagCambodia width={16} height={11} />
            <span>ខ្មែរ</span>
          </button>
        </div>
      </div>
    );
  }

  // Mobile navbar button (compact 36px pill)
  if (isMobile) {
    return (
      <button
        onClick={handleToggle}
        type="button"
        aria-label={isKhmer ? "Switch to English" : "ប្តូរទៅភាសាខ្មែរ"}
        title={isKhmer ? "Switch to English" : "ប្តូរទៅភាសាខ្មែរ"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          height: 36,
          padding: "0 10px",
          borderRadius: 20,
          border: isDark
            ? "1px solid rgba(16, 185, 129, 0.3)"
            : "1px solid rgba(13, 110, 56, 0.2)",
          background: isDark
            ? "rgba(16, 185, 129, 0.12)"
            : "rgba(13, 110, 56, 0.07)",
          color: isDark ? "#34D399" : "#0D6E38",
          cursor: "pointer",
          outline: "none",
          fontSize: 12,
          fontWeight: 800,
          fontFamily: "'Inter', 'Kantumruy Pro', sans-serif",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {isKhmer ? <FlagCambodia width={17} height={12} /> : <FlagUK width={17} height={12} />}
        <span>{isKhmer ? "KH" : "EN"}</span>
      </button>
    );
  }

  // Desktop Navbar Button (sleek, interactive language switcher pill)
  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={isKhmer ? "Switch to English (EN)" : "ប្តូរទៅភាសាខ្មែរ (KH)"}
      title={isKhmer ? "Click to switch to English" : "ចុចដើម្បីប្តូរទៅភាសាខ្មែរ"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        height: 36,
        padding: "0 12px",
        borderRadius: 24,
        border: isDark
          ? "1px solid rgba(16, 185, 129, 0.3)"
          : "1px solid rgba(13, 110, 56, 0.2)",
        background: isDark
          ? "rgba(16, 185, 129, 0.12)"
          : "rgba(13, 110, 56, 0.07)",
        color: isDark ? "#34D399" : "#0D6E38",
        cursor: "pointer",
        position: "relative",
        outline: "none",
        fontFamily: "'Inter', 'Kantumruy Pro', sans-serif",
        fontSize: 12.5,
        fontWeight: 800,
        letterSpacing: "0.2px",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.background = isDark
          ? "rgba(16, 185, 129, 0.22)"
          : "rgba(13, 110, 56, 0.14)";
        e.currentTarget.style.boxShadow = isDark
          ? "0 0 14px rgba(16, 185, 129, 0.4)"
          : "0 0 12px rgba(13, 110, 56, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.background = isDark
          ? "rgba(16, 185, 129, 0.12)"
          : "rgba(13, 110, 56, 0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {isKhmer ? <FlagCambodia width={19} height={13} /> : <FlagUK width={19} height={13} />}
      <span>{isKhmer ? "ភាសាខ្មែរ" : "English"}</span>
      <span
        style={{
          fontSize: 9.5,
          padding: "2px 5px",
          borderRadius: 6,
          background: isDark ? "rgba(255,255,255,0.12)" : "rgba(13,110,56,0.15)",
          color: isDark ? "#A7F3D0" : "#006400",
          fontWeight: 800,
        }}
      >
        {isKhmer ? "KH" : "EN"}
      </span>
    </button>
  );
}
