"use client"

import { Button } from "@/components/ui/button"
import { ClientSwitcher } from "@/contexts/client-switcher"
import { useState } from "react"
import { NavbarLogo } from "./Navbar/navbar-logo"
import { NavbarTabs } from "./Navbar/navbar-tabs"
import styles from "./navbar.module.css"
import { cn } from "@/lib/utils"
import { NavbarSearch } from "./Navbar/navbar-search"

interface NavbarProps {
  isExpanded?: boolean
  toggleSidebar: () => void
  isRightExpanded: boolean
  toggleRightSidebar: () => void
}

export function Navbar({ isExpanded, toggleSidebar, isRightExpanded, toggleRightSidebar }: NavbarProps) {
  const [activeTab, setActiveTab] = useState<'sport' | 'casino'>('sport')

  return (
    <header className={cn(
      "flex px-6 h-[76px] w-full justify-between fixed top-0 left-0 right-0 z-50",
      styles.navbar
    )} style={{ background: 'var(--navbar-background)', boxShadow: 'var(--navbar-shadow)' }}>
      <div className="flex items-center gap-4">
        <NavbarLogo isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex items-center gap-4"></div>
      <div className="flex items-center gap-4">
        <NavbarSearch isRightExpanded={isRightExpanded} toggleRightSidebar={toggleRightSidebar} />
        <ClientSwitcher />
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden text-sm text-secondary-foreground hover:bg-secondary/90 md:inline-block">Log In</Button>
          <Button size="sm" className="rounded-xl w-28 h-11 px-4 text-secondary-foreground hover:bg-secondary/90" style={{ background: 'var(--button-background)' }}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

