"use client"

import Header from "@/components/header"
import Footer from "@/components/Footer"
import { useTheme } from "@/contexts/theme-context"
import SimpleStars from "@/components/SimpleStarts"
import LogInForm from "@/components/log-in-form"
import PageTransition from "@/components/PageTransition"
export default function Home() {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <PageTransition>
            <div
                className={`min-h-screen w-full flex flex-col transition-colors duration-200 ${isDark ? "bg-[#1A1A1A] text-white" : "bg-[#F5F5F5] text-gray-900"
                    }`}
            >
                <SimpleStars>
                    <Header />
                    <main className="flex-1 flex justify-center items-center xl:p-4">
                        <LogInForm />
                    </main>
                    <Footer />
                </SimpleStars>
            </div>
        </PageTransition>
    )
}