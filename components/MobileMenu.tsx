// components/header/MobileMenu.jsx
import { Menu, Package, Gift, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import ThemeToggle from "./theme-toggle"
import LanguageSelector from "./language-selector"
import LogoComponent from "./Logo"
import AuthButtons from "./AuthButtons"
import NavigationLinks from "./NavigationLinks"
import FooterLinks from "./FooterLinks"

export default function MobileMenu({ isDark }: { isDark: boolean }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={`${isDark ? "text-white" : "text-gray-900"}`}
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent
                aria-labelledby="menu-title"
                side="left"
                isDark={isDark}
                className={`flex flex-col w-80 p-0 rounded-[0_32px_32px_0] border-[0px] border-white/40 backdrop-blur-[0.2px] ${isDark
                    ? "bg-[linear-gradient(180deg,rgba(40,40,40,0.60)0%,rgba(40,40,40,0.00)100%)] shadow-[2px_4px_16px_0px_rgba(248,248,248,1)_inset,0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_13px_0px_rgba(5,5,5,0.10),0px_6px_4px_-4px_rgba(5,5,5,0.10),0px_5px_1.5px_-4px_rgba(5,5,5,0.25)]"
                    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.00)_100%)]"
                    } shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset,0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_13px_0px_rgba(5,5,5,0.10),0px_6px_4px_-4px_rgba(5,5,5,0.10),0px_5px_1.5px_-4px_rgba(5,5,5,0.25)] ${isDark ? "text-white" : "text-gray-900"
                    }`}
            >
                <div className="p-4 flex justify-between items-center align-bottom">
                    <LogoComponent isDark={isDark} />
                </div>

                <div className="px-4 flex gap-10">
                    <AuthButtons isDark={isDark} />
                </div>

                <nav className="px-4">
                    <NavigationLinks isDark={isDark} />
                </nav>

                <div className="mt-1 p-4 ">
                    <div className="flex px-4 items-center gap-16 mb-4">
                        <ThemeToggle />
                        <div className="flex flex-col gap-2">

                            <div className="text-sm text-gray-700 dark:text-gray-300">{isDark ? ' Dark Theme ' : 'Light Theme'}</div>
                            <div className="text-sm text-gray-400">Current</div>
                        </div>
                    </div>

                    <div className="mb-8 mt-12">
                        <LanguageSelector />
                    </div>

                    <FooterLinks isDark={isDark} />
                </div>
            </SheetContent>
        </Sheet>
    )
}