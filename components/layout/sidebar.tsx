"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Star,
  Clock,
  Gamepad2,
  Zap,
  Dice1Icon as Dice,
  Trophy,
  Gift,
  Joystick,
  Headphones,
  CircleDot,
  LayoutGrid,
  Spade,
  Coins,
  Shovel,
  Globe,
  TicketIcon as ScratchTicket,
  DicesIcon,
} from "lucide-react"
import { SidebarMenuItem } from "./Sidebar/sidebar-menu-item"
import { SidebarSocial } from "./Sidebar/sidebar-social"
import TelegramIcon from "@/public/Icons/Telegram"
import XIcon from "@/public/Icons/X"
import FacebookIcon from "@/public/Icons/Facebook"
import InstagramIcon from "@/public/Icons/Instagram"
import FavoriteIcon from "@/public/Icons/Favorite"
import RecentIcon from "@/public/Icons/Recent"
import SevenIcon from "@/public/Icons/Seven"
interface SidebarProps {
  isExpanded: boolean
}

interface MenuItem {
  icon: React.ReactNode
  label: string
  href?: string
  submenu?: MenuItem[]
  active?: boolean
  isBackground?: boolean
  highlight?: boolean
  badge?: number | string
}

export function Sidebar({ isExpanded }: SidebarProps) {
  const [activeCategories, setActiveCategories] = useState<Record<string, boolean>>({
    casino: true,
    sport: false,
    english: false,
  })

  const menuItems: MenuItem[] = [
    {
      icon: <FavoriteIcon className="h-5 w-5 text-blue-400" />,
      label: "Favorites",
      highlight: true,
      active: true,
      badge: "5",
    },
    {
      icon: <RecentIcon className="h-5 w-5" />,
      label: "Recently Played",
      isBackground: true,
    },
    {
      icon: <SevenIcon className="h-5 w-5" />,
      label: "Casino",
      active: true,
      submenu: [
        { icon: <DicesIcon className="h-4 w-4" />, label: "Live Casino" },
        { icon: <Dice className="h-4 w-4" />, label: "Slots" },
        { icon: <Zap className="h-4 w-4" />, label: "Crash" },
        { icon: <LayoutGrid className="h-4 w-4" />, label: "Casual" },
        { icon: <DicesIcon className="h-4 w-4" />, label: "Craps" },
        { icon: <Spade className="h-4 w-4" />, label: "Cards" },
        { icon: <Gift className="h-4 w-4" />, label: "Lottery" },
        { icon: <CircleDot className="h-4 w-4" />, label: "Roulette" },
        { icon: <Coins className="h-4 w-4" />, label: "Mines" },
        { icon: <Joystick className="h-4 w-4" />, label: "Poker" },
        { icon: <Shovel className="h-4 w-4" />, label: "Fishing" },
        { icon: <Globe className="h-4 w-4" />, label: "Virtual Sports" },
        { icon: <ScratchTicket className="h-4 w-4" />, label: "Scratch" },
      ],
    },
    {
      icon: <Trophy className="h-5 w-5 text-gray-400" />,
      label: "Sport",
      submenu: [
        { icon: <Trophy className="h-4 w-4" />, label: "Football" },
        { icon: <Trophy className="h-4 w-4" />, label: "Basketball" },
        { icon: <Trophy className="h-4 w-4" />, label: "Tennis" },
        { icon: <Trophy className="h-4 w-4" />, label: "Baseball" },
        { icon: <Trophy className="h-4 w-4" />, label: "Hockey" },
      ],
    },
    {
      icon: (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-background-secondary text-sidebar-foreground">
          🇬🇧
        </div>
      ),
      label: "English",
      submenu: [
        { icon: <div>🇬🇧</div>, label: "English" },
        { icon: <div>🇪🇸</div>, label: "Español" },
        { icon: <div>🇫🇷</div>, label: "Français" },
        { icon: <div>🇩🇪</div>, label: "Deutsch" },
        { icon: <div>🇮🇹</div>, label: "Italiano" },
      ],
    },
    {
      icon: <Headphones className="h-5 w-5 text-gray-400" />,
      label: "Live Support",
    },
  ]

  const socialIcons = [
    { icon: <div className="text-blue-500"><TelegramIcon /></div>, bg: "bg-[radial-gradient(100%_100%_at_50%_0%,rgba(40,168,234,0.24)_0%,rgba(40,168,234,0.14)_92.71%)]", label: "Telegram" },
    { icon: <div className="text-gray-200"><XIcon /></div>, bg: "bg-[radial-gradient(100%_100%_at_50%_0%,rgba(85,187,250,0.24)_0%,rgba(85,187,250,0.14)_92.71%)]", label: "Twitter" },
    { icon: <div className="text-blue-600"><FacebookIcon /></div>, bg: "bg-[radial-gradient(100%_100%_at_50%_0%,rgba(114,137,218,0.24)_0%,rgba(114,137,218,0.14)_92.71%)]", label: "Facebook" },
    { icon: <div className="text-pink-500"><InstagramIcon /></div>, bg: "bg-[radial-gradient(100%_100%_at_50%_0%,rgba(220,66,118,0.24)_0%,rgba(220,66,118,0.14)_92.71%)]", label: "Instagram" },
  ]

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <aside
      className={cn(
        "fixed top-[76px] left-0 flex h-[calc(100vh-76px)] flex-col transition-all duration-300 overflow-hidden p-3",
        isExpanded ? "w-64" : "w-20",
      )}
      style={{ background: "var(--sidebar-background)", boxShadow: "var(--sidebar-shadow)" }}
    >
      {/* Logo section - only visible when collapsed */}
      {!isExpanded && (
        <div className="flex items-center justify-center py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
            👑
          </div>
        </div>
      )}

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="flex w-full flex-col gap-2 p-2 " >
          {menuItems.map((item, index) => (
            <div key={index} className="w-full mb-1" >
              <SidebarMenuItem
                item={item}
                isExpanded={isExpanded}
                isActive={activeCategories[item.label.toLowerCase()]}
                onToggle={() => toggleCategory(item.label.toLowerCase())}

              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer with social icons */}
      <SidebarSocial isExpanded={isExpanded} socialIcons={socialIcons} />
    </aside>
  )
}

