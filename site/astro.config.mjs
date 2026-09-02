import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL || "https://genius.finance";

export default defineConfig({
  site,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
