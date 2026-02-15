import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://ecommerce.routemisr.com/:path*", // proxy to remote API
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ecommerce.routemisr.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
