import styles from "./SideBySide.module.css";

interface SideBySideProps {
  children: React.ReactNode;
}

export function SideBySide({ children }: SideBySideProps) {
  return <div className={styles.sideBySide}>{children}</div>;
}

