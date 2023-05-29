/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.douyinpic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
