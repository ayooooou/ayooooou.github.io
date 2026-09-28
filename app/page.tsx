"use client"

import { MainFeed } from "@/components/threads/main-feed"
import { useEffect, useState } from "react"

export default function ThreadsPage() {
  const [isReturningFromPortfolio, setIsReturningFromPortfolio] = useState(false)

  useEffect(() => {
    if (document.documentElement.dataset.feedReturn !== "true") return

    delete document.documentElement.dataset.feedReturn
    setIsReturningFromPortfolio(true)
  }, [])

  return (
    <div className={`${isReturningFromPortfolio ? "feed-page-enter" : ""} flex min-h-screen w-full justify-center bg-background`}>
      <MainFeed />
    </div>
  )
}
