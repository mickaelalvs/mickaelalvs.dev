'use client';

import React, {ReactNode, HTMLAttributes} from 'react';
import {motion} from 'framer-motion';
import styles from './Post.module.css';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

interface PostComponentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const PostMain = ({children, ...props}: PostComponentProps) => {
  return (
    <main className={styles.postMain} {...props}>
      {children}
    </main>
  );
};

export const Post = ({children, ...props}: PostComponentProps) => {
  return (
    <main className={styles.post} {...props}>
      {children}
    </main>
  );
};

export const PostContainer = ({children, className}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className ?? styles.postContainer}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export const PostContent = ({children, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.postContent} {...props}>
      {children}
    </div>
  );
};
