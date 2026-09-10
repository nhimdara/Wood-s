import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { App as CapApp } from "@capacitor/app";
import SplashScreen from "./components/layout/ui/SplashScreen";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";

const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
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
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "3px solid rgba(13, 110, 56, 0.15)",
        borderTopColor: "#0D6E38",
        animation: "spin 0.7s linear infinite",
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
        // If on sub-product detail page: /product/:id/:subId -> go to /product/:id
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
          // If on category or other page -> go to Home page
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
    </>
  );
};

export default App;
