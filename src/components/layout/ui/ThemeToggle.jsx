import React from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

export default function ThemeToggle({ isMobile = false }) {
  const { mode, isDark, systemTheme, toggleTheme, setMode } = useTheme();

  const handleToggle = (e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    toggleTheme(e);
  };

  const handleSelectMode = (newMode, e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    setMode(newMode);
  };

  if (isMobile) {
    return (
      <div
        style={{
          marginTop: 8,
          marginBottom: 14,
          padding: "12px 14px",
          borderRadius: 16,
          background: isDark
            ? "rgba(16, 185, 129, 0.08)"
            : "rgba(13, 110, 56, 0.05)",
          border: isDark
            ? "1px solid rgba(16, 185, 129, 0.2)"
            : "1px solid rgba(13, 110, 56, 0.12)",
        }}
      >
        {/* Header: Title + Active device indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: isDark ? "#10B981" : "#0D6E38",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                boxShadow: isDark
                  ? "0 4px 12px rgba(16, 185, 129, 0.3)"
                  : "0 4px 12px rgba(13, 110, 56, 0.2)",
              }}
            >
              {mode === "system" ? (
                <FaDesktop />
              ) : isDark ? (
                <FaMoon />
              ) : (
                <FaSun />
              )}
            </div>
            <div>
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: isDark ? "#F2F7F3" : "#1A241A",
                  lineHeight: 1.2,
                }}
              >
                Theme Mode
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: isDark ? "#9BB0A0" : "#4A5A4A",
                  marginTop: 2,
                }}
              >
                {mode === "system"
                  ? `Auto តាមទូរស័ព្ទ (${systemTheme === "dark" ? "ងងឹត" : "ពន្លឺ"})`
                  : mode === "dark"
                    ? "ងងឹត (Dark Mode)"
                    : "ពន្លឺ (Light Mode)"}
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: 12,
              background:
                mode === "system"
                  ? isDark
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(13, 110, 56, 0.12)"
                  : "transparent",
              color: isDark ? "#34D399" : "#0D6E38",
              border: mode === "system" ? "1px solid rgba(16, 185, 129, 0.3)" : "none",
            }}
          >
            {mode === "system" ? "● Auto" : isDark ? "Dark" : "Light"}
          </span>
        </div>

        {/* 3-way Segmented Control */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 6,
            background: isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.05)",
            padding: 4,
            borderRadius: 12,
          }}
        >
          <button
            type="button"
            onClick={(e) => handleSelectMode("system", e)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "8px 6px",
              borderRadius: 9,
              border: "none",
              fontSize: 12,
              fontWeight: mode === "system" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                mode === "system"
                  ? isDark
                    ? "#10B981"
                    : "#0D6E38"
                  : "transparent",
              color:
                mode === "system"
                  ? "#FFFFFF"
                  : isDark
                    ? "#9BB0A0"
                    : "#4A5A4A",
              boxShadow:
                mode === "system"
                  ? "0 2px 8px rgba(0, 0, 0, 0.2)"
                  : "none",
            }}
          >
            <FaDesktop style={{ fontSize: 11 }} />
            <span>Auto</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleSelectMode("light", e)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "8px 6px",
              borderRadius: 9,
              border: "none",
              fontSize: 12,
              fontWeight: mode === "light" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                mode === "light"
                  ? isDark
                    ? "#10B981"
                    : "#0D6E38"
                  : "transparent",
              color:
                mode === "light"
                  ? "#FFFFFF"
                  : isDark
                    ? "#9BB0A0"
                    : "#4A5A4A",
              boxShadow:
                mode === "light"
                  ? "0 2px 8px rgba(0, 0, 0, 0.2)"
                  : "none",
            }}
          >
            <FaSun style={{ fontSize: 12 }} />
            <span>Light</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleSelectMode("dark", e)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "8px 6px",
              borderRadius: 9,
              border: "none",
              fontSize: 12,
              fontWeight: mode === "dark" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                mode === "dark"
                  ? isDark
                    ? "#10B981"
                    : "#0D6E38"
                  : "transparent",
              color:
                mode === "dark"
                  ? "#FFFFFF"
                  : isDark
                    ? "#9BB0A0"
                    : "#4A5A4A",
              boxShadow:
                mode === "dark"
                  ? "0 2px 8px rgba(0, 0, 0, 0.2)"
                  : "none",
            }}
          >
            <FaMoon style={{ fontSize: 11 }} />
            <span>Dark</span>
          </button>
        </div>
      </div>
    );
  }

  // Desktop Navbar Button
  const tooltipText =
    mode === "system"
      ? `Auto Device (${systemTheme === "dark" ? "Dark" : "Light"}) • Click to change`
      : mode === "dark"
        ? "Dark Mode • Click for Light Mode"
        : "Light Mode • Click for Auto (Device)";

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={tooltipText}
      title={tooltipText}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
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
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
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
      <span
        style={{
          display: "inline-flex",
          transform: isDark ? "rotate(360deg)" : "rotate(0deg)",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          fontSize: 15,
        }}
      >
        {mode === "system" ? <FaDesktop /> : isDark ? <FaMoon /> : <FaSun />}
      </span>

      {/* Small Auto indicator badge on desktop when in system mode */}
      {mode === "system" && (
        <span
          style={{
            position: "absolute",
            bottom: 2,
            right: 2,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#10B981",
            boxShadow: "0 0 4px #10B981",
          }}
        />
      )}
    </button>
  );
}
