"use client"
import { cn } from "@/lib/utils"

interface RightSidebarProps {
  isExpanded: boolean
}

export function RightSidebar({ isExpanded }: RightSidebarProps) {
  return (
    <aside
      className={cn(
        "h-[calc(100vh-64px)] flex-shrink-0 flex-col border-l border-border bg-background transition-all duration-300 fixed top-0 right-0 mt-16",
        isExpanded ? "w-80" : "w-0 overflow-hidden",
        "flex",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-border p-4">
          <h2 className="text-lg font-semibold text-primary-foreground">Chat</h2>
        </div>
        <div className="flex-1 overflow-auto p-4">{/* Chat messages will go here in the future */}</div>
        <div className="border-t border-border p-4">
          {/* Chat input will go here in the future */}
          <div className="h-10 rounded-full bg-background-secondary"></div>
        </div>
      </div>
    </aside>
  )
}

