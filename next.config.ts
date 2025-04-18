import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 480, 640, 750, 768, 828, 1024, 1080, 1100, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3802',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
