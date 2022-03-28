/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'ui-avatars.com'],
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
    TAILWIND_MODE: process.env.TAILWIND_MODE,
  },
}

module.exports = nextConfig
