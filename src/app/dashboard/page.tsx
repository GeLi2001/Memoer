import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your memories and notes.">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Memory
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="brain" />
          <EmptyPlaceholder.Title>No memories created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any memories yet. Start creating your first memory.
          </EmptyPlaceholder.Description>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Memory
          </Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
