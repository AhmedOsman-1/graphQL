import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "hashnode.imgix.net",
      },
      {
        protocol: "https",
        hostname: "media.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "blog.greenroots.info",
      },
    ],
  },
  productionBrowserSourceMaps: false, // disables dev source map warnings
};

export default nextConfig;
