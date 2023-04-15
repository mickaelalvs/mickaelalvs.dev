'use client';

import styles from '../modules/home/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.hero}>
          <h2>Mickaël Alves</h2>
          <h1>Web Developer</h1>
        </div>
      </div>
    </>
  );
}
