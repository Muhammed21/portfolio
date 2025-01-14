import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      white: "#ffffff",
      black: {
        "100": "#000000",
        "12": "rgba(0, 0, 0,0.12)",
      },
      bgColors: "#99A3BF",
      darkBgColors: "#F9EDDE",
      primaryColors: {
        "100": "rgba(235, 240, 255,1)",
        "80": "rgba(235, 240, 255,0.8)",
        "60": "rgba(235, 240, 255,0.6)",
        "50": "rgba(235, 240, 255,0.5)",
        "20": "rgba(235, 240, 255,0.2)",
      },
      darkPrimaryColors: {
        "100": "rgba(142, 153, 63,1)",
        "80": "rgba(142, 153, 63,0.8)",
        "60": "rgba(142, 153, 63,0.6)",
        "50": "rgba(142, 153, 63,0.5)",
        "20": "rgba(142, 153, 63,0.2)",
      },
      secondaryTheme: "#F9EDDE",
      bgKbd: "#EBF0FF",
    },
    fontSize: {
      h1: [
        "clamp(40px, 7.813vw, 150px)",
        {
          lineHeight: "clamp(40px, 7.813vw, 150px)",
          letterSpacing: "0%",
        },
      ],
      h2: [
        "clamp(15px, 1.042vw, 20px)",
        {
          lineHeight: "clamp(15px, 1.042vw, 20px)",
          letterSpacing: "0%",
        },
      ],
      h3: [
        "clamp(14px, 0.833vw, 16px)",
        {
          lineHeight: "16px",
          letterSpacing: "0%",
        },
      ],
      h4: [
        "clamp(13px, 0.781vw, 15px)",
        {
          lineHeight: "clamp(13px, 0.781vw, 15px)",
          letterSpacing: "0px",
        },
      ],
      h5: [
        "12px",
        {
          lineHeight: "12px",
          letterSpacing: "0px",
        },
      ],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
