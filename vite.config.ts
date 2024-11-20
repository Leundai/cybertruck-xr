import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssl()],
  resolve: {
    dedupe: ["@react-three/fiber", "three"],
  },
});
