// pages/Homepage.jsx - Fixed image paths
import React, { useEffect, useState } from "react";
import Nav from "../components/layout/ui/Nav";
import logo from "../components/assets/logo/logo.png";
import Card from "../components/layout/ui/Card";
import { products } from "../components/data/products";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

// FIXED: Updated image paths to match your actual folder structure
const category = [
  {
    id: 1,
    title: "Fresh Milk",
    image: "/images/milk.png", // ✅ Now using your actual milk.png
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Premium Tea",
    image: "/images/tea.png", // ✅ Now using your actual tea.png
    badge: "New",
  },
  {
    id: 3,
    title: "Artisan Coffee",
    image: "/images/coffee.png", // ✅ Now using your actual coffee.png
    badge: "Limited",
  },
  {
    id: 4,
    title: "Traditional Noodle",
    image: "/images/noodle.png", // ✅ Now using your actual noodle.png
    badge: "Authentic",
  },
];

// Rest of your component remains exactly the same...

const Homepage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
      }}
    >
      <style>{`
        /* No external fonts - using system fonts only */
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: #FAF6F0;
          overflow-x: hidden;
        }
        
        /* Serif font fallback for headings */
        h1, h2, h3, .serif {
          font-family: 'Georgia', 'Times New Roman', Times, serif;
        }
        
        /* Sans-serif for body */
        body, p, span, a, button, .sans {
          font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatImg {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }
          50% {
            transform: translateY(-20px) rotate(-1deg);
          }
        }
        
        @keyframes floatImg2 {
          0%, 100% {
            transform: translateY(0px) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(139,94,60,0.3);
          }
          50% {
            border-color: rgba(139,94,60,0.8);
          }
        }
        
        .hero-img {
          animation: floatImg 6s ease-in-out infinite;
        }
        
        .hero-img-2 {
          animation: floatImg2 7s ease-in-out infinite;
        }
        
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }
        
        .category-card {
          transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
        }
        
        .category-card:hover {
          transform: translateY(-12px);
        }
        
        .social-icon {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        
        .social-icon:hover {
          transform: translateY(-4px) scale(1.05);
          background: #8B5E3C;
          border-color: #8B5E3C;
        }
        
        .social-icon:hover svg {
          color: #FAF6F0;
        }
        
        @media (max-width: 1024px) {
          .hero-section {
            gap: 40px !important;
            padding: 100px 5% 60px !important;
          }
          .about-section {
            gap: 50px !important;
            margin: 40px auto !important;
          }
          .cta-section {
            padding: 60px 50px !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 100px 5% 60px !important;
            gap: 40px !important;
          }
          .hero-section h1 {
            font-size: clamp(42px, 8vw, 56px) !important;
          }
          .hero-section p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .about-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 5% !important;
            border-radius: 32px !important;
          }
          .cta-section {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding: 50px 30px !important;
            gap: 30px !important;
            border-radius: 32px !important;
          }
          .cta-section h2 {
            word-break: keep-all !important;
            white-space: normal !important;
          }
          .cta-section p {
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center !important;
          }
          .cta-section a {
            white-space: nowrap !important;
            display: inline-flex !important;
            margin: 0 auto !important;
          }
          .featured-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        
        @media (max-width: 640px) {
          .hero-section {
            padding: 80px 5% 50px !important;
          }
          .about-section h2 {
            font-size: clamp(32px, 6vw, 42px) !important;
          }
          .cta-section {
            padding: 40px 24px !important;
            margin: 40px 5% !important;
          }
          .cta-section h2 {
            font-size: clamp(24px, 5vw, 28px) !important;
          }
          .cta-section p {
            font-size: 14px !important;
          }
          .cta-section a {
            padding: 12px 28px !important;
            font-size: 14px !important;
            white-space: nowrap !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section .hero-img {
            max-width: 280px !important;
          }
          .about-section {
            padding: 40px 5% !important;
          }
        }
      `}</style>

      <Nav />

      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 60,
          padding: "120px 5% 80px",
          maxWidth: 1400,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div>
          <div className="fade-up" style={{ animationDelay: "0s" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#8B5E3C",
                marginBottom: 24,
                textTransform: "uppercase",
                background:
                  "linear-gradient(135deg, rgba(139,94,60,0.1) 0%, rgba(139,94,60,0.05) 100%)",
                padding: "8px 20px",
                borderRadius: 40,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#8B5E3C",
                  animation: "borderGlow 1.5s ease-in-out infinite",
                }}
              />
              Welcome to WOOD'S
            </span>
          </div>

          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(56px, 8vw, 96px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#3D2B1F",
              letterSpacing: "-0.03em",
              marginBottom: 28,
              animationDelay: "0.1s",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #8B5E3C 0%, #C49A6C 50%, #8B5E3C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              WOODS'
            </span>
            <br />
            of Cambodia
          </h1>

          <p
            className="fade-up"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 500,
              marginBottom: 40,
              animationDelay: "0.2s",
            }}
          >
            Experience the finest selection of premium products crafted with
            generations of tradition and unwavering dedication to quality.
          </p>

          <div className="fade-up" style={{ animationDelay: "0.3s" }}>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <a
                href="#featured"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)",
                  color: "#FAF6F0",
                  padding: "16px 38px",
                  borderRadius: 50,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: "0 10px 25px rgba(107,66,38,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(107,66,38,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(107,66,38,0.3)";
                }}
              >
                Shop Now <HiOutlineChevronRight style={{ fontSize: 18 }} />
              </a>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://web.facebook.com/woodscambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid rgba(139,94,60,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(139,94,60,0.05)",
                  }}
                >
                  <FaFacebook style={{ color: "#8B5E3C", fontSize: 20 }} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid rgba(139,94,60,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(139,94,60,0.05)",
                  }}
                >
                  <FaInstagram style={{ color: "#8B5E3C", fontSize: 20 }} />
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid rgba(139,94,60,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(139,94,60,0.05)",
                  }}
                >
                  <FaTelegramPlane style={{ color: "#8B5E3C", fontSize: 20 }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", textAlign: "center" }}>
          <img
            className="hero-img"
            src={logo}
            alt="WOOD'S Cambodia"
            style={{
              width: "100%",
              maxWidth: "clamp(280px, 50vw, 550px)",
              height: "auto",
              borderRadius: "50%",
              aspectRatio: "1/1",
              objectFit: "contain",
              transform: "rotate(-1deg)",
              position: "relative",
              margin: "0 auto",
              display: "block",
              boxShadow: "0 40px 80px rgba(92,61,46,0.25)",
              background: "linear-gradient(135deg, #FFF8F2, #FAF6F0)",
              padding: 20,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "110%",
              height: "110%",
              borderRadius: "50%",
              border: "2px dashed rgba(139,94,60,0.2)",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      <section
        id="featured"
        style={{ padding: "40px 5% 80px", maxWidth: 1400, margin: "0 auto" }}
      >
        <div
          className="animate-on-scroll"
          id="featured-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
            opacity: isVisible["featured-header"] ? 1 : 0,
            transform: isVisible["featured-header"]
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#8B5E3C",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: 12,
              }}
            >
              Handpicked Selection
            </p>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 700,
                color: "#3D2B1F",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Featured
              <br />
              <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
                Collections
              </span>
            </h2>
          </div>
          <a
            href="/product"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#8B5E3C",
              textDecoration: "none",
              borderBottom: "2px solid #8B5E3C",
              paddingBottom: 6,
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#6B4226";
              e.currentTarget.style.borderBottomColor = "#6B4226";
              e.currentTarget.style.gap = "10px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8B5E3C";
              e.currentTarget.style.borderBottomColor = "#8B5E3C";
              e.currentTarget.style.gap = "6px";
            }}
          >
            View All <HiOutlineChevronRight />
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(24px, 4vw, 32px)",
          }}
        >
          {category.map((p, index) => (
            <div
              key={p.id}
              className="animate-on-scroll category-card"
              id={`card-${p.id}`}
              style={{
                opacity: isVisible[`card-${p.id}`] ? 1 : 0,
                transform: isVisible[`card-${p.id}`]
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <Card {...p} />
            </div>
          ))}
        </div>
      </section>

      <section
        className="about-section animate-on-scroll"
        id="about"
        style={{
          padding: "clamp(60px, 10vw, 100px) 5%",
          background: "linear-gradient(135deg, #FFF8F2 0%, #FEF5EC 100%)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          maxWidth: 1400,
          margin: "60px auto",
          borderRadius: "clamp(32px, 6vw, 48px)",
          opacity: isVisible["about"] ? 1 : 0,
          transform: isVisible["about"] ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
          boxShadow: "0 20px 40px rgba(92,61,46,0.08)",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              right: -20,
              bottom: -20,
              background:
                "radial-gradient(circle, rgba(139,94,60,0.05) 0%, transparent 70%)",
              borderRadius: 40,
              zIndex: 0,
            }}
          />
          <div
            style={{
              width: "100%",
              borderRadius: "clamp(20px, 4vw, 28px)",
              aspectRatio: "4/5",
              background: "linear-gradient(135deg, #8B5E3C, #6B4226)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FAF6F0",
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: "bold",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(48px, 8vw, 72px)" }}>🌾</div>
              <div>CRAFTSMAN</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -25,
              right: -25,
              width: "45%",
              aspectRatio: "1",
              borderRadius: "clamp(16px, 3vw, 20px)",
              background: "linear-gradient(135deg, #C49A6C, #8B5E3C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FAF6F0",
              border: "6px solid #FAF6F0",
              boxShadow: "0 20px 40px rgba(92,61,46,0.2)",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "clamp(20px, 4vw, 28px)" }}>🪵</span>
          </div>
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "clamp(11px, 2.5vw, 12px)",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#8B5E3C",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Our Story
          </span>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(32px, 6vw, 58px)",
              fontWeight: 700,
              color: "#3D2B1F",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            WOOD'S
            <br />
            <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
              Traditional Excellence
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              lineHeight: 1.7,
              color: "#7A5C4A",
              marginBottom: 20,
            }}
          >
            For generations, we've perfected the art of crafting premium
            products that honor Cambodia's rich heritage. Each item tells a
            story of dedication, quality, and timeless tradition.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              lineHeight: 1.7,
              color: "#7A5C4A",
              marginBottom: 40,
            }}
          >
            Experience the difference of authentic craftsmanship — where every
            detail matters and quality speaks for itself.
          </p>
          <a
            href="/about"
            style={{
              fontSize: "clamp(14px, 2.8vw, 15px)",
              fontWeight: 700,
              color: "#FAF6F0",
              background: "linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)",
              padding: "clamp(14px, 3vw, 16px) clamp(32px, 6vw, 40px)",
              borderRadius: 50,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 10px 20px rgba(107,66,38,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(107,66,38,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(107,66,38,0.3)";
            }}
          >
            Discover More <HiOutlineChevronRight />
          </a>
        </div>
      </section>

      <section
        className="animate-on-scroll cta-section"
        id="cta"
        style={{
          margin: "60px 5% 80px",
          background:
            "linear-gradient(135deg, #3D2B1F 0%, #5C3D2E 50%, #6B4226 100%)",
          borderRadius: "clamp(32px, 6vw, 48px)",
          padding: "clamp(40px, 8vw, 80px) clamp(30px, 6vw, 70px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "clamp(30px, 5vw, 50px)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
          opacity: isVisible["cta"] ? 1 : 0,
          transform: isVisible["cta"] ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,154,108,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,154,108,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 48,
            border: "2px solid rgba(196,154,108,0.2)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "clamp(12px, 2.5vw, 13px)",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#C49A6C",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            GET IN TOUCH
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 700,
              color: "#FAF6F0",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Have Questions?
            <br />
            <span style={{ color: "#C49A6C", fontStyle: "italic" }}>
              We're Here to Help
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              color: "rgba(250,246,240,0.85)",
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            Whether you have questions about our products or need assistance
            with your order, our support team is ready to assist you.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <a
            href="tel:+85517591779"
            style={{
              fontSize: "clamp(14px, 2.8vw, 16px)",
              fontWeight: 700,
              color: "#3D2B1F",
              background: "linear-gradient(135deg, #C49A6C 0%, #E8D5B7 100%)",
              padding: "clamp(14px, 3vw, 18px) clamp(32px, 6vw, 48px)",
              borderRadius: 50,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #E8D5B7 0%, #C49A6C 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #C49A6C 0%, #E8D5B7 100%)";
            }}
          >
            Contact Us Now <HiOutlineChevronRight />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
