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
  description: "Développement d'une plateforme de streaming en marque blanche qui compte plus de 16 millions d'utilisateurs actifs.",
  tasks: [
    "Développement Front end d'une plateforme de streaming en marque blanche (e.g. 6play, Videoland, Salto ...).",
    "Intégration d'un design system atomique multi-customer.",
    "Mise en place de l'intégration continue et livraison continue avec GitHub Actions.",
    "Maintien de la stabilité et mise en place d'une stack de monitoring et alerting.",
    "Optimisation des performances de l'application.",
    "Référent technique pour la gestion et le suivi de feature.",
    "Rédaction de documentations techniques.",
  ],
  link: undefined,
};