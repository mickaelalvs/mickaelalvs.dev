import type { Podcast } from "@/modules/podcasts/types/Podcast";
import ZenikastCommunautesIt from "../../public/static/images/talks/zenikast-communautes-it.webp";
import { a_nava, l_audart, jp_baconnais, j_landure } from "@/data/people";

export const CommunautesIt: Podcast = {
  title: "Les communautés IT",
  language: "fr",
  description:
    "Dans le monde de la tech, les communautés jouent un rôle central en permettant de faire vivre des projets, de fédérer des talents et de créer de l'émulation autour d'initiatives inspirantes. Que ce soit en entreprise, dans l'open source ou à travers des programmes comme GDG, Devfest, Women Techmakers, ou encore le programme Heroes, ces communautés sont un moteur d'innovation et de collaboration.\n" +
    "\n" +
    "Dans ce podcast, nous plongeons au cœur de ces communautés, en explorant les raisons pour lesquelles des passionnés de tech choisissent de s'y investir. À travers des échanges riches et variés, nos invités partagent leurs expériences : comment ces communautés naissent, comment elles grandissent, et surtout, quels sont les bénéfices qu'elles apportent, que ce soit sur le plan personnel, professionnel ou collectif.\n",
  image: ZenikastCommunautesIt,
  date: "2024-08-22",
  speaker: [a_nava, l_audart, jp_baconnais, j_landure],
  videoId: "wtLd2ABm0Xs",
  platformLinks: [
    {
      platform: "Spotify",
      link: "https://open.spotify.com/show/5zKv7W4Zm5B6t2Q8mGQZ2Q",
    },
    {
      platform: "Apple Podcast",
      link: "https://podcasts.apple.com/fr/podcast/les-communaut%C3%A9s-it/id1569031417",
    },
    {
      platform: "Deezer",
      link: "https://www.deezer.com/fr/show/2570912",
    },
    {
      platform: "YouTube",
      link: "https://www.youtube.com/channel/UC2V4Zo3K4Zm5B6t2Q8mGQZ2Q",
    },
  ],
};

