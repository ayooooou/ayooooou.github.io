"use client"

import { useState, useEffect, useMemo, useRef } from "react"

interface RotatingTextProps {
  prefix?: string
  suffix?: string
  texts: string[]
  interval?: number
}

function renderBoldSegments(text: string) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g)
  return segments.map((segment, index) => {
    const isBold = segment.startsWith("**") && segment.endsWith("**")
    const content = isBold ? segment.slice(2, -2) : segment
    return isBold ? <strong key={`${index}-${content}`}>{content}</strong> : content
  })
}

function renderWithLineBreaks(text?: string) {
  if (!text) return null
  const parts = text.split(/<br\s*\/?\s*>|\n/gi)
  return parts.map((part, index) => (
    <span key={`${index}-${part}`}>
      {renderBoldSegments(part)}
      {index < parts.length - 1 ? <br /> : null}
    </span>
  ))
}

export function RotatingText({ prefix, suffix, texts, interval = 3800 }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const indexRef = useRef(0)
  const animationDuration = 400
  const longestText = useMemo(() => {
    return texts.reduce((longest, current) => (current.length > longest.length ? current : longest), "")
  }, [texts])

  useEffect(() => {
    if (texts.length <= 1) {
      return
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      const current = indexRef.current
      const next = (current + 1) % texts.length

      setPrevIndex(current)
      setIndex(next)
      indexRef.current = next
      setIsAnimating(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false)
      }, animationDuration)
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [texts.length, interval])

  return (
    <p className="text-sm text-foreground md:text-base leading-normal">
      <span className="inline-block">
        {renderWithLineBreaks(prefix)}
        <span
          className="relative inline-flex align-baseline overflow-hidden ml-0.5"
          style={{ height: "1.2em", lineHeight: "1.2em", verticalAlign: "baseline" }}
        >
          <span className="invisible whitespace-nowrap">
            {longestText || texts[index]}
          </span>
          {isAnimating ? (
            <span
              key={`exit-${prevIndex}`}
              className="absolute left-0 top-0 inline-block whitespace-nowrap"
              style={{
                animation: `rotate-text-exit ${animationDuration}ms ease-in-out forwards`,
              }}
            >
              {texts[prevIndex]}
            </span>
          ) : null}
          <span
            key={`enter-${index}`}
            className="absolute left-0 top-0 inline-block whitespace-nowrap"
            style={{
              animation: isAnimating
                ? `rotate-text-enter ${animationDuration}ms ease-in-out forwards`
                : "none",
            }}
          >
            {texts[index]}
          </span>
        </span>
        {renderWithLineBreaks(suffix)}
      </span>
    </p>
  )
}
