// components/layout/ui/PediatricDosageCalculator.jsx
import React, { useState } from "react";
import { PRODUCT_THEMES } from "../../data/products";

export default function PediatricDosageCalculator({ initialProduct = "kalmaxime-ds" }) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  // Kalmaxime State
  const [weightKg, setWeightKg] = useState(15);
  const [kalmaximeFreq, setKalmaximeFreq] = useState("once");

  // Prospan State
  const [prospanAgeGroup, setProspanAgeGroup] = useState("1to5");

  // Rillus Jr State
  const [rillusIndication, setRillusIndication] = useState("diarrhea");

  // Kalmaxime Calculations (100mg / 5mL => 20mg / mL)
  const kalmaximeTotalMg = Math.min(400, weightKg * 8);
  const kalmaximeTotalMl = Math.min(20, (kalmaximeTotalMg / 20));
  const kalmaximeDoseMl = kalmaximeFreq === "once" ? kalmaximeTotalMl : kalmaximeTotalMl / 2;

  // Retrieve current active packaging theme
  const theme = PRODUCT_THEMES[selectedProduct] || {
    primary: "#0D6E38",
    dark: "#006400",
    bg: "#F8FAF6",
    light: "#F0FDF4",
    border: "rgba(13, 110, 56, 0.2)",
    glow: "rgba(13, 110, 56, 0.15)",
  };

  // Prospan Calculations
  const prospanDosing = {
    "1to5": { ageLabel: "កុមារអាយុ 1–5 ឆ្នាំ", dose: "2.5 mL", times: "3 ដង / ថ្ងៃ", totalDaily: "7.5 mL / ថ្ងៃ" },
    "6to17": { ageLabel: "កុមារអាយុ 6–17 ឆ្នាំ", dose: "5.0 mL", times: "3 ដង / ថ្ងៃ", totalDaily: "15.0 mL / ថ្ងៃ" },
    "adult": { ageLabel: "មនុស្សពេញវ័យ (Adults)", dose: "7.5 mL", times: "3 ដង / ថ្ងៃ", totalDaily: "22.5 mL / ថ្ងៃ" },
  }[prospanAgeGroup];

  // Rillus Jr Calculations
  const rillusDosing = {
    diarrhea: { label: "កុមាររាគ (Diarrhea)", dose: "1–2 កញ្ចប់ / ថ្ងៃ", duration: "រហូតដល់ជាសះស្បើយ", note: "ញ៉ាំជាមួយទឹក ទឹកដោះគោ ឬអាហារ" },
    antibiotic: { label: "រាគដោយសារថ្នាំ Antibiotics", dose: "1–2 កញ្ចប់ / ថ្ងៃ", duration: "រហូតដល់ 14 ថ្ងៃ", note: "ប្រើឃ្លាតពីថ្នាំអង់ទីប៊ីយ៉ូទិកយ៉ាងហោចណាស់ 2 ម៉ោង" },
    constipation: { label: "ទល់លាមក (Constipation)", dose: "2–4 កញ្ចប់ / ថ្ងៃ", duration: "តាមការណែនាំរបស់គ្រូពេទ្យ", note: "ញ៉ាំទឹកឱ្យបានច្រើន" },
    maintenance: { label: "ថែរក្សាតុល្យភាពពោះវៀន (Gut Health)", dose: "1 កញ្ចប់ / ថ្ងៃ", duration: "ប្រើប្រចាំថ្ងៃ", note: "រសជាតិទឹកដោះគោឆ្ងាញ់ ងាយស្រួលញ៉ាំ" },
  }[rillusIndication];

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
        .pedia-pill-btn {
          padding: 8px 14px;
          border-radius: 24px;
          font-weight: 700;
          font-size: 12.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
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
            padding: "4px 12px",
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 6,
          }}
        >
          Pediatric Care Guidance
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(18px, 3.5vw, 24px)",
            color: "#1A241A",
            fontWeight: 800,
            margin: "2px 0",
          }}
        >
          ឧបករណ៍គណនាកម្រិតប្រើប្រាស់សម្រាប់កុមារ
        </h3>
      </div>

      {/* Product Selector */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        <button
          onClick={() => setSelectedProduct("kalmaxime-ds")}
          className="pedia-pill-btn"
          style={{
            border:
              selectedProduct === "kalmaxime-ds"
                ? "2px solid #1D4ED8"
                : "1px solid rgba(0,0,0,0.1)",
            background: selectedProduct === "kalmaxime-ds" ? "#1D4ED8" : "#FFFFFF",
            color: selectedProduct === "kalmaxime-ds" ? "#FFFFFF" : "#1A241A",
          }}
        >
          KALMAXIME DS (តាមទម្ងន់)
        </button>
        <button
          onClick={() => setSelectedProduct("prospan")}
          className="pedia-pill-btn"
          style={{
            border:
              selectedProduct === "prospan"
                ? "2px solid #16A34A"
                : "1px solid rgba(0,0,0,0.1)",
            background: selectedProduct === "prospan" ? "#16A34A" : "#FFFFFF",
            color: selectedProduct === "prospan" ? "#FFFFFF" : "#1A241A",
          }}
        >
          PROSPAN (តាមអាយុ)
        </button>
        <button
          onClick={() => setSelectedProduct("rillus-jr")}
          className="pedia-pill-btn"
          style={{
            border:
              selectedProduct === "rillus-jr"
                ? "2px solid #EA580C"
                : "1px solid rgba(0,0,0,0.1)",
            background: selectedProduct === "rillus-jr" ? "#EA580C" : "#FFFFFF",
            color: selectedProduct === "rillus-jr" ? "#FFFFFF" : "#1A241A",
          }}
        >
          RILLUS JR (តាមរោគសញ្ញា)
        </button>
      </div>

      {/* KALMAXIME DS CALCULATOR */}
      {selectedProduct === "kalmaxime-ds" && (
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid #DBEAFE",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 6 }}>
              បញ្ចូលទម្ងន់កុមារ: <strong style={{ color: "#1D4ED8", fontSize: 17 }}>{weightKg} kg</strong>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#1D4ED8", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "#4A5A4A" }}>
              <span>5 kg</span>
              <span>25 kg</span>
              <span>50 kg (Max 400mg)</span>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12.5, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 6 }}>
              កាលវិភាគនៃការប្រើប្រាស់:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
              <button
                onClick={() => setKalmaximeFreq("once")}
                style={{
                  padding: "8px 6px",
                  borderRadius: 10,
                  border: kalmaximeFreq === "once" ? "2px solid #1D4ED8" : "1px solid #E5E7EB",
                  background: kalmaximeFreq === "once" ? "#EFF6FF" : "#F9FAFB",
                  color: kalmaximeFreq === "once" ? "#1D4ED8" : "#1A241A",
                  fontSize: 11.5,
                  fontWeight: kalmaximeFreq === "once" ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                1 ដង / ថ្ងៃ (8 mg/kg)
              </button>
              <button
                onClick={() => setKalmaximeFreq("twice")}
                style={{
                  padding: "8px 6px",
                  borderRadius: 10,
                  border: kalmaximeFreq === "twice" ? "2px solid #1D4ED8" : "1px solid #E5E7EB",
                  background: kalmaximeFreq === "twice" ? "#EFF6FF" : "#F9FAFB",
                  color: kalmaximeFreq === "twice" ? "#1D4ED8" : "#1A241A",
                  fontSize: 11.5,
                  fontWeight: kalmaximeFreq === "twice" ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                2 ដង / ថ្ងៃ (4 mg/kg x 2)
              </button>
            </div>
          </div>

          {/* Results Box */}
          <div
            style={{
              background: "#EFF6FF",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid #BFDBFE",
            }}
          >
            <div style={{ fontSize: 12, color: "#1E40AF", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              លទ្ធផលគណនាកម្រិតប្រើប្រាស់ (Recommended Dose)
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#1D4ED8", margin: "4px 0" }}>
              {kalmaximeDoseMl.toFixed(1)} mL{" "}
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1E40AF" }}>
                ({kalmaximeFreq === "once" ? "លេប 1 ដង / ថ្ងៃ" : "លេប 2 ដង / ថ្ងៃ (រៀងរាល់ 12 ម៉ោង)"})
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "#4B5563" }}>
              ស្មើនឹង <strong>{(kalmaximeDoseMl * 20).toFixed(0)} mg</strong> ក្នុងមួយដង (សរុបប្រចាំថ្ងៃ: {kalmaximeTotalMg} mg)
            </p>
          </div>
        </div>
      )}

      {/* PROSPAN CALCULATOR */}
      {selectedProduct === "prospan" && (
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid #BBF7D0",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 8 }}>
              ជ្រើសរើសក្រុមអាយុអ្នកជំងឺ:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
              {[
                { id: "1to5", label: "កុមារ 1–5 ឆ្នាំ" },
                { id: "6to17", label: "កុមារ 6–17 ឆ្នាំ" },
                { id: "adult", label: "មនុស្សពេញវ័យ" },
              ].map((grp) => (
                <button
                  key={grp.id}
                  onClick={() => setProspanAgeGroup(grp.id)}
                  style={{
                    padding: "9px 8px",
                    borderRadius: 10,
                    border: prospanAgeGroup === grp.id ? "2px solid #16A34A" : "1px solid #E5E7EB",
                    background: prospanAgeGroup === grp.id ? "#F0FDF4" : "#F9FAFB",
                    color: prospanAgeGroup === grp.id ? "#16A34A" : "#1A241A",
                    fontSize: 12,
                    fontWeight: prospanAgeGroup === grp.id ? 700 : 500,
                    cursor: "pointer",
                  }}
                >
                  {grp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div
            style={{
              background: "#F0FDF4",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid #86EFAC",
            }}
          >
            <div style={{ fontSize: 12, color: "#166534", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              កម្រិតប្រើប្រាស់ណែនាំ ({prospanDosing.ageLabel})
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#16A34A", margin: "4px 0" }}>
              {prospanDosing.dose}{" "}
              <span style={{ fontSize: 15, fontWeight: 600, color: "#166534" }}>
                ({prospanDosing.times})
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "#4B5563" }}>
              សរុបប្រចាំថ្ងៃ: <strong>{prospanDosing.totalDaily}</strong> (អង្រួនដបមុនប្រើ)
            </p>
          </div>
        </div>
      )}

      {/* RILLUS JR CALCULATOR */}
      {selectedProduct === "rillus-jr" && (
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid #FED7AA",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 8 }}>
              ជ្រើសរើសស្ថានភាព / រោគសញ្ញា:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
              {[
                { id: "diarrhea", label: "កុមាររាគ" },
                { id: "antibiotic", label: "រាគដោយថ្នាំផ្សះ" },
                { id: "constipation", label: "ទល់លាមក" },
                { id: "maintenance", label: "សុខភាពពោះវៀនទូទៅ" },
              ].map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setRillusIndication(ind.id)}
                  style={{
                    padding: "9px 8px",
                    borderRadius: 10,
                    border: rillusIndication === ind.id ? "2px solid #EA580C" : "1px solid #E5E7EB",
                    background: rillusIndication === ind.id ? "#FFF7ED" : "#F9FAFB",
                    color: rillusIndication === ind.id ? "#EA580C" : "#1A241A",
                    fontSize: 12,
                    fontWeight: rillusIndication === ind.id ? 700 : 500,
                    cursor: "pointer",
                  }}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div
            style={{
              background: "#FFF7ED",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid #FDBA74",
            }}
          >
            <div style={{ fontSize: 12, color: "#C2410C", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              កម្រិតប្រើប្រាស់សម្រាប់ {rillusDosing.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#EA580C", margin: "4px 0" }}>
              {rillusDosing.dose}
            </div>
            <p style={{ margin: "4px 0 2px", fontSize: 12.5, color: "#374151" }}>
              <strong>រយៈពេលប្រើ:</strong> {rillusDosing.duration}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#6B7280" }}>
              💡 {rillusDosing.note}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
