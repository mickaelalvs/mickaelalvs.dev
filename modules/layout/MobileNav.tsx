"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import styles from "./Navbar.module.css";
import homeIcon from "../../public/static/icons/home.json";
import aboutIcon from "../../public/static/icons/about.json";
import talksIcon from "../../public/static/icons/talks.json";
import projectsIcon from "../../public/static/icons/projects.json";
import podcastsIcon from "../../public/static/icons/podcasts.json";
import articlesIcon from "../../public/static/icons/articles.json";

interface MobileNavProps {
  pages: string[];
}

const iconMap: Record<string, any> = {
  Home: homeIcon,
  About: aboutIcon,
  Talks: talksIcon,
  Projects: projectsIcon,
  Podcasts: podcastsIcon,
  Articles: articlesIcon,
};

export default function MobileNav({ pages }: MobileNavProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconRefs = useRef<Record<string, any>>({});

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const iconSize = { width: 24, height: 24 };

  return (
    <>
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        className={`${styles.buttonHeader} ${styles.hamburgerButton}`}
      >
        <motion.div
          className={styles.hamburger}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.span
            className={styles.hamburgerLine}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={styles.hamburgerLine}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={styles.hamburgerLine}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Menu mobile full screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={toggleMenu}
              className={styles.closeButton}
            >
              <motion.span
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <i className={`${styles.closeIcon} ri-close-line`} />
              </motion.span>
            </button>
            <ul className={styles.mobileList}>
              {pages.map((page, index) => {
                const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
                const isActive =
                  pathname === path ||
                  (page !== "Home" && pathname.startsWith(path + "/"));
                const iconData = iconMap[page];

                if (!iconRefs.current[page]) {
                  iconRefs.current[page] = { current: null };
                }

                return (
                  <motion.li
                    key={page}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                    className={styles.mobileListItem}
                  >
                    <Link
                      href={path}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                      onClick={toggleMenu}
                      onMouseEnter={() =>
                        iconRefs.current[page]?.current?.play()
                      }
                      onMouseLeave={() =>
                        iconRefs.current[page]?.current?.stop()
                      }
                    >
                      {iconData && (
                        <span className={styles.mobileNavIcon}>
                          <Lottie
                            lottieRef={iconRefs.current[page]}
                            animationData={iconData}
                            loop={false}
                            autoplay={false}
                            style={iconSize}
                          />
                        </span>
                      )}
                      <span>{page}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
