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
    return null;
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
