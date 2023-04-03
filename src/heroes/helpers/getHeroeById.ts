import { heroes } from "../data/heroes"
import { heroe } from "../interfaces/interfaces";


export const getHeroeById = (id: string) => {
    return heroes.find(heroe => heroe.id === id);
}