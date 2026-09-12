import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = [
  ["投籃動作檢測系統", "以電腦視覺進行投籃動作偵測的專題紀錄與學習反思。", "投籃偵測 學習歷程.pdf"],
  ["APCS 程式識讀練習系統", "協助練習程式閱讀與理解的系統設計與實作紀錄。", "APCS程式識讀練習系統-2.pdf"],
  ["捷運大富翁", "以台北捷運路線為主題的遊戲作品與製作成果。", "捷運大富翁-2.pdf"],
] as const

export default function ProjectsPage() {
  return (
    <main className="h-screen overflow-y-auto touch-auto bg-background px-6 py-12 text-foreground md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-12 max-w-2xl">
          <p className="text-sm text-muted-foreground">Portfolio / Projects</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">程式專題</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            三個收錄在多元表現中的專題作品。點擊任一作品即可查看完整 PDF。
          </p>
        </header>

        <section className="mt-16">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <span className="text-sm text-muted-foreground">{projects.length} projects</span>
          </div>

          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(([title, description, file]) => {
              const pdfUrl = `/portfolio/data/${encodeURIComponent(file)}`

              return (
                <Link key={file} href={pdfUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative aspect-[3/4] overflow-hidden border border-border bg-muted shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <iframe
                      title={`${title} PDF 預覽`}
                      src={`${pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                      className="pointer-events-none h-[calc(100%+2px)] w-[calc(100%+2px)] origin-top-left scale-[1.01] bg-white"
                    />
                    <div className="absolute inset-0 bg-transparent transition-colors group-hover:bg-foreground/5" />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Project</p>
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