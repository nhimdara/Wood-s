// components/layout/ui/MednutPreparationGuide.jsx
import React, { useState } from "react";
import { MEDNUT_PREPARATION_MATRIX, MEDNUT_MIXING_TIPS } from "../../data/products";

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

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #FAF6F0 100%)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid rgba(139,94,60,0.18)",
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: "0 20px 40px rgba(92,61,46,0.08)",
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
              color: "#8B5E3C",
              textTransform: "uppercase",
              background: "rgba(139,94,60,0.1)",
              padding: "3px 10px",
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
              color: "#3D2B1F",
              fontWeight: 700,
              margin: 0,
            }}
          >
            MEDNUT Product Preparation Guide
          </h3>
          <p style={{ fontSize: 12.5, color: "#7A5C4A", marginTop: 2, marginBottom: 0 }}>
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
            border: "1px solid rgba(139,94,60,0.2)",
            boxShadow: "0 2px 8px rgba(61,43,31,0.04)",
          }}
        >
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "#3D2B1F" }}>
            ចំនួន Serving:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setServings((prev) => Math.max(1, prev - 1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "1px solid #8B5E3C",
                background: servings > 1 ? "#8B5E3C" : "transparent",
                color: servings > 1 ? "#FFFFFF" : "#8B5E3C",
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
            <span style={{ fontSize: 15, fontWeight: 700, color: "#8B5E3C", minWidth: 18, textAlign: "center" }}>
              {servings}
            </span>
            <button
              onClick={() => setServings((prev) => Math.min(5, prev + 1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "1px solid #8B5E3C",
                background: "#8B5E3C",
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
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className="mednut-pill-btn"
              style={{
                border: isSelected ? "2px solid #8B5E3C" : "1px solid rgba(139,94,60,0.2)",
                background: isSelected ? "#8B5E3C" : "#FFFFFF",
                color: isSelected ? "#FFFFFF" : "#3D2B1F",
                boxShadow: isSelected ? "0 4px 12px rgba(139,94,60,0.2)" : "none",
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
            border: "1px solid rgba(139,94,60,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#8B7355", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ថាមពល (ENERGY)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#D97706" }}>
            {totalCalories} <span style={{ fontSize: 12, fontWeight: 600 }}>kcal</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#7A5C4A", marginTop: 2 }}>
            ({selectedProduct.energyKcal} kcal/srv)
          </div>
        </div>

        {/* Metric 2: Protein */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: "1px solid rgba(139,94,60,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#8B7355", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ប្រូតេអ៊ីន (PROTEIN)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#059669" }}>
            {totalProtein} <span style={{ fontSize: 12, fontWeight: 600 }}>g</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#7A5C4A", marginTop: 2 }}>
            ({selectedProduct.proteinG} g/srv)
          </div>
        </div>

        {/* Metric 3: Water Required */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: "1px solid rgba(139,94,60,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#8B7355", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            ទឹកក្តៅអ៊ុនៗ
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#0284C7" }}>
            {totalWater} <span style={{ fontSize: 12, fontWeight: 600 }}>mL</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#7A5C4A", marginTop: 2 }}>
            ({selectedProduct.waterMl} mL/srv)
          </div>
        </div>

        {/* Metric 4: Total Volume Yield */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "14px 10px",
            borderRadius: 14,
            border: "1px solid rgba(139,94,60,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 10.5, color: "#8B7355", textTransform: "uppercase", fontWeight: 600, marginBottom: 2 }}>
            បរិមាណលាយរួច (YIELD)
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#7C3AED" }}>
            {totalYield} <span style={{ fontSize: 12, fontWeight: 600 }}>mL</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#7A5C4A", marginTop: 2 }}>
            ({selectedProduct.totalYieldMl} mL/srv)
          </div>
        </div>
      </div>

      {/* Detail Specs Bar */}
      <div
        style={{
          background: "#FAF6F0",
          borderRadius: 14,
          padding: "14px 16px",
          border: "1px solid rgba(139,94,60,0.12)",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          <strong style={{ fontSize: 14, color: "#3D2B1F" }}>
            {selectedProduct.name} ({selectedProduct.indicationKh}): {selectedProduct.servingDose}
          </strong>
          <span style={{ fontSize: 11.5, color: "#8B5E3C", fontWeight: 600, background: "rgba(139,94,60,0.1)", padding: "2px 8px", borderRadius: 10 }}>
            រសជាតិ: {selectedProduct.flavors}
          </span>
        </div>
        <p style={{ fontSize: 12.5, color: "#7A5C4A", margin: 0, lineHeight: 1.5 }}>
          <strong>លក្ខណៈពិសេស:</strong> {selectedProduct.specialNote}
        </p>
      </div>

      {/* Standard Mixing Protocol */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 14,
          padding: "14px 16px",
          border: "1px solid rgba(139,94,60,0.1)",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1F", marginBottom: 10 }}>
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
                background: "#FAF6F0",
                borderRadius: 10,
                fontSize: 12.5,
                color: "#3D2B1F",
                lineHeight: 1.5,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#8B5E3C",
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
