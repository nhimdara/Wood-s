// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import translations from "../locales/translations";

const STORAGE_KEY = "kalbe-language";

const LanguageContext = createContext({
  language: "en",
  isKhmer: false,
  isEnglish: true,
  t: translations.en,
  translate: (path, fallback) => fallback || path,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "km") {
        return saved;
      }
    } catch (e) {
      // LocalStorage access failure fallback
    }
    return "km"; // Default initial language matches original site
  });

  // Keep <html> lang attribute updated and apply language class
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", language);
    if (language === "km") {
      root.classList.add("lang-km");
      root.classList.remove("lang-en");
    } else {
      root.classList.add("lang-en");
      root.classList.remove("lang-km");
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (e) {
      // Ignore private browsing storage error
    }
  }, [language]);

  const setLanguage = useCallback((newLang) => {
    if (newLang === "en" || newLang === "km") {
      setLanguageState(newLang);
    }
  }, []);

  const toggleLanguage = useCallback((e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    setLanguageState((prev) => (prev === "km" ? "en" : "km"));
  }, []);

  const isKhmer = language === "km";
  const isEnglish = language === "en";

  // Nested translation helper: translate("nav.home")
  const translate = useCallback(
    (path, fallback = "") => {
      if (!path) return fallback;
      const dict = translations[language] || translations.en;
      const keys = path.split(".");
      let cur = dict;
      for (const k of keys) {
        if (cur && typeof cur === "object" && k in cur) {
          cur = cur[k];
        } else {
          return fallback || path;
        }
      }
      return typeof cur === "string" ? cur : fallback || path;
    },
    [language]
  );

  const activeTranslations = useMemo(() => {
    return translations[language] || translations.en;
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      isKhmer,
      isEnglish,
      t: activeTranslations,
      translate,
      setLanguage,
      toggleLanguage,
    }),
    [language, isKhmer, isEnglish, activeTranslations, translate, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
