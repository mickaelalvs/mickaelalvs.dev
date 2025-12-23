"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import styles from "./ThemeSwitch.module.css";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Changer de thème"
        className={styles.button}
      >
        <i className={`${styles.icon} ri-sun-line`} />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Enable light mode" : "Enable dark mode"}
      onClick={toggleTheme}
      className={styles.button}
    >
      <i
        className={`${styles.icon} ${theme === "dark" ? "ri-sun-line" : "ri-moon-line"}`}
      />
    </button>
  );
}
