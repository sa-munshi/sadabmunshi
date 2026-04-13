/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static export for Cloudflare Pages
  trailingSlash: true,       // Matches old PHP URL structure
  images: {
    unoptimized: true,       // Required for static export
  },
}
module.exports = nextConfig
