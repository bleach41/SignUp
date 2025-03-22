// components/header/DesktopNavigation.jsx
import LogoComponent from "./Logo"
import ThemeToggle from "./theme-toggle"
import LanguageSelector from "./language-selector"
import AuthButtons from "./AuthButtons"
import ProductPageSelect from "./ProductPageSelect"
export default function DesktopNavigation({ isDark }: { isDark: boolean }) {
    return (
        <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
                <LogoComponent isDark={isDark} />
                <ThemeToggle />
                <ProductPageSelect />
            </div>

            <div className="flex items-center gap-4">
                <LanguageSelector />
                <AuthButtons isDark={isDark} />
            </div>
        </div>
    )
}