import BundlerTalk from "../../public/static/images/talks/wip.webp";
import DevQuest from "../../public/static/images/conferenceLogos/devquest.svg";
import type { Talk } from "@/modules/talks/types/Talk";
import { e_idoux } from "@/data/people";

export const DuFrigoALAssietteCeQueMijoteVraimentVotreBundlerJavaScript: Talk = {
    id: "14",
    title: "Du frigo à l'assiette\u00A0: ce que mijote vraiment votre bundler JavaScript 🧑🏼‍🍳",
    language: "(🇫🇷)",
    description:
        "Pour faire un site aujourd'hui, il suffit théoriquement de trois ingrédients : de l'HTML, du CSS et du JavaScript. 🍳 La recette semble très simple… jusqu'à ce que l'on ouvre le frigo des technologies. Aujourd'hui, personne ne cuisine avec ces ingrédients \"bruts\", vous avez du TypeScript, du SCSS, des images, des polices, des JSON… et même parfois du code dont vous n'avez pas besoin ! 🥴\n" +
        "\n" +
        "C'est là qu'intervient le bundler 🧑🏼‍🍳 Comme un chef, il prend tous ces ingrédients éparpillés, les prépare, les assemble et les transforme en un plat prêt à être servi au navigateur. Au menu : transpilation, minification, tree-shaking et code splitting… autant d'étapes indispensables qui rendent votre application optimisée et performante.\n" +
        "\n" +
        "Installez‑vous confortablement et mettez les pieds sous la table, dans ce talk nous lèverons le couvercle pour enfin comprendre l'intérieur de votre bundler 🥘",
    image: BundlerTalk,
    format: "Talk",
    speaker: [e_idoux],
    conferences: [
        {
            name: "DevQuest",
            link: "",
            date: "2026-06-12",
            image: DevQuest,
        },
    ],
};
