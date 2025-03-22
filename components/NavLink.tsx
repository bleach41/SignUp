// components/header/NavLink.jsx
type NavLinkProps = {
    href: string
    icon: any
    text: string
    isDark: boolean
    isHead?: boolean
}
export default function NavLink({ href, icon: Icon, text, isDark, isHead }: NavLinkProps) {
    return (
        <a
            href={href}
            className={`flex items-center gap-2 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
        >
            <span
                className={"w-6 h-6 flex items-center justify-center rounded-full"}
            >
                <Icon className="h-6 w-6 " />
            </span>
            {text}
        </a>
    )
}