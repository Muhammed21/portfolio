import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "i.postimg.cc"],
  },
};

export default nextConfig;
