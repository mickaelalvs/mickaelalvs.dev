import styles from './GoToSourceDiagram.module.css';

function Box({children, subtitle, accent}: {children: React.ReactNode; subtitle?: string; accent?: boolean}) {
  return (
    <span className={`${styles.box} ${accent ? styles.boxAccent : ''}`}>
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
          <StepLabel>Au build</StepLabel>
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
          <StepLabel sub="(côté utilisateur)">En dev</StepLabel>
          <div className={styles.flow}>
            <Box>⇧⌥⌃ + clic</Box>
            <Arrow />
            <Box subtitle="(devtools-vite)">Lit l&apos;attribut</Box>
            <Arrow />
            <Box>Requête HTTP</Box>
          </div>
        </div>

        <div className={styles.connector}>
          <Arrow direction="down" />
        </div>

        <div className={styles.row}>
          <StepLabel sub="(côté serveur Vite)">En dev</StepLabel>
          <div className={styles.flow}>
            <Box accent>Serveur Vite</Box>
            <Arrow />
            <Box>launch-editor</Box>
            <Arrow />
            <Box>Éditeur ouvert</Box>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        L&apos;injection se fait une fois, au build. Le hover et le clic ne font que lire ce qui a déjà été écrit dans
        le DOM.
      </figcaption>
    </figure>
  );
}
