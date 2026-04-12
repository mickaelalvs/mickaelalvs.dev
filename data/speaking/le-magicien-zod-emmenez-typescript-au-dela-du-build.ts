import ZodTalk from '../../public/static/images/talks/zod.webp';
import TouraineTech from '../../public/static/images/conferenceLogos/touraineTech.svg';
import SunnyTech from '../../public/static/images/conferenceLogos/sunnyTech.svg';
import type {Talk} from '@/modules/talks/types/Talk';
import {l_audart} from '@/data/people';

export const LeMagicienZodEmmenezTypeScriptAuDelaDuBuild: Talk = {
  id: '13',
  title: 'Le Magicien Zod\u00A0: Emmenez TypeScript au-delà du build 🧙',
  language: '(🇫🇷)',
  description:
    'Vous a-t-on déjà parlé du merveilleux royaume de TypeScript ? Un monde enchanté où les types règnent en maîtres, apportant sécurité et sérénité aux développeurs ✨\n' +
    '\n' +
    "Mais hélas, cette magie a ses limites… À la frontière du build, elle s'évanouit, laissant place aux incertitudes du runtime. Types disparus, données imprévisibles… et voilà votre application en danger ! 😱\n" +
    '\n' +
    'Heureusement, le grand Zod veille sur vous ! Avec ses pouvoirs mystiques, il prolonge la magie des types bien au-delà de la compilation... Validation de requêtes réseau, sécurisation des entrées utilisateur, transformation de données : Zod vous offre un contrôle absolu sur vos types, même en runtime 🪄\n' +
    '\n' +
    "Dans ce talk, nous partirons à la découverte de ce formidable outil, avec des cas d'usage concrets et des astuces pour pousser TypeScript encore plus loin qu'à votre habitude ! 🧙",
  image: ZodTalk,
  format: 'Talk',
  speaker: [l_audart],
  conferences: [
    {
      name: 'Touraine Tech',
      link: '',
      date: '2026-02-12',
      image: TouraineTech,
    },
    {
      name: 'Sunny Tech',
      link: '',
      date: '2026-07-03',
      image: SunnyTech,
    },
  ],
};
