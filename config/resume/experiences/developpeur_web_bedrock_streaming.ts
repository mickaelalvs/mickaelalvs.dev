import BedrockStreaming from '../../../public/images/companies/bedrock.svg';
import {Experience} from '../../../modules/resume/types/resume';

export const DeveloppeurWebBedrockStreaming: Experience = {
  title: 'Développeur Web',
  company: {
    name: 'Bedrock Streaming',
    logo: BedrockStreaming,
  },
  startDate: new Date(2021, 9),
  endDate: new Date(2023, 10),
  location: 'Lyon (France)',
  description: "Development of a full-scope streaming platforms with over 45 million users.",
  tasks: [
    "Frontend development of a white-label streaming platform (e.g., 6play, Videoland, Salto, etc.).",
    "Integration of an atomic, multi-customer design system.",
    "Implementation of continuous integration and delivery (CI/CD) using GitHub Actions.",
    "Ensuring stability and setting up a monitoring and alerting stack.",
    "Optimizing application performance & accessibility.",
    "Technical lead for feature management and follow-up.",
    "Writing technical documentation.",
  ],
  link: undefined,
};