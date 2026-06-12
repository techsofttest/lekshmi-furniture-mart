import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'googleusercontent.com' },
      { protocol: 'http', hostname: 'googleusercontent.com' },
    ],
  },
};
export default nextConfig;



