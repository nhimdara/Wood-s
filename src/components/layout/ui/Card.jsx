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
          background: "#FFFFFF",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(139, 94, 60, 0.12)",
          transition: "all 0.4s cubic-bezier(0.2, 0, 0, 1)",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 25px 45px rgba(92, 61, 46, 0.18)";
          e.currentTarget.style.borderColor = "rgba(139, 94, 60, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.04)";
          e.currentTarget.style.borderColor = "rgba(139, 94, 60, 0.12)";
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "clamp(200px, 35vw, 280px)",
            backgroundColor: "#FAF6F0",
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
                "linear-gradient(135deg, #8B5E3C, #6B4226)";
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
          style={{ padding: "clamp(16px, 4vw, 20px)", background: "#FFFFFF" }}
        >
          <h3
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 700,
              color: "#2C1D14",
              margin: "0 0 8px 0",
              lineHeight: 1.3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A27B5C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2C1D14")}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "clamp(12px, 3vw, 13px)",
              color: "#8B7355",
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
