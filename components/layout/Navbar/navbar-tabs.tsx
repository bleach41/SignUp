import Crown from "@/public/Icons/Crown"
import Ball from "@/public/Icons/Ball"

interface NavbarTabsProps {
    activeTab: 'sport' | 'casino'
    setActiveTab: (tab: 'sport' | 'casino') => void
}

export function NavbarTabs({ activeTab, setActiveTab }: NavbarTabsProps) {
    return (
        <div className="hidden items-center gap-1 md:flex relative h-full">
            <div className="flex relative h-full">
                <button
                    onClick={() => setActiveTab('sport')}
                    className={`px-6 py-2 relative flex items-center gap-2 transition-colors ${activeTab === 'sport' ? 'bg-background-secondary' : 'text-muted-foreground'}`}
                >
                    <Crown /> Sport
                    {activeTab === 'sport' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('casino')}
                    className={`px-6 py-2 relative flex items-center gap-2 text-secondary-foreground hover:bg-secondary/90 transition-colors ${activeTab === 'casino' ? 'bg-background-secondary' : 'text-muted-foreground'}`}
                >
                    <span className="text-lg"><Ball /></span> Casino
                    {activeTab === 'casino' && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                </button>
            </div>
        </div>
    )
} 