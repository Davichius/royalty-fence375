import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Shield, Brush, Leaf, DollarSign, Wrench } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Testimonial } from "@/components/testimonial"
import { RecentProjects } from "@/components/recent-projects"

export default function AluminumFencePage() {
  return (
    <div className="min-h-screen pt-16">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
            Premium Aluminum Fencing Solutions in Orange City
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Elevate your property's security and aesthetics with our custom-designed aluminum fencing systems
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" variant="cta">
              <Link href="#quote" className="flex items-center gap-2">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <SectionHeader title="Why Aluminum Fencing?" subtitle="The smart choice for Florida properties" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Durability",
                text: "Rust-resistant construction withstands Florida's harsh climate",
              },
              {
                icon: Brush,
                title: "Sleek Aesthetics",
                text: "Modern designs that complement any architectural style",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                text: "100% recyclable material with minimal environmental impact",
              },
              {
                icon: DollarSign,
                title: "Great Value",
                text: "Long-lasting performance with near-zero maintenance costs",
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
          <SectionHeader title="Our Aluminum Expertise" subtitle="Comprehensive solutions for every need" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <Wrench className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">Professional Installation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                From precise measurements to flawless execution, our certified installers deliver perfect results for
                both residential and commercial properties.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Custom design consultation</li>
                <li>✓ Property-specific engineering</li>
                <li>✓ Minimal landscape disruption</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">Expert Repairs</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Restore your fence's beauty and function with our comprehensive repair services:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Post replacement & reinforcement</li>
                <li>✓ Panel repair & alignment</li>
                <li>✓ Hardware upgrades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-20">
          <SectionHeader title="Recent Aluminum Projects" subtitle="See our work in Orange City" />
          <RecentProjects />
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <SectionHeader
            title="Customer Testimonials"
            subtitle="What our clients say about our aluminum fencing solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              text="The aluminum fence installed by Royalty Fence has added both security and elegance to our property. Couldn't be happier with the result!"
              author="Michael P."
              rating={5}
            />
            <Testimonial
              text="Royalty Fence's team was professional and skilled. Our aluminum fence was installed perfectly and looks amazing."
              author="Jennifer L."
              rating={5}
            />
            <Testimonial
              text="We appreciate the durability and low maintenance of our new aluminum fence. Royalty Fence provided excellent service from start to finish."
              author="Thomas W."
              rating={4}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Superior Fencing?</h2>
            <p className="text-xl mb-8 opacity-90">Schedule your free consultation and estimate today</p>
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

