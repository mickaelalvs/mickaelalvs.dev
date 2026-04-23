import type {NextConfig} from 'next';
import createMDX from '@next/mdx';

const isDev = process.env.NODE_ENV === 'development';
const isVercelPreview = process.env.VERCEL_ENV === 'preview';

const cspHeader = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval'${isVercelPreview ? ' https://vercel.live' : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  `img-src 'self' data: https://github.com https://avatars.githubusercontent.com${isVercelPreview ? ' https://vercel.live' : ''}`,
  `connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com${isDev ? ' ws://localhost:*' : ''}${isVercelPreview ? ' https://vercel.live wss://ws-us3.pusher.com' : ''}`,
  'worker-src blob:',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `frame-src${isVercelPreview ? ' https://vercel.live' : " 'none'"}`,
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

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
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
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
