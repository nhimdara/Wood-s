// components/layout/ui/PediatricDosageCalculator.jsx
import React, { useState } from "react";

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
        background: "linear-gradient(145deg, #FFFFFF 0%, #FAF6F0 100%)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid rgba(139,94,60,0.18)",
        padding: "clamp(16px, 3.5vw, 28px)",
        boxShadow: "0 20px 40px rgba(92,61,46,0.08)",
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
            color: "#8B5E3C",
            textTransform: "uppercase",
            background: "rgba(139,94,60,0.1)",
            padding: "3px 12px",
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
            color: "#3D2B1F",
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
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: selectedProduct === "kalmaxime-ds" ? "#8B5E3C" : "#FFFFFF",
            color: selectedProduct === "kalmaxime-ds" ? "#FFFFFF" : "#3D2B1F",
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
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: selectedProduct === "prospan" ? "#8B5E3C" : "#FFFFFF",
            color: selectedProduct === "prospan" ? "#FFFFFF" : "#3D2B1F",
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
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: selectedProduct === "rillus-jr" ? "#8B5E3C" : "#FFFFFF",
            color: selectedProduct === "rillus-jr" ? "#FFFFFF" : "#3D2B1F",
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
            border: "1px solid rgba(139,94,60,0.12)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
              បញ្ចូលទម្ងន់កុមារ: <strong style={{ color: "#8B5E3C", fontSize: 17 }}>{weightKg} kg</strong>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#8B5E3C", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "#8B7355" }}>
              <span>5 kg</span>
              <span>25 kg</span>
              <span>50 kg (Max 400mg)</span>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12.5, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
              កាលវិភាគនៃការប្រើប្រាស់:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
              <button
                onClick={() => setKalmaximeFreq("once")}
                style={{
                  padding: "8px 6px",
                  borderRadius: 10,
                  border: kalmaximeFreq === "once" ? "2px solid #8B5E3C" : "1px solid #E5E7EB",
                  background: kalmaximeFreq === "once" ? "rgba(139,94,60,0.08)" : "#F9FAFB",
                  color: "#3D2B1F",
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
                  border: kalmaximeFreq === "twice" ? "2px solid #8B5E3C" : "1px solid #E5E7EB",
                  background: kalmaximeFreq === "twice" ? "rgba(139,94,60,0.08)" : "#F9FAFB",
                  color: "#3D2B1F",
                  fontSize: 11.5,
                  fontWeight: kalmaximeFreq === "twice" ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                2 ដង / ថ្ងៃ (4 mg/kg)
              </button>
            </div>
          </div>

          {/* Dosage Result Card */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(139,94,60,0.1) 0%, rgba(139,94,60,0.02) 100%)",
              borderRadius: 14,
              padding: "14px",
              border: "1px solid rgba(139,94,60,0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, color: "#8B7355", fontWeight: 600, textTransform: "uppercase" }}>
              កម្រិតថ្នាំត្រូវលេបក្នុង 1 ដង
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#8B5E3C", margin: "2px 0" }}>
              {kalmaximeDoseMl.toFixed(1)} <span style={{ fontSize: 16 }}>mL</span>
            </div>
            <div style={{ fontSize: 12.5, color: "#3D2B1F", fontWeight: 600 }}>
              {kalmaximeFreq === "once" ? "លេប 1 ដងក្នុងមួយថ្ងៃ" : "លេប 2 ដងក្នុងមួយថ្ងៃ (រៀងរាល់ 12 ម៉ោង)"}
            </div>
            <div style={{ fontSize: 11, color: "#7A5C4A", marginTop: 4 }}>
              ស្មើនឹង {kalmaximeTotalMg.toFixed(0)} mg/ថ្ងៃ (សរុប {kalmaximeTotalMl.toFixed(1)} mL/ថ្ងៃ) • Cefixime 100mg/5mL
            </div>
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
            border: "1px solid rgba(139,94,60,0.12)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12.5, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
              ជ្រើសរើសក្រុមអាយុ:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 6 }}>
              {[
                { id: "1to5", label: "1–5 ឆ្នាំ" },
                { id: "6to17", label: "6–17 ឆ្នាំ" },
                { id: "adult", label: "មនុស្សពេញវ័យ" },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setProspanAgeGroup(g.id)}
                  style={{
                    padding: "8px 6px",
                    borderRadius: 10,
                    border: prospanAgeGroup === g.id ? "2px solid #8B5E3C" : "1px solid #E5E7EB",
                    background: prospanAgeGroup === g.id ? "rgba(139,94,60,0.08)" : "#F9FAFB",
                    color: "#3D2B1F",
                    fontSize: 12,
                    fontWeight: prospanAgeGroup === g.id ? 700 : 500,
                    cursor: "pointer",
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, rgba(5,150,105,0.1) 0%, rgba(5,150,105,0.02) 100%)",
              borderRadius: 14,
              padding: "14px",
              border: "1px solid rgba(5,150,105,0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, color: "#059669", fontWeight: 600, textTransform: "uppercase" }}>
              កម្រិត Prospan {prospanDosing.ageLabel}
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#059669", margin: "2px 0" }}>
              {prospanDosing.dose} <span style={{ fontSize: 15 }}>/ ដង</span>
            </div>
            <div style={{ fontSize: 13, color: "#3D2B1F", fontWeight: 700 }}>
              {prospanDosing.times}
            </div>
            <div style={{ fontSize: 11, color: "#7A5C4A", marginTop: 4 }}>
              សរុប {prospanDosing.totalDaily} • EA 575® Special Ivy Leaf Extract
            </div>
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
            border: "1px solid rgba(139,94,60,0.12)",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12.5, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
              ជ្រើសរើសស្ថានភាព / រោគសញ្ញា:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 6 }}>
              {[
                { id: "diarrhea", label: "កុមាររាគ" },
                { id: "antibiotic", label: "រាគដោយសារថ្នាំ" },
                { id: "constipation", label: "ទល់លាមក" },
                { id: "maintenance", label: "សុខភាពពោះវៀន" },
              ].map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setRillusIndication(ind.id)}
                  style={{
                    padding: "8px 6px",
                    borderRadius: 10,
                    border: rillusIndication === ind.id ? "2px solid #8B5E3C" : "1px solid #E5E7EB",
                    background: rillusIndication === ind.id ? "rgba(139,94,60,0.08)" : "#F9FAFB",
                    color: "#3D2B1F",
                    fontSize: 11.5,
                    fontWeight: rillusIndication === ind.id ? 700 : 500,
                    cursor: "pointer",
                  }}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, rgba(2,132,199,0.1) 0%, rgba(2,132,199,0.02) 100%)",
              borderRadius: 14,
              padding: "14px",
              border: "1px solid rgba(2,132,199,0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, color: "#0284C7", fontWeight: 600, textTransform: "uppercase" }}>
              {rillusDosing.label}
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#0284C7", margin: "2px 0" }}>
              {rillusDosing.dose}
            </div>
            <div style={{ fontSize: 12.5, color: "#3D2B1F", fontWeight: 600 }}>
              រយៈពេល: {rillusDosing.duration}
            </div>
            <div style={{ fontSize: 11, color: "#7A5C4A", marginTop: 4 }}>
              {rillusDosing.note} • Multi-strain Probiotic + Prebiotic FOS
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
