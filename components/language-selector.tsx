"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/contexts/theme-context"

const languages = [
  { code: "en", name: "English", flag: "GB" },
  { code: "de", name: "Deutsch", flag: "DE" },
  { code: "pl", name: "Polish", flag: "PL" },
  { code: "pt", name: "Portugues", flag: "PT" },
  { code: "ru", name: "Русский", flag: "RU" },
  { code: "es", name: "Espanol", flag: "ES" },
]

// Función para convertir código de país a emoji de bandera
const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char: string) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Componente de bandera mejorado con dimensiones fijas para evitar saltos
  const Flag = ({ countryCode }: { countryCode: string }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div className="relative h-5 w-7 flex items-center justify-center">
        {!imageError && (
          <img
            src={`/flags/${countryCode.toLowerCase()}.svg`}
            alt={`${countryCode} flag`}
            className={`absolute inset-0 h-full w-full object-contain rounded-sm transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        {(!imageLoaded || imageError) && (
          <span className="text-lg">{getFlagEmoji(countryCode)}</span>
        )}
      </div>
    );
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={`group flex items-center gap-2 pr-3 transition-all duration-200 rounded-[32px] outline-none focus:outline-none focus-visible:outline-none ${isDark
          ? "bg-[rgba(40,40,40,0.00)] hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)] backdrop-blur-[50px]"
          : "bg-[rgba(255,255,255,0.00)] hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)] backdrop-blur-[50px]"
          }`}
        aria-label="Select language"
      >
        <div className={`flex items-center px-0 justify-center transition-all duration-200 rounded-full h-10 w-10 ${isDark
          ? "bg-[rgba(40,40,40,0.70)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.04)_inset,2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
          : "bg-[rgba(255,255,255,0.80)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.10),2px_4px_16px_0px_rgba(0,0,0,0.06)]"
          }`}
        >
          <Flag countryCode={selectedLanguage.flag} />
        </div>
        <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
          {selectedLanguage.code.toUpperCase()}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-[rgba(255,165,126,1)]
             ${isOpen ? "rotate-180" : ""}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`rounded-[20px] w-56 mt-2 px-0 transition-all duration-200 ${isDark
          ? "bg-[rgba(40,40,40,0.95)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.04)_inset,2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
          : "bg-[rgba(255,255,255,0.95)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.10),2px_4px_16px_0px_rgba(0,0,0,0.06)]"
          }`}
      >
        <div className="py-2">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              className={`flex items-center justify-start gap-3 px-4 py-2.5 cursor-pointer transition-all duration-200 ${selectedLanguage.code === language.code
                ? isDark
                  ? "bg-[linear-gradient(118deg,rgba(255,165,126,0.22)_17.51%,rgba(255,255,255,0.00)_80%)]"
                  : "bg-[linear-gradient(118deg,rgba(255,165,126,0.22)_17.51%,rgba(255,255,255,0.00)_80%)]"
                : ""
                } ${isDark
                  ? "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)] text-white"
                  : "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)] text-gray-900"
                } rounded-[16px] w-full`}
              onClick={() => {
                setSelectedLanguage(language)
                setIsOpen(false)
              }}
            >
              <div className={`flex items-center px-0 justify-center h-8 w-8 rounded-full ${isDark
                ? "bg-[rgba(255,255,255,0.05)] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.04)]"
                : "bg-[rgba(0,0,0,0.05)] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.1)]"
                }`}>
                <Flag countryCode={language.flag} />
              </div>
              <span className="text-sm font-medium">{language.name}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}