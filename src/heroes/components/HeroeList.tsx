
import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroeCard } from "./";

interface heroeListProps {
    publisher: string
}


export const HeroeList = ({ publisher }: heroeListProps) => {
    // el hook useMemo permite memorizar los valores, entonces la constante hereos solo va a cambiar cuando
    // el useMemo identifique que el publisher cambio, lo que quiere decir, que el useMemo es una función que memoriza un valor
    // la cual tiene una función callback que solo va a llamar el getHeroesByPublisher 
    // cuando el publisher que viene por la URL cambie.
    // el valor del retorno del callback es lo que retorna la función getHeroesByPublisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map(heroe =>
                    <HeroeCard key={heroe.id} heroe={heroe} />
                )}
            </div>
        </>
    )
}
