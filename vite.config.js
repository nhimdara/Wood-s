// vite.config.js - Optimized build and vendor splitting
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) {
              return "vendor-router";
            }
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
            if (id.includes("@capacitor")) {
              return "vendor-capacitor";
            }
            if (id.includes("/react/") || id.includes("/react-dom/") || id.includes("scheduler")) {
              return "vendor-react";
            }
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
