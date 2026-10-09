'use client';

import Link from 'next/link';
import {LayoutGroup} from 'motion/react';
import {useKBar} from 'kbar';
import styles from './Navbar.module.css';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {ThemeSwitch} from '@/modules/theme/ThemeSwitch';

export interface NavPage {
  label: string;
  path: string;
}

const pages: NavPage[] = [
  {label: 'Home', path: '/'},
  {label: 'About', path: '/about'},
  {label: 'Talks', path: '/talks'},
  {label: 'Projects', path: '/projects'},
  {label: 'Podcasts', path: '/podcasts'},
  {label: 'Articles', path: '/articles'},
];

export default function Navbar() {
  const {query} = useKBar();

  return (
    <LayoutGroup>
      <header className={styles.header}>
        <Link href="/" className={styles.navLink}>
          <span className={`${styles.buttonHeader} ${styles.buttonLogo}`}>MA</span>
        </Link>

        <DesktopNav pages={pages} />

        <aside className={styles.aside}>
          <ThemeSwitch />

          <button
            type="button"
            aria-label="Command"
            onClick={query.toggle}
            className={`${styles.buttonHeader} ${styles.buttonHeaderPadding}`}
          >
            <i className={`${styles.icon} ri-command-line`} />
          </button>

          <MobileNav pages={pages} />
        </aside>
      </header>
    </LayoutGroup>
  );
}
