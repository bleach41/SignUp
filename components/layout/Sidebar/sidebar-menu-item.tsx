import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import ArrowDownIcon from "@/public/Icons/ArrowDown"

interface SubMenuItem {
    icon: React.ReactNode
    label: string
    onClick?: () => void
}

interface MenuItem {
    icon: React.ReactNode
    label: string
    href?: string
    submenu?: SubMenuItem[]
    isLanguage?: boolean
    isBackground?: boolean
    highlight?: boolean
    badge?: number | string
}

interface MenuItemProps {
    item: MenuItem
    isExpanded: boolean
    isActive: boolean
    onToggle: () => void
    isLanguage?: boolean
}

const buttonBackground = (item: MenuItem, isActive: boolean) => {
    const { highlight, isBackground } = item
    if (highlight) {
        return 'var(--button-background)'
    }
    if (isBackground || isActive) {
        return 'var(--navbar-background-secondary)'
    }
}

const buttonShadow = (item: MenuItem) => {
    const { isBackground } = item
    if (isBackground) {
        return '0px 2px 0px #3F4655 inset'
    }
}

const buttonColor = (item: MenuItem) => {
    const { isBackground } = item
    if (isBackground) {
        return '#919399'
    }
}

export function SidebarMenuItem({ item, isExpanded, isActive, onToggle, isLanguage }: MenuItemProps) {
    if (isExpanded) {
        if (item.submenu) {
            return (
                <Collapsible open={isActive} disabled={!isExpanded}>
                    <div className="rounded-xl"
                        style={{
                            background: isActive ? "var(--sidebar-background-secondary)" : "var(--sidebar-background)",
                            boxShadow: isActive ? "var(--sidebar-shadow)" : "none"
                        }}>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "flex w-full h-11 justify-start gap-3 rounded-xl px-3 py-2 hover:bg-sidebar-hover"
                                )}
                                style={{
                                    background: buttonBackground(item, isActive),
                                    paddingLeft: isLanguage ? '0px' : '10px'
                                }}
                                onClick={onToggle}
                            >
                                {item.icon}
                                <span className="flex-1 text-left">{item.label}</span>
                                {item.badge && (
                                    <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-blue-500/20 px-1 text-xs font-medium">
                                        {item.badge}
                                    </span>
                                )}
                                {isActive ? (
                                    <ArrowDownIcon className={cn("p-2 rounded-full border-[#434958] border-[1.2px]", isLanguage && "shadow-[0px_1px_1px_0px_#3F4655_inset]", isLanguage && "[background-var(--navbar-background-secondary)]")}
                                        style={{
                                            background: isLanguage ? 'var(--navbar-background-secondary)' : 'transparent',
                                            width: '28px',
                                            height: '28px'
                                        }}
                                    />
                                ) : (
                                    <ArrowDownIcon className={cn("p-2 rounded-full border-[#434958] border-[1.2px] rotate-180", isLanguage && "shadow-[0px_-1px_1px_0px_#3F4655_inset]", isLanguage && "[background-var(--navbar-background-secondary)]")}
                                        style={{
                                            background: isLanguage ? 'var(--navbar-background-secondary)' : 'transparent',
                                            width: '28px',
                                            height: '28px',
                                        }}
                                    />
                                )}
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-2 mt-1 space-y-1">
                            {item.submenu.map((subItem, subIndex) => (
                                <Button
                                    key={subIndex}
                                    variant="ghost"
                                    className="flex w-full h-11 justify-start gap-3 rounded-md px-3 py-2 text-sidebar-foreground hover:bg-sidebar-hover"
                                    onClick={subItem.onClick}
                                >
                                    {subItem.icon}
                                    <span className="flex-1 text-left text-sm">{subItem.label}</span>
                                </Button>
                            ))}
                        </CollapsibleContent>
                    </div>
                </Collapsible>
            )
        }

        return (
            <Button
                variant="ghost"
                className={cn(
                    "flex w-full h-11 justify-start gap-3 rounded-xl px-3 py-2 hover:bg-sidebar-hover"
                )}
                style={{
                    background: buttonBackground(item, isActive),
                    boxShadow: buttonShadow(item),
                    color: buttonColor(item)
                }}
            >
                {item.icon}
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-[rgba(33,42,55,0.32)] px-1 text-xs font-medium">
                        {item.badge}
                    </span>
                )}
            </Button>
        )
    }

    if (item.submenu) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className={cn(
                            "relative flex w-full h-11 justify-center rounded-md p-2 hover:bg-sidebar-hover",
                            isActive && "bg-sidebar-active",
                            item.highlight && "bg-blue-600 text-white hover:bg-blue-700",
                        )}
                    >
                        {item.icon}
                        {item.badge && (
                            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-xs font-medium text-white">
                                {item.badge}
                            </span>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    side="right"
                    align="start"
                    className="min-w-[180px] p-1 rounded-2xl"
                    style={{
                        background: 'var(--navbar-background)',
                        border: '1px solid var(--border)',
                        boxShadow: '0px 1px 1px 0px #3F4655 inset'
                    }}
                >
                    <DropdownMenuLabel className="px-2 py-1.5 text-sm text-gray-400">{item.label}</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem
                            key={subIndex}
                            className="flex items-center gap-2 px-2 py-1.5 focus:bg-gray-800 rounded-sm"
                            onClick={subItem.onClick}
                        >
                            {subItem.icon}
                            <span className="text-sm text-gray-200">{subItem.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
        <Button
            variant="ghost"
            className={cn(
                "relative flex w-full h-11 justify-center rounded-md p-2 hover:bg-sidebar-hover",
                isActive && "bg-sidebar-active",
                item.highlight && "bg-blue-600 text-white hover:bg-blue-700",
            )}
        >
            {item.icon}
            {item.badge && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-xs font-medium text-white">
                    {item.badge}
                </span>
            )}
        </Button>
    )
} 