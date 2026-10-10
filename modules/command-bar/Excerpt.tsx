import styles from './CommandBar.module.css';

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
};

const decode = (text: string) => text.replace(/&(?:amp|lt|gt|quot|#39|#x27);/g, (entity) => ENTITIES[entity] ?? entity);

const MARKED = /(<mark>.*?<\/mark>)/g;
const OPEN_TAG = '<mark>';
const CLOSE_TAG = '</mark>';

/**
 * Renders a Pagefind excerpt, where matches are wrapped in <mark> tags.
 * The string is split and rebuilt as React nodes so no HTML is ever injected.
 */
export default function Excerpt({text}: {text: string}) {
  return (
    <span className={styles.excerpt}>
      {text.split(MARKED).map((part, index) =>
        part.startsWith(OPEN_TAG) ? (
          <mark key={index} className={styles.mark}>
            {decode(part.slice(OPEN_TAG.length, -CLOSE_TAG.length))}
          </mark>
        ) : (
          decode(part)
        ),
      )}
    </span>
  );
}
