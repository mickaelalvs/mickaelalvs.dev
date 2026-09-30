'use client';

import styles from './KbdKey.module.css';

interface KbdKeyProps {
  children: React.ReactNode;
  onClick?: () => void;
  pressed?: boolean;
}

export function KbdKey({children, onClick, pressed}: KbdKeyProps) {
  return (
    <kbd
      className={[styles.key, onClick ? styles.clickable : '', pressed ? styles.pressed : ''].join(' ')}
      onClick={onClick}
      {...(onClick && {
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        },
      })}
    >
      {children}
    </kbd>
  );
}
