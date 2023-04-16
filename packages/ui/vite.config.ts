import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      emitCssInSsr: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: "index.ts",
      output: [
        {
          format: "cjs",
          entryFileNames: "index.js",
        },
        {
          format: "esm",
          entryFileNames: "index.mjs",
        },
      ],
    },
    outDir: path.resolve(__dirname, "./dist"),
  },
});
