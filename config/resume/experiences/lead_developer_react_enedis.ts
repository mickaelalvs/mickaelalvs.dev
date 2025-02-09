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
  description: "Leading React web projects and providing technical support to teams.",
  tasks: [
    "Analyzing the existing architecture and implementing modern React project tooling.",
    "Managing the migration of an application from Vue.js to React.",
    "Contributing to the integration and development of a design system.",
    "Creating React packages to enhance collaboration and code reusability across teams.",
    "Setting up unit, integration, and functional tests.",
    "Supporting teams in skill development and best practices for React and frontend development.",
    "Collaborating through Pair Programming and Mob Programming.",
    "Serving as a technical lead and expert, actively contributing to the scope definition, tracking progress, and making frontend technical decisions.",
    "Leading workshops and training sessions."
  ],
  link: undefined,
};
