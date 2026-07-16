'use client';

import {useRef, useState} from 'react';
import type {ComponentPropsWithoutRef} from 'react';
import styles from './CodeBlock.module.css';

type CodeBlockProps = ComponentPropsWithoutRef<'pre'>;

export function CodeBlock({children, className, title, ...props}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? '';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <button type="button" className={styles.copyButton} onClick={handleCopy} aria-label="Copy code">
        <i className={copied ? 'ri-check-line' : 'ri-file-copy-line'} aria-hidden="true" />
      </button>
      <pre ref={preRef} className={`${className ?? ''} ${styles.pre}`} {...props}>
        {children}
      </pre>
    </div>
  );
}
