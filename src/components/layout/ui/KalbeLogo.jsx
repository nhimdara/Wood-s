import React from "react";
import kalbeIcon from "../../assets/logo/kalbe-icon.png";

const KalbeLogo = ({ isDark, isScrolled, height = 28, style = {} }) => {
  const h = typeof height === "number" ? height : parseInt(height, 10) || 28;
  const iconHeight = isScrolled ? `${Math.round(h * 0.78)}px` : `${h}px`;
  const titleSize = isScrolled ? "14.5px" : `${Math.round(h * 0.58)}px`;
  const subSize = isScrolled ? "6.2px" : `${(h * 0.24).toFixed(1)}px`;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        userSelect: "none",
        lineHeight: 1,
        ...style,
      }}
    >
      <img
        src={kalbeIcon}
        alt="KALBE"
        style={{
          height: iconHeight,
          width: "auto",
          objectFit: "contain",
          transition: "all 0.2s ease",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span
          style={{
            fontFamily: "'Arial Black', 'Trebuchet MS', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 900,
            fontSize: titleSize,
            letterSpacing: "0.1em",
            color: isDark ? "#FFFFFF" : "#221E1F",
            transition: "color 0.2s ease, font-size 0.2s ease",
            lineHeight: 0.9,
          }}
        >
          KALBE
        </span>
        <span
          style={{
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: subSize,
            letterSpacing: "0.02em",
            color: isDark ? "#00D672" : "#006B3F",
            transition: "color 0.2s ease, font-size 0.2s ease",
            marginTop: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Innovation for a Better Life
        </span>
      </div>
    </div>
  );
};

export default KalbeLogo;
