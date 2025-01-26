import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),
            tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        popup: './public/popup.html',
        content: '/src/contentScript.jsx',
        background: './src/background.js'
      },
      output: {
        entryFileNames: '[name].js', // Prevent hashed filenames
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    outDir: "dist", // output folder
    emptyOutDir: false, // to avoid wiping out once we build multiple times
  }
});
