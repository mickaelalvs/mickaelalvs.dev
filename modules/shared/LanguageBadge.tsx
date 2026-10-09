import styles from './LanguageBadge.module.css';

const LABELS: Record<string, string> = {
  fr: 'Français',
  en: 'English',
};

interface LanguageBadgeProps {
  language: string;
}

export default function LanguageBadge({language}: LanguageBadgeProps) {
  const label = LABELS[language];

  if (!label) {
    return null;
  }

  return (
    <span className={styles.badge} title={label} aria-label={label}>
      {language}
    </span>
  );
}
