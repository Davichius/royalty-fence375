import Image from "next/image"
import Link from "next/link"
import { ImageCarousel } from "../components/image-carousel"
import { QuickQuoteForm } from "../components/quick-quote-form"
import { ContactOptions } from "../components/contact-options"
import { ArrowRight, Shield, Eye, Paintbrush, Users, Clock, MessageCircle } from "lucide-react"
import { Testimonial } from "@/components/testimonial"
import React from "react"
import { ProjectGallery } from "@/components/project-gallery"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen">
          <ImageCarousel />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="text-center max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Royal Protection, Timeless Style
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold text-white mb-8 animate-fade-in-up">
                Aluminum, Vinyl, and Chain-Link Fences Installed and Repaired in Orange City, FL
              </h2>
              <Link
                href="#quote"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all animate-fade-in-up"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-background to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary animate-fade-in">
              Top-Quality Fencing Solutions in Orange City, FL
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              Transform your property with professional fencing solutions from Royalty Fence. Serving Orange City, FL,
              and the surrounding areas, we specialize in aluminum, vinyl, and chain-link fences tailored to your unique
              needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security",
                  icon: Shield,
                  description: "Enhance your property's security with our durable fencing solutions.",
                },
                {
                  title: "Privacy",
                  icon: Eye,
                  description: "Create a private oasis with our stylish and functional fences.",
                },
                {
                  title: "Aesthetics",
                  icon: Paintbrush,
                  description: "Boost curb appeal with our elegant and customizable designs.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-base text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Chain-Link Fencing",
                  image:
                    "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/463025354_27130819723232648_4875106193680217802_n-jOZIODVZ06mrdj55FVVxLylsloElt3.jpg",
                  alt: "Chain-link fence installation in Orange City",
                  description:
                    "Affordable and versatile chain-link fences for both residential and commercial properties.",
                  href: "/services/chain-link",
                },
                {
                  title: "Vinyl Fencing",
                  image:
                    "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/vinyl_fence_installation_Deltona_FL%20500x500-5joQgilYSLnMvyTkK2qK0XC6aPKdfs.png",
                  alt: "Vinyl fence installation",
                  description:
                    "Beautiful and low-maintenance vinyl fences to enhance your property's appearance and privacy.",
                  href: "/services/vinyl",
                },
                {
                  title: "Aluminum Fencing",
                  image:
                    "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/aluminum_fence_installation-VMhw844tZ7LqJOIYK5FGBr3bVKitKZ.jpeg",
                  alt: "Aluminum fence installation",
                  description: "Durable and elegant aluminum fences for enhanced security and curb appeal.",
                  href: "/services/aluminum",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={service.href} className="text-primary hover:text-accent font-medium flex items-center">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Why Choose Royalty Fencing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Professional & Knowledgeable",
                  description: "Our experienced team provides expert advice and top-notch service.",
                  icon: Users,
                },
                {
                  title: "High-Quality Workmanship",
                  description: "We pay attention to detail, ensuring beautiful and long-lasting fences.",
                  icon: Shield,
                },
                {
                  title: "Timely Completion",
                  description: "We work efficiently to complete your project on schedule.",
                  icon: Clock,
                },
                {
                  title: "Excellent Communication",
                  description: "We keep you informed throughout the entire process.",
                  icon: MessageCircle,
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                      {React.createElement(reason.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1e3a8a]">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                text="Royalty Fence did an amazing job on our new vinyl fence. The team was professional, efficient, and the result is beautiful!"
                author="John D."
                rating={5}
              />
              <Testimonial
                text="I'm very impressed with the quality of work from Royalty Fence. Our new aluminum fence looks great and was installed quickly."
                author="Sarah M."
                rating={5}
              />
              <Testimonial
                text="Great service from start to finish. The team at Royalty Fence was helpful in choosing the right fence for our needs and budget."
                author="Mike R."
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">Project Gallery</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              Explore our showcase of recent fence installations and repairs across Orange City, FL.
            </p>
            <ProjectGallery />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary animate-fade-in">Ready to Enhance Your Property?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Contact us today for a free estimate on your fence installation or repair project. Let's bring your vision
              to life!
            </p>
            <Link
              href="#quote"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all animate-fade-in"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* Quote and Contact Section */}
        <section id="quote" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <QuickQuoteForm />
              <ContactOptions />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

