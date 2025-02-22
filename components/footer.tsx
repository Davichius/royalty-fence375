import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6">
              <Image
                src="https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/RoyaltyFence/RoyaltyFenceNewLogo-x8tQ373qeMO5i4Enr6ZbwTGPUSTVdx.png"
                alt="Royalty Fence Logo"
                width={800}
                height={267}
                className="h-20 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <div className="flex space-x-4">{/* Add social media links if needed */}</div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/services/chain-link" className="hover:text-primary transition-colors">
                  Chain-Link Fencing
                </Link>
              </li>
              <li>
                <Link href="/services/vinyl" className="hover:text-primary transition-colors">
                  Vinyl Fencing
                </Link>
              </li>
              <li>
                <Link href="/services/aluminum" className="hover:text-primary transition-colors">
                  Aluminum Fencing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+13864798379" className="hover:text-primary transition-colors">
                  (386) 479-8379
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:kszilagyi@cfl.rr.com" className="hover:text-primary transition-colors">
                  kszilagyi@cfl.rr.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Service Area Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Service Area</h3>
            <div className="grid grid-cols-2 gap-3 text-center md:text-left">
              {["Orange City", "Deltona", "Sanford", "DeLand", "Lake Helen", "Debary"].map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Royalty Fence. All rights reserved.
            <br className="md:hidden" />
            <Link href="/privacy" className="hover:text-primary transition-colors mx-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

