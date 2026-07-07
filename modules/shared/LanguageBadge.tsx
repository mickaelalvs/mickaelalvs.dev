import styles from './LanguageBadge.module.css';

const LABELS: Record<string, string> = {
  fr: 'Français',
  en: 'English',
};

function FrenchFlag() {
  return (
    <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <rect width="1.15" height="2" fill="#0055A4" />
      <rect x="1.15" width="0.7" height="2" fill="#FFFFFF" />
      <rect x="1.85" width="1.15" height="2" fill="#EF4135" />
    </svg>
  );
}

function EnglishFlag() {
  return (
    <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <rect width="60" height="40" fill="#00247D" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFFFFF" strokeWidth="9" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#CF142B" strokeWidth="4" />
      <path d="M30 0 V40 M0 20 H60" stroke="#FFFFFF" strokeWidth="16" />
      <path d="M30 0 V40 M0 20 H60" stroke="#CF142B" strokeWidth="9" />
    </svg>
  );
}

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
      {language === 'fr' && <FrenchFlag />}
      {language === 'en' && <EnglishFlag />}
    </span>
  );
}
