import clsx from 'clsx';
import styles from './Callout.module.css';

type CalloutType = 'info' | 'note' | 'warn';

const ICONS: Record<CalloutType, string> = {
  info: 'ri-information-line',
  note: 'ri-sticky-note-line',
  warn: 'ri-error-warning-line',
};

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

export function Callout({type = 'info', children}: CalloutProps) {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      <span className={clsx(styles.iconChip, styles[type])}>
        <i className={ICONS[type]} aria-hidden="true" />
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
