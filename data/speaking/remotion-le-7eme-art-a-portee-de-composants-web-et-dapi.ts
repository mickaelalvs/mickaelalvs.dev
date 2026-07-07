import Remotion from '../../public/static/images/talks/remotion.webp';
import RemotionFeatured from '../../public/static/images/talks/remotion-featured.webp';
import Mixit from '../../public/static/images/conferenceLogos/mixit.svg';
import SnowCamp from '../../public/static/images/conferenceLogos/snowcamp.webp';
import TouraineTech from '../../public/static/images/conferenceLogos/touraineTech.svg';
import LyonJS from '../../public/static/images/conferenceLogos/lyonJs.webp';
import Bedrock from '../../public/static/images/conferenceLogos/bedrock.svg';
import type {Talk} from '@/modules/talks/types/Talk';
import {a_caron} from '@/data/people';

export const RemotionLe7emeArtAPorteeDeComposantsWebEtDApi: Talk = {
  id: '3',
  title: "Remotion\u00A0: le 7ème art à portée de composants web et d'API 🎬",
  language: 'fr',
  description:
    "Remotion est une lib open source publiée en 2019, qui permet la génération de gif, d'animations, de vidéos de manière programmatique, à partir de composant React ! Nous allons vous partager notre aventure de création de trailer vidéo dans le contexte des plateformes de streaming sur lesquels nous travaillons chez Bedrock. Nostalgique des programmes du début des années 2000, on a essayé de reproduire quelques bandes d'annonces pour vous rappelez des souvenirs et vous montrer à quel point c'est facile !\n" +
    '\n' +
    'Installez-vous et préparez vos pop-corn la séance va commencer ! 🍿',
  image: Remotion,
  featuredImage: RemotionFeatured,
  format: 'Talk',
  videoId: 'mr_-LTkLl8A',
  speaker: [a_caron],
  conferences: [
    {
      name: 'MiXiT',
      link: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
      date: '2023-04-14',
      image: Mixit,
    },
    {
      name: 'SnowCamp',
      link: 'https://snowcamp2023.sched.com/event/1EOux/appwrite-est-il-pret-a-eteindre-firebase',
      date: '2023-01-26',
      image: SnowCamp,
    },
    {
      name: 'Touraine Tech',
      link: 'https://my.weezevent.com/devfest-dijon',
      date: '2023-01-20',
      image: TouraineTech,
    },
    {
      name: 'LyonJS',
      link: 'https://www.meetup.com/lyonjs/events/284549533/',
      date: '2022-03-31',
      image: LyonJS,
    },
    {
      name: 'Bedrock',
      link: 'https://youtu.be/LvaHeKiwf0o',
      date: null,
      year: '2022',
      image: Bedrock,
    },
  ],
};
