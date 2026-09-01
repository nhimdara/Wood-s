// pages/About.jsx - Complete Unabridged Kalbe Information in Modern Template
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import kalbeLogo from "../components/assets/logo/kalbe-logo.png";
import {
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import {
  FaFlask,
  FaPills,
  FaAppleAlt,
  FaTruckLoading,
  FaQuoteLeft,
  FaHandHoldingHeart,
  FaAward,
  FaIndustry,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        background: "#F8FAF6",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }

        .about-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid rgba(13,110,56,0.12);
          box-shadow: 0 8px 24px rgba(13,110,56,0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(13,110,56,0.09);
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: "#0D6E38";
          text-transform: uppercase;
          background: rgba(13,110,56,0.09);
          padding: 5px 16px;
          border-radius: 30px;
          margin-bottom: 12px;
        }

        .unabridged-text p {
          margin-bottom: 16px;
          line-height: 1.8;
          color: #4A3B32;
          font-size: 15px;
        }
      `}</style>

      <Nav />

      {/* Hero Header */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(100px, 13vw, 125px) 5% 40px",
          background: "linear-gradient(135deg, #F0FDF4 0%, #EBF5E5 100%)",
          borderBottom: "1px solid rgba(13,110,56,0.1)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-up" style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <div
              style={{
                background: "#FFFFFF",
                padding: "10px 24px",
                borderRadius: 40,
                border: "1px solid rgba(13,110,56,0.15)",
                boxShadow: "0 4px 16px rgba(13,110,56,0.06)",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img
                src={kalbeLogo}
                alt="KALBE Innovation for a Better Life"
                style={{ height: "clamp(34px, 5vw, 42px)", width: "auto", objectFit: "contain" }}
              />
            </div>
          </div>

          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2.5px",
              color: "#0D6E38",
              marginBottom: 14,
              textTransform: "uppercase",
              background: "rgba(13,110,56,0.1)",
              padding: "5px 18px",
              borderRadius: 30,
            }}
          >
            About Us • PT Kalbe Farma Tbk
          </span>

          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(34px, 5.5vw, 54px)",
              fontWeight: 800,
              color: "#1A241A",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Improving Health For A{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0D6E38 0%, #68A62A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Better Life
            </span>
          </h1>

          <p
            className="fade-up"
            style={{
              fontSize: "clamp(15px, 2.7vw, 17px)",
              lineHeight: 1.7,
              color: "#4A5A4A",
              maxWidth: 780,
              margin: "0 auto",
            }}
          >
            Established in 1966, Kalbe has grown from a humble garage operation to become the leading pharmaceutical company in Indonesia and the largest publicly-listed pharmaceutical company in Southeast Asia.
          </p>
        </div>
      </section>

      {/* 1. MISSION & VISION SECTION */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 60px) 5% 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: 24,
          }}
        >
          {/* Mission */}
          <div className="about-card" style={{ padding: "clamp(26px, 4vw, 36px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(46,125,50,0.1)", color: "#2E7D32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#2E7D32", letterSpacing: 2, textTransform: "uppercase" }}>
                  Our Mission
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#1A241A", margin: 0 }}>
                  Mission
                </h3>
              </div>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#1A241A", fontWeight: 600, margin: 0 }}>
              To improve Health for a Better Life.
            </p>
          </div>

          {/* Vision */}
          <div className="about-card" style={{ padding: "clamp(26px, 4vw, 36px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(13,110,56,0.1)", color: "#0D6E38", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                <HiOutlineSparkles />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#0D6E38", letterSpacing: 2, textTransform: "uppercase" }}>
                  Our Vision
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#1A241A", margin: 0 }}>
                  Vision
                </h3>
              </div>
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#4A3B32", margin: 0 }}>
              To be dominant in the health care business in Indonesia and exist in the global market with strong brands, enabled by excellent management, science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW / KALBE AT A GLANCE (UNABRIDGED) */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 60px) 5% 0" }}>
        <div className="about-card unabridged-text" style={{ padding: "clamp(28px, 5vw, 48px)" }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#0D6E38", letterSpacing: 2, textTransform: "uppercase", display: "inline-block", marginBottom: 8 }}>
            Overview
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1A241A", marginTop: 0, marginBottom: 20 }}>
            Kalbe At A Glance
          </h2>

          <p>
            Established in 1966, Kalbe has gone a long way from a humble operation that started in a garage to become the leading pharmaceutical company in Indonesia.
          </p>

          <p>
            Growing both organically and through mergers & acquisitions, Kalbe expands its business interests and transformed itself to become a provider of an integrated healthcare solution through its 4 business divisions: the <strong>Prescription Pharmaceutical Division</strong> (23% contribution), <strong>Consumer Health Division</strong> (17% contribution), <strong>Nutritionals Division</strong> (30% contribution) and <strong>Distribution and Logistics Division</strong> (30% contribution). These business divisions manage an extensive portfolio of prescription pharmaceuticals and OTC drugs, energy drink and nutrition products, as well as a robust distribution arm serving over one million outlets across Indonesia’s vast archipelago.
          </p>

          <p>
            In the international market, the Company has established its footprint in ASEAN countries, Nigeria, and South Africa, positioning Kalbe as a national pharmaceutical company with a competitive edge in the export market.
          </p>

          <p>
            Since its founding, the Company has been aware of the importance of innovation to grow its business. Kalbe Farma has established a robust research and development activities in leading edge generic drug formulation and continuous development of innovative consumer and nutritional products. Through strategic alliances with international partners, Kalbe have also started to support several successful research and development venture working on cancer drugs, stem cells and biotechnology research.
          </p>

          <p style={{ marginBottom: 0 }}>
            With more than 17,000 employees, today Kalbe Farma is the largest healthcare provider in Indonesia, with unrivaled marketing, branding, distribution, financial strength and research and development expertise. Kalbe Farma is also the largest publicly-listed pharmaceutical company in Southeast Asia, commanding a market capitalization of Rp71 trillion and sales turnover Rp21 trillion by end of 2018.
          </p>
        </div>
      </section>

      {/* 3. BUSINESS PERFORMANCE (UNABRIDGED) */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 60px) 5% 0" }}>
        <div className="about-card" style={{ padding: "clamp(28px, 5vw, 48px)" }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#0D6E38", letterSpacing: 2, textTransform: "uppercase", display: "inline-block", marginBottom: 8 }}>
            Achievements & Reach
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1A241A", marginTop: 0, marginBottom: 20 }}>
            Business Performance
          </h2>

          <div style={{ display: "grid", gap: 16, fontSize: 15, color: "#4A3B32", lineHeight: 1.8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <HiOutlineGlobeAlt style={{ color: "#0D6E38", fontSize: 22, flexShrink: 0, marginTop: 4 }} />
              <div>KALBE is a global company that exist in more than 20 countries all over the world and reach almost 1 billion people.</div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <FaAward style={{ color: "#0D6E38", fontSize: 20, flexShrink: 0, marginTop: 4 }} />
              <div>KALBE is the largest public listed pharmaceutical company in South-East Asia with turnover USD 1,120.97 million per year (based on IMS ASEAN Market overview 2010).</div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <FaIndustry style={{ color: "#0D6E38", fontSize: 20, flexShrink: 0, marginTop: 4 }} />
              <div>KALBE operates 12 GMP manufacturing facilities complying with international standard (ISO 9001, 14001, 22000, OHSAS 18001, HACCP).</div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <HiOutlineShieldCheck style={{ color: "#0D6E38", fontSize: 22, flexShrink: 0, marginTop: 4 }} />
              <div>KALBE got a lot of recognition and awards from international institution, such as ASEAN Business Award 2011 & 2012 as the Most Admired Enterprise for Innovation category, 2011 Best Corporate Image Award from Frontier and Bloomberg, 2013 Best Manage Company Award from Asia Money, and etc.</div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <HiOutlineCheckCircle style={{ color: "#0D6E38", fontSize: 22, flexShrink: 0, marginTop: 4 }} />
              <div>KALBE has 50 years experience in producing a very good quality products in 4 major lines of business: Prescription Pharmaceutical (Ethical), OTC Drugs, Nutritionals Division, and Consumer Goods.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HUMAN RESOURCES & KALBE PANCA SRADHA (UNABRIDGED) */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 60px) 5% 0" }}>
        <div className="about-card unabridged-text" style={{ padding: "clamp(28px, 5vw, 48px)" }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#0D6E38", letterSpacing: 2, textTransform: "uppercase", display: "inline-block", marginBottom: 8 }}>
            People & Culture
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1A241A", marginTop: 0, marginBottom: 18 }}>
            Human Resources
          </h2>

          <p>
            Kalbe always considers that excellence in human resources management is one of the critical strategies to ensure sustainable positive performance.
            The Company recognizes that to be able to maintain and improve its performance, the Company needs highly competent and qualified workforce, oriented toward the needs of the future.
          </p>

          <p>
            At Kalbe, human resources development goes beyond the responsibility of the Human Resources Division. Rather, all members of the management are actively engaged in human capital development activities to ensure sustainable creation of Kalbe future business leaders.
          </p>

          {/* Panca Sradha Box */}
          <div
            style={{
              background: "#F0FDF4",
              borderRadius: 16,
              padding: "24px 28px",
              margin: "24px 0",
              border: "1px solid rgba(13,110,56,0.15)",
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0D6E38", marginTop: 0, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
              Embedding The Kalbe Panca Sradha Spirit
            </h3>
            <p style={{ fontSize: 14.5, color: "#4A3B32", marginBottom: 14 }}>
              In 2010, Kalbe Group formally defined its corporate values, Kalbe Panca Sradha, reflecting the following five principles:
            </p>

            <ul style={{ paddingLeft: 22, margin: 0, display: "grid", gap: 8, fontSize: 14.5, color: "#1A241A", fontWeight: 600 }}>
              <li>Trust is the glue of life</li>
              <li>Mindfulness is the foundation of our action</li>
              <li>Innovation is the key to our success</li>
              <li>Strive to be the best</li>
              <li>Interconnectedness is a universal of life</li>
            </ul>

            <p style={{ fontSize: 14, color: "#4A5A4A", marginTop: 14, marginBottom: 0 }}>
              Kalbe Panca Sradha values form the foundation of mentality to unify Kalbe Group’s more than 17,000 employees, who work in 24 distinct business entities in Indonesia and overseas.
            </p>
          </div>

          {/* 2019 Priority */}
          <div
            style={{
              background: "#F8FAF6",
              borderRadius: 16,
              padding: "20px 24px",
              borderLeft: "4px solid #0D6E38",
            }}
          >
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "#1A241A", marginTop: 0, marginBottom: 8, textTransform: "uppercase" }}>
              Priority: "Leader Creates Leaders"
            </h4>
            <p style={{ margin: 0, fontSize: 14.5, color: "#4A3B32", lineHeight: 1.7 }}>
              We are committed to place top priority on people development based on the “Leader creates Leaders” principle to nurture Kalbe’s future business leaders. Ability to build crossfunctional and cross-business synergies remains a crucial element of leadership to be developed through individual development plan, coaching, counseling and mentoring with the involvement of management in the process.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CEO MESSAGE (UNABRIDGED - ALL 14 PARAGRAPHS WITH PHOTO) */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 6vw, 60px) 5% 0" }}>
        <div className="about-card unabridged-text" style={{ padding: "clamp(28px, 5vw, 48px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <FaQuoteLeft style={{ color: "#0D6E38", fontSize: 24 }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#0D6E38", letterSpacing: 2, textTransform: "uppercase" }}>
              Leadership Address
            </span>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 36px)", color: "#1A241A", marginTop: 0, marginBottom: 24 }}>
            CEO Message
          </h2>

          {/* CEO Portrait Photo */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px",
                background: "linear-gradient(135deg, #F0FDF4 0%, #F8FAF6 100%)",
                borderRadius: 24,
                border: "1px solid rgba(13,110,56,0.15)",
                boxShadow: "0 12px 28px rgba(13,110,56,0.08)",
              }}
            >
              <img
                src="/images/ceo-kalbe.png"
                alt="Vidjongtius - CEO of PT Kalbe Farma Tbk"
                style={{
                  maxWidth: 280,
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 18,
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1A241A" }}>Vidjongtius</div>
              <div style={{ fontSize: 13.5, color: "#0D6E38", fontWeight: 700, marginTop: 2 }}>
                President Director / CEO, PT Kalbe Farma Tbk
              </div>
            </div>
          </div>

          {/* Complete Unabridged Text */}
          <p>
            Greetings to all partners in PT Kalbe Farma Tbk and our distinguished stakeholders. I am honored to speak to you at this occassion and share some of our important achievements and initiatives that we have conducted in 2022.
          </p>

          <p>
            The year 2022 has presented various obstacles and opportunities for companies in Indonesia. The Russia-Ukraine conflict and the decoupling of China-US economies have caused the supply chain bottlenecks, the rising prices of oil and commodities, and inflations in several countries.
          </p>

          <p>
            On the positive side, the pandemic situation has been recovered throughout the year. Both social and business activities have resumed and the consumer trust rate has been gradually increased to the same rate as before the pandemic. The positive GDP growth has also reached the 5.3% rating, surpassing the pre-pandemic achievement of 5.0% in 2019. The household shoppings also increase due to the low rate of daily COVID-19 cases, the rising number of vaccinations, and the momentous return of social and outdoor activities.
          </p>

          <p>
            Based on this condition, representing the Board, I am happy to report that the Company has ended the year 2022 with a positive performance. Our net sales have grown to 10.2% for around 28.9 trillions of rupiah, achieving the target that we had set earlier that year. The net profits have also grown to 6.2% with the total of 3.4 trillions of rupiah.
          </p>

          <p>
            In 2022, the Prescription Division focused on maintaining access to health, by ensuring the availability of ingredient and medicine stocks for the public. We continue to build close relationships with suppliers and increase the operational cost. We try to manage the effects of rising costs of ingredients and transportations, in order to minimize the effects of increased medicine costs that are felt by our consumers.
          </p>

          <p>
            In order to provide affordable and qualified medicines, in 2021, we also increased the participation of for generic prescriptions in the JKN program.<br />
            At the end of 2022, the Company’s generic prescriptions were distributed in over 90% of pharmacies, public and private hospitals, and public health offices, which covered more than 90 million patients. The Company will continuously strengthen its contributions in the JKN program in order to continuously provide health access to the mass public.
          </p>

          <p>
            The Company also continues to build strategic partnerships with multinational pharmaceutical companies to obtain the transfer technology and improve the health services, both nationally and regionally. In 2022, the Company has achieved an agreement with one of the global pharmaceutical companies, Sanofi, to take over its business activities in Indonesia. The Company also acquired PT Aventis Pharma for 100% to expand the product portfolio in the focus therapy category, specifically vaccine products. This was in accordance with the encouragement by the government to increase the independence of vaccine products domestically.
          </p>

          <p>
            With the decreasing number of COVID-19 cases, the Company managed to rapidly respond to the changing demands of the market. It increased the preparation of non COVID-19 medicine demands, such as cardio-metabolic and oncology medications, as well as products that can prevent and treat degenerative diseases. In total, the Prescription Division has managed to achieve the sales growth of 7.5% in 2022, from 5.5 trillions to 6.2 trillions in rupiah.
          </p>

          <p>
            Continuing the success of our brands, such as Promag, Mixagrip, Extra Joss, Komix and Woods, that have gained loyalties from millions of consumers for several decades, in 2022, the Health Product Division was committed to develop flagship products that can improvee the public’s health and immunity. Innovations on preventive products, vitamins and supplements, and herbal products are still underway as a response in the increasing awareness of public health during post pandemic. In accordance with government initiatives to increase the manufactured local content level (TKDN), the Comapny also developed the red ginger ecosystem to support the independence of medicinal ingredients in Indonesia, especially herbal-based medicines.In 2022, the Health Product Division managed to post the net sales growth up to 14.6%, reaching 4.2 trillions of rupiah.
          </p>

          <p>
            In fulfilling the nutritional needs of the public, the Company provided complete milk products for all ages and consumers with special needs.<br />
            Not only distributing to the premium market, the Company had a commitment to fulfill the nutritional needs for the people in lower middle class.<br />
            Therefore, since 2021, the Company entered the mas market segment by presenting milk products with affordable prices.<br />
            There were also interactive campaigns to educate the public about the health benefits of these nutritional products.<br />
            Through this division, we also actively supported the national resillience of Indonesian families through educations about stunting preventions and the decrease of the mortality rate for mothers and their babies, as well as providing products that could provide nutritional supports for pregnant women and toddlers such as Prenagen and Milna. In 2022, the net sales of the Nutrition Division experienced a growth up to 9.3%, reaching 7.8 trillions of rupiah.
          </p>

          <p>
            Access to health services was continuously developed in the distribution sector. Accompanied by more than five thousand MOSTRANS armadas and the EMOS digital application range of more than 14,000 customers, the distribution of health products and equipments could reach the consumers more accurately and faster. In 2022, the Company had an initiative to form a joint company in China called Global Starway Synergy Co., Ltd, in order to strengthen the supply chain of raw materials from China and its surrounding areas. It also started the production of the Synthetic Surgical Suture through PT Forsta Kalmedic Global to increase the manufactured local content level (TKDN) for health equipments. The Distribution and Logistic Division managed to obtain a positive achievement, with the increasing rate of the net sales by 10.8%, raising from 9.8 trillions to 10.8 trillions of rupiah.
          </p>

          <p>
            In the field of international business, the Company also helped to secure the supply of health products to the public in other developing countries, including Asia and Africa. During 2022, in order to expand the penetration of non-prescription products in the Philippines, the Company formed a joint company called Kalbe Ecossential International Inc.,a collaboration between Kalbe International Pte. Ltd. and local distribution companies. The business growth in the Philippines was getting solid and was supported by the power of branding and strong market shares, respresented by the milk product Diabetasol that has led the market in the Philippines. By offering quality products, as well as the correct customer relations and distribution strategy, the Company has managed to nuild its pressence in more than 40 countries across ASEAN, East and South of Asia, the Middle East, and the Continent of Africa. Finally, it also reached a satisfying performance with a two-digit export value growth that reached 1.7 trillions of rupiah in 2022, through the power of branding and strong market shares.
          </p>

          <p>
            In the field of research and development, the Company was recognized as an innovative Health Company, as it always tried to be the first company that would obtain the latest science and technology in the health industry and to be applied in both Indonesia and the international market. It actively and gradually commenced comparative studies and innovation collaborations with world-class research centers and academics, as well as multinational companies. In 2018, the Company managed to take a big step by introducing a bio-based medicinal technology, in order to provid a safer treatment for chronic diseases. This step was taken by becoming a pioneer in the development of the biggest production facility for bio-based medicines in Indonesia. Nowadays, the transfer technology is still being implemented by the Company in order to produce domestic biological medicines with affordable selling prices.
          </p>

          <p style={{ marginBottom: 0 }}>
            In the end, the Company believes that these achievements and initiatives that we have conducted in 2022 will become a strong foundation in seizing opportunities and responding to future challenges.
          </p>
        </div>
      </section>

      {/* 6. CAMBODIA REPRESENTATIVE OFFICE & CONTACT BANNER */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 60px) 5% clamp(60px, 8vw, 90px)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #1A241A 0%, #006400 100%)",
            borderRadius: "clamp(20px, 4vw, 32px)",
            padding: "clamp(32px, 6vw, 56px) clamp(24px, 5vw, 48px)",
            color: "#FFFFFF",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#C6F6D5",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Contact Us • Cambodia Representative Office
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(24px, 4vw, 34px)",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: 16,
              }}
            >
              Kalbe International Pte., Ltd.
            </h2>
            <div style={{ display: "grid", gap: 12, fontSize: 14.5, color: "#E6F4EA" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <HiOutlineLocationMarker style={{ fontSize: 20, color: "#C6F6D5", flexShrink: 0, marginTop: 3 }} />
                <span><strong>Address:</strong> Morgan Tower, 14th floor, Room 8B-13, Sopheakmongkul street, Village 14, Sangkat Tonle Bassac, Khan Chamkar Mon, Phnom Penh.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <HiOutlinePhone style={{ fontSize: 18, color: "#C6F6D5", flexShrink: 0 }} />
                <span><strong>Tel:</strong> +855 93 923 291, +855 23 221 531</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <HiOutlineMail style={{ fontSize: 18, color: "#C6F6D5", flexShrink: 0 }} />
                <span><strong>Email:</strong> kalbe.cambodia@gmail.com, info@kalbe.com.kh</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                background: "#FFFFFF",
                color: "#1A241A",
                padding: "14px 36px",
                borderRadius: 40,
                fontWeight: 800,
                fontSize: 14.5,
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Contact Kalbe Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
