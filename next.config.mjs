/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
  ],
};

export default nextConfig;