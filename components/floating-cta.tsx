"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, X } from "lucide-react"
import { QuickQuoteForm } from "./quick-quote-form"

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "tel:+13864798379"
  }

  const handleText = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "sms:+13864798379"
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button variant="cta" size="lg" className="rounded-full shadow-lg animate-bounce-slow" onClick={toggleOpen}>
        {isOpen ? <X className="h-4 w-4" /> : <Phone className="mr-2 h-4 w-4" />}
        {isOpen ? "Close" : "Get a Quote"}
      </Button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          {isMobile ? (
            <div className="flex flex-col p-4 space-y-2">
              <Button variant="outline" onClick={handleCall} className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Call (386) 479-8379
              </Button>
              <Button variant="outline" onClick={handleText} className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Text (386) 479-8379
              </Button>
            </div>
          ) : (
            <div className="p-4">
              <QuickQuoteForm onClose={() => setIsOpen(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

