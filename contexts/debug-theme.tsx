"use client"

import { useTheme } from "@/contexts/theme-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DebugTheme() {
  const { theme, isDynamicTheme, dynamicTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground"
        onClick={() => setIsOpen(true)}
      >
        Debug Theme
      </Button>
    )
  }

  // Obtener todas las variables CSS
  const getCssVariables = () => {
    const styles = getComputedStyle(document.documentElement)
    const variables: Record<string, string> = {}

    // Variables específicas que queremos verificar
    const varNames = [
      "--background",
      "--background-secondary",
      "--foreground",
      "--navbar-background",
      "--navbar-foreground",
      "--navbar-border",
      "--sidebar-background",
      "--sidebar-foreground",
      "--sidebar-border",
      "--sidebar-hover-background",
      "--sidebar-active-background",
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--muted",
      "--muted-foreground",
      "--border",
    ]

    varNames.forEach((name) => {
      variables[name] = styles.getPropertyValue(name)
    })

    return variables
  }

  const cssVars = getCssVariables()

  return (
    <div className="fixed bottom-0 right-0 z-50 w-96 max-h-[80vh] overflow-auto bg-background border border-border rounded-tl-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Theme Debug</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </div>

      <div className="mb-4">
        <p>
          <strong>Current Theme:</strong> {theme}
        </p>
        <p>
          <strong>Is Dynamic:</strong> {isDynamicTheme ? "Yes" : "No"}
        </p>
        {isDynamicTheme && dynamicTheme && (
          <p>
            <strong>Dynamic Theme:</strong> {dynamicTheme.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">CSS Variables:</h4>
        <div className="space-y-1 text-xs">
          {Object.entries(cssVars).map(([name, value]) => (
            <div key={name} className="flex justify-between">
              <span>{name}:</span>
              <span className="font-mono">{value || "not set"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold mb-2">Test Elements:</h4>
        <div className="p-2 bg-background border border-border rounded">bg-background</div>
        <div className="p-2 bg-background-secondary border border-border rounded">bg-background-secondary</div>
        <div className="p-2 bg-navbar-background border border-border rounded">bg-navbar-background</div>
        <div className="p-2 bg-sidebar-background border border-border rounded">bg-sidebar-background</div>
        <div className="p-2 bg-primary text-primary-foreground border border-border rounded">bg-primary</div>
        <div className="p-2 bg-secondary text-secondary-foreground border border-border rounded">bg-secondary</div>
      </div>
    </div>
  )
}

