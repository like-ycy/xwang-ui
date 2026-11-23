import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const root = path.dirname(fileURLToPath(import.meta.url))

// 预览站单独一份配置：root 指向 dev/，不干扰库的 build（vite.config.ts 只负责产物）。
export default defineConfig({
  root: path.resolve(root, "dev"),
  plugins: [react(), tailwindcss()],
  server: {
    port: 5183,
    open: false,
  },
})
