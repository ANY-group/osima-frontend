import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 480, 640, 750, 768, 828, 1024, 1080, 1100, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.vegas.anygroup.kz',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3802',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3802',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
