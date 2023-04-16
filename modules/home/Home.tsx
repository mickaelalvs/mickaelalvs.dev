import styles from './Home.module.scss';
import React from 'react';

interface HomeProps {
  children: React.ReactNode;
}

export const Home = ({children}: HomeProps) => <div className={styles.home}>{children}</div>;
