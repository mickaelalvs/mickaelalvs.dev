'use client';

import {useKBar} from 'kbar';
import {ButtonPrimary} from './ButtonPrimary';
import {usePlatform} from './usePlatform';
import styles from './ShortcutHome.module.css';

export default function ShortcutHome() {
  const {query} = useKBar();
  const platform = usePlatform();

  if (platform === null) {
    return (
      <div className={styles.container} aria-hidden="true">
        <ButtonPrimary as="button" disabled>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      </div>
    );
  }

  if (platform === 'mobile') {
    return (
      <div className={`${styles.container} ${styles.mounted}`}>
        <ButtonPrimary as="button" onClick={query.toggle}>
          Tap to start →
        </ButtonPrimary>
      </div>
    );
  } else if (platform === 'mac') {
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
