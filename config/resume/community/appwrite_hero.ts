import Appwrite from '../../../public/images/companies/appwrite.svg';
import {Community} from '../../../modules/resume/types/resume';

export const AppwriteHero: Community = {
  title: 'Appwrite Hero',
  company: {
    name: 'Appwrite',
    logo: Appwrite,
  },
  startDate: new Date(2023, 3),
  endDate: undefined,
  location: undefined,
  description:
    "Membre ambassadeur du programme Appwrite Hero, regroupant des développeurs experts d'Appwrite pour réaliser des projets, des conférences, et aider la communauté.",
  tasks: [],
  link: 'https://appwrite.io/heroes',
};
