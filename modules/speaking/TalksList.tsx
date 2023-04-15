import React from 'react';
import Image from 'next/image';
import {speaking} from '../../config/speaking';
import styles from './TalksList.module.scss';

export default function TalksList() {
  return (
    <div className={styles.talks}>
      {speaking.map((talk) => (
        <div className={styles.talk} key={talk.title}>
          <h2>{talk.title}</h2>
          <div className={styles.details}>
            <p>{talk.description}</p>
            <Image src={talk.image} alt={talk.title} width={320} height={180} />
          </div>
          <div className={styles.conferences}>
            <h3>Conférences</h3>
            <div className={styles.conferencesList}>
              {talk.conferences.map((conference) => (
                <a
                  className={styles.conference}
                  key={conference.name}
                  href={conference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={conference.image} alt={conference.name} />
                  <span>{conference.date}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
