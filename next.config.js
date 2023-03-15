/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-assets-bucket-dev.s3.us-east-2.amazonaws.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
