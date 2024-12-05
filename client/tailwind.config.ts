import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ['var(--font-armata-sans)', 'sans-serif'],
      serif: ['var(--font-mirza-serif)', 'serif'],
      mono: ['var(--font-vt323-mono)', 'monospace'],
      title: ['var(--font-jacquard24-system-ui)', 'serif'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flash": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.2",
          },
        },
        "switch": {
          "5%, 28%": {
            opacity: "1",
          },
          "0%, 33%, 100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flash": "flash 1s infinite",
        "switch": "switch 15s infinite",
        "bounce": "bounce 1s infinite",
      },
      borderWidth: {
        '5': '5px',
        '6': '6px',
      },
      colors: {
        'background-1': '#483B3C',
        'background-2': '#1D151E',
        'footer': '#2A1F29',
        'text-1': '#F5F0E1',
        'text-2': '#BFACB5',
        'text-3': '#DEC4C8',
        'text-4': '#1D151E',
        'text-5': '#9BC7C9',
        'accent-1': '#C05746',
        'accent-2': '#19535F',
        'highlight': '#F3A712',
        'support': '#B86F52',
        'link': '#5ABAB5',
        'input-fill-1': '#F5F0E1',
        'input-fill-2': '#D8CFC4',
        'button-fill-1': '#4B8F8C',
        'button-fill-2': '#648561',
        'button-fill-3': '#B14E3D',
      },
      backgroundImage: {
        tavern: "url('/tavern.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
