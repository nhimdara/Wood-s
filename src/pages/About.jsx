// pages/About.jsx
import React, { useEffect } from "react";
import Nav from "../components/layout/ui/Nav";

import {
  HiOutlineChevronRight,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from "react-icons/hi";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: HiOutlineHeart,
      title: "Passion for Quality",
      description: "Every product is crafted with love and attention to detail",
    },
    {
      icon: HiOutlineTruck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping across Cambodia",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "100% Authentic",
      description: "Guaranteed genuine products from trusted sources",
    },
    {
      icon: HiOutlineUsers,
      title: "Customer First",
      description: "Dedicated support and satisfaction guaranteed",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        
        .feature-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(139,94,60,0.08) !important;
        }
        
        @media (max-width: 768px) {
          .mission-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>

      <Nav />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 5% 60px",
          background: "linear-gradient(135deg, #FFF8F2 0%, #FEF5EC 100%)",
        }}
      >
        <div>
          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#8B5E3C",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Our Story
          </span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "72px",
              fontWeight: 800,
              color: "#3D2B1F",
              lineHeight: 1.1,
              marginBottom: 24,
              animationDelay: "0.1s",
            }}
          >
            Crafting Excellence
            <br />
            <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
              Since 2010
            </span>
          </h1>
          <p
            className="fade-up"
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 700,
              margin: "0 auto",
              animationDelay: "0.2s",
            }}
          >
            WOOD'S Cambodia is more than just a brand — it's a testament to the
            rich culinary heritage of Cambodia, combining traditional recipes
            with modern excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="mission-section"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 5%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "44px",
              fontWeight: 700,
              color: "#3D2B1F",
              marginBottom: 24,
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#7A5C4A",
              marginBottom: 20,
            }}
          >
            At WOOD'S Cambodia, our mission is to bring the authentic taste of
            Cambodian craftsmanship to every home. We believe in preserving
            traditional methods while embracing innovation to deliver the
            highest quality products.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#7A5C4A",
            }}
          >
            Every product we create tells a story of dedication, from the
            careful selection of ingredients to the meticulous crafting process.
            We take pride in offering products that are not just delicious, but
            also carry the warmth of Cambodian hospitality.
          </p>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "linear-gradient(135deg, #8B5E3C 0%, #5C3D2E 100%)",
              borderRadius: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(92,61,46,0.15)",
              color: "#FAF6F0",
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            🏠 WOOD'S
            <br />
            Cambodia
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ background: "#FFF8F2", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "44px",
              fontWeight: 700,
              color: "#3D2B1F",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Why Choose{" "}
            <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
              WOOD'S
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#7A5C4A",
              marginBottom: 48,
              fontSize: "17px",
            }}
          >
            Discover what makes our products special
          </p>
          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="feature-card"
                  style={{
                    textAlign: "center",
                    padding: "40px 24px",
                    background: "#FFFFFF",
                    borderRadius: "24px",
                    border: "1px solid rgba(139,94,60,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "16px",
                      background: "rgba(139,94,60,0.1)",
                      borderRadius: "50%",
                      marginBottom: 20,
                    }}
                  >
                    <Icon
                      style={{
                        fontSize: "32px",
                        color: "#8B5E3C",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      marginBottom: 12,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#7A5C4A",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          maxWidth: 1000,
          margin: "80px auto",
          padding: "0 5%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #3D2B1F 0%, #5C3D2E 100%)",
            borderRadius: "32px",
            padding: "60px 40px",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "38px",
              fontWeight: 700,
              color: "#FAF6F0",
              marginBottom: 16,
            }}
          >
            Ready to Experience the Difference?
          </h2>
          <p
            style={{
              color: "rgba(250,246,240,0.8)",
              marginBottom: 32,
              fontSize: "17px",
            }}
          >
            Join our community of satisfied customers and discover the authentic
            taste of Cambodia.
          </p>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#C49A6C",
              color: "#3D2B1F",
              padding: "14px 36px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "#E8D5B7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#C49A6C";
            }}
          >
            Shop Now <HiOutlineChevronRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
