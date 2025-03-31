import { Input } from "@/components/ui/input"
import Search from "@/public/Icons/Search"

export function NavbarSearch() {
    return (
        <div className="relative hidden md:block">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navbar-text" />
            <Input
                placeholder="Search"
                className="h-11 w-60 rounded-full bg-searchBackground pl-3"
                style={{ paddingRight: '30px', color: 'var(--navbar-text)' }}
            />
        </div>
    )
} 