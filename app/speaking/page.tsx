import React from 'react';
import TalksList from '../../modules/speaking/TalksList';
import {Home} from '../../modules/home/Home';

import styles from '../../modules/common/layout.module.scss'

export default function Speaking() {
  return (
    <Home>
      <div className={styles.mainTitlePage}>
        <h2>Conferences</h2>
      </div>
      <TalksList />
    </Home>
  );
}
