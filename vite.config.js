import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "./",
  server: {
    host: true,
    // port: "8080",
    // hot: true,
    proxy: {
      "/graphql": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  // build: {
  //   outDir: "dist",
  //   assetsDir: "static",
  //   rollupOptions: {
  //     input: "index.html",
  //   },
  // },
});
