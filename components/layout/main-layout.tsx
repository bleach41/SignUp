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
        <div className="flex flex-1 w-full" style={{ marginTop: 'var(--h-76-50)' }}>
          <Sidebar isExpanded={isExpanded} />
          <main className={cn(
            "flex-1 overflow-auto bg-background-secondary p-4 transition-all duration-300",
            isExpanded ? "ml-[var(--w-280-200)]" : "ml-[var(--w-102-80)]",
            isRightExpanded ? "mr-[var(--w-300-200)]" : "mr-0"
          )}>
            {children}
          </main>
          <RightSidebar isExpanded={isRightExpanded} />
        </div>
      </div>
    </ThemeProvider>
  )
}

