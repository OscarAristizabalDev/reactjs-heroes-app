
import { getHeroesByPublisher } from "../helpers";
import { comic } from "../interfaces/interfaces"

interface heroeListProps {
    publisher: string
}


export const HeroeList = ({publisher}: heroeListProps) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <>
            <ul>
                {heroes.map(heroe =>
                    <li key={heroe.id}>{heroe.superhero}</li>
                )}
            </ul>
        </>
    )
}
