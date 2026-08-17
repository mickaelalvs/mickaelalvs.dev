'use client';

import {useEffect, useState} from 'react';
import clsx from 'clsx';
import {KbdKey} from '../alt-tab/KbdKey';
import {ELEMENTS, FILE_TREE, type ElementSpec} from './GoToSourceDemo.data';
import styles from './GoToSourceDemo.module.css';

interface Modifiers {
  shift: boolean;
  alt: boolean;
  ctrl: boolean;
  meta: boolean;
}

const NO_MODIFIERS: Modifiers = {shift: false, alt: false, ctrl: false, meta: false};

export function GoToSourceDemo() {
  const [isMac, setIsMac] = useState(false);
  const [modifiers, setModifiers] = useState<Modifiers>(NO_MODIFIERS);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [openedId, setOpenedId] = useState<string | null>(null);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));

    const updateModifiers = (e: KeyboardEvent | MouseEvent) => {
      setModifiers({shift: e.shiftKey, alt: e.altKey, ctrl: e.ctrlKey, meta: e.metaKey});
    };
    const resetOnBlur = () => setModifiers(NO_MODIFIERS);

    window.addEventListener('keydown', updateModifiers);
    window.addEventListener('keyup', updateModifiers);
    window.addEventListener('mousemove', updateModifiers);
    window.addEventListener('blur', resetOnBlur);

    return () => {
      window.removeEventListener('keydown', updateModifiers);
      window.removeEventListener('keyup', updateModifiers);
      window.removeEventListener('mousemove', updateModifiers);
      window.removeEventListener('blur', resetOnBlur);
    };
  }, []);

  const comboActive = modifiers.shift && modifiers.alt && (isMac ? modifiers.meta : modifiers.ctrl);
  const opened = ELEMENTS.find((el) => el.id === openedId) ?? null;
  const hoverableProps = {comboActive, hoveredId, setHoveredId, setOpenedId};

  return (
    <figure className={styles.figure}>
      <div className={clsx(styles.hint, styles.hintDesktop)}>
        Hold{' '}
        <span className={styles.kbdWrapper}>
          <span className={styles.tryItHint}>try it ↓</span>
          <KbdKey pressed={modifiers.shift}>⇧</KbdKey> <KbdKey pressed={modifiers.alt}>⌥</KbdKey>{' '}
          <KbdKey pressed={isMac ? modifiers.meta : modifiers.ctrl}>{isMac ? '⌘' : '⌃'}</KbdKey>
        </span>
        , then hover and click an element.
      </div>
      <div className={clsx(styles.hint, styles.hintMobile)}>
        Preview: on desktop, hold ⇧⌥⌃ then click an element to open it in the editor.
      </div>

      <div className={clsx(styles.stage, comboActive && styles.stageActive)}>
        <div className={clsx(styles.appLayer, opened ? styles.hiddenLayer : styles.shownLayer)}>
          <div className={styles.navbar}>
            <Hoverable el={ELEMENTS[0]} {...hoverableProps}>
              <div className={styles.navLogo} />
            </Hoverable>
            <div className={styles.navLinks}>
              <span className={styles.navLink} />
              <span className={styles.navLink} />
              <span className={styles.navLink} />
            </div>
          </div>

          <div className={styles.productLayout}>
            <Hoverable el={ELEMENTS[1]} {...hoverableProps}>
              <div className={styles.heroImage} />
            </Hoverable>

            <div className={styles.productInfo}>
              <Hoverable el={ELEMENTS[2]} {...hoverableProps}>
                <div className={styles.titleLine} />
              </Hoverable>
              <Hoverable el={ELEMENTS[3]} {...hoverableProps}>
                <div className={styles.priceLine} />
              </Hoverable>
              <Hoverable el={ELEMENTS[4]} {...hoverableProps} fakeHoverOnMobile>
                <div className={styles.descLines} />
              </Hoverable>
              <Hoverable el={ELEMENTS[5]} {...hoverableProps}>
                <div className={styles.ctaButton} />
              </Hoverable>
            </div>
          </div>
        </div>

        <div className={clsx(styles.editorLayer, opened ? styles.shownLayer : styles.hiddenLayer)}>
          {opened && (
            <div className={styles.editorWindow}>
              <div className={styles.editorSidebar}>
                {FILE_TREE.map((file) => (
                  <span key={file} className={clsx(styles.fileEntry, file === opened.file && styles.fileEntryActive)}>
                    {file}
                  </span>
                ))}
              </div>
              <div className={styles.editorMain}>
                <div className={styles.editorTabBar}>
                  <span className={styles.editorTab}>{opened.file}</span>
                  <button
                    type="button"
                    className={styles.editorClose}
                    onClick={() => setOpenedId(null)}
                    aria-label="Back to the app"
                  >
                    ✕
                  </button>
                </div>
                <div className={styles.editorCode}>
                  {opened.code.map((line) => (
                    <div
                      key={line.num}
                      className={clsx(styles.codeLine, line.num === opened.line && styles.codeLineActive)}
                    >
                      <span className={styles.lineNum}>{line.num}</span>
                      <span className={styles.codeText}>{line.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {!opened && (
        <figcaption className={clsx(styles.caption, styles.hintDesktop)}>
          {comboActive ? (
            <>
              <strong className={styles.captionHighlight}>Inspection active</strong>: hover the logo, the image, the
              title, the price, the description, or the button, then click.
            </>
          ) : (
            'Without the combo, these are just elements like any other.'
          )}
        </figcaption>
      )}
    </figure>
  );
}

function Hoverable({
  el,
  comboActive,
  hoveredId,
  setHoveredId,
  setOpenedId,
  fakeHoverOnMobile,
  children,
}: {
  el: ElementSpec;
  comboActive: boolean;
  hoveredId: string | null;
  setHoveredId: (id: string | ((current: string | null) => string | null)) => void;
  setOpenedId: (id: string) => void;
  fakeHoverOnMobile?: boolean;
  children: React.ReactNode;
}) {
  const isHovered = comboActive && hoveredId === el.id;

  return (
    <div
      className={clsx(
        styles.hoverable,
        comboActive && styles.inspectable,
        isHovered && styles.hovered,
        fakeHoverOnMobile && styles.fakeHoverOnMobile,
      )}
      onMouseEnter={() => setHoveredId(el.id)}
      onMouseLeave={() => setHoveredId((current) => (current === el.id ? null : current))}
      onClick={() => comboActive && setOpenedId(el.id)}
      role="button"
      tabIndex={0}
    >
      {children}
      <span
        className={clsx(styles.badge, isHovered && styles.badgeVisible, fakeHoverOnMobile && styles.badgeFakeMobile)}
      >
        {el.file}:{el.line}:{el.col}
      </span>
    </div>
  );
}
