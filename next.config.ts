import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Configure base path for deployment (e.g., GitHub Pages)
  // basePath: '/recipe-master',
  trailingSlash: true,
};

export default nextConfig;
