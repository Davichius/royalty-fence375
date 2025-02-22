import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialProps {
  text: string
  author: string
  rating: number
}

export function Testimonial({ text, author, rating }: TestimonialProps) {
  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
            />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{text}</p>
        <p className="font-semibold text-right text-primary">- {author}</p>
      </CardContent>
    </Card>
  )
}

