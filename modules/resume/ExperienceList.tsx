import React from 'react';
import styles from './ResumeList.module.scss';
import ProfessionalExperiences from './ProfessionalExperiences';
import Community from './Community';
import Education from './Education';

export default function ExperienceList() {
  return (
    <section className={styles.resumeRoot}>
      <h1>Resume</h1>
      <ProfessionalExperiences />
      <Community />
      <Education />
    </section>
  );
}
