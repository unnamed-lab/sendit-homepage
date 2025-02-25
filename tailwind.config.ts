/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        red: {
          "50": "#f5e7e7",
          "100": "#e4b5b5",
          "200": "#d79292",
          "300": "#c55050",
          "400": "#ba4141",
          "500": "#a91212",
          "600": "#9a1010",
          "700": "#7b0b0d",
          "800": "#5d0b0a",
          "900": "#470908",
        },
        blue: {
          "50": "#ecf0f3",
          "100": "#c5d5db",
          "200": "#a8baca",
          "300": "#828eb0",
          "400": "#46847a",
          "500": "#4469e5",
          "600": "#3e607e",
          "700": "#304b63",
          "800": "#253e4c",
          "900": "#1d2c3a",
        },
        grey: {
          "50": "#eeebef",
          "100": "#c9c8cc",
          "200": "#afafa4",
          "300": "#8b8b92",
          "400": "#75757d",
          "500": "#525255",
          "600": "#4b4b54",
          "700": "#3a3a41",
          "800": "#2d2d33",
          "900": "#222227",
        },
        green: {
          "50": "#e9ecec",
          "100": "#bac3c4",
          "200": "#99a6a7",
          "300": "#6b7c7f",
          "400": "#4e646b",
          "500": "#223d40",
          "600": "#1f383a",
          "700": "#182b2d",
          "800": "#122223",
          "900": "#0e1a1b",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ["var(--font-teachers)"],
      },
      fontSize: {
        "display-1": [
          "96px",
          {
            lineHeight: "112px",
            letterSpacing: "-1%",
          },
        ],
        "display-2": [
          "72px",
          {
            lineHeight: "80px",
            letterSpacing: "-1%",
          },
        ],
        "display-3": [
          "56px",
          {
            lineHeight: "61px",
            letterSpacing: "-1%",
          },
        ],
        "heading-1": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-2%",
          },
        ],
        "heading-2": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-2%",
          },
        ],
        "heading-3": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-1%",
          },
        ],
        "heading-4": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-1%",
          },
        ],
        "heading-5": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "-1%",
          },
        ],
        "heading-6": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-1%",
          },
        ],
        "body-large": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0%",
          },
        ],
        "body-regular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0%",
          },
        ],
        "body-small": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0%",
          },
        ],
        "body-xsmall": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0%",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "sendit-banner": "url('/sendit-banner.png')",
      },
      keyframes: {
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
        "aurora-border": {
          "0%, 100%": {
            borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%",
          },
          "25%": {
            borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%",
          },
          "50%": {
            borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%",
          },
          "75%": {
            borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%",
          },
        },
        "aurora-1": {
          "0%, 100%": {
            top: "0",
            right: "0",
          },
          "50%": {
            top: "50%",
            right: "25%",
          },
          "75%": {
            top: "25%",
            right: "50%",
          },
        },
        "aurora-2": {
          "0%, 100%": {
            top: "0",
            left: "0",
          },
          "60%": {
            top: "75%",
            left: "25%",
          },
          "85%": {
            top: "50%",
            left: "50%",
          },
        },
        "aurora-3": {
          "0%, 100%": {
            bottom: "0",
            left: "0",
          },
          "40%": {
            bottom: "50%",
            left: "25%",
          },
          "65%": {
            bottom: "25%",
            left: "50%",
          },
        },
        "aurora-4": {
          "0%, 100%": {
            bottom: "0",
            right: "0",
          },
          "50%": {
            bottom: "25%",
            right: "40%",
          },
          "90%": {
            bottom: "50%",
            right: "25%",
          },
        },
        rainbow: {
          "0%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "200%",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
