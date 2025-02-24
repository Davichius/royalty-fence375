import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Chain-Link Fencing", href: "/services/chain-link" },
    { name: "Vinyl Fencing", href: "/services/vinyl" },
    { name: "Aluminum Fencing", href: "/services/aluminum" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "(386) 479-8379",
      href: "tel:+13864798379",
    },
    {
      icon: Mail,
      text: "kszilagyi@cfl.rr.com",
      href: "mailto:kszilagyi@cfl.rr.com",
    },
    {
      icon: Clock,
      text: "Mon-Sat: 8am - 6pm",
    },
  ]

  const serviceAreas = ["Orange City", "Deltona", "Sanford", "DeLand", "Lake Helen", "Debary"]

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
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition-colors"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2">
                  <info.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="hover:text-primary transition-colors"
                      aria-label={info.text}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Service Area</h3>
            <div className="grid grid-cols-2 gap-3 text-center md:text-left">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
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
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors mx-2"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}