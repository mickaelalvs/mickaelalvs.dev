import styles from './BlogpostLayout.module.css';

interface ArticleShareProps {
  title?: string;
  slug?: string;
}

export default function ArticleShare({title, slug}: ArticleShareProps) {
  if (!title || !slug) return null;

  const url = `https://mickaelalvs.dev/articles/${slug}`;
  const shareIntent = encodeURIComponent(`📰 "${title}" by @mickaelalvs.dev • ${url}`);

  return (
    <div className={styles.articleShare}>
      <a
        href={`https://bsky.app/intent/compose?text=${shareIntent}`}
        className={styles.shareLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-bluesky-line" aria-hidden="true" />
        <span className={styles.shareLinkText}>Share on Bluesky</span>
      </a>
    </div>
  );
}
