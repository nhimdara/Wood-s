import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext({
  mode: "system", // "system" | "dark" | "light"
  theme: "light", // effective active theme: "dark" | "light"
  isDark: false,
  isAuto: true,
  systemTheme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
  setMode: () => {},
  resetToDevice: () => {},
});

const STORAGE_KEY = "kalbe-theme";

const getSystemTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

export const ThemeProvider = ({ children }) => {
  // Mode can be: "system" (follow device), "dark", or "light"
  const [mode, setModeState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "system" || saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (e) {}
    return "system"; // Default is automatic device detection
  });

  // Track the actual device OS theme in real-time
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  // Computed effective theme and flags
  const effectiveTheme = mode === "system" ? systemTheme : mode;
  const isDark = effectiveTheme === "dark";
  const isAuto = mode === "system";

  // Real-time listener for device OS dark/light mode changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Initial check
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleDeviceThemeChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleDeviceThemeChange);
      return () => mediaQuery.removeEventListener("change", handleDeviceThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleDeviceThemeChange);
      return () => mediaQuery.removeListener(handleDeviceThemeChange);
    }
  }, []);

  // Apply effective theme to document root without DOM tree mutation
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", effectiveTheme);
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      // Ignore storage errors in private browsing
    }

    // Safely update theme-color meta for device status bars
    const metaThemeColor =
      document.getElementById("app-theme-color") ||
      document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", isDark ? "#0B130E" : "#F8FAF6");
    }
  }, [effectiveTheme, isDark, mode]);

  // Set explicit mode: "system" | "dark" | "light"
  const setMode = useCallback((newMode) => {
    if (newMode === "system" || newMode === "dark" || newMode === "light") {
      setModeState(newMode);
    }
  }, []);

  // Backwards-compatible setTheme
  const setTheme = useCallback((newTheme) => {
    setMode(newTheme);
  }, [setMode]);

  // Reset immediately back to following device
  const resetToDevice = useCallback(() => {
    setModeState("system");
  }, []);

  // Toggle/cycle through: Auto (Device) -> Dark -> Light -> Auto (Device)
  const toggleTheme = useCallback((e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    setModeState((prev) => {
      if (prev === "system") {
        // If currently following device, switch to opposite of current active look
        return isDark ? "light" : "dark";
      } else if (prev === "dark") {
        return "light";
      } else {
        // Return back to auto device catch
        return "system";
      }
    });
  }, [isDark]);

  const contextValue = useMemo(
    () => ({
      mode,
      theme: effectiveTheme,
      isDark,
      isAuto,
      systemTheme,
      toggleTheme,
      setTheme,
      setMode,
      resetToDevice,
    }),
    [mode, effectiveTheme, isDark, isAuto, systemTheme, toggleTheme, setTheme, setMode, resetToDevice]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
