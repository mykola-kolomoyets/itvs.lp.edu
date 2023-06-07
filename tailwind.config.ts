import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        inherit: "inherit",
        current: "currentColor",
        light: "rgb(255, 255, 255)",
        dark: "rgb(21, 20, 20)",
        yellow: {
          300: "rgb(244, 177, 16)",
          500: "rgb(211, 118, 19)",
        },
        blue: {
          500: "rgb(37, 39, 117)",
        },
        grey: {
          50: "rgb(245, 245, 247)",
          100: "rgb(235, 236, 236)",
          300: "rgb(139, 136, 136)",
          500: "rgb(50, 50, 51)",
        },
        brown: {
          400: "rgb(198, 94, 79)",
        },
        red: {
          400: "rgb(255, 0, 0)",
        },
        green: {
          400: "rgb(86, 135, 48)",
        },
      },
      spacing: {
        0: "0px",
        2: "0.125rem",
        4: "0.25rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        36: "2.25rem",
      },
      boxShadow: {
        "light-cta": "0px 8px 20px rgba(249, 148, 40, 0.4);",
        dark: "0px 8px 40px rgba(187, 194, 197, 0.1)",
      },
      borderRadius: {
        none: "0px",
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.6875rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "1.5rem",
        "3xl": "2.25rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
        black: "800",
      },
      gridTemplateColumns: {
        s: "repeat(auto-fill, minmax(16rem, 1fr))",
        m: "repeat(auto-fill, minmax(20rem, 1fr))",
      },
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "100",
            transform: "translateY(0px)",
          },
        },
        slideUpLeave: {
          "0%": {
            opacity: "100",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
        },
        skeleton: {
          "0%": {
            backgroundColor: "hsl(200, 20%, 70%)",
          },
          "100%": {
            backgroundColor: "hsl(200, 20%, 95%)",
          },
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
        slideUpLeave: "slideUpLeave .3s ease-in-out",
        skeleton: "skeleton 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
