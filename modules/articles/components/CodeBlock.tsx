'use client';

import {isValidElement, useRef, useState} from 'react';
import type {ComponentPropsWithoutRef} from 'react';
import styles from './CodeBlock.module.css';
import './code-icons.css';

type CodeBlockProps = ComponentPropsWithoutRef<'pre'> & {icon?: string};

const LANGUAGE_ICONS: Record<string, string> = {
  bash: 'si-gnubash',
  sh: 'si-gnubash',
  shell: 'si-gnubash',
  html: 'si-html5',
  css: 'si-css3',
  js: 'si-javascript',
  javascript: 'si-javascript',
  mjs: 'si-javascript',
  jsx: 'si-react',
  tsx: 'si-react',
  ts: 'si-typescript',
  typescript: 'si-typescript',
  vue: 'si-vuedotjs',
  svelte: 'si-svelte',
  json: 'si-json',
  md: 'si-markdown',
  mdx: 'si-markdown',
};

function LanguageBadge({language}: {language: string}) {
  const iconClass = LANGUAGE_ICONS[language];

  if (!iconClass) return <span className={styles.language}>{language}</span>;

  return (
    <span className={`${styles.language} ${styles.languageIcon}`} role="img" aria-label={language} title={language}>
      <i className={iconClass} aria-hidden="true" />
    </span>
  );
}

function getLanguage(children: CodeBlockProps['children']): string | undefined {
  if (!isValidElement<{className?: string}>(children)) return undefined;
  return children.props.className?.match(/language-(\w+)/)?.[1];
}

export function CodeBlock({children, className, title, icon, ...props}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const language = getLanguage(children);
  const titleIcon = icon ?? (language ? LANGUAGE_ICONS[language] : undefined);

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? '';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.title}>
          {titleIcon && <i className={titleIcon} aria-hidden="true" />}
          {title}
        </div>
      )}
      <div className={styles.codeArea}>
        <button type="button" className={styles.copyButton} onClick={handleCopy} aria-label="Copy code">
          <i className={copied ? 'ri-check-line' : 'ri-file-copy-line'} aria-hidden="true" />
        </button>
        <pre ref={preRef} className={`${className ?? ''} ${styles.pre}`} {...props}>
          {children}
        </pre>
        {language && <LanguageBadge language={language} />}
      </div>
    </div>
  );
}
