import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import SubProductCard from "../components/layout/ui/SubProductCard";
import { products } from "../components/data/products";
import { FaSearch } from "react-icons/fa";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(1);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Endo Metabolic",
      badge: "Specialized Therapy",
      image: "/images/ENDO-METABOLIC.png",
      desc: "CKD Anemia • CKD Nutrition • DPN • Diabetes Management",
      portfolioId: 1,
    },
    {
      id: 2,
      title: "Mednut",
      badge: "Clinical Nutrition",
      image: "/images/Mednut.png",
      desc: "Precision Medical Nutrition for Specific Disease Conditions",
      portfolioId: 2,
    },
    {
      id: 3,
      title: "Children Product",
      badge: "Pediatric Care",
      image: "/images/Children-Product.png",
      desc: "Gut Health • Cough Relief • Pediatric Antibiotics",
      portfolioId: 3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
        background: "#F8FAF6",
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
          box-shadow: 0 25px 50px rgba(13,110,56,0.1);
          border: 1px solid rgba(13,110,56,0.15);
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
          background: #0D6E38 !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }

        /* Responsive Layout Rules */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 90px 5% 36px;
            gap: 28px;
          }
          .floating-hero-card {
            max-width: 660px;
            margin: 0 auto;
          }
        }

        /* Tablet Screens (641px - 920px) */
        @media (max-width: 920px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .portfolio-tab-btn {
            padding: 20px 18px;
          }
          .subproducts-grid {
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
            gap: 16px;
          }
        }

        /* Large Tablet / Small Desktop (921px - 1100px) */
        @media (min-width: 921px) and (max-width: 1100px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .portfolio-tab-btn {
            padding: 18px 12px;
          }
        }

        /* Mobile Rules (< 640px) */
        @media (max-width: 640px) {
          .hero-section {
            padding: 80px 4% 28px;
            gap: 24px;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .portfolio-tab-btn {
            padding: 16px 14px;
          }
          .subproducts-grid {
            grid-template-columns: 1fr;
            gap: 14px;
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
                color: "#0D6E38",
                textTransform: "uppercase",
                background: "rgba(13,110,56,0.1)",
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
                  background: "#0D6E38",
                }}
              />
              Kalbe International
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(32px, 5.5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#1A241A",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Product Positioning &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0D6E38 0%, #68A62A 50%, #0D6E38 100%)",
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
              color: "#4A5A4A",
              maxWidth: 560,
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            ស្វែងយល់ពីផលប័ត្រផលិតផលឱសថ និងអាហារូបត្ថម្ភវេជ្ជសាស្ត្រកម្រិតខ្ពស់៖ <strong>ENDO METABOLIC</strong>, <strong>MEDNUT</strong>, និង <strong>CHILDREN PRODUCT</strong> ជាមួយក្របខណ្ឌបង្ហាញច្បាស់លាស់ ៥ ជំហាន។
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
                border: "2px solid rgba(13,110,56,0.2)",
                boxShadow: "0 10px 25px rgba(13,110,56,0.06)",
              }}
            >
              <FaSearch style={{ color: "#0D6E38", fontSize: 17, marginRight: 12, flexShrink: 0 }} />
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
                  color: "#1A241A",
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
                    color: "#4A5A4A",
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
              <span style={{ fontSize: 12, color: "#4A5A4A", alignSelf: "center" }}>ពេញនិយម:</span>
              {["EFESA", "NEPHRISOL", "PROSPAN", "KALXID", "NOCID"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="search-pill"
                  style={{
                    background: "rgba(13,110,56,0.08)",
                    color: "#0D6E38",
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
                  border: "1px solid rgba(13,110,56,0.2)",
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
                        color: "#1A241A",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(13,110,56,0.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 40, height: 40, objectFit: "contain", background: "#F8FAF6", borderRadius: 8, padding: 4 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: "#0D6E38" }}>{item.portfolioTitle} • {item.genericName}</div>
                      </div>
                      <HiOutlineChevronRight style={{ color: "#0D6E38" }} />
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "16px", textAlign: "center", color: "#4A5A4A", fontSize: 13 }}>
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
                background: "linear-gradient(135deg, #1A241A 0%, #0D6E38 100%)",
                color: "#F8FAF6",
                padding: "11px 26px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 8px 20px rgba(13,110,56,0.2)",
              }}
            >
              Explore Portfolios <HiOutlineChevronRight />
            </a>
            <Link
              to="/about"
              style={{
                background: "transparent",
                color: "#0D6E38",
                padding: "10px 22px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13.5,
                border: "1.5px solid #0D6E38",
              }}
            >
              About Our Mission
            </Link>
          </div>
        </div>

        {/* Hero Showcase Visual Slider by Category */}
        <div style={{ textAlign: "center", position: "relative", width: "100%", maxWidth: 720, margin: "0 auto" }}>
          <div className="floating-hero-card" style={{ padding: "clamp(20px, 3.5vw, 30px)", position: "relative" }}>
            {/* Top Category Badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#0D6E38",
                  background: "rgba(13,110,56,0.12)",
                  padding: "5px 14px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {heroSlides[currentHeroSlide].badge}
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                {heroSlides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentHeroSlide(i)}
                    style={{
                      width: currentHeroSlide === i ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: currentHeroSlide === i ? "#0D6E38" : "rgba(13,110,56,0.25)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Slide Image with Left/Right arrows */}
            <div
              style={{
                position: "relative",
                height: "clamp(240px, 36vw, 320px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#F8FAF6",
                borderRadius: 20,
                padding: "16px 20px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() =>
                  setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                }
                style={{
                  position: "absolute",
                  left: 12,
                  zIndex: 2,
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(13,110,56,0.25)",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1A241A",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                aria-label="Previous Slide"
              >
                <HiOutlineChevronLeft style={{ fontSize: 20 }} />
              </button>

              <img
                key={heroSlides[currentHeroSlide].image}
                src={heroSlides[currentHeroSlide].image}
                alt={heroSlides[currentHeroSlide].title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.08))",
                }}
              />

              <button
                onClick={() =>
                  setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
                }
                style={{
                  position: "absolute",
                  right: 12,
                  zIndex: 2,
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(13,110,56,0.25)",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1A241A",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                aria-label="Next Slide"
              >
                <HiOutlineChevronRight style={{ fontSize: 20 }} />
              </button>
            </div>

            {/* Slide Category Info */}
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: "#1A241A" }}>
                {heroSlides[currentHeroSlide].title}
              </div>
              <div style={{ fontSize: "clamp(12.5px, 1.8vw, 14px)", color: "#4A5A4A", marginTop: 3 }}>
                {heroSlides[currentHeroSlide].desc}
              </div>
            </div>

            {/* Interactive Category Selector Pills */}
            <div
              style={{
                marginTop: 14,
                padding: "6px",
                background: "rgba(13,110,56,0.08)",
                borderRadius: 40,
                display: "flex",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {heroSlides.map((slide, idx) => {
                const isCurrent = currentHeroSlide === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentHeroSlide(idx)}
                    style={{
                      border: "none",
                      background: isCurrent ? "#0D6E38" : "transparent",
                      color: isCurrent ? "#F8FAF6" : "#1A241A",
                      fontWeight: 700,
                      fontSize: 13,
                      padding: "8px 18px",
                      borderRadius: 30,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: isCurrent ? "0 4px 14px rgba(13,110,56,0.28)" : "none",
                    }}
                  >
                    {slide.title}
                  </button>
                );
              })}
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
              color: "#0D6E38",
              textTransform: "uppercase",
              background: "rgba(13,110,56,0.1)",
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
              color: "#1A241A",
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
                  border: isSelected ? "2.5px solid #0D6E38" : "1px solid rgba(13,110,56,0.14)",
                  boxShadow: isSelected
                    ? "0 18px 40px rgba(13,110,56,0.18)"
                    : "0 6px 18px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "clamp(11px, 1.2vw, 12px)",
                      fontWeight: 700,
                      color: isSelected ? "#0D6E38" : "#4A5A4A",
                      background: isSelected ? "rgba(13,110,56,0.12)" : "rgba(13,110,56,0.06)",
                      padding: "4px 11px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.badge}
                  </span>
                  <span style={{ fontSize: "clamp(11.5px, 1.2vw, 12px)", color: "#4A5A4A", fontWeight: 700, whiteSpace: "nowrap" }}>
                    {p.subProducts.length} ផលិតផល
                  </span>
                </div>

                <div
                  style={{
                    height: "clamp(150px, 22vw, 200px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#F8FAF6",
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
                      fontSize: "clamp(18px, 2.3vw, 23px)",
                      fontWeight: 800,
                      color: isSelected ? "#0D6E38" : "#1A241A",
                      marginBottom: 6,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "clamp(12.5px, 1.4vw, 13px)", color: "#4A5A4A", lineHeight: 1.55, margin: 0 }}>
                    {p.subtitle || p.description.substring(0, 65) + "..."}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    paddingTop: 12,
                    borderTop: "1px solid rgba(13,110,56,0.12)",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "clamp(12px, 1.4vw, 13px)", fontWeight: 700, color: "#0D6E38", whiteSpace: "nowrap" }}>
                    {isSelected ? "កំពុងមើល" : "ជ្រើសរើសដើម្បីមើល"}
                  </span>
                  <Link
                    to={`/product/${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: "clamp(12px, 1.4vw, 12.5px)",
                      fontWeight: 700,
                      color: "#1A241A",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      padding: "4px 8px",
                      borderRadius: 8,
                      background: "rgba(13,110,56,0.06)",
                      transition: "all 0.2s ease",
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
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#1A241A", fontWeight: 800 }}>
                {currentPortfolio.title} Products
              </h3>
              <p style={{ fontSize: 13, color: "#4A5A4A", margin: 0 }}>
                {currentPortfolio.description}
              </p>
            </div>
            <Link
              to={`/product/${currentPortfolio.id}`}
              style={{
                color: "#0D6E38",
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
