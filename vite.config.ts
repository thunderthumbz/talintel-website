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
    emptyOutDir: true,
    // Optimize for caching with content hashing
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'ui': ['@hookform/resolvers', 'react-hook-form', 'zod']
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // CSS code splitting for better caching
    cssCodeSplit: true,
    // Source maps for production debugging
    sourcemap: false,
    // Minify bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src") // optional, for easier imports
    }
  }
});

