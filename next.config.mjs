/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wouw.org',
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },
};

export default nextConfig;
