"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"

export function PortfolioBackLink() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    router.prefetch("/")
  }, [router])

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (isNavigating) return

    setIsNavigating(true)
    document.documentElement.dataset.feedReturn = "true"
    router.push("/")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isNavigating}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to feed
    </button>
  )
}
