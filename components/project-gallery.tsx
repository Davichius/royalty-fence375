"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { list } from "@vercel/blob"

export function ProjectGallery() {
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    async function fetchImages() {
      try {
        const { blobs } = await list({
          prefix: "voicemaxim/RoyaltyFence/Recent-Projects/",
        })
        const urls = blobs.filter((blob) => blob.pathname.match(/\.(jpg|jpeg|png|gif)$/i)).map((blob) => blob.url)
        setImageUrls(urls)
      } catch (error) {
        console.error("Error fetching images:", error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className="aspect-square overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`Recent fence project ${index + 1}`}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  )
}

