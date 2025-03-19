"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/contexts/theme-context"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "es", name: "Español", flag: "🇪🇸" },
]

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-colors duration-200 ${
          isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"
        }`}
      >
        <span className="text-base">{selectedLanguage.flag}</span>
        <span className="text-sm font-medium">{selectedLanguage.code.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isDark ? "text-gray-400" : "text-gray-500"
          } ${isOpen ? "rotate-180" : ""}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`rounded-lg w-40 p-1 mt-1 border transition-colors duration-200 ${
          isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-black"
        }`}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded transition-colors duration-200 ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedLanguage(language)
              setIsOpen(false)
            }}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

