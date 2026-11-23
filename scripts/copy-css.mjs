// tokens.css 与 base.css 是纯 CSS（不含 Tailwind 指令），直接原样产到 dist，
// 供非 Tailwind 的消费方（如手写 CSS 的 Wails 应用）单独引入。
import { copyFile, mkdir } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outDir = join(root, "dist")
const files = ["tokens.css", "base.css"]

await mkdir(outDir, { recursive: true })
for (const file of files) {
  await copyFile(join(root, "src", file), join(outDir, file))
  process.stdout.write(`copied src/${file} -> dist/${file}\n`)
}
