import React from 'react';
import CommandBar from '@/modules/command-bar/CommandBar';
import {ThemeProvider} from '@/modules/theme/ThemeProvider';
import {Metadata, Viewport} from 'next';
import {NuqsAdapter} from 'nuqs/adapters/next/app';
import {Analytics} from '@vercel/analytics/next';

import '../public/static/css/globals.css';
import 'remixicon/fonts/remixicon.css';

export const viewport: Viewport = {
  themeColor: '#f4f4f5',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mickaelalvs.dev'),
  title: {
    default: 'Mickaël Alves',
    template: '%s | Mickaël Alves',
  },
  description:
    "👋🏼 Hey, I'm Mickaël Alves, Tech Lead Frontend at Zenika & Bedrock Streaming. I'm passionate about web technologies, tooling and especially Developer Experience. Speaker, co-organizer of LyonJS & DevFest Lyon.",
  authors: [{name: 'Mickaël Alves'}],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mickaelalvs.dev',
    siteName: 'Mickaël Alves',
    title: 'Mickaël Alves',
    description:
      "👋🏼 Hey, I'm Mickaël Alves, Tech Lead Frontend at Zenika & Bedrock Streaming. I'm passionate about web technologies, tooling and especially Developer Experience. Speaker, co-organizer of LyonJS & DevFest Lyon.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mickaël Alves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mickaël Alves',
    description:
      "👋🏼 Hey, I'm Mickaël Alves, Tech Lead Frontend at Zenika & Bedrock Streaming. I'm passionate about web technologies, tooling and especially Developer Experience. Speaker, co-organizer of LyonJS & DevFest Lyon.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/static/font/Biotif-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/font/NeuzeitGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                margin: 0;
                padding: 0;
                background: var(--color-background, #08070b);
                color: var(--color-primary, #f2f2f2);
                -webkit-font-smoothing: antialiased;
              }
            `,
          }}
        />
        <title>Mickaël Alves - Tech Lead Frontend, Speaker & Developer Experience Enthusiast</title>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <NuqsAdapter>
            <CommandBar>{children}</CommandBar>
            <Analytics />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
