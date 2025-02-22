import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactOptions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100"
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center">Get in Touch</h2>

      <div className="space-y-6">
        {/* Phone */}
        <a
          href="tel:+13864798379"
          className="group flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
        >
          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="text-gray-600">(386) 479-8379</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:kszilagyi@cfl.rr.com"
          className="group flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
        >
          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="text-gray-600">kszilagyi@cfl.rr.com</p>
          </div>
        </a>

        {/* Service Area */}
        <div className="group flex items-center gap-4 p-4 rounded-xl">
          <div className="bg-primary/10 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
            <p className="text-gray-600">Orange City, Deltona, Sanford & DeLand, FL</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button variant="outline" className="gap-2" asChild>
          <a href="#quote">
            <MessageCircle className="w-5 h-5" />
            Send Message
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

