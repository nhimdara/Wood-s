import React from "react";
import kalbeIcon from "../../assets/logo/kalbe-icon.png";

const KalbeLogo = ({ isDark, isScrolled, height = 36, style = {} }) => {
  const iconHeight = isScrolled ? "30px" : (typeof height === "number" ? `${height}px` : height);
  const titleSize = isScrolled ? "20px" : "23px";
  const subSize = isScrolled ? "7.5px" : "8.5px";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
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
            letterSpacing: "0.14em",
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
            marginTop: "3px",
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
