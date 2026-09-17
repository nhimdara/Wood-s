import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { App as CapApp } from "@capacitor/app";
import SplashScreen from "./components/layout/ui/SplashScreen";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
      }}
    >
      <HiOutlineChevronUp />
    </button>
  );
};

const PageLoader = () => (
  <div
    style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
    }}
  >
    <div className="page-loading-bar" />
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: "3px solid rgba(13, 110, 56, 0.15)",
        borderTopColor: "#0D6E38",
        animation: "spin 0.6s linear infinite",
      }}
    />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const backListenerPromise = CapApp.addListener("backButton", () => {
      const pathname = location.pathname;
      if (pathname === "/") {
        CapApp.exitApp();
      } else {
        const subProductMatch = pathname.match(/^\/product\/([^/]+)\/([^/]+)$/);
        const catSubMatch = pathname.match(/^\/category\/([^/]+)\/([^/]+)$/);

        if (subProductMatch) {
          navigate(`/product/${subProductMatch[1]}`);
        } else if (catSubMatch) {
          navigate(`/category/${catSubMatch[1]}`);
        } else if (
          pathname.startsWith("/product/") ||
          pathname.startsWith("/category/") ||
          pathname === "/about" ||
          pathname === "/contact"
        ) {
          navigate("/");
        } else {
          navigate(-1);
        }
      }
    });

    return () => {
      backListenerPromise.then((handle) => handle.remove()).catch(() => {});
    };
  }, [location.pathname, navigate]);

  return (
    <>
<<<<<<< HEAD
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/:id/:subId" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<Product />} />
          <Route path="/category/:category/:subcategory" element={<Product />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Suspense>
      <BackToTopButton />
=======
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/:id/:subId" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<Product />} />
        <Route path="/category/:category/:subcategory" element={<Product />} />
      </Routes>
>>>>>>> origin/feat/dark_mode
    </>
  );
};

export default App;

