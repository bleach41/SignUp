"use client"

import SignUpForm from "@/components/sign-up-form"
import Header from "@/components/header"
import { useTheme } from "@/contexts/theme-context"

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isDark ? "bg-[#1A1A1A] text-white" : "bg-[#F5F5F5] text-gray-900"
      }`}
    >
      <Header />
      <main className="flex-1 flex justify-center items-center p-4">
        <SignUpForm />
      </main>
      <footer
        className={`p-4 flex justify-between items-center transition-colors duration-200 ${
          isDark ? "border-t border-gray-800" : ""
        }`}
      >
        <div className="flex gap-8 text-sm">
          <a
            href="#"
            className={`transition-colors duration-200 ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className={`transition-colors duration-200 ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className={`transition-colors duration-200 ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Contact us
          </a>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="E-mail address"
            className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
              isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border border-gray-200 text-gray-800"
            }`}
          />
          <button
            className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
              isDark
                ? "bg-gray-800 border border-gray-700 text-white hover:bg-gray-700"
                : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
            }`}
          >
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  )
}

