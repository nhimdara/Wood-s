// App.jsx - MODIFIED (BrowserRouter removed)
import React from "react";
import { Routes, Route } from "react-router-dom"; // ← Remove BrowserRouter
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      {" "}
      {/* ← No BrowserRouter wrapper */}
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
