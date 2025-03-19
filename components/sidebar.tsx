"use client"

import { useState } from "react"
import { Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="hidden md:block w-64 bg-[#1A1A1A] border-r border-gray-800 p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="font-bold text-xl">DirectCodes</div>
        <button className="text-gray-400">
          <X size={20} />
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        <Button variant="outline" size="sm" className="flex-1 rounded-full">
          Sign Up
        </Button>
        <Button variant="outline" size="sm" className="flex-1 rounded-full">
          Log In
        </Button>
      </div>

      <nav className="space-y-4 mb-8">
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white">
          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xs">🔍</span>
          </div>
          Product page
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white">
          Gift Cards
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white">
          Device Service
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white">
          Boxes / Dongles / Credits
        </a>
      </nav>

      <div className="flex items-center justify-between p-2 bg-gray-800 rounded-lg mb-6">
        <div className="text-sm">Dark Theme</div>
        <button
          className="w-12 h-6 rounded-full bg-gray-700 relative flex items-center p-1"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white absolute transition-all ${darkMode ? "translate-x-6" : "translate-x-0"}`}
          ></div>
          <Sun size={14} className="text-yellow-400 ml-0.5" />
          <Moon size={14} className="text-blue-400 ml-auto mr-0.5" />
        </button>
      </div>

      <div className="mb-6">
        <LanguageSelector />
      </div>

      <div className="space-y-2 text-sm">
        <a href="#" className="block text-gray-400 hover:text-white">
          Terms & Conditions
        </a>
        <a href="#" className="block text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="block text-gray-400 hover:text-white">
          Contact us
        </a>
      </div>
    </div>
  )
}

