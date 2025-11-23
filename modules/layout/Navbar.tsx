'use client'

import Link from 'next/link'
import { LayoutGroup } from 'framer-motion'
import { useKBar } from 'kbar'
import styles from './Navbar.module.css'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Navbar() {
  const pages: string[] = [
    'Home',
    'About',
    'Talks',
    'Projects',
    'Podcasts',
    'Articles',
  ]
  const { query } = useKBar()

  return (
    <LayoutGroup>
      <header className={styles.header}>
        <Link href="/" className={styles.navLink}>
          <span className={`${styles.buttonHeader} ${styles.buttonLogo}`}>MA</span>
        </Link>

        <DesktopNav pages={pages} />

        <aside className={styles.aside}>
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
  )
}

