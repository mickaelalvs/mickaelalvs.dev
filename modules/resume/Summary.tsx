import styles from './ResumeList.module.scss';
import React from 'react';

export default function Summary() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Summary</h2>
      <p className={styles.summary}>
        French Web Maker, application builder, and passionate speaker on web development! 👨🏻‍💻 Frontend developer
        passionate about React ecosystem, DX, tooling, and the Web, always eager to take on new challenges and
        continuously learn and share knowledge with others!
      </p>
    </section>
  );
}
