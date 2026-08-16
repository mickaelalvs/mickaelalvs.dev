'use client';

import {useState} from 'react';
import styles from './FeatureFlagPanelDemo.module.css';

interface FlagSpec {
  id: string;
  label: string;
  description: string;
}

const FLAGS: FlagSpec[] = [
  {id: 'new-checkout', label: 'new-checkout', description: 'Bandeau promo dans le mock'},
  {id: 'dark-mode-beta', label: 'dark-mode-beta', description: 'Fond sombre dans le mock'},
  {id: 'ai-search', label: 'ai-search', description: 'Barre de recherche IA'},
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
              <span className={`${styles.switch} ${flags[flag.id] ? styles.switchOn : ''}`}>
                <span className={styles.switchThumb} />
              </span>
              <span className={styles.flagLabel}>{flag.label}</span>
            </button>
          ))}
        </div>

        <div className={`${styles.mockApp} ${flags['dark-mode-beta'] ? styles.mockAppDark : ''}`}>
          {flags['new-checkout'] ? (
            <div className={styles.checkoutBanner}>🎉 Nouveau checkout activé</div>
          ) : (
            <div className={styles.checkoutPlaceholder} />
          )}
          <div className={`${styles.searchBar} ${flags['ai-search'] ? styles.searchBarAi : ''}`}>
            {flags['ai-search'] ? '✨ Recherche IA' : 'Rechercher…'}
          </div>
          <div className={styles.mockBlock} />
          <div className={styles.mockBlockSmall} />
        </div>
      </div>

      <figcaption className={styles.caption}>
        Le panel à gauche <code>emit()</code>, le mock d&apos;app à droite <code>on()</code> — le pattern vu plus haut,
        en direct.
      </figcaption>
    </figure>
  );
}
