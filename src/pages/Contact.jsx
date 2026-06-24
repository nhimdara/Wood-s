// pages/Contact.jsx
import React, { useState } from "react";
import Nav from "../components/layout/ui/Nav";

import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Visit Us",
      details: ["Phnom Penh, Cambodia"],
      link: null,
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+855 17 591 779"],
      link: "tel:+85517591779",
    },
    {
      icon: MdEmail,
      title: "Email Us",
      details: ["woodscambodia@gmail.com"],
      link: "mailto:woodscambodia@gmail.com",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      link: null,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        
        .contact-card {
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          background: rgba(139,94,60,0.08);
        }
        
        .input-focus:focus {
          outline: none;
          border-color: #8B5E3C;
          box-shadow: 0 0 0 3px rgba(139,94,60,0.1);
        }
        
        @media (max-width: 768px) {
          .contact-cards {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .form-map-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 640px) {
          .contact-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Nav />

      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 5% 60px",
          background: "linear-gradient(135deg, #FFF8F2 0%, #FEF5EC 100%)",
        }}
      >
        <div>
          <span
            className="fade-up"
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#8B5E3C",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Get in Touch
          </span>
          <h1
            className="fade-up"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "72px",
              fontWeight: 800,
              color: "#3D2B1F",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Let's Talk
            <br />
            <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
              We're Listening
            </span>
          </h1>
          <p
            className="fade-up"
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#7A5C4A",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Have questions about our products or need assistance? Our team is
            here to help you.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 5%",
        }}
      >
        <div
          className="contact-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            marginBottom: 60,
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
                  padding: "30px 20px",
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  border: "1px solid rgba(139,94,60,0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "16px",
                    background: "rgba(139,94,60,0.1)",
                    borderRadius: "50%",
                    marginBottom: 20,
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "28px",
                      color: "#8B5E3C",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#3D2B1F",
                    marginBottom: 12,
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
                        fontSize: "14px",
                        marginBottom: i === info.details.length - 1 ? 0 : 4,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#8B5E3C")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#7A5C4A")
                      }
                    >
                      {detail}
                    </a>
                  ) : (
                    <p
                      key={i}
                      style={{
                        color: "#7A5C4A",
                        fontSize: "14px",
                        marginBottom: i === info.details.length - 1 ? 0 : 4,
                      }}
                    >
                      {detail}
                    </p>
                  ),
                )}
              </div>
            );
          })}
        </div>

        <div
          className="form-map-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#3D2B1F",
                marginBottom: 24,
              }}
            >
              Send Us a{" "}
              <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
                Message
              </span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="input-focus"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "1px solid rgba(139,94,60,0.2)",
                    borderRadius: 12,
                    fontSize: "14px",
                    background: "#FFFFFF",
                    transition: "all 0.2s",
                  }}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="input-focus"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "1px solid rgba(139,94,60,0.2)",
                    borderRadius: 12,
                    fontSize: "14px",
                    background: "#FFFFFF",
                    transition: "all 0.2s",
                  }}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="input-focus"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "1px solid rgba(139,94,60,0.2)",
                    borderRadius: 12,
                    fontSize: "14px",
                    background: "#FFFFFF",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  background:
                    "linear-gradient(135deg, #8B5E3C 0%, #6B4226 100%)",
                  color: "#FAF6F0",
                  border: "none",
                  borderRadius: 12,
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(107,66,38,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Send Message <HiOutlineChevronRight />
              </button>
              {submitted && (
                <p
                  style={{
                    marginTop: 16,
                    color: "#8B5E3C",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#3D2B1F",
                marginBottom: 24,
              }}
            >
              Find{" "}
              <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>Us</span>
            </h2>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  background: "linear-gradient(135deg, #8B5E3C, #6B4226)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "24px",
                }}
              >
                📍 WOOD'S Cambodia
                <br />
                Phnom Penh
              </div>
            </div>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://web.facebook.com/woodscambodia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(139,94,60,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#8B5E3C";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(139,94,60,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaFacebook
                  style={{
                    color: "#8B5E3C",
                    fontSize: "20px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FAF6F0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8B5E3C")
                  }
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(139,94,60,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#8B5E3C";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(139,94,60,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaInstagram
                  style={{
                    color: "#8B5E3C",
                    fontSize: "20px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FAF6F0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8B5E3C")
                  }
                />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(139,94,60,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#8B5E3C";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(139,94,60,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaTelegramPlane
                  style={{
                    color: "#8B5E3C",
                    fontSize: "20px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FAF6F0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8B5E3C")
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
