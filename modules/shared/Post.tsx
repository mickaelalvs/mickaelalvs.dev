import React, {ReactNode, HTMLAttributes} from 'react';
import styles from './Post.module.css';

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
        <div key={index} className="rise-in">
          {child}
        </div>
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
