import {Metadata} from 'next';
import ProjectsPage from '@/modules/projects/ProjectsPage';
import items from '@/data/projects';
import {getGithubStars} from '@/lib/github-stars';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const stars = await getGithubStars(items);
  return <ProjectsPage stars={stars} />;
}
