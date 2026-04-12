import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {generateSlug} from '@/utils/slug';
import type {Talk} from './types/Talk';
import {HoverAnimation} from './HoverAnimation';
import styles from './FeaturedTalk.module.css';

interface FeaturedTalkProps {
  talk: Talk;
  index: string | number;
  hovered?: string | number;
  setHovered?: (value: string | number) => void;
}

export default function FeaturedTalk(props: FeaturedTalkProps) {
  const {talk, hovered, setHovered} = props;
  const slug = generateSlug(talk.title);
  const talkUrl = `/talks/${slug}`;
  const displayImage = talk.featuredImage || talk.image;
  const isPriority = typeof props.index === 'number' && props.index < 3;

  return (
    <Link href={talkUrl} className={styles.talkLink}>
      <HoverAnimation
        id={props.index}
        layoutId="featuredTalks"
        className={styles.hoverWrapper}
        hovered={hovered}
        setHovered={setHovered}
      >
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={displayImage}
              alt={talk.title}
              fill
              className={styles.image}
              priority={isPriority}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{talk.title}</h3>
          </div>
        </div>
      </HoverAnimation>
    </Link>
  );
}
