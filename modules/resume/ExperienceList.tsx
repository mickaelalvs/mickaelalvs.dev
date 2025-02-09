import React from 'react';
import styles from './ResumeList.module.scss';
import ProfessionalExperiences from './ProfessionalExperiences';
import Community from './Community';
import Education from './Education';
import Summary from './Summary';

export default function ExperienceList() {
  return (
    <section className={styles.resumeRoot}>
      <h1>Resume</h1>
      <Summary />
      <ProfessionalExperiences />
      <Community />
      <Education />
    </section>
  );
}
