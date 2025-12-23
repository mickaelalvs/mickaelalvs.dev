"use client";

import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import { useKBar } from "kbar";
import clsx from "clsx";
import styles from "./Navbar.module.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { ThemeSwitch } from "@/modules/theme/ThemeSwitch";

interface NavbarProps {
  forceDark?: boolean;
}

export default function Navbar({ forceDark = false }: NavbarProps) {
  const pages: string[] = [
    "Home",
    "About",
    "Talks",
    "Projects",
    "Podcasts",
    "Articles",
  ];
  const { query } = useKBar();

  return (
    <LayoutGroup>
      <header className={clsx(styles.header, forceDark && styles.forceDark)}>
        <Link href="/" className={styles.navLink}>
          <span className={`${styles.buttonHeader} ${styles.buttonLogo}`}>
            MA
          </span>
        </Link>

        <DesktopNav pages={pages} forceDark={forceDark} />

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
