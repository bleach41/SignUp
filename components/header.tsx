// components/header/Header.jsx
"use client"
import { useTheme } from "@/contexts/theme-context"
import DesktopNavigation from "./DesktopNavegation"
import MobileNavigation from "./MobileNavegation"

export default function Header() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header
      className={`py-4 flex items-center justify-between transition-colors duration-200 ${isDark ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
        }`}
    >
      {/* Desktop Navigation */}
      <DesktopNavigation isDark={isDark} />

      {/* Mobile Navigation */}
      <MobileNavigation isDark={isDark} />
    </header>
  )
}