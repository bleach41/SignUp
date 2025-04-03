import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/contexts/theme-context"
import { Toaster } from "@/components/ui/toaster"

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-primary",
})

export const metadata: Metadata = {
  title: "DirectCodes - Sign Up",
  description: "Create your DirectCodes account",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${jost.className} xl:mx-60 mx-2 mt-8`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  )
}
