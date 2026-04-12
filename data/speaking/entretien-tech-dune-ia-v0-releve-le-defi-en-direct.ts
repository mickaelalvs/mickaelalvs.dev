import v0 from '../../public/static/images/talks/v0.webp';
import DevfestStrasbourg2024 from '../../public/static/images/conferenceLogos/devfest-strasbourg-2024.webp';
import Zenika from '../../public/static/images/conferenceLogos/zenika.svg';
import type {Talk} from '@/modules/talks/types/Talk';
import {e_idoux} from '@/data/people';

export const EntretienTechDuneIaV0ReleveLeDefiEnDirect: Talk = {
  id: '6',
  title: 'Entretien tech d’une IA\u00A0: v0 relève le défi en direct 🤖',
  language: '(🇫🇷)',
  description:
    "Les temps sont durs, et les développeurs experts se font rares… Aujourd'hui, nous sommes en quête de notre prochain héros, et il semblerait que l'IA v0 soit le candidat idéal… 🤖\n" +
    '\n' +
    'Débusquer un tel profil relève de l’exploit 😰, mais nous avons réussi à programmer un entretien technique avec lui ! Ensemble, nous allons découvrir si v0 a les épaules assez solides pour relever tous les défis !\n' +
    '\n' +
    'Mais cette fois, pas question de le faire seuls ! Pour évaluer v0, nous avons besoin de vous 🫵🏼 ! C’est tous ensemble que nous allons tester ses limites, en lui posant les questions les plus techniques – et les plus farfelues – pour voir s’il peut vraiment se mesurer aux attentes d’un expert frontend. 🥇\n' +
    '\n' +
    'Saura-t-il créer des interfaces parfaites en un temps record ? Cet entretien tech collaboratif pourrait bien être le moment décisif de l’année pour dénicher votre futur binôme ! 👥 Préparez vos questions et venez mettre v0 à l’épreuve !',
  image: v0,
  format: 'Talk',
  videoId: 'VmCwqJ4F3wo',
  slidesUrl: 'reveal-v0-interview.vercel.app',
  speaker: [e_idoux],
  conferences: [
    {
      name: 'Devfest Strasbourg',
      link: '',
      date: '2024-11-21',
      image: DevfestStrasbourg2024,
    },
    {
      name: 'Conférence interne Zenika',
      link: 'https://youtu.be/mA6dmVYBfdA',
      date: null,
      year: '2023',
      image: Zenika,
    },
  ],
};
