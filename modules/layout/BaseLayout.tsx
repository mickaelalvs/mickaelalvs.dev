"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PostMain, PostContent, PostContainer } from "../shared/Post";
import { Wrapper } from "./Wrapper";
import { ReactNode } from "react";
import styles from "./BaseLayout.module.css";

interface BaseLayoutProps {
  children: ReactNode;
  title?: string;
  tagline?: string;
  primaryColor?: string;
  secondaryColor?: string;
  highlightLastChar?: boolean;
}

export default function BaseLayout({
  children,
  title,
  tagline,
  primaryColor = "pink",
  secondaryColor = "purple",
  highlightLastChar = false,
}: BaseLayoutProps) {
  const displayText = tagline || title || "";

  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const segments = Array.from(segmenter.segment(displayText));
  const textWithoutLastGrapheme = segments
    .slice(0, -1)
    .map((s) => s.segment)
    .join("");
  const lastChar = segments.slice(-1)[0]?.segment || "";

  return (
    <Wrapper>
      <Navbar />
      <PostMain
        style={{
          ["--selection-bg" as string]: `var(--color-${primaryColor})`,
        }}
      >
        <PostContent>
          <PostContainer>
            <h1 className={styles.title}>
              <span
                className={styles.gradientTitle}
                style={{
                  backgroundImage: `linear-gradient(
                    135deg,
                    var(--color-${primaryColor}) 0%,
                    var(--color-${secondaryColor}) 100%
                  )`,
                }}
              >
                {highlightLastChar ? textWithoutLastGrapheme : displayText}
              </span>
              {highlightLastChar && lastChar && (
                <span className={styles.lastChar}>{lastChar}</span>
              )}
            </h1>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  );
}
