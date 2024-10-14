import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  safelist: ["dark"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fafafa",
        black: "#0a0a0a",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          "50": "#f1f9fa",
          "100": "#daeef3",
          "200": "#badce7",
          "300": "#8ac3d6",
          "400": "#53a2bd",
          "500": "#3886a3",
          "600": "#316d89",
          "700": "#2d5971",
          "800": "#2c4c5e",
          "900": "#294150",
          "950": "#162936",
          "960": "#111f29",
          "970": "#0e1922",
          "980": "#0b141c",
          "990": "#05090d",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        "2xl": "2rem",
        xl: "1.15rem",
        lg: "1rem",
        md: "0.5rem",
        DEFAULT: "0.25rem",
        sm: "0.125rem",
      },
      keyframes: {
        "spotlight-left": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0.6",
          },
        },
        "spotlight-right": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "spotlight-left": "spotlight-left 1s ease-out 1.75s forwards",
        "spotlight-right": "spotlight-right 1s ease-out 2.25s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
