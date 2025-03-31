"use client"

import type React from "react"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { RightSidebar } from "@/components/layout/right-sidebar"
import { ThemeProvider } from "@/contexts/theme-provider"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRightExpanded, setIsRightExpanded] = useState(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleRightSidebar = () => {
    setIsRightExpanded(!isRightExpanded)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="casino-theme">
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Navbar
          isExpanded={isExpanded}
          toggleSidebar={toggleSidebar}
          isRightExpanded={isRightExpanded}
          toggleRightSidebar={toggleRightSidebar}
        />
        <div className="flex flex-1 w-full mt-[76px]">
          <Sidebar isExpanded={isExpanded} />
          <main className={cn(
            "flex-1 overflow-auto bg-background-secondary p-4 transition-all duration-300",
            isExpanded ? "ml-64" : "ml-20",
            isRightExpanded ? "mr-80" : "mr-0"
          )}>
            {children}
          </main>
          <RightSidebar isExpanded={isRightExpanded} />
        </div>
      </div>
    </ThemeProvider>
  )
}

