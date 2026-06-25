import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.PUBLIC_SITE_URL || "https://genius.finance";

export default defineConfig({
  site,
  integrations: [tailwind()],
  output: "static",
});
