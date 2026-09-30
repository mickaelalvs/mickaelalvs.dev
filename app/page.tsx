import {Metadata} from 'next';
import HomePage from '@/modules/home/HomePage';

export const metadata: Metadata = {
  title: {absolute: 'Mickaël Alves - Tech Lead Frontend, Speaker & Developer Experience Enthusiast'},
};

export default function Index() {
  return <HomePage />;
}
