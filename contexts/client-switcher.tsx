// contexts/client-switcher.tsx
"use client";

import { useTheme } from "@/contexts/theme-provider";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function ClientSwitcher() {
  const { loadDynamicTheme, isDynamicTheme, dynamicTheme, theme, setTheme } =
    useTheme();

  const handleClientSelect = async (clientId: string) => {
    await loadDynamicTheme(clientId);
  };

  const handleResetToDefault = () => {
    setTheme("lucky-wolf");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Building2 className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="rounded-2xl"
        style={{
          background: "var(--navbar-background)",
          border: "1px solid var(--border)",
          boxShadow: "0px 1px 1px 0px #3F4655 inset",
        }}
      >
        <DropdownMenuLabel className="text-sm text-gray-400 px-2 py-1.5">
          Seleccionar Cliente
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleClientSelect("client-1")}>
          <span
            className={`mr-2 h-2 w-2 rounded-full bg-sky-400 ${
              isDynamicTheme && dynamicTheme?.id === "client-1"
                ? "ring-2 ring-sky-400 ring-offset-2"
                : ""
            }`}
          ></span>
          <span>Cliente 1 - Ocean Blue</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClientSelect("client-2")}>
          <span
            className={`mr-2 h-2 w-2 rounded-full bg-orange-400 ${
              isDynamicTheme && dynamicTheme?.id === "client-2"
                ? "ring-2 ring-orange-400 ring-offset-2"
                : ""
            }`}
          ></span>
          <span>Cliente 2 - Sunset Orange</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleResetToDefault}>
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-400"></span>
          <span>Volver a tema predeterminado</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
