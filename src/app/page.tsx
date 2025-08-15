import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Lock, Server } from "lucide-react"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await auth()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="text-xl font-bold">Memoer</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Open Source Memory Management
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Built with Next.js 15, Auth.js v5, Prisma, and PostgreSQL. 
            Self-hostable, secure, and completely open source.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/auth/signup">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/your-org/memoer" target="_blank">
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 mb-2" />
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>
                  Latest App Router with server components and streaming
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 mb-2" />
                <CardTitle>Auth.js v5</CardTitle>
                <CardDescription>
                  Secure authentication with multiple providers
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 mb-2" />
                <CardTitle>Prisma ORM</CardTitle>
                <CardDescription>
                  Type-safe database access with PostgreSQL
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 mb-2" />
                <CardTitle>Self-Hosted</CardTitle>
                <CardDescription>
                  Deploy anywhere, own your data completely
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5" />
            <span className="font-semibold">Memoer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Open source memory management platform
          </p>
        </div>
      </footer>
    </div>
  )
}
