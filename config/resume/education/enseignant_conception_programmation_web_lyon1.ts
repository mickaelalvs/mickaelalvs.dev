import Lyon1 from '../../../public/images/companies/ucbl.svg';
import {Education} from '../../../modules/resume/types/resume';

export const EnseignantConceptionProgrammationWebLyon1: Education = {
  title: 'Enseignant / Intervenant',
  subject: 'Conception & Programmation Web',
  school: {
    name: 'Université Lyon 1',
    logo: Lyon1,
  },
  startDate: new Date(2024, 1),
  endDate: new Date(2024, 6),
  location: 'Lyon, Auvergne-Rhône-Alpes, France',
  description: "Dispense de cours et travaux pratiques sur la conception et la programmation d'applications Web.",
  tasks: [
    "Setup et Tooling d'application Web.",
    "Programmation Web Javascript.",
  ],
  link: 'http://lifweb.pages.univ-lyon1.fr/',
};