import Crown from "@/public/Icons/Crown"
import Ball from "@/public/Icons/Ball"

interface NavbarTabsProps {
    activeTab: 'sport' | 'casino'
    setActiveTab: (tab: 'sport' | 'casino') => void
}

export function NavbarTabs({ activeTab, setActiveTab }: NavbarTabsProps) {
    return (
        <div className="hidden items-center gap-1 min-[1080px]:flex relative h-full">
            <div className="flex relative h-full">
                <button
                    onClick={() => setActiveTab('sport')}
                    className={`px-6 py-2 relative flex items-center gap-2 transition-colors ${activeTab === 'sport' ? 'bg-background-secondary' : 'text-muted-foreground'}`}
                >
                    <Crown /> <span>Sport</span>
                    {activeTab === 'sport' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-t-full" style={{ background: 'var(--tab-active-gradient)' }} />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('casino')}
                    className={`px-6 py-2 relative flex items-center gap-2 text-secondary-foreground transition-colors ${activeTab === 'casino' ? 'bg-background-secondary' : 'text-muted-foreground'}`}
                >
                    <span className="text-lg"><Ball /></span> Casino
                    {activeTab === 'casino' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-t-full" style={{ background: 'var(--tab-active-gradient)' }} />
                    )}
                </button>
            </div>
        </div>
    )
} 