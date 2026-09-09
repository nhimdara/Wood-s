// components/layout/ui/SubProductCard.jsx
import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { PRODUCT_THEMES } from "../../data/products";

const SubProductCard = ({ product, parentId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const productUrl = `/product/${parentId}/${product.id}`;
  const theme = PRODUCT_THEMES[product.id] || {
    title: product.title,
    primary: "#0D6E38",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 800,
    letterSpacing: "0px",
  };

  return (
    <Link
      to={productUrl}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 20,
          overflow: "hidden",
          border: isHovered
            ? `1px solid ${theme.primary}40`
            : "1px solid rgba(13,110,56,0.12)",
          transform: isHovered
            ? "translateY(-6px) translateZ(0)"
            : "translateY(0) translateZ(0)",
          boxShadow: isHovered
            ? `0 18px 36px ${theme.primary}20`
            : "0 4px 16px rgba(0,0,0,0.03)",
          transition: "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          willChange: "transform, box-shadow",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "clamp(180px, 30vw, 220px)",
            backgroundColor: "#F8FAF6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {imgError ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "16px",
                background: `linear-gradient(135deg, ${theme.light || "#F8FAF6"} 0%, #FFFFFF 100%)`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  color: theme.primary || "#0D6E38",
                  fontSize: 20,
                  fontWeight: 900,
                  fontFamily: theme.fontFamily || "inherit",
                }}
              >
                {product.title}
              </div>
              {product.genericName && (
                <div style={{ fontSize: 11.5, color: "#4A5A4A", marginTop: 4 }}>
                  {product.genericName}
                </div>
              )}
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onError={() => setImgError(true)}
            />
          )}

          {product.badge && (
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: theme.primary,
                color: "#FFFFFF",
                fontSize: 10.5,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 20,
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
              }}
            >
              {product.badge}
            </div>
          )}
          {product.price && (
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(6px)",
                color: "#1A241A",
                padding: "4px 8px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
              }}
            >
              {product.price}
            </div>
          )}
        </div>
        <div
          style={{
            padding: "clamp(16px, 4vw, 20px)",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: theme.fontFamily,
              fontSize: "clamp(19px, 3.5vw, 22px)",
              fontWeight: theme.fontWeight || 900,
              letterSpacing: theme.letterSpacing || "0px",
              color: theme.primary,
              margin: "0 0 6px 0",
              lineHeight: 1.2,
            }}
          >
            {theme.title || product.title}
          </h3>
          {product.genericName && (
            <p
              style={{
                fontSize: "clamp(11.5px, 2.5vw, 13px)",
                color: "#4A5A4A",
                fontWeight: 600,
                marginBottom: 10,
                lineHeight: 1.4,
              }}
            >
              {product.genericName}
            </p>
          )}
          <p
            style={{
              fontSize: "clamp(12px, 2.8vw, 14px)",
              color: "#4A5A4A",
              lineHeight: 1.5,
              marginBottom: 16,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {product.details?.description
              ? product.details.description.substring(0, 100) + "..."
              : ""}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: theme.primary,
              fontSize: "clamp(12px, 2.8vw, 14px)",
              fontWeight: 700,
              transform: isHovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          >
            View Details <HiOutlineChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(SubProductCard);
