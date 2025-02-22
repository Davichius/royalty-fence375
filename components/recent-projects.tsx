import Image from "next/image"
import { list } from "@vercel/blob"

export async function RecentProjects() {
  // Fetch the list of images from Vercel Blob
  const { blobs } = await list({
    prefix: "voicemaxim/RoyaltyFence/recent-projects/",
  })

  const recentProjects = [
    "aluminum-fence-1.jpg",
    "aluminum-fence-2.jpg",
    "chain-link-fence-1.jpg",
    "chain-link-fence-2.jpg",
    "vinyl-fence-1.jpg",
    "vinyl-fence-2.jpg",
  ].sort(() => Math.random() - 0.5)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {recentProjects.map((imageName, index) => (
        <Image
          key={index}
          src={`https://ielmooer5oi2a4tr.public.blob.vercel-storage.com/voicemaxim/RoyaltyFence/recent-projects/${imageName}`}
          alt={`Recent fence project ${index + 1}`}
          width={400}
          height={300}
          className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
        />
      ))}
    </div>
  )
}

