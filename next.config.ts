import type {NextConfig} from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect old /speaking URLs to /talks
      {
        source: '/speaking',
        destination: '/talks',
        permanent: true,
      },
      {
        source: '/speaking/:slug',
        destination: '/talks/:slug',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lottie-react', 'framer-motion', 'date-fns'],
  },
  compress: true,
  poweredByHeader: false,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
