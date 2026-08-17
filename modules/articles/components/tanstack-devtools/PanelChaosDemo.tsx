'use client';

import {useRef, useState} from 'react';
import clsx from 'clsx';
import {KbdKey} from '../alt-tab/KbdKey';
import styles from './PanelChaosDemo.module.css';

type TabId = 'query' | 'team' | 'redux' | 'router' | 'more';

const TABS: {id: TabId; label: string}[] = [
  {id: 'query', label: 'Query'},
  {id: 'team', label: 'Team'},
  {id: 'redux', label: 'Redux'},
  {id: 'router', label: 'Router'},
  {id: 'more', label: '···'},
];

const QUERY_ROWS = [
  {key: "['users']", status: 'fresh'},
  {key: "['user', 42]", status: 'stale'},
  {key: "['posts', { page: 1 }]", status: 'fetching'},
] as const;

const TEAM_ROWS = [
  "emit('feature-flag-toggle', { flag: 'new-checkout' })",
  "emit('analytics-event', { name: 'cta_click' })",
];

const FEATURE_FLAGS = [
  {label: 'new-checkout', on: true},
  {label: 'dark-mode-beta', on: false},
];

const REDUX_ROWS = ['@@redux/INIT', 'cart/addItem', 'user/loginSuccess'];

function TrafficLights() {
  return (
    <div className={styles.dots}>
      <span className={`${styles.dot} ${styles.dotRed}`} />
      <span className={`${styles.dot} ${styles.dotYellow}`} />
      <span className={`${styles.dot} ${styles.dotGreen}`} />
    </div>
  );
}

