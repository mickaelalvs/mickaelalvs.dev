'use client';

import '../styles/global.scss';
import '../styles/reset.scss';

import React from 'react';
import {Rubik} from '@next/font/google';
import {ThemeProvider} from 'next-themes';
import {Header} from '../modules/header/Header';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rubik = Rubik({subsets: ['latin']});

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="fr" className={rubik.className}>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
