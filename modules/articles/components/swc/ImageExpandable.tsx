'use client';

import Image from 'next/image';
import styles from './ImageExpandable.module.css';

interface ImageExpandableProps {
  src: string;
  alt: string;
  full?: boolean;
  expandable?: boolean;
  accentBorder?: boolean;
  border?: boolean;
  center?: boolean;
  displayWidth?: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageExpandable({
  src,
  alt,
  full = false,
  expandable = true,
  accentBorder = false,
  border = false,
  center = false,
  displayWidth,
  caption,
  width = 1200,
  height = 675,
  className = '',
  style,
}: ImageExpandableProps) {
  const handleExpand = () => {
    window.open(src, '_blank');
  };

  const wrapperClass = full ? `${styles.wrapper} ${styles.wrapperFull}` : styles.wrapper;

  const imageClass = [
    styles.image,
    full && styles.imageFull,
    accentBorder && styles.imageAccentBorder,
    border && styles.imageBorder,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={center ? `${styles.figure} ${styles.figureCenter}` : styles.figure}>
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt}
          className={imageClass}
          style={displayWidth ? {...style, width: displayWidth, minWidth: 0, maxWidth: '100%'} : style}
          width={width}
          height={height}
          sizes={full ? '(min-width: 1024px) 70vw, 100vw' : '100vw'}
        />
        {expandable && (
          <button className={styles.expandBtn} onClick={handleExpand} aria-label="Open image in new tab" type="button">
            <i className="ri-external-link-line" />
          </button>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
