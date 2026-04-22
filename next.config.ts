import type {NextConfig} from 'next';
import createMDX from '@next/mdx';

const isDev = process.env.NODE_ENV === 'development';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data: https://github.com https://avatars.githubusercontent.com;
  connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com${isDev ? ' ws://localhost:*' : ''};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
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
