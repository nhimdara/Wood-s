import React, { useState } from "react";
import { PRODUCT_THEMES } from "../../data/products";
import { useLanguage } from "../../../context/LanguageContext";

export default function PediatricDosageCalculator({ initialProduct = "kalmaxime-ds" }) {
  const { t, isKhmer } = useLanguage();
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
    "1to5": {
      ageLabel: isKhmer ? "កុមារអាយុ 1–5 ឆ្នាំ" : "Children 1–5 yrs",
      dose: "2.5 mL",
      times: isKhmer ? "3 ដង / ថ្ងៃ" : "3 times / day",
      totalDaily: isKhmer ? "7.5 mL / ថ្ងៃ" : "7.5 mL / day",
    },
    "6to17": {
      ageLabel: isKhmer ? "កុមារអាយុ 6–17 ឆ្នាំ" : "Children 6–17 yrs",
      dose: "5.0 mL",
      times: isKhmer ? "3 ដង / ថ្ងៃ" : "3 times / day",
      totalDaily: isKhmer ? "15.0 mL / ថ្ងៃ" : "15.0 mL / day",
    },
    adult: {
      ageLabel: isKhmer ? "មនុស្សពេញវ័យ (Adults)" : "Adults (> 17 yrs)",
      dose: "7.5 mL",
      times: isKhmer ? "3 ដង / ថ្ងៃ" : "3 times / day",
      totalDaily: isKhmer ? "22.5 mL / ថ្ងៃ" : "22.5 mL / day",
    },
  }[prospanAgeGroup];

  // Rillus Jr Calculations
  const rillusDosing = {
    diarrhea: {
      label: isKhmer ? "កុមាររាគ (Diarrhea)" : "Acute Diarrhea",
      dose: isKhmer ? "1–2 កញ្ចប់ / ថ្ងៃ" : "1–2 sachets / day",
      duration: isKhmer ? "រហូតដល់ជាសះស្បើយ" : "Until resolved",
      note: isKhmer ? "ញ៉ាំជាមួយទឹក ទឹកដោះគោ ឬអាហារ" : "Take with water, milk, or food",
    },
    antibiotic: {
      label: isKhmer ? "រាគដោយសារថ្នាំ Antibiotics" : "Antibiotic-Associated Diarrhea",
      dose: isKhmer ? "1–2 កញ្ចប់ / ថ្ងៃ" : "1–2 sachets / day",
      duration: isKhmer ? "រហូតដល់ 14 ថ្ងៃ" : "Up to 14 days",
      note: isKhmer ? "ប្រើឃ្លាតពីថ្នាំអង់ទីប៊ីយ៉ូទិកយ៉ាងហោចណាស់ 2 ម៉ោង" : "Take at least 2 hours apart from antibiotics",
    },
    constipation: {
      label: isKhmer ? "ទល់លាមក (Constipation)" : "Constipation",
      dose: isKhmer ? "2–4 កញ្ចប់ / ថ្ងៃ" : "2–4 sachets / day",
      duration: isKhmer ? "តាមការណែនាំរបស់គ្រូពេទ្យ" : "As directed by physician",
      note: isKhmer ? "ញ៉ាំទឹកឱ្យបានច្រើន" : "Drink plenty of water",
    },
    maintenance: {
      label: isKhmer ? "ថែរក្សាតុល្យភាពពោះវៀន (Gut Health)" : "Daily Gut Health Maintenance",
      dose: isKhmer ? "1 កញ្ចប់ / ថ្ងៃ" : "1 sachet / day",
      duration: isKhmer ? "ប្រើប្រចាំថ្ងៃ" : "Daily use",
      note: isKhmer ? "រសជាតិទឹកដោះគោឆ្ងាញ់ ងាយស្រួលញ៉ាំ" : "Pleasant milky flavor, easy to take",
    },
  }[rillusIndication];

  return (
    <div
      style={{
        background: "var(--kalbe-surface)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid var(--kalbe-border)",
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: "var(--kalbe-card-shadow)",
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
            background: "rgba(13, 110, 56, 0.15)",
            padding: "4px 12px",
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 6,
          }}
        >
          {t.pediatric?.badge || "Pediatric Care Guidance"}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(18px, 3.5vw, 24px)",
            color: "var(--kalbe-text-main)",
            fontWeight: 800,
            margin: "2px 0",
          }}
        >
          {t.pediatric?.title || (isKhmer ? "ឧបករណ៍គណនាកម្រិតប្រើប្រាស់សម្រាប់កុមារ" : "Pediatric Dosage Calculator")}
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
                ? "2px solid #3B82F6"
                : "1px solid var(--kalbe-border)",
            background: selectedProduct === "kalmaxime-ds" ? "#2563EB" : "var(--kalbe-bg-alt)",
            color: selectedProduct === "kalmaxime-ds" ? "#FFFFFF" : "var(--kalbe-text-main)",
          }}
        >
          {isKhmer ? "KALMAXIME DS (តាមទម្ងន់)" : "KALMAXIME DS (Weight-based)"}
        </button>
        <button
          onClick={() => setSelectedProduct("prospan")}
          className="pedia-pill-btn"
          style={{
            border:
              selectedProduct === "prospan"
                ? "2px solid #10B981"
                : "1px solid var(--kalbe-border)",
            background: selectedProduct === "prospan" ? "#059669" : "var(--kalbe-bg-alt)",
            color: selectedProduct === "prospan" ? "#FFFFFF" : "var(--kalbe-text-main)",
          }}
        >
          {isKhmer ? "PROSPAN (តាមអាយុ)" : "PROSPAN (Age-based)"}
        </button>
        <button
          onClick={() => setSelectedProduct("rillus-jr")}
          className="pedia-pill-btn"
          style={{
            border:
              selectedProduct === "rillus-jr"
                ? "2px solid #F97316"
                : "1px solid var(--kalbe-border)",
            background: selectedProduct === "rillus-jr" ? "#EA580C" : "var(--kalbe-bg-alt)",
            color: selectedProduct === "rillus-jr" ? "#FFFFFF" : "var(--kalbe-text-main)",
          }}
        >
          {isKhmer ? "RILLUS JR (តាមរោគសញ្ញា)" : "RILLUS JR (Indication-based)"}
        </button>
      </div>

      {/* KALMAXIME DS CALCULATOR */}
      {selectedProduct === "kalmaxime-ds" && (
        <div
          style={{
            background: "var(--kalbe-bg-alt)",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid var(--kalbe-border)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)", display: "block", marginBottom: 6 }}>
              {isKhmer ? "បញ្ចូលទម្ងន់កុមារ:" : "Child's Weight (kg):"} <strong style={{ color: "#3B82F6", fontSize: 17 }}>{weightKg} kg</strong>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#3B82F6", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--kalbe-text-muted)" }}>
              <span>5 kg</span>
              <span>25 kg</span>
              <span>50 kg (Max 400mg)</span>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12.5, fontWeight: 700, color: "var(--kalbe-text-main)", display: "block", marginBottom: 6 }}>
              {isKhmer ? "កាលវិភាគនៃការប្រើប្រាស់:" : "Dosing Frequency / Regimen:"}
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
              <button
                onClick={() => setKalmaximeFreq("once")}
                style={{
                  padding: "8px 6px",
                  borderRadius: 10,
                  border: kalmaximeFreq === "once" ? "2px solid #3B82F6" : "1px solid var(--kalbe-border)",
                  background: kalmaximeFreq === "once" ? "rgba(59, 130, 246, 0.15)" : "var(--kalbe-surface)",
                  color: kalmaximeFreq === "once" ? "#3B82F6" : "var(--kalbe-text-main)",
                  fontSize: 11.5,
                  fontWeight: kalmaximeFreq === "once" ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {isKhmer ? "1 ដង / ថ្ងៃ (8 mg/kg)" : "Once Daily (8 mg/kg)"}
              </button>
              <button
                onClick={() => setKalmaximeFreq("twice")}
                style={{
                  padding: "8px 6px",
                  borderRadius: 10,
                  border: kalmaximeFreq === "twice" ? "2px solid #3B82F6" : "1px solid var(--kalbe-border)",
                  background: kalmaximeFreq === "twice" ? "rgba(59, 130, 246, 0.15)" : "var(--kalbe-surface)",
                  color: kalmaximeFreq === "twice" ? "#3B82F6" : "var(--kalbe-text-main)",
                  fontSize: 11.5,
                  fontWeight: kalmaximeFreq === "twice" ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {isKhmer ? "2 ដង / ថ្ងៃ (4 mg/kg x 2)" : "Twice Daily (4 mg/kg x 2)"}
              </button>
            </div>
          </div>

          {/* Results Box */}
          <div
            style={{
              background: "rgba(59, 130, 246, 0.12)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(59, 130, 246, 0.3)",
            }}
          >
            <div style={{ fontSize: 12, color: "#60A5FA", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              {isKhmer ? "លទ្ធផលគណនាកម្រិតប្រើប្រាស់ (Recommended Dose)" : "Calculated Recommended Dose"}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#3B82F6", margin: "4px 0" }}>
              {kalmaximeDoseMl.toFixed(1)} mL{" "}
              <span style={{ fontSize: 14, fontWeight: 600, color: "#93C5FD" }}>
                ({kalmaximeFreq === "once" ? (isKhmer ? "លេប 1 ដង / ថ្ងៃ" : "Once Daily") : (isKhmer ? "លេប 2 ដង / ថ្ងៃ (រៀងរាល់ 12 ម៉ោង)" : "Twice Daily (Every 12 hrs)")})
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--kalbe-text-muted)" }}>
              {isKhmer ? (
                <>ស្មើនឹង <strong style={{ color: "var(--kalbe-text-main)" }}>{(kalmaximeDoseMl * 20).toFixed(0)} mg</strong> ក្នុងមួយដង (សរុបប្រចាំថ្ងៃ: {kalmaximeTotalMg} mg)</>
              ) : (
                <>Equivalent to <strong style={{ color: "var(--kalbe-text-main)" }}>{(kalmaximeDoseMl * 20).toFixed(0)} mg</strong> per dose (Total daily: {kalmaximeTotalMg} mg)</>
              )}
            </p>
          </div>
        </div>
      )}

      {/* PROSPAN CALCULATOR */}
      {selectedProduct === "prospan" && (
        <div
          style={{
            background: "var(--kalbe-bg-alt)",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid var(--kalbe-border)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)", display: "block", marginBottom: 8 }}>
              {isKhmer ? "ជ្រើសរើសក្រុមអាយុអ្នកជំងឺ:" : "Select Patient Age Group:"}
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
              {[
                { id: "1to5", label: isKhmer ? "កុមារ 1–5 ឆ្នាំ" : "Child 1–5 yrs" },
                { id: "6to17", label: isKhmer ? "កុមារ 6–17 ឆ្នាំ" : "Child 6–17 yrs" },
                { id: "adult", label: isKhmer ? "មនុស្សពេញវ័យ" : "Adults (> 17 yrs)" },
              ].map((grp) => (
                <button
                  key={grp.id}
                  onClick={() => setProspanAgeGroup(grp.id)}
                  style={{
                    padding: "9px 8px",
                    borderRadius: 10,
                    border: prospanAgeGroup === grp.id ? "2px solid #10B981" : "1px solid var(--kalbe-border)",
                    background: prospanAgeGroup === grp.id ? "rgba(16, 185, 129, 0.15)" : "var(--kalbe-surface)",
                    color: prospanAgeGroup === grp.id ? "#10B981" : "var(--kalbe-text-main)",
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
              background: "rgba(16, 185, 129, 0.12)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          >
            <div style={{ fontSize: 12, color: "#34D399", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              {isKhmer ? `កម្រិតប្រើប្រាស់ណែនាំ (${prospanDosing.ageLabel})` : `Recommended Dosage (${prospanDosing.ageLabel})`}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#10B981", margin: "4px 0" }}>
              {prospanDosing.dose}{" "}
              <span style={{ fontSize: 15, fontWeight: 600, color: "#6EE7B7" }}>
                ({prospanDosing.times})
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--kalbe-text-muted)" }}>
              {isKhmer ? (
                <>សរុបប្រចាំថ្ងៃ: <strong style={{ color: "var(--kalbe-text-main)" }}>{prospanDosing.totalDaily}</strong> (អង្រួនដបមុនប្រើ)</>
              ) : (
                <>Total Daily: <strong style={{ color: "var(--kalbe-text-main)" }}>{prospanDosing.totalDaily}</strong> (Shake well before use)</>
              )}
            </p>
          </div>
        </div>
      )}

      {/* RILLUS JR CALCULATOR */}
      {selectedProduct === "rillus-jr" && (
        <div
          style={{
            background: "var(--kalbe-bg-alt)",
            borderRadius: 16,
            padding: "16px",
            border: "1px solid var(--kalbe-border)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)", display: "block", marginBottom: 8 }}>
              {isKhmer ? "ជ្រើសរើសស្ថានភាព / រោគសញ្ញា:" : "Select Clinical Indication:"}
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
              {[
                { id: "diarrhea", label: isKhmer ? "កុមាររាគ" : "Acute Diarrhea" },
                { id: "antibiotic", label: isKhmer ? "រាគដោយថ្នាំផ្សះ" : "Antibiotic Diarrhea" },
                { id: "constipation", label: isKhmer ? "ទល់លាមក" : "Constipation" },
                { id: "maintenance", label: isKhmer ? "សុខភាពពោះវៀនទូទៅ" : "Gut Health" },
              ].map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setRillusIndication(ind.id)}
                  style={{
                    padding: "9px 8px",
                    borderRadius: 10,
                    border: rillusIndication === ind.id ? "2px solid #F97316" : "1px solid var(--kalbe-border)",
                    background: rillusIndication === ind.id ? "rgba(249, 115, 22, 0.15)" : "var(--kalbe-surface)",
                    color: rillusIndication === ind.id ? "#F97316" : "var(--kalbe-text-main)",
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
              background: "rgba(249, 115, 22, 0.12)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(249, 115, 22, 0.3)",
            }}
          >
            <div style={{ fontSize: 12, color: "#FB923C", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
              {isKhmer ? `កម្រិតប្រើប្រាស់សម្រាប់ ${rillusDosing.label}` : `Recommended Regimen for ${rillusDosing.label}`}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#F97316", margin: "4px 0" }}>
              {rillusDosing.dose}
            </div>
            <p style={{ margin: "4px 0 2px", fontSize: 12.5, color: "var(--kalbe-text-main)" }}>
              <strong>{isKhmer ? "រយៈពេលប្រើ:" : "Duration:"}</strong> {rillusDosing.duration}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--kalbe-text-muted)" }}>
              💡 {rillusDosing.note}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
