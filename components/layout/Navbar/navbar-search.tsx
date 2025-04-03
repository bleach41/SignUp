import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ChatIcon from "@/public/Icons/Chat"
import Search from "@/public/Icons/Search"

interface NavbarSearchProps {
    isRightExpanded: boolean
    toggleRightSidebar: () => void
}

export function NavbarSearch({ isRightExpanded, toggleRightSidebar }: NavbarSearchProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="relative hidden min-[1080px]:block">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navbar-text" />
                <Input
                    placeholder="Search"
                    className="h-11 w-60 rounded-full bg-searchBackground pl-3 placeholder:text-navbar-text"
                    style={{
                        paddingRight: '30px', color: 'var(--navbar-text)',
                    }}

                />
            </div>
            <Button
                variant="ghost"
                size="icon"
                className={` hidden lg:flex text-secondary-foreground rounded-full ${isRightExpanded ? "bg-background-secondary" : ""}`}
                onClick={toggleRightSidebar}
            >
                <ChatIcon className="h-5 w-5" />
            </Button>
        </div>
    )
} 