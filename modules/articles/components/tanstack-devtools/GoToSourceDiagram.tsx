import clsx from 'clsx';
import styles from './GoToSourceDiagram.module.css';

function Box({children, subtitle, accent}: {children: React.ReactNode; subtitle?: string; accent?: boolean}) {
  return (
    <span className={clsx(styles.box, accent && styles.boxAccent)}>
      {children}
      {subtitle && <span className={styles.boxSubtitle}>{subtitle}</span>}
    </span>
  );
}

function Arrow({direction = 'right'}: {direction?: 'right' | 'down'}) {
  return <span className={styles.arrow}>{direction === 'right' ? '→' : '↓'}</span>;
}

function StepLabel({children, sub}: {children: React.ReactNode; sub?: string}) {
  return (
    <span className={styles.stepLabel}>
      {children}
      {sub && <span className={styles.stepLabelSub}>{sub}</span>}
    </span>
  );
}

export function GoToSourceDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.diagram}>
        <div className={styles.row}>
          <StepLabel>At build</StepLabel>
          <div className={styles.flow}>
            <Box>JSX / TSX</Box>
            <Arrow />
            <Box accent subtitle="(oxc-parser)">
              @tanstack/devtools-vite
            </Box>
            <Arrow />
            <Box>{'data-tsd-source="file:L:C"'}</Box>
          </div>
        </div>

        <div className={styles.connector}>
          <Arrow direction="down" />
        </div>

        <div className={styles.row}>
          <StepLabel sub="(user side)">In dev</StepLabel>
          <div className={styles.flow}>
            <Box>⇧⌥⌃ + click</Box>
            <Arrow />
            <Box subtitle="(devtools-vite)">Reads the attribute</Box>
            <Arrow />
            <Box>HTTP request</Box>
          </div>
        </div>

        <div className={styles.connector}>
          <Arrow direction="down" />
        </div>

        <div className={styles.row}>
          <StepLabel sub="(Vite server side)">In dev</StepLabel>
          <div className={styles.flow}>
            <Box accent>Vite server</Box>
            <Arrow />
            <Box>launch-editor</Box>
            <Arrow />
            <Box>Editor open</Box>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        The injection happens once, at build time. Hovering and clicking only read what's already been written to the
        DOM.
      </figcaption>
    </figure>
  );
}
