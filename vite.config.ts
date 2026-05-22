import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, "index.html"),
        cardsearch: resolve(__dirname, "cardsearch.html"),
        vocablist:  resolve(__dirname, "vocablist.html"),
        study:      resolve(__dirname, "study.html"),
        favorites:  resolve(__dirname, "favorites.html"),
      },
    },
  },
});
