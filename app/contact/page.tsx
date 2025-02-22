import { QuickQuoteForm } from "@/components/quick-quote-form"
import { ContactOptions } from "@/components/contact-options"
import { SectionHeader } from "@/components/section-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-background via-gray-50 to-background">
      <main className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Get in Touch"
          subtitle="Connect with our fencing experts in Orange County"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in">
          {/* Quote Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Quick Quote Request</h2>
            <QuickQuoteForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="space-y-8">
              <ContactOptions />
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <p>Orange City</p>
                  <p>Deltona</p>
                  <p>Sanford</p>
                  <p>DeLand</p>
                  <p>Lake Helen</p>
                  <p>Debary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877995.2583920333!2d-81.75461997720373!3d28.923910446324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6e1f2d6b1d36d%3A0x4a1b0b1e4a8f4b4d!2sOrange%20City%2C%20FL!5e0!3m2!1sen!2sus!4v1716785070984!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Royalty Fence Service Area Map"
          />
        </div>
      </main>
    </div>
  )
}

