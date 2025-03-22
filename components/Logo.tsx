// components/header/LogoComponent.jsx
export default function LogoComponent({ isDark }: { isDark: boolean }) {
    return (
        <div className={`font-bold text-xl transition-all duration-200 ${isDark ? "text-gray-300" : "text-gray-900"
            }`}>
            DirectCodes
        </div>
    )
}