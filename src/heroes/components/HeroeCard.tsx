import { heroe } from "../interfaces/interfaces"

interface heroeCardProps {
    heroe: heroe
}

export const HeroeCard = ({ heroe }: heroeCardProps) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    console.log(id)

    const heroeImageUrl = `assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroeImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card.title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <p>{characters}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
