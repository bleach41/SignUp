// Archivo de configuración centralizado para los temas
export type ThemeConfig = {
  name: string
  colors: {
    // Colores base
    background: string
    backgroundSecondary: string
    foreground: string

    // Componentes específicos
    navbar: {
      background: string
      foreground: string
      border: string
    }
    sidebar: {
      background: string
      foreground: string
      border: string
      hoverBackground: string
      activeBackground: string
    }

    // Colores de acento
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    border: string

    // Colores de estado
    success: string
    warning: string
    error: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
  fontSizes: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
  }
}

// Tema predeterminado (Lucky Wolf - Azul)
export const defaultTheme: ThemeConfig = {
  name: "lucky-wolf",
  colors: {
    // Colores base
    background: "hsl(222.2, 84%, 4.9%)",
    backgroundSecondary: "hsl(217, 33%, 17%)",
    foreground: "hsl(210, 40%, 98%)",

    // Componentes específicos
    navbar: {
      background: "hsl(222, 47%, 11%)",
      foreground: "hsl(210, 40%, 98%)",
      border: "hsl(217, 33%, 17%)",
    },
    sidebar: {
      background: "hsl(222, 47%, 11%)",
      foreground: "hsl(210, 40%, 98%)",
      border: "hsl(217, 33%, 17%)",
      hoverBackground: "hsl(217, 33%, 17%)",
      activeBackground: "hsl(217, 33%, 17%)",
    },

    // Colores de acento
    primary: "hsl(217, 91%, 60%)",
    primaryForeground: "hsl(210, 40%, 98%)",
    secondary: "hsl(217.2, 32.6%, 17.5%)",
    secondaryForeground: "hsl(210, 40%, 98%)",
    muted: "hsl(217.2, 32.6%, 17.5%)",
    mutedForeground: "hsl(215, 20.2%, 65.1%)",
    border: "hsl(217.2, 32.6%, 17.5%)",

    // Colores de estado
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
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
}

// Tema rojo (Red Casino)
export const redTheme: ThemeConfig = {
  name: "red-casino",
  colors: {
    // Colores base
    background: "hsl(0, 0%, 10%)",
    backgroundSecondary: "hsl(0, 0%, 15%)",
    foreground: "hsl(0, 0%, 98%)",

    // Componentes específicos
    navbar: {
      background: "hsl(0, 70%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(0, 50%, 20%)",
    },
    sidebar: {
      background: "hsl(0, 70%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(0, 50%, 20%)",
      hoverBackground: "hsl(0, 60%, 20%)",
      activeBackground: "hsl(0, 60%, 20%)",
    },

    // Colores de acento
    primary: "hsl(0, 90%, 50%)",
    primaryForeground: "hsl(0, 0%, 98%)",
    secondary: "hsl(0, 20%, 20%)",
    secondaryForeground: "hsl(0, 0%, 98%)",
    muted: "hsl(0, 10%, 20%)",
    mutedForeground: "hsl(0, 10%, 70%)",
    border: "hsl(0, 10%, 20%)",

    // Colores de estado
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
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
}

// Tema verde (Green Fortune)
export const greenTheme: ThemeConfig = {
  name: "green-fortune",
  colors: {
    // Colores base
    background: "hsl(160, 30%, 10%)",
    backgroundSecondary: "hsl(160, 25%, 15%)",
    foreground: "hsl(0, 0%, 98%)",

    // Componentes específicos
    navbar: {
      background: "hsl(160, 50%, 12%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(160, 40%, 20%)",
    },
    sidebar: {
      background: "hsl(160, 50%, 12%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(160, 40%, 20%)",
      hoverBackground: "hsl(160, 40%, 18%)",
      activeBackground: "hsl(160, 40%, 18%)",
    },

    // Colores de acento
    primary: "hsl(142, 70%, 45%)",
    primaryForeground: "hsl(0, 0%, 10%)",
    secondary: "hsl(160, 25%, 20%)",
    secondaryForeground: "hsl(0, 0%, 98%)",
    muted: "hsl(160, 15%, 20%)",
    mutedForeground: "hsl(160, 10%, 70%)",
    border: "hsl(160, 15%, 25%)",

    // Colores de estado
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
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
}

// Tema morado (Purple Royale)
export const purpleTheme: ThemeConfig = {
  name: "purple-royale",
  colors: {
    // Colores base
    background: "hsl(270, 30%, 8%)",
    backgroundSecondary: "hsl(270, 25%, 12%)",
    foreground: "hsl(0, 0%, 98%)",

    // Componentes específicos
    navbar: {
      background: "hsl(270, 50%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(270, 40%, 20%)",
    },
    sidebar: {
      background: "hsl(270, 50%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(270, 40%, 20%)",
      hoverBackground: "hsl(270, 40%, 20%)",
      activeBackground: "hsl(270, 40%, 20%)",
    },

    // Colores de acento
    primary: "hsl(270, 70%, 60%)",
    primaryForeground: "hsl(0, 0%, 98%)",
    secondary: "hsl(270, 25%, 20%)",
    secondaryForeground: "hsl(0, 0%, 98%)",
    muted: "hsl(270, 15%, 20%)",
    mutedForeground: "hsl(270, 10%, 70%)",
    border: "hsl(270, 15%, 25%)",

    // Colores de estado
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
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
}

// Tema dorado (Gold Rush)
export const goldTheme: ThemeConfig = {
  name: "gold-rush",
  colors: {
    // Colores base
    background: "hsl(40, 30%, 10%)",
    backgroundSecondary: "hsl(40, 25%, 15%)",
    foreground: "hsl(0, 0%, 98%)",

    // Componentes específicos
    navbar: {
      background: "hsl(40, 50%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(40, 40%, 20%)",
    },
    sidebar: {
      background: "hsl(40, 50%, 15%)",
      foreground: "hsl(0, 0%, 98%)",
      border: "hsl(40, 40%, 20%)",
      hoverBackground: "hsl(40, 40%, 20%)",
      activeBackground: "hsl(40, 40%, 20%)",
    },

    // Colores de acento
    primary: "hsl(45, 90%, 50%)",
    primaryForeground: "hsl(0, 0%, 10%)",
    secondary: "hsl(40, 25%, 20%)",
    secondaryForeground: "hsl(0, 0%, 98%)",
    muted: "hsl(40, 15%, 20%)",
    mutedForeground: "hsl(40, 10%, 70%)",
    border: "hsl(40, 15%, 25%)",

    // Colores de estado
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
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
}

// Exportar todos los temas disponibles
export const themes = {
  "lucky-wolf": defaultTheme,
  "red-casino": redTheme,
  "green-fortune": greenTheme,
  "purple-royale": purpleTheme,
  "gold-rush": goldTheme,
}

