import TelegramIcon from "@/public/Icons/Telegram";
import XIcon from "@/public/Icons/X";
import FacebookIcon from "@/public/Icons/Facebook";
import InstagramIcon from "@/public/Icons/Instagram";
import FavoriteIcon from "@/public/Icons/Favorite";
import RecentIcon from "@/public/Icons/Recent";
import SevenIcon from "@/public/Icons/Seven";
import Ball from "@/public/Icons/Ball";
import Earphone from "@/public/Icons/Earphone";
import {
  Zap,
  Dice1Icon as Dice,
  Trophy,
  Gift,
  Joystick,
  CircleDot,
  LayoutGrid,
  Spade,
  Coins,
  Shovel,
  Globe,
  TicketIcon as ScratchTicket,
  DicesIcon,
} from "lucide-react";
import EarphoneComponent from "@/public/Icons/EarphoneComponent";

export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  submenu?: MenuItem[];
  isBackground?: boolean;
  highlight?: boolean;
  badge?: number | string;
  isLanguage?: boolean;
  image?: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: <FavoriteIcon className="h-5 w-5 text-blue-400" />,
    label: "Favorites",
    highlight: true,
    badge: "5",
    image: "/Icons/Shield.png",
  },
  {
    icon: <RecentIcon className="h-5 w-5" />,
    label: "Recently Played",
    image: "/Icons/Pergamino.png",
    isBackground: true,
  },
  {
    icon: <SevenIcon className="h-5 w-5" />,
    label: "Casino",
    image: "/Icons/Casino.png",
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
    icon: <Ball className="h-5 w-5 text-gray-400" />,
    label: "Sport",
    image: "/Icons/Sport.png",
    submenu: [
      { icon: <Trophy className="h-4 w-4" />, label: "Football" },
      { icon: <Trophy className="h-4 w-4" />, label: "Basketball" },
      { icon: <Trophy className="h-4 w-4" />, label: "Tennis" },
      { icon: <Trophy className="h-4 w-4" />, label: "Baseball" },
      { icon: <Trophy className="h-4 w-4" />, label: "Hockey" },
    ],
  },
  {
    icon: <EarphoneComponent />,
    label: "Live Support",
    isLanguage: true,
  },
];

export const socialIcons = [
  {
    icon: (
      <div className="text-blue-500">
        <TelegramIcon />
      </div>
    ),
    bg: "radial-gradient(100% 100% at 50% 0%, rgba(40, 168, 234, 0.24) 0%, rgba(40, 168, 234, 0.14) 92.71%)",
    label: "Telegram",
  },
  {
    icon: (
      <div className="text-gray-200">
        <XIcon />
      </div>
    ),
    bg: "radial-gradient(100% 100% at 50% 0%, rgba(85, 187, 250, 0.24) 0%, rgba(85, 187, 250, 0.14) 92.71%)",
    label: "Twitter",
  },
  {
    icon: (
      <div className="text-blue-600">
        <FacebookIcon />
      </div>
    ),
    bg: "radial-gradient(100% 100% at 50% 0%, rgba(114, 137, 218, 0.24) 0%, rgba(114, 137, 218, 0.14) 92.71%)",
    label: "Facebook",
  },
  {
    icon: (
      <div className="text-pink-500">
        <InstagramIcon />
      </div>
    ),
    bg: "radial-gradient(100% 100% at 50% 0%, rgba(220, 66, 118, 0.24) 0%, rgba(220, 66, 118, 0.14) 92.71%)",
    label: "Instagram",
  },
];
