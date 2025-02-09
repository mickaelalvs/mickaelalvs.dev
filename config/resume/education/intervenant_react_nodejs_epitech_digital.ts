import Epitech from '../../../public/images/companies/epitech.svg';
import {Education} from '../../../modules/resume/types/resume';

export const IntervenantReactNodejsEpitechDigital: Education = {
  title: 'Intervenant',
  subject: 'React.Js / Node.Js',
  school: {
    name: 'Epitech Digital',
    logo: Epitech,
  },
  startDate: new Date(2022, 10),
  endDate: new Date(2022, 12),
  location: 'Lyon, Auvergne-Rhône-Alpes, France',
  description: "Dispense des cours et travaux pratiques sur React.Js et Node.Js.",
  tasks: [
    "Développement React.Js et Node.Js.",
    "Projet React.Js.",
  ],
  link: undefined,
};