// components/layout/ui/PositioningFrameworkCard.jsx
import React, { useState } from "react";
import { PRODUCT_THEMES } from "../../data/products";

export default function PositioningFrameworkCard({ product }) {
  const [activeStep, setActiveStep] = useState("who");

  if (!product || !product.framework) return null;
  const fw = product.framework;

  // Retrieve dynamic packaging theme for this product
  const theme = PRODUCT_THEMES[product.id] || {
    primary: "#0D6E38",
    dark: "#006400",
    bg: "#F8FAF6",
    light: "#F0FDF4",
    badge: "linear-gradient(135deg, #1A241A, #0D6E38)",
    glow: "rgba(13, 110, 56, 0.15)",
    border: "rgba(13, 110, 56, 0.2)",
  };

  const steps = [
    { id: "who", label: "1. WHO", title: "Target Patient" },
    { id: "what", label: "2. WHAT", title: "Identity & Composition" },
    { id: "why", label: "3. WHY", title: "Feature → Benefit" },
    { id: "how", label: "4. HOW", title: "Dose & Preparation" },
    { id: "say", label: "5. SAY", title: "Product Detailing" },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: `1px solid ${theme.border}`,
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: `0 20px 40px ${theme.glow}`,
      }}
    >
      <style>{`
        .step-nav-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-bottom: 20px;
        }

        .step-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 12px 8px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 64px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .step-nav-container {
            display: flex;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
            gap: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .step-nav-container::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
          .step-nav-container::-webkit-scrollbar-button {
            display: none;
          }
          .step-btn {
            min-width: 110px;
            flex: 1 0 auto;
            padding: 10px 8px;
          }
        }
      `}</style>

      <div style={{ marginBottom: 18, textAlign: "center" }}>
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.primary,
            textTransform: "uppercase",
            background: theme.light,
            padding: "4px 14px",
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 6,
          }}
        >
          Standardized Detailing System
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 3.5vw, 26px)",
            color: "#1A241A",
            fontWeight: 800,
            margin: "2px 0",
          }}
        >
          Product Positioning Framework
        </h3>
        <p style={{ fontSize: 12.5, color: "#4A5A4A", margin: "4px 0 0" }}>
          ក្របខណ្ឌបង្ហាញផលិតផល 5 ជំហាន (WHO, WHAT, WHY, HOW, SAY) សម្រាប់ <strong style={{ color: theme.primary }}>{product.title}</strong>
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="step-nav-container">
        {steps.map((s) => {
          const isActive = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className="step-btn"
              style={{
                border: isActive ? `2px solid ${theme.primary}` : "1px solid rgba(0,0,0,0.08)",
                background: isActive ? theme.light : "#FFFFFF",
                boxShadow: isActive ? `0 4px 12px ${theme.glow}` : "none",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? theme.primary : "#1A241A" }}>
                {s.label}
              </span>
              <span style={{ fontSize: 11, color: isActive ? theme.primary : "#4A5A4A", fontWeight: 500, lineHeight: 1.2 }}>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step Content Box */}
      <div
        style={{
          background: theme.bg,
          borderRadius: 18,
          padding: "clamp(16px, 3vw, 24px)",
          border: `1px solid ${theme.border}`,
          minHeight: 180,
        }}
      >
        {/* WHO */}
        {activeStep === "who" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: theme.primary, fontWeight: 700 }}>
                1. WHO — សម្រាប់អ្នកជំងឺណា? (Target Patient / Indication)
              </h4>
              <span style={{ fontSize: 12, color: "#4A5A4A" }}>
                បញ្ជាក់យ៉ាងច្បាស់លាស់នូវក្រុមអ្នកជំងឺដែលត្រូវប្រើប្រាស់
              </span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {Array.isArray(fw.who) ? (
                fw.who.map((w, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#FFFFFF",
                      padding: "12px 16px",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "#1A241A",
                      fontWeight: 500,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                    }}
                  >
                    <span style={{ color: theme.primary, fontWeight: 700 }}>•</span>
                    {w}
                  </div>
                ))
              ) : (
                <div style={{ fontSize: 14, color: "#1A241A" }}>{fw.who}</div>
              )}
            </div>
          </div>
        )}

        {/* WHAT */}
        {activeStep === "what" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: theme.primary, fontWeight: 700 }}>
                2. WHAT — អត្តសញ្ញាណ & សមាសធាតុ (Identity + Composition)
              </h4>
              <span style={{ fontSize: 12, color: "#4A5A4A" }}>
                ព័ត៌មានលម្អិតអំពីសារធាតុសកម្ម កម្រិត ទម្រង់ និងបច្ចេកវិទ្យា
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {Object.entries(fw.what || {}).map(([key, val], idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#4A5A4A", textTransform: "uppercase", fontWeight: 600 }}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: theme.primary, marginTop: 4 }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY */}
        {activeStep === "why" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: theme.primary, fontWeight: 700 }}>
                3. WHY — ហេតុអ្វីជ្រើសរើស? (Feature → Benefit)
              </h4>
              <span style={{ fontSize: 12, color: "#4A5A4A" }}>
                លក្ខណៈពិសេសនីមួយៗផ្តល់អត្ថប្រយោជន៍ព្យាបាលជាក់ស្តែង
              </span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {Array.isArray(fw.why) &&
                fw.why.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#FFFFFF",
                      padding: "14px 16px",
                      borderRadius: 14,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span
                        style={{
                          background: theme.light,
                          color: theme.primary,
                          fontSize: 10.5,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 6,
                          textTransform: "uppercase",
                        }}
                      >
                        Feature
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#1A241A" }}>
                        {item.feature}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, paddingLeft: 4 }}>
                      <span style={{ color: theme.primary, fontSize: 13, marginTop: 1 }}>↳</span>
                      <span style={{ fontSize: 13.5, color: "#4A5A4A", lineHeight: 1.5 }}>
                        <strong style={{ color: theme.dark }}>Benefit:</strong> {item.benefit}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* HOW */}
        {activeStep === "how" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: theme.primary, fontWeight: 700 }}>
                4. HOW — របៀបប្រើប្រាស់ & កម្រិត (Dose, Preparation & Use)
              </h4>
              <span style={{ fontSize: 12, color: "#4A5A4A" }}>
                កម្រិតប្រើប្រាស់ ការតាមដាន និងការរក្សាទុកត្រឹមត្រូវ
              </span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {Object.entries(fw.how || {}).map(([key, val], idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: `1px solid ${theme.border}`,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      background: theme.light,
                      color: theme.primary,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                      minWidth: 90,
                      textAlign: "center",
                      marginTop: 2,
                    }}
                  >
                    {key}
                  </span>
                  <span style={{ fontSize: 13.5, color: "#1A241A", lineHeight: 1.6 }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAY */}
        {activeStep === "say" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: theme.primary, fontWeight: 700 }}>
                5. SAY — សារសំខាន់សម្រាប់វេជ្ជបណ្ឌិត (Product Detailing / Elevator Pitch)
              </h4>
              <span style={{ fontSize: 12, color: "#4A5A4A" }}>
                សារសង្ខេបគន្លឹះដើម្បី Detailing ទៅកាន់ Healthcare Professionals
              </span>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "18px 20px",
                borderLeft: `4px solid ${theme.primary}`,
                boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  lineHeight: 1.8,
                  color: "#1A241A",
                  fontStyle: "italic",
                }}
              >
                "{fw.say}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
