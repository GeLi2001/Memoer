"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Brain } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Brain className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Memoer
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/memories"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/memories") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Memories
        </Link>
      </nav>
    </div>
  )
}
