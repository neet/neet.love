import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
      fontFamily: {
        sans: ["var(--font-roboto)"],
        serif: ["var(--font-yeseva-one)"],
      },
    },
  },
  plugins: [
    require("tailwindcss-hero-patterns"),
    require("@tailwindcss/typography"),
  ],
};
export default config;