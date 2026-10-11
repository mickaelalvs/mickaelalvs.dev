'use client';

import {useState, useRef} from 'react';
import React from 'react';
import {motion} from 'motion/react';
import {Lottie, type LottieHandle} from 'lottie-react';
import type {Project} from './types/Project';
import styles from './FeaturedProject.module.css';
import remotionIcon from '../../public/static/icons/remotion.json';
import moonIcon from '../../public/static/icons/moon.json';
import sourceIcon from '../../public/static/icons/source.json';
import mergentIcon from '../../public/static/icons/mergent.json';
import figIcon from '../../public/static/icons/fig.json';
import langbaseIcon from '../../public/static/icons/langbase.json';
import dubIcon from '../../public/static/icons/dub.json';

const iconMap = {
  remotion: remotionIcon,
  moon: moonIcon,
  source: sourceIcon,
  mergent: mergentIcon,
  fig: figIcon,
  langbase: langbaseIcon,
  dub: dubIcon,
};

interface FeaturedProjectProps {
  project: Project;
  stars?: number;
  index: string | number;
  hovered?: string | number;
  setHovered?: (value: string | number) => void;
  className?: string;
  layoutId?: string;
}

export default function FeaturedProject(props: FeaturedProjectProps) {
  const {project} = props;

  const icon = iconMap[project.icon] || sourceIcon;
  const iconRef = useRef<LottieHandle>(null);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.project}${props.className ? ` ${props.className}` : ''}`}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Animation index={props.index} hovered={props.hovered} setHovered={props.setHovered} layoutId={props.layoutId}>
        <div className={styles.iconRow}>
          <Lottie lottieRef={iconRef} style={{width: 24, height: 24}} src={icon} loop={false} autoplay={false} />
          {props.stars !== undefined && <p className={styles.stars}>★ {props.stars}</p>}
        </div>
        <div className={styles.body}>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.description}>{project.description}</p>
          {project.stats && <p className={styles.stats}>{project.stats}</p>}
        </div>
      </Animation>
    </a>
  );
}

interface AnimationProps {
  index: string | number;
  children: React.ReactNode;
  hovered?: string | number;
  setHovered?: (value: string | number) => void;
  layoutId?: string;
}

function Animation(props: AnimationProps) {
  const [localHovered, setLocalHovered] = useState<string | number>('');
  const isControlled = props.hovered !== undefined && props.setHovered !== undefined;
  const hovered = isControlled ? props.hovered! : localHovered;
  const setHovered = isControlled ? props.setHovered! : setLocalHovered;
  const isHovered = hovered === props.index;

  return (
    <motion.span
      className={styles.animContainer}
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => !isControlled && setHovered('')}
    >
      {isHovered && (
        <motion.span
          className={styles.animHovered}
          layoutId={props.layoutId ?? 'featuredProjects'}
          transition={{
            layout: {duration: 0.3, ease: 'easeInOut'},
          }}
        />
      )}

      <div className={styles.contentWrapper}>{props.children}</div>
    </motion.span>
  );
}
