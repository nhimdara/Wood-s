import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import kalbeLogo from "../../assets/logo/kalbe-logo.png";
import { products, PRODUCT_THEMES } from "../../data/products";
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
    background: "#FFFFFF",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(13,110,56,0.18)",
    borderRadius: 16,
    padding: 8,
    boxShadow: "0 20px 40px -12px rgba(13,110,56,0.15)",
  };

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
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
                      ? "rgba(13,110,56,0.08)"
                      : "transparent",
                  color:
                    nestedOpen === item.label || isActive(item.href)
                      ? "#0D6E38"
                      : "#1A241A",
                  fontWeight:
                    nestedOpen === item.label || isActive(item.href)
                      ? 700
                      : 500,
                  fontSize: 13.5,
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={() => openNested(item.label)}
                onMouseLeave={closeNested}
              >
                <span>{item.label}</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transform:
                      nestedOpen === item.label
                        ? "translateX(2px)"
                        : "none",
                    opacity: 0.7,
                    transition: "transform 0.15s",
                  }}
                >
                  <path
                    d="M4 2l4 4-4 4"
                    stroke="currentColor"
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
                  {item.children.map((child) => {
                    const childId = child.href.split("/").pop();
                    const childTheme = PRODUCT_THEMES[childId] || {
                      primary: "#0D6E38",
                      light: "rgba(13,110,56,0.1)",
                      fontFamily: "'Montserrat', sans-serif",
                    };
                    const isChildActive = isActive(child.href);

                    return (
                      <Link
                        key={child.label}
                        to={child.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          borderRadius: 10,
                          textDecoration: "none",
                          fontSize: 14,
                          fontFamily: childTheme.fontFamily || "'Montserrat', sans-serif",
                          fontWeight: 800,
                          letterSpacing: childTheme.letterSpacing || "0.5px",
                          color: childTheme.primary,
                          background: isChildActive
                            ? childTheme.light
                            : "transparent",
                          borderLeft: isChildActive
                            ? `3px solid ${childTheme.primary}`
                            : "3px solid transparent",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = childTheme.light;
                          e.currentTarget.style.borderLeftColor = childTheme.primary;
                        }}
                        onMouseLeave={(e) => {
                          if (!isChildActive) {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderLeftColor = "transparent";
                          }
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: childTheme.primary,
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          {child.label}
                        </span>
                        {isChildActive && (
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: childTheme.primary,
                              textTransform: "uppercase",
                              background: "rgba(255,255,255,0.8)",
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Active
                          </span>
                        )}
                      </Link>
                    );
                  })}
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
                color: isActive(item.href) ? "#0D6E38" : "#1A241A",
                background: isActive(item.href)
                  ? "rgba(13,110,56,0.1)"
                  : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.background = "rgba(13,110,56,0.08)";
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
          return c.children.some(
            (child) =>
              location.pathname === child.href ||
              location.pathname.startsWith(child.href + "/"),
          );
        }
        return (
          location.pathname === c.href ||
          location.pathname.startsWith(c.href + "/")
        );
      });
    }
    return (
      location.pathname === item.href ||
      location.pathname.startsWith(item.href + "/")
    );
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
          position: absolute; bottom: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(90deg, transparent, #0D6E38, #78B833, #0D6E38, transparent);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .nav-link-btn {
          font-size: 13.5px; font-weight: 500;
          color: #1A241A;
          padding: 6px 14px; border-radius: 40px;
          background: transparent; border: none;
          cursor: pointer; transition: color 0.2s, background 0.2s;
          display: flex; align-items: center; gap: 5px;
          white-space: nowrap; text-decoration: none;
        }
        .nav-link-btn:hover { color: #0D6E38; background: rgba(13,110,56,0.06); }
        .nav-link-btn.active { color: #0D6E38; background: rgba(13,110,56,0.1); font-weight: 700; }

        .nav-search-input {
          border: 1px solid rgba(13,110,56,0.22);
          outline: none;
          background: #FFFFFF;
          padding: 5px 12px 5px 30px;
          border-radius: 30px;
          font-size: 12.5px;
          color: #1A241A;
          width: 160px;
          transition: all 0.3s ease;
        }
        .nav-search-input:focus {
          width: 200px;
          border-color: #0D6E38;
          box-shadow: 0 0 0 3px rgba(13,110,56,0.12);
        }

        .hamburger {
          display: none; background: none; border: none;
          color: #1A241A; cursor: pointer;
          padding: 6px; border-radius: 8px; transition: color 0.2s;
        }
        .hamburger:hover { color: #0D6E38; background: rgba(13,110,56,0.06); }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 10px; font-size: 15px; font-weight: 500;
          color: #1A241A; border-radius: 10px;
          text-decoration: none; cursor: pointer;
          background: none; border: none; width: 100%;
          transition: color 0.15s, background 0.15s;
        }
        .mob-link:hover { color: #0D6E38; background: rgba(13,110,56,0.05); }
        .mob-link.active { color: #0D6E38; font-weight: 700; background: rgba(13,110,56,0.09); }
        .mob-sub a {
          display: block; padding: 9px 10px 9px 26px; font-size: 14px;
          color: #4A5A4A; border-radius: 8px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .mob-sub a:hover { color: #0D6E38; background: rgba(13,110,56,0.08); }
        .mob-sub a.active { color: #0D6E38; background: rgba(13,110,56,0.09); font-weight: 600; }
        .mob-sub-sub a { padding-left: 42px !important; }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link-btn { padding: 5px 10px; font-size: 12.5px; }
          .nav-search-input { width: 120px; font-size: 12px; padding: 5px 8px 5px 28px; }
          .nav-search-input:focus { width: 160px; }
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
          background: isScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: "1px solid rgba(13,110,56,0.12)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="nav-glow" />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(14px, 4vw, 28px)",
            height: isScrolled ? "50px" : "58px",
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
            }}
          >
            <img
              src={kalbeLogo}
              alt="KALBE Healthcare"
              style={{
                height: "clamp(30px, 5vw, 36px)",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.06))",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
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
                  color: "#0D6E38",
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
                    color: "#4A5A4A",
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
                  border: "1px solid rgba(13,110,56,0.2)",
                  boxShadow: "0 18px 36px rgba(13,110,56,0.18)",
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
                        color: "#1A241A",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(13,110,56,0.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        style={{
                          width: 34,
                          height: 34,
                          objectFit: "contain",
                          background: "#F8FAF6",
                          borderRadius: 6,
                          padding: 2,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 13, color: "#1A241A" }}>
                          {prod.title}
                        </div>
                        <div style={{ fontSize: 11, color: "#0D6E38", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {prod.portfolioTitle} • {prod.genericName || prod.categoryTag}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "14px", textAlign: "center", color: "#4A5A4A", fontSize: 12 }}>
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
              borderTop: "1px solid rgba(13,110,56,0.2)",
              padding: "12px 16px 20px",
              animation: "slideDown 0.22s ease",
              overflow: "hidden",
              background: "#F8FAF6",
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
                  color: "#0D6E38",
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
                  border: "1px solid rgba(13,110,56,0.25)",
                  background: "#FFFFFF",
                  fontSize: 13,
                  color: "#1A241A",
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
                  border: "1px solid rgba(13,110,56,0.2)",
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
                        color: "#1A241A",
                        borderBottom: "1px solid rgba(13,110,56,0.06)",
                      }}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        style={{ width: 30, height: 30, objectFit: "contain" }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13 }}>{prod.title}</div>
                        <div style={{ fontSize: 11, color: "#0D6E38" }}>{prod.portfolioTitle}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div style={{ padding: "10px", textAlign: "center", fontSize: 12, color: "#4A5A4A" }}>
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
                                  {child.children.map((sub) => {
                                    const subId = sub.href.split("/").pop();
                                    const subTheme = PRODUCT_THEMES[subId] || {
                                      primary: "#0D6E38",
                                      light: "rgba(13,110,56,0.1)",
                                      fontFamily: "'Montserrat', sans-serif",
                                    };
                                    const isSubActive =
                                      location.pathname === sub.href ||
                                      location.pathname.startsWith(sub.href + "/");

                                    return (
                                      <Link
                                        key={sub.label}
                                        to={sub.href}
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                          padding: "9px 16px 9px 36px",
                                          textDecoration: "none",
                                          fontSize: 13.5,
                                          fontFamily: subTheme.fontFamily || "'Montserrat', sans-serif",
                                          fontWeight: 800,
                                          color: subTheme.primary,
                                          background: isSubActive ? subTheme.light : "transparent",
                                          borderLeft: isSubActive ? `3px solid ${subTheme.primary}` : "3px solid transparent",
                                          borderRadius: 8,
                                        }}
                                      >
                                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                          <span
                                            style={{
                                              width: 7,
                                              height: 7,
                                              borderRadius: "50%",
                                              background: subTheme.primary,
                                              display: "inline-block",
                                              flexShrink: 0,
                                            }}
                                          />
                                          {sub.label}
                                        </span>
                                        {isSubActive && (
                                          <span
                                            style={{
                                              fontSize: 9.5,
                                              fontWeight: 700,
                                              color: subTheme.primary,
                                              textTransform: "uppercase",
                                              background: "rgba(255,255,255,0.9)",
                                              padding: "2px 5px",
                                              borderRadius: 4,
                                            }}
                                          >
                                            Active
                                          </span>
                                        )}
                                      </Link>
                                    );
                                  })}
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
