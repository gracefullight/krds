import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    reactCompiler: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
