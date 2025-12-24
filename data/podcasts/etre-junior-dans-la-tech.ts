import type { Podcast } from "@/modules/podcasts/types/Podcast";
import ZenikastJuniorDansLaTech from "../../public/static/images/talks/zenikast-junior-dans-la-tech.webp";
import { j_lavigne, a_caron, t_gianella } from "@/data/people";

export const EtreJuniorDansLaTech: Podcast = {
  title: "Être junior dans la tech",
  language: "fr",
  description:
    "Débuter dans le monde de la tech en tant que junior peut être à la fois excitant et intimidant. Entre les attentes, les défis techniques, et la nécessité de trouver sa place dans une équipe, le parcours d'un développeur junior est semé d'embûches mais aussi de belles opportunités.\n" +
    "\n" +
    "Dans ce podcast, nous explorons les réalités du quotidien d'un junior dans la tech : comment gérer la pression, apprendre efficacement, s'intégrer dans une équipe, et surtout, comment grandir professionnellement. Nos invités partagent leurs expériences, leurs conseils et leurs astuces pour naviguer dans cet univers en constante évolution.\n",
  image: ZenikastJuniorDansLaTech,
  date: "2025-05-23",
  speaker: [j_lavigne, a_caron, t_gianella],
  videoId: "4yBqGEsjy2E",
  platformLinks: [
    {
      platform: "Spotify",
      link: "https://open.spotify.com/episode/41mJ25fVQNBY9EQbCV6a1P?si=HR5YG35dRu2mHjICxRAcYA",
    },
    {
      platform: "Deezer",
      link: "https://dzr.page.link/1mbz8nq7B63Sjcaw5",
    },
    {
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=4yBqGEsjy2E",
    },
  ],
};

