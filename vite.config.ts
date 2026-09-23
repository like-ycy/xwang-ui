import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "xwang-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", /^react\//, /^@radix-ui\//, "lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
      output: {
        assetFileNames: (asset) => asset.name?.endsWith(".css") ? "styles.css" : "assets/[name][extname]",
      },
    },
  },
})
