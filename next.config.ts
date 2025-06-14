import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  // Optimize bundle size
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'tsparticles',
      'react-tsparticles',
      'swiper',
    ],
    webpackBuildWorker: true,
  },
};

export default nextConfig;
