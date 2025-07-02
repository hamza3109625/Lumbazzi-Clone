import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        base: "var(--font-base)",
        elegant: "var(--font-elegant)",
        playfair: "var(--font-playfair)",
      },
    },
  },
  plugins: [],
};

export default config;
