import { cn } from "@/lib/utils"
import { SidebarMenuItem } from "./sidebar-menu-item"

interface MenuItem {
    icon: React.ReactNode
    label: string
    href?: string
    submenu?: MenuItem[]
    isBackground?: boolean
    highlight?: boolean
    badge?: number | string
    isLanguage?: boolean
}

interface SidebarContentProps {
    menuItems: MenuItem[]
    isExpanded: boolean
    activeCategories: Record<string, boolean>
    toggleCategory: (category: string) => void
}

export function SidebarContent({ menuItems, isExpanded, activeCategories, toggleCategory }: SidebarContentProps) {
    console.log(menuItems)
    return (
        <div
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent scrollable-content"
            style={{
                scrollbarGutter: isExpanded ? "stable" : "initial",
            }}
        >
            <div className={cn("flex w-full flex-col gap-2 items-center justify-center", isExpanded ? "p-2" : "pr-0")}>
                {menuItems.map((item, index) => (
                    <div key={index} className="w-full mb-1">
                        <SidebarMenuItem
                            item={item}
                            isExpanded={isExpanded}
                            isActive={activeCategories[item.label.toLowerCase()]}
                            onToggle={() => toggleCategory(item.label.toLowerCase())}
                            isLanguage={item.isLanguage}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 