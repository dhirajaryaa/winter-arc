/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
