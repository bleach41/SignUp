"use client"

import { MessageCircle } from "lucide-react"
import Search from "@/public/Icons/Search"
import Menu from "@/public/Icons/Menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/contexts/theme-provider"
import { ClientSwitcher } from "@/contexts/client-switcher"
import Crown from "@/public/Icons/Crown"
import { useState } from "react"

interface NavbarProps {
  isExpanded?: boolean
  toggleSidebar: () => void
  isRightExpanded: boolean
  toggleRightSidebar: () => void
}

export function Navbar({ isExpanded, toggleSidebar, isRightExpanded, toggleRightSidebar }: NavbarProps) {
  const { isDynamicTheme, dynamicTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<'sport' | 'casino'>('sport')

  return (
    <header className="flex px-6 h-16 w-full justify-between" style={{ background: 'var(--navbar-background)', boxShadow: 'var(--navbar-shadow)' }}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-bold text-navbar-foreground">
            <span className="text-primary">🔥</span>
            {isDynamicTheme && dynamicTheme ? dynamicTheme.name.toUpperCase() : "LUCKY WOLF"}
          </span>
          <Button variant="ghost" size="icon" className="ml-3 rounded-xl shadow-[0px_2px_0px_#3F4655_inset]" style={{ background: 'var(--navbar-background-secondary)' }} onClick={toggleSidebar}>
            <Menu rotate={isExpanded ? '180deg' : '0deg'} />
          </Button>
        </div>

        <div className="hidden items-center gap-1 md:flex relative h-full">
          <div className="flex relative h-full">
            <button
              onClick={() => setActiveTab('sport')}
              className={`px-6 py-2 relative flex items-center gap-2 transition-colors`}
            >
              <Crown /> Sport
              {activeTab === 'sport' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('casino')}
              className={`px-6 py-2 relative flex items-center gap-2 transition-colors}`}
            >
              <span className="text-lg">🎮</span> Casino
              {activeTab === 'casino' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="h-9 w-60 rounded-full bg-background-secondary pl-3 text-navbar-foreground"
            style={{ paddingRight: '30px' }}
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`text-primary-foreground ${isRightExpanded ? "bg-background-secondary" : ""}`}
          onClick={toggleRightSidebar}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-4">
          <ClientSwitcher />
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-muted-foreground md:inline-block">Log In</span>
            <Button size="sm" className="rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

