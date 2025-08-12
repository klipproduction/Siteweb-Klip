import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The component tagger was used by Lovable to inject metadata into
// components during development. It has been removed to eliminate
// Lovable dependencies.


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    // React plugin for Vite
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
