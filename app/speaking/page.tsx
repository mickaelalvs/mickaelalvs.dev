import React from 'react';
import styles from '../../modules/home/Home.module.scss';
import TalksList from '../../modules/speaking/TalksList';

export default function Speaking() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.hero}>
          <h2>Conferences</h2>
          <h1>Mickaël Alves</h1>
        </div>
        <TalksList />
      </div>
    </>
  );
}
