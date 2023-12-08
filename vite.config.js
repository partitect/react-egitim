import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSass()],
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 5173,
  },
});
