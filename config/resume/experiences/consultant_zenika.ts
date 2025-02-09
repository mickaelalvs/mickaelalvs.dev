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
    "Guiding clients in developing resilient and interactive web applications.",
    "Managing three other consultants at Zenika (since 2024).",
    "Leading the frontend developer community through events, conferences, and workshops.",
    "Conducting technical interviews.",
    "Speaker at multiple conferences across France."
  ],
  link: undefined,
};