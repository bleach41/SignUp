// components/header/AuthButtons.jsx
import { Button } from "@/components/ui/button"

export default function AuthButtons({ isDark }: { isDark: boolean }) {
    return (
        <>

            <Button
                variant="outline"
                size="sm"
                className={`rounded-[48px] px-6 py-2 h-auto transition-all duration-300 backdrop-blur-[50px] ${isDark
                    ? "bg-[#282828] border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-white hover:bg-opacity-90 [background:radial-gradient(ellipse_180px_95px_at_bottom_right,rgba(107,49,125,0.00)_31.63%,rgba(139,70,166,0.48)_55.89%,#5F13D3_68.14%),radial-gradient(ellipse_180px_95px_at_top_left,rgba(118,51,46,0.00)_32.39%,rgba(181,134,62,0.48)_56.43%,#B60D00_68.15%),linear-gradient(-45deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.90)_100%),#282828]"
                    : "bg-white border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.1),inset_2px_4px_16px_0px_rgba(248,248,248,0.1)] text-gray-900 hover:bg-opacity-90 [background:radial-gradient(ellipse_185px_80px_at_bottom_right,rgba(107,49,125,0.00)_31.63%,rgba(139,70,166,0.10)_55.89%,rgba(95,19,211,0.31)_68.14%),radial-gradient(ellipse_185px_80px_at_top_left,rgba(118,51,46,0.00)_32.39%,rgba(181,134,62,0.10)_56.43%,rgba(182,13,0,0.31)_68.15%),linear-gradient(-45deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),white]"
                    }`}
            >
                Sign Up
            </Button>
            <Button
                variant="outline"
                size="sm"
                className={`rounded-[48px] px-6 py-2 h-auto transition-all duration-300 backdrop-blur-[50px] ${isDark
                    ? "bg-[rgba(40,40,40,0.70)] border-none shadow-[inset_0px_2px_2px_0px_rgba(248,248,248,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-white hover:bg-[rgba(40,40,40,0.80)]"
                    : "bg-white border-none shadow-[0px_4px_8px_0px_rgba(18,18,18,0.08),inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] text-gray-800 hover:bg-gray-50"
                    }`}
            >
                Log In
            </Button>
        </>
    )
}