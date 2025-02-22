"use client"

import Image from "next/image"

const heroImage =
  "https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/aluminum_fence_installation-VMhw844tZ7LqJOIYK5FGBr3bVKitKZ.jpeg"

export function ImageCarousel() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={heroImage}
        alt="Aluminum fence installation"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
        className="brightness-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  )
}

