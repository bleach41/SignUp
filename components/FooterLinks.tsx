// components/header/FooterLinks.jsx
export default function FooterLinks({ isDark }: { isDark: boolean }) {
    const links = [
        { text: "Terms & Conditions", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Contact us", href: "#" },
    ]

    return (
        <ul className="space-y-2 text-sm">
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        className={`${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"
                            } transition-colors`}
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}