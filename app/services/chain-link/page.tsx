import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, DollarSign, Settings, Hammer } from "lucide-react"

export default function ChainLinkFencePage() {
  return (
    <div className="min-h-screen pt-20">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Affordable Chain-Link Fencing
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Durable security solutions for residential & commercial properties
          </p>
          <Button asChild variant="primary">
            <Link href="#quote" className="flex items-center gap-1.5">
              Get Free Estimate
            </Link>
          </Button>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Why Chain-Link?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Cost-Effective",
                text: "Budget-friendly security solution",
              },
              {
                icon: Shield,
                title: "Durable",
                text: "Galvanized steel construction",
              },
              {
                icon: Settings,
                title: "Low Maintenance",
                text: "Weather-resistant materials",
              },
              {
                icon: Hammer,
                title: "Versatile",
                text: "Multiple height & gauge options",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Our Chain-Link Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Professional Installation</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Custom height options</li>
                <li>✓ Vinyl-coated colors</li>
                <li>✓ Privacy slat integration</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Hammer className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Expert Repairs</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Post replacement</li>
                <li>✓ Mesh repair</li>
                <li>✓ Gate adjustments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-12 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get Secure Today</h2>
            <Button asChild variant="secondary">
              <Link href="/contact" className="flex items-center gap-1.5">
                Request Quote
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}