// app/privacy-policy/page.tsx

import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Royalty Fence",
  description: "Learn how Royalty Fence protects your personal information and privacy.",
  alternates: {
    canonical: "https://royaltyfence.com/privacy-policy",
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-gray-50">
      <main className="container mx-auto px-4 py-12">
        <SectionHeader title="Privacy Policy" subtitle="Your trust is important to us" className="mb-12" />

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8 text-gray-600">
            <p className="mb-4">
              <Lock className="w-5 h-5 inline-block mr-2 text-primary" />
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#data-collection" className="text-primary hover:underline">
                    1. Data We Collect
                  </a>
                </li>
                <li>
                  <a href="#data-use" className="text-primary hover:underline">
                    2. How We Use Information
                  </a>
                </li>
                <li>
                  <a href="#data-sharing" className="text-primary hover:underline">
                    3. Information Sharing
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-primary hover:underline">
                    4. Security Measures
                  </a>
                </li>
                <li>
                  <a href="#rights" className="text-primary hover:underline">
                    5. Your Rights
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:underline">
                    6. Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <section id="data-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                <Shield className="w-6 h-6 inline-block mr-2 text-primary" />
                1. Data We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact details (name, email, phone number)</li>
                  <li>Property measurements and specifications</li>
                  <li>Payment information for transactions</li>
                  <li>Communications via forms or email</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">Automated Collection</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Website usage patterns (via Google Analytics)</li>
                </ul>
              </div>
            </section>

            <section id="data-use" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Service Delivery</h3>
                  <p>Providing quotes, installations, and customer support</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Communication</h3>
                  <p>Scheduling appointments and service updates</p>
                </div>
              </div>
            </section>

            <section id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Information Sharing</h2>
              <p className="mb-4">We only share data when necessary with:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span>Payment processors (Stripe/PayPal)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span>Installation partners (local contractors)</span>
                </div>
              </div>
            </section>

            <section id="security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Security Measures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Technical Protections</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL/TLS encryption</li>
                    <li>Regular security audits</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Organizational Measures</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Staff training</li>
                    <li>Access controls</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Your Rights</h2>
              <div className="space-y-4">
                <p>You have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Access your data", "Request correction", "Delete information", "Object to processing"].map(
                    (right) => (
                      <div key={right} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Lock className="w-4 h-4 text-primary" />
                        {right}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:kszilagyi@cfl.rr.com" className="hover:underline">
                    kszilagyi@cfl.rr.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+13864798379" className="hover:underline">
                    (386) 479-8379
                  </a>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Contact Form
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

