'use client';

import {useState, useEffect} from 'react';
import styles from './LiveCodingDemo.module.css';
import {KbdKey} from './KbdKey';

// ─── Mac Window shell ───────────────────────────────────────────────────────

function MacWindow({
  title,
  children,
  className = '',
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.macWindow} ${className}`}>
      <div className={styles.titleBar}>
        <div className={styles.controls}>
          <span className={`${styles.dot} ${styles.close}`} />
          <span className={`${styles.dot} ${styles.minimize}`} />
          <span className={`${styles.dot} ${styles.maximize}`} />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.windowBody}>{children}</div>
    </div>
  );
}

// ─── Preview mock ─────────────────────────────────────────────────────────────

function PreviewMock() {
  return (
    <div className={styles.preview}>
      <div className={styles.previewBar}>
        <div className={styles.previewUrl}>localhost:1234</div>
      </div>
      <div className={styles.previewBody}>
        <div className={styles.slidePreview}>
          <h2 className={styles.slideH1}>Hello, World! 👋</h2>
          <p className={styles.slideP}>Welcome to my Demo App</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LiveCodingDemo() {
  const [showPreview, setShowPreview] = useState(false);
  const [keyPressed, setKeyPressed] = useState(false);

  const toggle = () => setShowPreview((p) => !p);

  const triggerWithAnimation = () => {
    setKeyPressed(true);
    setTimeout(() => setKeyPressed(false), 150);
    setShowPreview((p) => !p);
  };

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'c' || e.key === 'C') triggerWithAnimation();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <figure className={styles.figure}>
      <div className={styles.container}>
        <div className={styles.slidevBar}>
          <img src="/static/icons/slidev.svg" className={styles.slidevLogo} alt="Slidev" />
          <span className={styles.slidevLabel}>Slidev - Live Coding 🥳</span>
          <span className={styles.slidevPort}>port 4321</span>
        </div>

        <div className={styles.slideArea}>
          <MacWindow
            title={
              <>
                Code Editor · Code Server <span className={styles.port}>:4000</span>
              </>
            }
          >
            <img
              src="/static/images/articles/stop-alt-tabbing-embed-ide-live-coding-slides/code-server.avif"
              alt="Code Server embedded in a slide"
              className={styles.screenshot}
            />
          </MacWindow>

          <MacWindow
            title={
              <>
                Live Preview · Demo App <span className={styles.port}>:1234</span>
              </>
            }
            className={`${styles.previewWindow} ${showPreview ? styles.previewShown : ''}`}
          >
            <PreviewMock />
          </MacWindow>
        </div>
      </div>

      <figcaption className={styles.caption}>
        We added a keyboard shortcut, the{' '}
        <span className={styles.kbdWrapper}>
          <span className={styles.tryItHint}>try it ↓</span>
          <KbdKey onClick={toggle} pressed={keyPressed}>
            c
          </KbdKey>
        </span>{' '}
        key, to toggle between the editor and the preview with an animation.
      </figcaption>
    </figure>
  );
}
