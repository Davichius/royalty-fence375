import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Shield, DollarSign, Hammer, Settings } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Testimonial } from "@/components/testimonial"
import { RecentProjects } from "@/components/recent-projects"

export default function ChainLinkFencePage() {
  return (
    <div className="min-h-screen pt-16">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
            Durable Chain-Link Fencing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Affordable security & boundary solutions for Orange City homes & businesses
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" variant="cta">
              <Link href="#quote" className="flex items-center gap-2">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <SectionHeader title="Why Chain-Link Fencing?" subtitle="The practical choice for Florida properties" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Cost-Effective",
                text: "Most affordable fencing solution without compromising quality",
              },
              {
                icon: Shield,
                title: "Durable Security",
                text: "Galvanized steel construction withstands Florida elements",
              },
              {
                icon: Settings,
                title: "Low Maintenance",
                text: "Rust-resistant materials require minimal upkeep",
              },
              {
                icon: Hammer,
                title: "Versatile Use",
                text: "Perfect for residential, commercial & recreational spaces",
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
          <SectionHeader
            title="Our Chain-Link Services"
            subtitle="Complete solutions from installation to maintenance"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Professional Installation</h3>
              </div>
              <p className="text-gray-600 mb-6">Precision installation for perfect results every time:</p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Custom height & gauge options</li>
                <li>✓ Vinyl-coated color choices</li>
                <li>✓ Privacy slat integration</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Expert Repairs</h3>
              </div>
              <p className="text-gray-600 mb-6">Fast and reliable repair services include:</p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Post replacement & straightening</li>
                <li>✓ Mesh repair & tensioning</li>
                <li>✓ Gate hardware upgrades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-20">
          <SectionHeader title="Recent Chain-Link Projects" subtitle="See our work in Orange City" />
          <RecentProjects />
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <SectionHeader
            title="Customer Testimonials"
            subtitle="See what our clients say about our chain-link fencing services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              text="Royalty Fence installed our chain-link fence quickly and professionally. It looks great and provides the security we needed for our property."
              author="David L."
              rating={5}
            />
            <Testimonial
              text="I'm impressed with the durability of our new chain-link fence. The team at Royalty Fence was knowledgeable and efficient throughout the process."
              author="Emily S."
              rating={4}
            />
            <Testimonial
              text="Great value for money. Our chain-link fence from Royalty Fence is sturdy, well-installed, and exactly what we needed for our commercial property."
              author="Robert T."
              rating={5}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Affordable Security?</h2>
            <p className="text-xl mb-8 opacity-90">Get your free chain-link fence estimate today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="#quote" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
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

