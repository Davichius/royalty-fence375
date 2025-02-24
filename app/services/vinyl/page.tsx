import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brush, Shield, Settings, Leaf } from "lucide-react"

export default function VinylFencePage() {
  return (
    <div className="min-h-screen pt-20">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Vinyl Fencing Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Maintenance-free beauty & privacy for your property
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
            Why Vinyl?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brush,
                title: "Custom Designs",
                text: "Multiple styles & colors",
              },
              {
                icon: Shield,
                title: "All-Weather",
                text: "Resists fading & warping",
              },
              {
                icon: Settings,
                title: "Zero Maintenance",
                text: "No painting required",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                text: "Recyclable materials",
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
            Our Vinyl Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Brush className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Custom Installation</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Privacy fencing</li>
                <li>✓ Decorative post caps</li>
                <li>✓ Integrated gates</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Expert Repairs</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Panel replacement</li>
                <li>✓ Post reinforcement</li>
                <li>✓ Color-matched fixes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-12 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Transform Your Property</h2>
            <Button asChild variant="secondary">
              <Link href="/contact" className="flex items-center gap-1.5">
                Start Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

