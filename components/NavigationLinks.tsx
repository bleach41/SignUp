// components/header/NavigationLinks.jsx
import { Menu, Package, Gift, Wrench, Box } from "lucide-react"
import NavLink from "./NavLink"

export default function NavigationLinks({ isDark }: { isDark: boolean }) {
    // Enlaces secundarios que aparecen dentro/después de Product page
    const subLinks = [
        { icon: Gift, text: "Gift Cards", href: "#" },
        { icon: Wrench, text: "Device Service", href: "#" },
        { icon: Package, text: "Boxes / Dongles / Credits", href: "#" },
    ]

    return (
        <ul className="space-y-4">
            {/* Product page como elemento principal */}
            <li className="border-b-[1px] border-gray-700 pb-5">
                <NavLink
                    href="#"
                    icon={Box}
                    text="Product page"
                    isDark={isDark}
                    isHead
                />
            </li>

            {/* Enlaces secundarios con indentación para mostrar jerarquía */}
            {subLinks.map((link, index) => (
                <li key={index} className="ml-4">
                    <NavLink
                        href={link.href}
                        icon={link.icon}
                        text={link.text}
                        isDark={isDark}
                    />
                </li>
            ))}
        </ul>
    )
}