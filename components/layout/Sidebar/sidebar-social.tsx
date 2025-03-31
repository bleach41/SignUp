import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThreeCircle from "@/public/Icons/ThreeCircle"

interface SocialIcon {
    icon: React.ReactNode
    bg: string
    label: string
}

interface SidebarSocialProps {
    isExpanded: boolean
    socialIcons: SocialIcon[]
}

export function SidebarSocial({ isExpanded, socialIcons }: SidebarSocialProps) {
    return (
        <div className="mt-auto w-full p-3">
            <div className="flex justify-center gap-3">
                {isExpanded ? (
                    socialIcons.map((social, index) => (
                        <Button key={index} variant="ghost" size="icon" className={cn("h-11 w-11 rounded-xl", social.bg)}>
                            {social.icon}
                        </Button>
                    ))
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md">
                                <ThreeCircle />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="right"
                            align="start"
                            className="min-w-[120px] p-1 rounded-2xl"
                            style={{
                                background: 'var(--navbar-background)',
                                border: '1px solid var(--border)',
                                boxShadow: '0px 1px 1px 0px #3F4655 inset'
                            }}
                        >
                            {socialIcons.map((social, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    className="flex items-center gap-2 px-2 py-1.5 focus:bg-gray-800 rounded-sm"
                                >
                                    <div className={cn("flex h-6 w-6 items-center justify-center rounded-md", social.bg)}>
                                        {social.icon}
                                    </div>
                                    <span className="text-sm text-gray-200">{social.label}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </div>
    )
} 