/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['player.vimeo.com', 'www.youtube.com'],
  },
}

module.exports = nextConfig