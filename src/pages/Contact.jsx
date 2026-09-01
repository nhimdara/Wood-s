// pages/Contact.jsx - WOOD'S / Kalbe Healthcare
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaClock, FaEnvelope, FaHospital, FaStethoscope } from "react-icons/fa6";
import { HiOutlineChevronRight, HiOutlineCheckCircle } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Headquarters",
      details: [
        "Morgan Tower, 14th Floor, Room 8B-13",
        "Sopheakmongkul St., Tonle Bassac, Phnom Penh",
      ],
      link: "https://maps.google.com/?q=Morgan+Tower+Phnom+Penh",
    },
    {
      icon: FaPhone,
      title: "Call Support",
      details: ["+855 93 923 291", "+855 23 221 531"],
      link: "tel:+85593923291",
    },
    {
      icon: FaEnvelope,
      title: "Email Inquiries",
      details: ["kalbe.cambodia@gmail.com", "info@kalbe.com.kh"],
      link: "mailto:kalbe.cambodia@gmail.com",
    },
    {
      icon: FaClock,
      title: "Operating Hours",
      details: ["Mon - Sat: 8:00 AM - 5:30 PM", "Sunday: Closed"],
      link: null,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Kantumruy Pro', 'Segoe UI', 'Roboto', sans-serif",
        background: "#F8FAF6",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        
        .contact-card {
          transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(13,110,56,0.08) !important;
          border-color: #0D6E38 !important;
        }
        
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(13,110,56,0.2);
          border-radius: 12px;
          font-size: 13.5px;
          background: #FFFFFF;
          transition: all 0.2s ease;
          font-family: inherit;
          color: #1A241A;
          box-sizing: border-box;
        }
        .input-field:focus {
          outline: none;
          border-color: #0D6E38;
          box-shadow: 0 0 0 3px rgba(13,110,56,0.12);
        }

        .channel-row {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          padding: 12px 16px;
          border-radius: 14px;
          background: #F8FAF6;
          border: 1px solid rgba(13,110,56,0.1);
          text-decoration: none;
          color: #1A241A;
          transition: all 0.2s ease;
        }
        .channel-row:hover {
          background: rgba(13,110,56,0.1);
          transform: translateX(4px);
          border-color: #0D6E38;
        }

        .contact-grid-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        @media (max-width: 960px) {
          .contact-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <Nav />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "35vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(95px, 12vw, 120px) 5% 40px",
          background: "linear-gradient(135deg, #F0FDF4 0%, #EBF5E5 100%)",
          borderBottom: "1px solid rgba(13,110,56,0.1)",
        }}
      >
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#0D6E38",
              marginBottom: 12,
              textTransform: "uppercase",
              background: "rgba(13,110,56,0.1)",
              padding: "4px 14px",
              borderRadius: 30,
            }}
          >
            Get In Touch
          </span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(32px, 5.5vw, 52px)",
              fontWeight: 800,
              color: "#1A241A",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Contact &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0D6E38 0%, #68A62A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Support Center
            </span>
          </h1>
          <p
            className="fade-up"
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: 1.7,
              color: "#4A5A4A",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            Have inquiries regarding product availability, clinical details, medical nutrition guidance, or partnership opportunities? Our healthcare team is here to support you.
          </p>
        </div>
      </section>

      {/* Top 4 Contact Info Cards */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 5% 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="contact-card"
                style={{
                  textAlign: "center",
                  padding: "24px 18px",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid rgba(13,110,56,0.12)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(13,110,56,0.1)",
                    color: "#0D6E38",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    fontSize: 18,
                  }}
                >
                  <Icon />
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1A241A",
                    marginBottom: 8,
                  }}
                >
                  {info.title}
                </h3>
                {info.details.map((detail, i) =>
                  info.link ? (
                    <a
                      key={i}
                      href={info.link}
                      style={{
                        display: "block",
                        color: "#4A5A4A",
                        textDecoration: "none",
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 3,
                      }}
                    >
                      {detail}
                    </a>
                  ) : (
                    <p
                      key={i}
                      style={{
                        color: "#4A5A4A",
                        fontSize: 13,
                        margin: "0 0 3px 0",
                      }}
                    >
                      {detail}
                    </p>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* Unified 2-Column Symmetrical Form & Hub */}
        <div className="contact-grid-wrapper">
          {/* Left Column: Contact Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 36px)",
              border: "1px solid rgba(13,110,56,0.15)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(22px, 3.5vw, 28px)",
                  fontWeight: 800,
                  color: "#1A241A",
                  marginBottom: 6,
                }}
              >
                Send an Inquiry
              </h2>
              <p style={{ fontSize: 13, color: "#4A5A4A", marginBottom: 20 }}>
                បំពេញព័ត៌មានខាងក្រោមដើម្បីទាក់ទងមកកាន់ក្រុមការងាររបស់យើង
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 5 }}>
                    Full Name / ឈ្មោះ
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Sokha / លោក ឈុន"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="input-field"
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 5 }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 5 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+855 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 5 }}>
                    Inquiry Category / ប្រធានបទ
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="input-field"
                  >
                    <option value="general">General Healthcare Inquiry</option>
                    <option value="endo">ENDO METABOLIC (EFESA, HEMAPO, NOCID, KALXID, KALMECO, NEVOX XR)</option>
                    <option value="mednut">MEDNUT Nutrition (Nephrisol, Nephrisol-D, Pulmosol, Nutrican, Hepatosol)</option>
                    <option value="pediatric">Children Products (Prospan, Rillus Jr, Kalmaxime DS)</option>
                    <option value="pharmacy">Pharmacy & Clinic Distribution</option>
                  </select>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#1A241A", display: "block", marginBottom: 5 }}>
                    Message / សារ
                  </label>
                  <textarea
                    placeholder="How can we assist you with our products or clinical guidance?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="input-field"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, #1A241A 0%, #0D6E38 100%)",
                    color: "#F8FAF6",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 6px 16px rgba(13,110,56,0.25)",
                  }}
                >
                  Send Message <HiOutlineChevronRight />
                </button>

                {submitted && (
                  <div
                    style={{
                      marginTop: 14,
                      padding: "10px 14px",
                      background: "#ECFDF5",
                      color: "#065F46",
                      borderRadius: 10,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <HiOutlineCheckCircle style={{ fontSize: 18, color: "#059669" }} />
                    Thank you! Your message has been received. Our medical team will respond shortly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Unified Healthcare Hub & Channels */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 36px)",
              border: "1px solid rgba(13,110,56,0.15)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            {/* For Doctors & Clinics Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #1A241A 0%, #006400 100%)",
                borderRadius: 18,
                padding: "20px 22px",
                color: "#F8FAF6",
                boxShadow: "0 8px 20px rgba(13,110,56,0.15)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(250,246,240,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#F8FAF6",
                    fontSize: 15,
                  }}
                >
                  <FaStethoscope />
                </div>
                <h4 style={{ fontSize: 16, fontFamily: "Georgia, serif", fontWeight: 700, margin: 0, color: "#F8FAF6" }}>
                  For Doctors & Pharmacists
                </h4>
              </div>
              <p style={{ fontSize: 12.5, color: "rgba(250,246,240,0.88)", lineHeight: 1.6, margin: 0 }}>
                Need medical samples, product booklets, or KDIGO guideline literature for your clinic or hospital? Contact our medical representatives directly via phone or Telegram.
              </p>
            </div>

            {/* Official Messaging Channels */}
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#1A241A", fontWeight: 700, marginBottom: 12 }}>
                Official Social & Messaging
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-row"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#0088CC",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      <FaTelegramPlane />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>Telegram Medical Support</div>
                      <div style={{ fontSize: 11.5, color: "#4A5A4A" }}>Fast consultation & samples</div>
                    </div>
                  </div>
                  <HiOutlineChevronRight style={{ color: "#0D6E38" }} />
                </a>

                <a
                  href="https://www.facebook.com/kalbecambodia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-row"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#1877F2",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      <FaFacebook />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>Facebook Official Page</div>
                      <div style={{ fontSize: 11.5, color: "#4A5A4A" }}>@kalbecambodia updates</div>
                    </div>
                  </div>
                  <HiOutlineChevronRight style={{ color: "#0D6E38" }} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-row"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      <FaInstagram />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>Instagram Healthcare Feed</div>
                      <div style={{ fontSize: 11.5, color: "#4A5A4A" }}>Product guides & wellness</div>
                    </div>
                  </div>
                  <HiOutlineChevronRight style={{ color: "#0D6E38" }} />
                </a>
              </div>
            </div>

            {/* Quick Hotline Bar */}
            <div
              style={{
                background: "#F8FAF6",
                borderRadius: 14,
                padding: "14px 18px",
                border: "1px solid rgba(13,110,56,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                <div style={{ fontSize: 11.5, color: "#4A5A4A", fontWeight: 600 }}>DIRECT MEDICAL HOTLINE</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#0D6E38" }}>+855 93 923 291 / +855 23 221 531</div>
              </div>
              <a
                href="tel:+85593923291"
                style={{
                  background: "#0D6E38",
                  color: "#FFFFFF",
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
