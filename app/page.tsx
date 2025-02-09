import {Home} from '../modules/home/Home';
import {Hero} from '../modules/home/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Mickaël Alves',
};

export default function HomePage() {
  return (
    <Home>
      <Hero />
    </Home>
  );
}
