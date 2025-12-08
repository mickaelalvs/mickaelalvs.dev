import type { Project } from "./types/Project";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem(props: ProjectItemProps) {
  const { project } = props;

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </li>
  );
}
