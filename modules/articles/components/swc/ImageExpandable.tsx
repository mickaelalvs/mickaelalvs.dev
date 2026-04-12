"use client";

import Image from "next/image";
import styles from "./ImageExpandable.module.css";

interface ImageExpandableProps {
  src: string;
  alt: string;
  full?: boolean;
  expandable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageExpandable({
  src,
  alt,
  full = false,
  expandable = true,
  className = "",
  style,
}: ImageExpandableProps) {
  const handleExpand = () => {
    window.open(src, "_blank");
  };

  const wrapperClass = full
    ? `${styles.wrapper} ${styles.wrapperFull}`
    : styles.wrapper;

  const imageClass = full
    ? `${styles.image} ${styles.imageFull} ${className}`
    : `${styles.image} ${className}`;

  return (
    <figure className={styles.figure}>
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt}
          className={imageClass}
          style={style}
          width={1200}
          height={675}
          sizes={full ? "(min-width: 1024px) 70vw, 100vw" : "100vw"}
        />
        {expandable && (
          <button
            className={styles.expandBtn}
            onClick={handleExpand}
            aria-label="Open image in new tab"
            type="button"
          >
            <i className="ri-external-link-line" />
          </button>
        )}
      </div>
    </figure>
  );
}

