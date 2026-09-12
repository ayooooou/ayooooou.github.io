"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function PortfolioBackLink() {
  const router = useRouter()

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    const viewTransitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => void
    }

    if (viewTransitionDocument.startViewTransition) {
      viewTransitionDocument.startViewTransition(() => router.push("/"))
      return
    }

    router.push("/")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to feed
    </button>
  )
}
