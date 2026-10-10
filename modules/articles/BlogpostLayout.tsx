'use client';

import {ReactNode, useEffect, useRef, useState} from 'react';
import {motion} from 'motion/react';
import Footer from '../layout/Footer';
import BackLink from '../shared/BackLink';
import BlogDate from '../shared/BlogDate';
import articlesIcon from '../../public/static/icons/articles.json';
import {riseIn} from '../shared/riseIn';
import {Post, PostMain, PostContent, PostContainer} from '../shared/Post';
import {Wrapper} from '../layout/Wrapper';
import PageTransition from '../layout/PageTransition';
import ArticleHeader from './ArticleHeader';
import ArticleShare from './ArticleShare';
import ArticleTags from './ArticleTags';
import ReadingProgress from './ReadingProgress';
import TableOfContents from './TableOfContents';
import styles from './BlogpostLayout.module.css';
import type {Person} from '@/data/people';
import type {HeadingItem} from '@/lib/extract-headings';

interface BlogpostLayoutProps {
  children: ReactNode;
  title?: string;
  slug?: string;
  image?: string;
  date?: string;
  readingTime?: string;
  tags?: string[];
  authors?: Person[];
  language?: string;
  headings?: HeadingItem[];
}

export default function BlogpostLayout({
  children,
  title,
  slug,
  image,
  date,
  readingTime,
  tags,
  authors,
  language,
  headings = [],
}: BlogpostLayoutProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translateY(0)');

  useEffect(() => {
    if (!image || typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const parallaxY = scrollY * 0.5;
          setTransform(`translateY(${parallaxY}px)`);
          ticking = false;
        });
        ticking = true;
      }
    };

    const checkDesktop = () => window.innerWidth >= 1024;

    if (checkDesktop()) {
      window.addEventListener('scroll', handleScroll, {passive: true});
      handleScroll();
    }

    const handleResize = () => {
      if (checkDesktop()) {
        handleScroll();
      } else {
        setTransform('translateY(0)');
      }
    };

    window.addEventListener('resize', handleResize, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [image]);

  return (
    // `data-navbar-dark` switches the global Navbar to light-on-dark over the hero image (see Navbar.module.css)
    <PageTransition>
      <Wrapper data-navbar-dark={image ? '' : undefined}>
        <ReadingProgress />
        <Main image={image}>
          {image && (
            <div className={styles.postHeader}>
              <motion.h1 className={`${styles.postTitle} ${styles.postHeaderTitle}`} {...riseIn}>
                {title}
              </motion.h1>
              <div
                ref={imageRef}
                className={styles.postImage}
                style={{
                  backgroundImage: image ? `url(${image})` : undefined,
                  transform,
                }}
              />
              <h2 className={`${styles.postSubtitle} ${styles.postHeaderSubtitle}`}>
                {date && <BlogDate dateString={date} readingTime={readingTime} />}
              </h2>
            </div>
          )}
          <PostContent>
            <div
              className={
                headings.length > 0
                  ? `${styles.postContentInner} ${styles.postContentWithToc}`
                  : styles.postContentInner
              }
            >
              {headings.length > 0 && (
                <aside className={styles.tocSidebar} data-pagefind-ignore>
                  <TableOfContents headings={headings} />
                </aside>
              )}
              <PostContainer>
                {!image && (
                  <div>
                    <h1 className={`${styles.postTitle} ${styles.postContentTitle}`}>{title}</h1>
                    <h2 className={`${styles.postSubtitle} ${styles.postContentSubtitle}`}>
                      {date && <BlogDate dateString={date} readingTime={readingTime} />}
                    </h2>
                  </div>
                )}

                <ArticleHeader authors={authors} language={language} />

                {title && <div className={styles.contentDivider} />}

                {children}

                <ArticleShare title={title} slug={slug} />

                <ArticleTags tags={tags} />

                {slug && <BackLink href="/articles" label="Read other articles" icon={articlesIcon} />}
              </PostContainer>
            </div>
          </PostContent>
        </Main>
        <Footer />
      </Wrapper>
    </PageTransition>
  );
}

// Pagefind indexes articles for the command bar search. The table of contents has data-pagefind-ignore,
// otherwise its headings would show up as duplicate hits.
const pagefindProps = {'data-pagefind-body': '', 'data-pagefind-filter': 'type:article'};

function Main(props: {children: ReactNode; image?: string}) {
  return props.image ? (
    <Post {...pagefindProps}>{props.children}</Post>
  ) : (
    <PostMain {...pagefindProps}>{props.children}</PostMain>
  );
}
