import { QuickQuoteForm } from "../../components/quick-quote-form"
import { ContactOptions } from "../../components/contact-options"
// import { Button } from "@/components/ui/button" // Removed as it is not used in the code

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-8 text-gray-900">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Quick Quote</h2>
              <QuickQuoteForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Our Info</h2>
              <ContactOptions />

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium mb-3">Service Areas</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  {['Orange City', 'Deltona', 'Sanford', 'DeLand', 'Lake Helen', 'Debary'].map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=Orange%20City%2C%20FL&t=&z=11&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 md:h-80"
            aria-label="Service Area Map"
            ref={(iframe) => {
              if (iframe) {
                if ('loading' in HTMLIFrameElement.prototype) {
                  iframe.loading = 'lazy';
                } else {
                    import('lazysizes').then((module) => {
                    const lazySizes = module.default;
                    lazySizes.init();
                    iframe.classList.add('lazyload');
                    }).catch((error) => {
                    console.error('Failed to load lazysizes', error);
                    });
                }
              }
            }}
          />
        </div>
      </main>
    </div>
  )
}

