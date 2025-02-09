import styles from './ResumeList.module.scss';
import {experiences} from './types/resume';
import Image from 'next/image';
import {formatDateRange} from './utils/date';
import React from 'react';

export default function ProfessionalExperiences() {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.sectionTitle}>Professional experiences</h2>
      {experiences.map((experience) => (
        <div key={experience.startDate.getMilliseconds()} className={styles.resumeItem}>
          <div className={styles.title}>
            <h2>
              {experience.title} - <span>{experience.company.name}</span>
            </h2>
            <Image src={experience.company.logo} alt={experience.company.name} className={styles.companyLogo} />
          </div>
          <span className={styles.dateAndLocation}>
            <span>{formatDateRange(experience.startDate, experience.endDate)}</span>,{' '}
            <span className={styles.location}>{experience.location}</span>
          </span>
          {experience.description ? <p className={styles.description}>{experience.description}</p> : null}
          {experience.tasks!.length > 0 ? (
            <ul className={styles.tasks}>
              {experience.tasks?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}
