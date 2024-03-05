import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "../docs");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        burger: resolve(__dirname, "burger.html"),
        library: resolve(__dirname, "library.html"),
        review: resolve(__dirname, "review.html"),
        data: resolve(__dirname, "data.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./source", import.meta.url)),
    },
  },
});
