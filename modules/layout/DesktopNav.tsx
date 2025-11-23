'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

interface DesktopNavProps {
  pages: string[]
}

export default function DesktopNav({ pages }: DesktopNavProps) {
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string>('')

  return (
    <nav className={styles.desktopNav}>
      <ul className={styles.list}>
        {pages.map(page => {
          const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`
          const isHovered = hovered === page
          const isActive = pathname === path || (page !== 'Home' && pathname.startsWith(path + '/'))

          return (
            <li key={page}>
              <Link href={path} className={styles.navLink}>
                <motion.div
                  className={styles.navWrapper}
                  onHoverStart={() => {
                    setHovered(page)
                  }}
                  onHoverEnd={() => {
                    setHovered('')
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isHovered && (
                      <motion.span
                        className={styles.navHovered}
                        layoutId="nav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          layout: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                          },
                          opacity: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                          }
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.span
                    className={`${styles.navContainer} ${isActive ? styles.active : ''}`}
                    animate={{
                      color: pathname === path || isHovered ? '#FFFFFF' : '#ADADAD'
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut'
                    }}
                  >
                    {page}
                  </motion.span>
                </motion.div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

