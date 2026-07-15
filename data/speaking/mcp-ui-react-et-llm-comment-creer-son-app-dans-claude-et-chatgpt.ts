import McpUiTalk from '../../public/static/images/talks/wip.webp';
import Volcamp from '../../public/static/images/conferenceLogos/volcamp.png';
import type {Talk} from '@/modules/talks/types/Talk';
import {m_mure} from '@/data/people';

export const McpUiReactEtLlmCommentCreerSonAppDansClaudeEtChatGpt: Talk = {
  id: '16',
  title: 'MCP UI, React et LLM : comment créer son App dans Claude & ChatGPT 🦇',
  language: 'fr',
  description:
    'Les agents conversationnels sont devenus bien plus qu’un jouet, c’est devenu un véritable assistant quotidien pour beaucoup d’entre nous.\n' +
    '\n' +
    'Au début limité à des données apprises lors de son entraînement, l’apparition des RAGs puis des serveurs MCPs ont permis de d’outrepasser ces limites.\n' +
    '\n' +
    'Une nouvelle limite vient d’être levée grâce à l’arrivée des MCP UI, qui permet maintenant d’intégrer vos composants front directement dans votre conversation.\n' +
    '\n' +
    'Vous pouvez maintenant ajouter votre wording, vos images et toute votre identité visuelle directement dans le fil d’une conversation.\n' +
    '\n' +
    'Dans ce talk, je vais vous montrer étape par étape, au travers d’un live coding, comment construire votre application MCP pour ajouter vos composants frontend dans votre agent conversationnel préféré.',
  image: McpUiTalk,
  format: 'Talk',
  speaker: [m_mure],
  conferences: [
    {
      name: 'Volcamp',
      link: 'https://www.volcamp.io/talks/d1t2s6',
      date: '2026-10-01',
      image: Volcamp,
    },
  ],
};
