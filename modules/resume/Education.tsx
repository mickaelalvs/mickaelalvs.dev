import styles from './ResumeList.module.scss';
import {educations} from './types/resume';
import Image from 'next/image';
import {formatDateRange} from './utils/date';
import React from 'react';

export default function Education() {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.sectionTitle}>Education</h2>
      {educations.map((education) => (
        <div key={education.startDate.getMilliseconds()} className={styles.resumeItem}>
          <div className={styles.title}>
            <h2>
              {education.title} - <span>{education.school.name}</span>
            </h2>
            <Image src={education.school.logo} alt={education.school.name} className={styles.companyLogo} />
          </div>
          <span className={styles.subject}>{education.subject}</span>
          <span className={styles.dateAndLocation}>
            <span>{formatDateRange(education.startDate, education.endDate)}</span>,{' '}
            <span className={styles.location}>{education.location}</span>
          </span>
          {education.description ? <p className={styles.description}>{education.description}</p> : null}
          {education.tasks!.length > 0 ? (
            <ul className={styles.tasks}>
              {education.tasks?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}
