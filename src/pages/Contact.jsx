// pages/Contact.jsx - WOOD'S / Kalbe Healthcare
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaClock, FaEnvelope } from "react-icons/fa6";
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
      details: ["Phnom Penh, Cambodia", "Kalbe Cambodia Distribution"],
      link: null,
    },
    {
      icon: FaPhone,
      title: "Call Support",
      details: ["+855 17 591 779"],
      link: "tel:+85517591779",
    },
    {
      icon: FaEnvelope,
      title: "Email Inquiries",
      details: ["woodscambodia@gmail.com"],
      link: "mailto:woodscambodia@gmail.com",
    },
    {
      icon: FaClock,
      title: "Operating Hours",
      details: ["Mon - Sat: 8:30 AM - 5:30 PM", "Sunday: Closed"],
      link: null,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        
        .contact-card {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(92,61,46,0.1) !important;
          border-color: #8B5E3C !important;
        }
        
        .input-field {
          width: 100%;
          padding: 13px 16px;
          border: 1px solid rgba(139,94,60,0.2);
          border-radius: 12px;
          font-size: 14px;
          background: #FFFFFF;
          transition: all 0.2s ease;
          font-family: inherit;
          color: #3D2B1F;
        }
        .input-field:focus {
          outline: none;
          border-color: #8B5E3C;
          box-shadow: 0 0 0 3px rgba(139,94,60,0.12);
        }
      `}</style>

      <Nav />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(110px, 14vw, 130px) 5% 50px",
          background: "linear-gradient(135deg, #FFF8F2 0%, #FEF5EC 100%)",
          borderBottom: "1px solid rgba(139,94,60,0.1)",
        }}
      >
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#8B5E3C",
              marginBottom: 14,
              textTransform: "uppercase",
              background: "rgba(139,94,60,0.1)",
              padding: "5px 16px",
              borderRadius: 30,
            }}
          >
            Get In Touch
          </span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 800,
              color: "#3D2B1F",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Contact &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5E3C 0%, #C49A6C 100%)",
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
              fontSize: "clamp(15px, 2.8vw, 17px)",
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            Have inquiries regarding product availability, clinical details, medical nutrition guidance, or partnership opportunities? Our healthcare team is here to support you.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "50px 5% 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            marginBottom: 50,
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
                  padding: "28px 20px",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid rgba(139,94,60,0.12)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(139,94,60,0.1)",
                    color: "#8B5E3C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: 20,
                  }}
                >
                  <Icon />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#3D2B1F",
                    marginBottom: 10,
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
                        color: "#7A5C4A",
                        textDecoration: "none",
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 4,
                      }}
                    >
                      {detail}
                    </a>
                  ) : (
                    <p
                      key={i}
                      style={{
                        color: "#7A5C4A",
                        fontSize: 13,
                        margin: "0 0 4px 0",
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

        {/* Form & Info Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "clamp(30px, 5vw, 50px)",
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 36px)",
              border: "1px solid rgba(139,94,60,0.15)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(24px, 4vw, 30px)",
                fontWeight: 800,
                color: "#3D2B1F",
                marginBottom: 6,
              }}
            >
              Send an Inquiry
            </h2>
            <p style={{ fontSize: 13, color: "#7A5C4A", marginBottom: 24 }}>
              បំពេញព័ត៌មានខាងក្រោមដើម្បីទាក់ទងមកកាន់ក្រុមការងាររបស់យើង
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
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
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
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
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
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

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
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

              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", display: "block", marginBottom: 6 }}>
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
                  padding: "13px 24px",
                  background: "linear-gradient(135deg, #3D2B1F 0%, #8B5E3C 100%)",
                  color: "#FAF6F0",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 6px 16px rgba(61,43,31,0.25)",
                }}
              >
                Send Message <HiOutlineChevronRight />
              </button>

              {submitted && (
                <div
                  style={{
                    marginTop: 16,
                    padding: "12px",
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

          {/* Social & Location Channels */}
          <div>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                padding: "clamp(24px, 4vw, 36px)",
                border: "1px solid rgba(139,94,60,0.15)",
                marginBottom: 24,
              }}
            >
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#3D2B1F", fontWeight: 700, marginBottom: 12 }}>
                Connect on Social & Messaging
              </h3>
              <p style={{ fontSize: 13, color: "#7A5C4A", lineHeight: 1.6, marginBottom: 20 }}>
                Follow our official communication channels for updates, clinical guidelines, and healthcare education:
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://web.facebook.com/woodscambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 12,
                    background: "rgba(139,94,60,0.08)",
                    color: "#8B5E3C",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <FaFacebook style={{ fontSize: 18 }} /> Facebook
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 12,
                    background: "rgba(139,94,60,0.08)",
                    color: "#8B5E3C",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <FaTelegramPlane style={{ fontSize: 18 }} /> Telegram
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 12,
                    background: "rgba(139,94,60,0.08)",
                    color: "#8B5E3C",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <FaInstagram style={{ fontSize: 18 }} /> Instagram
                </a>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #3D2B1F 0%, #5C3D2E 100%)",
                borderRadius: 24,
                padding: "28px",
                color: "#FAF6F0",
              }}
            >
              <h4 style={{ fontSize: 18, fontFamily: "Georgia, serif", fontWeight: 700, marginBottom: 8, color: "#FAF6F0" }}>
                For Doctors & Pharmacists
              </h4>
              <p style={{ fontSize: 13, color: "rgba(250,246,240,0.85)", lineHeight: 1.6, margin: 0 }}>
                Need medical samples, product booklets, or KDIGO guideline literature for your clinic or hospital? Contact our medical representatives directly via phone or telegram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#3D2B1F",
          color: "#FAF6F0",
          padding: "60px 5% 40px",
          borderTop: "3px solid #8B5E3C",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 36,
            marginBottom: 40,
          }}
        >
          <div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#FAF6F0", marginBottom: 12 }}>
              WOOD'S CAMBODIA
            </h3>
            <p style={{ fontSize: 13, color: "rgba(250,246,240,0.7)", lineHeight: 1.6 }}>
              Distributed by Kalbe Cambodia • High quality pharmaceutical and clinical nutrition products.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 14, color: "#C49A6C", textTransform: "uppercase", marginBottom: 12 }}>
              Portfolios
            </h4>
            <ul style={{ listStyle: "none", fontSize: 13, color: "rgba(250,246,240,0.8)", lineHeight: 2 }}>
              <li><Link to="/product/1" style={{ color: "inherit", textDecoration: "none" }}>ENDO METABOLIC</Link></li>
              <li><Link to="/product/2" style={{ color: "inherit", textDecoration: "none" }}>MEDNUT Nutrition</Link></li>
              <li><Link to="/product/3" style={{ color: "inherit", textDecoration: "none" }}>Children Healthcare</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 14, color: "#C49A6C", textTransform: "uppercase", marginBottom: 12 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", fontSize: 13, color: "rgba(250,246,240,0.8)", lineHeight: 2 }}>
              <li><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
              <li><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: 20,
            borderTop: "1px solid rgba(250,246,240,0.15)",
            textAlign: "center",
            fontSize: 12,
            color: "rgba(250,246,240,0.5)",
          }}
        >
          © 2026 WOOD'S Cambodia / Kalbe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
