"use client"

import Link from "next/link"
import { Book, LineChart, Palette, Gamepad2, Box, Megaphone, Bot, Bell, Shield, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export function Sidebar() {
  const { isOpen } = useSidebar()

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-grey-200 transform transition-transform duration-200 ease-in-out z-30",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-heading-4 text-grey-900 font-semibold mb-4">Categories</h2>
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Book className="h-5 w-5" />
              <span className="text-body-regular">How-to Guides</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <LineChart className="h-5 w-5" />
              <span className="text-body-regular">Trading</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Palette className="h-5 w-5" />
              <span className="text-body-regular">Design Templates</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Gamepad2 className="h-5 w-5" />
              <span className="text-body-regular">Game Assets</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Box className="h-5 w-5" />
              <span className="text-body-regular">SaaS Apps</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Megaphone className="h-5 w-5" />
              <span className="text-body-regular">Marketing Tools</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Bot className="h-5 w-5" />
              <span className="text-body-regular">Bots</span>
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-heading-4 text-grey-900 font-semibold mb-4">Settings</h2>
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Bell className="h-5 w-5" />
              <span className="text-body-regular">Notifications</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Shield className="h-5 w-5" />
              <span className="text-body-regular">Privacy</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-grey-600 hover:text-grey-900 px-3 py-2 rounded-lg hover:bg-grey-100"
            >
              <Lock className="h-5 w-5" />
              <span className="text-body-regular">Security</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}

