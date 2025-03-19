"use client"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export default function Header() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header
      className={`py-4 px-6 flex items-center justify-between transition-colors duration-200 ${
        isDark ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
      }`}
    >
      <div className="flex items-center gap-8">
        <div className={`font-bold text-xl transition-colors duration-200 ${isDark ? "text-white" : "text-gray-900"}`}>
          DirectCodes
        </div>
        <ThemeToggle />
        <a
          href="#"
          className={`hover:text-opacity-100 text-sm transition-colors duration-200 ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Product page
        </a>
      </div>

      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button
          variant="outline"
          size="sm"
          className={`rounded-full px-6 py-2 h-auto transition-colors duration-200 ${
            isDark
              ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
              : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Log In
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={`rounded-full px-6 py-2 h-auto transition-colors duration-200 ${
            isDark
              ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
              : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Sign Up
        </Button>
      </div>
    </header>
  )
}

