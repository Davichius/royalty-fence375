'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ArrowRight, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FormData = {
  name: string
  phone: string
  email: string
  fenceType: string
}

interface QuickQuoteFormProps {
  onClose?: () => void
}

export function QuickQuoteForm({ onClose }: QuickQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data)
      // Here you would typically send the data to your server or a third-party service
      // For now, we'll just log it and show a success message
      setMessage("Quote request submitted successfully. We'll be in touch within 24 hours.")
      // In a real implementation, you might want to send an email to kszilagyi@cfl.rr.com here
      reset()
      if (onClose) {
        setTimeout(onClose, 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage("There was a problem submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Get Your Free Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number"
                }
              })}
              className="w-full"
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              className="w-full"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="fence-type">Fence Type</Label>
            <Select onValueChange={(value) => register("fenceType").onChange({ target: { value } })}>
              <SelectTrigger id="fence-type" className="w-full">
                <SelectValue placeholder="Select fence type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chain-link">Chain Link Fence</SelectItem>
                <SelectItem value="vinyl">Vinyl Fence</SelectItem>
                <SelectItem value="aluminum">Aluminum Fence</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
        {message && (
          <p className={`mt-4 text-center text-sm ${message.includes("problem") ? "text-red-500" : "text-green-500"}`}>
            {message}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

