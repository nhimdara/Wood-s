// vite.config.js - Fixed version
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Fix: manualChunks must be a function, not an object
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "vendor-react";
            }
            if (id.includes("react-router")) {
              return "vendor-router";
            }
            if (id.includes("react-icons")) {
              return "vendor-icons";
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
