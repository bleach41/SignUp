"use client"

import { Search, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/contexts/theme-provider"
import { ClientSwitcher } from "@/contexts/client-switcher"
interface NavbarProps {
  isExpanded?: boolean
  toggleSidebar: () => void
  isRightExpanded: boolean
  toggleRightSidebar: () => void
}

export function Navbar({ toggleSidebar, isRightExpanded, toggleRightSidebar }: NavbarProps) {
  const { isDynamicTheme, dynamicTheme } = useTheme()

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-navbar-border bg-navbar-background px-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-navbar-foreground" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-bold text-navbar-foreground">
            <span className="text-primary">🔥</span>
            {isDynamicTheme && dynamicTheme ? dynamicTheme.name.toUpperCase() : "LUCKY WOLF"}
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background-secondary text-xs text-muted-foreground">
            VIP
          </span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="rounded-full bg-primary/10 px-4 text-navbar-foreground">
            <span className="mr-1 text-primary">🏆</span> Sport
          </Button>
          <Button variant="ghost" className="rounded-full bg-background-secondary px-4 text-navbar-foreground">
            <span className="mr-1">🎮</span> Casino
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="h-9 w-64 rounded-full bg-background-secondary pl-9 text-navbar-foreground"
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

