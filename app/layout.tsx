import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider as NextThemeProvider } from "@/contexts/theme-provider"
import "./globals.css"

import { ThemeProvider } from "@/contexts/theme-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DirectCodes - Sign Up",
  description: "Create your DirectCodes account",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} xl:mx-60 mx-2 mt-8`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  )
}
