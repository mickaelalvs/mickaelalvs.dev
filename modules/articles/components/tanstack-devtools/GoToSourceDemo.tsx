'use client';

import {useEffect, useState} from 'react';
import {KbdKey} from '../alt-tab/KbdKey';
import styles from './GoToSourceDemo.module.css';

interface CodeLine {
  num: number;
  code: string;
}

interface ElementSpec {
  id: string;
  file: string;
  line: number;
  col: number;
  className: string;
  code: CodeLine[];
}

const ELEMENTS: ElementSpec[] = [
  {
    id: 'logo',
    file: 'Navbar.tsx',
    line: 4,
    col: 5,
    className: 'navLogo',
    code: [
      {num: 2, code: 'export function Navbar() {'},
      {num: 3, code: '  return ('},
      {num: 4, code: '    <img className={styles.logo} src="/logo.svg" alt="Logo" />'},
      {num: 5, code: '    <nav className={styles.links}>{links}</nav>'},
      {num: 6, code: '  );'},
    ],
  },
  {
    id: 'hero',
    file: 'ProductGallery.tsx',
    line: 9,
    col: 7,
    className: 'heroImage',
    code: [
      {num: 7, code: 'export function ProductGallery({ images }: Props) {'},
      {num: 8, code: '  return ('},
      {num: 9, code: '    <img className={styles.hero} src={images[0]} alt="" />'},
      {num: 10, code: '  );'},
    ],
  },
  {
    id: 'title',
    file: 'ProductTitle.tsx',
    line: 14,
    col: 3,
    className: 'titleLine',
    code: [
      {num: 12, code: 'export function ProductTitle({ name }: Props) {'},
      {num: 13, code: '  return ('},
      {num: 14, code: '    <h1 className={styles.title}>{name}</h1>'},
      {num: 15, code: '  );'},
    ],
  },
  {
    id: 'price',
    file: 'ProductPrice.tsx',
    line: 6,
    col: 5,
    className: 'priceLine',
    code: [
      {num: 4, code: 'export function ProductPrice({ amount }: Props) {'},
      {num: 5, code: '  return ('},
      {num: 6, code: '    <span className={styles.price}>{formatPrice(amount)}</span>'},
      {num: 7, code: '  );'},
    ],
  },
  {
    id: 'description',
    file: 'ProductDescription.tsx',
    line: 5,
    col: 5,
    className: 'descLines',
    code: [
      {num: 3, code: 'export function ProductDescription({ text }: Props) {'},
      {num: 4, code: '  return ('},
      {num: 5, code: '    <p className={styles.description}>{text}</p>'},
      {num: 6, code: '  );'},
    ],
  },
  {
    id: 'cta',
    file: 'AddToCartButton.tsx',
    line: 22,
    col: 3,
    className: 'ctaButton',
    code: [
      {num: 20, code: 'export function AddToCartButton({ onAdd }: Props) {'},
      {num: 21, code: '  return ('},
      {num: 22, code: '    <button className={styles.cta} onClick={onAdd}>'},
      {num: 23, code: '      Ajouter au panier'},
      {num: 24, code: '    </button>'},
    ],
  },
];

