/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        hub: {
          DEFAULT: "#0a0e17",
          card: "#121a2b",
          border: "#243049",
          muted: "#8b9cb8",
        },
        genius: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          emerald: "#34d399",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
