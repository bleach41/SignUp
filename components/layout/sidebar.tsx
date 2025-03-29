"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  ChevronRight,
  Gamepad2,
  Zap,
  Dice1Icon as Dice,
  Trophy,
  Gift,
  Ticket,
  Joystick,
  Heart,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface SidebarProps {
  isExpanded: boolean
}

interface MenuItem {
  icon: React.ReactNode
  label: string
  href?: string
  submenu?: MenuItem[]
  active?: boolean
}

export function Sidebar({ isExpanded }: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>("casino")

  const menuItems: MenuItem[] = [
    {
      icon: <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">🎮</div>,
      label: "Casino",
      active: true,
      submenu: [
        { icon: <Gamepad2 className="h-4 w-4" />, label: "Live Casino" },
        { icon: <Dice className="h-4 w-4" />, label: "Slots" },
        { icon: <Zap className="h-4 w-4" />, label: "Crash" },
        { icon: <Trophy className="h-4 w-4" />, label: "Sports" },
        { icon: <Gift className="h-4 w-4" />, label: "Lottery" },
        { icon: <Ticket className="h-4 w-4" />, label: "Bingo" },
        { icon: <Joystick className="h-4 w-4" />, label: "Poker" },
        { icon: <Heart className="h-4 w-4" />, label: "Fishing" },
        { icon: <Trophy className="h-4 w-4" />, label: "Asian Sports" },
        { icon: <Gamepad2 className="h-4 w-4" />, label: "Arcade" },
      ],
    },
    {
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-secondary text-primary-foreground">
          🏆
        </div>
      ),
      label: "Sport",
    },
    {
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-secondary text-primary-foreground">
          🇬🇧
        </div>
      ),
      label: "English",
    },
    {
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-secondary text-primary-foreground">
          <Headphones className="h-4 w-4" />
        </div>
      ),
      label: "Live Support",
    },
  ]

  const socialIcons = [
    { icon: <div className="text-blue-500">𝕏</div> },
    { icon: <div className="text-blue-600">f</div> },
    { icon: <div className="text-pink-500">📷</div> },
  ]

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  return (
    <aside
      className={cn(
        "h-full overflow-auto flex-shrink-0 flex-col border-r border-border bg-background transition-all duration-300",
        isExpanded ? "w-64" : "w-16",
        "flex",
      )}
    >
      <div className="flex flex-col gap-1 p-2">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            {item.submenu ? (
              <Collapsible open={isExpanded && activeCategory === "casino"} disabled={!isExpanded}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex w-full justify-start gap-3 rounded-lg px-3 py-2 text-primary-foreground hover:bg-background-secondary",
                      item.active && "bg-background-secondary",
                    )}
                    onClick={() => toggleCategory("casino")}
                  >
                    {item.icon}
                    {isExpanded && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        {activeCategory === "casino" ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      className="flex w-full justify-start gap-3 rounded-lg px-3 py-2 text-primary-foreground hover:bg-background-secondary"
                    >
                      {subItem.icon}
                      <span className="flex-1 text-left text-sm">{subItem.label}</span>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant="ghost"
                className="flex w-full justify-start gap-3 rounded-lg px-3 py-2 text-primary-foreground hover:bg-background-secondary"
              >
                {item.icon}
                {isExpanded && <span className="flex-1 text-left">{item.label}</span>}
              </Button>
            )}
          </div>
        ))}
      </div>

      {isExpanded && (
        <div className="mt-auto flex justify-center gap-4 p-4">
          {socialIcons.map((social, index) => (
            <Button key={index} variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background-secondary">
              {social.icon}
            </Button>
          ))}
        </div>
      )}
    </aside>
  )
}

