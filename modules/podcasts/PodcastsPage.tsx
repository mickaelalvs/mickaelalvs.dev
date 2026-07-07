'use client';

import BaseLayout from '../layout/BaseLayout';
import {podcasts} from '@/data/podcasts';
import ListItem from '../shared/ListItem';
import {ListGroup} from '../shared/ListGroup';
import LanguageBadge from '../shared/LanguageBadge';
import {LayoutGroup} from 'framer-motion';
import {useState} from 'react';
import {generateSlug} from '@/utils/slug';
import type {Podcast} from './types/Podcast';

export default function PodcastsPage() {
  const [hovered, setHovered] = useState<string | number>('');

  const sortedPodcasts = [...podcasts].sort((a, b) => b.date.localeCompare(a.date));

  const renderPodcasts = (items: Podcast[]) => {
    return items.map((item, index) => {
      const slug = generateSlug(item.title);

      return (
        <ListItem
          key={index}
          index={index}
          href={`/podcasts/${slug}`}
          title={item.title}
          badge={item.language && <LanguageBadge language={item.language} />}
          date={item.date}
          description={item.description}
          hovered={hovered}
          setHovered={setHovered}
        />
      );
    });
  };

  return (
    <BaseLayout
      title="Podcasts | Mickaël Alves"
      tagline="Ideas. Conversations. Sharing."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <LayoutGroup>
        <p>
          Audio is a powerful medium and a great way to <strong>debate ideas</strong>. I love exchanging ideas with
          people and have had the opportunity to organize or participate in various podcasts. But sharing is even better
          around a table with <strong>amazing guests</strong>.
        </p>

        <h2>Zenikast</h2>
        <p>French podcasts about development and tech communities, created in collaboration with Zenika.</p>
        <ListGroup onMouseLeave={() => setHovered('')}>{renderPodcasts(sortedPodcasts)}</ListGroup>
      </LayoutGroup>
    </BaseLayout>
  );
}
