// components/layout/ui/ClinicalComparisonSection.jsx
import React, { useState } from "react";
import { CLINICAL_COMPARISONS } from "../../data/products";

export default function ClinicalComparisonSection({ defaultTab = "efesaVsHemapo" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const { efesaVsHemapo, kalxidKalmecoSynergy, nocidLowProtein } =
    CLINICAL_COMPARISONS;

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid rgba(139,94,60,0.18)",
        padding: "clamp(20px, 4vw, 32px)",
        boxShadow: "0 20px 40px rgba(92,61,46,0.08)",
      }}
    >
      <div style={{ marginBottom: 20, textAlign: "center" }}>
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
          Clinical Evidence & Unified Positioning
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 4vw, 30px)",
            color: "#3D2B1F",
            fontWeight: 800,
            margin: "4px 0",
          }}
        >
          ការប្រៀបធៀប និងប្រសិទ្ធភាពព្យាបាល
        </h3>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 28,
        }}
      >
        <button
          onClick={() => setActiveTab("efesaVsHemapo")}
          style={{
            padding: "10px 18px",
            borderRadius: 30,
            border:
              activeTab === "efesaVsHemapo"
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: activeTab === "efesaVsHemapo" ? "#8B5E3C" : "#FAF6F0",
            color: activeTab === "efesaVsHemapo" ? "#FFFFFF" : "#3D2B1F",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          EFESA vs HEMAPO (ESA)
        </button>
        <button
          onClick={() => setActiveTab("kalxidKalmeco")}
          style={{
            padding: "10px 18px",
            borderRadius: 30,
            border:
              activeTab === "kalxidKalmeco"
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: activeTab === "kalxidKalmeco" ? "#8B5E3C" : "#FAF6F0",
            color: activeTab === "kalxidKalmeco" ? "#FFFFFF" : "#3D2B1F",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          KALXID + KALMECO (DPN Synergy)
        </button>
        <button
          onClick={() => setActiveTab("nocidDiet")}
          style={{
            padding: "10px 18px",
            borderRadius: 30,
            border:
              activeTab === "nocidDiet"
                ? "2px solid #8B5E3C"
                : "1px solid rgba(139,94,60,0.2)",
            background: activeTab === "nocidDiet" ? "#8B5E3C" : "#FAF6F0",
            color: activeTab === "nocidDiet" ? "#FFFFFF" : "#3D2B1F",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          NOCID + Low-Protein Diet
        </button>
      </div>

      {/* EFESA VS HEMAPO CONTENT */}
      {activeTab === "efesaVsHemapo" && (
        <div>
          <div
            style={{
              padding: "14px 18px",
              background: "rgba(139,94,60,0.06)",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 14,
              color: "#3D2B1F",
              fontWeight: 500,
              borderLeft: "4px solid #8B5E3C",
            }}
          >
            {efesaVsHemapo.summaryKh}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {/* EFESA Card */}
            <div
              style={{
                background: "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #BBF7D0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <h4 style={{ margin: 0, fontSize: 20, color: "#166534", fontWeight: 800 }}>
                  EFESA
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: "#DCFCE7",
                    color: "#166534",
                    padding: "3px 10px",
                    borderRadius: 20,
                    fontWeight: 700,
                  }}
                >
                  Long-acting ESA
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <li><strong>សារធាតុ:</strong> Efepoetin alfa (0.3mg/0.3mL)</li>
                <li><strong>បច្ចេកវិទ្យា:</strong> Hybrid Fc (HyFc®) Technology</li>
                <li><strong>កាលវិភាគចាក់:</strong> ចាក់ក្រោមស្បែក (SC) រៀងរាល់ 2–4 សប្ដាហ៍</li>
                <li><strong>អ្នកជំងឺគោលដៅ:</strong> CKD Anemia មិនទាន់លាងឈាម (ND-CKD)</li>
                <li><strong>អត្ថប្រយោជន៍:</strong> កាត់បន្ថយការចាក់ញឹកញាប់ ងាយស្រួលគ្រប់គ្រង</li>
              </ul>
            </div>

            {/* HEMAPO Card */}
            <div
              style={{
                background: "linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #BFDBFE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <h4 style={{ margin: 0, fontSize: 20, color: "#1E40AF", fontWeight: 800 }}>
                  HEMAPO
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: "#DBEAFE",
                    color: "#1E40AF",
                    padding: "3px 10px",
                    borderRadius: 20,
                    fontWeight: 700,
                  }}
                >
                  Short-acting ESA
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <li><strong>សារធាតុ:</strong> Epoetin alfa (3000 IU/0.5mL)</li>
                <li><strong>ទម្រង់:</strong> Recombinant Human Erythropoietin</li>
                <li><strong>កាលវិភាគចាក់:</strong> ចាក់ SC ឬ IV 2-3 ដងក្នុងមួយសប្ដាហ៍</li>
                <li><strong>អ្នកជំងឺគោលដៅ:</strong> CKD Anemia ទាំងមិនទាន់ និងកំពុងលាងឈាម</li>
                <li><strong>អត្ថប្រយោជន៍:</strong> បត់បែនខ្ពស់ក្នុងការកែតម្រូវ Dose តាមការឆ្លើយតប</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              background: "#FAF6F0",
              padding: "16px",
              borderRadius: 14,
              border: "1px solid rgba(139,94,60,0.12)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1F", marginBottom: 8 }}>
              ចំណុចសំខាន់ត្រូវចងចាំ:
            </div>
            {efesaVsHemapo.takeaways.map((t, idx) => (
              <div key={idx} style={{ fontSize: 13, color: "#7A5C4A", marginBottom: 4 }}>
                • {t}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KALXID + KALMECO SYNERGY CONTENT */}
      {activeTab === "kalxidKalmeco" && (
        <div>
          <div
            style={{
              padding: "14px 18px",
              background: "rgba(139,94,60,0.06)",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 13,
              color: "#3D2B1F",
              lineHeight: 1.6,
              borderLeft: "4px solid #8B5E3C",
            }}
          >
            {kalxidKalmecoSynergy.whyCombineKh}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {/* KALXID */}
            <div
              style={{
                background: "#FAF5FF",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #E9D5FF",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: "#6B21A8", fontWeight: 800 }}>
                  KALXID (100% R-ALA 480mg)
                </h4>
                <span style={{ fontSize: 11, background: "#F3E8FF", color: "#6B21A8", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>
                  Antioxidant
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <li>ផ្តោតលើការកាត់បន្ថយ <strong>Oxidative Stress</strong></li>
                <li>ការពារសរសៃប្រសាទពី <strong>Oxidative Damage</strong></li>
                <li>កាត់បន្ថយអាការៈឈឺ ចុក រមួល ក្តៅ ឬស្ពឹកដៃជើង</li>
                <li>លេបតែ <strong>1 គ្រាប់ / ថ្ងៃ</strong> មុនអាហារ 30 នាទី</li>
              </ul>
            </div>

            {/* KALMECO */}
            <div
              style={{
                background: "#FFFBEB",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FDE68A",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: "#92400E", fontWeight: 800 }}>
                  KALMECO (Active B12 500mcg)
                </h4>
                <span style={{ fontSize: 11, background: "#FEF3C7", color: "#92400E", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>
                  Nerve Repair
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <li>ជាទម្រង់សកម្ម <strong>Mecobalamin</strong> រាងកាយប្រើបានភ្លាមៗ</li>
                <li>ជួយជួសជុល និងស្តារ <strong>មុខងារសរសៃប្រសាទ</strong></li>
                <li>ជំរុញការបង្កើត និងការពារ <strong>ស្រទាប់ Myelin</strong></li>
                <li>លេប <strong>1 គ្រាប់ 2–3 ដង / ថ្ងៃ</strong> ក្រោយអាហារ</li>
              </ul>
            </div>
          </div>

          {/* R-ALA vs Racemic ALA Explainer */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              border: "1px solid rgba(139,94,60,0.15)",
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: "#3D2B1F", marginBottom: 8 }}>
              {kalxidKalmecoSynergy.rAlaVsRacemic.title}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {kalxidKalmecoSynergy.rAlaVsRacemic.points.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    background: idx === 0 ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.06)",
                    padding: "12px",
                    borderRadius: 12,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "#3D2B1F",
                  }}
                >
                  <strong style={{ color: idx === 0 ? "#065F46" : "#991B1B" }}>{p.label}:</strong> {p.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NOCID + LOW PROTEIN DIET CONTENT */}
      {activeTab === "nocidDiet" && (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: "#FEF2F2",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FECACA",
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: 16, color: "#991B1B", fontWeight: 700 }}>
                Low-Protein Diet តែឯង
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#4B5563", lineHeight: 1.6 }}>
                <li>កំណត់ការទទួលទានប្រូតេអ៊ីន</li>
                <li>អាចប្រឈមនឹងការខ្វះ <strong>Essential Amino Acids (EAA)</strong></li>
                <li>ហានិភ័យកង្វះអាហារូបត្ថម្ភ (Malnutrition in CKD)</li>
              </ul>
            </div>

            <div
              style={{
                background: "#F0FDF4",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #BBF7D0",
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: 16, color: "#166534", fontWeight: 700 }}>
                Low-Protein Diet + NOCID (KDIGO Guideline)
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#4B5563", lineHeight: 1.6 }}>
                <li>កំណត់ប្រូតេអ៊ីន + បន្ថែម Keto Acids & EAA</li>
                <li>បំពេញតម្រូវការ EAA គ្រប់គ្រាន់ដោយមិនបង្កើត <strong>Nitrogen Waste</strong></li>
                <li>កាត់បន្ថយបន្ទុកការងារតម្រងនោម និងពន្យារពេលការលាងឈាម</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              background: "#FAF6F0",
              padding: "16px",
              borderRadius: 14,
              border: "1px solid rgba(139,94,60,0.12)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1F", marginBottom: 8 }}>
              ចំណុចសំខាន់ត្រូវចងចាំ:
            </div>
            {nocidLowProtein.takeaways.map((t, idx) => (
              <div key={idx} style={{ fontSize: 13, color: "#7A5C4A", marginBottom: 4 }}>
                • {t}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
