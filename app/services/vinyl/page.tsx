import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Brush, Shield, Leaf, Settings } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { RecentProjects } from "@/components/recent-projects"
import type { Metadata } from "next"
import { Testimonial } from "@/components/testimonial"

export const metadata: Metadata = {
  title: "Premium Vinyl Fencing Solutions | Royalty Fence",
  description:
    "Professional vinyl fence installation & repair services in Orange City, FL. Low-maintenance, durable privacy fencing solutions.",
  openGraph: {
    images: [
      {
        url: "/images/vinyl-fence-og.jpg",
        width: 1200,
        height: 630,
        alt: "Royalty Fence Vinyl Fencing",
      },
    ],
  },
}

export default function VinylFencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vinyl Fence Installation and Repair",
    provider: {
      "@type": "LocalBusiness",
      name: "Royalty Fence",
      image: "/logo.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orange City",
        addressRegion: "FL",
        postalCode: "32763",
        addressCountry: "US",
      },
      telephone: "+13864798379",
    },
    areaServed: ["Orange City", "Deltona", "Sanford", "DeLand"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vinyl Fencing Services",
    },
  }

  return (
    <div className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Elegant Vinyl Fencing Solutions</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your property with maintenance-free beauty and privacy
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="cta">
              <Link href="#quote" className="flex items-center gap-2">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <SectionHeader title="Why Vinyl Fencing?" subtitle="The smart choice for Florida homeowners" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brush,
                title: "Custom Designs",
                text: "Choose from multiple styles, colors, and textures",
              },
              {
                icon: Shield,
                title: "All-Weather Durability",
                text: "Resists fading, warping, and extreme temperatures",
              },
              {
                icon: Settings,
                title: "Zero Maintenance",
                text: "No painting or staining required - ever",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                text: "Made from recycled materials & fully recyclable",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <SectionHeader title="Our Vinyl Services" subtitle="Complete solutions from concept to completion" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Brush className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Custom Installation</h3>
              </div>
              <p className="text-gray-600 mb-6">Tailored solutions for your property:</p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Privacy & semi-privacy styles</li>
                <li>✓ Decorative post caps & accents</li>
                <li>✓ Integrated gate systems</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Expert Repairs</h3>
              </div>
              <p className="text-gray-600 mb-6">Comprehensive repair services include:</p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Panel replacement</li>
                <li>✓ Post reinforcement</li>
                <li>✓ Color-matched repairs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-20">
          <SectionHeader title="Recent Vinyl Projects" subtitle="See our transformations in Orange City" />
          <RecentProjects />
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <SectionHeader title="Customer Testimonials" subtitle="Hear from our satisfied vinyl fence customers" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              text="Our new vinyl fence from Royalty Fence has transformed our backyard. It's beautiful, durable, and exactly what we wanted."
              author="Lisa M."
              rating={5}
            />
            <Testimonial
              text="The team at Royalty Fence was professional and courteous. Our vinyl fence installation was quick and the result is fantastic."
              author="James K."
              rating={5}
            />
            <Testimonial
              text="We love how low-maintenance our new vinyl fence is. Royalty Fence did a great job with the installation and follow-up."
              author="Susan R."
              rating={4}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Maintenance-Free Beauty?</h2>
            <p className="text-xl mb-8 opacity-90">Schedule your free vinyl fence consultation today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="#quote" className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+13864798379" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> (386) 479-8379
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

