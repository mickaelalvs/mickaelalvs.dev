import type {Project} from './types/Project';

interface ProjectItemProps {
  project: Project;
  listItemClassName?: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  const {project, listItemClassName} = props;

  return (
    <li className={listItemClassName}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </li>
  );
}
