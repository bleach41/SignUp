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
    configItems: MenuItem[]
    isExpanded: boolean
    activeCategories: Record<string, boolean>
    toggleCategory: (category: string) => void
}

export function SidebarContent({ menuItems, configItems, isExpanded, activeCategories, toggleCategory }: SidebarContentProps) {
    return (
        <div
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent scrollable-content"
            style={{
                scrollbarGutter: isExpanded ? "stable" : "initial",
            }}
        >
            <div className={cn("flex w-full flex-col ", isExpanded ? "p-2 gap-28" : "pr-0 gap-11")}>
                {/* Menú principal */}
                <div className="w-full ">
                    {menuItems.map((item, index) => (
                        <div key={`menu-item-${index}`} className="w-full flex flex-col gap-1">
                            <SidebarMenuItem
                                item={item}
                                isExpanded={isExpanded}
                                isActive={activeCategories[item.label.toLowerCase()]}
                                onToggle={() => toggleCategory(item.label.toLowerCase())}
                                isLanguage={item.isLanguage}
                            />
                            {index < menuItems.length - 1 && (
                                <div className={cn("w-6 border-b border-border m-auto self-center", isExpanded ? "hidden" : "block")} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Elementos de configuración */}
                <div className="w-full mt-auto">
                    {configItems.map((item, index) => (
                        <div key={`config-${index}`} className="w-full">
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
        </div>
    )
} 