import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src", // Adicione um alias para o diretório src
    },
  },
  server: {
    open: true,
    port: 5173,
  },
});
