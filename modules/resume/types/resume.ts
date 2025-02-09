import {StaticImageData} from 'next/image';
import {ConsultantZenika} from '../../../config/resume/experiences/consultant_zenika';
import {DeveloppeurWebBedrockStreaming} from '../../../config/resume/experiences/developpeur_web_bedrock_streaming';
import {LeadDeveloperReactEnedis} from '../../../config/resume/experiences/lead_developer_react_enedis';
import {DxEngineerBedrockStreaming} from '../../../config/resume/experiences/dx_engineer_bedrock_streaming';
import {PresidentCoFondateurDevFestLyon} from '../../../config/resume/community/president_co_fondateur_devfest_lyon';
import {SecretaireCoOrganisateurLyonJS} from '../../../config/resume/community/secretaire_co_organisateur_lyonjs';
import {AppwriteHero} from '../../../config/resume/community/appwrite_hero';
import {RemotionExpert} from '../../../config/resume/community/remotion_expert';
import {
  IntervenantReactNodejsEpitechDigital
} from '../../../config/resume/education/intervenant_react_nodejs_epitech_digital';
import {
  IntervenantConceptionApplicationFlutterESGI
} from '../../../config/resume/education/intervenant_conception_application_flutter_esgi';
import {
  EnseignantConceptionProgrammationWebLyon1
} from '../../../config/resume/education/enseignant_conception_programmation_web_lyon1';

type Company = {
  name: string;
  logo: StaticImageData;
}

type technology = {
  name: string;
  logo: StaticImageData;
}

export type Experience = {
  title: string;
  company: Company;
  startDate: Date;
  endDate?: Date;
  description?: string;
  location: string;
  tasks?: string[];
  technologies?: technology[];
  link?: string;
}

export type Community = {
  title: string;
  company: Company;
  startDate: Date;
  endDate?: Date;
  location?: string;
  description?: string;
  tasks?: string[];
  link?: string;
}

export type Education = {
  title: string;
  subject?: string;
  school: Company;
  startDate: Date;
  endDate?: Date;
  location: string;
  description?: string;
  technologies?: technology[];
  tasks?: string[];
  link?: string;
}

export const experiences: Experience[] = [
  DxEngineerBedrockStreaming,
  ConsultantZenika,
  LeadDeveloperReactEnedis,
  DeveloppeurWebBedrockStreaming,
];

export const communities: Community[] = [
  PresidentCoFondateurDevFestLyon,
  SecretaireCoOrganisateurLyonJS,
  AppwriteHero,
  RemotionExpert,
];

export const educations: Education[] = [
  IntervenantReactNodejsEpitechDigital,
  EnseignantConceptionProgrammationWebLyon1,
  IntervenantConceptionApplicationFlutterESGI,
];