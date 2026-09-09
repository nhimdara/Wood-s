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
        background: "var(--kalbe-surface)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        border: "1px solid var(--kalbe-border)",
        padding: "clamp(20px, 4vw, 32px)",
        boxShadow: "var(--kalbe-card-shadow)",
      }}
    >
      <div style={{ marginBottom: 20, textAlign: "center" }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: "#10B981",
            textTransform: "uppercase",
            background: "rgba(16, 185, 129, 0.15)",
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
            color: "var(--kalbe-text-main)",
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
                ? "2px solid #DC2626"
                : "1px solid rgba(220,38,38,0.2)",
            background: activeTab === "efesaVsHemapo" ? "#DC2626" : "#FEF2F2",
            color: activeTab === "efesaVsHemapo" ? "#FFFFFF" : "#991B1B",
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
                ? "2px solid #0D9488"
                : "1px solid rgba(13,148,136,0.2)",
            background: activeTab === "kalxidKalmeco" ? "#0D9488" : "#F0FDFA",
            color: activeTab === "kalxidKalmeco" ? "#FFFFFF" : "#115E59",
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
                ? "2px solid #16A34A"
                : "1px solid rgba(22,163,74,0.2)",
            background: activeTab === "nocidDiet" ? "#16A34A" : "#F0FDF4",
            color: activeTab === "nocidDiet" ? "#FFFFFF" : "#15803D",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          NOCID + Low-Protein Diet
        </button>
        <button
          onClick={() => setActiveTab("brainactSKU")}
          style={{
            padding: "10px 18px",
            borderRadius: 30,
            border:
              activeTab === "brainactSKU"
                ? "2px solid #0284C7"
                : "1px solid rgba(2,132,199,0.2)",
            background: activeTab === "brainactSKU" ? "#0284C7" : "#F0F9FF",
            color: activeTab === "brainactSKU" ? "#FFFFFF" : "#0369A1",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          BRAINACT 4 SKUs Matrix
        </button>
      </div>

      {/* EFESA VS HEMAPO CONTENT */}
      {activeTab === "efesaVsHemapo" && (
        <div>
          <div
            style={{
              padding: "14px 18px",
              background: "#FEF2F2",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 14,
              color: "#1A241A",
              fontWeight: 500,
              borderLeft: "4px solid #DC2626",
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
            {/* EFESA Card (Light Red) */}
            <div
              style={{
                background: "linear-gradient(180deg, #FFF1F2 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FECDD3",
                boxShadow: "0 4px 14px rgba(225, 29, 72, 0.06)",
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
                <h4 style={{ margin: 0, fontSize: 20, color: "#E11D48", fontWeight: 800 }}>
                  EFESA
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: "#FFE4E6",
                    color: "#BE123C",
                    padding: "4px 12px",
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

            {/* HEMAPO Card (Red) */}
            <div
              style={{
                background: "linear-gradient(180deg, #FEF2F2 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FCA5A5",
                boxShadow: "0 4px 14px rgba(220, 38, 38, 0.08)",
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
                <h4 style={{ margin: 0, fontSize: 20, color: "#DC2626", fontWeight: 800 }}>
                  HEMAPO
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: "#FEE2E2",
                    color: "#991B1B",
                    padding: "4px 12px",
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
              background: "var(--kalbe-bg-alt)",
              padding: "16px",
              borderRadius: 14,
              border: "1px solid var(--kalbe-border)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)", marginBottom: 8 }}>
              ចំណុចសំខាន់ត្រូវចងចាំ:
            </div>
            {efesaVsHemapo.takeaways.map((t, idx) => (
              <div key={idx} style={{ fontSize: 13, color: "var(--kalbe-text-muted)", marginBottom: 4 }}>
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
              background: "#F0FDFA",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 13,
              color: "#1A241A",
              lineHeight: 1.6,
              borderLeft: "4px solid #0D9488",
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
            {/* KALXID (Dark Teal / Emerald) */}
            <div
              style={{
                background: "linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #99F6E4",
                boxShadow: "0 4px 14px rgba(13, 148, 136, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: "#0F766E", fontWeight: 800 }}>
                  KALXID (100% R-ALA 480mg)
                </h4>
                <span style={{ fontSize: 11, background: "#CCFBF1", color: "#115E59", padding: "4px 10px", borderRadius: 12, fontWeight: 700 }}>
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

            {/* KALMECO (Bright Orange) */}
            <div
              style={{
                background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FED7AA",
                boxShadow: "0 4px 14px rgba(234, 88, 12, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: "#C2410C", fontWeight: 800 }}>
                  KALMECO (Active B12 500mcg)
                </h4>
                <span style={{ fontSize: 11, background: "#FFEDD5", color: "#9A3412", padding: "4px 10px", borderRadius: 12, fontWeight: 700 }}>
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
              background: "var(--kalbe-bg-alt)",
              borderRadius: 16,
              border: "1px solid var(--kalbe-border)",
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--kalbe-text-main)", marginBottom: 8 }}>
              {kalxidKalmecoSynergy.rAlaVsRacemic.title}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {kalxidKalmecoSynergy.rAlaVsRacemic.points.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--kalbe-surface)",
                    padding: "12px",
                    borderRadius: 12,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "var(--kalbe-text-main)",
                    border: idx === 0 ? "1px solid rgba(13,148,136,0.3)" : "1px solid rgba(220,38,38,0.25)",
                  }}
                >
                  <strong style={{ color: idx === 0 ? "#0D9488" : "#EF4444" }}>{p.label}:</strong> {p.text}
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
                background: "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #BBF7D0",
                boxShadow: "0 4px 14px rgba(22, 163, 74, 0.08)",
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
              background: "var(--kalbe-bg-alt)",
              padding: "16px",
              borderRadius: 14,
              border: "1px solid var(--kalbe-border)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--kalbe-text-main)", marginBottom: 8 }}>
              ចំណុចសំខាន់ត្រូវចងចាំ:
            </div>
            {nocidLowProtein.takeaways.map((t, idx) => (
              <div key={idx} style={{ fontSize: 13, color: "var(--kalbe-text-muted)", marginBottom: 4 }}>
                • {t}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BRAINACT 4 SKUs MATRIX */}
      {activeTab === "brainactSKU" && (
        <div>
          <div
            style={{
              padding: "14px 18px",
              background: "#F0F9FF",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 14,
              color: "#0369A1",
              fontWeight: 600,
              borderLeft: "4px solid #0284C7",
            }}
          >
            Differentiate between our 4 SKU of Brainact (Acute Stroke / TBI / Post Stroke / MCI)
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FED7AA",
                boxShadow: "0 4px 14px rgba(234, 88, 12, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: "#EA580C", fontWeight: 800 }}>Brainact 1G Inj</h4>
                <span style={{ fontSize: 11, background: "#FFEDD5", color: "#C2410C", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>1000 mg/8 mL</span>
              </div>
              <p style={{ fontSize: 13, color: "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>Acute Stroke & TBI</p>
              <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                ចាក់ម្តង ១ ក្រាម ១ ថ្ងៃ ២ ដង រយៈពេល ៧ ទៅ ១០ ថ្ងៃ តាមសរសៃវ៉ែន ឬព្យួរសេរ៉ូម។
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #99F6E4",
                boxShadow: "0 4px 14px rgba(13, 148, 136, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: "#0D9488", fontWeight: 800 }}>Brainact 1G Cap</h4>
                <span style={{ fontSize: 11, background: "#CCFBF1", color: "#0F766E", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>1000 mg Caplet</span>
              </div>
              <p style={{ fontSize: 13, color: "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>Acute Stroke & TBI (Awake)</p>
              <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                ក្រោយអ្នកជំងឺភ្ញាក់ដឹងខ្លួន បន្តជាមួយថ្នាំគ្រាប់ ២ ក្រាម ក្នុង ១ ថ្ងៃ រហូតដល់ ៦ សប្តាហ៍។
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #FDE68A",
                boxShadow: "0 4px 14px rgba(217, 119, 6, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: "#D97706", fontWeight: 800 }}>Brainact 500 Tab</h4>
                <span style={{ fontSize: 11, background: "#FEF3C7", color: "#B45309", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>500 mg Tablet</span>
              </div>
              <p style={{ fontSize: 13, color: "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>Post Stroke Cognitive Impairment</p>
              <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                ១ ក្រាម ក្នុង ១ ថ្ងៃ យ៉ាងហោចណាស់ ៦ ខែឡើងទៅ។
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #F3E8FF 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: "1px solid #E9D5FF",
                boxShadow: "0 4px 14px rgba(124, 58, 237, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: "#7C3AED", fontWeight: 800 }}>Brainact O-Dis</h4>
                <span style={{ fontSize: 11, background: "#EDE9FE", color: "#6D28D9", padding: "3px 8px", borderRadius: 12, fontWeight: 700 }}>500 mg ODT</span>
              </div>
              <p style={{ fontSize: 13, color: "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>MCI & Dysphagia / Multi-med</p>
              <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                ថ្នាំបៀមរលាយក្នុងមាត់ រសជាតិផ្លែឈើចម្រុះ ១ ក្រាម/ថ្ងៃ សម្រាប់ការធ្លាក់ចុះសមត្ថភាពខួរក្បាលលើមនុស្សចាស់។
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
