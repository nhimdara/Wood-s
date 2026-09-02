// pages/Product.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import SubProductCard from "../components/layout/ui/SubProductCard";
import MednutPreparationGuide from "../components/layout/ui/MednutPreparationGuide";
import ClinicalComparisonSection from "../components/layout/ui/ClinicalComparisonSection";
import PediatricDosageCalculator from "../components/layout/ui/PediatricDosageCalculator";
import PositioningFrameworkCard from "../components/layout/ui/PositioningFrameworkCard";
import { products, PRODUCT_THEMES } from "../components/data/products";
import { HiOutlineCheck, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { FaLeaf, FaHeartbeat, FaStar } from "react-icons/fa";

const Product = () => {
  const { id, subId } = useParams();
  const [activeTab, setActiveTab] = useState("framework");

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, subId]);

  const parentProduct = products.find((p) => String(p.id) === id);
  const subProduct =
    subId && parentProduct?.subProducts?.find((sp) => sp.id === subId);

  // Sub-product detail view
  if (subProduct && parentProduct) {
    const details = subProduct.details;
    const isMednut = id === "2" || parentProduct.title === "Mednut";
    const isPediatric = id === "3" || parentProduct.title?.toLowerCase().includes("children");
    const isEndo = id === "1" || parentProduct.title === "ENDO METABOLIC";

    // Dynamic Packaging Color Theme
    const theme = PRODUCT_THEMES[subProduct.id] || {
      primary: "#0D6E38",
      dark: "#006400",
      bg: "#F8FAF6",
      light: "#F0FDF4",
      badge: "linear-gradient(135deg, #1A241A, #0D6E38)",
      glow: "rgba(13, 110, 56, 0.15)",
      border: "rgba(13, 110, 56, 0.2)",
    };

    const tabs = [
      {
        id: "framework",
        label: "5-Step Positioning",
      },
      {
        id: "benefits",
        label: "Benefits & Features",
      },
      {
        id: "ingredients",
        label: "Composition & Usage",
      },
      {
        id: "tools",
        label: isMednut
          ? "Preparation Guide"
          : isPediatric
            ? "Dosage Calculator"
            : "Clinical Comparison",
      },
    ];

    const categoryFont = isEndo
      ? "'Montserrat', 'Inter', 'Segoe UI', sans-serif"
      : isMednut
        ? "'Outfit', 'Montserrat', 'Inter', sans-serif"
        : "'Poppins', 'Montserrat', 'Inter', sans-serif";

    return (
      <div
        style={{
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
          background: "#F8FAF6",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp 0.4s ease forwards; }

          .product-tabs-container {
            display: flex;
            gap: 8px;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            border-bottom: 2px solid ${theme.border};
            margin-bottom: 30px;
            padding-bottom: 0;
            scrollbar-width: thin;
            scrollbar-color: ${theme.border} transparent;
          }

          .product-tabs-container::-webkit-scrollbar {
            height: 4px;
          }
          .product-tabs-container::-webkit-scrollbar-thumb {
            background: ${theme.border};
            border-radius: 4px;
          }

          .product-tab-btn {
            flex-shrink: 0;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 600;
            color: #4A5A4A;
            background: none;
            border: none;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            margin-bottom: -2px;
            transition: all 0.2s ease;
            white-space: nowrap;
            border-radius: 8px 8px 0 0;
          }

          .product-tab-btn:hover {
            color: ${theme.primary};
            background: ${theme.light};
          }

          .product-tab-btn.active {
            color: ${theme.primary} !important;
            border-bottom: 3px solid ${theme.primary} !important;
            font-weight: 700 !important;
            background: #FFFFFF;
            box-shadow: 0 -2px 8px ${theme.glow};
          }

          @media (max-width: 768px) {
            .product-tab-btn {
              padding: 9px 14px;
              font-size: 13px;
            }
          }
        `}</style>

        <Nav />

        {/* Breadcrumbs */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(75px, 11vw, 90px) 5% 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "clamp(12px, 2.5vw, 13px)",
              color: "#4A5A4A",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" style={{ color: theme.primary, textDecoration: "none", fontWeight: 600 }}>
              Home
            </Link>
            <span>›</span>
            <Link to={`/product/${id}`} style={{ color: theme.primary, textDecoration: "none", fontWeight: 600 }}>
              {parentProduct.title}
            </Link>
            <span>›</span>
            <span style={{ color: "#1A241A", fontWeight: 700, fontFamily: categoryFont }}>
              {subProduct.title}
            </span>
          </div>
        </div>

        {/* Hero Product Section */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "30px 5% 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* Image Showcase Card */}
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderRadius: "clamp(18px, 3.5vw, 28px)",
                border: `1px solid ${theme.border}`,
                boxShadow: `0 25px 50px ${theme.glow}`,
                padding: "clamp(18px, 4vw, 36px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <img
                src={subProduct.image}
                alt={subProduct.title}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {subProduct.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: theme.badge,
                    color: "#FFFFFF",
                    padding: "5px 14px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    boxShadow: `0 4px 12px ${theme.glow}`,
                  }}
                >
                  {subProduct.badge}
                </div>
              )}
            </div>
          </div>

          {/* Product Header & Key Info */}
          <div>
            <div className="fade-up">
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: theme.primary,
                  background: theme.light,
                  padding: "5px 14px",
                  borderRadius: 30,
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                {parentProduct.title} • {subProduct.categoryTag || "Pharmaceutical"}
              </span>
            </div>

            <h1
              className="fade-up"
              style={{
                fontFamily: theme.fontFamily || categoryFont,
                fontSize: "clamp(32px, 5.5vw, 52px)",
                fontWeight: theme.fontWeight || 900,
                letterSpacing: theme.letterSpacing || "0px",
                color: theme.primary,
                lineHeight: 1.15,
                marginBottom: 8,
              }}
            >
              {theme.title || subProduct.title}
            </h1>

            {subProduct.genericName && (
              <p
                style={{
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  color: theme.primary,
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {subProduct.genericName}
              </p>
            )}

            {/* Key Selling Point Highlight Callout */}
            {subProduct.keySellingPoint && (
              <div
                className="fade-up"
                style={{
                  background: theme.light,
                  padding: "16px 18px",
                  borderRadius: 16,
                  borderLeft: `4px solid ${theme.primary}`,
                  marginBottom: 20,
                  fontSize: "clamp(13px, 2.5vw, 14px)",
                  lineHeight: 1.6,
                  color: "#1A241A",
                  fontWeight: 500,
                }}
              >
                {subProduct.keySellingPoint}
              </div>
            )}

            {/* Quality Badges */}
            <div
              className="fade-up"
              style={{
                display: "flex",
                gap: "clamp(10px, 2.5vw, 18px)",
                marginBottom: 22,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FaLeaf style={{ color: theme.primary, fontSize: 15 }} />
                <span style={{ fontSize: 12.5, color: "#4A5A4A", fontWeight: 500 }}>High Quality</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FaHeartbeat style={{ color: theme.primary, fontSize: 15 }} />
                <span style={{ fontSize: 12.5, color: "#4A5A4A", fontWeight: 500 }}>Clinically Proven</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FaStar style={{ color: theme.primary, fontSize: 15 }} />
                <span style={{ fontSize: 12.5, color: "#4A5A4A", fontWeight: 500 }}>Kalbe Standard</span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                to={`/product/${id}`}
                style={{
                  background: "transparent",
                  color: theme.primary,
                  padding: "9px 20px",
                  borderRadius: 40,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 13,
                  border: `1.5px solid ${theme.primary}`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.2s ease",
                }}
              >
                <HiOutlineArrowLeft /> More in {parentProduct.title}
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(36px, 6vw, 56px) 5%",
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Tab Navigation with tablet/mobile responsive labels */}
            <div className="product-tabs-container">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`product-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: 5-Step Positioning */}
            {activeTab === "framework" && (
              <div className="fade-up">
                <PositioningFrameworkCard product={subProduct} />
              </div>
            )}

            {/* TAB CONTENT: Benefits & Features */}
            {activeTab === "benefits" && (
              <div className="fade-up">
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 20,
                    padding: "clamp(20px, 4vw, 32px)",
                    border: `1px solid ${theme.border}`,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(20px, 3.5vw, 24px)",
                      color: "#1A241A",
                      fontWeight: 700,
                      marginBottom: 18,
                    }}
                  >
                    Clinical Benefits & Key Highlights
                  </h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    {details.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "12px 16px",
                          background: theme.bg,
                          borderRadius: 14,
                          border: `1px solid ${theme.border}`,
                        }}
                      >
                        <div
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: theme.light,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <HiOutlineCheck style={{ color: theme.primary, fontSize: 15 }} />
                        </div>
                        <span style={{ fontSize: 13.5, color: "#1A241A", fontWeight: 500 }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Composition & Usage */}
            {activeTab === "ingredients" && (
              <div className="fade-up" style={{ display: "grid", gap: 20 }}>
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 20,
                    padding: "clamp(18px, 3.5vw, 28px)",
                    border: "1px solid rgba(13,110,56,0.12)",
                  }}
                >
                  <h4 style={{ margin: "0 0 14px", fontSize: 17, color: "#1A241A", fontWeight: 700 }}>
                    Active Ingredients & Formulation
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: "#1A241A", lineHeight: 1.8 }}>
                    {details.ingredients.map((item, idx) => (
                      <li key={idx}><strong>{item}</strong></li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 20,
                    padding: "clamp(18px, 3.5vw, 28px)",
                    border: "1px solid rgba(13,110,56,0.12)",
                  }}
                >
                  <h4 style={{ margin: "0 0 10px", fontSize: 17, color: "#1A241A", fontWeight: 700 }}>
                    How to Use & Storage
                  </h4>
                  <p style={{ fontSize: 13.5, color: "#4A5A4A", lineHeight: 1.6, marginBottom: 14 }}>
                    <strong>កម្រិតប្រើប្រាស់:</strong> {details.howToUse}
                  </p>
                  <p style={{ fontSize: 13.5, color: "#4A5A4A", lineHeight: 1.6, margin: 0 }}>
                    <strong>ការរក្សាទុក:</strong> {details.storage}
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Interactive Tools */}
            {activeTab === "tools" && (
              <div className="fade-up">
                {isMednut && <MednutPreparationGuide initialProduct={subProduct.id} />}
                {isPediatric && <PediatricDosageCalculator initialProduct={subProduct.id} />}
                {isEndo && (
                  <ClinicalComparisonSection
                    defaultTab={
                      subProduct.id === "efesa" || subProduct.id === "hemapo"
                        ? "efesaVsHemapo"
                        : subProduct.id === "kalxid" || subProduct.id === "kalmeco"
                          ? "dpnKalxidKalmeco"
                          : "nocidLowProtein"
                    }
                  />
                )}
              </div>
            )}
          </div>
        </section>

        {/* Other Products in this Portfolio */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px, 6vw, 60px) 5%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#0D6E38", textTransform: "uppercase" }}>
                Related Portfolio
              </span>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(20px, 3.5vw, 26px)",
                  color: "#1A241A",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Other {parentProduct.title} Products
              </h3>
            </div>
            <Link
              to={`/product/${id}`}
              style={{
                color: "#0D6E38",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              See all {parentProduct.subProducts.length} <HiOutlineArrowRight />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: 20,
            }}
          >
            {parentProduct.subProducts
              .filter((sp) => sp.id !== subProduct.id)
              .map((sp) => (
                <SubProductCard key={sp.id} product={sp} parentId={id} />
              ))}
          </div>
        </section>
      </div>
    );
  }

  // Parent product view (Portfolio level)
  if (parentProduct) {
    const isMednut = id === "2" || parentProduct.title === "Mednut";
    const isPediatric = id === "3" || parentProduct.title?.toLowerCase().includes("children");
    const isEndo = id === "1" || parentProduct.title === "ENDO METABOLIC";

    return (
      <div
        style={{
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
          background: "#F8FAF6",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Nav />

        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(75px, 11vw, 90px) 5% 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "clamp(12px, 2.5vw, 13px)",
              color: "#4A5A4A",
            }}
          >
            <Link to="/" style={{ color: "#0D6E38", textDecoration: "none", fontWeight: 600 }}>
              Home
            </Link>
            <span>›</span>
            <span style={{ color: "#1A241A", fontWeight: 700 }}>
              {parentProduct.title}
            </span>
          </div>
        </div>

        {/* Hero Portfolio Banner */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "30px 5% 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px, 4vw, 40px)",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#0D6E38",
                background: "rgba(13,110,56,0.1)",
                padding: "4px 14px",
                borderRadius: 20,
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              Specialized Portfolio
            </span>
            <h1
              style={{
                fontFamily: isEndo
                  ? "'Montserrat', 'Inter', 'Segoe UI', sans-serif"
                  : isMednut
                    ? "'Outfit', 'Montserrat', 'Inter', sans-serif"
                    : "'Poppins', 'Montserrat', 'Inter', sans-serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                letterSpacing: "1px",
                color: "#1A241A",
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              {parentProduct.title}
            </h1>
            {parentProduct.subtitle && (
              <div
                style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: "#0D6E38",
                  marginBottom: 14,
                }}
              >
                {parentProduct.subtitle}
              </div>
            )}
            <p
              style={{
                fontSize: "clamp(14px, 2.5vw, 16px)",
                lineHeight: 1.7,
                color: "#4A5A4A",
                marginBottom: 20,
              }}
            >
              {parentProduct.description}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                padding: "clamp(18px, 4vw, 32px)",
                boxShadow: "0 20px 40px rgba(13,110,56,0.08)",
                border: "1px solid rgba(13,110,56,0.12)",
              }}
            >
              <img
                src={parentProduct.image}
                alt={parentProduct.title}
                style={{
                  width: "100%",
                  maxHeight: 280,
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* Portfolio Products Grid */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "10px 5% 60px",
          }}
        >
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#0D6E38",
                textTransform: "uppercase",
                background: "rgba(13,110,56,0.1)",
                padding: "4px 14px",
                borderRadius: 20,
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              Clinical Solutions
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "#1A241A",
                fontWeight: 800,
                margin: 0,
              }}
            >
              All {parentProduct.title} Products ({parentProduct.subProducts.length})
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: 20,
            }}
          >
            {parentProduct.subProducts.map((sp) => (
              <SubProductCard key={sp.id} product={sp} parentId={id} />
            ))}
          </div>
        </section>

        {/* Clinical Module for Parent View */}
        <section
          style={{
            background: "#F0FDF4",
            padding: "clamp(40px, 6vw, 60px) 5%",
            borderTop: "1px solid rgba(13,110,56,0.1)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: "#0D6E38",
                  textTransform: "uppercase",
                  background: "rgba(13,110,56,0.1)",
                  padding: "4px 14px",
                  borderRadius: 20,
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                Specialized Detailing Guide
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(22px, 4vw, 32px)",
                  color: "#1A241A",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                {isMednut
                  ? "Mednut Clinical Preparation Matrix"
                  : isPediatric
                    ? "Pediatric Dosage Protocol"
                    : "Clinical Comparison & Therapeutic Matrix"}
              </h2>
            </div>

            {isMednut && <MednutPreparationGuide initialProduct="nephrisol" />}
            {isPediatric && <PediatricDosageCalculator initialProduct="kalmaxime-ds" />}
            {isEndo && <ClinicalComparisonSection defaultTab="efesaVsHemapo" />}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ padding: 100, textAlign: "center", fontFamily: "sans-serif" }}>
      <h2>Product not found</h2>
      <Link to="/" style={{ color: "#0D6E38", fontWeight: 700 }}>
        Back to Home
      </Link>
    </div>
  );
};

export default Product;
