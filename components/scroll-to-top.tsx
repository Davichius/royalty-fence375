"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    
    const throttledScroll = throttle(handleScroll, 100)
    window.addEventListener("scroll", throttledScroll)
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 rounded-full shadow-lg transition-all",
        "focus:ring-2 focus:ring-primary focus:ring-offset-2", // Added focus styles
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      )}
      onClick={scrollToTop}
      onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
      aria-label="Scroll to top"
      role="button"
      tabIndex={0}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

// Helper function
function throttle(fn: () => void, delay: number) {
  let lastCall = 0
  return () => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn()
    }
  }
}