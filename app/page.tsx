import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Shield, Eye, Paintbrush, Users, Clock, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// Dynamically import heavy components with loading states
const ImageCarousel = dynamic(() => import("@/components/image-carousel"), {
    loading: () => <div className="h-screen w-full bg-gray-100 dark:bg-gray-900 animate-pulse" />
})
const QuickQuoteForm = dynamic(() => import("@/components/quick-quote-form"))
const ContactOptions = dynamic(() => import("@/components/contact-options"))
const Testimonial = dynamic(() => import("@/components/testimonial"), {
    loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
})
const ProjectGallery = dynamic(() => import("@/components/project-gallery"))

// Constants
const BENEFITS = [
    {
        title: "Security",
        icon: Shield,
        description: "Enhance your property's security with our durable fencing solutions.",
    },
    // ... other benefits
]

const SERVICES = [
    {
        title: "Chain-Link Fencing",
        image: "https://...",
        alt: "Chain-link fence installation in Orange City",
        description: "Affordable and versatile chain-link fences...",
        href: "/services/chain-link",
    },
    // ... other services
]

const TESTIMONIALS = [
    {
        text: "Royalty Fence did an amazing job...",
        author: "John D.",
        rating: 5,
    },
    // ... other testimonials
]

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full h-screen">
                    <ImageCarousel />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-black/50">
                        <div className="text-center max-w-4xl px-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Royal Protection, Timeless Style
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
                                Aluminum, Vinyl, and Chain-Link Fences Installed and Repaired in Orange City, FL
                            </p>
                            <Link
                                href="#quote"
                                className="btn-primary"
                                aria-label="Get a Free Quote"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <SectionWrapper className="bg-gradient-to-b from-background to-gray-100 dark:from-gray-900 dark:to-gray-950">
                    <SectionHeader
                        title="Top-Quality Fencing Solutions in Orange City, FL"
                        description="Transform your property with professional fencing solutions..."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BENEFITS.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>
                </SectionWrapper>

                {/* Services Section */}
                <SectionWrapper id="services" className="bg-white dark:bg-gray-900">
                    <SectionHeader title="Our Services" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </SectionWrapper>

                {/* Why Choose Us Section */}
                <SectionWrapper className="bg-primary dark:bg-primary/90 text-white">
                    <SectionHeader title="Why Choose Royalty Fencing?" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            // ... reasons
                        ].map((reason, index) => (
                            <ReasonCard key={index} {...reason} />
                        ))}
                    </div>
                </SectionWrapper>

                {/* Testimonials Section */}
                <SectionWrapper className="bg-gray-100 dark:bg-gray-800">
                    <SectionHeader title="What Our Customers Say" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <Testimonial key={index} {...testimonial} />
                        ))}
                    </div>
                </SectionWrapper>

                {/* Project Gallery Section */}
                <SectionWrapper className="bg-white dark:bg-gray-900">
                    <SectionHeader
                        title="Project Gallery"
                        description="Explore our showcase of recent fence installations..."
                    />
                    <ProjectGallery />
                </SectionWrapper>

                {/* Call to Action Section */}
                <SectionWrapper className="bg-white dark:bg-gray-900">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-8 text-primary dark:text-primary-200">
                            Ready to Enhance Your Property?
                        </h2>
                        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Contact us today for a free estimate...
                        </p>
                        <Link
                            href="#quote"
                            className="btn-primary"
                            aria-label="Get a Free Quote"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </SectionWrapper>

                {/* Quote and Contact Section */}
                <SectionWrapper id="quote" className="bg-gray-100 dark:bg-gray-800">
                    <div className="grid md:grid-cols-2 gap-12">
                        <QuickQuoteForm />
                        <ContactOptions />
                    </div>
                </SectionWrapper>
            </main>
        </div>
    )
}

// Reusable Components with Dark Mode
function SectionWrapper({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
    return (
        <section id={id} className={cn("py-20", className)}>
            <div className="container mx-auto px-4">{children}</div>
        </section>
    )
}

function SectionHeader({ title, description }: { title: string; description?: string }) {
    return (
        <>
            <h2 className="text-4xl font-bold mb-8 text-center text-primary dark:text-primary-300">{title}</h2>
            {description && (
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-center mb-12">
                    {description}
                </p>
            )}
        </>
    )
}

function BenefitCard({ title, icon: Icon, description }: { title: string; icon: React.ElementType; description: string }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl">
            <Icon className="w-12 h-12 text-primary dark:text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-300">{title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    )
}

function ServiceCard({ title, image, alt, description, href }: { title: string; image: string; alt: string; description: string; href: string }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <Image
                src={image}
                alt={alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-300">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
                <Link href={href} className="text-primary dark:text-primary-300 hover:text-accent font-medium flex items-center">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}

function ReasonCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) {
    return (
        <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary/90 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-300">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    )
}