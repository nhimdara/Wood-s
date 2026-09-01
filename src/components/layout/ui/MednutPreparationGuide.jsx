// components/layout/ui/MednutPreparationGuide.jsx
import React, { useState } from "react";
import { MEDNUT_PREPARATION_MATRIX, MEDNUT_MIXING_TIPS, PRODUCT_THEMES } from "../../data/products";

export default function MednutPreparationGuide({ initialProduct = "nephrisol" }) {
  const [selectedId, setSelectedId] = useState(initialProduct);
  const [servings, setServings] = useState(1);

  const selectedProduct =
    MEDNUT_PREPARATION_MATRIX.find((p) => p.id === selectedId) ||
    MEDNUT_PREPARATION_MATRIX[0];

  const totalCalories = selectedProduct.energyKcal * servings;
  const totalProtein = (selectedProduct.proteinG * servings).toFixed(1);
  const totalWater = selectedProduct.waterMl * servings;
  const totalYield = selectedProduct.totalYieldMl * servings;

  // Retrieve current active packaging theme
  const theme = PRODUCT_THEMES[selectedId] || {
    primary: "#0D6E38",
    dark: "#006400",
    bg: "#F8FAF6",
    light: "#F0FDF4",
    border: "rgba(13, 110, 56, 0.2)",
    glow: "rgba(13, 110, 56, 0.15)",
  };

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAF6 100%)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: `1px solid ${theme.border}`,
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: `0 20px 40px ${theme.glow}`,
        transition: "all 0.3s ease",
      }}
    >
      <style>{`
        .mednut-pills-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .mednut-pill-btn {
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .mednut-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .mednut-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .mednut-pill-btn {
            padding: 7px 12px;
            font-size: 12px;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 18,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: theme.primary,
              textTransform: "uppercase",
              background: theme.light,
              padding: "4px 12px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 6,
            }}
          >
            Clinical Preparation Tool
          </span>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(18px, 3.5vw, 24px)",
              color: "#1A241A",
              fontWeight: 700,
              margin: 0,
            }}
          >
            MEDNUT Product Preparation Guide
          </h3>
          <p style={{ fontSize: 12.5, color: "#4A5A4A", marginTop: 2, marginBottom: 0 }}>
            មគ្គុទ្ទេសក៍ និងឧបករណ៍គណនាកម្រិតលាយម្សៅអាហារូបត្ថម្ភវេជ្ជសាស្ត្រ
          </p>
        </div>

        {/* Servings Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#FFFFFF",
            padding: "5px 12px",
            borderRadius: 30,
            border: `1px solid ${theme.border}`,
            boxShadow: `0 2px 8px ${theme.glow}`,
          }}
        >
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1A241A" }}>
            ចំនួន Serving:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setServings((prev) => Math.max(1, prev - 1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: `1px solid ${theme.primary}`,
                background: servings > 1 ? theme.primary : "transparent",
                color: servings > 1 ? "#FFFFFF" : theme.primary,
                cursor: servings > 1 ? "pointer" : "not-allowed",
                fontWeight: 700,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              -
            </button>
            <span style={{ fontSize: 15, fontWeight: 700, color: theme.primary, minWidth: 18, textAlign: "center" }}>
              {servings}
            </span>
            <button
              onClick={() => setServings((prev) => Math.min(5, prev + 1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: `1px solid ${theme.primary}`,
                background: theme.primary,
                color: "#FFFFFF",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Product Selector Pills with touch scroll */}
      <div className="mednut-pills-row">
        {MEDNUT_PREPARATION_MATRIX.map((p) => {
          const isSelected = p.id === selectedId;
          const pTheme = PRODUCT_THEMES[p.id] || { primary: "#0D6E38" };
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className="mednut-pill-btn"
              style={{
                border: isSelected ? `2px solid ${pTheme.primary}` : "1px solid rgba(0,0,0,0.1)",
                background: isSelected ? pTheme.primary : "#FFFFFF",
                color: isSelected ? "#FFFFFF" : "#1A241A",
                boxShadow: isSelected ? `0 4px 12px ${pTheme.primary}40` : "none",
              }}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* 2x2 on Mobile / 4-column on Desktop Metrics Grid */}
      <div className="mednut-stats-grid">
        {/* Metric 1: Energy */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: `1px solid ${theme.border}`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#4A5A4A", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ថាមពល (ENERGY)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: theme.primary }}>
            {totalCalories} <span style={{ fontSize: 12, fontWeight: 600 }}>kcal</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#4A5A4A", marginTop: 2 }}>
            ({selectedProduct.energyKcal} kcal/srv)
          </div>
        </div>

        {/* Metric 2: Protein */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: `1px solid ${theme.border}`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#4A5A4A", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ប្រូតេអ៊ីន (PROTEIN)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: theme.primary }}>
            {totalProtein} <span style={{ fontSize: 12, fontWeight: 600 }}>g</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#4A5A4A", marginTop: 2 }}>
            ({selectedProduct.proteinG} g/srv)
          </div>
        </div>

        {/* Metric 3: Water Required */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: `1px solid ${theme.border}`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#4A5A4A", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ទឹកក្តៅអ៊ុនៗ
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: theme.primary }}>
            {totalWater} <span style={{ fontSize: 12, fontWeight: 600 }}>mL</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#4A5A4A", marginTop: 2 }}>
            ({selectedProduct.waterMl} mL/srv)
          </div>
        </div>

        {/* Metric 4: Total Volume Yield */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: `1px solid ${theme.border}`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#4A5A4A", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            បរិមាណលាយរួច (YIELD)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: theme.primary }}>
            {totalYield} <span style={{ fontSize: 12, fontWeight: 600 }}>mL</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#4A5A4A", marginTop: 2 }}>
            ({selectedProduct.totalYieldMl} mL/srv)
          </div>
        </div>
      </div>

      {/* Detail Specs Bar */}
      <div
        style={{
          background: theme.bg,
          borderRadius: 14,
          padding: "14px 16px",
          border: `1px solid ${theme.border}`,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          <strong style={{ fontSize: 14, color: "#1A241A" }}>
            {selectedProduct.name} ({selectedProduct.indicationKh}): {selectedProduct.servingDose}
          </strong>
          <span style={{ fontSize: 11.5, color: theme.primary, fontWeight: 700, background: theme.light, padding: "3px 10px", borderRadius: 10 }}>
            រសជាតិ: {selectedProduct.flavors}
          </span>
        </div>
        <p style={{ fontSize: 12.5, color: "#4A5A4A", margin: 0, lineHeight: 1.5 }}>
          <strong>លក្ខណៈពិសេស:</strong> {selectedProduct.specialNote}
        </p>
      </div>

      {/* Standard Mixing Protocol */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 14,
          padding: "14px 16px",
          border: `1px solid ${theme.border}`,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1A241A", marginBottom: 10 }}>
          របៀបលាយត្រឹមត្រូវ (Standard Mixing Protocol):
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 10,
          }}
        >
          {MEDNUT_MIXING_TIPS.map((stepText, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                padding: "10px 12px",
                background: theme.bg,
                borderRadius: 10,
                fontSize: 12.5,
                color: "#1A241A",
                lineHeight: 1.5,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: theme.primary,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 11.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </div>
              <div style={{ flex: 1 }}>
                {typeof stepText === "string" ? stepText : (stepText.desc || stepText.title)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
