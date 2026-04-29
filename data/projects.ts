import type {Project} from '@/modules/projects/types/Project';

const items: Project[] = [
  {
    title: 'Shortvid.io',
    description: 'Generate short videos for your social media',
    url: 'https://github.com/lyonjs/shortvid.io',
    active: true,
    icon: 'remotion',
    stars: true,
  },
  {
    title: 'slidev-addon-livecode',
    description: 'Embed a live VS Code IDE in your Slidev presentations',
    url: 'https://github.com/mickaelalvs/slidev-addon-livecode',
    active: true,
    icon: 'source',
    stars: true,
  },
  {
    title: 'Code In The Dark',
    description: 'You thought you knew front-end',
    url: 'https://github.com/lyonjs/code-in-the-dark-editor',
    active: true,
    icon: 'moon',
    stats: '4+ events',
    stars: true,
  },
  {
    title: 'Appwrite workshop',
    description: 'Learn how to use Appwrite',
    url: 'https://github.com/mickaelalvs/appwrite-workshop',
    active: true,
    icon: 'mergent',
    stats: '5 modules',
    stars: true,
  },
  {
    title: 'lyonjs.org',
    description: 'LyonJS website codebase (Next.js, Css Modules, Meetup.com APIs)',
    url: 'https://github.com/lyonjs/lyonjs.github.com',
    active: true,
    icon: 'dub',
    stars: true,
  },
  {
    title: 'flo-du-bot',
    description: 'GitHub Action that enforces tests are added for every new feature or bug fix in a pull request.',
    url: 'https://github.com/Slashgear/flo-du-bot',
    active: true,
    icon: 'langbase',
    stars: true,
  },
];

export default items;
