// pages/Product.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../components/layout/ui/Nav";
import SubProductCard from "../components/layout/ui/SubProductCard";
import { products } from "../components/data/products";
import { HiOutlineChevronRight, HiOutlineCheck } from "react-icons/hi";
import { FaLeaf, FaHeartbeat, FaSeedling, FaStar } from "react-icons/fa";

const Product = () => {
  const { id, subId } = useParams();
  const [activeTab, setActiveTab] = useState("benefits");

  const parentProduct = products.find((p) => String(p.id) === id);
  const subProduct =
    subId && parentProduct?.subProducts?.find((sp) => sp.id === subId);

  // Sub-product detail view
  if (subProduct && parentProduct) {
    const details = subProduct.details;

    return (
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#FAF6F0",
          minHeight: "100vh",
        }}
      >
        <style>{`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .fade-up { animation: fadeUp 0.6s ease forwards; }
  .slide-in { animation: slideIn 0.5s ease forwards; }
  
  .benefit-item {
    transition: all 0.3s ease;
  }
  .benefit-item:hover {
    transform: translateX(8px);
    background: rgba(139,94,60,0.1);
  }
  
  .tab-button {
    transition: all 0.3s ease;
  }
  .tab-button:hover {
    color: #8B5E3C;
  }
  
  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
      text-align: center;
    }
    .tab-buttons {
      justify-content: center !important;
    }
    .tab-button {
      padding: 8px 16px !important;
      font-size: 14px !important;
    }
  }
  
  @media (max-width: 640px) {
    .tab-button {
      padding: 6px 12px !important;
      font-size: 12px !important;
    }
    .benefit-item {
      padding: 10px 12px !important;
    }
  }
`}</style>

        <Nav />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(80px, 15vw, 100px) 5% 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "clamp(11px, 2.5vw, 13px)",
              color: "#8B7355",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#8B5E3C",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Home
            </Link>
            <span>›</span>
            <Link
              to={`/product/${id}`}
              style={{
                color: "#8B5E3C",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {parentProduct.title}
            </Link>
            <span>›</span>
            <span style={{ color: "#3D2B1F", fontWeight: 500 }}>
              {subProduct.title}
            </span>
          </div>
        </div>

        <section
          className="product-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 5% 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(30px, 5vw, 50px)",
          }}
        >
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div style={{ position: "relative" }}>
              <img
                src={subProduct.image}
                alt={subProduct.title}
                style={{
                  width: "100%",
                  borderRadius: "clamp(20px, 4vw, 28px)",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                  boxShadow: "0 30px 60px rgba(92,61,46,0.2)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </div>

          <div>
            <div className="fade-up">
              <span
                style={{
                  display: "inline-block",
                  fontSize: "clamp(11px, 2.5vw, 12px)",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: "#8B5E3C",
                  background: "rgba(139,94,60,0.1)",
                  padding: "5px 14px",
                  borderRadius: 30,
                  marginBottom: 18,
                }}
              >
                {parentProduct.title}
              </span>
            </div>

            <h1
              className="fade-up"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 800,
                color: "#3D2B1F",
                lineHeight: 1.1,
                marginBottom: 16,
                animationDelay: "0.1s",
              }}
            >
              {subProduct.title}
            </h1>

            <p
              className="fade-up"
              style={{
                fontSize: "clamp(13px, 2.8vw, 14px)",
                color: "#8B5E3C",
                marginBottom: 20,
                fontWeight: 500,
                animationDelay: "0.15s",
              }}
            >
              Origin: {subProduct.origin}
            </p>

            <p
              className="fade-up"
              style={{
                fontSize: "clamp(15px, 3vw, 17px)",
                lineHeight: 1.7,
                color: "#7A5C4A",
                marginBottom: 30,
                animationDelay: "0.2s",
              }}
            >
              {details.description}
            </p>

            <div
              className="fade-up"
              style={{
                display: "flex",
                gap: "clamp(12px, 3vw, 20px)",
                marginBottom: 30,
                flexWrap: "wrap",
                justifyContent: "flex-start",
                animationDelay: "0.25s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaLeaf
                  style={{
                    color: "#8B5E3C",
                    fontSize: "clamp(16px, 3vw, 18px)",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    color: "#7A5C4A",
                  }}
                >
                  100% Natural
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaHeartbeat
                  style={{
                    color: "#8B5E3C",
                    fontSize: "clamp(16px, 3vw, 18px)",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    color: "#7A5C4A",
                  }}
                >
                  Health Checked
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaSeedling
                  style={{
                    color: "#8B5E3C",
                    fontSize: "clamp(16px, 3vw, 18px)",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    color: "#7A5C4A",
                  }}
                >
                  Sustainably Sourced
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaStar
                  style={{
                    color: "#8B5E3C",
                    fontSize: "clamp(16px, 3vw, 18px)",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    color: "#7A5C4A",
                  }}
                >
                  Premium Quality
                </span>
              </div>
            </div>

            <div
              className="fade-up"
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                justifyContent: "flex-start",
                animationDelay: "0.3s",
              }}
            >
              <Link
                to={`/product/${id}`}
                style={{
                  background: "transparent",
                  color: "#8B5E3C",
                  padding: "clamp(12px, 2.5vw, 15px) clamp(28px, 5vw, 38px)",
                  borderRadius: 50,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 2.8vw, 15px)",
                  border: "2px solid #8B5E3C",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139,94,60,0.07)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#FFF8F2",
            padding: "clamp(40px, 8vw, 60px) 5%",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                gap: "clamp(8px, 2vw, 10px)",
                borderBottom: "2px solid rgba(139,94,60,0.1)",
                marginBottom: 30,
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {["benefits", "ingredients", "usage"].map((tab) => (
                <button
                  key={tab}
                  className="tab-button"
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)",
                    fontSize: "clamp(14px, 2.8vw, 16px)",
                    fontWeight: activeTab === tab ? 700 : 500,
                    color: activeTab === tab ? "#8B5E3C" : "#7A5C4A",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderBottom:
                      activeTab === tab
                        ? "3px solid #8B5E3C"
                        : "3px solid transparent",
                    transition: "all 0.3s ease",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="slide-in">
              {activeTab === "benefits" && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(24px, 4vw, 28px)",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      marginBottom: 24,
                    }}
                  >
                    Health{" "}
                    <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
                      Benefits
                    </span>
                  </h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    {details.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="benefit-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding:
                            "clamp(10px, 2vw, 12px) clamp(12px, 3vw, 16px)",
                          background: "#FFFFFF",
                          borderRadius: 12,
                          border: "1px solid rgba(139,94,60,0.1)",
                        }}
                      >
                        <div
                          style={{
                            width: "clamp(24px, 5vw, 28px)",
                            height: "clamp(24px, 5vw, 28px)",
                            borderRadius: "50%",
                            background: "rgba(139,94,60,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <HiOutlineCheck
                            style={{
                              color: "#8B5E3C",
                              fontSize: "clamp(14px, 3vw, 16px)",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "clamp(13px, 2.8vw, 15px)",
                            color: "#3D2B1F",
                          }}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(24px, 4vw, 28px)",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      marginBottom: 24,
                    }}
                  >
                    Pure{" "}
                    <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
                      Ingredients
                    </span>
                  </h3>
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "clamp(16px, 3vw, 20px)",
                      padding: "clamp(20px, 4vw, 30px)",
                      border: "1px solid rgba(139,94,60,0.1)",
                    }}
                  >
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {details.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          style={{
                            padding: "clamp(10px, 2vw, 12px) 0",
                            borderBottom:
                              index < details.ingredients.length - 1
                                ? "1px solid rgba(139,94,60,0.1)"
                                : "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            fontSize: "clamp(13px, 2.8vw, 15px)",
                            color: "#3D2B1F",
                          }}
                        >
                          <span
                            style={{
                              color: "#8B5E3C",
                              fontSize: "clamp(16px, 3vw, 18px)",
                            }}
                          >
                            •
                          </span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "usage" && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(24px, 4vw, 28px)",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      marginBottom: 24,
                    }}
                  >
                    How to{" "}
                    <span style={{ color: "#8B5E3C", fontStyle: "italic" }}>
                      Use
                    </span>
                  </h3>
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "clamp(16px, 3vw, 20px)",
                      padding: "clamp(20px, 4vw, 30px)",
                      border: "1px solid rgba(139,94,60,0.1)",
                    }}
                  >
                    <div style={{ marginBottom: 24 }}>
                      <h4
                        style={{
                          fontSize: "clamp(16px, 3vw, 18px)",
                          fontWeight: 700,
                          color: "#3D2B1F",
                          marginBottom: 12,
                        }}
                      >
                        Preparation
                      </h4>
                      <p
                        style={{
                          fontSize: "clamp(13px, 2.8vw, 15px)",
                          color: "#7A5C4A",
                          lineHeight: 1.6,
                        }}
                      >
                        {details.howToUse}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "clamp(16px, 3vw, 18px)",
                          fontWeight: 700,
                          color: "#3D2B1F",
                          marginBottom: 12,
                        }}
                      >
                        Storage
                      </h4>
                      <p
                        style={{
                          fontSize: "clamp(13px, 2.8vw, 15px)",
                          color: "#7A5C4A",
                          lineHeight: 1.6,
                        }}
                      >
                        {details.storage}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Parent product view
  if (parentProduct) {
    return (
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#FAF6F0",
          minHeight: "100vh",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
          
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .fade-up { animation: fadeUp 0.6s ease forwards; }
          
          @media (max-width: 768px) {
            .subproducts-grid {
              grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr)) !important;
              gap: 24px !important;
            }
          }
        `}</style>

        <Nav />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(80px, 15vw, 100px) 5% 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "clamp(11px, 2.5vw, 13px)",
              color: "#8B7355",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#8B5E3C",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Home
            </Link>
            <span>›</span>
            <span style={{ color: "#3D2B1F", fontWeight: 500 }}>
              {parentProduct.title}
            </span>
          </div>
        </div>

        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 5% 20px",
            textAlign: "center",
          }}
        >
          <h1
            className="fade-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 7vw, 68px)",
              fontWeight: 800,
              color: "#3D2B1F",
              marginBottom: 16,
            }}
          >
            {parentProduct.title}
          </h1>
          <p
            className="fade-up"
            style={{
              fontSize: "clamp(16px, 3.5vw, 18px)",
              color: "#7A5C4A",
              maxWidth: 700,
              margin: "0 auto",
              animationDelay: "0.1s",
            }}
          >
            {parentProduct.description}
          </p>
        </section>

        <section
          style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 5% 80px" }}
        >
          <div
            className="subproducts-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: "clamp(24px, 4vw, 32px)",
            }}
          >
            {parentProduct.subProducts.map((subProduct, index) => (
              <div
                key={subProduct.id}
                className="fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SubProductCard product={subProduct} parentId={id} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Not found
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <div
        style={{
          paddingTop: 120,
          textAlign: "center",
          maxWidth: 600,
          margin: "0 auto",
          padding: "clamp(100px, 20vw, 120px) 24px 60px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 7vw, 48px)",
            color: "#3D2B1F",
            marginBottom: 16,
          }}
        >
          Product Not Found
        </h1>
        <p
          style={{
            color: "#7A5C4A",
            fontSize: "clamp(15px, 3vw, 17px)",
            marginBottom: 32,
          }}
        >
          Sorry, we couldn't find that product.
        </p>
        <Link
          to="/"
          style={{
            background: "#8B5E3C",
            color: "#FAF6F0",
            padding: "clamp(12px, 2.5vw, 14px) clamp(28px, 5vw, 36px)",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "clamp(13px, 2.8vw, 15px)",
            display: "inline-block",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Product;
