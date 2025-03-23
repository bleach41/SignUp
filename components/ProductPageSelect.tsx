import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { Box, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ProductPageSelect() {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const isDark = theme === "dark"

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            {/* Trigger */}
            <DropdownMenuTrigger className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl transition-all",
                "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)]",
                "outline-none focus:outline-none focus-visible:outline-none",
                isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            )}>
                <Box className="w-4 h-4" /> Product page

                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-[rgba(255,165,126,1)]
             ${isOpen ? "rotate-180" : ""}`}
                />
            </DropdownMenuTrigger>

            {/* Content */}
            <DropdownMenuContent
                className={`rounded-[20px] py-3 w-56 mt-2 px-0 transition-all duration-200 ${isDark
                    ? "bg-[rgba(40,40,40,0.95)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.04)_inset,2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
                    : "bg-[rgba(255,255,255,0.95)] backdrop-blur-[50px] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.10),2px_4px_16px_0px_rgba(0,0,0,0.06)]"
                    }`}
            >
                {/* Piquito */}
                <div
                    className={cn(
                        "absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 z-50",
                        "border-l-[8px] border-r-[8px] border-b-[8px] border-solid",
                        isDark
                            ? "border-l-transparent border-r-transparent border-b-[#272727]"
                            : "border-l-transparent border-r-transparent border-b-[rgba(255,255,255,0.7)]"
                    )}
                    style={{
                        filter: isDark ? "drop-shadow(0px -2px 2px rgba(248,248,248,0.08))" : undefined
                    }}
                />

                {/* Items */}
                <DropdownMenuItem className={cn(
                    "rounded-lg px-4 py-2 cursor-pointer",
                    "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)]",
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                )}>
                    Gift Cards
                </DropdownMenuItem>
                <DropdownMenuItem className={cn(
                    "rounded-lg px-4 py-2 cursor-pointer",
                    "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)]",
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                )}>
                    Device Service
                </DropdownMenuItem>
                <DropdownMenuItem className={cn(
                    "rounded-lg px-4 py-2 cursor-pointer",
                    "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)]",
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                )}>
                    Boxes / Dongles / Credits
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}