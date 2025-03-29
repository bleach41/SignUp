"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { RightSidebar } from "@/components/layout/right-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

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
      <div className="flex h-screen w-full flex-col bg-background">
        <Navbar
          isExpanded={isExpanded}
          toggleSidebar={toggleSidebar}
          isRightExpanded={isRightExpanded}
          toggleRightSidebar={toggleRightSidebar}
        />
        <div className="flex h-[calc(100vh-64px)] w-full">
          <Sidebar isExpanded={isExpanded} />
          <main className="h-full flex-1 overflow-hidden bg-background-secondary p-4">{children}</main>
          <RightSidebar isExpanded={isRightExpanded} />
        </div>
      </div>
    </ThemeProvider>
  )
}

