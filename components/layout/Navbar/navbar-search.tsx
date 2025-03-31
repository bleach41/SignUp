import { Input } from "@/components/ui/input"
import Search from "@/public/Icons/Search"

export function NavbarSearch() {
    return (
        <div className="relative hidden md:block">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                placeholder="Search"
                className="h-9 w-60 rounded-full bg-background-secondary pl-3 text-navbar-foreground"
                style={{ paddingRight: '30px' }}
            />
        </div>
    )
} 