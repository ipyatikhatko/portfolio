import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          t: '#75d0e2',
          b: '#ca57df',          
          dark: {
            t: '#1f3438',
            b: '#3e2342'
          }
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config