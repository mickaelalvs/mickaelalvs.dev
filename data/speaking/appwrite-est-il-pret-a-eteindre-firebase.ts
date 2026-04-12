import Appwrite from '../../public/static/images/talks/appwrite.webp';
import LyonJS from '../../public/static/images/conferenceLogos/lyonJs.webp';
import Devoxx from '../../public/static/images/conferenceLogos/devoxx.webp';
import SnowCamp from '../../public/static/images/conferenceLogos/snowcamp.webp';
import VeryTechTrip from '../../public/static/images/conferenceLogos/vtt.webp';
import Mixit from '../../public/static/images/conferenceLogos/mixit.svg';
import Breizhcamp from '../../public/static/images/conferenceLogos/breizhcamp.svg';
import DevFestDijon from '../../public/static/images/conferenceLogos/devfestDijon.webp';
import Zenika from '../../public/static/images/conferenceLogos/zenika.svg';
import type {Talk} from '@/modules/talks/types/Talk';
import {l_audart} from '@/data/people';

export const AppwriteEstIlPretAEteindreFirebase: Talk = {
  id: '2',
  title: 'Appwrite est-il prêt à éteindre Firebase ? 🔥',
  language: '(🇫🇷)',
  description:
    "Est-ce que Firebase vous dit quelque chose ? Vous en avez sûrement entendu parler et vous l'avez peut-être déjà utilisé, et pour le coup, c'est normal ! Voilà maintenant plusieurs années que de nombreux développeurs l'utilisent pour faciliter la création de back-end scalable et performant.\n" +
    '\n' +
    "Mais avez-vous déjà entendu parler d'Appwrite ❓\n" +
    '\n' +
    'Peu importe votre réponse, venez découvrir avec nous le duel entre Appwrite la jeune solution open-source et Firebase la flamme de Google 🥊',
  image: Appwrite,
  format: 'Talk',
  videoId: '_QYXiq2fmS0',
  speaker: [l_audart],
  conferences: [
    {
      name: 'LyonJS',
      link: 'https://www.youtube.com/watch?v=RfIUq1NmKxU&pp=ygUGbHlvbmpz',
      date: '2024-02-21',
      image: LyonJS,
    },
    {
      name: 'Devoxx France',
      link: 'https://cfp.devoxx.fr/2023/talk/JON-3628/Appwrite_est-il_pret_a_eteindre_Firebase_%3F_%F0%9F%94%A5',
      date: '2023-04-13',
      image: Devoxx,
    },
    {
      name: 'SnowCamp',
      link: 'https://snowcamp2023.sched.com/event/1EOux/appwrite-est-il-pret-a-eteindre-firebase',
      date: '2023-01-26',
      image: SnowCamp,
    },
    {
      name: 'Very Tech Trip',
      link: 'https://verytechtrip.com/programme',
      date: '2023-02-02',
      image: VeryTechTrip,
    },
    {
      name: 'MiXiT',
      link: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
      date: '2022-05-25',
      image: Mixit,
    },
    {
      name: 'Breizhcamp',
      link: 'https://www.breizhcamp.org/conference/programme/',
      date: '2022-06-29',
      image: Breizhcamp,
    },
    {
      name: 'DevFest Dijon',
      link: 'https://my.weezevent.com/devfest-dijon',
      date: '2022-12-02',
      image: DevFestDijon,
    },
    {
      name: 'Conférence interne Zenika',
      link: 'https://youtu.be/ZO8dwVfKYCo',
      date: null,
      year: '2022',
      image: Zenika,
    },
  ],
};
