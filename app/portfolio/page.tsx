import Link from "next/link"
import { ArrowUpRight, FileText, FolderOpen } from "lucide-react"
import { PortfolioBackLink } from "@/components/portfolio/back-link"

const folders = [
  {
    title: "程式專題",
    description: "三個完整的製作與學習歷程，包含系統設計、實作過程與成果。",
    count: "3 projects",
    href: "/portfolio/projects",
    type: "folder",
  },
  {
    title: "學習歷程",
    description: "課程學習成果、多元表現，以及競賽與優良表現證明。",
    count: "3 documents",
    href: "/portfolio/learning",
    type: "folder",
  },
] as const

export default function PortfolioPage() {
  return (
    <main className="portfolio-page-enter h-screen overflow-y-auto touch-auto bg-background px-6 py-12 text-foreground md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PortfolioBackLink />

        <header className="mt-12 max-w-2xl">
          <p className="text-sm text-muted-foreground">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">作品集</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            依照作品類型整理的個人作品、學習歷程與相關文件。
          </p>
        </header>

        <section className="mt-16">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm text-muted-foreground">Folders</p>
              <h2 className="mt-1 text-2xl font-medium">作品分類</h2>
            </div>
            <span className="text-sm text-muted-foreground">{folders.length} folders</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {folders.map((folder) => {
              const isFolder = folder.type === "folder"

              return (
                <Link
                  key={folder.title}
                  href={folder.href}
                  target={isFolder ? undefined : "_blank"}
                  rel={isFolder ? undefined : "noopener noreferrer"}
                  className="group border border-border p-5 transition-colors hover:border-foreground/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    {isFolder ? (
                      <FolderOpen className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    ) : (
                      <FileText className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    )}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-12 text-2xl font-medium group-hover:underline group-hover:underline-offset-4">{folder.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{folder.description}</p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{folder.count}</p>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}