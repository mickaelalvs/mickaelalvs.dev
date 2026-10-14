import {Metadata} from 'next';
import HomePage from '@/modules/home/HomePage';

export const metadata: Metadata = {
  title: {absolute: 'Mickaël Alves'},
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Mickaël Alves',
    url: 'https://mickaelalvs.dev',
  },
};

export default function Index() {
  return <HomePage />;
}
