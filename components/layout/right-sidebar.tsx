"use client"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"

interface RightSidebarProps {
  isExpanded: boolean
}

export function RightSidebar({ isExpanded }: RightSidebarProps) {
  return (
    <aside
      className={cn(
        "h-[calc(100vh-64px)] flex-shrink-0 flex-col transition-all duration-300 fixed top-0 right-0 mt-16 bg-background-secondary",
        isExpanded ? "w-80" : "w-0 overflow-hidden",
        "flex",
      )}
    >
      <div className="flex h-full flex-col m-6 rounded-3xl border-white"
        style={{ background: 'var(--navbar-background)', boxShadow: '0px 1px 1px 0px #3F4655 inset' }}
      >
        <div className="border-b border-border p-4">
          <h2 className="text-lg font-semibold text-secondary-foreground">Chat</h2>
        </div>
        <div className="flex-1 overflow-auto p-4">{/* Chat messages will go here in the future */}</div>
        <div className="border-t border-border/50 rounded-b-3xl p-1 bg-background">
          {/* Chat input will go here in the future */}
          <Input
            className="h-10 border-none rounded-full bg-background focus:border-none placeholder:text-navbar-text"
            placeholder="Escribe un mensaje..."
            style={{
              backgroundColor: 'var(--background)',
              color: 'var(--navbar-text)'
            }}
          />
        </div>
      </div>
    </aside>
  )
}

