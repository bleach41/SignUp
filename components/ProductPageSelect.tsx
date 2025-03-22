import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { Box, ChevronDown } from "lucide-react";

export default function ProductPageSelect() {
    const { theme } = useTheme()
    const isDark = theme === "dark"
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl transition-all",
                "hover:bg-[linear-gradient(118deg,rgba(255,165,126,0.12)_17.51%,rgba(255,165,126,0.00)_82.79%)]",
                "outline-none focus:outline-none focus-visible:outline-none",
                isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            )}>

                <Box className="w-4 h-4" /> Product page

                <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn(
                "rounded-3xl p-2 min-w-[220px] border-none",
                isDark
                    ? "bg-[#272727] shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] backdrop-blur-xl"
                    : "bg-[rgba(255,255,255,0.7)] backdrop-blur-xl"
            )}>
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
