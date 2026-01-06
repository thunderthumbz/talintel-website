import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",           // <- important, points Vite to your client folder
  base: "/",                // <- ensures assets work on GitHub Pages
  plugins: [react()],
  publicDir: "public",      // <- points to client/public
  build: {
    outDir: "../dist",      // <- builds to root/dist folder
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src") // optional, for easier imports
    }
  }
});
