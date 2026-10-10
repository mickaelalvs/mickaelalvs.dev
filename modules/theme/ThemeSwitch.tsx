'use client';

import {useTheme} from './ThemeProvider';
import styles from './ThemeSwitch.module.css';

// Both icons are rendered and the visible one is picked in CSS from the `data-theme`
// attribute set by next-themes before hydration, so no "mounted" state is needed.
export function ThemeSwitch() {
  const {toggleTheme} = useTheme();

  return (
    <button type="button" aria-label="Toggle theme" onClick={(event) => toggleTheme(event)} className={styles.button}>
      <i className={`${styles.icon} ${styles.sunIcon} ri-sun-line`} />
      <i className={`${styles.icon} ${styles.moonIcon} ri-moon-line`} />
    </button>
  );
}
