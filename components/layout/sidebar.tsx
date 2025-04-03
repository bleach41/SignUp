"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SidebarSocial } from "./Sidebar/sidebar-social";
import { SidebarContent } from "./Sidebar/sidebar-content";
import { LanguageSelector } from "./Sidebar/language-selector";
import { menuItems, socialIcons } from "@/constants/MenuItems";
import styles from "./sidebar.module.css";

interface SidebarProps {
  isExpanded: boolean;
}


export function Sidebar({ isExpanded }: SidebarProps) {
  const [activeCategories, setActiveCategories] = useState<
    Record<string, boolean>
  >({
    casino: true,
    sport: false,
    english: false,
  });

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const mainMenuItems = menuItems.slice(0, 4);
  const configItems = [
    LanguageSelector({
      isExpanded,
      isActive: activeCategories["english"],
      onToggle: () => toggleCategory("english"),
    }),
    ...menuItems.slice(4),
  ];

  return (
    <aside
      className={cn(
        "fixed top-[calc(1.57vw + 44.13px)] left-0 flex h-[calc(100vh-69px)] flex-col transition-all duration-300 overflow-hidden p-2",
        isExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed,
      )}
      style={{
        background: "var(--sidebar-background)",
        boxShadow: "var(--sidebar-shadow)",
      }}
    >

      {/* Contenido desplazable */}
      <SidebarContent
        menuItems={mainMenuItems}
        configItems={configItems}
        isExpanded={isExpanded}
        activeCategories={activeCategories}
        toggleCategory={toggleCategory}
      />

      {/* Footer con íconos sociales */}
      <SidebarSocial isExpanded={isExpanded} socialIcons={socialIcons} />
    </aside>
  );
}
