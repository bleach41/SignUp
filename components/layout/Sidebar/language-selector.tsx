import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Language {
    icon: React.ReactNode
    label: string
    code: string
}

interface LanguageSelectorProps {
    isExpanded: boolean
    isActive: boolean
    onToggle: () => void
}

const languages: Language[] = [
    { icon: <div>🇬🇧</div>, label: "English", code: "en" },
    { icon: <div>🇪🇸</div>, label: "Español", code: "es" },
    { icon: <div>🇫🇷</div>, label: "Français", code: "fr" },
    { icon: <div>🇩🇪</div>, label: "Deutsch", code: "de" },
    { icon: <div>🇮🇹</div>, label: "Italiano", code: "it" },
]

export function LanguageSelector({ onToggle }: LanguageSelectorProps) {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language)
        onToggle()
    }

    return {
        icon: (
            <div
                className="rounded-xl shadow-[0px_2px_1px_#3F4655_inset] h-11 w-11 flex items-center justify-center"
                style={{ background: 'var(--navbar-background-secondary)' }}
            >
                {selectedLanguage.icon}
            </div>
        ),
        label: selectedLanguage.label,
        submenu: languages.map(lang => ({
            icon: lang.icon,
            label: lang.label,
            onClick: () => handleLanguageSelect(lang)
        })),
        isLanguage: true
    }
} 