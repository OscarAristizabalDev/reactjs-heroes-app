import { FormEvent, FormEventHandler, SyntheticEvent, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { HeroeCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHeroeByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation(); // permite obtener la información de la página actual

    // location.search contiene todos lo queryParams enviados por la URL
    // Se obtiene la q del queryParam, y si no viene será igual a ''
    const { q = '' } = queryString.parse(location.search);
    // el hook useMemo permite memorizar los valores, entonces la constante hereos solo va a cambiar cuando
    // el useMemo identifique que el publisher cambio, lo que quiere decir, que el useMemo es una función que memoriza un valor
    // la cual tiene una función callback que solo va a llamar el getHeroesByPublisher
    // cuando el publisher que viene por la URL cambie.
    // el valor del retorno del callback es lo que retorna la función getHeroesByPublisher
    const heroes = useMemo(() => getHeroeByName(q as string), [q]);

    const showSearch = (q?.length === 0);
    const showError = (q?.length as number > 0) && heroes.length === 0;

    const { onCambiarInput, searchText }: any = useForm({
        searchText: q
    });

    const onSearchSubmit = (event: SyntheticEvent) => {
        event.preventDefault(); // evita la propagación del formulario

        //if (searchText.trim().length <= 0) return;

        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h1>Searching</h1>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a Heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onCambiarInput}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h1>Results</h1>
                    <hr />

                    {/* Esto es una manera de hacer mediante el condicional ternario */}
                    {/* {
                        (q === '')
                            ? <div className="alert alert-primary">Search a hero</div>
                            : (heroes.length <= 0)
                            && <div className="alert alert-danger">There's no results to <b>{q}</b></div>
                    } */}

                    <div className="alert alert-primary animate__animated animate__bounce"
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__bounce"
                        style={{ display: showError ? '' : 'none' }}>
                        There's no results to <b>{q}</b>
                    </div>


                    {
                        heroes.map(heroe =>
                            <HeroeCard key={heroe.id} heroe={heroe} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
