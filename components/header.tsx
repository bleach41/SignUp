"use client"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "@/contexts/theme-context"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const NavigationContent = () => (
    <>
      <div className="flex items-center gap-8">
        <div className={`font-bold text-xl transition-all duration-200 ${isDark ? "text-white" : "text-gray-900"}`}>
          DirectCodes
        </div>
        <ThemeToggle />
      </div>
      <a
        href="#"
        className={`hover:text-opacity-100 text-sm transition-colors duration-200 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
          }`}
      >
        Product page
      </a>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button
          variant="outline"
          size="sm"
          className={`rounded-[48px] px-6 py-2 h-auto transition-all duration-300 backdrop-blur-[50px] ${isDark
            ? "bg-[rgba(40,40,40,0.70)] border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-white hover:bg-[rgba(40,40,40,0.80)]"
            : "bg-white border-none shadow-[0px_4px_8px_0px_rgba(18,18,18,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-gray-800 hover:bg-gray-50"
            }`}
        >
          Log In
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={`rounded-[48px] px-6 py-2 h-auto transition-all duration-300 backdrop-blur-[50px] ${isDark
            ? "bg-[#282828] border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-white hover:bg-opacity-90 [background:radial-gradient(ellipse_180px_95px_at_bottom_right,rgba(107,49,125,0.00)_31.63%,rgba(139,70,166,0.48)_55.89%,#5F13D3_68.14%),radial-gradient(ellipse_180px_95px_at_top_left,rgba(118,51,46,0.00)_32.39%,rgba(181,134,62,0.48)_56.43%,#B60D00_68.15%),linear-gradient(-45deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.90)_100%),#282828]"
            : "bg-white border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.1),inset_2px_4px_16px_0px_rgba(248,248,248,0.1)] text-gray-900 hover:bg-opacity-90 [background:radial-gradient(ellipse_185px_80px_at_bottom_right,rgba(107,49,125,0.00)_31.63%,rgba(139,70,166,0.10)_55.89%,rgba(95,19,211,0.31)_68.14%),radial-gradient(ellipse_185px_80px_at_top_left,rgba(118,51,46,0.00)_32.39%,rgba(181,134,62,0.10)_56.43%,rgba(182,13,0,0.31)_68.15%),linear-gradient(-45deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),white]"
            }`}
        >
          Sign Up
        </Button>
      </div>
    </>
  )

  return (
    <header
      className={`py-4 px-6 flex items-center justify-between transition-colors duration-200 ${isDark ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
        }`}
    >

      {/* Desktop Navigation */}
      <div className="hidden lg:flex md:items-center md:gap-8">
        <NavigationContent />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
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
            side="left"
            className={`flex flex-col gap-8 pt-16 ${isDark ? "bg-[#1A1A1A] text-white" : "bg-[#F5F5F5] text-gray-900"
              }`}
          >
            <div className="flex flex-col gap-8">
              <NavigationContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

