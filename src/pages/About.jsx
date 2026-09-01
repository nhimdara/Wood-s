// pages/About.jsx - WOOD'S / Kalbe Healthcare
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import {
  HiOutlineChevronRight,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { FaFlask, FaUserMd, FaLeaf, FaMedkit } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: FaFlask,
      title: "Evidence-Based Science",
      description:
        "Every medication and clinical nutrition formula is backed by clinical studies and international guidelines (such as KDIGO).",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Global Quality Standards",
      description:
        "Manufactured in state-of-the-art cGMP certified facilities across South Korea, Germany, and Indonesia.",
    },
    {
      icon: FaUserMd,
      title: "Healthcare Professional Trust",
      description:
        "Trusted by nephrologists, endocrinologists, pediatricians, oncologists, and clinicians across Cambodia.",
    },
    {
      icon: HiOutlineHeart,
      title: "Patient-Centric Care",
      description:
        "Dedicated to improving patient health outcomes, managing chronic conditions, and providing precision medical nutrition.",
    },
  ];

  const pillars = [
    {
      title: "ENDO METABOLIC",
      subtitle: "Chronic Disease & Diabetes Management",
      desc: "Advanced solutions for CKD Anemia (EFESA, HEMAPO), Pre-dialysis Keto Amino Acids (NOCID), Diabetic Peripheral Neuropathy (KALXID 100% R-ALA, KALMECO Active B12), and Type 2 Diabetes (NEVOX XR Hydrophilic Gel Matrix).",
      link: "/product/1",
    },
    {
      title: "MEDNUT NUTRITION",
      subtitle: "Disease-Specific Precision Medical Nutrition",
      desc: "Targeted clinical nutrition formulations for Pre-dialysis CKD (NEPHRISOL), Dialysis (NEPHRISOL-D), Respiratory & COPD (PULMOSOL), Oncology & Surgery (NUTRICAN), and Chronic Liver Disease (HEPATOSOL).",
      link: "/product/2",
    },
    {
      title: "CHILDREN HEALTHCARE",
      subtitle: "Pediatric Wellness & Natural Relief",
      desc: "Trusted pediatric care including Multi-Strain Synbiotics with Dual Coating™ Technology (RILLUS JR), German Special Ivy Leaf EA 575® Cough Syrup (PROSPAN), and 3rd Generation Oral Suspension Antibiotics (KALMAXIME DS).",
      link: "/product/3",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        
        .feature-card {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(92,61,46,0.12) !important;
        }

        .pillar-card {
          transition: all 0.3s ease;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: #8B5E3C !important;
        }
      `}</style>

      <Nav />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "45vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(110px, 14vw, 130px) 5% 50px",
          background: "linear-gradient(135deg, #FFF8F2 0%, #FEF5EC 100%)",
          borderBottom: "1px solid rgba(139,94,60,0.1)",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#8B5E3C",
              marginBottom: 14,
              textTransform: "uppercase",
              background: "rgba(139,94,60,0.1)",
              padding: "5px 16px",
              borderRadius: 30,
            }}
          >
            About WOOD'S & Kalbe Healthcare
          </span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 800,
              color: "#3D2B1F",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Advancing Healthcare &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5E3C 0%, #C49A6C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Medical Nutrition
            </span>
          </h1>
          <p
            className="fade-up"
            style={{
              fontSize: "clamp(15px, 2.8vw, 17px)",
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            WOOD'S Cambodia, in partnership with Kalbe Healthcare, is dedicated to delivering high-quality pharmaceutical therapeutics and disease-specific medical nutrition formulas to enhance health outcomes across Cambodia.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(50px, 8vw, 80px) 5%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(30px, 5vw, 60px)",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#8B5E3C",
              textTransform: "uppercase",
              marginBottom: 8,
              display: "block",
            }}
          >
            Our Mission & Commitment
          </span>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4.5vw, 38px)",
              fontWeight: 800,
              color: "#3D2B1F",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Bersama Sehatkan Bangsa —{" "}
            <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
              Improving Lives Through Science
            </span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#7A5C4A",
              marginBottom: 16,
            }}
          >
            We believe that every patient deserves access to state-of-the-art medical treatments and precision clinical nutrition tailored to their specific metabolic requirements.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#7A5C4A",
              marginBottom: 24,
            }}
          >
            From specialized nephrology solutions that delay dialysis progression to natural pediatric remedies and oncology nutrition, our products adhere to strict international pharmaceutical manufacturing standards and clinical guideline recommendations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                padding: "16px",
                borderRadius: 16,
                border: "1px solid rgba(139,94,60,0.12)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#8B5E3C" }}>100%</div>
              <div style={{ fontSize: 13, color: "#3D2B1F", fontWeight: 600, marginTop: 4 }}>
                Authentic & Certified
              </div>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                padding: "16px",
                borderRadius: 16,
                border: "1px solid rgba(139,94,60,0.12)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#8B5E3C" }}>3 Major</div>
              <div style={{ fontSize: 13, color: "#3D2B1F", fontWeight: 600, marginTop: 4 }}>
                Specialized Portfolios
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "clamp(20px, 4vw, 32px)",
              padding: "clamp(20px, 4vw, 36px)",
              border: "1px solid rgba(139,94,60,0.15)",
              boxShadow: "0 20px 40px rgba(92,61,46,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="/images/ENDO-METABOLIC.png"
              alt="Kalbe Healthcare Portfolios"
              style={{
                width: "100%",
                maxHeight: 280,
                objectFit: "contain",
                marginBottom: 16,
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#3D2B1F",
                background: "rgba(139,94,60,0.06)",
                padding: "10px 16px",
                borderRadius: 14,
              }}
            >
              Innovating For Healthier Communities Across Cambodia
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section style={{ background: "#FFF8F2", padding: "clamp(50px, 8vw, 80px) 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
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
              Portfolio Breakdown
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                color: "#3D2B1F",
                fontWeight: 800,
              }}
            >
              Our Core Therapeutic Areas
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="pillar-card"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  padding: "28px 24px",
                  border: "1px solid rgba(139,94,60,0.12)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#3D2B1F",
                    marginBottom: 6,
                  }}
                >
                  {pillar.title}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#8B5E3C",
                    marginBottom: 14,
                  }}
                >
                  {pillar.subtitle}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#7A5C4A",
                    lineHeight: 1.6,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {pillar.desc}
                </p>
                <Link
                  to={pillar.link}
                  style={{
                    color: "#8B5E3C",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Explore Portfolio <HiOutlineChevronRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wood's Features Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(50px, 8vw, 80px) 5%" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(26px, 4vw, 36px)",
              color: "#3D2B1F",
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            Why Healthcare Professionals Choose WOOD'S
          </h2>
          <p style={{ color: "#7A5C4A", fontSize: 14, margin: 0 }}>
            Dedicated to quality, clinical efficacy, and patient well-being
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="feature-card"
                style={{
                  background: "#FFFFFF",
                  padding: "28px 20px",
                  borderRadius: 20,
                  border: "1px solid rgba(139,94,60,0.1)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(139,94,60,0.1)",
                    color: "#8B5E3C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#3D2B1F", marginBottom: 10 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: "#7A5C4A", lineHeight: 1.6, margin: 0 }}>
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
