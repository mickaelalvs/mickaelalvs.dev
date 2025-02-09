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
    'Ambassador member of the Appwrite Hero programme, bringing together Appwrite expert developers to carry out projects, give talks and help the community.',
  tasks: [],
  link: 'https://appwrite.io/heroes',
};
