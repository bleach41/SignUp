"use client"

import { useTheme } from "@/contexts/theme-context"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="flex items-center">
      <button
        className="relative flex items-center justify-between transition-all duration-500"
        style={{
          width: '60px',
          height: '20px',
          background: '#282828',
          borderRadius: '50px',
          padding: '0 10px', // Espaciado interno para los íconos
          backgroundColor: '#282828',
          backgroundImage: `
     linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
     radial-gradient(361.9% 189.23% at 56.99% 100%, rgba(107, 49, 125, 0.00) 31.63%, rgba(139, 70, 166, 0.48) 55.89%, #5F13D3 68.14%),
     radial-gradient(428.2% 169.86% at 50% 0%, rgba(118, 51, 46, 0.00) 32.39%, rgba(181, 134, 62, 0.48) 56.43%, #B60D00 68.15%),
     linear-gradient(180deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0.01) 79.79%)
   `

        }}
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Icono de luna */}
        <div
          className="flex items-center justify-center transition-all duration-500"
          style={{
            position: 'absolute',
            left: '-15px',
            width: isDark ? '50px' : '30px', // Tamaño mayor si está activo
            height: isDark ? '50px' : '30px',
            borderRadius: '50%',
            background: '#282828',
            transform: `scale(${isDark ? 1.2 : 1})`, // Escala para agrandar
            backgroundImage: `
     linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
     radial-gradient(361.9% 189.23% at 56.99% 100%, rgba(107, 49, 125, 0.00) 31.63%, rgba(139, 70, 166, 0.48) 55.89%, #5F13D3 68.14%),
     radial-gradient(428.2% 169.86% at 50% 0%, rgba(118, 51, 46, 0.00) 32.39%, rgba(181, 134, 62, 0.48) 56.43%, #B60D00 68.15%),
     linear-gradient(180deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0.01) 79.79%)
   `

          }}
        >
          <MoonIcon
            className="text-gray-900"
            style={{
              width: '20px',
              height: '20px',
            }}
          />
        </div>

        {/* Icono de sol */}
        <div
          className="flex items-center justify-center transition-all duration-500"
          style={{
            position: 'absolute',
            right: '-15px',
            width: isDark ? '30px' : '50px', // Tamaño mayor si está activo
            height: isDark ? '30px' : '50px',
            borderRadius: '50%',
            background: '#282828',
            transform: `scale(${isDark ? 1 : 1.2})`, // Escala para agrandar
            boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.2)', // Sombra cuando está 
            // activo
            backgroundImage: `
     linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
     radial-gradient(361.9% 189.23% at 56.99% 100%, rgba(107, 49, 125, 0.00) 31.63%, rgba(139, 70, 166, 0.48) 55.89%, #5F13D3 68.14%),
     radial-gradient(428.2% 169.86% at 50% 0%, rgba(118, 51, 46, 0.00) 32.39%, rgba(181, 134, 62, 0.48) 56.43%, #B60D00 68.15%),
     linear-gradient(180deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0.01) 79.79%)
   `
          }}
        >
          <SunIcon
            className="text-yellow-500"
            style={{
              width: '20px',
              height: '20px',
            }}
          />
        </div>
      </button>
    </div >
  )
}