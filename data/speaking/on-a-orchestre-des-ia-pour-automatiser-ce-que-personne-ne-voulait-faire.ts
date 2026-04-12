import AgentTeams from "../../public/static/images/talks/agent-teams.webp";
import TechReady from "../../public/static/images/conferenceLogos/tech-ready.webp";
import type { Talk } from "@/modules/talks/types/Talk";
import { e_idoux } from "@/data/people";

export const OnAOrchestredDesIaPourAutomatiserCeQuePersonneNeVoulaitFaire: Talk = {
    id: "15",
    title: "On a orchestré des IA pour automatiser ce que personne ne voulait faire\u00A0🪄",
    language: "(🇫🇷)",
    description:
        "Et si les tâches les plus ingrates devenaient… invisibles ? 😶‍🌫️\n" +
        "\n" +
        "Migrations de dépendances, nettoyage de dette technique, refactos, mises à jour de config… Ces sujets traînent dans tous les backlogs : tout le monde sait les faire, mais personne ne veut vraiment s'y coller 🙅🏼\n" +
        "\n" +
        "Dans ce retour d'expérience, on raconte comment dans nos équipes on a commencé simplement avec un agent IA, puis comment on en est venu à en orchestrer plusieurs pour aller plus vite sur des tâches redondantes du quotidien. Au-delà du \"on a automatisé\", on partage les vraies questions qu'on s'est posées : comment découper le travail, créer et faire collaborer plusieurs agents custom, leur transmettre les conventions d'un projet (skills, rules...), gérer le parallélisme, et surtout garder le contrôle sur ce qu'ils produisent 🎛️\n" +
        "\n" +
        "On parlera aussi des surprises (bonnes et mauvaises), des limites rencontrées, et de ce que ça peut changer concrètement pour les équipes !\n" +
        "\n" +
        "On vous montre ce qu'on a construit, ce qui a cassé… ce qui a fini par marcher et les vraies questions que ça a soulevées ! 🙋🏼",
    image: AgentTeams,
    format: "Talk",
    speaker: [e_idoux],
    conferences: [
        {
            name: "Tech Ready",
            link: "",
            date: "2026-06-05",
            image: TechReady,
        },
    ],
};
