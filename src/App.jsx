import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { App as CapApp } from "@capacitor/app";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/product/:id/:subId" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category/:category" element={<Product />} />
      <Route path="/category/:category/:subcategory" element={<Product />} />
    </Routes>
  );
};

export default App;
