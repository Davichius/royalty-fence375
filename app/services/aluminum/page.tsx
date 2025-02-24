import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Brush, Leaf, DollarSign, Wrench } from "lucide-react"

export default function AluminumFencePage() {
  return (
    <div className="min-h-screen pt-20">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Premium Aluminum Fencing in Orange City
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Durable, low-maintenance security solutions for Florida homes & businesses
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
            Why Choose Aluminum?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Weather Resistant",
                text: "Withstands Florida's harsh climate",
              },
              {
                icon: Brush,
                title: "Modern Designs",
                text: "Complements any property style",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                text: "100% recyclable materials",
              },
              {
                icon: DollarSign,
                title: "Great Value",
                text: "Long-lasting with minimal upkeep",
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
            Our Aluminum Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Professional Installation</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Custom design consultation</li>
                <li>✓ Property-specific engineering</li>
                <li>✓ Minimal landscape disruption</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Expert Repairs</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Post replacement & reinforcement</li>
                <li>✓ Panel repair & alignment</li>
                <li>✓ Hardware upgrades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-12 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Project Today</h2>
            <Button asChild variant="secondary">
              <Link href="/contact" className="flex items-center gap-1.5">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}