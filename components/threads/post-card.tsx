"use client"

import { MoreHorizontal, Volume2 } from "lucide-react"
import { IconBrandInstagram, IconBrandDiscord, IconBrandGithub, IconMail, IconBrandYoutube } from "@tabler/icons-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RotatingText } from "./rotating-text"

interface PostCardProps {
  post: {
    id: string
    user: {
      username: string
      avatar: string
      verified?: boolean
    }
    content?: string
    rotatingContent?: {
      prefix?: string
      suffix?: string
      texts: string[]
    }
    image?: string
    video?: boolean
    timeAgo: string
    likes: number
    comments: number
    reposts: number
    shares: number
    repostedBy?: string
  }
}

function formatNumber(num: number): string {
  if (num >= 10000) {
    return `${(num / 10000).toFixed(0)}萬`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`.replace(".0K", "K")
  }
  return num.toString()
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-b border-border px-3 py-2 md:px-4 md:py-3">
      <div className="flex gap-2 md:gap-3">
        <div className="flex flex-col items-center">
          <Avatar className="h-7 w-7 md:h-9 md:w-9">
            <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.username} loading="eager" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="mt-2 flex-1 w-0.5 bg-border" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground md:text-base">{post.user.username}</span>
              <svg className="h-3 w-3 md:h-4 md:w-4 -translate-y-0.5" viewBox="0 0 40 40" fill="#0095F6" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
              </svg>
              <span className="text-xs md:text-sm text-muted-foreground">{post.timeAgo}</span>
            </div>
            <button className="hover:text-foreground transition-colors text-muted-foreground">
              <MoreHorizontal className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          {post.rotatingContent && (
            <div className="mt-0.5 md:mt-1">
              <RotatingText
                prefix={post.rotatingContent.prefix}
                suffix={post.rotatingContent.suffix}
                texts={post.rotatingContent.texts}
              />
            </div>
          )}

          {post.content && !post.rotatingContent && (
            <p className="mt-0.5 text-sm text-foreground whitespace-pre-wrap md:mt-1 md:text-base">{post.content}</p>
          )}

          {post.image && (
            <div className="mt-2 relative overflow-hidden rounded-lg md:mt-3">
              <img
                src={post.image || "/placeholder.svg"}
                alt="Post content"
                className="w-full max-h-[350px] object-cover md:max-h-[500px]"
              />
              {post.video && (
                <button className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                  <Volume2 className="h-4 w-4 text-foreground" />
                </button>
              )}
            </div>
          )}

          <div className="ml-0 mt-0 flex items-center gap-0.5 md:ml-0 md:mt-0 md:gap-1">
            <a
              href="https://discordapp.com/users/444760354908536834"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full pl-0 pr-1.5 py-1.5 text-muted-foreground transition-colors duration-300 md:py-2 md:pr-2 hover:text-[#5865F2]"
            >
              <IconBrandDiscord className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://github.com/ayooooou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full p-1.5 text-muted-foreground transition-colors duration-300 md:p-2 hover:text-foreground"
            >
              <IconBrandGithub className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://instagram.com/a.uuu.0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full p-1.5 transition-colors duration-300 md:p-2 text-muted-foreground hover:text-[#FFB366]"
            >
              <IconBrandInstagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="mailto:yoyokuo1129@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full p-1.5 text-muted-foreground transition-colors duration-300 md:p-2 hover:text-[#FFD54F]"
            >
              <IconMail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://youtube.com/@Y0Y0_au"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full p-1.5 text-muted-foreground transition-colors duration-300 md:p-2 hover:text-[#FF4D00B7]"
            >
              <IconBrandYoutube className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>


        </div>
      </div>
    </article>
  )
}
