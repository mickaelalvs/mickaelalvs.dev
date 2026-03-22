"use client";

import React, { useEffect, useState } from "react";
import type { HeadingItem } from "@/lib/extract-headings";
import styles from "./TableOfContents.module.css";

function stripEmojis(str: string): string {
  return str.replace(/\p{Extended_Pictographic}/gu, "").replace(/\s+/g, " ").trim();
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const OFFSET = 600;

    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      let current: string | null = null;
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Table des matières">
      <div className={styles.tocHeader}>
        <svg
          className={styles.tocIcon}
          aria-label="Table des matières"
          fill="none"
          role="graphics-symbol"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H3C2.44772 19 2 18.5523 2 18Z"
            fillRule="evenodd"
          />
        </svg>
        <h3 className={styles.tocTitle}>On this page</h3>
      </div>
      <div className={styles.tocLinks}>
        {headings.map(({ id, text }, index) => (
          <React.Fragment key={id}>
            {index > 0 && (
              <>
                <span className={styles.separator} aria-hidden />
                <span className={styles.separator} aria-hidden />
              </>
            )}
            <a
              href={`#${id}`}
              className={activeId === id ? styles.tocLinkActive : styles.tocLink}
            >
              <span
                className={
                  activeId === id ? styles.indicatorActive : styles.indicator
                }
                aria-hidden
              />
              <span className={styles.tocLinkText} title={text}>
                {stripEmojis(text)}
              </span>
            </a>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
