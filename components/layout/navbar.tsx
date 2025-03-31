"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientSwitcher } from "@/contexts/client-switcher"
import { useState } from "react"
import { NavbarLogo } from "./Navbar/navbar-logo"
import { NavbarTabs } from "./Navbar/navbar-tabs"
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
    <header className="flex px-6 h-[76px] w-full justify-between fixed top-0 left-0 right-0 z-50" style={{ background: 'var(--navbar-background)', boxShadow: 'var(--navbar-shadow)' }}>
      <div className="flex items-center gap-4">
        <NavbarLogo isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex items-center gap-4">
        <NavbarSearch />
        <Button
          variant="ghost"
          size="icon"
          className={`text-secondary-foreground ${isRightExpanded ? "bg-background-secondary" : ""}`}
          onClick={toggleRightSidebar}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-4">
          <ClientSwitcher />
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden text-sm text-secondary-foreground hover:bg-secondary/90 md:inline-block">Log In</Button>
            <Button size="sm" className="rounded-xl w-28 h-11 px-4 text-secondary-foreground hover:bg-secondary/90" style={{ background: 'var(--button-background)' }}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

