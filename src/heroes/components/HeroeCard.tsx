import { Link } from "react-router-dom";
import { heroe } from "../interfaces/interfaces"
import { CharactersByHeroe } from ".";

interface heroeCardProps {
    heroe: heroe
}

export const HeroeCard = ({ heroe }: heroeCardProps) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    console.log(id)

    const heroeImageUrl = `assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__bounce">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroeImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card.title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/* {
                                // Si el alter ego es diferente a la characters, muestre los characters
                                (alter_ego !== characters) && <p>{characters}</p>
                            } */}

                            {/* Se crea este componente para evitar la condicional anterior y que la condicional se haga dentro del componenete */}
                            <CharactersByHeroe alterEgo={alter_ego} characters={characters}></CharactersByHeroe>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${heroe.id}`}>
                                Más
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
