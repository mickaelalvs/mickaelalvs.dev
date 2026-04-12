"use client";

import styles from "./KbdKey.module.css";

interface KbdKeyProps {
  children: React.ReactNode;
  onClick?: () => void;
  pressed?: boolean;
}

export function KbdKey({ children, onClick, pressed }: KbdKeyProps) {
  return (
    <kbd
      className={[
        styles.key,
        onClick ? styles.clickable : "",
        pressed ? styles.pressed : "",
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </kbd>
  );
}