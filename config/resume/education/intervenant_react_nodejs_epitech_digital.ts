import Epitech from '../../../public/images/companies/epitech.svg';
import {Education} from '../../../modules/resume/types/resume';

export const IntervenantReactNodejsEpitechDigital: Education = {
  title: 'Intervenant',
  subject: 'React.Js / Node.js',
  school: {
    name: 'Epitech Digital',
    logo: Epitech,
  },
  startDate: new Date(2022, 10),
  endDate: new Date(2022, 12),
  location: 'Lyon, Auvergne-Rhône-Alpes, France',
  description: "Provides courses and practical work on React.js and Node.js.",
  tasks: [
    "Creation of a complete course on React.js and Node.js",
    "React & Node.js project setup and tooling",
  ],
  link: undefined,
};