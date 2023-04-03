import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";

export const HeroPage = () => {

    // Custom hook de react router dom que no sirve para obtener los parametros por URL
    const { id } = useParams();
    const heroe = getHeroeById(id as string);

    if (!heroe) {
        return <Navigate to={'/marvel'} />
    }

    return (
        <h1>HeroPage</h1>
    )
}
