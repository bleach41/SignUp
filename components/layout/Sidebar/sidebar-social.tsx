import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
        <div className="mt-auto w-full border-t border-sidebar-border/30 p-3">
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
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-gray-800">
                                <div className="flex items-center justify-center">
                                    <div className="flex gap-[2px]">
                                        <div className="h-[3px] w-[3px] rounded-full bg-gray-400"></div>
                                        <div className="h-[3px] w-[3px] rounded-full bg-gray-400"></div>
                                        <div className="h-[3px] w-[3px] rounded-full bg-gray-400"></div>
                                    </div>
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="min-w-[120px] p-1 bg-gray-900 border-gray-800">
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