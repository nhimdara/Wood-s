// components/layout/ui/SubProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { PRODUCT_THEMES } from "../../data/products";

const SubProductCard = ({ product, parentId }) => {
  const productUrl = `/product/${parentId}/${product.id}`;
  const theme = PRODUCT_THEMES[product.id] || {
    title: product.title,
    primary: "#0D6E38",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 800,
    letterSpacing: "0px",
  };

  return (
    <Link to={productUrl} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(13,110,56,0.12)",
          transition: "all 0.4s cubic-bezier(0.2, 0, 0, 1)",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 20px 40px ${theme.primary}25`;
          e.currentTarget.style.borderColor = `${theme.primary}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "rgba(13,110,56,0.12)";
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
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
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
                background: "rgba(255,255,255,0.9)",
                color: "#1A241A",
                padding: "4px 8px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {product.price}
            </div>
          )}
        </div>
        <div style={{ padding: "clamp(16px, 4vw, 20px)", flex: 1, display: "flex", flexDirection: "column" }}>
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
            {product.details.description.substring(0, 100)}...
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: theme.primary,
              fontSize: "clamp(12px, 2.8vw, 14px)",
              fontWeight: 700,
            }}
          >
            View Details <HiOutlineChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubProductCard;
