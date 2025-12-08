"use client";

import { useState, useEffect } from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./ShortcutError.module.css";

export default function ShortcutError() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.container} aria-hidden="true">
        <ButtonPrimary as="a" href="/" tabIndex={-1}>
          Press <kbd>G</kbd> <kbd>H</kbd> to go home →
        </ButtonPrimary>
      </div>
    );
  }

  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div className={`${styles.container} ${styles.mounted}`}>
        <ButtonPrimary as="a" href="/">
          Tap to go home →
        </ButtonPrimary>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.mounted}`}>
      <ButtonPrimary as="a" href="/">
        Press <kbd>G</kbd> <kbd>H</kbd> to go home →
      </ButtonPrimary>
    </div>
  );
}
