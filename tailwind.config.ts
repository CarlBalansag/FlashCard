import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ["Agbalumo", "cursive"],
        acme: ["Acme", "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
    },
  },
  plugins: [flowbite],
};

export default config;
