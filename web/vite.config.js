import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import * as path from "path";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      target: ["es2015"],
    },
    plugins: [react(), eslint(), svgr()],
    resolve: {
      alias: {
        // Map the '@' alias to the absolute path of the 'src' directory
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
