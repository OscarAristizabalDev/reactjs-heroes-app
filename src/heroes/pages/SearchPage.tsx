import { FormEvent, FormEventHandler, SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { HeroeCard } from "../components";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation(); // permite obtener la información de la página actual

    // location.search contiene todos lo queryParams enviados por la URL
    // Se obtiene la q del queryParam, y si no viene será igual a ''
    const { q = '' } = queryString.parse(location.search);

    const { onCambiarInput, searchText }: any = useForm({
        searchText: ''
    });

    const onSearchHeroe = (event: SyntheticEvent) => {
        event.preventDefault(); // evita la propagación del formulario

        if (searchText.trim().length <= 1) return;

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
                    <form onSubmit={onSearchHeroe}>
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

                    <div className="alert alert-primary">
                        Search a hero
                    </div>

                    <div className="alert alert-danger">
                        There's no results to <b>{q}</b>
                    </div>

                    {/* <HeroeCard heroe={}></HeroeCard> */}
                </div>
            </div>
        </>
    )
}
