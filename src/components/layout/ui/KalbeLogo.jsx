import React from "react";
import kalbeIcon from "../../assets/logo/kalbe-icon.png";

const KalbeLogo = ({ isDark, isScrolled, height = 28, style = {} }) => {
  const numericHeight = typeof height === "number" ? height : parseInt(height, 10) || 28;
  const currentHeight = isScrolled ? Math.round(numericHeight * 0.85) : numericHeight;

  const iconHeight = `${currentHeight}px`;
  const titleSize = `${Math.round(currentHeight * 0.64)}px`;
  const subSize = `${(currentHeight * 0.26).toFixed(1)}px`;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
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
            letterSpacing: "0.12em",
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
