// components/layout/ui/Nav.jsx - Healthcare Nav with Integrated Search
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { products } from "../../data/products";
import { FaSearch } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Category",
    children: [
      {
        label: "ENDO METABOLIC",
        href: "/product/1",
        children: [
          { label: "EFESA", href: "/product/1/efesa" },
          { label: "HEMAPO", href: "/product/1/hemapo" },
          { label: "NOCID", href: "/product/1/nocid" },
          { label: "KALXID", href: "/product/1/kalxid" },
          { label: "KALMECO", href: "/product/1/kalmeco" },
          { label: "NEVOX XR", href: "/product/1/nevox-xr" },
        ],
      },
      {
        label: "Mednut",
        href: "/product/2",
        children: [
          { label: "NEPHRISOL", href: "/product/2/nephrisol" },
          { label: "NEPHRISOL-D", href: "/product/2/nephrisol-d" },
          { label: "PULMOSOL", href: "/product/2/pulmosol" },
          { label: "NUTRICAN", href: "/product/2/nutrican" },
          { label: "HEPATOSOL", href: "/product/2/hepatosol" },
        ],
      },
      {
        label: "Children Product",
        href: "/product/3",
        children: [
          { label: "RILLUS JR", href: "/product/3/rillus-jr" },
          { label: "PROSPAN", href: "/product/3/prospan" },
          { label: "KALMAXIME DS", href: "/product/3/kalmaxime-ds" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function NestedDropdown({ items, onMouseEnter, onMouseLeave }) {
  const [nestedOpen, setNestedOpen] = useState(null);
  const nestedTimer = useRef(null);
  const location = useLocation();

  const clearNested = () => {
    if (nestedTimer.current) clearTimeout(nestedTimer.current);
  };
  const openNested = (label) => {
    clearNested();
    setNestedOpen(label);
  };
  const closeNested = () => {
    nestedTimer.current = setTimeout(() => setNestedOpen(null), 120);
  };

  const glassBase = {
    background: "#FAF6F0",
    backdropFilter: "blur(20px)",
    border: "1px solid #8B5E3C",
    borderRadius: 16,
    padding: 8,
    boxShadow: "0 20px 40px -12px rgba(61,43,31,0.3)",
  };

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div
      style={{
        ...glassBase,
        position: "absolute",
        top: "calc(100% + 10px)",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: 220,
        zIndex: 200,
        animation: "fadeInDown 0.18s ease-out",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item) => (
        <div key={item.label} style={{ position: "relative" }}>
          {item.children ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 12,
                  cursor: "pointer",
                  background:
                    nestedOpen === item.label
                      ? "rgba(61,43,31,0.08)"
                      : isActive(item.href)
                      ? "rgba(139,94,60,0.1)"
                      : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={() => openNested(item.label)}
                onMouseLeave={closeNested}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: isActive(item.href) ? 600 : 500,
                    color: isActive(item.href) ? "#8B5E3C" : "#3D2B1F",
                  }}
                >
                  {item.label}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ opacity: 0.6, flexShrink: 0 }}
                >
                  <path
                    d="M4 2l4 4-4 4"
                    stroke="#3D2B1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {nestedOpen === item.label && (
                <div
                  style={{
                    ...glassBase,
                    position: "absolute",
                    top: 0,
                    left: "calc(100% + 8px)",
                    minWidth: 180,
                    zIndex: 300,
                    animation: "slideInRight 0.18s ease-out",
                  }}
                  onMouseEnter={() => {
                    clearNested();
                    setNestedOpen(item.label);
                  }}
                  onMouseLeave={closeNested}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        borderRadius: 12,
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: isActive(child.href) ? 600 : 500,
                        color: isActive(child.href) ? "#8B5E3C" : "#3D2B1F",
                        background: isActive(child.href)
                          ? "rgba(139,94,60,0.1)"
                          : "transparent",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(child.href)) {
                          e.currentTarget.style.background =
                            "rgba(61,43,31,0.08)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(child.href)) {
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.href}
              style={{
                display: "block",
                padding: "10px 14px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: isActive(item.href) ? 600 : 500,
                color: isActive(item.href) ? "#8B5E3C" : "#3D2B1F",
                background: isActive(item.href)
                  ? "rgba(139,94,60,0.1)"
                  : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.background = "rgba(61,43,31,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [isScrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileL3, setMobileL3] = useState(null);

  // Nav Search state
  const [navSearchQuery, setNavSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileL3(null);
    setOpen(null);
    setSearchOpen(false);
    setNavSearchQuery("");
  }, [location.pathname]);

  useOutsideClick(navRef, () => {
    setOpen(null);
    setMobileOpen(false);
  });

  useOutsideClick(searchRef, () => {
    setSearchOpen(false);
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (item) => {
    if (item.href === "/") return location.pathname === "/";
    if (item.children) {
      return item.children.some((c) => {
        if (c.children) {
          return c.children.some((child) =>
            location.pathname.startsWith(child.href),
          );
        }
        return location.pathname.startsWith(c.href);
      });
    }
    return location.pathname.startsWith(item.href);
  };

  const getActiveClass = (item) => {
    return isActive(item) ? " active" : "";
  };

  // Flattened products for search
  const allSubProducts = products.flatMap((portfolio) =>
    portfolio.subProducts.map((sp) => ({
      ...sp,
      portfolioId: portfolio.id,
      portfolioTitle: portfolio.title,
    }))
  );

  const matchingProducts = navSearchQuery.trim()
    ? allSubProducts.filter((p) => {
        const q = navSearchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          (p.genericName && p.genericName.toLowerCase().includes(q)) ||
          (p.categoryTag && p.categoryTag.toLowerCase().includes(q)) ||
          p.portfolioTitle.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to   { opacity: 1; max-height: 800px; }
        }

        .nav-glow {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #8B5E3C, #3D2B1F, #8B5E3C, transparent);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .nav-link-btn {
          font-size: 14px; font-weight: 500;
          color: rgba(61,43,31,0.8);
          padding: 8px 18px; border-radius: 40px;
          background: transparent; border: none;
          cursor: pointer; transition: color 0.2s, background 0.2s;
          display: flex; align-items: center; gap: 6px;
          white-space: nowrap; text-decoration: none;
        }
        .nav-link-btn:hover { color: #3D2B1F; background: rgba(61,43,31,0.06); }
        .nav-link-btn.active { color: #8B5E3C; background: rgba(139,94,60,0.1); font-weight: 600; }

        .nav-search-input {
          border: 1px solid rgba(139,94,60,0.25);
          outline: none;
          background: #FFFFFF;
          padding: 7px 14px 7px 34px;
          border-radius: 30px;
          font-size: 13px;
          color: #3D2B1F;
          width: 190px;
          transition: all 0.3s ease;
        }
        .nav-search-input:focus {
          width: 250px;
          border-color: #8B5E3C;
          box-shadow: 0 0 0 3px rgba(139,94,60,0.12);
        }

        .hamburger {
          display: none; background: none; border: none;
          color: #3D2B1F; cursor: pointer;
          padding: 6px; border-radius: 8px; transition: color 0.2s;
        }
        .hamburger:hover { color: #3D2B1F; background: rgba(61,43,31,0.06); }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 10px; font-size: 15px; font-weight: 500;
          color: #3D2B1F; border-radius: 10px;
          text-decoration: none; cursor: pointer;
          background: none; border: none; width: 100%;
          transition: color 0.15s, background 0.15s;
        }
        .mob-link:hover { color: #3D2B1F; background: rgba(61,43,31,0.05); }
        .mob-link.active { color: #8B5E3C; font-weight: 600; background: rgba(139,94,60,0.07); }
        .mob-sub a {
          display: block; padding: 9px 10px 9px 26px; font-size: 14px;
          color: rgba(61,43,31,0.7); border-radius: 8px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .mob-sub a:hover { color: #3D2B1F; background: rgba(61,43,31,0.08); }
        .mob-sub a.active { color: #8B5E3C; background: rgba(139,94,60,0.07); font-weight: 500; }
        .mob-sub-sub a { padding-left: 42px !important; }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link-btn { padding: 6px 10px; font-size: 13px; }
          .nav-search-input { width: 130px; font-size: 12px; padding: 6px 10px 6px 30px; }
          .nav-search-input:focus { width: 175px; }
          .desktop-nav { gap: 2px !important; }
        }
        
        @media (max-width: 768px) {
          .desktop-nav, .desktop-search { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-glow { display: none; }
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled ? "#FAF6F0" : "rgba(250,246,240,0.95)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: "1px solid rgba(139,94,60,0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="nav-glow" />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 32px)",
            height: isScrolled
              ? "clamp(50px, 8vh, 60px)"
              : "clamp(60px, 9vh, 70px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "height 0.3s ease",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 2vw, 10px)",
            }}
          >
            <div
              style={{
                width: "clamp(30px, 5vw, 34px)",
                height: "clamp(30px, 5vw, 34px)",
                borderRadius: 10,
                overflow: "hidden",
                background: "linear-gradient(135deg,#3D2B1F,#8B5E3C)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(61,43,31,0.3)",
                flexShrink: 0,
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "clamp(18px, 4vw, 21px)",
                fontWeight: 500,
                background: "linear-gradient(135deg,#3D2B1F,#8B5E3C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WOOD'S
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(2px, 1vw, 6px)",
            }}
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={closeMenu}
                >
                  <button className={`nav-link-btn${getActiveClass(item)}`}>
                    {item.label}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transition: "transform 0.2s",
                        transform:
                          open === item.label ? "rotate(180deg)" : "none",
                        opacity: 0.6,
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {open === item.label && (
                    <NestedDropdown
                      items={item.children}
                      onMouseEnter={keepOpen}
                      onMouseLeave={closeMenu}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link-btn${getActiveClass(item)}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Search Bar in place of Login & Get Started */}
          <div
            ref={searchRef}
            className="desktop-search"
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <FaSearch
                style={{
                  position: "absolute",
                  left: 12,
                  color: "#8B5E3C",
                  fontSize: 13,
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={navSearchQuery}
                onChange={(e) => {
                  setNavSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                className="nav-search-input"
              />
              {navSearchQuery && (
                <button
                  onClick={() => {
                    setNavSearchQuery("");
                    setSearchOpen(false);
                  }}
                  style={{
                    position: "absolute",
                    right: 10,
                    background: "none",
                    border: "none",
                    color: "#8B7355",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dropdown Results for Desktop Search */}
            {searchOpen && navSearchQuery.trim() && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: 320,
                  background: "#FFFFFF",
                  borderRadius: 16,
                  border: "1px solid rgba(139,94,60,0.2)",
                  boxShadow: "0 18px 36px rgba(61,43,31,0.18)",
                  padding: 8,
                  zIndex: 500,
                  maxHeight: 340,
                  overflowY: "auto",
                }}
              >
                {matchingProducts.length > 0 ? (
                  matchingProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/product/${prod.portfolioId}/${prod.id}`}
                      onClick={() => setSearchOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 10px",
                        borderRadius: 10,
                        textDecoration: "none",
                        color: "#3D2B1F",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,94,60,0.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        style={{
                          width: 34,
                          height: 34,
                          objectFit: "contain",
                          background: "#FAF6F0",
                          borderRadius: 6,
                          padding: 2,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 13, color: "#3D2B1F" }}>
                          {prod.title}
                        </div>
                        <div style={{ fontSize: 11, color: "#8B5E3C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {prod.portfolioTitle} • {prod.genericName || prod.categoryTag}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "14px", textAlign: "center", color: "#8B7355", fontSize: 12 }}>
                    No products found for "{navSearchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path
                  d="M4 4l14 14M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Panel with Search */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(139,94,60,0.2)",
              padding: "12px 16px 20px",
              animation: "slideDown 0.22s ease",
              overflow: "hidden",
              background: "#FAF6F0",
              maxHeight: "calc(100vh - 70px)",
              overflowY: "auto",
            }}
          >
            {/* Mobile Search Box */}
            <div style={{ position: "relative", marginBottom: 14 }}>
              <FaSearch
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#8B5E3C",
                  fontSize: 13,
                }}
              />
              <input
                type="text"
                placeholder="Search products (Efesa, Prospan, Nephrisol...)"
                value={navSearchQuery}
                onChange={(e) => setNavSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 36px",
                  borderRadius: 24,
                  border: "1px solid rgba(139,94,60,0.25)",
                  background: "#FFFFFF",
                  fontSize: 13,
                  color: "#3D2B1F",
                  outline: "none",
                }}
              />
            </div>

            {/* Mobile Search Results */}
            {navSearchQuery.trim() && (
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  padding: 8,
                  border: "1px solid rgba(139,94,60,0.2)",
                  marginBottom: 14,
                  maxHeight: 220,
                  overflowY: "auto",
                }}
              >
                {matchingProducts.length > 0 ? (
                  matchingProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/product/${prod.portfolioId}/${prod.id}`}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px",
                        textDecoration: "none",
                        color: "#3D2B1F",
                        borderBottom: "1px solid rgba(139,94,60,0.06)",
                      }}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        style={{ width: 30, height: 30, objectFit: "contain" }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13 }}>{prod.title}</div>
                        <div style={{ fontSize: 11, color: "#8B5E3C" }}>{prod.portfolioTitle}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "10px", textAlign: "center", fontSize: 12, color: "#8B7355" }}>
                    No products found
                  </div>
                )}
              </div>
            )}

            {/* Mobile Nav Links */}
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className={`mob-link${getActiveClass(item)}`}
                    onClick={() => {
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label,
                      );
                      setMobileL3(null);
                    }}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transition: "transform 0.2s",
                        transform:
                          mobileExpanded === item.label
                            ? "rotate(180deg)"
                            : "none",
                        opacity: 0.6,
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mob-sub">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.label}>
                            <button
                              className="mob-link"
                              style={{ fontSize: 14, paddingLeft: 26 }}
                              onClick={() =>
                                setMobileL3(
                                  mobileL3 === child.label ? null : child.label,
                                )
                              }
                            >
                              <span>{child.label}</span>
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 12 12"
                                fill="none"
                                style={{
                                  transition: "transform 0.2s",
                                  transform:
                                    mobileL3 === child.label
                                      ? "rotate(180deg)"
                                      : "none",
                                  opacity: 0.6,
                                }}
                              >
                                <path
                                  d="M2 4l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            {mobileL3 === child.label && (
                              <div className="mob-sub mob-sub-sub">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    className={
                                      location.pathname === sub.href
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={
                              location.pathname === child.href ? "active" : ""
                            }
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`mob-link${getActiveClass(item)}`}
                >
                  <span>{item.label}</span>
                </Link>
              ),
            )}
          </div>
        )}
      </nav>
    </>
  );
}
