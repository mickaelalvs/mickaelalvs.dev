'use client';

import React, {useState} from 'react';
import {LayoutGroup} from 'motion/react';
import BaseLayout from '../layout/BaseLayout';
import FeaturedProject from './FeaturedProject';
import {FeaturedProjects} from './FeaturedProjects';
import items from '@/data/projects';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<string | number>('');

  const featured = ['Shortvid.io', 'slidev-addon-livecode', 'Code In The Dark'];

  const renderFeatured = () => {
    return items
      .filter((project) => featured.includes(project.title))
      .map((project, index) => (
        <FeaturedProject key={index} index={index} project={project} hovered={hovered} setHovered={setHovered} />
      ));
  };

  const renderAll = () => {
    return items.map((project, index) => (
      <FeaturedProject
        key={index}
        index={`all-${index}`}
        project={project}
        className={styles.projectCard}
        layoutId="allProjects"
      />
    ));
  };

  return (
    <BaseLayout
      title="Projects | Mickaël Alves"
      tagline="Community. Build. Open Source."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <LayoutGroup>
        <p>
          I enjoy working on side projects and <strong>building in public</strong>. I try to work on topics that can
          benefit the <strong>community</strong>. I contribute to open source, though not as much as I'd like. Here you
          can navigate to differents projects, some are still active, others have been discontinued.
        </p>

        <h2>Featured Projects</h2>
        <FeaturedProjects onMouseLeave={() => setHovered('')}>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        <div className={styles.allProjectsGrid}>{renderAll()}</div>

        <p>
          I also try to contribute to open source projects like{' '}
          <a href="https://github.com/remotion-dev/remotion" target="_blank" rel="noopener noreferrer">
            Remotion
          </a>
          ,{' '}
          <a href="https://github.com/pithings/coderaft" target="_blank" rel="noopener noreferrer">
            Coderaft
          </a>
          … To see more, check out my{' '}
          <a href="https://github.com/mickaelalvs" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </LayoutGroup>
    </BaseLayout>
  );
}
