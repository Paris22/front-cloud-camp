import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@Pages": path.resolve(__dirname, "./src/app/Pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@store": path.resolve(__dirname, "./src/store")
    }
  },
  plugins: [react()]
})
