import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

    // Custom hook de react router dom que no sirve para obtener los parametros por URL
    const { id } = useParams();
    // el hook useMemo permite memorizar los valores, entonces la constante hereo solo va a cambiar cuando
    // el useMemo identifique que el id cambio, lo que quiere decir, que el useMemo es una función que memoriza un valor
    // la cual tiene una función callback que solo va a llamar el getHeroeById cuando el id que viene por la URL cambie.
    // el valor del retorno del callback es lo que retorna la función getHeroeById
    const heroe = useMemo(() => getHeroeById(id as string), [id]);
    const navigate = useNavigate();

    const onNavigateBack = () => {
        // -1 permite navegar a la pantalla anterior
        navigate(-1);
    }

    if (!heroe) {
        return <Navigate to={'/marvel'} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={heroe.superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {heroe.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance}</li>
                    <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{heroe.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>
        </div>

    )
}
