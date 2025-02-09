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
    'A cross-functional role within the Web service teams, focused on improving the developer experience by eliminating technical friction and ensuring a smooth, high-performance, and scalable work environment.',
  tasks: [
    'Analyzing daily pain points for developers (tools, environments, processes) and prioritizing issues to ensure a smooth and high-performing work environment, boosting team productivity.',
    'Modularizing the application: analyzing and redesigning the architecture to reduce dependencies between modules, making the code more maintainable and scalable. The goal is to allow updates to specific parts of the tech stack without impacting the entire application.',
    'Supporting teams with technical challenges, particularly maintaining and evolving the tech stack: reducing technical debt in key packages, modernizing tools, and updating development standards to integrate current best practices.',
    'Optimizing and simplifying the Webpack configuration: analyzing and cleaning up the current setup, drafting RFCs & ADRs to validate technical choices, while exploring more performant alternatives 🚀.',
    'Improving and maintaining the Design System: collaborating with the Bedrock teams to synchronize component updates and simplify their integration 🖌️.',
    'Optimizing automated tests: restructuring end-to-end tests for faster results, easier debugging, and improved CI/CD performance 🧪.',
  ],

  link: undefined,
};
