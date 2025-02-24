import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { ArrowRight, Shield, Eye, Paintbrush, Users, Clock, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { ImageCarousel } from "../components/image-carousel";
import { FloatingCTA } from "../components/floating-cta";
import { useIsMobile } from "../hooks/use-is-mobile";

// Dynamically import heavy components with loading states
const QuickQuoteForm = dynamic(() => import("../components/quick-quote-form").then(mod => mod.QuickQuoteForm || mod));
const ContactOptions = dynamic(() => import("../components/contact-options").then(mod => mod.ContactOptions || mod));
const Testimonial = dynamic(
    () => import("../components/testimonial").then(mod => mod.Testimonial || mod),
    {
        ssr: false,
        loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />,
    }
);
const ProjectGallery = dynamic(() => import("../components/project-gallery").then(mod => mod.ProjectGallery || mod));
const RecentProjects = dynamic(() => import("../components/recent-projects").then(mod => mod.RecentProjects || mod));

// Constants
const BENEFITS = [
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
];

const SERVICES = [
    {
        title: "Chain-Link Fencing",
        image: "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/463025354_27130819723232648_4875106193680217802_n-jOZIODVZ06mrdj55FVVxLylsloElt3.jpg",
        alt: "Professional chain-link fence installation in Orange City",
        description: "Affordable and versatile chain-link fences for both residential and commercial properties.",
        href: "/services/chain-link"
    },
    {
        title: "Vinyl Fencing",
        image: "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/vinyl_fence_installation_Deltona_FL%20500x500-5joQgilYSLnMvyTkK2qK0XC6aPKdfs.png",
        alt: "Modern vinyl fence installation by Royalty Fencing",
        description: "Beautiful and low-maintenance vinyl fences to enhance your property's appearance and privacy.",
        href: "/services/vinyl"
    },
    {
        title: "Aluminum Fencing",
        image: "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/aluminum_fence_installation-VMhw844tZ7LqJOIYK5FGBr3bVKitKZ.jpeg",
        alt: "Durable aluminum fence installation in Central Florida",
        description: "Elegant aluminum fences for enhanced security and curb appeal.",
        href: "/services/aluminum"
    }
];

const WHY_CHOOSE_US = [
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
];

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {/* Hero Section */}
                <section aria-labelledby="main-heading" className="relative w-full h-screen">
                    <ImageCarousel />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="text-center max-w-4xl px-4 space-y-6">
                            <h1 id="main-heading" className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
                                Royal Protection, Timeless Style
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold text-white animate-fade-in-up">
                                Aluminum, Vinyl, and Chain-Link Fences Installed and Repaired in Orange City, FL
                            </p>
                            <Link
                                href="#quote"
                                className="inline-block bg-primary px-8 py-3 rounded-lg font-semibold text-white hover:bg-primary-dark transition-colors duration-300 animate-fade-in-up"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section aria-labelledby="benefits-heading" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-primary mb-8">
                                Top-Quality Fencing Solutions in Orange City, FL
                            </h2>
                            <p className="text-lg text-gray-700 mb-12">
                                Transform your property with professional fencing solutions from Royalty Fence. Serving Orange City and
                                surrounding areas with custom aluminum, vinyl, and chain-link fencing.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {BENEFITS.map((benefit) => (
                                <article
                                    key={benefit.title}
                                    className="bg-white rounded-xl p-6 shadow-lg transition-transform hover:scale-[1.02]"
                                >
                                    <benefit.icon aria-hidden="true" className="w-12 h-12 text-primary mb-4 mx-auto" />
                                    <h3 className="text-xl font-semibold text-center text-primary mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-center">{benefit.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" aria-labelledby="services-heading" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                            Our Fencing Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {SERVICES.map((service) => (
                                <article
                                    key={service.title}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative aspect-video">
                                        <Image
                                            src={service.image}
                                            alt={service.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={service.title === "Chain-Link Fencing"}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <Link
                                            href={service.href}
                                            className="text-primary font-medium hover:text-accent flex items-center justify-between"
                                        >
                                            <span>Learn more</span>
                                            <ArrowRight aria-hidden="true" className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section aria-labelledby="why-choose-heading" className="py-20 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Why Choose Royalty Fencing?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {WHY_CHOOSE_US.map((reason) => (
                                <article
                                    key={reason.title}
                                    className="flex items-start gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                                >
                                    <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg">
                                        <reason.icon aria-hidden="true" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                        <p className="text-gray-200">{reason.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section aria-labelledby="testimonials-heading" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                            Customer Experiences
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Recent Projects Section */}
                <section aria-labelledby="projects-heading" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                            Recent Installations
                        </h2>
                        <RecentProjects />
                    </div>
                </section>

                {/* CTA Section */}
                <section aria-labelledby="cta-heading" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-primary mb-8">
                            Start Your Fencing Project Today
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                            Contact us for a free estimate on your fence installation or repair project. Let's bring your vision to life!
                        </p>
                        <Link
                            href="#quote"
                            className="inline-block bg-primary px-8 py-3 rounded-lg font-semibold text-white hover:bg-primary-dark transition-colors"
                        >
                            Request Free Quote
                        </Link>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="quote" aria-labelledby="contact-heading" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <QuickQuoteForm />
                            <ContactOptions />
                        </div>
                    </div>
                </section>

                {/* Service Area Section */}
                <section aria-labelledby="service-area-heading" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                            Serving Central Florida
                        </h2>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.06777139138!2d-81.48649421901353!3d28.93742644194633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e71b0b6d58b5c9%3A0x6155a5e9e28e2e0!2sOrange%20City%2C%20FL!5e0!3m2!1sen!2sus!4v1653930433122!5m2!1sen!2sus"
                                className="w-full h-full iframe-style"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Royalty Fence Service Area"
                                onLoad={(e) => {
                                    const iframe = e.target as HTMLIFrameElement;
                                    iframe.style.opacity = '1';
                                }}
                            />
                        </div>
                        <p className="text-center mt-6 text-gray-700">
                            Proudly serving Orange City, Deltona, Sanford, DeLand, and surrounding communities.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

interface FloatingCTAProps {
    isMobile: boolean;
}

const LocalFloatingCTA = ({ isMobile }: FloatingCTAProps) => {
    // component logic
    return (
        <div>
            {/* component JSX */}
        </div>
    );
};

export { LocalFloatingCTA as FloatingCTA };