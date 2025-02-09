import Zenika from '../../../public/images/companies/zenika.svg';
import {Experience} from '../../../modules/resume/types/resume';

export const ConsultantZenika: Experience = {
  title: 'Consultant & Manager',
  company: {
    name: 'Zenika',
    logo: Zenika,
  },
  startDate: new Date(2021, 3),
  endDate: undefined,
  location: 'Lyon (France)',
  description: undefined,
  tasks: [
    "Accompagnement des clients dans le développement d'applications web résilientes et interactives.",
    "Management de 3 autres consultants au sein de Zenika (Depuis de 2024)",
    "Animation de la communauté des développeurs frontend (événements, conférences, ateliers)",
    "Réalisation d'entretiens techniques.",
  ],
  link: undefined,
};