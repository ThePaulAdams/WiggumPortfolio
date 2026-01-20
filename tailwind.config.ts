import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // slate-900
        secondary: "#64748b", // slate-500
        accent: "#3b82f6", // blue-500
      },
    },
  },
  plugins: [],
};
export default config;
