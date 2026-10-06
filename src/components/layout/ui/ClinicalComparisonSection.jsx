import React, { useState } from "react";
import { CLINICAL_COMPARISONS } from "../../data/products";
import { useTheme } from "../../../context/ThemeContext";
import { useLanguage } from "../../../context/LanguageContext";

export default function ClinicalComparisonSection({ defaultTab = "efesaVsHemapo" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const { isDark } = useTheme();
  const { t, isKhmer } = useLanguage();

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
            border: "1px solid rgba(16, 185, 129, 0.25)",
            padding: "4px 14px",
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 8,
          }}
        >
          {t.clinical?.badge || "Clinical Evidence & Unified Positioning"}
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
          {t.clinical?.title || (isKhmer ? "ការប្រៀបធៀប និងប្រសិទ្ធភាពព្យាបាល" : "Clinical Comparison & Therapeutic Matrix")}
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
                : isDark
                  ? "1px solid rgba(220, 38, 38, 0.3)"
                  : "1px solid rgba(220,38,38,0.2)",
            background:
              activeTab === "efesaVsHemapo"
                ? "#DC2626"
                : isDark
                  ? "rgba(220, 38, 38, 0.12)"
                  : "#FEF2F2",
            color:
              activeTab === "efesaVsHemapo"
                ? "#FFFFFF"
                : isDark
                  ? "#FCA5A5"
                  : "#991B1B",
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
                : isDark
                  ? "1px solid rgba(13, 148, 136, 0.3)"
                  : "1px solid rgba(13,148,136,0.2)",
            background:
              activeTab === "kalxidKalmeco"
                ? "#0D9488"
                : isDark
                  ? "rgba(13, 148, 136, 0.12)"
                  : "#F0FDFA",
            color:
              activeTab === "kalxidKalmeco"
                ? "#FFFFFF"
                : isDark
                  ? "#5EEAD4"
                  : "#115E59",
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
                : isDark
                  ? "1px solid rgba(22, 163, 74, 0.3)"
                  : "1px solid rgba(22,163,74,0.2)",
            background:
              activeTab === "nocidDiet"
                ? "#16A34A"
                : isDark
                  ? "rgba(22, 163, 74, 0.12)"
                  : "#F0FDF4",
            color:
              activeTab === "nocidDiet"
                ? "#FFFFFF"
                : isDark
                  ? "#86EFAC"
                  : "#15803D",
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
                : isDark
                  ? "1px solid rgba(2, 132, 199, 0.3)"
                  : "1px solid rgba(2,132,199,0.2)",
            background:
              activeTab === "brainactSKU"
                ? "#0284C7"
                : isDark
                  ? "rgba(2, 132, 199, 0.12)"
                  : "#F0F9FF",
            color:
              activeTab === "brainactSKU"
                ? "#FFFFFF"
                : isDark
                  ? "#7DD3FC"
                  : "#0369A1",
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
              background: isDark ? "rgba(220, 38, 38, 0.12)" : "#FEF2F2",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 14,
              color: isDark ? "var(--kalbe-text-main)" : "#1A241A",
              fontWeight: 500,
              border: isDark ? "1px solid rgba(220, 38, 38, 0.25)" : "none",
              borderLeft: "4px solid #DC2626",
            }}
          >
            {isKhmer
              ? efesaVsHemapo.summaryKh
              : "Both HEMAPO and EFESA are ESAs indicated for CKD Anemia, but feature distinct dosing intervals, technology platforms, and patient positioning."}
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
                background: isDark
                  ? "linear-gradient(180deg, rgba(225, 29, 72, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #FFF1F2 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #FECDD3",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(225, 29, 72, 0.06)",
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
                <h4 style={{ margin: 0, fontSize: 20, color: isDark ? "#FB7185" : "#E11D48", fontWeight: 800 }}>
                  EFESA
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(225, 29, 72, 0.2)" : "#FFE4E6",
                    color: isDark ? "#FDA4AF" : "#BE123C",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "none",
                  }}
                >
                  Long-acting ESA
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.7 }}>
                <li><strong>{isKhmer ? "សារធាតុ:" : "Substance:"}</strong> Efepoetin alfa (0.3mg/0.3mL)</li>
                <li><strong>{isKhmer ? "បច្ចេកវិទ្យា:" : "Technology:"}</strong> Hybrid Fc (HyFc®) Technology</li>
                <li><strong>{isKhmer ? "កាលវិភាគចាក់:" : "Dosing Schedule:"}</strong> {isKhmer ? "ចាក់ក្រោមស្បែក (SC) រៀងរាល់ 2–4 សប្ដាហ៍" : "Subcutaneous (SC) once every 2–4 weeks"}</li>
                <li><strong>{isKhmer ? "អ្នកជំងឺគោលដៅ:" : "Target Population:"}</strong> {isKhmer ? "CKD Anemia មិនទាន់លាងឈាម (ND-CKD)" : "Non-dialysis CKD Anemia (ND-CKD)"}</li>
                <li><strong>{isKhmer ? "អត្ថប្រយោជន៍:" : "Clinical Benefit:"}</strong> {isKhmer ? "កាត់បន្ថយការចាក់ញឹកញាប់ ងាយស្រួលគ្រប់គ្រង" : "Reduced injection frequency, convenient disease management"}</li>
              </ul>
            </div>

            {/* HEMAPO Card */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(220, 38, 38, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #FEF2F2 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(220, 38, 38, 0.3)" : "1px solid #FCA5A5",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(220, 38, 38, 0.08)",
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
                <h4 style={{ margin: 0, fontSize: 20, color: isDark ? "#F87171" : "#DC2626", fontWeight: 800 }}>
                  HEMAPO
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(220, 38, 38, 0.2)" : "#FEE2E2",
                    color: isDark ? "#FCA5A5" : "#991B1B",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(220, 38, 38, 0.3)" : "none",
                  }}
                >
                  Short-acting ESA
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.7 }}>
                <li><strong>{isKhmer ? "សារធាតុ:" : "Substance:"}</strong> Epoetin alfa (3000 IU/0.5mL)</li>
                <li><strong>{isKhmer ? "ទម្រង់:" : "Form:"}</strong> Recombinant Human Erythropoietin</li>
                <li><strong>{isKhmer ? "កាលវិភាគចាក់:" : "Dosing Schedule:"}</strong> {isKhmer ? "ចាក់ SC ឬ IV 2-3 ដងក្នុងមួយសប្ដាហ៍" : "SC or IV 2–3 times per week"}</li>
                <li><strong>{isKhmer ? "អ្នកជំងឺគោលដៅ:" : "Target Population:"}</strong> {isKhmer ? "CKD Anemia ទាំងមិនទាន់ និងកំពុងលាងឈាម" : "Both Non-dialysis & Dialysis CKD Anemia"}</li>
                <li><strong>{isKhmer ? "អត្ថប្រយោជន៍:" : "Clinical Benefit:"}</strong> {isKhmer ? "បត់បែនខ្ពស់ក្នុងការកែតម្រូវ Dose តាមការឆ្លើយតប" : "High flexibility to adjust dose and frequency based on Hb response"}</li>
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
              {isKhmer ? "ចំណុចសំខាន់ត្រូវចងចាំ:" : "Key Takeaways to Remember:"}
            </div>
            {(isKhmer
              ? efesaVsHemapo.takeaways
              : [
                  "EFESA → Long-acting ESA → Infrequent injections → Convenience and adherence in ND-CKD",
                  "HEMAPO → Short-acting ESA → Flexible titration of dose and frequency for acute/dialysis control"
                ]
            ).map((tItem, idx) => (
              <div key={idx} style={{ fontSize: 13, color: "var(--kalbe-text-muted)", marginBottom: 4 }}>
                • {tItem}
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
              background: isDark ? "rgba(13, 148, 136, 0.12)" : "#F0FDFA",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 13,
              color: isDark ? "var(--kalbe-text-main)" : "#1A241A",
              lineHeight: 1.6,
              border: isDark ? "1px solid rgba(13, 148, 136, 0.25)" : "none",
              borderLeft: "4px solid #0D9488",
            }}
          >
            {isKhmer
              ? kalxidKalmecoSynergy.whyCombineKh
              : "Why Combine? KALXID directly targets oxidative stress and protects nerves from oxidative damage, while KALMECO (Active B12) repairs and maintains neuronal function and the myelin sheath. Together, they provide synergistic dual action for comprehensive DPN management."}
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
                background: isDark
                  ? "linear-gradient(180deg, rgba(13, 148, 136, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(13, 148, 136, 0.3)" : "1px solid #99F6E4",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(13, 148, 136, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: isDark ? "#2DD4BF" : "#0F766E", fontWeight: 800 }}>
                  KALXID (100% R-ALA 480mg)
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(13, 148, 136, 0.2)" : "#CCFBF1",
                    color: isDark ? "#5EEAD4" : "#115E59",
                    padding: "4px 10px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(13, 148, 136, 0.3)" : "none",
                  }}
                >
                  Antioxidant
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.7 }}>
                {isKhmer ? (
                  <>
                    <li>ផ្តោតលើការកាត់បន្ថយ <strong>Oxidative Stress</strong></li>
                    <li>ការពារសរសៃប្រសាទពី <strong>Oxidative Damage</strong></li>
                    <li>កាត់បន្ថយអាការៈឈឺ ចុក រមួល ក្តៅ ឬស្ពឹកដៃជើង</li>
                    <li>លេបតែ <strong>1 គ្រាប់ / ថ្ងៃ</strong> មុនអាហារ 30 នាទី</li>
                  </>
                ) : (
                  <>
                    <li>Directly targets and neutralizes <strong>Oxidative Stress</strong></li>
                    <li>Protects peripheral nerves from <strong>Oxidative Damage</strong></li>
                    <li>Relieves neuropathic numbness, tingling, burning pain, and cramps</li>
                    <li>Convenient once-daily dosing: <strong>1 caplet / day</strong> 30 min before meals</li>
                  </>
                )}
              </ul>
            </div>

            {/* KALMECO */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(234, 88, 12, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(234, 88, 12, 0.3)" : "1px solid #FED7AA",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(234, 88, 12, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 18, color: isDark ? "#FB923C" : "#C2410C", fontWeight: 800 }}>
                  KALMECO (Active B12 500mcg)
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(234, 88, 12, 0.2)" : "#FFEDD5",
                    color: isDark ? "#FDBA74" : "#9A3412",
                    padding: "4px 10px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(234, 88, 12, 0.3)" : "none",
                  }}
                >
                  Nerve Repair
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.7 }}>
                {isKhmer ? (
                  <>
                    <li>ជាទម្រង់សកម្ម <strong>Mecobalamin</strong> រាងកាយប្រើបានភ្លាមៗ</li>
                    <li>ជួយជួសជុល និងស្តារ <strong>មុខងារសរសៃប្រសាទ</strong></li>
                    <li>ជំរុញការបង្កើត និងការពារ <strong>ស្រទាប់ Myelin</strong></li>
                    <li>លេប <strong>1 គ្រាប់ 2–3 ដង / ថ្ងៃ</strong> ក្រោយអាហារ</li>
                  </>
                ) : (
                  <>
                    <li>Active coenzyme form <strong>Mecobalamin</strong> directly utilized by neural tissues</li>
                    <li>Repairs, regenerates, and restores <strong>peripheral nerve function</strong></li>
                    <li>Stimulates synthesis and preservation of the protective <strong>Myelin Sheath</strong></li>
                    <li>Dosing: <strong>1 capsule 2–3 times / day</strong> after meals</li>
                  </>
                )}
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
              {isKhmer ? kalxidKalmecoSynergy.rAlaVsRacemic.title : "Why R-ALA (KALXID), not Racemic ALA?"}
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
                    border: idx === 0
                      ? isDark ? "1px solid rgba(13,148,136,0.4)" : "1px solid rgba(13,148,136,0.3)"
                      : isDark ? "1px solid rgba(239,68,68,0.35)" : "1px solid rgba(220,38,38,0.25)",
                  }}
                >
                  <strong style={{ color: idx === 0 ? (isDark ? "#2DD4BF" : "#0D9488") : (isDark ? "#F87171" : "#EF4444") }}>
                    {p.label}:
                  </strong>{" "}
                  {isKhmer
                    ? p.text
                    : idx === 0
                      ? "Natural biological form providing 100% pure R-enantiomer, directly recognized and metabolized with superior clinical bioavailability and therapeutic efficacy."
                      : "Synthetic 50:50 racemic mixture containing both R- and S-enantiomers; the synthetic S-form is metabolically inactive and may reduce bioavailability."}
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
                background: isDark
                  ? "linear-gradient(180deg, rgba(220, 38, 38, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "#FEF2F2",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(220, 38, 38, 0.3)" : "1px solid #FECACA",
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: 16, color: isDark ? "#F87171" : "#991B1B", fontWeight: 700 }}>
                {isKhmer ? "Low-Protein Diet តែឯង" : "Low-Protein Diet Alone"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.6 }}>
                {isKhmer ? (
                  <>
                    <li>កំណត់ការទទួលទានប្រូតេអ៊ីន</li>
                    <li>អាចប្រឈមនឹងការខ្វះ <strong>Essential Amino Acids (EAA)</strong></li>
                    <li>ហានិភ័យកង្វះអាហារូបត្ថម្ភ (Malnutrition in CKD)</li>
                  </>
                ) : (
                  <>
                    <li>Restricts dietary protein intake</li>
                    <li>Risk of deficiency in <strong>Essential Amino Acids (EAAs)</strong></li>
                    <li>High vulnerability to Protein-Energy Wasting (PEW) and CKD malnutrition</li>
                  </>
                )}
              </ul>
            </div>

            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(22, 163, 74, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(22, 163, 74, 0.3)" : "1px solid #BBF7D0",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(22, 163, 74, 0.08)",
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: 16, color: isDark ? "#4ADE80" : "#166534", fontWeight: 700 }}>
                {isKhmer ? "Low-Protein Diet + NOCID (KDIGO Guideline)" : "Low-Protein Diet + NOCID (KDIGO Guideline)"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--kalbe-text-main)", lineHeight: 1.6 }}>
                {isKhmer ? (
                  <>
                    <li>កំណត់ប្រូតេអ៊ីន + បន្ថែម Keto Acids & EAA</li>
                    <li>បំពេញតម្រូវការ EAA គ្រប់គ្រាន់ដោយមិនបង្កើត <strong>Nitrogen Waste</strong></li>
                    <li>កាត់បន្ថយបន្ទុកការងារតម្រងនោម និងពន្យារពេលការលាងឈាម</li>
                  </>
                ) : (
                  <>
                    <li>Protein restriction supplemented with essential Keto Acids & EAAs</li>
                    <li>Fulfills essential amino acid requirements without generating <strong>Nitrogen Waste</strong></li>
                    <li>Relieves renal workload and significantly delays dialysis initiation</li>
                  </>
                )}
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
              {isKhmer ? "ចំណុចសំខាន់ត្រូវចងចាំ:" : "Key Takeaways to Remember:"}
            </div>
            {(isKhmer
              ? nocidLowProtein.takeaways
              : [
                  "NOCID is not a standard protein supplement, but a specialized Keto Amino Acid therapy designed for synergy with a Low-Protein Diet.",
                  "It fulfills essential amino acid requirements while maintaining minimal nitrogen load, safely preserving renal function in pre-dialysis CKD."
                ]
            ).map((t, idx) => (
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
              background: isDark ? "rgba(2, 132, 199, 0.12)" : "#F0F9FF",
              borderRadius: 14,
              marginBottom: 20,
              fontSize: 14,
              color: isDark ? "var(--kalbe-text-main)" : "#0369A1",
              fontWeight: 600,
              border: isDark ? "1px solid rgba(2, 132, 199, 0.25)" : "none",
              borderLeft: "4px solid #0284C7",
            }}
          >
            {isKhmer
              ? "ស្វែងយល់ពីភាពខុសគ្នានៃ Brainact ទាំង ៤ SKU (Acute Stroke / TBI / Post Stroke / MCI)"
              : "Differentiate between our 4 SKUs of Brainact (Acute Stroke / TBI / Post Stroke / MCI)"}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {/* Brainact 1G Inj */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(234, 88, 12, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(234, 88, 12, 0.3)" : "1px solid #FED7AA",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(234, 88, 12, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: isDark ? "#FB923C" : "#EA580C", fontWeight: 800 }}>Brainact 1G Inj</h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(234, 88, 12, 0.2)" : "#FFEDD5",
                    color: isDark ? "#FDBA74" : "#C2410C",
                    padding: "3px 8px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(234, 88, 12, 0.3)" : "none",
                  }}
                >
                  1000 mg/8 mL
                </span>
              </div>
              <p style={{ fontSize: 13, color: isDark ? "var(--kalbe-text-main)" : "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>
                Acute Stroke & TBI
              </p>
              <p style={{ fontSize: 12.5, color: isDark ? "var(--kalbe-text-muted)" : "#475569", lineHeight: 1.6, margin: 0 }}>
                {isKhmer
                  ? "ចាក់ម្តង ១ ក្រាម ១ ថ្ងៃ ២ ដង រយៈពេល ៧ ទៅ ១០ ថ្ងៃ តាមសរសៃវ៉ែន ឬព្យួរសេរ៉ូម។"
                  : "Administer 1 g (1 ampoule) IV push or IV infusion twice daily for 7 to 10 days during acute phase."}
              </p>
            </div>

            {/* Brainact 1G Cap */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(13, 148, 136, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(13, 148, 136, 0.3)" : "1px solid #99F6E4",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(13, 148, 136, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: isDark ? "#2DD4BF" : "#0D9488", fontWeight: 800 }}>Brainact 1G Cap</h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(13, 148, 136, 0.2)" : "#CCFBF1",
                    color: isDark ? "#5EEAD4" : "#0F766E",
                    padding: "3px 8px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(13, 148, 136, 0.3)" : "none",
                  }}
                >
                  1000 mg Caplet
                </span>
              </div>
              <p style={{ fontSize: 13, color: isDark ? "var(--kalbe-text-main)" : "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>
                Acute Stroke & TBI (Awake)
              </p>
              <p style={{ fontSize: 12.5, color: isDark ? "var(--kalbe-text-muted)" : "#475569", lineHeight: 1.6, margin: 0 }}>
                {isKhmer
                  ? "ក្រោយអ្នកជំងឺភ្ញាក់ដឹងខ្លួន បន្តជាមួយថ្នាំគ្រាប់ ២ ក្រាម ក្នុង ១ ថ្ងៃ រហូតដល់ ៦ សប្តាហ៍។"
                  : "Once patient regains consciousness, transition to oral 2 g/day (1 caplet BID) for up to 6 weeks."}
              </p>
            </div>

            {/* Brainact 500 Tab */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(217, 119, 6, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(217, 119, 6, 0.3)" : "1px solid #FDE68A",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(217, 119, 6, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: isDark ? "#FBBF24" : "#D97706", fontWeight: 800 }}>Brainact 500 Tab</h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(217, 119, 6, 0.2)" : "#FEF3C7",
                    color: isDark ? "#FCD34D" : "#B45309",
                    padding: "3px 8px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(217, 119, 6, 0.3)" : "none",
                  }}
                >
                  500 mg Tablet
                </span>
              </div>
              <p style={{ fontSize: 13, color: isDark ? "var(--kalbe-text-main)" : "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>
                Post Stroke Cognitive Impairment
              </p>
              <p style={{ fontSize: 12.5, color: isDark ? "var(--kalbe-text-muted)" : "#475569", lineHeight: 1.6, margin: 0 }}>
                {isKhmer
                  ? "១ ក្រាម ក្នុង ១ ថ្ងៃ យ៉ាងហោចណាស់ ៦ ខែឡើងទៅ។"
                  : "1 g/day (500 mg BID) for cognitive rehabilitation for at least 6 months."}
              </p>
            </div>

            {/* Brainact O-Dis */}
            <div
              style={{
                background: isDark
                  ? "linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, var(--kalbe-surface-elevated) 100%)"
                  : "linear-gradient(180deg, #F3E8FF 0%, #FFFFFF 100%)",
                borderRadius: 18,
                padding: "20px",
                border: isDark ? "1px solid rgba(124, 58, 237, 0.3)" : "1px solid #E9D5FF",
                boxShadow: isDark ? "var(--kalbe-card-shadow)" : "0 4px 14px rgba(124, 58, 237, 0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h4 style={{ margin: 0, fontSize: 17, color: isDark ? "#A78BFA" : "#7C3AED", fontWeight: 800 }}>Brainact O-Dis</h4>
                <span
                  style={{
                    fontSize: 11,
                    background: isDark ? "rgba(124, 58, 237, 0.2)" : "#EDE9FE",
                    color: isDark ? "#C4B5FD" : "#6D28D9",
                    padding: "3px 8px",
                    borderRadius: 12,
                    fontWeight: 700,
                    border: isDark ? "1px solid rgba(124, 58, 237, 0.3)" : "none",
                  }}
                >
                  500 mg ODT
                </span>
              </div>
              <p style={{ fontSize: 13, color: isDark ? "var(--kalbe-text-main)" : "#1E293B", fontWeight: 600, margin: "0 0 8px" }}>
                MCI & Dysphagia / Multi-med
              </p>
              <p style={{ fontSize: 12.5, color: isDark ? "var(--kalbe-text-muted)" : "#475569", lineHeight: 1.6, margin: 0 }}>
                {isKhmer
                  ? "ថ្នាំបៀមរលាយក្នុងមាត់ រសជាតិផ្លែឈើចម្រុះ ១ ក្រាម/ថ្ងៃ សម្រាប់ការធ្លាក់ចុះសមត្ថភាពខួរក្បាលលើមនុស្សចាស់។"
                  : "Orally disintegrating tablet (tutti-frutti flavor) dissolving in seconds without water; 1 g/day for elderly patients with dysphagia and mild cognitive decline."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
