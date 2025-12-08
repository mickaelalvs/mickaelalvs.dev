"use client";

import { useState, useEffect } from "react";
import { useKBar } from "kbar";
import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./ShortcutHome.module.css";

export default function ShortcutHome() {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.container} aria-hidden="true">
        <ButtonPrimary as="button" disabled>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      </div>
    );
  }

  const isMac = /(Mac)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div className={`${styles.container} ${styles.mounted}`}>
        <ButtonPrimary as="button" onClick={query.toggle}>
          Tap to start →
        </ButtonPrimary>
      </div>
    );
  } else if (isMac) {
    return (
      <div className={`${styles.container} ${styles.mounted}`}>
        <ButtonPrimary as="button" onClick={query.toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      </div>
    );
  } else {
    return (
      <div className={`${styles.container} ${styles.mounted}`}>
        <ButtonPrimary as="button" onClick={query.toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      </div>
    );
  }
}
