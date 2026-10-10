'use client';

import {ButtonPrimary} from './ButtonPrimary';
import {usePlatform} from './usePlatform';
import styles from './ShortcutError.module.css';

export default function ShortcutError() {
  const platform = usePlatform();

  if (platform === null) {
    return (
      <div className={styles.container} aria-hidden="true">
        <ButtonPrimary as="a" href="/" tabIndex={-1}>
          Press <kbd>G</kbd> <kbd>H</kbd> to go home →
        </ButtonPrimary>
      </div>
    );
  }

  if (platform === 'mobile') {
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
