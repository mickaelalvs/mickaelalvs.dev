import styles from './ResumeList.module.scss';
import {communities} from './types/resume';
import Image from 'next/image';
import {formatDateRange} from './utils/date';
import React from 'react';

export default function Community() {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.sectionTitle}>Community</h2>
      {communities.map((community) => (
        <div key={community.startDate.getMilliseconds()} className={styles.resumeItem}>
          <div className={styles.title}>
            <h2>
              {community.title} - <span>{community.company.name}</span>
            </h2>
            <Image src={community.company.logo} alt={community.company.name} className={styles.companyLogo} />
          </div>
          <span className={styles.dateAndLocation}>
            <span>{formatDateRange(community.startDate, community.endDate)}</span>,{' '}
            <span className={styles.location}>{community.location}</span>
          </span>
          {community.description ? <p className={styles.description}>{community.description}</p> : null}
          {community.tasks!.length > 0 ? (
            <ul className={styles.tasks}>
              coucou
              {community.tasks?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}
