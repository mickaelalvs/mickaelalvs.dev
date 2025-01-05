import React from 'react';
import Image from 'next/image';
import {podcasts, workshops} from '../../config/speaking/speaking';
import styles from './SpeakingList.module.scss';
import Link from 'next/link';
import {slugElementTitle} from './types/speakingSlug';
import {MainTitle} from '../common/mainTitle/MainTitle';

export default function PodcastList() {
  return (
    <section className={styles.speakingsRoot}>
      <MainTitle title="Podcasts" />
      <div className={styles.speakings}>
        {podcasts.map((podcast) => (
          <div className={styles.speakingElem} key={podcast.title}>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <Image src={podcast.image} alt={podcast.title} width={320} height={180} />
            <Link href={`/speaking/${slugElementTitle(podcast)}`} key={podcast.id} className={styles.pageLink}>
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
