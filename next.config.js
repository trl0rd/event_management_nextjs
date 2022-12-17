/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'wembleypark.com',
      'static.vecteezy.com'
    ],
  }
}

module.exports = nextConfig
