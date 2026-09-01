// components/layout/ui/PositioningFrameworkCard.jsx
import React, { useState } from "react";

export default function PositioningFrameworkCard({ product }) {
  const [activeStep, setActiveStep] = useState("who");

  if (!product || !product.framework) return null;
  const fw = product.framework;

  const steps = [
    { id: "who", label: "1. WHO", title: "Target Patient", color: "#0284C7" },
    { id: "what", label: "2. WHAT", title: "Identity & Composition", color: "#D97706" },
    { id: "why", label: "3. WHY", title: "Feature → Benefit", color: "#059669" },
    { id: "how", label: "4. HOW", title: "Dose & Preparation", color: "#EA580C" },
    { id: "say", label: "5. SAY", title: "Product Detailing", color: "#7C3AED" },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid rgba(139,94,60,0.18)",
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: "0 20px 40px rgba(92,61,46,0.08)",
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
            scrollbar-width: thin;
          }
          .step-nav-container::-webkit-scrollbar {
            height: 3px;
          }
          .step-nav-container::-webkit-scrollbar-thumb {
            background: rgba(139,94,60,0.2);
            border-radius: 4px;
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
            color: "#8B5E3C",
            textTransform: "uppercase",
            background: "rgba(139,94,60,0.1)",
            padding: "3px 12px",
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
            color: "#3D2B1F",
            fontWeight: 800,
            margin: "2px 0",
          }}
        >
          Product Positioning Framework
        </h3>
        <p style={{ fontSize: 12.5, color: "#7A5C4A", margin: "4px 0 0" }}>
          ក្របខណ្ឌបង្ហាញផលិតផល 5 ជំហាន (WHO, WHAT, WHY, HOW, SAY) សម្រាប់ {product.title}
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
                border: isActive ? `2px solid ${s.color}` : "1px solid rgba(139,94,60,0.15)",
                background: isActive ? `${s.color}15` : "#FAF6F0",
                boxShadow: isActive ? `0 4px 12px ${s.color}25` : "none",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? s.color : "#3D2B1F" }}>
                {s.label}
              </span>
              <span style={{ fontSize: 11, color: isActive ? s.color : "#8B7355", fontWeight: 500, lineHeight: 1.2 }}>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step Content Box */}
      <div
        style={{
          background: "#FAF6F0",
          borderRadius: 18,
          padding: "clamp(16px, 3vw, 24px)",
          border: "1px solid rgba(139,94,60,0.12)",
          minHeight: 180,
        }}
      >
        {/* WHO */}
        {activeStep === "who" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: "#0284C7", fontWeight: 700 }}>
                1. WHO — សម្រាប់អ្នកជំងឺណា? (Target Patient / Indication)
              </h4>
              <span style={{ fontSize: 12, color: "#7A5C4A" }}>
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
                      color: "#3D2B1F",
                      fontWeight: 500,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                    }}
                  >
                    <span style={{ color: "#0284C7", fontWeight: 700 }}>•</span>
                    {w}
                  </div>
                ))
              ) : (
                <div style={{ fontSize: 14, color: "#3D2B1F" }}>{fw.who}</div>
              )}
            </div>
          </div>
        )}

        {/* WHAT */}
        {activeStep === "what" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: "#D97706", fontWeight: 700 }}>
                2. WHAT — អត្តសញ្ញាណ & សមាសធាតុ (Identity + Composition)
              </h4>
              <span style={{ fontSize: 12, color: "#7A5C4A" }}>
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
                    border: "1px solid rgba(139,94,60,0.1)",
                  }}
                >
                  <div style={{ fontSize: 11, color: "#8B7355", textTransform: "uppercase", fontWeight: 600 }}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#3D2B1F", marginTop: 4 }}>
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
              <h4 style={{ margin: 0, fontSize: 17, color: "#059669", fontWeight: 700 }}>
                3. WHY — ហេតុអ្វីជ្រើសរើស? (Feature → Benefit)
              </h4>
              <span style={{ fontSize: 12, color: "#7A5C4A" }}>
                លក្ខណៈពិសេសប្រែក្លាយជាអត្ថប្រយោជន៍គ្លីនិកជាក់ស្តែង
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
                      border: "1px solid rgba(5,150,105,0.15)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          background: "rgba(5,150,105,0.12)",
                          color: "#059669",
                          fontWeight: 700,
                          fontSize: 12.5,
                          padding: "4px 10px",
                          borderRadius: 8,
                          display: "inline-block",
                        }}
                      >
                        {item.feature}
                      </span>
                    </div>
                    <div style={{ fontSize: 13.5, color: "#3D2B1F", lineHeight: 1.55, display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "#059669", fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>↳</span>
                      <span style={{ flex: 1 }}>{item.benefit}</span>
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
              <h4 style={{ margin: 0, fontSize: 17, color: "#EA580C", fontWeight: 700 }}>
                4. HOW — កម្រិត និងការណែនាំប្រើប្រាស់ (Dose / Use / Storage)
              </h4>
              <span style={{ fontSize: 12, color: "#7A5C4A" }}>
                ការណែនាំដូស ការលាយ និងការរក្សាទុកត្រឹមត្រូវ
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
                    borderLeft: "4px solid #EA580C",
                  }}
                >
                  <strong style={{ color: "#EA580C", fontSize: 13, textTransform: "capitalize" }}>
                    {key.replace(/([A-Z])/g, " $1")}:{" "}
                  </strong>
                  <span style={{ fontSize: 14, color: "#3D2B1F" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAY */}
        {activeStep === "say" && (
          <div>
            <div style={{ marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 17, color: "#7C3AED", fontWeight: 700 }}>
                5. SAY — ការណែនាំផលិតផល (Product Detailing)
              </h4>
              <span style={{ fontSize: 12, color: "#7A5C4A" }}>
                ខ្លឹមសារសង្ខេបសម្រាប់ Detail ដល់វេជ្ជបណ្ឌិត និងអ្នកជំងឺ
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(124,58,237,0.02) 100%)",
                borderRadius: 16,
                padding: "20px",
                border: "1px solid rgba(124,58,237,0.2)",
                fontSize: 15,
                lineHeight: 1.8,
                color: "#2E1065",
                fontWeight: 500,
              }}
            >
              <p style={{ margin: 0 }}>"{fw.say}"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
