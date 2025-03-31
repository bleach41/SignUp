import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        "border-secondary": "hsl(var(--border-secondary))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
        foreground: "hsl(var(--foreground))",
        buttonBackground: "hsl(var(--button-background))",
        // Componentes específicos
        navbar: {
          background: "hsl(var(--navbar-background))",
          "background-secondary": "hsl(var(--navbar-background-secondary))",
          foreground: "hsl(var(--navbar-foreground))",
          shadow: "hsl(var(--navbar-shadow))",
        },
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          "background-secondary": "hsl(var(--sidebar-background-secondary))",
          foreground: "hsl(var(--sidebar-foreground))",
          shadow: "hsl(var(--sidebar-shadow))",
          hover: "hsl(var(--sidebar-hover-background))",
          active: "hsl(var(--sidebar-active-background))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",

        // Variables para temas de autenticación (login/signup)
        auth: {
          border: "hsl(var(--auth-border))",
          input: "hsl(var(--auth-input))",
          ring: "hsl(var(--auth-ring))",
          background: "hsl(var(--auth-background))",
          foreground: "hsl(var(--auth-foreground))",
          primary: {
            DEFAULT: "hsl(var(--auth-primary))",
            foreground: "hsl(var(--auth-primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--auth-secondary))",
            foreground: "hsl(var(--auth-secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--auth-destructive))",
            foreground: "hsl(var(--auth-destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--auth-muted))",
            foreground: "hsl(var(--auth-muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--auth-accent))",
            foreground: "hsl(var(--auth-accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--auth-popover))",
            foreground: "hsl(var(--auth-popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--auth-card))",
            foreground: "hsl(var(--auth-card-foreground))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;
