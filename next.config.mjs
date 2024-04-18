/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wouw.org',
        port: '',
        pathname: '/sites/default/files/styles/profile_pic/public/pictures/**',
      },
    ],
  },
};

export default nextConfig;
