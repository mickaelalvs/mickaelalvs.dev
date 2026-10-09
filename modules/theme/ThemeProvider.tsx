'use client';

import {ThemeProvider as NextThemesProvider, useTheme as useNextTheme} from 'next-themes';
import {flushSync} from 'react-dom';
import type {ReactNode} from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}

type TogglePosition = {clientX: number; clientY: number};

export function useTheme() {
  const {setTheme, resolvedTheme} = useNextTheme();
  const theme = (resolvedTheme || 'dark') as 'light' | 'dark';

  /**
   * Toggles the theme. When a pointer position is given and the browser supports
   * View Transitions, the new theme is revealed as a circle expanding from that point.
   * Credit to antfu.me / @hooray (https://github.com/vuejs/vitepress/pull/2347)
   */
  const toggleTheme = (position?: TogglePosition) => {
    const next = theme === 'dark' ? 'light' : 'dark';

    const canAnimate =
      typeof document.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canAnimate) {
      setTheme(next);
      return;
    }

    // Keyboard activation (or no pointer): fall back to the center of the viewport
    const x = position?.clientX ?? window.innerWidth / 2;
    const y = position?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    // The circle animation lives in globals.css (driven by these variables) so it is applied from
    // the very first frame. Starting it from JS after `ready` can lag a frame and flash the new theme.
    const root = document.documentElement;
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.style.setProperty('--theme-r', `${endRadius}px`);
    root.dataset.themeSwitching = '';

    const transition = document.startViewTransition(() => {
      // next-themes writes the attribute in an effect: flush it so the new snapshot is correct
      flushSync(() => setTheme(next));
    });

    // `ready` rejects when the browser skips the transition (hidden tab, rapid double toggle…).
    // The theme is applied regardless, so there is nothing to recover from.
    transition.ready.catch(() => {});
    transition.finished
      .catch(() => {})
      .finally(() => {
        delete root.dataset.themeSwitching;
      });
  };

  return {theme, toggleTheme};
}
