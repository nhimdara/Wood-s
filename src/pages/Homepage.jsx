// pages/Homepage.jsx - WOOD'S / Kalbe Healthcare Interactive Hub
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import SubProductCard from "../components/layout/ui/SubProductCard";
import { products } from "../components/data/products";
import { FaSearch } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(1);

  // Flatten all sub-products for search
  const allSubProducts = products.flatMap((portfolio) =>
    portfolio.subProducts.map((sp) => ({
      ...sp,
      portfolioId: portfolio.id,
      portfolioTitle: portfolio.title,
    }))
  );

  const filteredProducts = searchQuery.trim()
    ? allSubProducts.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          (p.genericName && p.genericName.toLowerCase().includes(q)) ||
          (p.categoryTag && p.categoryTag.toLowerCase().includes(q)) ||
          (p.details?.description && p.details.description.toLowerCase().includes(q)) ||
          p.portfolioTitle.toLowerCase().includes(q)
        );
      })
    : [];

  const currentPortfolio =
    products.find((p) => p.id === selectedPortfolioId) || products[0];

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Kantumruy Pro', 'Segoe UI', 'Roboto', sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        
        .floating-hero-card {
          animation: floatSlow 6s ease-in-out infinite;
          background: #FFFFFF;
          border-radius: clamp(20px, 3.5vw, 32px);
          padding: clamp(18px, 3.5vw, 32px);
          box-shadow: 0 25px 50px rgba(92,61,46,0.1);
          border: 1px solid rgba(139,94,60,0.15);
          position: relative;
        }

        .hero-section {
          min-height: 80vh;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: clamp(28px, 4vw, 56px);
          padding: clamp(85px, 11vw, 120px) 5% 50px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .subproducts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 20px;
        }

        .portfolio-tab-btn {
          transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
        }
        
        .search-pill {
          transition: all 0.2s ease;
        }
        .search-pill:hover {
          background: #8B5E3C !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }

        /* Tablet Responsive Rules (768px - 1024px) */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 85px 5% 40px;
            gap: 32px;
          }
          .floating-hero-card {
            max-width: 540px;
            margin: 0 auto;
          }
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .portfolio-tab-btn {
            padding: 18px 14px;
          }
          .subproducts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        /* Mobile Rules (< 768px) */
        @media (max-width: 767px) {
          .hero-section {
            padding: 80px 5% 30px;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .subproducts-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      <Nav />

      {/* Hero Section */}
      <section className="hero-section">
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ marginBottom: 14 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#8B5E3C",
                textTransform: "uppercase",
                background: "rgba(139,94,60,0.1)",
                padding: "5px 16px",
                borderRadius: 40,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8B5E3C",
                }}
              />
              WOOD'S • KALBE HEALTHCARE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(32px, 5.5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#3D2B1F",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Product Positioning &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5E3C 0%, #C49A6C 50%, #8B5E3C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clinical Solutions
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2.2vw, 16px)",
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 560,
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            ស្វែងយល់ពីផលប័ត្រផលិតផលឱសថ និងអាហារូបត្ថម្ភវេជ្ជសាស្ត្រកម្រិតខ្ពស់៖ <strong>ENDO METABOLIC</strong>, <strong>MEDNUT</strong>, និង <strong>CHILDREN HEALTH</strong> ជាមួយក្របខណ្ឌបង្ហាញច្បាស់លាស់ ៥ ជំហាន។
          </p>

          {/* Interactive Live Search Bar */}
          <div
            style={{
              position: "relative",
              maxWidth: 500,
              width: "100%",
              margin: "0 auto 24px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#FFFFFF",
                borderRadius: 50,
                padding: "8px 18px",
                border: "2px solid rgba(139,94,60,0.2)",
                boxShadow: "0 10px 25px rgba(61,43,31,0.06)",
              }}
            >
              <FaSearch style={{ color: "#8B5E3C", fontSize: 17, marginRight: 12, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="ស្វែងរកផលិតផល (ឧ. Efesa, Nephrisol, Prospan, DPN, CKD...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: 13.5,
                  color: "#3D2B1F",
                  background: "transparent",
                  fontFamily: "inherit",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#8B7355",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "0 4px",
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Search Tag Pills */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
              <span style={{ fontSize: 12, color: "#8B7355", alignSelf: "center" }}>ពេញនិយម:</span>
              {["EFESA", "NEPHRISOL", "PROSPAN", "KALXID", "NOCID"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="search-pill"
                  style={{
                    background: "rgba(139,94,60,0.08)",
                    color: "#8B5E3C",
                    border: "none",
                    borderRadius: 20,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Dropdown Results */}
            {searchQuery.trim() && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  borderRadius: 16,
                  border: "1px solid rgba(139,94,60,0.2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  marginTop: 8,
                  maxHeight: 320,
                  overflowY: "auto",
                  zIndex: 500,
                  padding: 8,
                }}
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.portfolioId}/${item.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 10,
                        textDecoration: "none",
                        color: "#3D2B1F",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,94,60,0.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 40, height: 40, objectFit: "contain", background: "#FAF6F0", borderRadius: 8, padding: 4 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: "#8B5E3C" }}>{item.portfolioTitle} • {item.genericName}</div>
                      </div>
                      <HiOutlineChevronRight style={{ color: "#8B5E3C" }} />
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "16px", textAlign: "center", color: "#8B7355", fontSize: 13 }}>
                    មិនមានផលិតផលត្រូវនឹងពាក្យស្វែងរក "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#portfolios"
              style={{
                background: "linear-gradient(135deg, #3D2B1F 0%, #8B5E3C 100%)",
                color: "#FAF6F0",
                padding: "11px 26px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 8px 20px rgba(61,43,31,0.2)",
              }}
            >
              Explore Portfolios <HiOutlineChevronRight />
            </a>
            <Link
              to="/about"
              style={{
                background: "transparent",
                color: "#8B5E3C",
                padding: "10px 22px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13.5,
                border: "1.5px solid #8B5E3C",
              }}
            >
              About Our Mission
            </Link>
          </div>
        </div>

        {/* Hero Showcase Visual */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <div className="floating-hero-card">
            <img
              src="/images/ENDO-METABOLIC.png"
              alt="Kalbe Product Portfolio"
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "contain",
              }}
            />
            <div
              style={{
                marginTop: 14,
                padding: "10px 14px",
                background: "rgba(139,94,60,0.06)",
                borderRadius: 14,
                display: "flex",
                justifyContent: "space-around",
                fontSize: 11.5,
                fontWeight: 700,
                color: "#3D2B1F",
              }}
            >
              <span>Endo Metabolic</span>
              <span>•</span>
              <span>Mednut</span>
              <span>•</span>
              <span>Children Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Portfolios Section */}
      <section
        id="portfolios"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "30px 5% 50px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#8B5E3C",
              textTransform: "uppercase",
              background: "rgba(139,94,60,0.1)",
              padding: "4px 14px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 8,
            }}
          >
            Core Healthcare Portfolios
          </span>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(26px, 4.5vw, 38px)",
              color: "#3D2B1F",
              fontWeight: 800,
              margin: 0,
            }}
          >
            ផលប័ត្រផលិតផលតាមក្រុមឯកទេស
          </h2>
        </div>

        {/* Portfolio Tabs */}
        <div className="portfolio-grid">
          {products.map((p) => {
            const isSelected = p.id === selectedPortfolioId;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPortfolioId(p.id)}
                className="portfolio-tab-btn"
                style={{
                  background: isSelected ? "linear-gradient(145deg, #FFFFFF, #FFF9F5)" : "#FFFFFF",
                  borderRadius: 24,
                  padding: "clamp(20px, 3vw, 26px)",
                  border: isSelected ? "2.5px solid #8B5E3C" : "1px solid rgba(139,94,60,0.14)",
                  boxShadow: isSelected
                    ? "0 18px 40px rgba(139,94,60,0.18)"
                    : "0 6px 18px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: isSelected ? "#8B5E3C" : "#8B7355",
                      background: isSelected ? "rgba(139,94,60,0.12)" : "rgba(139,94,60,0.06)",
                      padding: "4px 11px",
                      borderRadius: 20,
                    }}
                  >
                    {p.badge}
                  </span>
                  <span style={{ fontSize: 12, color: "#8B7355", fontWeight: 700 }}>
                    {p.subProducts.length} ផលិតផល
                  </span>
                </div>

                <div
                  style={{
                    height: "clamp(160px, 20vw, 200px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FAF6F0",
                    borderRadius: 16,
                    padding: "12px 16px",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))",
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(19px, 2.5vw, 23px)",
                      fontWeight: 800,
                      color: isSelected ? "#8B5E3C" : "#3D2B1F",
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#7A5C4A", lineHeight: 1.55, margin: 0 }}>
                    {p.subtitle || p.description.substring(0, 65) + "..."}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 12,
                    borderTop: "1px solid rgba(139,94,60,0.12)",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#8B5E3C" }}>
                    {isSelected ? "កំពុងមើល" : "ជ្រើសរើសដើម្បីមើល"}
                  </span>
                  <Link
                    to={`/product/${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3D2B1F",
                      textDecoration: "none",
                    }}
                  >
                    បើកទំព័រពេញ →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Portfolio Sub-products Grid */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#3D2B1F", fontWeight: 800 }}>
                {currentPortfolio.title} Products
              </h3>
              <p style={{ fontSize: 13, color: "#7A5C4A", margin: 0 }}>
                {currentPortfolio.description}
              </p>
            </div>
            <Link
              to={`/product/${currentPortfolio.id}`}
              style={{
                color: "#8B5E3C",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="subproducts-grid">
            {currentPortfolio.subProducts.map((sp) => (
              <SubProductCard key={sp.id} product={sp} parentId={currentPortfolio.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
