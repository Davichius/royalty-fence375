/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ielmooer5oi2a4tr.public.blob.vercel-storage.com",
      "images.unsplash.com", // keep this if you're using Unsplash images
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800, // 1 week cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Optional: Add if you need internationalization
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig

