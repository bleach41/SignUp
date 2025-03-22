// components/header/DesktopNavigation.jsx
import LogoComponent from "./Logo"
import ThemeToggle from "./theme-toggle"
import LanguageSelector from "./language-selector"
import AuthButtons from "./AuthButtons"

export default function DesktopNavigation({ isDark }: { isDark: boolean }) {
    return (
        <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
                <LogoComponent isDark={isDark} />
                <ThemeToggle />
                <a
                    href="#"
                    className={`hover:text-opacity-100 text-sm transition-colors duration-200 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                        }`}
                >
                    Product page
                </a>
            </div>

            <div className="flex items-center gap-4">
                <LanguageSelector />
                <AuthButtons isDark={isDark} />
            </div>
        </div>
    )
}