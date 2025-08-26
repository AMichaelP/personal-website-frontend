import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {optimizePackageImports: []},
    output: 'standalone',
    images: {unoptimized: false}
};

export default nextConfig;
