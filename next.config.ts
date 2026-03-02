import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true,
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // Disable strict mode for better performance in production
  reactStrictMode: false,
};

export default nextConfig;
