import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ArrowDownIcon from "@/public/Icons/ArrowDown";
import Image from "next/image";
import styles from "./sidebar-menu-item.module.css";

// Interfaces
interface SubMenuItem {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

interface MenuItem {
    icon: React.ReactNode;
    image?: string;
    label: string;
    href?: string;
    submenu?: SubMenuItem[];
    isLanguage?: boolean;
    isBackground?: boolean;
    highlight?: boolean;
    badge?: number | string;
}

interface MenuItemProps {
    item: MenuItem;
    isExpanded: boolean;
    isActive: boolean;
    onToggle: () => void;
    isLanguage?: boolean;
}

// Componente para el menú expandido con submenús
const ExpandedSubmenuItem = ({ item, isActive, onToggle, isLanguage }: MenuItemProps) => (
    <Collapsible open={isActive} disabled={false}>
        <div className={cn(
            // styles.menuItemContainer,
            isActive ? styles.menuItemContainerActive : styles.menuItemContainerInactive
        )}>
            <CollapsibleTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        styles.menuItemExpanded,
                        isLanguage ? styles.menuItemExpandedLanguage : styles.menuItemExpandedDefault,
                        item.highlight && styles.menuItemExpandedHighlight,
                        (item.isBackground || isActive) && styles.menuItemExpandedBackground
                    )}
                    onClick={onToggle}
                >
                    {item.icon}
                    <span className={styles.label}>{item.label}</span>
                    {item.badge && <span className={styles.badgeExpanded}>{item.badge}</span>}
                    <ArrowDownIcon
                        data-state={isActive ? "open" : "closed"}
                        className={cn(
                            isLanguage ? (isActive ? styles.arrowIconLanguage : styles.arrowIconLanguageRotated) : styles.arrowIcon
                        )}
                    />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className={styles.collapsibleContent}>
                {item.submenu?.map((subItem, subIndex) => (
                    <Button
                        key={subIndex}
                        variant="ghost"
                        className={styles.menuItemExpanded}
                        onClick={subItem.onClick}
                    >
                        {subItem.icon}
                        <span className={styles.labelSmall}>{subItem.label}</span>
                    </Button>
                ))}
            </CollapsibleContent>
        </div>
    </Collapsible>
);

// Componente para el menú expandido sin submenús
const ExpandedMenuItem = ({ item, isActive }: MenuItemProps) => (
    <Button
        variant="ghost"
        className={cn(
            styles.menuItemExpanded,
            item.highlight && styles.menuItemExpandedHighlight,
            (item.isBackground || isActive) && styles.menuItemExpandedBackground,
            item.isBackground && styles.menuItemExpandedShadow,
            item.isBackground && styles.menuItemExpandedColor
        )}
    >
        {item.icon}
        <span className={styles.label}>{item.label}</span>
        {item.badge && <span className={styles.badgeExpanded}>{item.badge}</span>}
    </Button>
);

// Componente para el menú colapsado con submenús
const CollapsedSubmenuItem = ({ item, isActive, isLanguage }: MenuItemProps) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                className={cn(
                    isLanguage ? styles.isLanguage : styles.menuItemCollapsed,
                    isActive && styles.menuItemActive,
                    item.highlight && styles.menuItemHighlight
                )}
            >
                {item.image ? (
                    <Image src={item.image} alt={item.label} width={26} height={26} />
                ) : (
                    item.icon
                )}
                {!isLanguage && item.label}
                {item.badge && <span className={styles.badgeCollapsed}>{item.badge}</span>}
            </Button>
        </DropdownMenuTrigger>
        {/* Dropdown menu content */}
        <DropdownMenuContent
            side="right"
            align="start"
            className={styles.dropdownContent}
        >
            <DropdownMenuLabel className={styles.dropdownLabel}>{item.label}</DropdownMenuLabel>
            <DropdownMenuSeparator className={styles.dropdownSeparator} />
            {item.submenu?.map((subItem, subIndex) => (
                <DropdownMenuItem
                    key={subIndex}
                    className={styles.dropdownItem}
                    onClick={subItem.onClick}
                >
                    {subItem.icon}
                    <span>{subItem.label}</span>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
);

// Componente para el menú colapsado sin submenús
const CollapsedMenuItem = ({ item, isActive, isLanguage }: MenuItemProps) => (
    <Button
        variant="ghost"
        className={cn(
            isLanguage ? styles.menuItemCollapsedLanguage : styles.menuItemCollapsed,
            isActive && styles.menuItemActive,
            item.highlight && styles.menuItemHighlight
        )}
    >
        {item.image ? (
            <Image src={item.image} alt={item.label} width={26} height={26} />
        ) : (
            item.icon
        )}
        {!isLanguage && item.label.slice(0, 9)}
    </Button>
);

// Componente principal
export function SidebarMenuItem({
    item,
    isExpanded,
    isActive,
    onToggle,
    isLanguage,
}: MenuItemProps) {
    if (isExpanded) {
        return item.submenu
            ? <ExpandedSubmenuItem item={item} isActive={isActive} onToggle={onToggle} isLanguage={isLanguage} isExpanded={isExpanded} />
            : <ExpandedMenuItem item={item} isActive={isActive} onToggle={onToggle} isLanguage={isLanguage} isExpanded={isExpanded} />;
    }

    return item.submenu
        ? <CollapsedSubmenuItem item={item} isActive={isActive} onToggle={onToggle} isLanguage={isLanguage} isExpanded={isExpanded} />
        : <CollapsedMenuItem item={item} isActive={isActive} onToggle={onToggle} isLanguage={isLanguage} isExpanded={isExpanded} />;
}