function LineList({items}: {items: string[]}) {
  return (
    <div className={styles.consoleList}>
      {items.map((item) => (
        <span key={item} className={styles.consoleLine}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ToggleRow({label, on}: {label: string; on: boolean}) {
  return (
    <div className={styles.toggleRow}>
      <span className={styles.consoleLine}>{label}</span>
      <span className={clsx(styles.toggleSwitch, on && styles.toggleSwitchOn)}>
        <span className={styles.toggleThumb} />
      </span>
    </div>
  );
}

function PlaceholderPanel() {
  return (
    <div className={styles.consoleList}>
      <span className={styles.skeletonLine} />
      <span className={styles.skeletonLine} />
      <span className={styles.skeletonLineShort} />
    </div>
  );
}

function TabContent({tab}: {tab: TabId}) {
  if (tab === 'query') {
    return (
      <div className={styles.consoleList}>
        {QUERY_ROWS.map((row) => (
          <div key={row.key} className={styles.consoleRow}>
            <span className={styles.consoleLine}>{row.key}</span>
            <span className={`${styles.badge} ${styles[`badge${row.status[0].toUpperCase()}${row.status.slice(1)}`]}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'redux') return <LineList items={REDUX_ROWS} />;
  if (tab === 'router' || tab === 'more') return <PlaceholderPanel />;
  return (
    <div className={styles.teamPanels}>
      <div className={styles.teamSection}>
        <span className={styles.sectionLabel}>Feature Flipping</span>
        <div className={styles.consoleList}>
          {FEATURE_FLAGS.map((flag) => (
            <ToggleRow key={flag.label} label={flag.label} on={flag.on} />
          ))}
          <span className={styles.skeletonLineShort} />
        </div>
      </div>
      <div className={styles.teamSection}>
        <span className={styles.sectionLabel}>Event log</span>
        <LineList items={TEAM_ROWS} />
      </div>
    </div>
  );
}

function useResizable(initial: number, min: number, max: number, axis: 'x' | 'y', direction: 1 | -1) {
  const [size, setSize] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const start = useRef<{pos: number; size: number} | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    start.current = {pos: axis === 'x' ? e.clientX : e.clientY, size};
    setDragging(true);
    const previousUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    const handleMove = (ev: PointerEvent) => {
      if (!start.current) return;
      const current = axis === 'x' ? ev.clientX : ev.clientY;
      const delta = (current - start.current.pos) * direction;
      setSize(Math.min(max, Math.max(min, start.current.size + delta)));
    };
    const handleUp = () => {
      start.current = null;
      setDragging(false);
      document.body.style.userSelect = previousUserSelect;
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  return [size, onPointerDown, dragging] as const;
}

function ResizeHandle({onPointerDown, axis}: {onPointerDown: (e: React.PointerEvent) => void; axis: 'x' | 'y'}) {
  return (
    <div
      className={clsx(styles.resizeHandle, axis === 'x' ? styles.resizeHandleX : styles.resizeHandleY)}
      onPointerDown={onPointerDown}
    />
  );
}

const STAGE_HEIGHT = 410;
const MIN_BODY_HEIGHT = 140;

export function PanelChaosDemo() {
  const [tidy, setTidy] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('query');

  const [leftWidth, resizeLeft, leftDragging] = useResizable(150, 100, 280, 'x', 1);
  const [rightWidth, resizeRight, rightDragging] = useResizable(230, 120, 360, 'x', -1);
  const [bottomHeight, resizeBottom, bottomDragging] = useResizable(150, 90, STAGE_HEIGHT - MIN_BODY_HEIGHT, 'y', -1);

  return (
    <figure className={styles.figure}>
      <div className={styles.browserWindow}>
        <div className={styles.browserChrome}>
          <TrafficLights />
          <div className={styles.addressBar}>myapp.dev</div>
          <div className={styles.extensionIcons}>
            <span className={styles.extIcon}>⋮</span>
          </div>
        </div>

        <div
          className={styles.body}
          style={{height: STAGE_HEIGHT - bottomHeight, transition: bottomDragging ? 'none' : undefined}}
        >
          <div
            className={clsx(styles.dockLeft, tidy && styles.dockHidden)}
            style={{width: tidy ? 0 : leftWidth, transition: leftDragging ? 'none' : undefined}}
          >
            <div className={styles.dockHeader}>Team DevTools</div>
            <div className={styles.dockContent}>
              <span className={styles.skeletonLine} />
              <span className={styles.skeletonLine} />
              <span className={styles.skeletonLineShort} />
            </div>
            {!tidy && <ResizeHandle axis="x" onPointerDown={resizeLeft} />}
          </div>

          <div className={styles.pageContent}>
            <div className={styles.pageNav} />
            <div className={styles.pageBlock} />
            <div className={styles.pageBlockSmall} />
          </div>

          <div
            className={clsx(styles.dockRight, tidy && styles.dockHidden)}
            style={{width: tidy ? 0 : rightWidth, transition: rightDragging ? 'none' : undefined}}
          >
            {!tidy && <ResizeHandle axis="x" onPointerDown={resizeRight} />}
            <div className={styles.devtoolsTabs}>
              <span className={`${styles.devtoolsTab} ${styles.devtoolsTabActive}`}>Redux</span>
            </div>
            <div className={styles.dockContent}>
              <LineList items={REDUX_ROWS} />
            </div>
          </div>
        </div>

        <div className={styles.bottomStage} style={{height: bottomHeight}}>
          <ResizeHandle axis="y" onPointerDown={resizeBottom} />

          <div className={clsx(styles.bottomChaos, tidy && styles.hiddenLayer)}>
            <span className={styles.panelLabel}>TanStack Query</span>
            <span className={styles.skeletonLineInline} />
          </div>

          <div className={clsx(styles.bottomClean, tidy && styles.shownLayer)}>
            <div className={styles.shellTabsColumn}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={clsx(styles.shellTab, activeTab === tab.id && styles.shellTabActive)}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.shellBody}>
              <TabContent tab={activeTab} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.toggleWrapper}>
        <KbdKey onClick={() => setTidy((t) => !t)}>{tidy ? '🔥 Back to hell' : '🪄 Tidy into one shell'}</KbdKey>
        <span className={styles.tryItHint}>try it ↑</span>
      </div>
    </figure>
  );
}
