'use client';

import {useRef, useState, Suspense} from 'react';
import {useQueryState, parseAsStringLiteral} from 'nuqs';
import {LayoutGroup, motion} from 'framer-motion';
import Lottie from 'lottie-react';
import Link from 'next/link';
import clsx from 'clsx';
import BaseLayout from '../layout/BaseLayout';
import {Box} from '../shared/Box';
import FeaturedTalk from './FeaturedTalk';
import {speaking} from '@/data/speaking';
import type {Talk} from './types/Talk';
import type {Conference} from './types/Conference';
import {generateSlug} from '@/utils/slug';
import type {ConferenceItem} from './types/ConferenceItem';
import LanguageBadge from '../shared/LanguageBadge';
import styles from './TalksPage.module.css';
import calendarIcon from '../../public/static/icons/talks.json';
import presentationIcon from '../../public/static/icons/presentation.json';

function TalksContent() {
  const [viewMode, setViewMode] = useQueryState(
    'view',
    parseAsStringLiteral(['talks', 'conferences'] as const).withDefault('conferences'),
  );
  const [hoveredTalk, setHoveredTalk] = useState<string | number>('');
  const calendarLottieRef = useRef<any>(null);
  const talkLottieRef = useRef<any>(null);

  // Filtrer pour exclure les podcasts
  const talks = speaking.filter((item) => 'format' in item && item.format !== 'Podcast');

  const renderFeatured = () => {
    return (
      <>
        {talks.slice(0, 3).map((talk, index) => {
          return (
            <FeaturedTalk key={index} talk={talk} index={index} hovered={hoveredTalk} setHovered={setHoveredTalk} />
          );
        })}
      </>
    );
  };

  const renderAllTalks = () => {
    const sorted = [...talks].sort((a, b) => {
      const latestDate = (conferences: typeof a.conferences) =>
        conferences
          .map((c) => c.date)
          .filter(Boolean)
          .sort()
          .at(-1) ?? '0';
      return latestDate(b.conferences).localeCompare(latestDate(a.conferences));
    });
    return sorted.map((talk, index) => {
      return <TalkItem key={index} talk={talk} />;
    });
  };

  const renderByConferences = () => {
    const conferencesByYear: {[year: string]: ConferenceItem[]} = {};

    talks.forEach((talk) => {
      talk.conferences.forEach((conf: Conference) => {
        const year = conf.date ? conf.date.substring(0, 4) : conf.year || new Date().getFullYear().toString();
        if (!conferencesByYear[year]) {
          conferencesByYear[year] = [];
        }
        conferencesByYear[year].push({
          conferenceName: conf.name,
          talkTitle: talk.title,
          talkSlug: generateSlug(talk.title),
          link: conf.link,
          image: conf.image,
          date: conf.date,
          language: talk.language,
        });
      });
    });

    const sortedYears = Object.keys(conferencesByYear).sort((a, b) => b.localeCompare(a));

    return sortedYears.map((year) => {
      const confMap: {[name: string]: ConferenceItem[]} = {};
      conferencesByYear[year].forEach((item) => {
        if (!confMap[item.conferenceName]) {
          confMap[item.conferenceName] = [];
        }
        confMap[item.conferenceName].push(item);
      });

      const sortedConfs = Object.entries(confMap).sort(([_nameA, itemsA], [_, itemsB]) => {
        const dateA = itemsA[0]?.date;
        const dateB = itemsB[0]?.date;
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1; // Sans date à la fin
        if (!dateB) return -1;
        return dateB.localeCompare(dateA);
      });

      return (
        <div key={year} id={`year-${year}`} className={styles.yearSection}>
          <h3 className={styles.yearTitle}>{year}</h3>
          {sortedConfs.map(([confName, items]) => {
            const sortedItems = [...items].sort((a, b) => {
              if (!a.date && !b.date) return 0;
              if (!a.date) return 1;
              if (!b.date) return -1;
              return b.date.localeCompare(a.date);
            });

            const confDate = sortedItems[0]?.date
              ? new Date(sortedItems[0].date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              : null;

            return (
              <div key={confName} className={styles.conferenceGroup}>
                <h4 className={styles.conferenceName}>
                  {confName}
                  {confDate && <span className={styles.talkDate}> - {confDate}</span>}
                  {sortedItems[0]?.language && <LanguageBadge language={sortedItems[0].language} />}
                </h4>
                <ul className={styles.talksList}>
                  {sortedItems.map((item, idx) => (
                    <li key={idx} className={styles.talksListItem}>
                      <Link href={`/talks/${item.talkSlug}`}>{item.talkTitle}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <BaseLayout
      title="Talks | Mickaël Alves"
      tagline="Confs. Meetups. Events."
      primaryColor="purple"
      secondaryColor="cyan"
    >
      <LayoutGroup>
        <p>
          Passionate about <strong>sharing knowledge</strong> as a speaker and teacher, I enjoy speaking at various
          conferences and meetups about web development, tooling, and new technologies.
        </p>

        <h2>Featured Talks</h2>
        <Box className={styles.featuredTalksBox}>
          <LayoutGroup id="featured-talks">
            <div className={styles.featuredTalksContainer} onMouseLeave={() => setHoveredTalk('')}>
              {renderFeatured()}
            </div>
          </LayoutGroup>
        </Box>

        <div className={styles.headerWithToggle}>
          <h2>All Talks</h2>
          <LayoutGroup id="toggle">
            <div className={styles.toggleContainer}>
              <button
                className={clsx(styles.toggleButton, viewMode === 'conferences' && styles.toggleButtonActive)}
                onClick={() => setViewMode('conferences')}
                onMouseEnter={() => calendarLottieRef.current?.play()}
                onMouseLeave={() => calendarLottieRef.current?.stop()}
              >
                {viewMode === 'conferences' && (
                  <motion.div
                    className={styles.toggleBackground}
                    layoutId="toggleBg"
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                  />
                )}
                <span className={styles.toggleLabel}>
                  <span className={styles.toggleIcon}>
                    <Lottie
                      lottieRef={calendarLottieRef}
                      animationData={calendarIcon}
                      loop={false}
                      autoplay={false}
                      style={{width: 18, height: 18}}
                    />
                  </span>
                  <span className={styles.toggleText}>By Year</span>
                </span>
              </button>
              <button
                className={clsx(styles.toggleButton, viewMode === 'talks' && styles.toggleButtonActive)}
                onClick={() => setViewMode('talks')}
                onMouseEnter={() => talkLottieRef.current?.play()}
                onMouseLeave={() => talkLottieRef.current?.stop()}
              >
                {viewMode === 'talks' && (
                  <motion.div
                    className={styles.toggleBackground}
                    layoutId="toggleBg"
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                  />
                )}
                <span className={styles.toggleLabel}>
                  <span className={styles.toggleIcon}>
                    <Lottie
                      lottieRef={talkLottieRef}
                      animationData={presentationIcon}
                      loop={false}
                      autoplay={false}
                      style={{width: 18, height: 18}}
                    />
                  </span>
                  <span className={styles.toggleText}>By Talk</span>
                </span>
              </button>
            </div>
          </LayoutGroup>
        </div>

        {viewMode === 'talks' ? renderAllTalks() : renderByConferences()}
      </LayoutGroup>
    </BaseLayout>
  );
}

function TalkItem({talk}: {talk: Talk}) {
  const slug = generateSlug(talk.title);

  return (
    <div className={styles.talkContainer}>
      <div className={styles.talkContent}>
        <h3>{talk.title}</h3>
        <div className={styles.talkMeta}>
          {talk.language && <LanguageBadge language={talk.language} />}
          <span> • </span>
          <span>{talk.format}</span>
        </div>
        <p className={styles.talkDescription}>{talk.description}</p>
      </div>
      <Link href={`/talks/${slug}`} className={styles.talkButton}>
        <span>View more</span>
        <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  );
}

export default function TalksPage() {
  return (
    <Suspense
      fallback={
        <BaseLayout
          title="Talks | Mickaël Alves"
          tagline="Confs. Meetups. Events."
          primaryColor="purple"
          secondaryColor="cyan"
        >
          <p>Loading...</p>
        </BaseLayout>
      }
    >
      <TalksContent />
    </Suspense>
  );
}
