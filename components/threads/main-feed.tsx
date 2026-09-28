"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PostCard } from "./post-card"

// ============================
// 在這裡修改貼文內容
// ============================
const posts = [
  {
    id: "1",
    user: {
      username: "a.uuu.0",        // <-- 修改使用者名稱
      avatar: "/avatar.gif",
    },
    // content: "在這裡輸入你的貼文內文",  // <-- 純文字貼文用這個
    rotatingContent: {
      prefix: "Hello, I'm from ",
      suffix: "",
      texts: [
        "Taiwan",
        "CGSH",
        "CKCSC",
        "NYCU CE"
      ],
    },
    // image: "",                      // <-- 取消註解並填入圖片網址來加入圖片
    // video: true,                    // <-- 如果是影片貼文，取消註解
    timeAgo: "2026-9-4",                  // <-- 修改發文時間
    likes: 128,                        // <-- 修改愛心數
    comments: 5,                       // <-- 修改留言數
    reposts: 3,                        // <-- 修改轉發數
    shares: 12,                        // <-- 修改分享數
    // repostedBy: "someone",          // <-- 取消註解來顯示「已轉發」
  },
]

export function MainFeed() {
  const router = useRouter()
  const [animateOnMount, setAnimateOnMount] = useState(false)

  useEffect(() => {
    router.prefetch("/portfolio")

    const shouldAnimate = new URLSearchParams(window.location.search).get("animate") === "1"

    if (shouldAnimate) {
      setAnimateOnMount(true)
      window.history.replaceState(window.history.state, "", "/")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
      <main className="w-full sm:w-[450px] border border-border rounded-2xl overflow-visible bg-[#181818]">
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} animateOnMount={animateOnMount} />
          ))}
        </div>
      </main>
    </div>
  )
}
