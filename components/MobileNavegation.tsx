// components/header/MobileNavigation.jsx
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoComponent from "./Logo"
import MobileMenu from "./MobileMenu"

export default function MobileNavigation({ isDark }: { isDark: boolean }) {
    return (
        <div className="xl:hidden flex items-center justify-center w-full gap-4">
            <MobileMenu isDark={isDark} />
            <LogoComponent isDark={isDark} />
            <div className="opacity-0">
                <Menu className="h-6 w-6" />
            </div>
        </div>
    )
}