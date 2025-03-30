// Definición de tipos para temas dinámicos
export type DynamicThemeColors = {
  // Colores base
  background: string;
  backgroundSecondary: string;
  foreground: string;

  // Componentes específicos
  navbar: {
    background: string;
    backgroundSecondary: string;
    foreground: string;
    shadow: string;
  };
  sidebar: {
    background: string;
    foreground: string;
    shadow: string;
    hoverBackground: string;
    activeBackground: string;
  };

  // Colores de acento
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  borderSecondary: string;

  // Colores de estado
  success: string;
  warning: string;
  error: string;
};

export type DynamicTheme = {
  id: string;
  name: string;
  colors: DynamicThemeColors;
  borderRadius?: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  fontSizes?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
};

// Temas mock que simularían la respuesta del backend
export const mockThemes: Record<string, DynamicTheme> = {
  "client-1": {
    id: "client-1",
    name: "Ocean Blue",
    colors: {
      // Colores base
      background: "210 50% 25%",
      backgroundSecondary: "240 14.29% 11.37%",
      foreground: "0 0% 98%",

      // Componentes específicos
      navbar: {
        background: "linear-gradient(152deg, #21242D 17.38%, #1C1F28 82.62%)",
        backgroundSecondary:
          "linear-gradient(180deg, #343A47 0%, #2C3140 100%)",
        foreground: "0 0% 98%",
        shadow: "0px 4px 48px 0px rgba(39, 42, 52, 0.24) inset",
      },
      sidebar: {
        background: "linear-gradient(180deg, #171A23 0%, #181B24 100%)",
        foreground: "0 0% 98%",
        shadow: "0px 0px 12px rgba(16, 19, 26, 0.32)",
        hoverBackground: "210 50% 25%",
        activeBackground: "210 50% 25%",
      },

      // Colores de acento
      primary: "195 85% 55%",
      primaryForeground: "0 0% 10%",
      secondary: "210 40% 25%",
      secondaryForeground: "0 0% 98%",
      muted: "210 30% 25%",
      mutedForeground: "210 20% 70%",
      border: "210 15.38% 20.76%",
      borderSecondary: "210 12.77% 34.31%",
      // Colores de estado
      success: "142 76% 36%",
      warning: "38 92% 50%",
      error: "0 84% 60%",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      full: "9999px",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
  "client-2": {
    id: "client-2",
    name: "Sunset Orange",
    colors: {
      // Colores base
      background: "20 50% 10%",
      backgroundSecondary: "20 40% 15%",
      foreground: "0 0% 98%",

      // Componentes específicos
      navbar: {
        background:
          "linear-gradient(152deg, hsl(20 60% 20%) 17.38%, hsl(20 60% 15%) 82.62%)",
        backgroundSecondary: "20 40% 15%",
        foreground: "0 0% 98%",
        shadow: "3px 3px 10px 10px hsl(0, 100%, 10.37%)",
      },
      sidebar: {
        background:
          "linear-gradient(180deg, hsl(20 60% 25%) 0%, hsl(20 60% 15%) 100%)",
        foreground: "0 0% 98%",
        shadow: "0px 4px 48px 0px rgba(39, 42, 52, 0.24) inset",
        hoverBackground: "20 50% 25%",
        activeBackground: "20 50% 25%",
      },

      // Colores de acento
      primary: "30 90% 55%",
      primaryForeground: "0 0% 10%",
      secondary: "20 40% 25%",
      secondaryForeground: "0 0% 98%",
      muted: "20 30% 25%",
      mutedForeground: "20 20% 70%",
      border: "120 85.71% 47.06%",
      borderSecondary: "#3F4655",

      // Colores de estado
      success: "142 76% 36%",
      warning: "38 92% 50%",
      error: "0 84% 60%",
    },
    borderRadius: {
      sm: "0.125rem",
      md: "0.25rem",
      lg: "0.5rem",
      full: "9999px",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
};

// Servicio mock para obtener temas
export const themeService = {
  // Simula obtener el tema para un cliente específico
  async getThemeForClient(clientId: string): Promise<DynamicTheme> {
    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Verificamos si existe el tema para el cliente
    if (mockThemes[clientId]) {
      return mockThemes[clientId];
    }

    // Si no existe, devolvemos un tema por defecto
    return mockThemes["client-1"];
  },

  // Simula obtener todos los temas disponibles
  async getAllThemes(): Promise<DynamicTheme[]> {
    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 300));

    return Object.values(mockThemes);
  },

  // Simula guardar un tema personalizado
  async saveTheme(theme: DynamicTheme): Promise<boolean> {
    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    // En un caso real, aquí enviaríamos el tema al backend
    console.log("Tema guardado:", theme);

    return true;
  },
};

// Función para aplicar un tema dinámico al DOM
export function applyDynamicTheme(theme: DynamicTheme): void {
  const root = document.documentElement;

  // Aplicar colores base
  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty(
    "--background-secondary",
    theme.colors.backgroundSecondary
  );
  root.style.setProperty("--foreground", theme.colors.foreground);

  // Aplicar colores de componentes específicos
  root.style.setProperty("--navbar-background", theme.colors.navbar.background);
  root.style.setProperty(
    "--navbar-background-secondary",
    theme.colors.navbar.backgroundSecondary
  );
  root.style.setProperty("--navbar-foreground", theme.colors.navbar.foreground);
  root.style.setProperty("--navbar-shadow", theme.colors.navbar.shadow);

  root.style.setProperty(
    "--sidebar-background",
    theme.colors.sidebar.background
  );
  root.style.setProperty(
    "--sidebar-foreground",
    theme.colors.sidebar.foreground
  );
  root.style.setProperty("--sidebar-shadow", theme.colors.sidebar.shadow);
  root.style.setProperty(
    "--sidebar-hover-background",
    theme.colors.sidebar.hoverBackground
  );
  root.style.setProperty(
    "--sidebar-active-background",
    theme.colors.sidebar.activeBackground
  );

  // Aplicar colores de acento
  root.style.setProperty("--primary", theme.colors.primary);
  root.style.setProperty(
    "--primary-foreground",
    theme.colors.primaryForeground
  );
  root.style.setProperty("--secondary", theme.colors.secondary);
  root.style.setProperty(
    "--secondary-foreground",
    theme.colors.secondaryForeground
  );
  root.style.setProperty("--muted", theme.colors.muted);
  root.style.setProperty("--muted-foreground", theme.colors.mutedForeground);
  root.style.setProperty("--border", theme.colors.border);
  root.style.setProperty("--border-secondary", theme.colors.borderSecondary);

  // Aplicar colores de estado
  root.style.setProperty("--success", theme.colors.success);
  root.style.setProperty("--warning", theme.colors.warning);
  root.style.setProperty("--destructive", theme.colors.error);

  // Otros colores
  root.style.setProperty("--card", theme.colors.background);
  root.style.setProperty("--card-foreground", theme.colors.foreground);
  root.style.setProperty("--popover", theme.colors.background);
  root.style.setProperty("--popover-foreground", theme.colors.foreground);
  root.style.setProperty("--accent", theme.colors.secondary);
  root.style.setProperty(
    "--accent-foreground",
    theme.colors.secondaryForeground
  );
  root.style.setProperty("--input", theme.colors.border);
  root.style.setProperty("--ring", theme.colors.primary);

  // Aplicar también las variables para el hover del sidebar que pueden estar faltando
  root.style.setProperty(
    "--sidebar-hover",
    theme.colors.sidebar.hoverBackground
  );
  root.style.setProperty(
    "--sidebar-active",
    theme.colors.sidebar.activeBackground
  );
}
