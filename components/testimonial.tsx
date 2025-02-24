import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialProps {
  text: string
  author: string
  rating: number
}

export function Testimonial({ text, author, rating }: TestimonialProps) {
  const validatedRating = Math.min(Math.max(Math.round(rating), 0), 5)

  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div 
          className="flex mb-4"
          role="img"
          aria-label={`Rating: ${validatedRating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < validatedRating ? "text-yellow-400" : "text-gray-300"}`}
              fill={i < validatedRating ? "currentColor" : "none"}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 mb-4 italic">"{text}"</blockquote>
        <p className="font-semibold text-right text-primary" aria-label={`Author: ${author}`}>
          - {author}
        </p>
      </CardContent>
    </Card>
  )
}

