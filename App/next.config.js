/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove deprecated experimental.appDir as it's default in Next.js 14
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig