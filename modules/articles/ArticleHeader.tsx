import CoAuthorAvatar from "./CoAuthorAvatar";
import type { Person } from "@/data/people";
import styles from "./BlogpostLayout.module.css";

interface ArticleHeaderProps {
  authors?: Person[];
  language?: string;
}

export default function ArticleHeader({
  authors,
  language,
}: ArticleHeaderProps) {
  if (!authors?.length && !language) return null;

  return (
    <div className={styles.articleHeader}>
      {language && (
        <span className={styles.headerItem}>
          {language === "en"
            ? "🇬🇧 English"
            : language === "fr"
              ? "🇫🇷 Français"
              : language}
        </span>
      )}
      {authors && authors.length > 0 && (
        <div className={styles.coAuthorsSection}>
          <span className={styles.coAuthorsLabel}>Co-authors</span>
          <div className={styles.coAuthorsList}>
            {authors.map((author) => (
              <CoAuthorAvatar key={author.id} author={author} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

