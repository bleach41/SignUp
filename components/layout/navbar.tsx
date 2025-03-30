"use client"

import { MessageCircle } from "lucide-react"
import Search from "@/public/Icons/Search"
import Menu from "@/public/Icons/Menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/contexts/theme-provider"
import { ClientSwitcher } from "@/contexts/client-switcher"
import Crown from "@/public/Icons/Crown"
interface NavbarProps {
  isExpanded?: boolean
  toggleSidebar: () => void
  isRightExpanded: boolean
  toggleRightSidebar: () => void
}

export function Navbar({ isExpanded, toggleSidebar, isRightExpanded, toggleRightSidebar }: NavbarProps) {
  const { isDynamicTheme, dynamicTheme } = useTheme()

  return (
    <header className="flex px-6 h-16 w-full items-center justify-between" style={{ background: 'var(--navbar-background)', boxShadow: 'var(--navbar-shadow)' }}>
      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-bold text-navbar-foreground">
            <span className="text-primary">🔥</span>
            {isDynamicTheme && dynamicTheme ? dynamicTheme.name.toUpperCase() : "LUCKY WOLF"}
          </span>
          <Button variant="ghost" size="icon" className="rounded-xl shadow-[0px_2px_0px_#3F4655_inset]" style={{ background: 'var(--navbar-background-secondary)' }} onClick={toggleSidebar}>
            <Menu rotate={isExpanded ? '180deg' : '0deg'} />
          </Button>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="rounded-full bg-primary/10 px-4 text-navbar-foreground">
            <span className="mr-1 text-primary"><Crown /></span> Sport
          </Button>
          <Button variant="ghost" className="rounded-full bg-background-secondary px-4 text-navbar-foreground">
            <span className="mr-1">🎮</span> Casino
          </Button>
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

