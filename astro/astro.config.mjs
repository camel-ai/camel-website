import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",
  site: "https://www.camel-ai.org",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@utils": path.join(__dirname, "src/utils"),
        "@components": path.join(__dirname, "src/components"),
        "@layouts": path.join(__dirname, "src/layouts"),
        "@styles": path.join(__dirname, "src/styles"),
      },
    },
  },
});
