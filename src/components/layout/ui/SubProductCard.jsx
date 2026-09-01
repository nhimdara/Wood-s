// components/layout/ui/SubProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

const SubProductCard = ({ product, parentId }) => {
  const productUrl = `/product/${parentId}/${product.id}`;

  return (
    <Link to={productUrl} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(139,94,60,0.12)",
          transition: "all 0.4s cubic-bezier(0.2, 0, 0, 1)",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(92,61,46,0.15)";
          e.currentTarget.style.borderColor = "rgba(139,94,60,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "rgba(139,94,60,0.12)";
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "clamp(180px, 30vw, 220px)",
            backgroundColor: "#FAF6F0",
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
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.06)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          {product.price && (
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "#8B5E3C",
                color: "#FAF6F0",
                padding: "6px 12px",
                borderRadius: 20,
                fontSize: "clamp(12px, 2.5vw, 13px)",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {product.price}
            </div>
          )}
        </div>
        <div style={{ padding: "clamp(16px, 4vw, 20px)", flex: 1 }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 3.5vw, 20px)",
              fontWeight: 700,
              color: "#2C1D14",
              marginBottom: 8,
            }}
          >
            {product.title}
          </h3>
          <p
            style={{
              fontSize: "clamp(11px, 2.5vw, 13px)",
              color: "#8B7355",
              marginBottom: 12,
              lineHeight: 1.5,
            }}
          >
            {product.origin}
          </p>
          <p
            style={{
              fontSize: "clamp(12px, 2.8vw, 14px)",
              color: "#7A5C4A",
              lineHeight: 1.5,
              marginBottom: 16,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.details.description.substring(0, 100)}...
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#8B5E3C",
              fontSize: "clamp(12px, 2.8vw, 14px)",
              fontWeight: 600,
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
