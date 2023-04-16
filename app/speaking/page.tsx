import React from 'react';
import styles from '../../modules/home/Hero.module.scss';
import TalksList from '../../modules/speaking/TalksList';
import {Home} from '../../modules/home/Home';

export default function Speaking() {
  return (
    <Home>
      <div className={styles.hero}>
        <h2>Conferences</h2>
        <h1>Mickaël Alves</h1>
      </div>
      <TalksList />
    </Home>
  );
}
