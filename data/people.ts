export interface Person {
    id: string;
    name: string;
    picture: string;
    social?: string;
}

export const jf_farge: Person = {
    id: "jf_farge",
    name: "Jean-François Farge",
    picture: "https://github.com/slumbering.png",
    social: "https://github.com/slumbering",
};

export const t_gianella: Person = {
    id: "t_gianella",
    name: "Thomas Gianella",
    picture: "https://github.com/TGianella.png",
    social: "https://github.com/TGianella",
};

export const l_audart: Person = {
    id: "l_audart",
    name: "Lucas Audart",
    picture: "https://github.com/Slocaly.png",
    social: "https://bsky.app/profile/slocaly.bsky.social",
};

export const e_idoux: Person = {
    id: "e_idoux",
    name: "Etienne Idoux",
    picture: "https://github.com/PopsIDX.png",
    social: "https://twitter.com/eidoux",
};

export const j_lavigne: Person = {
    id: "j_lavigne",
    name: "Johana Lavigne",
    picture: "https://github.com/JohLav.png",
    social: "https://github.com/JohLav",
};

export const a_nava: Person = {
    id: "a_nava",
    name: "Adriana Nava Aguilar",
    picture: "https://github.com/quilaztlia.png",
    social: "https://x.com/quilaztlia",
};

export const a_caron: Person = {
    id: "a_caron",
    name: "Antoine Caron",
    picture: "https://github.com/slashgear.png",
    social: "https://x.com/Slashgear_",
};

export const jp_baconnais: Person = {
    id: "jp_baconnais",
    name: "Jean-Philippe Baconnais",
    picture: "https://github.com/jeanphi-baconnais.png",
    social: "https://x.com/JPhi_Baconnais",
};

export const j_landure: Person = {
    id: "j_landure",
    name: "Julien Landuré",
    picture: "https://github.com/jlandure.png",
    social: "https://x.com/jlandure",
};

export const h_sablonniere: Person = {
    id: "h_sablonniere",
    name: "Hubert Sablonnière",
    picture: "https://github.com/hsablonniere.png",
    social: "https://x.com/hsablonniere",
};

const people: Record<string, Person> = {
    jf_farge,
    t_gianella,
    l_audart,
    e_idoux,
    j_lavigne,
    a_nava,
    a_caron,
    jp_baconnais,
    j_landure,
    h_sablonniere,
};

export function getPerson(id: string): Person | undefined {
    return people[id];
}

export function getPeople(ids: string[]): Person[] {
    return ids.map((id) => people[id]).filter(Boolean);
}
