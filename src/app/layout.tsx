import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "@/components/session-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Memoer - Open Source Memory Management",
  description: "An open-source memory management platform built with Next.js, Auth.js, Prisma, and PostgreSQL",
  keywords: ["memory", "notes", "open-source", "nextjs", "prisma", "postgresql"],
  authors: [{ name: "Memoer Team" }],
  creator: "Memoer",
  publisher: "Memoer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </div>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
