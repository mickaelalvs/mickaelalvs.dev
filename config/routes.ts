interface Route {
  name: string;
  path: string;
  enabled: boolean;
}

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    enabled: true,
  },
  {
    name: 'Resume',
    path: '/resume',
    enabled: true,
  },
  {
    name: 'Speaking',
    path: '/speaking',
    enabled: true,
  },
  {
    name: 'Articles',
    path: '/articles',
    enabled: false,
  },
  {
    name: 'Projects',
    path: '/projects',
    enabled: false,
  },
];
