import { heroes } from "../data/heroes";

export const getHeroeByName = (name: string) => {

    name = name.toLocaleLowerCase().trim();
    if (name.length == 0) return [];

    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));

}