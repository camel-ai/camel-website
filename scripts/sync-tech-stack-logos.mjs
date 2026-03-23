/**
 * Sets logo: true only when public/tech-stack-logos/<category>/<id>.svg exists.
 * Run after adding/removing SVGs: node scripts/sync-tech-stack-logos.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "../public/tech-stack-logos");
const CONTENT = path.join(__dirname, "../src/components/techstack/content");

const FILE_TO_FOLDER = [
  ["models/index.json", "models"],
  ["storage/index.json", "storage"],
  ["data-loaders/index.json", "data-loaders"],
  ["interpreters/index.json", "interpreters"],
  ["runtime/index.json", "run-time"],
  ["retrievers/index.json", "retrievers"],
  ["mcp/index.json", "mcp"],
  ["human-in-the-loop/index.json", "human-in-the-loop"],
  ["observe/index.json", "observe"],
];

for (const [rel, folder] of FILE_TO_FOLDER) {
  const jpath = path.join(CONTENT, rel);
  const dir = path.join(ROOT, folder);
  if (!fs.existsSync(jpath)) continue;

  const j = JSON.parse(fs.readFileSync(jpath, "utf8"));
  let changed = false;

  for (const item of j.items || []) {
    if (!item.logo) continue;
    const svgPath = path.join(dir, `${item.id}.svg`);
    const exists = fs.existsSync(svgPath);
    if (!exists) {
      delete item.logo;
      delete item.showText;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(jpath, JSON.stringify(j, null, 2) + "\n");
    console.log("updated", rel);
  }
}
