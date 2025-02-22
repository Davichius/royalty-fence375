"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Phone, ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const services = [
    { name: "Chain-Link Fence", href: "/services/chain-link" },
    { name: "Vinyl Fence", href: "/services/vinyl" },
    { name: "Aluminum Fence", href: "/services/aluminum" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/RoyaltyFence/RoyaltyFenceNewLogo-x8tQ373qeMO5i4Enr6ZbwTGPUSTVdx.png"
            alt="Royalty Fence Logo"
            width={600}
            height={200}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <div className="relative group">
            <button
              className="nav-link flex items-center gap-1"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              aria-expanded={isServicesOpen}
            >
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg bg-white border border-gray-100"
                >
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Open menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Phone Button */}
        <Button variant="cta" asChild className="hidden md:flex shadow-lg">
          <Link href="tel:+13864798379" className="gap-2">
            <Phone className="w-4 h-4" /> (386) 479-8379
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-white border-b"
          >
            <div className="container mx-auto px-4 py-4">
              <Link href="/" className="mobile-nav-link">
                Home
              </Link>

              <div className="pt-2">
                <button
                  className="mobile-nav-link flex items-center justify-between w-full"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services{" "}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4">
                    {services.map((service) => (
                      <Link key={service.href} href={service.href} className="mobile-nav-link block py-2 text-gray-600">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" className="mobile-nav-link">
                Contact
              </Link>

              <Button variant="cta" asChild className="w-full mt-4">
                <Link href="tel:+13864798379" className="gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// Add these to your CSS or Tailwind layer
const navLinkClasses = "text-gray-600 hover:text-primary transition-colors font-medium"
const mobileNavLinkClasses = "block py-3 text-gray-700 hover:text-primary transition-colors border-t border-gray-100"

