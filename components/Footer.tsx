// components/footer.tsx
"use client"

import { useTheme } from "@/contexts/theme-context"
import { Mail } from "lucide-react"

export default function Footer() {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <footer
            className={"p-4 flex justify-center xl:justify-between items-center transition-colors duration-200"}
        >
            <div className="gap-8 text-sm hidden xl:flex">
                <a
                    href="#"
                    className={`transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Terms & Conditions
                </a>
                <a
                    href="#"
                    className={`transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Privacy Policy
                </a>
                <a
                    href="#"
                    className={`transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Contact us
                </a>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Mail className={`absolute left-4 top-2.5 ${isDark ? "text-gray-500" : "text-gray-900"}`} size={18} />
                    <input
                        type="email"
                        placeholder="E-mail address"
                        className="w-[90%] [border-radius:32px] px-4 py-2 pr-24 text-sm text-gray-950 transition-colors duration-200 pl-12"
                        style={{
                            backgroundColor: isDark ? "var(--neutral-neutral-22, rgba(0, 0, 0, 0.1))" : "rgba(223, 220, 219)",
                            borderTop: "0.5px solid rgba(248, 248, 248, 0.05)",
                            color: isDark ? "rgba(255, 255, 255, 0.50)" : "rgba(0, 0, 0, 0.50)"

                        }}

                    />
                    <button
                        className={`absolute h-[40px] right-1 top-1/2 -translate-y-1/2 [border-radius:32px] px-4 py-1.5 text-sm font-medium transition-colors duration-200 backdrop-blur-[50px] ${isDark
                            ? "bg-[rgba(40,40,40,0.70)] text-gray-400 hover:bg-[rgba(40,40,40,0.80)] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.04)_inset,2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
                            : "bg-[#ffff] text-gray-950 hover:bg-[rgba(40,40,40,0.15)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05),2px_4px_16px_0px_rgba(0,0,0,0.06)_inset]"
                            }`}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    )
}