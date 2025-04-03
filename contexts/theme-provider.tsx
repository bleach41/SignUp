// contexts/theme-provider.tsx
"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import {
  type DynamicTheme,
  themeService,
  applyDynamicTheme,
} from "@/lib/theme-service";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  dynamicTheme: DynamicTheme | null;
  loadDynamicTheme: (clientId: string) => Promise<void>;
  availableThemes: string[];
  isDynamicTheme: boolean;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "lucky-wolf",
  setTheme: () => {},
  dynamicTheme: null,
  loadDynamicTheme: async () => {},
  availableThemes: [],
  isDynamicTheme: false,
});

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "lucky-wolf",
  enableSystem = false,
  storageKey = "casino-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }
    try {
      const storedTheme =
        window.localStorage.getItem(storageKey) || defaultTheme;
      return storedTheme;
    } catch (e) {
      return defaultTheme;
    }
  });

  const [dynamicTheme, setDynamicTheme] = useState<DynamicTheme | null>(null);
  const [isDynamicTheme, setIsDynamicTheme] = useState(false);

  // Lista de temas disponibles (predefinidos + dinámicos)
  const availableThemes = [...(dynamicTheme ? [dynamicTheme.id] : [])];

  // Función para cargar un tema dinámico desde el "backend"
  const loadDynamicTheme = async (clientId: string) => {
    try {
      const theme = await themeService.getThemeForClient(clientId);
      setDynamicTheme(theme);
      setIsDynamicTheme(true);
      setTheme("dynamic-theme"); // Usamos "dynamic-theme" como identificador

      // Guardar en localStorage que estamos usando un tema dinámico
      localStorage.setItem(`${storageKey}-dynamic`, "true");
      localStorage.setItem(`${storageKey}-client`, clientId);
      localStorage.setItem(storageKey, "dynamic-theme");
    } catch (error) {
      console.error("Error loading dynamic theme:", error);
      setIsDynamicTheme(false);
      setTheme(defaultTheme);
    }
  };

  // Efecto para cargar el tema dinámico si estaba activo anteriormente
  useEffect(() => {
    if (typeof window === "undefined") return;

    const wasDynamicTheme =
      localStorage.getItem(`${storageKey}-dynamic`) === "true";
    const clientId = localStorage.getItem(`${storageKey}-client`);

    if (wasDynamicTheme && clientId) {
      loadDynamicTheme(clientId);
    }
  }, []);

  // Efecto para aplicar el tema (predefinido o dinámico)
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // Catch possible errors with localStorage
    }

    const root = window.document.documentElement;

    // Eliminar todas las clases de tema anteriores
    const previousThemes = [
      "lucky-wolf",
      "red-casino",
      "green-fortune",
      "purple-royale",
      "gold-rush",
      "dynamic-theme",
    ];
    previousThemes.forEach((t) => {
      if (root.classList.contains(t)) {
        root.classList.remove(t);
      }
    });

    // Si estamos usando un tema dinámico
    if (isDynamicTheme && dynamicTheme) {
      // Aplicar el tema dinámico
      applyDynamicTheme(dynamicTheme);

      // Establecer el atributo para compatibilidad
      root.setAttribute(attribute, "dynamic-theme");

      // Añadir una clase para indicar que estamos usando un tema dinámico
      root.classList.add("dynamic-theme");

      // Forzar un reflow para asegurarnos de que los estilos se apliquen
      void root.offsetHeight;
    } else {
      // Eliminar la clase de tema dinámico si existe
      if (root.classList.contains("dynamic-theme")) {
        root.classList.remove("dynamic-theme");
      }

      // Añadir la clase del tema actual
      root.classList.add(theme);

      // También establecemos el atributo para compatibilidad
      root.setAttribute(attribute, theme);

      // Marcar que no estamos usando un tema dinámico
      localStorage.removeItem(`${storageKey}-dynamic`);
      localStorage.removeItem(`${storageKey}-client`);
      setIsDynamicTheme(false);

      // Forzar un reflow para asegurarnos de que los estilos se apliquen
      void root.offsetHeight;
    }
  }, [theme, dynamicTheme, isDynamicTheme, attribute, storageKey]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        dynamicTheme,
        loadDynamicTheme,
        availableThemes,
        isDynamicTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
