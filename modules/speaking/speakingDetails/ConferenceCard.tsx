import Image from 'next/image';
import React from 'react';
import {Conference} from '../types/speaking';
import styles from './ConferenceCard.module.scss';

export const ConferenceCard = ({conference}: {conference: Conference}) => (
  <a className={styles.conferenceCard} key={conference.name} href={conference.link} target="_blank" rel="noopener noreferrer">
    <Image src={conference.image} alt={conference.name} />
    <span>{conference.date}</span>
  </a>
);
