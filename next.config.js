/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["10.3.1.205", "10.3.1.231"],
    // domains: ["182.176.88.214"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Matches all hostnames, including IPs
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: require.resolve("stream-http"),
    };
    return config;
  },
};

module.exports = nextConfig;
