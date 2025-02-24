"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SidebarProvider } from "./sidebar-context"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { LoadingScreen } from "./loading-screen"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (remove this in production and replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen bg-white">
          <Navbar />
          <Sidebar />
          <main className="pt-16">{children}</main>
        </div>
      )}
    </SidebarProvider>
  )
}

