import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const searchRef = useRef(null);

  const heroSlides = useMemo(
    () => [
      {
        id: 1,
        title: "ENDO METABOLIC",
        badge: "Specialized Therapy",
        image: "/images/ENDO-METABOLIC.png",
        desc: "CKD Anemia • CKD Nutrition • DPN • Diabetes Management",
        portfolioId: 1,
        skuCount: 6,
        accentColor: "#DC2626",
        glowColor: "rgba(220, 38, 38, 0.18)",
        lightBg: "linear-gradient(145deg, #FFF1F2 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
      },
      {
        id: 2,
        title: "MEDNUT",
        badge: "Clinical Nutrition",
        image: "/images/Mednut.png",
        desc: "Precision Medical Nutrition for Specific Disease Conditions",
        portfolioId: 2,
        skuCount: 5,
        accentColor: "#16A34A",
        glowColor: "rgba(22, 163, 74, 0.18)",
        lightBg: "linear-gradient(145deg, #F0FDF4 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #16A34A 0%, #15803D 100%)",
      },
      {
        id: 3,
        title: "CHILDREN PRODUCT",
        badge: "Pediatric Care",
        image: "/images/Children-Product.png",
        desc: "Gut Health • Cough Relief • Pediatric Antibiotics",
        portfolioId: 3,
        skuCount: 3,
        accentColor: "#D97706",
        glowColor: "rgba(217, 119, 6, 0.18)",
        lightBg: "linear-gradient(145deg, #FEF3C7 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
      },
      {
        id: 4,
        title: "CELEBROVASCULAR",
        badge: "Neuro & Vascular Care",
        image: "/images/CELEBROVASCULAR.png",
        desc: "Acute Stroke • TBI • Post Stroke • Muscle Relaxant • Energy Booster",
        portfolioId: 4,
        skuCount: 7,
        accentColor: "#0284C7",
        glowColor: "rgba(2, 132, 199, 0.18)",
        lightBg: "linear-gradient(145deg, #F0F9FF 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
      },
      {
        id: 5,
        title: "HOSPITAL LINE",
        badge: "Hospital & Clinical Care",
        image: "/images/Hospital-Line.png",
        desc: "Gut Microbiota • Hepato-Protection • Antibiotics • Skin Care",
        portfolioId: 5,
        skuCount: 7,
        accentColor: "#4338CA",
        glowColor: "rgba(67, 56, 202, 0.18)",
        lightBg: "linear-gradient(145deg, #EEF2FF 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #4338CA 0%, #3730A3 100%)",
      },
      {
        id: 6,
        title: "ONCOLOGY",
        badge: "Cancer Care",
        image: "/images/Oncology.png",
        desc: "Chemotherapy • Supportive Care • Protocol-Based Treatment",
        portfolioId: 6,
        skuCount: 5,
        accentColor: "#701A75",
        glowColor: "rgba(112, 26, 117, 0.18)",
        lightBg: "linear-gradient(145deg, #FDF4FF 0%, #FFFFFF 100%)",
        badgeGradient: "linear-gradient(135deg, #701A75 0%, #581C87 100%)",
      },
    ],
    []
  );

  const goToSlide = useCallback(
    (index) => {
      setCurrentHeroSlide((index + heroSlides.length) % heroSlides.length);
    },
    [heroSlides.length]
  );

  // Auto-play with pause on hover / interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, heroSlides.length]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        // keep results but blur — optional; here we just let it be
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Flatten all sub-products for search - Memoized
  const allSubProducts = useMemo(
    () =>
      products.flatMap((portfolio) =>
        portfolio.subProducts.map((sp) => ({
          ...sp,
          portfolioId: portfolio.id,
          portfolioTitle: portfolio.title,
        }))
      ),
    []
  );

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allSubProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.genericName && p.genericName.toLowerCase().includes(q)) ||
        (p.categoryTag && p.categoryTag.toLowerCase().includes(q)) ||
        (p.details?.description &&
          p.details.description.toLowerCase().includes(q)) ||
        p.portfolioTitle.toLowerCase().includes(q)
    );
  }, [searchQuery, allSubProducts]);

  const currentPortfolio = useMemo(
    () => products.find((p) => p.id === selectedPortfolioId) || products[0],
    [selectedPortfolioId]
  );

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Kantumruy Pro', 'Segoe UI', 'Roboto', sans-serif",
        background: "var(--kalbe-bg)",
        color: "var(--kalbe-text-main)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slideFadeIn {
          from { opacity: 0; transform: translateX(24px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .floating-hero-card {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .hero-slide-img {
          animation: slideFadeIn 0.5s cubic-bezier(0.2, 0, 0, 1) both;
        }

        .hero-section {
          min-height: 82vh;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: clamp(32px, 4.5vw, 64px);
          padding: calc(68px + env(safe-area-inset-top, 28px) + 28px) 5% 56px;
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
        }

        .hero-content, .hero-visual { position: relative; z-index: 1; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 44px;
        }

        .subproducts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 20px;
        }

        .portfolio-tab-btn {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          position: relative;
          overflow: hidden;
        }
        .portfolio-tab-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(13,110,56,0.04), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .portfolio-tab-btn:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,110,56,0.14) !important; }
        .portfolio-tab-btn:hover::after { opacity: 1; }

        .search-pill {
          transition: all 0.2s ease;
        }
        .search-pill:hover {
          background: #0D6E38 !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }

        .carousel-arrow {
          transition: all 0.2s ease;
        }
        .carousel-arrow:hover {
          transform: scale(1.1);
          background: #0D6E38 !important;
          color: #fff !important;
        }

        .hero-dot { transition: all 0.35s cubic-bezier(0.2, 0, 0, 1); }
        .hero-dot:hover { transform: scale(1.2); }

        .section-fade { animation: fadeUp 0.6s ease both; }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: calc(64px + env(safe-area-inset-top, 12px) + 16px) 5% 32px;
            gap: 28px;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }
          .hero-badge-row {
            justify-content: center !important;
          }
          .hero-subtitle {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-search-wrapper {
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
            max-width: 640px !important;
          }
          .hero-quick-tags {
            justify-content: center !important;
          }
          .hero-cta-btns {
            width: 100% !important;
            max-width: 640px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: center !important;
          }
          .hero-cta-btns a {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
          .hero-trust-strip {
            justify-content: center !important;
          }
          .hero-bg-blob { display: none; }
          .hero-visual { width: 100% !important; max-width: 640px !important; margin: 0 auto; }
          .floating-hero-card { width: 100% !important; max-width: 640px !important; margin: 0 auto; }
        }

        @media (max-width: 920px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .subproducts-grid { grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 16px; }
        }

        @media (min-width: 921px) and (max-width: 1100px) {
          .portfolio-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: calc(60px + env(safe-area-inset-top, 12px) + 12px) 4% calc(24px + env(safe-area-inset-bottom, 12px));
            gap: 18px;
            min-height: auto;
          }
          .hero-visual { display: none !important; }
          .portfolio-grid { grid-template-columns: 1fr; gap: 14px; }
          .subproducts-grid { grid-template-columns: 1fr; gap: 14px; }
        }
      `}</style>

      <Nav />

      {/* ===================== HERO ===================== */}
      <section className="hero-section">

        {/* Left: copy + search */}
        <div className="hero-content">
          <div className="hero-badge-row" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "1.2px",
                color: "#0D6E38",
                textTransform: "uppercase",
                background: "rgba(13,110,56,0.1)",
                border: "1px solid rgba(13,110,56,0.2)",
                padding: "6px 16px",
                borderRadius: 40,
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#0D6E38",
                  boxShadow: "0 0 0 3px rgba(13,110,56,0.25)",
                }}
              />
              Kalbe International
            </span>
            <span
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: "var(--kalbe-text-muted)",
                background: "var(--kalbe-surface-elevated)",
                border: "1px solid var(--kalbe-border)",
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              6 Specialized Portfolios
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Montserrat', 'Inter', 'Segoe UI', sans-serif",
              fontSize: "clamp(34px, 5.2vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "var(--kalbe-text-main)",
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Product Positioning
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #0D6E38 0%, #16A34A 50%, #68A62A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              & Clinical Solutions
            </span>
          </h1>

          <p
            className="hero-subtitle"
            style={{
              fontSize: "clamp(14px, 1.8vw, 15.5px)",
              lineHeight: 1.7,
              color: "var(--kalbe-text-muted)",
              maxWidth: 540,
              marginBottom: 24,
            }}
          >
            ស្វែងយល់ពីផលប័ត្រផលិតផលឱសថ និងអាហារូបត្ថម្ភវេជ្ជសាស្ត្រកម្រិតខ្ពស់ទាំង ៦ ក្រុមឯកទេស៖{" "}
            <strong>ENDO METABOLIC</strong>, <strong>MEDNUT</strong>,{" "}
            <strong>CHILDREN PRODUCT</strong>, <strong>CELEBROVASCULAR</strong>,{" "}
            <strong>HOSPITAL LINE</strong>, និង <strong>ONCOLOGY</strong>។
          </p>

          {/* Search Box */}
          <div ref={searchRef} className="hero-search-wrapper" style={{ position: "relative", maxWidth: 520, width: "100%", marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "var(--kalbe-surface)",
                borderRadius: 50,
                padding: "9px 18px",
                border: "2px solid var(--kalbe-border)",
                boxShadow: "var(--kalbe-card-shadow)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <FaSearch style={{ color: "#0D6E38", fontSize: 16, marginRight: 10, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="ស្វែងរកផលិតផល (ឧ. Efesa, Brainact, Hepafit...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: 13.5,
                  color: "var(--kalbe-text-main)",
                  background: "transparent",
                  fontFamily: "inherit",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  style={{
                    background: "rgba(13,110,56,0.08)",
                    border: "none",
                    color: "#0D6E38",
                    cursor: "pointer",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick tags */}
            <div className="hero-quick-tags" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
              <span style={{ fontSize: 11.5, color: "var(--kalbe-text-muted)", fontWeight: 600 }}>ពេញនិយម:</span>
              {["EFESA", "BRAINACT", "HEPAFIT", "MEROFEN", "PAXUS", "CAR-Q 100", "PROSPAN", "NEPHRISOL"].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="search-pill"
                    style={{
                      background: "rgba(13,110,56,0.07)",
                      color: "#0D6E38",
                      border: "1px solid var(--kalbe-border)",
                      borderRadius: 20,
                      padding: "3px 11px",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Dropdown results */}
            {searchQuery.trim() && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  left: 0,
                  right: 0,
                  background: "var(--kalbe-surface-elevated)",
                  borderRadius: 18,
                  border: "1px solid var(--kalbe-border)",
                  boxShadow: "var(--kalbe-card-shadow)",
                  maxHeight: 340,
                  overflowY: "auto",
                  zIndex: 500,
                  padding: 8,
                }}
              >
                {filteredProducts.length > 0 ? (
                  <>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--kalbe-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        padding: "8px 12px 4px",
                      }}
                    >
                      លទ្ធផល ({filteredProducts.length})
                    </div>
                    {filteredProducts.slice(0, 8).map((item) => (
                      <Link
                        key={item.id}
                        to={`/product/${item.portfolioId}/${item.id}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "10px 12px",
                          borderRadius: 12,
                          textDecoration: "none",
                          color: "var(--kalbe-text-main)",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(13,110,56,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: 42,
                            height: 42,
                            objectFit: "contain",
                            background: "var(--kalbe-bg-alt)",
                            borderRadius: 10,
                            padding: 4,
                            flexShrink: 0,
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{item.title}</div>
                          <div style={{ fontSize: 12, color: "var(--kalbe-green)", fontWeight: 600 }}>
                            {item.portfolioTitle} • {item.genericName}
                          </div>
                        </div>
                        <HiOutlineChevronRight style={{ color: "var(--kalbe-green)", flexShrink: 0 }} />
                      </Link>
                    ))}
                    {filteredProducts.length > 8 && (
                      <div style={{ padding: "8px 12px", fontSize: 12, color: "var(--kalbe-text-muted)", textAlign: "center" }}>
                        + ផលិតផល {filteredProducts.length - 8} ទៀត...
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ padding: "20px", textAlign: "center", color: "var(--kalbe-text-muted)", fontSize: 13 }}>
                    មិនមានផលិតផលត្រូវនឹងពាក្យស្វែងរក "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="hero-cta-btns" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 20, width: "100%", maxWidth: 640 }}>
            <a
              href="#portfolios"
              style={{
                background: "linear-gradient(135deg, #1A241A 0%, #0D6E38 100%)",
                color: "#F8FAF6",
                padding: "13px 28px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 10px 24px rgba(13,110,56,0.22)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Explore Portfolios <HiOutlineChevronRight />
            </a>
            <Link
              to="/about"
              style={{
                background: "var(--kalbe-surface)",
                color: "var(--kalbe-text-main)",
                padding: "12px 24px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
                border: "1.5px solid var(--kalbe-border)",
                boxShadow: "var(--kalbe-card-shadow)",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              About Our Mission
            </Link>
          </div>
        </div>

        {/* Right: Modern 3D Glass Showcase Card */}
        <div
          className="hero-visual"
          style={{ width: "100%", maxWidth: 640, margin: "0 auto" }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="floating-hero-card"
            style={{
              position: "relative",
              background: "var(--kalbe-surface)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "clamp(22px, 3.5vw, 32px)",
              padding: "clamp(18px, 3vw, 28px)",
              boxShadow: `0 30px 70px -15px ${heroSlides[currentHeroSlide].glowColor}, 0 0 0 1px var(--kalbe-border-subtle), var(--kalbe-card-shadow)`,
              border: `1px solid var(--kalbe-border)`,
              transition: "box-shadow 0.5s ease",
            }}
          >
            {/* Header: Category Badge + SKU Count + Progress Dots */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  key={`badge-${currentHeroSlide}`}
                  className="hero-slide-img"
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    background: heroSlides[currentHeroSlide].badgeGradient,
                    padding: "4px 12px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    whiteSpace: "nowrap",
                    boxShadow: `0 4px 12px ${heroSlides[currentHeroSlide].glowColor}`,
                  }}
                >
                  {heroSlides[currentHeroSlide].badge}
                </span>
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: heroSlides[currentHeroSlide].accentColor,
                    background: "var(--kalbe-surface-elevated)",
                    padding: "3px 9px",
                    borderRadius: 12,
                    border: "1px solid var(--kalbe-border)",
                  }}
                >
                  {heroSlides[currentHeroSlide].skuCount} Products
                </span>
              </div>

              {/* Progress Indicator */}
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--kalbe-text-muted)", marginRight: 2 }}>
                  0{currentHeroSlide + 1} / 0{heroSlides.length}
                </span>
                {heroSlides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="hero-dot"
                    role="button"
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: currentHeroSlide === i ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background:
                        currentHeroSlide === i
                          ? heroSlides[currentHeroSlide].accentColor
                          : "rgba(0,0,0,0.15)",
                      cursor: "pointer",
                      display: "inline-block",
                      transition: "all 0.3s cubic-bezier(0.2, 0, 0, 1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Showcase Stage */}
            <div
              style={{
                position: "relative",
                height: "clamp(180px, 28vw, 260px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                padding: "10px 40px",
                overflow: "hidden",
              }}
            >
              {/* Prev Button */}
              <button
                onClick={() => goToSlide(currentHeroSlide - 1)}
                className="carousel-arrow"
                aria-label="Previous Slide"
                style={{
                  position: "absolute",
                  left: 8,
                  zIndex: 2,
                  background: "var(--kalbe-surface-elevated)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--kalbe-border)",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--kalbe-text-main)",
                  boxShadow: "var(--kalbe-card-shadow)",
                }}
              >
                <HiOutlineChevronLeft style={{ fontSize: 16 }} />
              </button>

              <Link
                to={`/product/${heroSlides[currentHeroSlide].portfolioId}`}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <img
                  key={heroSlides[currentHeroSlide].image}
                  src={heroSlides[currentHeroSlide].image}
                  alt={heroSlides[currentHeroSlide].title}
                  className="hero-slide-img"
                  decoding="async"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.1))",
                    transition: "transform 0.4s cubic-bezier(0.2, 0, 0, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </Link>

              {/* Next Button */}
              <button
                onClick={() => goToSlide(currentHeroSlide + 1)}
                className="carousel-arrow"
                aria-label="Next Slide"
                style={{
                  position: "absolute",
                  right: 8,
                  zIndex: 2,
                  background: "var(--kalbe-surface-elevated)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--kalbe-border)",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--kalbe-text-main)",
                  boxShadow: "var(--kalbe-card-shadow)",
                }}
              >
                <HiOutlineChevronRight style={{ fontSize: 16 }} />
              </button>
            </div>

            {/* Slide Info & Quick Link */}
            <div style={{ marginTop: 14, textAlign: "center" }}>
              <Link
                to={`/product/${heroSlides[currentHeroSlide].portfolioId}`}
                style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
              >
                <div
                  key={`title-${currentHeroSlide}`}
                  className="hero-slide-img"
                  style={{
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                    fontSize: "clamp(18px, 2.4vw, 22px)",
                    fontWeight: 900,
                    color: "var(--kalbe-text-main)",
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  {heroSlides[currentHeroSlide].title}
                  <HiOutlineChevronRight style={{ fontSize: 16, color: heroSlides[currentHeroSlide].accentColor }} />
                </div>
              </Link>
              <div
                style={{
                  fontSize: "clamp(12px, 1.5vw, 13px)",
                  color: "var(--kalbe-text-muted)",
                  fontWeight: 500,
                  marginTop: 4,
                  lineHeight: 1.4,
                }}
              >
                {heroSlides[currentHeroSlide].desc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PORTFOLIOS ===================== */}
      <section
        id="portfolios"
        style={{ maxWidth: 1320, margin: "0 auto", padding: "36px 5% 56px" }}
        className="section-fade"
      >
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--kalbe-green)",
              textTransform: "uppercase",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              padding: "5px 16px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 10,
            }}
          >
            Core Healthcare Portfolios
          </span>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(26px, 4.5vw, 40px)",
              color: "var(--kalbe-text-main)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            ផលប័ត្រផលិតផលតាមក្រុមឯកទេស
          </h2>
        </div>

        {/* Portfolio tabs */}
        <div className="portfolio-grid">
          {products.map((p) => {
            const isSelected = p.id === selectedPortfolioId;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPortfolioId(p.id)}
                className="portfolio-tab-btn"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedPortfolioId(p.id)}
                style={{
                  background: "var(--kalbe-surface)",
                  borderRadius: 22,
                  padding: "clamp(18px, 2.4vw, 24px)",
                  border: isSelected ? "2px solid var(--kalbe-green)" : "2px solid var(--kalbe-border)",
                  boxShadow: isSelected
                    ? "0 20px 44px var(--kalbe-glow)"
                    : "var(--kalbe-card-shadow)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, minHeight: 28 }}>
                  <span
                    style={{
                      fontSize: "clamp(10.5px, 1.1vw, 11.5px)",
                      fontWeight: 700,
                      color: isSelected ? "#FFFFFF" : "var(--kalbe-green)",
                      background: isSelected
                        ? "linear-gradient(135deg, #0D6E38, #16A34A)"
                        : "rgba(16, 185, 129, 0.15)",
                      border: isSelected
                        ? "1px solid #16A34A"
                        : "1px solid rgba(16, 185, 129, 0.3)",
                      padding: "4px 10px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "68%",
                    }}
                  >
                    {p.badge}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(10.5px, 1.1vw, 11.5px)",
                      color: "var(--kalbe-text-muted)",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      background: "var(--kalbe-surface-elevated)",
                      border: "1px solid var(--kalbe-border)",
                      padding: "4px 9px",
                      borderRadius: 20,
                      flexShrink: 0,
                    }}
                  >
                    {p.subProducts.length} ផលិតផល
                  </span>
                </div>

                <div
                  style={{
                    height: "clamp(180px, 25vw, 240px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: "6px",
                    overflow: "hidden",
                    border: "1px solid var(--kalbe-border)",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(18px, 2.3vw, 23px)",
                      fontWeight: 800,
                      color: isSelected ? "var(--kalbe-green)" : "var(--kalbe-text-main)",
                      marginBottom: 6,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(12.5px, 1.4vw, 13px)",
                      color: "var(--kalbe-text-muted)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
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
                    borderTop: "1px solid var(--kalbe-border)",
                    minHeight: 44,
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(11.5px, 1.3vw, 12.5px)",
                      fontWeight: 700,
                      color: isSelected ? "var(--kalbe-green)" : "var(--kalbe-text-muted)",
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: isSelected ? "var(--kalbe-green)" : "transparent",
                        border: isSelected ? "none" : "1.5px solid var(--kalbe-text-muted)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {isSelected ? "កំពុងមើល" : "ជ្រើសរើសដើម្បីមើល"}
                  </span>
                  <Link
                    to={`/product/${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: "clamp(11.5px, 1.3vw, 12.5px)",
                      fontWeight: 700,
                      color: "var(--kalbe-text-main)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      padding: "5px 12px",
                      borderRadius: 10,
                      background: "var(--kalbe-surface-elevated)",
                      border: "1px solid var(--kalbe-border)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--kalbe-green)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--kalbe-surface-elevated)";
                      e.currentTarget.style.color = "var(--kalbe-text-main)";
                    }}
                  >
                    បើកទំព័រពេញ →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected portfolio products */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 22,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ flex: 1, minWidth: "240px" }}>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(19px, 2.6vw, 24px)",
                  color: "var(--kalbe-text-main)",
                  fontWeight: 800,
                }}
              >
                {currentPortfolio.title} Products
              </h3>
              <p style={{ fontSize: 13, color: "var(--kalbe-text-muted)", margin: "4px 0 0", lineHeight: 1.5 }}>
                {currentPortfolio.description}
              </p>
            </div>
            <Link
              to={`/product/${currentPortfolio.id}`}
              style={{
                color: "var(--kalbe-green)",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "8px 16px",
                borderRadius: 30,
                background: "var(--kalbe-surface-elevated)",
                border: "1.5px solid var(--kalbe-border)",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--kalbe-green)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--kalbe-surface-elevated)";
                e.currentTarget.style.color = "var(--kalbe-green)";
              }}
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="subproducts-grid" key={currentPortfolio.id}>
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