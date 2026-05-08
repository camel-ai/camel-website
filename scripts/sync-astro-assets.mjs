import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "astro", "dist", "_astro");
const destination = path.join(root, "public", "_astro");

await fs.rm(destination, { force: true, recursive: true });

try {
  await fs.cp(source, destination, { recursive: true });
} catch (error) {
  if (error?.code !== "ENOENT") {
    throw error;
  }
}
