import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const documents = [
  ["課程學習成果", "課程中的作品、學習過程與成果整理。", "課程學習成果.pdf", "課程學習成果.pdf"],
  ["多元表現", "課外活動、學習經驗與個人發展的完整整理。", "多元表現.pdf", "多元表現封面.pdf"],
  ["競賽與證明", "競賽經歷與優良表現相關證明文件。", "競賽表現和優良表現證明-2.pdf", "競賽表現和優良表現證明-2.pdf"],
] as const

export default function LearningPortfolioPage() {
  return (
    <main className="portfolio-page-enter h-screen overflow-y-auto touch-auto bg-background px-6 py-12 text-foreground md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-12 max-w-2xl">
          <p className="text-sm text-muted-foreground">Portfolio / Learning</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">學習歷程</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            課程成果、多元表現，以及競賽與優良表現的整理。點擊任一文件即可查看完整 PDF。
          </p>
        </header>

        <section className="mt-16">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm text-muted-foreground">Documents</p>
            </div>
            <span className="text-sm text-muted-foreground">{documents.length} documents</span>
          </div>

          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map(([title, description, file, previewFile]) => {
              const pdfUrl = `/portfolio/data/${encodeURIComponent(file)}`
              const previewUrl = `/portfolio/data/${encodeURIComponent(previewFile)}`

              return (
                <Link key={file} href={pdfUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative aspect-[3/4] min-w-0 overflow-hidden border border-border bg-muted shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <iframe
                      title={`${title} PDF 預覽`}
                      src={`${previewUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                      className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
                    />
                    <div className="absolute inset-0 bg-transparent transition-colors group-hover:bg-foreground/5" />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Learning</p>
                  <h3 className="mt-2 text-xl font-medium group-hover:underline group-hover:underline-offset-4">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  <span className="mt-3 inline-block text-sm text-foreground">View full PDF →</span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}