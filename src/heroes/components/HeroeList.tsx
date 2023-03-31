
import { getHeroesByPublisher } from "../helpers";
import { HeroeCard } from "./";

interface heroeListProps {
    publisher: string
}


export const HeroeList = ({ publisher }: heroeListProps) => {

    const heroes = getHeroesByPublisher(publisher);

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
