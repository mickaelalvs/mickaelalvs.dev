import styles from './Talk.module.scss';
import Image from 'next/image';
import {TalkCard} from './TalkCard';
import React from 'react';
import {Speaking} from '../../../config/speaking/speaking';

interface TalkProps {
  talkData: Speaking;
}

export const Talk = ({talkData}: TalkProps) => {
  return (
    <section className={styles.talkRoot}>
      <div className={styles.talk}>
        <h2>{talkData.title}</h2>
        <div className={styles.details}>
          <div className={styles.infos}>
            <div className={styles.description}>{talkData.description}</div>
          </div>
          <Image src={talkData.image} alt={talkData.title} width={320} height={180} />
        </div>
        <div className={styles.conferences}>
          <h3>Conférences</h3>
          <div className={styles.conferencesList}>
            {talkData.conferences.map((conference) => (
              <TalkCard conference={conference} key={conference.name} />
            ))}
          </div>
        </div>
        {
          talkData.videoId ? (
            <div className={styles.video}>
              <h3>Rediffusion</h3>
              <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${talkData.videoId}`}
                title={talkData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null
        }
      </div>
    </section>
  );
}