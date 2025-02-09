import {Experience} from '../../../modules/resume/types/resume';
import Bedrock from '../../../public/images/companies/bedrock.svg';

export const DxEngineerBedrockStreaming: Experience = {
  title: 'DX Engineer',
  company: {
    name: 'Bedrock Streaming',
    logo: Bedrock,
  },
  startDate: new Date(2024, 11),
  endDate: undefined,
  location: 'Lyon (France)',
  description:
    "Rôle transverse au sein des équipes du service Web, avec pour mission d’améliorer l’expérience développeur en supprimant les frictions techniques et en garantissant un environnement de travail fluide, performant et évolutif.",
  tasks: [
    "Analyse des pain points du quotidien des développeurs (outils, environnements, process) et priorisation des sujets pour garantir un environnement de travail fluide, performant et augmenter la productivité des équipes.",
    "Modularisation de l’application : analyse et refonte de l’architecture pour réduire les dépendances entre les modules et rendre le code plus maintenable et évolutif. L’objectif est de pouvoir mettre à jour des parties spécifiques de la stack technique sans impacter l’ensemble de l’application.",
    "Accompagnement des équipes sur des problématiques techniques, notamment le maintien et évolution de la stack technique : réduction de la dette technique sur les packages clés, modernisation des outils et mise à jour des standards de développement pour intégrer les meilleures pratiques actuelles.",
    "Optimisation et simplification de la configuration Webpack : analyse et nettoyage de la configuration actuelle, rédaction de RFC & ADR pour valider les choix techniques, tout en explorant des alternatives plus performantes 🚀.",
    "Amélioration et maintien du Design System : collaboration avec les équipes de Bedrock pour synchroniser les mises à jour des composants et simplifier leur intégration 🖌️.",
    "Optimisation des tests automatisés : restructuration des tests end-to-end pour obtenir des résultats plus rapides, faciliter le debugging et améliorer les performances de la CI/CD 🧪.",
  ],

  link: undefined,
};