// components/layout/ui/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, id }) => {
  const productUrl = `/product/${id}`;

  return (
    <Link
      to={productUrl}
      style={{
        textDecoration: "none",
        display: "block",
      }}
    >
      <div
        style={{
          background: "var(--kalbe-surface)",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid var(--kalbe-border)",
          transition: "all 0.4s cubic-bezier(0.2, 0, 0, 1)",
          cursor: "pointer",
          boxShadow: "var(--kalbe-card-shadow)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 25px 45px var(--kalbe-glow)";
          e.currentTarget.style.borderColor = "var(--kalbe-green)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "var(--kalbe-card-shadow)";
          e.currentTarget.style.borderColor = "var(--kalbe-border)";
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "clamp(200px, 35vw, 280px)",
            backgroundColor: "var(--kalbe-bg-alt)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            onError={(e) => {
              // Fallback when image fails to load
              e.target.style.display = "none";
              const parent = e.target.parentElement;
              parent.style.background =
                "linear-gradient(135deg, #0D6E38, #006400)";
              parent.style.display = "flex";
              parent.style.alignItems = "center";
              parent.style.justifyContent = "center";
              parent.innerHTML = `<div style="color:white;font-size:24px;font-weight:bold;text-align:center;padding:20px;">${title}</div>`;
            }}
            onMouseEnter={(e) => {
              if (e.currentTarget.style.display !== "none") {
                e.currentTarget.style.transform = "scale(1.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget.style.display !== "none") {
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          />
        </div>
        <div
          style={{ padding: "clamp(16px, 4vw, 20px)", background: "var(--kalbe-surface)" }}
        >
          <h3
            style={{
              fontFamily:
                title.includes("ENDO")
                  ? "'Montserrat', 'Inter', sans-serif"
                  : title.includes("MEDNUT") || title.includes("Mednut")
                  ? "'Outfit', 'Montserrat', sans-serif"
                  : "'Poppins', 'Montserrat', sans-serif",
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: "var(--kalbe-text-main)",
              margin: "0 0 8px 0",
              lineHeight: 1.3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0D6E38")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--kalbe-text-main)")}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "clamp(12px, 3vw, 13px)",
              color: "var(--kalbe-text-muted)",
              marginBottom: 16,
              lineHeight: 1.4,
            }}
          >
            Explore varieties →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
