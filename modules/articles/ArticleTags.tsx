import styles from "./BlogpostLayout.module.css";

interface ArticleTagsProps {
  tags?: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  if (!tags?.length) return null;

  return (
    <div className={styles.articleTags}>
      <div className={styles.tagsDivider} />
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

