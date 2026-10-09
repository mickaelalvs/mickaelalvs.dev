'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion, AnimatePresence} from 'motion/react';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import type {NavPage} from './Navbar';

interface DesktopNavProps {
  pages: NavPage[];
}

const easing = [0.25, 0.1, 0.25, 1] as const;

export default function DesktopNav({pages}: DesktopNavProps) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string>('');

  return (
    <nav className={styles.desktopNav}>
      <ul className={styles.list}>
        {pages.map(({label: page, path}) => {
          const isHovered = hovered === page;
          const isActive = pathname === path || (path !== '/' && pathname.startsWith(path + '/'));

          return (
            <li key={page}>
              <Link href={path} className={styles.navLink}>
                <motion.div
                  className={styles.navWrapper}
                  onHoverStart={() => {
                    setHovered(page);
                  }}
                  onHoverEnd={() => {
                    setHovered('');
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isHovered && (
                      <motion.span
                        className={styles.navHovered}
                        layoutId="nav"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{
                          layout: {duration: 0.4, ease: easing},
                          opacity: {duration: 0.4, ease: easing},
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className={clsx(styles.navContainer, isActive && styles.active)}>{page}</span>
                  {isActive && (
                    <motion.span
                      className={styles.activeIndicator}
                      layoutId="nav-active"
                      transition={{layout: {duration: 0.4, ease: easing}}}
                    />
                  )}
                </motion.div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
