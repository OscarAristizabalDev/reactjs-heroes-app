import { heroes } from "../data/heroes"


export const getHeroeById = (id: string) => {
    return heroes.find(heroe => heroe.id === id);
}