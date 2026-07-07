import JavaScriptCoulisses from '../../public/static/images/talks/coulisses-javascript.webp';
import JavaScriptCoulissesFeatured from '../../public/static/images/talks/coulisses-javascript-featured.webp';
import DevQuest from '../../public/static/images/conferenceLogos/devquest.svg';
import SunnyTech from '../../public/static/images/conferenceLogos/sunnyTech.svg';
import BDXIO from '../../public/static/images/conferenceLogos/bdxio.webp';
import DevfestToulouse from '../../public/static/images/conferenceLogos/defestToulouse.webp';
import DevfestDijon from '../../public/static/images/conferenceLogos/devfestDijon.webp';
import LyonJS from '../../public/static/images/conferenceLogos/lyonJs.webp';
import type {Talk} from '@/modules/talks/types/Talk';
import {e_idoux} from '@/data/people';

export const LesCoulissesDeJavaScriptCeQuonUtiliseSansComprendre: Talk = {
  id: '10',
  title: "Les coulisses de JavaScript\u00A0: ce qu'on utilise sans comprendre 🎭",
  language: 'fr',
  description:
    "Bienvenue dans les coulisses d'un des plus grand spectacle du développement web : JavaScript 🪄 Sur scène, tout semble magique : les animations captivent, les promesses sont tenues, et tout s'exécute sans accroc. Mais derrière le rideau, une véritable troupe travaille sans relâche pour donner vie à ce spectacle.\n" +
    '\n' +
    "Dans cette visite guidée, nous vous invitons à lever le rideau sur la mécanique de JavaScript : son engine, les closures, son incontournable event loop, les contextes d'exécution, et bien sûr, ses fameuses promesses. Ces concepts vous sont peut-être familiers, mais n'est-il pas temps d'un peu mieux les comprendre ?\n" +
    '\n' +
    'Prenez vos billets et plongez avec nous dans les rouages fascinants de JavaScript 🎟️',
  image: JavaScriptCoulisses,
  featuredImage: JavaScriptCoulissesFeatured,
  format: 'Talk',
  videoId: 'OKrTqt3sgCE',
  slidesUrl: 'https://talk-js-backstage.vercel.app',
  speaker: [e_idoux],
  conferences: [
    {
      name: 'DevQuest',
      link: 'https://youtu.be/noMdK4o6jVk',
      date: '2025-06-05',
      image: DevQuest,
    },
    {
      name: 'Sunny Tech',
      link: 'https://youtu.be/EjAu5ArJYBw',
      date: '2025-06-27',
      image: SunnyTech,
    },
    {
      name: 'BDX I/O',
      link: 'https://youtu.be/OKrTqt3sgCE',
      date: '2025-11-07',
      image: BDXIO,
    },
    {
      name: 'DevFest Toulouse',
      link: '',
      date: '2025-11-13',
      image: DevfestToulouse,
    },
    {
      name: 'DevFest Dijon',
      link: '',
      date: '2025-12-05',
      image: DevfestDijon,
    },
    {
      name: 'LyonJS',
      link: '',
      date: '2026-05-27',
      image: LyonJS,
    },
  ],
};
