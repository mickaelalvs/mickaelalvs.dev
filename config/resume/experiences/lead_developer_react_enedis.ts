import Enedis from '../../../public/images/companies/enedis.svg';
import {Experience} from '../../../modules/resume/types/resume';

export const LeadDeveloperReactEnedis: Experience = {
  title: 'Lead Developer React',
  company: {
    name: 'Enedis',
    logo: Enedis,
  },
  startDate: new Date(2023, 12),
  endDate: new Date(2024, 11),
  location: 'Lyon (France)',
  description: 'Conduite de projets web frontend et accompagnement technique des équipes sur React.',
  tasks: [
    "Étude de l’architecture existante et mise en place l'outillage de projet React moderne.",
    "Conduite de la migration d'une application de Vue.js à React.",
    "Participation à l’intégration et au développement d'un design system.",
    'Création de packages React, renforçant la collaboration et la réutilisabilité du code entre équipes.',
    'Mise en place de tests unitaires, d’intégrations et fonctionnels.',
    "Accompagnement d'équipes pour la montée en compétence et les bonnes pratiques React et frontend.",
    'Travail en équipe avec du Pair Programming et de la Mob Programming.',
    'Rôle de référent et d’expert technique contribuant activement au cadrage des sujets, au suivi de leur avancement et aux choix techniques sur la partie frontend.',
    'Animation d’ateliers et de formations.',
  ],
  link: undefined,
};