const FILE_TREE = [
  'Navbar.tsx',
  'ProductGallery.tsx',
  'ProductTitle.tsx',
  'ProductPrice.tsx',
  'ProductDescription.tsx',
  'AddToCartButton.tsx',
];

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

  return (
    <figure className={styles.figure}>
      <div className={`${styles.hint} ${styles.hintDesktop}`}>
        Maintiens{' '}
        <span className={styles.kbdWrapper}>
          <span className={styles.tryItHint}>try it ↓</span>
          <KbdKey pressed={modifiers.shift}>⇧</KbdKey> <KbdKey pressed={modifiers.alt}>⌥</KbdKey>{' '}
          <KbdKey pressed={isMac ? modifiers.meta : modifiers.ctrl}>{isMac ? '⌘' : '⌃'}</KbdKey>
        </span>
        , puis survole et clique un élément.
      </div>
      <div className={`${styles.hint} ${styles.hintMobile}`}>
        Aperçu : sur desktop, maintiens ⇧⌥⌃ puis clique un élément pour l&apos;ouvrir dans l&apos;éditeur.
      </div>

      <div className={`${styles.stage} ${comboActive ? styles.stageActive : ''}`}>
        <div className={`${styles.appLayer} ${opened ? styles.hiddenLayer : styles.shownLayer}`}>
          <div className={styles.navbar}>
            <Hoverable
              el={ELEMENTS[0]}
              comboActive={comboActive}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              setOpenedId={setOpenedId}
            >
              <div className={styles.navLogo} />
            </Hoverable>
            <div className={styles.navLinks}>
              <span className={styles.navLink} />
              <span className={styles.navLink} />
              <span className={styles.navLink} />
            </div>
          </div>

          <div className={styles.productLayout}>
            <Hoverable
              el={ELEMENTS[1]}
              comboActive={comboActive}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              setOpenedId={setOpenedId}
            >
              <div className={styles.heroImage} />
            </Hoverable>

            <div className={styles.productInfo}>
              <Hoverable
                el={ELEMENTS[2]}
                comboActive={comboActive}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                setOpenedId={setOpenedId}
              >
                <div className={styles.titleLine} />
              </Hoverable>
              <Hoverable
                el={ELEMENTS[3]}
                comboActive={comboActive}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                setOpenedId={setOpenedId}
              >
                <div className={styles.priceLine} />
              </Hoverable>
              <Hoverable
                el={ELEMENTS[4]}
                comboActive={comboActive}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                setOpenedId={setOpenedId}
                fakeHoverOnMobile
              >
                <div className={styles.descLines} />
              </Hoverable>
              <Hoverable
                el={ELEMENTS[5]}
                comboActive={comboActive}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                setOpenedId={setOpenedId}
              >
                <div className={styles.ctaButton} />
              </Hoverable>
            </div>
          </div>
        </div>

        <div className={`${styles.editorLayer} ${opened ? styles.shownLayer : styles.hiddenLayer}`}>
          {opened && (
            <div className={styles.editorWindow}>
              <div className={styles.editorSidebar}>
                {FILE_TREE.map((file) => (
                  <span
                    key={file}
                    className={`${styles.fileEntry} ${file === opened.file ? styles.fileEntryActive : ''}`}
                  >
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
                    aria-label="Retour à l'app"
                  >
                    ✕
                  </button>
                </div>
                <div className={styles.editorCode}>
                  {opened.code.map((line) => (
                    <div
                      key={line.num}
                      className={`${styles.codeLine} ${line.num === opened.line ? styles.codeLineActive : ''}`}
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
        <figcaption className={`${styles.caption} ${styles.hintDesktop}`}>
          {comboActive ? (
            <>
              <strong className={styles.captionHighlight}>Inspection active</strong> : survole le logo, l&apos;image, le
              titre, le prix, la description ou le bouton, puis clique.
            </>
          ) : (
            'Sans la combinaison, ce sont des éléments comme les autres.'
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
  return (
    <div
      className={`${styles.hoverable} ${comboActive ? styles.inspectable : ''} ${
        comboActive && hoveredId === el.id ? styles.hovered : ''
      } ${fakeHoverOnMobile ? styles.fakeHoverOnMobile : ''}`}
      onMouseEnter={() => setHoveredId(el.id)}
      onMouseLeave={() => setHoveredId((current) => (current === el.id ? null : current))}
      onClick={() => comboActive && setOpenedId(el.id)}
      role="button"
      tabIndex={0}
    >
      {children}
      <span
        className={`${styles.badge} ${comboActive && hoveredId === el.id ? styles.badgeVisible : ''} ${fakeHoverOnMobile ? styles.badgeFakeMobile : ''}`}
      >
        {el.file}:{el.line}:{el.col}
      </span>
    </div>
  );
}
