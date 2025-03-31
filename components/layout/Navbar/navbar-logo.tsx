import { Button } from "@/components/ui/button"
import Menu from "@/public/Icons/Menu"
import BladeWolf from "@/public/Icons/BladeWolf"
import { useTheme } from "@/contexts/theme-provider"

interface NavbarLogoProps {
    isExpanded?: boolean
    toggleSidebar: () => void
}

export function NavbarLogo({ isExpanded, toggleSidebar }: NavbarLogoProps) {
    const { isDynamicTheme, dynamicTheme } = useTheme()

    return (
        <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-navbar-foreground">
                <span className="text-primary"><BladeWolf /></span>
                {isDynamicTheme && dynamicTheme ? dynamicTheme.name.toUpperCase() : "LUCKY WOLF"}
            </span>
            <Button
                variant="ghost"
                size="icon"
                className="ml-3 rounded-xl shadow-[0px_2px_0px_#3F4655_inset]"
                style={{ background: 'var(--navbar-background-secondary)' }}
                onClick={toggleSidebar}
            >
                <Menu rotate={isExpanded ? '180deg' : '0deg'} />
            </Button>
        </div>
    )
} 