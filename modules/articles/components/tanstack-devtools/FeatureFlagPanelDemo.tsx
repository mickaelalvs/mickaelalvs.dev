'use client';

import {useState} from 'react';
import clsx from 'clsx';
import styles from './FeatureFlagPanelDemo.module.css';

interface FlagSpec {
  id: string;
  label: string;
}

const FLAGS: FlagSpec[] = [
  {id: 'new-checkout', label: 'new-checkout'},
  {id: 'dark-mode-beta', label: 'dark-mode-beta'},
  {id: 'ai-search', label: 'ai-search'},
];

export function FeatureFlagPanelDemo() {
  const [flags, setFlags] = useState<Record<string, boolean>>({
    'new-checkout': false,
    'dark-mode-beta': false,
    'ai-search': false,
  });

  const toggle = (id: string) => setFlags((current) => ({...current, [id]: !current[id]}));

  return (
    <figure className={styles.figure}>
      <div className={styles.stage}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>teamEventClient</div>
          {FLAGS.map((flag) => (
            <button
              key={flag.id}
              type="button"
              className={styles.flagRow}
              onClick={() => toggle(flag.id)}
              aria-pressed={flags[flag.id]}
            >
              <span className={clsx(styles.switch, flags[flag.id] && styles.switchOn)}>
                <span className={styles.switchThumb} />
              </span>
              <span className={styles.flagLabel}>{flag.label}</span>
            </button>
          ))}
        </div>

        <div className={clsx(styles.mockApp, flags['dark-mode-beta'] && styles.mockAppDark)}>
          {flags['new-checkout'] ? (
            <div className={styles.checkoutBanner}>🎉 New checkout enabled</div>
          ) : (
            <div className={styles.checkoutPlaceholder} />
          )}
          <div className={clsx(styles.searchBar, flags['ai-search'] && styles.searchBarAi)}>
            {flags['ai-search'] ? '✨ AI search' : 'Search…'}
          </div>
          <div className={styles.mockBlock} />
          <div className={styles.mockBlockSmall} />
        </div>
      </div>

      <figcaption className={styles.caption}>
        The panel on the left <code>emit()</code>s, the app mock on the right <code>on()</code>s — the pattern from
        earlier, live.
      </figcaption>
    </figure>
  );
}
