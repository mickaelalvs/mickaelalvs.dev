"use client";

import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import BaseLayout from "../layout/BaseLayout";
import FeaturedProject from "./FeaturedProject";
import { FeaturedProjects } from "./FeaturedProjects";
import ProjectItem from "./ProjectItem";
import items from "@/data/projects";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<string | number>("");

  const renderFeatured = () => {
    const featured = ["Shortvid.io", "Code In The Dark", "Appwrite workshop"];

    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title),
        );
      })
      .filter((item) => {
        if (item.length > 0) {
          return item;
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} index={index} project={item} hovered={hovered} setHovered={setHovered} />;
      });
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className={styles.yearSection}>
          <h3 className={styles.yearTitle}>{item.year}</h3>
          <ul className={styles.projectsList}>
            {item.projects.map((project, pIndex) => {
              return (
                <ProjectItem
                  key={pIndex}
                  project={project}
                  listItemClassName={styles.projectsListItem}
                />
              );
            })}
          </ul>
        </div>
      );
    });
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
          I enjoy working on side projects and{" "}
          <strong>building in public</strong>. I try to work on topics that can
          benefit the <strong>community</strong>. I contribute to open source,
          though not as much as I'd like. Here you can navigate to differents
          projects, some are still active, others have been discontinued.
        </p>

        <h2>Featured Projects</h2>
        <FeaturedProjects onMouseLeave={() => setHovered("")}>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        {renderAll()}
      </LayoutGroup>
    </BaseLayout>
  );
}
