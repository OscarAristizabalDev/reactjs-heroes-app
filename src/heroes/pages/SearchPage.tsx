import { HeroeCard } from "../components"

export const SearchPage = () => {
    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h1>Searching</h1>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Search a Heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
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
                        There's no results to <b>ABC</b>
                    </div>

                    {/* <HeroeCard heroe={}></HeroeCard> */}
                </div>
            </div>
        </>
    )
}
