// Usage (run from the project root):
//   node scripts/make-gallery-data.mjs "Works-On-Paper" worksOnPaper
// Reads public/Imgs/<folder> and writes src/data/<exportName>.js
import fs from "node:fs";
import path from "node:path";

const [folder, exportName] = process.argv.slice(2);
if (!folder || !exportName) {
  console.error('Usage: node scripts/make-gallery-data.mjs "<folder inside public/Imgs>" <exportName>');
  process.exit(1);
}

const dir = path.resolve("public/Imgs", folder);
if (!fs.existsSync(dir)) {
  console.error(`Folder not found: ${dir}`);
  process.exit(1);
}

const ok = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const all = fs.readdirSync(dir).filter((f) => !f.startsWith("."));
const files = all
  .filter((f) => ok.has(path.extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const skipped = all.filter((f) => !ok.has(path.extname(f).toLowerCase()));
if (skipped.length) {
  console.warn("Skipped (browsers can't show these, convert to jpg/webp):", skipped.join(", "));
}

const lines = files.map(
  (f) => `  { src: ${JSON.stringify(`/Imgs/${folder}/${f}`)}, alt: "" },`
);
const out = `export const ${exportName} = [\n${lines.join("\n")}\n];\n`;

const target = path.resolve("src/data", `${exportName}.js`);
fs.writeFileSync(target, out);
console.log(`Wrote ${files.length} images to src/data/${exportName}.js`);