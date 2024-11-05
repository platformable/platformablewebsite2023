/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/api-landscape-measuring-the-value-generated-by-api-tools-and-consultants-as-ecosystem-enablers',
  //       destination: '/blog/the-api-landscape-measuring-the-value-generated-by-api-tools-and-consultants-as-ecosystem-enablers',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
